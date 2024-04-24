import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { StatusBattleComponent } from './components/status-battle/status-battle.component';



@NgModule({
  declarations: [
    CardComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [CardComponent, PaginationComponent]
})
export class SharedModule { }
