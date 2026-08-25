import { ApplicationConfig, inject } from '@angular/core';
import { ThemeService } from './core/services/theme.service';

export const appConfig: ApplicationConfig = {
  providers: [
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