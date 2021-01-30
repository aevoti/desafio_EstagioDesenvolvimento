import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-error-info',
	templateUrl: './error-info.component.html',
	styleUrls: ['./error-info.component.css']
})
export class ErrorInfoComponent implements OnInit {

	errorCode: number;
	errorType: string;

	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.errorCode = parseInt(this.route.snapshot.queryParamMap.get('code'));
		this.errorType = this.route.snapshot.queryParamMap.get('type');
	}

	showErrorType() {
		let frase = '';
		
		this.errorType.split('_').forEach(word => {
			frase += ` ${word}`;
		});

		return frase;
	}
}
