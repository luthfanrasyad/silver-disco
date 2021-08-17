import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Recipes from '../views/Recipes';
import Admin from '../views/Admin';
import RecipeEdit from '../views/RecipeEdit';

Vue.use(VueRouter);

const routes = [
  {
    path: '/recipes',
    name: 'recipes',
    component: Home,
  },
  {
    path: '/recipes/:slug',
    name: 'Recipe',
    component: Recipes,
  },
  {
    path: '/admin/recipes',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/admin/recipes/edit/:slug',
    name: 'Recipe Edit',
    component: RecipeEdit,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
