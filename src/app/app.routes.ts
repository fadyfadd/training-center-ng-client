import { Routes } from '@angular/router';

export const routes: Routes = [

    { "path": "home", "loadComponent": () => import("./home/home").then(m => m.Home) },
    { "path": "student", loadChildren: () => import("./student/student.routes").then(m => m.routes) },
    { "path": "course", loadChildren: () => import("./course/course.routes").then(m => m.routes) },
    { "path": "", "redirectTo": "home", pathMatch: "full" }

];
