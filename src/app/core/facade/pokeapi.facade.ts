import { Pagination, Pokemon, PokemonDetail } from './../models/pokemon.model';
import { Injectable } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { Observable, forkJoin, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiFacade {
  public pagination!: Pagination;
  
  constructor(
    private pokeapi: PokeapiService,
  ) { }

  getAllPokemon(offset: number = 0): Observable<Pokemon[]> {
    return this.pokeapi.getListOfPokemon(offset).pipe(
      switchMap(pokemonList => {
        const { count, next, previous } = pokemonList;
        this.pagination = {
          count, next, previous
        }
        return this.pokeapi.getPokemonDetailsList(pokemonList.results);
      }),
      map(pokemonDetails => pokemonDetails.map(i => ({
        id: i.id,
        name: i.name,
        gif: i.sprites.other.showdown.front_default,
        types: i.types,
        stat: this.calculateTotalBaseStat(i.stats),
      })))
    );
  }

  getPokemon(search: string): Observable<Pokemon> {
    return this.pokeapi.getPokemon(`${search}`).pipe(
      map(i => ({
        id: i.id,
        name: i.name,
        gif: i.sprites.other.showdown.front_default,
        types: i.types,
        stat: this.calculateTotalBaseStat(i.stats),
      }))
    );
  }

  getPokemonDetail(id: string): Observable<PokemonDetail> {
    return this.pokeapi.getPokemon(`${id}`).pipe(
      map(i => ({
        id: i.id,
        name: i.name,
        gif: i.sprites.other.showdown.front_default,
        types: i.types,
        stat: this.calculateTotalBaseStat(i.stats),
        baseExperience: i.base_experience,
        stats: i.stats.map((stat: any) => {
          return { base: stat.base_stat, name: stat.stat.name }
        })
      }))
    );
  }

  calculateTotalBaseStat(stats: any[]): number {
    return stats.reduce((total, stat) => total + stat.base_stat, 0);
  }
}
