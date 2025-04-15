import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PokeHeaderComponent } from '../../shared/poke-header/poke-header.component';
import { PokeSearchComponent } from '../../shared/poke-search/poke-search.component';
import { PokeListComponent } from '../../shared/poke-list/poke-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    SharedModule,
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
  ],
  //styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
