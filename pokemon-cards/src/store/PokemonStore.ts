import { defineStore } from 'pinia';
import axios from 'axios';
import type { Pokemon, DetailedPokemon } from '../interface/pokemonInterface';

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemonList: [] as DetailedPokemon[], // Aquí almacenamos los Pokémon
    loading: false, // Estado de carga
    selectedColor: '' as string, // Este estado es para almacenar el color del Pokémon seleccionado
    offset: 0,
    limit: 40,
  }),

  actions: {
    // Método para traer los Pokémon y hacer un mapeo para ver los tipos
    async fetchPokemon() {
      this.loading = true;
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=${this.limit}` // Limitar la cantidad de Pokémon
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

    //esta segunda peticion que se hace es para traer descripciones detalles caracteristicas habilidades etc
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
                entry.language.name === 'es' // Configurar el lenguaje en español
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

    // Acción para guardar el color seleccionado
    setSelectedColor(color: string) {
      this.selectedColor = color;
    },

    // Acción para obtener el color seleccionado
    getSelectedColor() {
      return this.selectedColor;
    },

    morePokemon() {
      this.offset += this.limit;
      this.fetchPokemon();
    },
  },
});
