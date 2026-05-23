import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-courses',
  imports: [],
  templateUrl: './all-courses.html',
  styleUrl: './all-courses.css',
})
export class AllCourses implements OnInit {
  
  private http: HttpClient = inject(HttpClient);
  
  ngOnInit(): void {
console.log('AllCourses component initialized');
    this.http.get('https://localhost:7053/courses').subscribe((data) => {
        console.log(data);
      });

    
  }


}
