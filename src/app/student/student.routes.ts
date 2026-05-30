import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        "path": "", loadComponent: () => import("./student").then(m => m.Student), children: [
            { "path": "home", loadComponent: () => import("./home/home").then(m => m.Home) },
            { "path": "" , redirectTo: "home", pathMatch: "full" }
        ]
    },

];
