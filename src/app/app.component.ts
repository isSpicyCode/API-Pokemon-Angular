import { Component, signal, computed } from '@angular/core';
import { POKEMON_LIST } from './pokemon-list';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  PokemonList = POKEMON_LIST;
  name = signal("Pikachu");
  life = signal(21);
  taillePokemon = computed(() => {
    if(this.life() < 15) return "petit";
    if(this.life() > 25) return "grand";
    return "moyen";
  });
  imageUrl = signal('img/025.png')
  decrementLife(){
    this.life.update((life) => life - 1)
  }
  incrementLife(){
    this.life.update((life) => life + 1)
  }
}
