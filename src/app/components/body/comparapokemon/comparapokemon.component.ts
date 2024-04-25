import { Component } from '@angular/core';
import { PokemonComparisonService } from '../../../services/pokemon-comparison.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-comparapokemon',
  templateUrl: './comparapokemon.component.html',
  styleUrl: './comparapokemon.component.scss'
})
export class ComparapokemonComponent {
  firstPokemon: any;
  //secondPokemonn: any;
  secondPokemon:any;
  constructor(private router: Router, private comparisonService: PokemonComparisonService, private route: ActivatedRoute, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.firstPokemon = this.comparisonService.firstPokemon;

    const pokemonNumber = +this.route.snapshot.paramMap.get('id')!; 
    this.pokemonService.getPokemonDetails(pokemonNumber).subscribe(
      (resp) => {
        this.secondPokemon = resp;
        
      },
      error => {
        console.error('Erro ao obter detalhes do Pokémon:', error);
      }
    );
   
    if (!this.firstPokemon || this.secondPokemon) {
      // Navega para a rota inicial (home)
      this.router.navigate(['/']);
    }

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

  getSecondPokemonImageUrl(id: number): string {
    return `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${this.padId(id)}.png`;
  }


  determineWinner(): string {
    const firstTotal = this.calculateFirstTotalBaseStats(this.firstPokemon.stats);
    const secondTotal = this.calculateSecondTotalBaseStats(this.secondPokemon.stats);

    if (firstTotal > secondTotal) {
      return `${this.firstPokemon.name} é o vencedor da batalha, pois a soma dos seus status são maiores!`;
    } else if (firstTotal < secondTotal) {
      return `${this.secondPokemon.name} é o vencedor da batalha,  pois a soma dos seus status são maiores!`;
    } else {
      return 'Os Pokémons possuem o mesmo poder!';
    }
  }

  getFirstPokemonStat(statName: string): number {
    const stat = this.firstPokemon?.stats.find((s: any) => s.stat.name === statName);
    return stat ? stat.base_stat : 0;
  }

  getSecondPokemonStat(statName: string): number {
    const stat = this.secondPokemon?.stats.find((s: any) => s.stat.name === statName);
    return stat ? stat.base_stat : 0;
  }

  calculateFirstTotalBaseStats(stats: any[]): number {
    let totalStats = 0;
    stats.forEach(stat => {
      totalStats += stat.base_stat;
    });
    return totalStats;
  }

  
  calculateSecondTotalBaseStats(stats: any[]): number {
    let totalStatsSecond = 0;
    stats.forEach(stat => {
      totalStatsSecond += stat.base_stat;
    });
    return totalStatsSecond;
  }

}
