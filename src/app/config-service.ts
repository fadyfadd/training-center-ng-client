import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


export const APP_BACKEND_SERVER = "backendAddress";


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private http = inject(HttpClient);
  private configData: any = null;

  loadConfig(): Observable<any> {
    const configUrl = '/assets/config/config.development.json';

    if (window.location.pathname.includes('http://app-production')) {
      console.warn('Running in production mode. Config data:');
    }

    return this.http.get(configUrl).pipe(
      tap((data) => {

        console.warn(configUrl)
        this.configData = data;
        console.log('State populated:', this.configData);
      })
    );
  }

  get(key: string): any {
    return this.configData ? this.configData[key] : null;
  }
}