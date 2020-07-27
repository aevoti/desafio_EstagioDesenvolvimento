import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';
import { BrandComponent } from './components/brand/brand.component';
import { TruncatePipe } from './utils/truncate.pipe';
import { DesktopPageComponent } from './pages/desktop-page/desktop-page.component';
import { MobilePageComponent } from './pages/mobile-page/mobile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CityWeatherComponent,
    BrandComponent,
    TruncatePipe,
    DesktopPageComponent,
    MobilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
