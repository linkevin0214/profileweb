<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
  
  <NavBar />
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
