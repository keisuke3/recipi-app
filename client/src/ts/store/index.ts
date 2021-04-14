import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { recipeList } from './modules/recipeList';
import { shoppingList } from './modules/shoppingList';

export interface State {
  recipeList: {
    recipes: [];
  };
}

export const key: InjectionKey<Store<State>> = Symbol();
export const useStore = () => baseUseStore(key);

export const store = createStore<State>({
  modules: {
    recipeList,
    shoppingList,
  },
});
