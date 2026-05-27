import { Component, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomValidators } from '../../validations/custom-validators';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-register-student',
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register-student.html',
  styleUrl: './register-student.css',
})
export class RegisterStudent {


  @ViewChild('form') formDirective!: NgForm;

  onReset() {

    const d = new Date();
    var currentDate = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}T${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
    this.registerForm.markAsPristine();
    this.registerForm.markAsUntouched();
    this.registerForm.reset(); 
    this.registerForm.reset({ enrollmentDate: currentDate });
  }

  onSubmit() {

    var student = {
      firstName: this.registerForm.get('firstName')?.value,
      lastName: this.registerForm.get('lastName')?.value,
      enrollmentDate: this.registerForm.get('enrollmentDate')?.value
    };

    var applicationUser = {
      student: student,
      userName: this.registerForm.get('userName')?.value,
      email: this.registerForm.get('email')?.value,
      plainPassword: this.registerForm.get('passwords')?.get('password')?.value
    };

    console.log(this.registerForm.value);
    console.log(applicationUser);
    this.formDirective.resetForm();
    this.onReset();

  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (!password || password.trim().length === 0) {
      return null;
    }

    return password === confirmPassword ? null : { passwordMismatch: true };
  };



  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {


    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const localDateTimeString = `${year}-${month}-${day}T${hours}:${minutes}`;



    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, CustomValidators.noWhitespace()]],
      lastName: ['', [Validators.required, CustomValidators.noWhitespace()]],
      userName: ['', [Validators.required, CustomValidators.noWhitespace(), Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email, CustomValidators.noWhitespace()]],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6), CustomValidators.noWhitespace()]],
        confirmPassword: ['', []]
      }, { validators: [this.passwordMatchValidator] }),
      enrollmentDate: [
        (() => {
          const d = new Date();
          return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}T${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
        })(),
        [Validators.required]
      ]

    });
  }

}
