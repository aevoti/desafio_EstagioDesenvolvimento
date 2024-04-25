import { Pokemon } from './../models/Pokemon';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-fightpokemon',
  templateUrl: './fightpokemon.component.html',
  styleUrls: ['./fightpokemon.component.css']
})
export class FightpokemonComponent implements OnInit {

  constructor(pokeService: PokemonService) {
    this.pokemons = pokeService.pokemons;
  }

  pokemons : Pokemon[] = [];
  inputSearch : string = '';
  inputSearch2 : string = '';
  pokemonInput1: Pokemon;
  pokemonInput1Total: number;
  pokemonInput2: Pokemon;
  pokemonInput2Total: number;
  background: { 'background-color': string };
  background2: { 'background-color': string };
  texto1: string = "";
  texto2: string = "";

  ngOnInit(): void {

  }

  selecionaPokemon(pokemon : Pokemon, diff : number) {
    this.texto1 = "";
    this.texto2 = "";
    this.background = { 'background-color': 'white' };
    this.background2 = { 'background-color': 'white' };

    if(diff == 1) {
      this.pokemonInput1Total = 0;
      this.pokemonInput1 = pokemon;
      this.pokemonInput1.stats.forEach(s => this.pokemonInput1Total += s.base_stat);
      return this.pokemonInput1;
    }

    this.pokemonInput2Total = 0;
    this.pokemonInput2 = pokemon;
    this.pokemonInput2.stats.forEach(s => this.pokemonInput2Total += s.base_stat);
    return this.pokemonInput2;

  }

  fight() {
    if(this.pokemonInput1Total > this.pokemonInput2Total) {
      this.texto1 = "Foi o Vencedor";
      this.texto2 = "Perdeu";
      this.background = { 'background-color': '#99FF99' };
      this.background2 = { 'background-color': '#FFCCCC' };
    }
    if(this.pokemonInput1Total < this.pokemonInput2Total ){
      this.texto2 = "Foi o Vencedor";
      this.texto1 = "Perdeu";
      this.background2 = { 'background-color': '#99FF99' };
      this.background = { 'background-color': '#FFCCCC' };
    }
    if(this.pokemonInput1Total == this.pokemonInput2Total){
      this.texto1 = "Empatou";
      this.texto2 = "Empatou";
      this.background2 = { 'background-color': '#C0C0C0' };
      this.background = { 'background-color': '#C0C0C0' };
    }
  }
}

