import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/shared/service/server.service';

@Component({
  selector: 'app-weather-previously-searched',
  templateUrl: './weather-previously-searched.component.html',
  styleUrls: ['./weather-previously-searched.component.css']
})
export class WeatherPreviouslySearchedComponent implements OnInit {

  public historicoPesquisa = [] as any;

  constructor(private _serverService: ServerService) { }

  ngOnInit(): void {
    this.getDataStored();
    this._serverService.updateSearch.subscribe((updateSearched: boolean) => {
      this.getDataStored();
  });
  }

  getDataStored(){
    this._serverService.getPreviousWeatherSearches().subscribe(
      data => {
        this.historicoPesquisa = data
      }
    )
  }

}
