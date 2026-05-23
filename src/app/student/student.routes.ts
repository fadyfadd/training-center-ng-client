import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        "path": "", loadComponent: () => import("./student").then(m => m.Student), children: [
            { "path": "all-students", loadComponent: () => import("./all-student/all-student").then(m => m.AllStudents) }
        ]
    },

];
