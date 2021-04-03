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
    const userInfo = await authRepository.post(registInfo);
    commit('signUp', userInfo);
  },
  async signIn({ commit }, loginInfo) {
    try {
      const user = await signIn(loginInfo.email, loginInfo.password);
      if (!user) throw new Error('ログインに失敗しました。');
      commit('signIn', user);
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
