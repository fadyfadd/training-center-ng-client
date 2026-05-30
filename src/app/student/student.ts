import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-student',
  imports: [RouterOutlet , RouterLink , RouterLinkActive],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {}
