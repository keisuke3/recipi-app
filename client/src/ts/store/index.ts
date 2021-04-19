import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { recipeList } from './modules/recipeList';
import { shoppingList } from './modules/shoppingList';
import { userInfo } from './modules/userInfo';

export interface State {
  recipeList: {
    recipes: [];
  };
  userInfo: {
    email: string;
    userName: string;
    errorMessage: string;
  };
}

export const key: InjectionKey<Store<State>> = Symbol();
export const useStore = () => baseUseStore(key);

export const store = createStore<State>({
  modules: {
    recipeList,
    shoppingList,
    userInfo,
  },
});
