import { Route } from '@angular/router';
import { RootShellComponent } from './root-shell.component.ts';

export const RootShellRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    loadChildren: () => routes,
  },
];

export const routes: Route[] = [
  {
    path: '',
    component: RootShellComponent,
    children: [],
  },
];
