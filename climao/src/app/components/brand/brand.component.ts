import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  logoIcon = '../../../assets/icons/logo.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
