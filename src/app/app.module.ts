import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { ErrorInfoComponent } from './error-info/error-info.component';

import { WeatherstackService } from './weatherstack.service';

@NgModule({
	declarations: [
		AppComponent,
		WeatherInfoComponent,
		ErrorInfoComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot([
			{ path: 'home', component: HomeComponent },
			{ path: '', redirectTo: '/home', pathMatch: 'full' },
			{ path: 'current', component: WeatherInfoComponent },
			{ path: 'error', component: ErrorInfoComponent }
		])
	],
	providers: [HttpClientModule, WeatherstackService],
	bootstrap: [AppComponent]
})
export class AppModule { }
