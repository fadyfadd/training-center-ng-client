import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ConfigService } from '../../config-service';
import { APP_BACKEND_SERVER } from '../../config-service';

@Component({
  selector: 'app-all-courses',
  imports: [],
  templateUrl: './all-courses.html',
  styleUrl: './all-courses.css',
})
export class AllCourses implements OnInit {

  private http: HttpClient = inject(HttpClient);
  private configService: any = inject(ConfigService);

  ngOnInit(): void {

    let backendAddress = this.configService.get(APP_BACKEND_SERVER);
    this.http.get(`${backendAddress}courses`).subscribe((data) => {
      console.log(data);

    });


  }


}
