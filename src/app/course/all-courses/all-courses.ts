import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { ConfigService } from '../../config-service';
import { APP_BACKEND_SERVER } from '../../config-service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { CourseDto } from '../dtos';
import { CommonModule } from '@angular/common';
import { MatSort, MatSortModule } from '@angular/material/sort';


@Component({
  selector: 'app-all-courses',
  imports: [MatTableModule, CommonModule, MatSortModule],
  templateUrl: './all-courses.html',
  styleUrl: './all-courses.css',
})
export class AllCourses implements OnInit, AfterViewInit {


  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<CourseDto>();


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  private http: HttpClient = inject(HttpClient);
  private configService: any = inject(ConfigService);
  public courses$: BehaviorSubject<CourseDto[]> = new BehaviorSubject<CourseDto[]>([]);

  public displayedColumns: string[] = ['id', 'title', 'categoryId', 'categoryName' , 'actions'];

  ngOnInit(): void {

    let backendAddress = this.configService.get(APP_BACKEND_SERVER);
    this.http.get<CourseDto[]>(`${backendAddress}courses`).subscribe((data) => {
      this.dataSource.data = data;
    });

  }
}
