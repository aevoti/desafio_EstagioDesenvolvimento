import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';
import { ApplicationStateService } from './services/application-state.service';
import { DesktopPageComponent } from './pages/desktop-page/desktop-page.component';
import { MobilePageComponent } from './pages/mobile-page/mobile-page.component';


const desktopRoutes: Routes = [
  {
    path: '', component: DesktopPageComponent, children:
    [
      // {path: 'city/:cityId', component: ProductComponent}
    ]
  },
  // directs all other routes to the main page
  {path: '**', redirectTo: ''}
];

const mobileRoutes: Routes = [
  {path: '', component: MobilePageComponent},
  // {path: 'city/:cityId', component: ProductComponent}
  // directs all other routes to the main page
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(desktopRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor (private router: Router, private applicationState: ApplicationStateService) {
    if (applicationState.getIsMobileResolution()) {
      router.resetConfig(mobileRoutes);
    }
  }
}
