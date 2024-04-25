import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/Pokemon';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {
    this.getPokemons();
  }

  retornoPokemons : Pokemon[] = [];
  pokemons : Pokemon[] = [];
  pokemonUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";

  getPokemons() {
    return this.http.get<any>(this.pokemonUrl).pipe(
      tap(
        data => {
          data.results.forEach((pokemon: {name: string; url: string}) => {
            this.getPokemon(pokemon.url)
          });
        }
      )
    ).subscribe();
  }

  getPokemon(url : string) {
    return this.http.get<Pokemon>(url).pipe
    (tap(
      data => {
        this.pokemons.push(data);
        this.pokemons.sort((a,b) => a.id - b.id);
      }
    )).subscribe();
  }
}
