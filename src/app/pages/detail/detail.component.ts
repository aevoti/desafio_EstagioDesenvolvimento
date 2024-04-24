import { PokemonDetail } from './../../core/models/pokemon.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiFacade } from 'src/app/core/facade/pokeapi.facade';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: string = "";
  errorMessage: string | null = null;
  pokemon!: PokemonDetail;

  constructor(private route: ActivatedRoute, private pokeApi: PokeapiFacade,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.getDetail();
  }

  getDetail(): void {
    this.pokeApi.getPokemonDetail(this.id).subscribe(
      (data) => {
        this.pokemon = data;
      },
      (error) => {
        console.error('Erro ao carregar detalhes do Pokémon:', error);
        this.errorMessage = 'Erro ao carregar detalhes do Pokémon.';
      }
    );
  }


}
