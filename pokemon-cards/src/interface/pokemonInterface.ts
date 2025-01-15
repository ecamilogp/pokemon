export interface Pokemon {
  id: number;
  name: string;
  image: string;
  type: string[];
}

//extencion de la interfaz para usar la informacion de los pokemon
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
}
