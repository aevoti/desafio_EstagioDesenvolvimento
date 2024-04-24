import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  init: Pokemon = {
    id: 0,
    name: "",
    gif: "",
    stat: 0,
    types: [
      {
        slot: 0,
        type: { name: "" },
      }
    ]
  }

  @Input() pokemon: Pokemon = this.init;
  @Output() onItemSelected = new EventEmitter<{ name: string, stat: number, gif: string }>();
  @Output() onViewdetail = new EventEmitter();
  selectPokemon(): void {
    const { stat, gif, name } = this.pokemon;
    this.onItemSelected.emit({ name, stat, gif });
  }

  viewDatail(): void {
    this.onViewdetail.emit();
  }

}
