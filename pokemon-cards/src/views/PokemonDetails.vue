<script setup lang="ts">
import { onMounted, ref } from 'vue';
import logo from '../assets/logo pokemon.png';
import pokebola from '../assets/Pokebola.png';
import { usePokemonStore } from '../store/PokemonStore';
import { useRoute } from 'vue-router';
import type { DetailedPokemon } from '../interface/pokemonInterface';

const loading = ref(true);
const pokemonStore = usePokemonStore();
const route = useRoute();

const pokemonDetails = ref<DetailedPokemon>({
  name: '',
  image: '',
  height: 0,
  weight: 0,
  stats: {
    attack: 0,
    defense: 0,
    speed: 0,
    hp: 0,
  },
  description: '',
  habitat: '',
  generation: '',
  id: 0,
  type: [],
});

const id = route.params.id;

const pokemonTypes = [
  { label: 'Normal ♻️', value: 'normal' },
  { label: 'Lucha 🥊', value: 'fighting' },
  { label: 'Volador 🕊️', value: 'flying' },
  { label: 'Veneno ☠️', value: 'poison' },
  { label: 'Tierra 🌍', value: 'ground' },
  { label: 'Roca 🪨', value: 'rock' },
  { label: 'Bicho 🦟', value: 'bug' },
  { label: 'Fantasma 👻', value: 'ghost' },
  { label: 'Acero ⚙️', value: 'steel' },
  { label: 'Fuego 🔥', value: 'fire' },
  { label: 'Agua 💧', value: 'water' },
  { label: 'Planta 🌱', value: 'grass' },
  { label: 'Eléctrico ⚡', value: 'electric' },
  { label: 'Psíquico 🧠', value: 'psychic' },
  { label: 'Hielo ❄️', value: 'ice' },
  { label: 'Dragón 🐉', value: 'dragon' },
  { label: 'Oscuro 🌑', value: 'dark' },
  { label: 'Hada 🧚', value: 'fairy' },
];

const pokemonHabitats = [
  { label: 'Cueva 🦇', value: 'cave' },
  { label: 'Bosque 🌳', value: 'forest' },
  { label: 'Pradera 🌾', value: 'grassland' },
  { label: 'Montaña ⛰️', value: 'mountain' },
  { label: 'Mar 🌊', value: 'sea' },
  { label: 'Urbano 🏙️', value: 'urban' },
  { label: 'Orilla del mar 🌊', value: 'waters-edge' },
  { label: 'Raro 🌟', value: 'rare' },
];

onMounted(async () => {
  try {
    const pokemon = await pokemonStore.fetchPokemonDetails(`${id}`);
    pokemonDetails.value = {
      name: pokemon.name,
      image: pokemon.image,
      height: pokemon.height,
      weight: pokemon.weight,
      stats: pokemon.stats,
      description: pokemon.description,
      habitat: pokemon.habitat,
      generation: pokemon.generation,
      id: pokemon.id,
      type: pokemon.type,
    };
    loading.value = false;
  } catch (error) {
    console.error('No se encontraron detalles para este Pokémon', error);
    loading.value = false;
  }
});
</script>

<template>
  <div
    class="flex items-center justify-center min-h-screen p-4"
    style="background-color: #fde047"
  >
    <div class="absolute top-4 left-4 z-10">
      <router-link
        to="/pokemon"
        class="text-lg font-semibold text-blue-500 hover:underline mt-2 block"
      >
        <img :src="pokebola" alt="Pokébola" class="w-12 h-12" />
        Volver
      </router-link>
    </div>

    <div class="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
      <img
        :src="logo"
        alt="Pokemon Logo"
        class="w-80 sm:w-96 transition-transform duration-300 hover:scale-110 cursor-pointer"
      />
    </div>

    <div
      class="w-full max-w-4xl rounded-xl shadow-2xl border border-black bg-white mt-24 overflow-hidden flex flex-col lg:flex-row cursor-pointer"
    >
      <div
        class="w-full lg:w-1/2 flex flex-col justify-between"
        :style="{ backgroundColor: pokemonStore.selectedColor || '#CBD5E0' }"
      >
        <div class="p-4 text-white">
          <h2 class="text-3xl font-bold drop-shadow-lg">
            #{{ id }} - {{ pokemonDetails.generation }}
          </h2>
        </div>

        <div class="flex flex-col items-center text-center p-4">
          <div
            class="w-40 h-40 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
            :style="{
              backgroundColor: pokemonStore.selectedColor || '#FFFFFF',
            }"
          >
            <img
              :src="pokemonDetails.image"
              :alt="pokemonDetails.name"
              class="w-32 h-32 object-contain"
            />
          </div>
          <h1 class="text-3xl font-extrabold text-gray-800 capitalize mt-4">
            {{ pokemonDetails.name }}
          </h1>

          <div class="mt-4">
            <h3 class="text-xl font-semibold text-gray-800">Tipo de Pokémon</h3>
            <div class="flex justify-center gap-4 mt-2">
              <span
                v-for="(type, index) in pokemonDetails.type"
                :key="index"
                class="px-3 py-1 bg-yellow-200 text-amber-900 font-semibold rounded-full shadow-md"
              >
                {{ pokemonTypes.find((t) => t.value === type)?.label || type }}
              </span>
            </div>
          </div>

          <div
            class="flex items-center justify-center mt-4 text-gray-700 gap-4"
          >
            <span
              class="px-3 py-1 bg-blue-200 text-blue-800 font-semibold rounded-full shadow-md"
            >
              Altura: {{ pokemonDetails.height }} m
            </span>
            <span
              class="px-3 py-1 bg-green-200 text-green-800 font-semibold rounded-full shadow-md"
            >
              Peso: {{ pokemonDetails.weight }} kg
            </span>
          </div>

          <p class="text-black mt-4 leading-relaxed text-sm">
            {{ pokemonDetails.description }}
          </p>
        </div>
      </div>

      <div
        class="w-full lg:w-1/2 bg-gray-200 p-4 flex flex-col justify-center items-center"
      >
        <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">
          Estadísticas
        </h2>
        <div class="w-full max-w-md">
          <table
            class="w-full bg-white rounded-lg shadow-lg border-collapse text-center"
          >
            <thead>
              <tr class="bg-gray-100">
                <th class="py-3 px-4 text-left text-gray-800 font-semibold">
                  Atributo
                </th>
                <th class="py-3 px-4 text-center text-gray-800 font-semibold">
                  Valor
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-200 hover:bg-gray-50">
                <td class="py-3 px-4 text-gray-700 flex items-center gap-2">
                  🗡️ Ataque
                </td>
                <td class="py-3 px-4 text-center text-gray-700">
                  {{ pokemonDetails.stats.attack }}
                </td>
              </tr>
              <tr class="border-t border-gray-200 hover:bg-gray-50">
                <td class="py-3 px-4 text-gray-700 flex items-center gap-2">
                  🛡️ Defensa
                </td>
                <td class="py-3 px-4 text-center text-gray-700">
                  {{ pokemonDetails.stats.defense }}
                </td>
              </tr>
              <tr class="border-t border-gray-200 hover:bg-gray-50">
                <td class="py-3 px-4 text-gray-700 flex items-center gap-2">
                  ⚡ Velocidad
                </td>
                <td class="py-3 px-4 text-center text-gray-700">
                  {{ pokemonDetails.stats.speed }}
                </td>
              </tr>
              <tr class="border-t border-gray-200 hover:bg-gray-50">
                <td class="py-3 px-4 text-gray-700 flex items-center gap-2">
                  ❤️ Puntos de Vida
                </td>
                <td class="py-3 px-4 text-center text-gray-700">
                  {{ pokemonDetails.stats.hp }}
                </td>
              </tr>

              <tr class="border-t border-gray-200 hover:bg-gray-50">
                <td class="py-3 px-4 text-gray-700 flex items-center gap-2">
                  🌍 Hábitat
                </td>
                <td class="py-3 px-4 text-center text-gray-700">
                  {{
                    pokemonHabitats.find(
                      (habitat) => habitat.value === pokemonDetails.habitat
                    )?.label || pokemonDetails.habitat
                  }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
