import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import App from './App.vue';
import router from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const app = createApp(App);

// Use Element Plus and the router
app.use(ElementPlus);
app.use(router);

// Register Element Plus icons globally
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// Mount the app to the DOM
app.mount('#app');
