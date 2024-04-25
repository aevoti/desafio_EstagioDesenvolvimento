import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../models/Pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  constructor() { }

  @Input('pokemon')
  pokemonDetails : Pokemon;
  totalStatus : number = 0;

  ngOnInit(): void {
    this.pokemonDetails.stats.forEach(s => this.totalStatus += s.base_stat);
  }

  corTipoPokemon(type: string) {
    switch(type) {
      case 'water': return { 'background-color': '#6890f0' };
      case 'fire': return { 'background-color': '#f05030' };
      case 'grass': return { 'background-color': '#78c850' };
      case 'electric': return { 'background-color': '#F8D030' };
      case 'psychic': return { 'background-color': '#f85888' };
      case 'ice': return { 'background-color': '#98d8d8' };
      case 'dragon': return { 'background-color': '#7038f8' };
      case 'normal': return { 'background-color': '#a8a878' };
      case 'fighting': return { 'background-color': '#903028' };
      case 'flying': return { 'background-color': '#a890f0' };
      case 'poison': return { 'background-color': '#a040a0' };
      case 'ground': return { 'background-color': '#e0c068' };
      case 'rock': return { 'background-color': '#b8a038' };
      case 'ghost': return { 'background-color': '#705898' };
      case 'steel': return { 'background-color': '#b8b8d0' };
      case 'bug': return { 'background-color': '#68a090' };
      case 'fairy': return { 'background-color': '#FF66FF' };

      default: return { 'background-color': 'gray' };
    }
  }
}
