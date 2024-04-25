import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrl: './pokemon-search.component.scss'
})
export class PokemonSearchComponent implements OnInit {

constructor() {}

@Output() searchEmmiter: EventEmitter<any> = new EventEmitter();

ngOnInit(): void {
 
}

public search(value:string){
  this.searchEmmiter.emit(value);
}

}
