import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PokemondetailsComponent } from './components/body/pokemondetails/pokemondetails.component';
import { PokemonlistComponent } from './components/body/pokemonlist/pokemonlist.component';
import { ComparapokemonComponent } from './components/body/comparapokemon/comparapokemon.component';
import { SelectAnotherPokemonComponent } from './components/body/select-another-pokemon/select-another-pokemon.component';

const routes: Routes = [
  {path: 'pokemon/:id', component:PokemondetailsComponent},
  {path:'', pathMatch:'full', component:PokemonlistComponent},
  {path:'comparar/:id', component:ComparapokemonComponent},
  {path:'select-other-pokemon', component:SelectAnotherPokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
