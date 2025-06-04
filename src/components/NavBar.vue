<script setup lang="ts">
import router from '../router';

</script>

<template>
        <nav class="navbar" style="background: #333;">
            <router-link to="/home" class="nav-item">首頁</router-link>
            <router-link to="/about" class="nav-item">關於我</router-link>
            <router-link to="/services" class="nav-item">提供服務</router-link>
            <router-link to="/contact" class="nav-item">聯絡我</router-link>

        </nav>
</template>

<style scoped>
.navbar {
    position: fixed;
    top :  0;
    left : 0;
    right: 0;
    background: #333;
    padding: 1rem;
    z-index: 1000;
    display: flex;
    justify-content: center;
    gap: 2rem;
}
.nav-item {
    color: white;
    margin-right: 1rem;
    text-decoration: none;
}
.nav-item.router-link-active {
    font-weight: bold;
    text-decoration: underline;
}
</style>