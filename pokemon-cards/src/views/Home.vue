<script setup lang="ts">
import { usePokemonStore } from '../store/PokemonStore.ts';
import { onMounted, ref, computed } from 'vue';
import PokemonCard from '../components/pokemonCard.vue';
import logo from '../assets/logo pokemon.png';
import { QSelect } from 'quasar';
import type { Pokemon } from '../interface/pokemonInterface.ts';
import type { TypeOption } from '../interface/typeOption.ts';
import { useRouter } from 'vue-router';

const router = useRouter(); //para poder usar la ruta
const pokemonStore = usePokemonStore(); //para usar el store
const searchName = ref(''); //variable reactiva para buscar pokemon
const selectedType = ref<TypeOption | null>(null); //variable reactiva para buscar los tipos de pokemon

//limpia el input y el select para que vuelvan a aparecer todos los pokemon
const resetFilters = () => {
  searchName.value = '';
  selectedType.value = null;
};

//esto se encarga de filtrar los pokemon por nombre o por su tipo
const filteredPokemons = computed(() => {
  const filteredList = pokemonStore.pokemonList.filter((pokemon: Pokemon) => {
    const NameFound = pokemon.name
      .toLowerCase()
      .includes(searchName.value.toLowerCase());

    const typeValue = selectedType.value ? selectedType.value.value : null;

    const typesFound = typeValue
      ? pokemon.type.includes(typeValue.toLowerCase())
      : true;

    //retorna nombre encontrado y / o tipo encontrado
    return NameFound && typesFound;
  });

  return filteredList.slice();
});

//colores para las tarjetas dependiendo del tipo de pokemon
const typeColors: Record<string, string> = {
  normal: '#BFB16E',
  fighting: '#CF5C34',
  flying: '#BEA0C2',
  poison: '#A775B3',
  ground: '#E19F62',
  rock: '#7A7E81',
  bug: '#6BBE57',
  ghost: '#7A63A4',
  steel: '#A8A8A8',
  fire: '#F7A84D',
  water: '#59A3D3',
  grass: '#75C27A',
  electric: '#F1D479',
  psychic: '#E9738D',
  ice: '#A3D7F0',
  dragon: '#7F63B7',
  dark: '#1D8691',
  fairy: '#F7A7D3',
  stellar: '#A88ED5',
};

//función para cargar más Pokémon
const loadMorePokemons = () => {
  pokemonStore.morePokemon();
};

//función para desplazarse hacia arriba
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

//funcion que permite que al dar un click en la tarjeta se redirija componente de detalle
//y envie informacion como el id y el nombre desde la ruta
const goDetails = (id: number, name: string, color: string) => {
  pokemonStore.setSelectedColor(color);
  router.push({
    name: 'PokemonDetails',
    params: { id, name },
  });
};

// ciclo de vida para mostrar los pokemon despues de montado el Dom
onMounted(() => {
  if (pokemonStore.pokemonList.length === 0) {
    pokemonStore.fetchPokemon();
  }
});
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center"
    style="background-color: #fde047"
  >
    <!-- stilo del logo principal de pokemon  -->
    <div class="mb-8">
      <img
        :src="logo"
        alt="Pokemon Logo"
        class="w-80 sm:w-96 transition-transform duration-300 hover:scale-110 cursor-pointer"
      />
    </div>

    <div
      class="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-4xl mb-8"
    >
      <!-- q-input buscador de pokemones -->
      <div class="w-full sm:w-auto">
        <q-input
          v-model="searchName"
          outlined
          placeholder="Busca tu pokemon"
          class="w-full sm:w-72 bg-white text-gray-800 border-gray-400"
          input-class="text-gray-800"
          dense
        />
      </div>

      <!-- opciones para seleccionar el tipo de pokemon  -->
      <div class="w-full sm:w-auto">
        <q-select
          v-model="selectedType"
          :options="[
            { label: 'Normal', value: 'normal' },
            { label: 'Lucha', value: 'fighting' },
            { label: 'Volador', value: 'flying' },
            { label: 'Veneno', value: 'poison' },
            { label: 'Tierra', value: 'ground' },
            { label: 'Roca', value: 'rock' },
            { label: 'Bicho', value: 'bug' },
            { label: 'Fantasma', value: 'ghost' },
            { label: 'Acero', value: 'steel' },
            { label: 'Fuego', value: 'fire' },
            { label: 'Agua', value: 'water' },
            { label: 'Planta', value: 'grass' },
            { label: 'Eléctrico', value: 'electric' },
            { label: 'Psíquico', value: 'psychic' },
            { label: 'Hielo', value: 'ice' },
            { label: 'Dragón', value: 'dragon' },
            { label: 'Oscuro', value: 'dark' },
            { label: 'Hada', value: 'fairy' },
          ]"
          outlined
          label="Tipo de pokemon"
          class="w-full sm:w-72 bg-white text-gray-800 border-gray-400"
          dense
        />
      </div>
    </div>

    <!--estilo del  Botón de Inicio -->
    <div class="mb-8">
      <q-btn
        label="Inicio"
        color="primary"
        class="text-white text-lg"
        @click="resetFilters"
      />
    </div>

    <!-- organizacion de tarjetas con grid  -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl pt-8"
    >
      <PokemonCard
        v-for="pokemon in filteredPokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
        :color="typeColors[pokemon.type[0]] || '#D1D1D1'"
        @click="
          goDetails(pokemon.id, pokemon.name, typeColors[pokemon.type[0]])
        "
      />
    </div>

    <div v-if="pokemonStore.loading" class="text-center text-lg font-semibold">
      Cargando...
    </div>

    <!-- Botones para cargar más Pokémon y subir -->
    <div
      class="flex flex-col sm:flex-row justify-center items-center gap-4 pt-12 pb-12"
    >
      <q-btn
        label="Cargar más Pokémon"
        color="primary"
        class="text-white text-lg"
        @click="loadMorePokemons"
      />
      <q-btn
        icon="arrow_upward"
        label="Subir"
        color="primary"
        class="text-white text-lg"
        @click="scrollToTop"
      />
    </div>
  </div>
</template>
