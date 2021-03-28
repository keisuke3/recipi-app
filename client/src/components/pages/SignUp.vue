<template>
  <div>
    <p>新規会員登録</p>
    <input v-model="state.userName" type="text" placeholder="ユーザー名" />
    <input v-model="state.password" type="password" placeholder="パスワード" />
    <button @click="handleRegistClick">登録</button>
    <router-link to="/signin">ログインする</router-link>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, useCssModule } from 'vue';
import { useStore } from '../../ts/store/index';

export default defineComponent({
  setup() {
    const style = useCssModule();
    const store = useStore();

    const state = reactive({
      userName: '',
      password: '',
      displayName: '',
    });

    const handleRegistClick = () => {
      store.dispatch('userInfo/signUp', state);
    };

    return {
      state,
      style,
      handleRegistClick,
    };
  },
});
</script>
