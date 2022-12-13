import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomePage from '@/views/HomePage/HomePage.vue';
import NotFoundPage from '@/views/404Page/404Page.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about-us',
    name: 'aboutUs',
    component: () => import('@/views/AboutUs/AboutUs.vue'),
  },
  {
    path: '/contact-us',
    name: 'contactUs',
    component: () => import('@/views/ContactUs/ContactUs.vue'),
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/BlogPage/BlogPage.vue'),
  },
  {
    name: 'notFoundPage',
    path: '*',
    component: NotFoundPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
