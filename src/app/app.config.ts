import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import {
  lucideExternalLink,
  lucideGithub,
  lucideHouse,
  lucideLinkedin,
  lucideMail,
  lucideMoon,
  lucideSun,
} from '@ng-icons/lucide';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
      }),
    ),
    provideIcons({
      lucideMoon,
      lucideSun,
      lucideExternalLink,
      lucideGithub,
      lucideHouse,
      lucideLinkedin,
      lucideMail,
    }),
  ],
};
