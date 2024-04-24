import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeapiFacade } from 'src/app/core/facade/pokeapi.facade';
import { Pokemon, PokemonBattle } from 'src/app/core/models/pokemon.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private pokeApi: PokeapiFacade, private router: Router) { }

  errorMessage: string | null = null;
  listOfPokemons: Pokemon[] = [];
  filteredPokemons: Pokemon[] = [];
  pokemon!: Pokemon;
  battleList: PokemonBattle[] = [];
  inputSearch: string = "";

  ngOnInit(): void {
    this.getPokemons();
  }
  navegateToDetails(id: number) {
    this.router.navigate(['/detail', id]);
  }

  getPokemons(): void {
    this.pokeApi.getAllPokemon().subscribe(
      (data) => {
        this.listOfPokemons = data;
        this.filteredPokemons = data;
      },
      (error) => {
        console.error('Erro ao carregar detalhes do Pokémon:', error);
        this.errorMessage = 'Erro ao carregar detalhes do Pokémon.';
      }
    );
  }

  getPokemon(search: string): void {
    this.pokeApi.getPokemon(search).subscribe(
      (data) => {
        this.filteredPokemons.push(data);
      },
      (error) => {
        console.error('Erro ao carregar detalhes do Pokémon:', error);
        this.errorMessage = 'Erro ao carregar detalhes do Pokémon.';
      }
    );
  }

  onPokemonSelected(pokemon: PokemonBattle): void {
    if(this.battleList.length < 2){
      this.battleList.push(pokemon);
    }
  }
  onBattleClear(list: []): void {
    this.battleList = list;
  }

  onPokemonsPagination(offset: number): void {
    this.pokeApi.getAllPokemon(offset).subscribe(
      (data) => {
        this.listOfPokemons = data;
        this.filteredPokemons = data;
      },
      (error) => {
        console.error('Erro ao carregar detalhes do Pokémon:', error);
        this.errorMessage = 'Erro ao carregar detalhes do Pokémon.';
      }
    );
  }
  onSearch(): void {
    const searchTerm = this.inputSearch.trim().toLowerCase();
    let filteredPokemons = [...this.listOfPokemons];
    if (!searchTerm) {
      this.filteredPokemons = [...filteredPokemons];
    } else {
      const filteredPokemon = filteredPokemons.filter(e => e.id.toString() === searchTerm || e.name.toLowerCase().includes(searchTerm))
      if(filteredPokemon.length <= 0){
        this.getPokemon(searchTerm);
      }
      this.filteredPokemons = filteredPokemon;
    }
  }

}
