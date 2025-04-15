import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((p) => p.PagesModule),
  },
];
