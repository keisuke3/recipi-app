import Vue from 'vue';
import Vuex from 'vuex';
import { recipeList } from './modules/recipeList';
import { shoppingList } from './modules/shoppingList';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    recipeList,
    shoppingList,
  },
});
