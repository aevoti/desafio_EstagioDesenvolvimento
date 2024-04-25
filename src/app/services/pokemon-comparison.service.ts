import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PokemonComparisonService {
  firstPokemon: any;
  secondPokemon: any;

  setFirstPokemon(pokemon: any) {
    this.firstPokemon = pokemon;
  }

  setSecondPokemon(pokemon: any) {
    this.secondPokemon = pokemon;
  }
}