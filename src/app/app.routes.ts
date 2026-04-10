import { Routes } from '@angular/router';

const appTitle = 'angular-shadcn-sample-ui';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/app-shell/app-shell').then((m) => m.AppShell),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/home/home').then((m) => m.HomePage),
        title: `Home · ${appTitle}`,
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.DashboardPage),
        title: `Dashboard · ${appTitle}`,
      },
      {
        path: 'forms',
        loadComponent: () => import('./pages/forms/forms').then((m) => m.FormsPage),
        title: `Forms · ${appTitle}`,
      },
    ],
  },
];
