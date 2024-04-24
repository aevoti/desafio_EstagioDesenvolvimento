import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(private httpClient: HttpClient) { }

  // Método para obter a lista de Pokémon
  public getListOfPokemon(offset: number = 0, limit: number = 10): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}pokemon?offset=${offset}&limit=${limit}`);
  }
  // Método para obter os detalhes de cada Pokémon utilizadno a URL
  public getPokemonDetails(url: string): Observable<any> {
    return this.httpClient.get<any>(url);
  }
  // Método para obter detalhes de múltiplos Pokémon
  public getPokemonDetailsList(pokemonList: any[]): Observable<any[]> {
    const observables = pokemonList.map(pokemon => this.getPokemonDetails(pokemon.url));
    return forkJoin(observables);
  }
  // Método para obter detalhes Pokémon
  public getPokemon(search:string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}pokemon/${search}`);
  }
}
