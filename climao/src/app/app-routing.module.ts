import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';
import { ApplicationStateService } from './services/application-state.service';
import { DesktopPageComponent } from './pages/desktop-page/desktop-page.component';
import { MobilePageComponent } from './pages/mobile-page/mobile-page.component';
import { CityWeatherDetailComponent } from './components/city-weather-detail/city-weather-detail.component';
import { CityWeatherListComponent } from './components/city-weather-list/city-weather-list.component';


const desktopRoutes: Routes = [
  {path: '', component: DesktopPageComponent},
  // directs all other routes to the main page
  {path: '**', redirectTo: ''}
];

const mobileRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'cities' },
  {path: 'cities', component: MobilePageComponent, children: [
    {path: '', component: CityWeatherListComponent},
    {path: ':id', component: CityWeatherDetailComponent},
  ]},
  // directs all other routes to the main page
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(desktopRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor (private router: Router,
    private applicationState: ApplicationStateService) {
  // ){
    if (applicationState.getIsMobileResolution()) {
      router.resetConfig(mobileRoutes);
    }
  }
}
