import { PokeApiService } from './../../service/pokeapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-list',
  imports: [],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss',
})
export class PokeListComponent {
  public getAllPokemons: any;

  constructor(private pokeApiService: PokeApiService) {}

  public init(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      (res) => (this.getAllPokemons = res.results)
    );
  }
}
