import { defineStore } from 'pinia';
import axios from 'axios';
import type { Pokemon, DetailedPokemon } from '../interface/pokemonInterface';

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemonList: [] as DetailedPokemon[],
    loading: false,
    selectedColor: '' as string,
    offset: 0,
    limit: 40,
  }),

  actions: {
    async fetchPokemon() {
      this.loading = true;
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=${this.limit}`
        );

        const newPokemon = await Promise.all(
          response.data.results.map(async (pokemon: Pokemon) => {
            return await this.fetchPokemonDetails(pokemon.name);
          })
        );
        this.pokemonList.push(...newPokemon);
        this.loading = false;
      } catch (err) {
        console.error('Error al realizar la petición', err);
      } finally {
        this.loading = false;
      }
    },

    async fetchPokemonDetails(name: string): Promise<DetailedPokemon> {
      try {
        const details = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const descriptionResponse = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${details.data.id}`
        );

        return {
          id: details.data.id,
          name: details.data.name,
          image: details.data.sprites.other['official-artwork'].front_default,
          type: details.data.types.map(
            (type: { type: { name: string } }) => type.type.name
          ),
          height: details.data.height / 10,
          weight: details.data.weight / 10,
          stats: {
            attack: details.data.stats.find(
              (s: any) => s.stat.name === 'attack'
            ).base_stat,
            defense: details.data.stats.find(
              (s: any) => s.stat.name === 'defense'
            ).base_stat,
            speed: details.data.stats.find((s: any) => s.stat.name === 'speed')
              .base_stat,
            hp: details.data.stats.find((s: any) => s.stat.name === 'hp')
              .base_stat,
          },
          description:
            descriptionResponse.data.flavor_text_entries.find(
              (entry: { language: { name: string }; flavor_text: string }) =>
                entry.language.name === 'es'
            )?.flavor_text || 'No description available',
          habitat: descriptionResponse.data.habitat?.name || 'Desconocido',
          generation:
            descriptionResponse.data.generation?.name || 'Desconocida',
        };
      } catch (err) {
        console.error(`Error al obtener detalles de Pokémon ${name}`, err);
        throw err;
      }
    },

    setSelectedColor(color: string) {
      this.selectedColor = color;
    },

    getSelectedColor() {
      return this.selectedColor;
    },

    morePokemon() {
      this.offset += this.limit;
      this.fetchPokemon();
    },
  },
});
