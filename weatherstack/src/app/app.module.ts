import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherStackComponent } from './views/weather/weather-stack/weather-stack.component';
import { WeatherPreviouslySearchedComponent } from './views/weather/weather-previously-searched/weather-previously-searched.component';
import { HomeComponent } from './views/home/home/home.component';

import { HttpClientModule } from '@angular/common/http'; //Importando HttpClientModule
import { FormsModule } from '@angular/forms';

import {MatExpansionModule} from '@angular/material/expansion'; //Importando o MatExpansion do  Angular Material
import {MatToolbarModule} from '@angular/material/toolbar'; //Importando o ToolBar do  Angular Material
import {MatIconModule} from '@angular/material/icon'; //Importando o Icon do  Angular Material
import {MatButtonModule} from '@angular/material/button'; //Importando o Button do  Angular Material
import {MatTabsModule} from '@angular/material/tabs'; //Importando o Tabs do  Angular Material
import {MatCardModule} from '@angular/material/card'; //Importando o Cards do  Angular Material

import { FlexLayoutModule } from '@angular/flex-layout'; //Importando o FlexLayout

@NgModule({
  declarations: [
    AppComponent,
    WeatherStackComponent,
    WeatherPreviouslySearchedComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, //Importando HttpClientModule
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
