import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { StatusBattleComponent } from './components/status-battle/status-battle.component';



@NgModule({
  declarations: [
    CardComponent,
    PaginationComponent,
    StatusBattleComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [CardComponent, PaginationComponent, StatusBattleComponent]
})
export class SharedModule { }
