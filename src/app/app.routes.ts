import { Routes } from '@angular/router';
import { roleGuardGuard } from './role-guard-guard';
import { UserRole } from './enums/user-role';

export const routes: Routes = [

    { "path": "admin", loadChildren: () => import("./admin/admin.routes").then(m => m.routes) },
    { "path": "home", "loadComponent": () => import("./home/home").then(m => m.Home) },
    {
        "path": "student", loadChildren: () => import("./student/student.routes").then(m => m.routes),
        canActivate: [roleGuardGuard], data: { roles: [UserRole.Student] }
    },
    { "path": "course", loadChildren: () => import("./course/course.routes").then(m => m.routes) },
    { "path": "login", loadComponent: () => import("./login/login").then(m => m.Login) },
    { "path": "", "redirectTo": "home", pathMatch: "full" }

];
