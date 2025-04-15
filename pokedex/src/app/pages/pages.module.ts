import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module
import { RoutingModule } from './routing.module';

// Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeComponent,
    RoutingModule,
    DetailsComponent,
    SharedModule,
  ],
})
export class PagesModule {}
