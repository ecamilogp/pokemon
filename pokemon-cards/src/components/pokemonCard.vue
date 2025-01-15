<script setup lang="ts">
import { defineProps } from 'vue';
import { QCard, QCardSection } from 'quasar';

const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <!--estilo y margin para la tarjeta y que se diferencie cada una -->

  <div
    class="rounded-xl shadow-lg p-1 bg-black"
    :style="{ maxWidth: '210px', margin: '1rem' }"
  >
    <q-card
      :class="[
        'rounded-xl transform hover:scale-105 transition-all duration-300 ease-in-out',
      ]"
      :style="{
        backgroundColor: props.color,
        borderRadius: '25px',
      }"
    >
      <!--esto se encarga del estilo de la Imagen del pokemon en la tarjeta  -->
      <q-card-section class="flex justify-center relative">
        <div
          class="w-32 h-32 bg-gray-100 rounded-full -mt-14 z-10 flex items-center justify-center shadow-md"
        >
          <img
            :src="props.pokemon.image"
            :alt="props.pokemon.name"
            class="w-28 h-28 object-contain"
          />
        </div>
      </q-card-section>

      <!-- estilo para el nombre y el id del pokemon dentro de la tarjeta  -->
      <q-card-section class="text-center">
        <div class="bg-gray-100 text-sm text-gray-900 mb-1">
          #{{ props.pokemon.id }}
        </div>
        <div
          class="tex text-2xl font-semibold text-gray-900"
          style="margin-top: 5px"
        >
          {{ props.pokemon.name }}
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>
.tex {
  text-shadow: 0px 2px 4px rgba(245, 243, 243, 0.957);
}
</style>
