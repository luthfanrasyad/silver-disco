import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Recipes from '../views/Recipes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/recipes',
    name: 'Promo',
    component: Home,
  },
  {
    path: '/recipes/:slug',
    name: 'Recipe',
    component: Recipes,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
