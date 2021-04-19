import { repositoryFactory } from '../../utilities/repositories/repositoryFactory';
import { Mutations, Actions } from '../types/types';
import { State, IMutations, IActions } from '../types/userInfoType';
import { signIn } from '../../utilities/auth';

const authRepository = repositoryFactory.post('signup');

const state = {
  email: '',
  userName: '',
  errorMessage: '',
};

const mutations: Mutations<State, IMutations> = {
  signUp(state, userInfo) {
    state.email = userInfo.email;
    state.userName = userInfo.userName;
  },
  signIn(state, userInfo) {
    state.email = userInfo.email;
    state.userName = userInfo.userName;
  },
  errorMessage(state, message) {
    state.errorMessage = message;
  },
};

const actions: Actions<State, IActions, IMutations> = {
  async signUp({ commit }, registInfo) {
    try {
      const userInfo = await authRepository.post(registInfo);
      if (!userInfo) throw new Error('会員登録に失敗しました。もう一度お試しください');
      commit('signUp', userInfo);
    } catch (error) {
      commit('errorMessage', error.message);
    }
  },
  async signIn({ commit }, loginInfo) {
    try {
      const user = await signIn(loginInfo.email, loginInfo.password);
      if (user) commit('signIn', user);
    } catch (error) {
      commit('errorMessage', error.message);
    }
  },
};

export const userInfo = {
  namespaced: true,
  state,
  mutations,
  actions,
};
