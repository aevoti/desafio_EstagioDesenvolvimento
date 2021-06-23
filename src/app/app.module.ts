import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { WeatherApiService } from './services/weather-api.service';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module';
import { WeatherInfoComponent } from './shared/weather-info/weather-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        AppComponent,
        WeatherAppComponent,
        WeatherInfoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModule,
        FontAwesomeModule
    ],
    providers: [WeatherApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }
