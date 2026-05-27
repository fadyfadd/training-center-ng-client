import { ApplicationConfig, importProvidersFrom, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';
import { MatSnackBarModule } from '@angular/material/snack-bar'
  

function initializeApp(configService: ConfigService) {
  return () => configService.loadConfig();
}


export const appConfig: ApplicationConfig = {
  providers: [
      importProvidersFrom(MatSnackBarModule),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideHttpClient(),
    provideAppInitializer(() => {
      const configService = inject(ConfigService);
      return configService.loadConfig()
    })
  ]
};
