import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomValidators } from '../../validations/custom-validators';

@Component({
  selector: 'app-register-student',
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register-student.html',
  styleUrl: './register-student.css',
})
export class RegisterStudent {


  onReset() {
    this.registerForm.reset();
    this.registerForm.markAsPristine();
    this.registerForm.markAsUntouched();
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.registerForm.reset();
    this.registerForm.markAsPristine();
    this.registerForm.markAsUntouched();

  }

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, CustomValidators.noWhitespace()]],
      lastName: ['', [Validators.required, CustomValidators.noWhitespace()]],
      email: ['', [Validators.required, Validators.email, CustomValidators.noWhitespace()]],
      password: ['', [Validators.required, Validators.minLength(6), CustomValidators.noWhitespace()]],
      confirmPassword: ['', [Validators.required]],
      enrollmentDate: [new Date().toISOString().substring(0, 10), [Validators.required]]

    });
  }

}
