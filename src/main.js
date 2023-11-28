import { createApp } from 'vue';
import 'normalize.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './components/MainPage.vue';
import ServicesPage from './components/ServicesPage.vue';
import ServicesElementPage from './components/ServicesElementPage.vue';
import { servicesList } from './utils/constans/servicesList';

const routes = [
  { path: '/', component: MainPage },
  { path: '/services', component: ServicesPage },
  { path: '/services/construction', component: ServicesElementPage, props:{ item: servicesList[0]} },
  { path: '/services/development', component: ServicesElementPage, props:{ item: servicesList[1]} },
  { path: '/services/interior', component: ServicesElementPage, props:{ item: servicesList[2]} },
  { path: '/services/repairs', component: ServicesElementPage, props:{ item: servicesList[3]} }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
const app = createApp(App);
app.use(router)
app.mount('#app')
