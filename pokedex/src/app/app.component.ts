import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Modules
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';

// Components

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PagesModule, HttpClientModule],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {}
