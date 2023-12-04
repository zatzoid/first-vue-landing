import { createApp } from 'vue';
import 'normalize.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './components/MainPage.vue';
import ServicesPage from './components/ServicesPage.vue';
import WorkPage from './components/WorkPage.vue';
import ServicesElementPage from './components/ServicesElementPage.vue';
import WorkElementPage from './components/WorkElementPage.vue';
import AboutPage from './components/AboutPage.vue';
import NewsPage from './components/NewsPage.vue';
import NewsPostPage from './components/NewsPostPage.vue';
import ContactsPage from './components/ContactsPage.vue';
import NotFoundPage from './components/NotFoundPage.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/first-vue-landing', component: MainPage },
  { path: '/services', component: ServicesPage },
  { path: '/services/:itemName', component: ServicesElementPage, props: route => ({ itemName: route.params.itemName }) },
  { path: '/work', component: WorkPage },
  { path: '/work/:itemName', component: WorkElementPage, props: route => ({ itemName: route.params.itemName }) },
  { path: '/about', component: AboutPage },
  { path: '/news', component: NewsPage },
  { path: '/news/post/:postId', component: NewsPostPage, props: route => ({ postId: route.params.postId }), },
  { path: '/post', redirect: '/news', },
  { path: '/contacts', component: ContactsPage },
  { path: '/:pathMatch(.*)*', component: NotFoundPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
const app = createApp(App);
app.use(router)
app.mount('#app')
