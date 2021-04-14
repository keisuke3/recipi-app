import { createRouter, createWebHistory } from 'vue-router';
import RecipeList from '../../components/pages/RecipeList.vue';
import RecipeRegistration from '../../components/pages/RecipeRegistration.vue';
import ShoppingList from '../../components/pages/ShoppingList.vue';

export const router = createRouter({
  history: createWebHistory(),
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
