import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { Pokemon } from '../models/Pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  constructor(
    private httpClient: HttpClient,
  ) {}


  getPokemonDetails(number: number): Observable<Pokemon> {
    const pokemonDetails = 'https://pokeapi.co/api/v2/pokemon/';
    return this.httpClient.get<Pokemon>(`${pokemonDetails}/${number}`);
  }


  public getListPokemons(): Observable<Pokemon[]> {
    const allPokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

    return this.httpClient.get<any>(allPokemonsUrl).pipe(
      map(value => value.results),
      mergeMap((value: any[]) => {
        return from(value).pipe(
          mergeMap((v: any) => this.httpClient.get(v.url)),
        );
      }),
      map((result: any) => ({
        image: result.sprites.front_default,
        number: result.id,
        name: result.name,
        types: result.types.map((t: any) => t.type.name), 
      })),
      toArray(),
    );
  }
}
