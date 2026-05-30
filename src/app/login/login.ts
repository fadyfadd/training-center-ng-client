import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { APP_BACKEND_SERVER, ConfigService } from '../config-service';
import { JwtTokenDto } from '../dtos/jwt-token';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserRole } from '../enums/user-role';

@Component({
  selector: 'app-login',
  imports: [MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private http = inject(HttpClient);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  private fb = inject(FormBuilder);

  loginForm: FormGroup = this.fb.nonNullable.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });


  private configService: any = inject(ConfigService);

  public onSubmit() {
    if (this.loginForm.invalid)
      return;
    let backendAddress = this.configService.get(APP_BACKEND_SERVER);
    this.http.post<JwtTokenDto>(`${backendAddress}api/user/login`, {
      userName: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value

    }).subscribe(
      {
        next: (response: JwtTokenDto) => {

          if (response.role === UserRole.Student) {
            this.router.navigate(["/student", "home"]);
          }          
        },
        error: (error: any) => {
          this.snackBar.open("Login failed. Please check your credentials and try again.", "Close", {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          });
        }
      }
    );

  }

}
