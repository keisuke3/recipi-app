<template>
  <div>
    <p>ログイン</p>
    <input v-model="state.userName" type="text" placeholder="ユーザー名" />
    <input v-model="state.password" type="password" placeholder="パスワード" />
    <button @click="handleLoginClick">ログイン</button>
    <router-link to="/signup">新規会員登録</router-link>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, useCssModule } from 'vue';
import { signIn } from '../../ts/utilities/auth';

export default defineComponent({
  setup() {
    const style = useCssModule();
    const state = reactive({
      userName: '',
      password: '',
    });

    const handleLoginClick = () => {
      signIn(state.userName, state.password);
    };

    return {
      state,
      style,
      handleLoginClick,
    };
  },
});
</script>
