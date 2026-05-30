import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { CdkAriaLive } from "../../../node_modules/@angular/cdk/types/_a11y-module-chunk";

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {}
