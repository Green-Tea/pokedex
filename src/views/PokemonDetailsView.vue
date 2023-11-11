<script setup>
import { ref, onMounted } from 'vue'
import PokemonService from '@/services/PokemonService.js';

const thePokemon = ref(null)

const props = defineProps({
    id: { required: true }
})

onMounted(() => {
    PokemonService.getPokemon(props.id)
    .then((response) => {
        thePokemon.value = response.data
    })
    .catch((error) => {
        console.log(error)
    })
})
</script>

<template>
    <div v-if="thePokemon">
        <img :src="thePokemon.imageUrl" alt="Pokemon Image">
        <h1>{{  thePokemon.name }}</h1>
        <p><b>Type 1:</b> {{ thePokemon.type1 }} <b>Type 2: </b> {{ thePokemon.type2 }}</p>
        <br />
        <p><b>Japanese Name: </b> {{ thePokemon.japaneseName }}</p>
        <br />
        <p><b>Evolution: </b> {{ thePokemon.evolution }}</p>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Almendra+SC&family=Montserrat:wght@300&display=swap');

div {
  font-family: 'Almendra SC', serif;
  font-family: 'Montserrat', sans-serif;
}
</style>