import { Injectable } from '@angular/core';
import { Pokemon, PokemonList } from './pokemon.model';
import { POKEMON_LIST } from './pokemon-list';

@Injectable({
  providedIn: 'root',
})

export class PokemonService {
  getPokemonList(): PokemonList {
    return POKEMON_LIST
}
getPokemonById(id: number): Pokemon {
    const pokemon = POKEMON_LIST.find(list => list.id === id)

    if(!pokemon){
      throw new Error (`Pas de pokemon trouvé avec l'id ${id}`)
    }
    return pokemon
  }
  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fee',
      'Vol',
    ]
  }
}

