import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../models/Pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor() { }

  @Input('pokemon')
  pokemon : Pokemon;

  ngOnInit(): void {
  }

  corTipoPokemon(pokemon: any) {
    const tipo = pokemon.types[0].type.name;
    return { 'background-color': this.CorTipoPokemon(tipo) };
  }

  CorTipoPokemon(type: string) {
    switch(type) {
      case 'water': return '#6890f0';
      case 'fire': return '#f05030';
      case 'grass': return '#78c850';
      case 'electric': return '#F8D030';
      case 'psychic': return '#f85888';
      case 'ice': return '#98d8d8';
      case 'dragon': return '#7038f8';
      case 'normal': return '#a8a878';
      case 'fighting': return '#903028';
      case 'flying': return '#a890f0';
      case 'poison': return '#a040a0';
      case 'ground': return '#e0c068';
      case 'rock': return '#b8a038';
      case 'ghost': return '#705898';
      case 'steel': return '#b8b8d0';
      case 'bug': return '#68a090';
      case 'fairy': return '#FF66FF';

      default: return 'gray';
    }
  }
}



