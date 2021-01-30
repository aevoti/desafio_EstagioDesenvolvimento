import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private route: Router) { }

	title = 'WeatherPage';

	goHome() {
		this.route.navigate(['/home']);
	}

	keyUp(event) {
		if (event.keyCode == 13) {
			this.searchCity();
		}
	}

	searchCity() {
		let txtCity = document.getElementById('txtCity') as HTMLInputElement;

		if (txtCity.value != '') {
			this.route.navigate(['/current'], { queryParams: { city: encodeURI(txtCity.value) } });
			txtCity.value = '';
		}
	}
}
