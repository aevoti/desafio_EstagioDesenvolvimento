import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CitiesData } from './data/api/cities-data'

import { AppComponent } from './app.component';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';
import { DesktopPageComponent } from './pages/desktop-page/desktop-page.component';
import { MobilePageComponent } from './pages/mobile-page/mobile-page.component';
import { CityWeatherDetailComponent } from './components/city-weather-detail/city-weather-detail.component';
import { CityWeatherListComponent } from './components/city-weather-list/city-weather-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CityWeatherComponent,
    CityWeatherDetailComponent,
    DesktopPageComponent,
    MobilePageComponent,
    CityWeatherListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(CitiesData, { passThruUnknownUrl: true }),
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
