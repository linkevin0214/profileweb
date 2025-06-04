<script setup lang="ts">
import router from '../router';

</script>

<template>
  <div class="w-  min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
    <!-- Hero Section -->
    <section class="text-center py-24 px-6">
      <h1 class="text-5xl font-extrabold tracking-tight mb-4">嗨，我是Kevin 👋</h1>
      <p class="text-xl text-gray-300 mb-8">
        我專門打造高效網站與 App，協助企業實現數位轉型。
      </p>
      <div class="flex justify-center gap-4">
        <router-link
          to="/services"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-200 shadow"
        >
          我能做什麼
        </router-link>
        <router-link
          to="/contact"
          class="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-200 shadow"
        >
          聯絡我
        </router-link>
      </div>
    </section>

    </div>
</template>

<style hero>
.hero {
    padding: 3rem 1rem;
    text-align: center;
    
}
.hero h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}
.cta {
    margin-top: 2rem;
}

.button {
    display: inline-block;
    margin: 0 1rem;
    padding: 0.75rem 1.5rem;
    background-color: #333;
    color:white;
    text-decoration: none;
    border-radius: 5px;
}
.button.secondary {
    background-color: #666;
}
.services, .featured-work, .contact-cta {
    padding: 2rem 1rem;
    text-align: center;
}
.project img {
    width: 100%;
    max-width: 600px;
    margin-bottom: 1rem;
}
</style>