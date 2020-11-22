import { requestApi } from '../../utilities/requestApi';

const API_CONF = {
  method: 'get',
  url: '/recipes',
};

export const recipeList = {
  namespaced: true,
  state: {
    recipes: [],
  },
  mutations: {
    getAllRecipes(state, recipes) {
      state.recipes = recipes;
    },
  },
  actions: {
    async getAllRecipes({ commit }) {
      const recipes = await requestApi(API_CONF);
      commit('getAllRecipes', recipes);
    },
  },
};
