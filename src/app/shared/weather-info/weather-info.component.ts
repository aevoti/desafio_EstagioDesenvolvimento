import { Component, Input } from '@angular/core';


@Component({
    selector: 'weather-info',
    templateUrl: './weather-info.component.html',
    styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent {

    @Input()
    name: string;

    @Input()
    value: string | number;
}
