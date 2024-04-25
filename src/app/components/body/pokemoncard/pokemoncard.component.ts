import { Component, Input} from '@angular/core';
import { Pokemon } from '../../../models/Pokemon';

@Component({
  selector: 'app-pokemoncard',
  templateUrl: './pokemoncard.component.html',
  styleUrl: './pokemoncard.component.scss'
})
export class PokemoncardComponent {

  @Input() routepoke!:string;
  @Input() pokemon!: Pokemon;

}
