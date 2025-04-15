import { RouterModule, Routes } from '@angular/router';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { NgModule } from '@angular/core';

// Components
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',

    renderMode: RenderMode.Prerender,
  },
];

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
