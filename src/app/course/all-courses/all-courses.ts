import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { ConfigService } from '../../config-service';
import { APP_BACKEND_SERVER } from '../../config-service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { CourseDto } from '../dtos';
import { CommonModule } from '@angular/common';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-all-courses',
  imports: [MatTableModule, CommonModule, MatSortModule, MatPaginator , MatButtonModule, MatIconModule],
  templateUrl: './all-courses.html',
  styleUrl: './all-courses.css',
})
export class AllCourses implements OnInit, AfterViewInit {


  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<CourseDto>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;



  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  private http: HttpClient = inject(HttpClient);
  private configService: any = inject(ConfigService);
  public courses$: BehaviorSubject<CourseDto[]> = new BehaviorSubject<CourseDto[]>([]);

  public displayedColumns: string[] = ['id', 'title', 'categoryId', 'categoryName', 'actions'];

  ngOnInit(): void {

    let backendAddress = this.configService.get(APP_BACKEND_SERVER);
    this.http.get<CourseDto[]>(`${backendAddress}courses`).subscribe((data) => {
      this.dataSource.data = data;
    });

  }
}
