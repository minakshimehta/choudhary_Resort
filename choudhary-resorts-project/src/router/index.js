// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '@/components/About.vue';
import Services from '@/components/Services.vue';
import Contact from '@/components/Contact.vue';
import Weddings from '@/components/Weddings.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact },
  { path: '/weddings', component: Weddings }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
