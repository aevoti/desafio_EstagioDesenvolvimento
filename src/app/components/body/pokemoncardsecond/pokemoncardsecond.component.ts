import { Component, Input, OnInit} from '@angular/core';
import { Pokemon } from '../../../models/Pokemon';

@Component({
  selector: 'app-pokemoncardsecond',
  templateUrl: './pokemoncardsecond.component.html',
  styleUrls: ['./pokemoncardsecond.component.scss']
})
export class PokemoncardsecondComponent {


  @Input() routepoke!: string;
  @Input() pokemon!: Pokemon;

  
}