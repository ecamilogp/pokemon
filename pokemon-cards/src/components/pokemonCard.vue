<script setup lang="ts">
import { defineProps } from 'vue';
import { QCard, QCardSection, QBtn } from 'quasar';

const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <q-card
    class="rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out"
    :style="{ maxWidth: '320px', margin: '0.5rem' }"
  >
    <q-card-section class="flex justify-center">
      <img
        :src="pokemon.image"
        :alt="pokemon.name"
        class="w-48 h-48 object-contain bg-gray-100 p-4"
      />
    </q-card-section>

    <q-card-section class="text-center">
      <div class="text-gray-500 text-sm mb-2">#{{ pokemon.id }}</div>

      <div class="text-2xl font-semibold text-gray-800 mb-4">
        {{ pokemon.name }}
      </div>
    </q-card-section>
  </q-card>
</template>
