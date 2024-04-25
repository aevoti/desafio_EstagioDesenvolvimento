import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../../models/Pokemon';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.scss']
})
export class PokemonlistComponent implements OnInit {

  constructor(public pokemonService: PokemonService) {}
  public valordarota = '/pokemon';
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
        console.error('Erro ao buscar a lista de pokemons:', error);
      }
    );
  }

  public getSearch(value:string){
    const filter = this.setListPokemons.filter((res:any)=>{
      return !res.name.indexOf(value.toLowerCase());
    });

    this.listPokemons = filter;
  }
  
}
