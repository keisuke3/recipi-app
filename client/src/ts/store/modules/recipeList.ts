import { requestApi } from '../../utilities/requestApi';
import { GET_CONF } from '../../utilities/axiosConfig';
import { Mutations, Actions } from '../types/types';
import { State, IMutations, IActions } from '../types/recipeListType';

const state = {
  recipes: [],
};

const mutations: Mutations<State, IMutations> = {
  getAllRecipes(state, recipes) {
    state.recipes = recipes;
  },
};

const actions: Actions<State, IActions, IMutations> = {
  async getAllRecipes({ commit }) {
    const recipes = await requestApi(GET_CONF);
    commit('getAllRecipes', recipes);
  },
};

export const recipeList = {
  namespaced: true,
  state,
  mutations,
  actions,
};
