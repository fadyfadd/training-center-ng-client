import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { Authentication } from '../authentication'
import { NgStyle } from "../../../node_modules/@angular/common/types/_common_module-chunk";
import { UserRole } from '../enums/user-role';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  public admin = UserRole.Administrator;
  public student = UserRole.Student;

  private router = inject(Router);
  private authentication = inject(Authentication);

  public isLogoutVisible(): boolean {
    return this.authentication.getIsAuthenticated();
  }

  public isLoginVisible(): boolean {
    return !this.authentication.getIsAuthenticated();
  }

  public getUserRole(): UserRole | null | undefined {
    const role = this.authentication.getJwtToken()?.role;
    return role;
  }

  logout(event: PointerEvent) {

    event.preventDefault();
    this.router.navigate(['/login']);
  }
}
