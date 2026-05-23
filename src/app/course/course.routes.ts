import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        "path": "", "loadComponent": () => import("./course").then(m => m.Course), children: [
            { "path": "all-courses", "loadComponent": () => import("./all-courses/all-courses").then(m => m.AllCourses) }
        ]
    }

];
