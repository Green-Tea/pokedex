<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/js/firebase.js'
import { collection, onSnapshot } from "firebase/firestore";

import ProductCard from '@/components/ProductCard.vue'

const pokemons = ref([])

async function getPokemons() {
  onSnapshot(collection(db, 'pokemons'), (querySnapshot) => {
    let pokemonsSnapshot = []
    querySnapshot.forEach((doc) => {
      let data = doc.data()
      let pokemon = {
        "id": data.id,
        "name": data.name,
        "type1": data.type1,
        "type2": data.type2,
        "japaneseName": data.japaneseName,
        "evolution": data.evolution,
        "imageUrl": data.imageUrl
      }

      pokemonsSnapshot.push(pokemon)
    })
    pokemons.value = pokemonsSnapshot
  })
}

onMounted(async () => {
  console.log("Connecting to Firebase")
  await getPokemons()
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

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .product-row {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
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
