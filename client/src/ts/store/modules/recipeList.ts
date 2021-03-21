import { repositoryFactory } from '../../utilities/repositoryFactory';
import { Mutations, Actions } from '../types/types';
import { State, IMutations, IActions } from '../types/recipeListType';

const recipesRepository = repositoryFactory.get('recipes');

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
    const recipes = await recipesRepository.get();
    commit('getAllRecipes', recipes);
  },
};

export const recipeList = {
  namespaced: true,
  state,
  mutations,
  actions,
};
