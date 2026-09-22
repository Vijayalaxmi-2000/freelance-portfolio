import { ApplicationConfig, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ThemeService } from './core/services/theme.service';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: 'APP_INITIALIZER',
      useFactory: () => {
        const themeService = inject(ThemeService);

        return () => {
          themeService.initializeTheme();
        };
      },
      multi: true,
    },
  ],
};