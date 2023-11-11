<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="layout">
    <header>
  
      <div class="wrapper">
  
        <nav>
          <RouterLink to="/" class="router-link">Home</RouterLink>
          <RouterLink to="/about" class="router-link">About</RouterLink>
        </nav>
      </div>
    </header>
  </div>

  <RouterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Almendra+SC&family=Montserrat:wght@300&display=swap');

#layout {
  font-family: 'Almendra SC', serif;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smooting: antialiased;
  -moz-osx-font-smooting: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}

.router-link{
  margin-right: 10px;
}
</style>