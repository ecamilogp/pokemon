import { defineStore } from 'pinia';
import axios from 'axios';
import type { Pokemon } from '../interface/pokemonInterface';

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemonList: [] as Pokemon[],
    loading: false,
  }),

  actions: {
    /*metodo para traer los pokemon y hacemos un mapeo
     para poder ver el tipos atra vez del nombre que tenga el pokemon
    */
    async fetchPokemon() {
      this.loading = true;
      try {
        const response = await axios.get(
          'https://pokeapi.co/api/v2/pokemon?limit=200'
        );

        this.pokemonList = await Promise.all(
          response.data.results.map(async (pokemon: Pokemon) => {
            const details = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            );
            return {
              id: details.data.id,
              name: details.data.name,
              image:
                details.data.sprites.other['official-artwork'].front_default,
              type: details.data.types.map(
                (type: { type: { name: string } }) => type.type.name
              ),
            } as Pokemon;
          })
        );
      } catch (err) {
        console.error('Error al realizar la petición', err);
      } finally {
        this.loading = false;
      }
    },
  },
});
