import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../../models/Pokemon';
import { PokemonService } from '../../../services/pokemon.service';
import { Router } from '@angular/router';
import { PokemonComparisonService } from '../../../services/pokemon-comparison.service';

@Component({
  selector: 'app-select-another-pokemon',
  templateUrl: './select-another-pokemon.component.html',
  styleUrls: ['./select-another-pokemon.component.scss']
})
export class SelectAnotherPokemonComponent implements OnInit {

  constructor(public pokemonService: PokemonService, private router: Router, private comparisonService: PokemonComparisonService) {}

  public rotacomparapokemon = '/comparar'
  public listPokemons: Pokemon[] = [];
  private setListPokemons: any;

  ngOnInit() {
    this.listarPokemons();
  }

  listarPokemons() {
    this.pokemonService.getListPokemons().subscribe(
      (pokemons: Pokemon[]) => {
        this.setListPokemons = pokemons;
        this.listPokemons = this.setListPokemons;
      },
      error => {
        console.error('Erro ao buscar a lista de pokémons:', error);
      }
    );
  }

  public getSearch(value: string) {
    const filter = this.setListPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.listPokemons = filter;
  }

  selectPokemon(pokemon: any) {
    this.comparisonService.setSecondPokemon(pokemon);
    this.router.navigate(['comparar-pokemons']);
  }

}


