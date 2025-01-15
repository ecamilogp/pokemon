import { defineStore } from 'pinia';
import axios from 'axios';
import type { Pokemon, DetailedPokemon } from '../interface/pokemonInterface';

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemonList: [] as DetailedPokemon[], //aqui almacenamos los pokemon
    loading: false, //estado de carga
    selectedColor: '' as string, //este estado es para almacenar el color del pokemon seleccionado
  }),

  actions: {
    /*metodo para traer los pokemon y hacemos un mapeo
     para poder ver el tipos atra vez del nombre que tenga el pokemon
    */
    async fetchPokemon() {
      this.loading = true;
      try {
        const response = await axios.get(
          'https://pokeapi.co/api/v2/pokemon?limit=200' //aqui limitamos la cantidad de pokemon
        );

        this.pokemonList = await Promise.all(
          response.data.results.map(async (pokemon: Pokemon) => {
            const details = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            );

            //esta segunda peticion que se hace es para traer descripciones detalles caracteristicas habilidades etc
            const descriptionResponse = await axios.get(
              `https://pokeapi.co/api/v2/pokemon-species/${details.data.id}`
            );

            //retorna todos los detalles que necesito de los pokemon
            return {
              id: details.data.id,
              name: details.data.name,
              image:
                details.data.sprites.other['official-artwork'].front_default,
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
                speed: details.data.stats.find(
                  (s: any) => s.stat.name === 'speed'
                ).base_stat,
                hp: details.data.stats.find((s: any) => s.stat.name === 'hp')
                  .base_stat,
              },
              description:
                descriptionResponse.data.flavor_text_entries.find(
                  (entry: {
                    language: { name: string };
                    flavor_text: string;
                  }) => entry.language.name === 'es' //configuramos el lenguaje a español
                )?.flavor_text || 'No description available',
            } as DetailedPokemon;
          })
        );
      } catch (err) {
        console.error('Error al realizar la petición', err);
      } finally {
        this.loading = false;
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
  },
});
