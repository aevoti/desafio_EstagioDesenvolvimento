import {
    Component,
    ComponentFactoryResolver,
    ViewChild,
    ViewContainerRef,
    Input,
    OnInit,
    ComponentRef,
    ComponentFactory,
    ElementRef
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';



@Component({
    selector: 'weather-info',
    templateUrl: './weather-info.component.html',
    styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit {

    @Input()
    name: string;

    @Input()
    value: string | number;

    @Input()
    icon: IconDefinition;

    @ViewChild('host', {
        read: ViewContainerRef, static: true
    }) container: ViewContainerRef;

    @ViewChild('info') weatherInfo: ElementRef


    constructor(private cfr: ComponentFactoryResolver) {
    }

    ngOnInit(): void {
        // this.createIcon();
    }

    ngAfterViewInit() {
        if (this.weatherInfo) {
            this.createIcon();
        }
    }

    private createIcon(): void {
        const factory: ComponentFactory<FaIconComponent> = this.cfr.resolveComponentFactory(FaIconComponent);
        const componentRef: ComponentRef<FaIconComponent> = this.container.createComponent(factory);
        componentRef.instance.icon = this.icon;
        componentRef.instance.render();
    }

}
