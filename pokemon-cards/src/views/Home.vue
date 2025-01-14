<script setup lang="ts">
import { usePokemonStore } from '../store/PokemonStore.ts';
import { onMounted } from 'vue';
import PokemonCard from '../components/pokemonCard.vue';

const pokemonStore = usePokemonStore();

onMounted(() => {
  pokemonStore.fetchPokemon();
});
</script>

<template>
  <div class="p-4">
    <div v-if="pokemonStore.loading" class="text-center text-lg font-semibold">
      Cargando...
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
    >
      <PokemonCard
        v-for="pokemon in pokemonStore.pokemonList"
        :key="pokemon.id"
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>
