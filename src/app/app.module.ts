import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemoncardComponent } from './components/body/pokemoncard/pokemoncard.component';
import { PokemonlistComponent } from './components/body/pokemonlist/pokemonlist.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';
import { PokemondetailsComponent } from './components/body/pokemondetails/pokemondetails.component';
import { PokemonSearchComponent } from './components/body/pokemon-search/pokemon-search.component';
import { ComparapokemonComponent } from './components/body/comparapokemon/comparapokemon.component';
import { SelectAnotherPokemonComponent } from './components/body/select-another-pokemon/select-another-pokemon.component';
import { PokemoncardsecondComponent } from './components/body/pokemoncardsecond/pokemoncardsecond.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemoncardComponent,
    PokemonlistComponent,
    PokemondetailsComponent,
    PokemonSearchComponent,
    ComparapokemonComponent,
    SelectAnotherPokemonComponent,
    PokemoncardsecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
