import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonComparisonService } from '../../../services/pokemon-comparison.service';

@Component({
  selector: 'app-pokemondetails',
  templateUrl: './pokemondetails.component.html',
  styleUrl: './pokemondetails.component.scss'
})
export class PokemondetailsComponent implements OnInit {

  pokemonDetails: any;

  constructor(public pokemonService: PokemonService, private route: ActivatedRoute, private comparisonService: PokemonComparisonService, private router: Router) {}

  ngOnInit() {
    const pokemonNumber = +this.route.snapshot.paramMap.get('id')!; 
    this.pokemonService.getPokemonDetails(pokemonNumber).subscribe(
      (resp) => {
        this.pokemonDetails = resp;
      },
      error => {
        console.error('Erro ao obter detalhes do Pokémon:', error);
      }
    );
}

private padId(id: number): string {
  if (id <= 9) {
    return `00${id}`;
  } else if (id <= 99) {
    return `0${id}`;
  } else {
    return `${id}`;
  }
}

getPokemonImageUrl(id: number): string {
  return `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${this.padId(id)}.png`;
}

calculateTotalBaseStats(stats: any[]): number {
  let totalStats = 0;
  stats.forEach(stat => {
    totalStats += stat.base_stat;
  });
  return totalStats;
}

getPokemonStat(statName: string): number {
  const stat = this.pokemonDetails?.stats.find((s: any) => s.stat.name === statName);
  return stat ? stat.base_stat : 0;
}

compareWithAnotherPokemon() {
  this.comparisonService.setFirstPokemon(this.pokemonDetails);
  this.router.navigate(['/select-other-pokemon']);
}

}