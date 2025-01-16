export interface Pokemon {
  id: number;
  name: string;
  image: string;
  type: string[];
}

export interface DetailedPokemon extends Pokemon {
  height: number;
  weight: number;
  description: string;
  stats: {
    attack: number;
    defense: number;
    speed: number;
    hp: number;
  };
  habitat: string;
  generation: string;
}
