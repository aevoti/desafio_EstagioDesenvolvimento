import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobile-page',
  templateUrl: './mobile-page.component.html',
  styleUrls: ['./mobile-page.component.scss']
})
export class MobilePageComponent {

  constructor(private route: ActivatedRoute) { }

  hasCityId(): boolean{
    return this.route.firstChild.snapshot.paramMap.has('id');
  }

}
