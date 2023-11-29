import { createApp } from 'vue';
import 'normalize.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './components/MainPage.vue';
import ServicesPage from './components/ServicesPage.vue';
import WorkPage from './components/WorkPage.vue';
import ServicesElementPage from './components/ServicesElementPage.vue';
import { servicesList } from './utils/constans/servicesList';
import WorkElementPage from './components/WorkElementPage.vue';
import { itemList } from './utils/constans/itemList';
import AboutPage from './components/AboutPage.vue';
import NewsPage from './components/NewsPage.vue';
import NewsPostPage from './components/NewsPostPage.vue';
import { newsList } from './utils/constans/newsList';
import ContactsPage from './components/ContactsPage.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/services', component: ServicesPage },
  { path: '/services/construction', component: ServicesElementPage, props: { item: servicesList[0] } },
  { path: '/services/development', component: ServicesElementPage, props: { item: servicesList[1] } },
  { path: '/services/interior', component: ServicesElementPage, props: { item: servicesList[2] } },
  { path: '/services/repairs', component: ServicesElementPage, props: { item: servicesList[3] } },
  { path: '/work', component: WorkPage },
  { path: '/work/Building', component: WorkElementPage, props: { item: itemList[0] } },
  { path: '/work/Building2', component: WorkElementPage, props: { item: itemList[1] } },
  { path: '/work/House', component: WorkElementPage, props: { item: itemList[2] } },
  { path: '/work/OfficeBuilding', component: WorkElementPage, props: { item: itemList[3] } },
  { path: '/work/Skyscraper', component: WorkElementPage, props: { item: itemList[4] } },
  { path: '/work/Mall', component: WorkElementPage, props: { item: itemList[5] } },
  { path: '/work/ApartmentComplex', component: WorkElementPage, props: { item: itemList[6] } },
  { path: '/work/Park', component: WorkElementPage, props: { item: itemList[7] } },
  { path: '/work/Library', component: WorkElementPage, props: { item: itemList[8] } },
  { path: '/about', component:  AboutPage },
  { path: '/news', component:  NewsPage },
  { path: '/news/post1', component:  NewsPostPage, props:{item: newsList[0]} },
  { path: '/news/post2', component:  NewsPostPage, props:{item: newsList[1]} },
  { path: '/news/post3', component:  NewsPostPage, props:{item: newsList[2]} },
  { path: '/news/post4', component:  NewsPostPage, props:{item: newsList[3]} },
  { path: '/news/post5', component:  NewsPostPage, props:{item: newsList[4]} },
  { path: '/news/post6', component:  NewsPostPage, props:{item: newsList[5]} },
  { path: '/contacts', component:  ContactsPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
const app = createApp(App);
app.use(router)
app.mount('#app')
