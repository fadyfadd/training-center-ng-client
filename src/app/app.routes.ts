import { Routes } from '@angular/router';
import { roleGuard } from './role-guard';
import { UserRole } from './enums/user-role';

export const routes: Routes = [

    { "path": "admin", loadChildren: () => import("./admin/admin.routes").then(m => m.routes) },
    { "path": "home", "loadComponent": () => import("./home/home").then(m => m.Home) },
    { "path": "login", loadComponent: () => import("./login/login").then(m => m.Login) },
    { "path": "student", loadChildren: () => import("./student/student.routes").then(m => m.routes)},
    { "path": "", "redirectTo": "home", pathMatch: "full" }

];
