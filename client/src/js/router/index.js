import Vue from 'vue';
import Router from 'vue-router';

import RecipeList from '../../components/pages/RecipeList.vue';
import RecipeRegistration from '../../components/pages/RecipeRegistration.vue';
import ShoppingList from '../../components/pages/ShoppingList.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'recipe-list',
      component: RecipeList,
    },
    {
      path: '/registration',
      name: 'recipe-registration',
      component: RecipeRegistration,
    },
    {
      path: '/shopping',
      name: 'shopping-list',
      component: ShoppingList,
    },
  ],
});
