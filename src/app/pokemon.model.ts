export interface Pokemon {
    id: number;
    name: string;
    picture: string;
    life: number;
    damage: number;
    types: [string]| [string, string] | [string, string, string]
    created: Date;
}

export type PokemonList = Pokemon[];

export function getPokemonColor(type: string): string {
  switch (type) {
    case 'Feu':
      return '#EF5350';
    case 'Feu2':
      return '#d67d4f';
    case 'Eau':
      return '#8fc3d0';
    case 'Plante':
      return '#8bc6ac';
    case 'Insecte':
      return '#8d6e63';
    case 'Vol':
      return '#90CAF9';
    case 'Poison':
      return '#89607f';
    case 'Poison2':
      return '#9e81aa';
    case 'Fée':
      return '#f8bbd0';
    case 'Electrik':
      return '#f4ff81';
    case 'Yellow':
      return '#ebd9a5';
    default:
      return '#303030';
  }
}

