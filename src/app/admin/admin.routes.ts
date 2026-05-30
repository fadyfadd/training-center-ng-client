import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: "", loadComponent: () => import("./admin").then(m => m.Admin),
        children: [
            {path: 'all-courses', loadComponent: () => import("./all-courses/all-courses").then(m => m.AllCourses)},
            { path: 'home', loadComponent: () => import("./home/home").then(m => m.Home) },
            { path: 'register-student', loadComponent: () => import("./register-student/register-student").then(m => m.RegisterStudent) }
        ]
    }

];



