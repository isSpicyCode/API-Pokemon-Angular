import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, Routes} from '@angular/router';
import {PokemonListComponent} from './pokemon/pokemon-list/pokemon-list.component';
import {PokemonProfileComponent} from './pokemon/pokemon-profile/pokemon-profile.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PokemonEditComponent} from './pokemon/pokemon-edit/pokemon-edit.component';

const routes: Routes = [
  {path: 'pokemon/edit/:id', component: PokemonEditComponent, title: "Edition d'un Pokémon"},
  {path: 'pokemon/:id', component: PokemonProfileComponent, title: "Pokemon"},
  {path: 'pokemon', component: PokemonListComponent, title: "Pokedex"},
  {path: '', redirectTo: 'pokemon', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ],
};
