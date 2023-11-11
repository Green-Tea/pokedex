<script setup>

defineProps({
  pokemon: {
    type: Object,
    required: true
  }
})


</script>

<template>
  <RouterLink :to="{name: 'pokemon-details', params: {id: pokemon.id}}">
    <div class="product-card">
      <img :src="pokemon.imageUrl" alt="Pokemon Image">
      <h2>{{ pokemon.name }}</h2>
    </div>
  </RouterLink>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Almendra+SC&family=Montserrat:wght@300&display=swap');

div {
  font-family: 'Almendra SC', serif;
  font-family: 'Montserrat', sans-serif;
}

.product-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 20px;
  margin-inline: 20px;
  text-align: center;
}
.product-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}


</style>
