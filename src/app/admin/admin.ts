import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet, Router, RouterLinkActive } from "@angular/router";
 
@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {

  private router = inject(Router);
  logout(event: MouseEvent) {
    event.preventDefault();
    this.router.navigate(['/login']);
  }
}
