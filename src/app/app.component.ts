import { Component, signal, computed } from '@angular/core';
import { POKEMON_LIST } from './pokemon-list';
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  PokemonList = POKEMON_LIST;
  size(pokemon: Pokemon) {
    if(pokemon.life < 15) return "petit"
    if(pokemon.life > 25) return "grand"
    return "moyen"
  }
  decrementLife(pokemon: Pokemon){
    pokemon.life = pokemon.life - 1
  }
  incrementLife(pokemon: Pokemon){
    pokemon.life = pokemon.life + 1
  }
}
