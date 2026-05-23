import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';


function initializeApp(configService: ConfigService) {
  return () => configService.loadConfig();
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideHttpClient(),
    provideAppInitializer(() => {
      const configService = inject(ConfigService);
      return configService.loadConfig()
    })
  ]
};
