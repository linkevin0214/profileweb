<script setup>
import NavBar from './components/NavBar.vue';
</script>

<!-- App.vue -->
<template>
    <!-- 背景 -->
    <div class="fixed inset-0 bg-gradient-to-b from-gray-900 to-gray-800 -z-10"></div>

    <!-- 導覽列 -->
    <NavBar />

    <!-- 路由頁面內容 -->
  <div class="flex justify-center px-4">
      <div class="w-full max-w-7xl">
      <router-view />
    </div>
  </div>
  
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
