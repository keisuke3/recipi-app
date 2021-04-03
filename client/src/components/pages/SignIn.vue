<template>
  <div :class="style.signIn">
    <form action="" :class="style.form">
      <VHeading tag="h2" class-name="heading--h2">ログイン</VHeading>
      <div :class="style.email">
        <VInput
          id="email"
          type="text"
          :value="state.email"
          :required="true"
          label-text="メールアドレス"
          @handle-input-change="handleInputChange($event, 'email')"
        />
      </div>
      <div :class="style.password">
        <VInput
          id="password"
          type="password"
          :value="state.password"
          :required="true"
          label-text="パスワード"
          @handle-input-change="handleInputChange($event, 'password')"
        />
      </div>
      <VButton :class="style.loginButton" class-name="authButton" @click.prevent="handleLoginClick()">
        ログインする
      </VButton>
      <p :class="style.regist">
        アカウントをお持ちでないですか？
        <router-link to="/signup" :class="style.registText">登録する</router-link>
      </p>
    </form>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, useCssModule } from 'vue';
import { useStore } from '../../ts/store/index';
import { VButton, VHeading, VInput } from '@Components/atoms';

export default defineComponent({
  components: {
    VButton,
    VHeading,
    VInput,
  },
  setup() {
    const style = useCssModule();
    const store = useStore();

    const state = reactive({
      email: '',
      password: '',
    });

    type stateType = 'email' | 'password';
    const handleInputChange = (value: string, stateType: stateType) => {
      state[stateType] = value;
    };

    const handleLoginClick = () => {
      store.dispatch('userInfo/signIn', state);
    };

    return {
      state,
      style,
      handleInputChange,
      handleLoginClick,
    };
  },
});
</script>
<style module lang="scss">
@import '../../css/color';
@import '../../css/functions/rem';

.signIn {
  margin: 0 auto;
  padding-top: 100px;
  width: 500px;
}

.form {
  align-items: center;
  background-color: $color-F9F9F9;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.15) 0 2px 8px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  transition: 0.3s;
  width: 100%;
}

.email,
.password {
  margin-top: 30px;
  position: relative;
  width: 250px;
}

.loginButton {
  margin-top: 30px;
}

.regist {
  margin-top: 20px;
}

.registText {
  color: $color-FE5C01;
}
</style>
