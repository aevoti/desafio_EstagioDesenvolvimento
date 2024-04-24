import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonBattle } from 'src/app/core/models/pokemon.model';

@Component({
  selector: 'app-status-battle',
  templateUrl: './status-battle.component.html',
  styleUrls: ['./status-battle.component.css']
})
export class StatusBattleComponent {

  imgDefault: string = "assets/pokebol.gif";

  @Input() pokemonBattleList: PokemonBattle[] = [];
  @Output() onBattleListClear = new EventEmitter();


  battleMoveLeft: string = "";
  battleMoveRight: string = "";

  winPokemon: PokemonBattle | null = null;

  onBattleStart(): void {
    this.battleMoveLeft = "move__left";
    this.battleMoveRight = "move__right";
    setTimeout(() => {
      this.battleMoveLeft = "";
      this.battleMoveRight = "";
      this.victoryBattle();
    },2500);

  }

  onBattleClear(): void {
    this.onBattleListClear.emit([])
    this.pokemonBattleList = [];
    this.winPokemon = null;
  }

  victoryBattle(): void {
    const win = this.pokemonBattleList.reduce((previous, current) => {
      return (current.stat > previous.stat) ? current : previous;
    });
    this.winPokemon = win;
  }


}
