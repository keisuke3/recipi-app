import { repositoryFactory } from '../../utilities/repositories/repositoryFactory';
import { Mutations, Actions } from '../types/types';
import { State, IMutations, IActions } from '../types/userInfoType';

const authRepository = repositoryFactory.post('signup');

const state = {
  email: '',
  displayName: '',
};

const mutations: Mutations<State, IMutations> = {
  signUp(state, userInfo) {
    state.email = userInfo.email;
    state.displayName = userInfo.displayName;
  },
};

const actions: Actions<State, IActions, IMutations> = {
  async signUp({ commit }, registInfo) {
    const userInfo = await authRepository.post(registInfo);
    commit('signUp', userInfo);
  },
};

export const userInfo = {
  namespaced: true,
  state,
  mutations,
  actions,
};
