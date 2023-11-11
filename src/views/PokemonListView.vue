<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { ref, onMounted } from 'vue'
import PokemonService from '../services/PokemonService';

const pokemons = ref(null)

onMounted(() => {
  PokemonService.getPokemons().then((response) => {
    pokemons.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
})
</script>

<template>
  <div class="products">
    <div v-if="pokemons">
      <div v-for="(row, index) in chunkArray(pokemons, 3)" :key="index" class="product-row">
        <ProductCard v-for="pokemon in row" :key="pokemon.id" :pokemon="pokemon" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-row {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>

<script>
export default {
  methods: {
    chunkArray(array, size) {
      return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
        array.slice(index * size, index * size + size)
      );
    },
  },
};
</script>
