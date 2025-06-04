// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../components/AboutSection.vue';
import ContactView from '../components/ContactSection.vue';
import PortfolioView from '../components/PortfolioSection.vue';
import FooterView from '../components/FooterSection.vue';
import HeaderView from '../components/HeaderSection.vue';
import ServicesView from '../components/ServicesSection.vue';

const routes = [
  { path: '/about', component: AboutView },
  { path: '/contact', component: ContactView },
  { path: '/portfolio',component: PortfolioView},
  { path: '/foot',component: FooterView},
  { path: '/home',component:HeaderView},
  { path: '/services',component:ServicesView}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
