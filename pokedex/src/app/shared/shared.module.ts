import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
  ],
  exports: [PokeHeaderComponent, PokeSearchComponent, PokeListComponent],
})
export class SharedModule {}
