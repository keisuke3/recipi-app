<template>
  <div :class="style.signUp">
    <form action="" :class="style.form">
      <VHeading tag="h2" class-name="heading--h2">新規会員登録</VHeading>
      <div :class="style.userName">
        <VInput
          id="userName"
          type="text"
          :value="state.userName"
          :required="true"
          label-text="ユーザー名"
          @handle-input-change="handleInputChange($event, 'userName')"
        />
      </div>
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
      <VButton :class="style.registButton" class-name="authButton" @click.prevent="handleRegistClick()">
        登録する
      </VButton>
      <p :class="style.login">
        アカウントをお持ちですか？
        <router-link to="/signin" :class="style.loginText">ログインする</router-link>
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
      userName: '',
      email: '',
      password: '',
    });

    type stateType = 'userName' | 'email' | 'password';
    const handleInputChange = (value: string, stateType: stateType) => {
      state[stateType] = value;
    };

    const handleRegistClick = () => {
      store.dispatch('userInfo/signUp', state);
    };

    return {
      state,
      style,
      handleInputChange,
      handleRegistClick,
    };
  },
});
</script>

<style module lang="scss">
@import '../../css/color';
@import '../../css/functions/rem';

.signUp {
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

.userName,
.email,
.password {
  margin-top: 30px;
  position: relative;
  width: 250px;
}

.registButton {
  margin-top: 30px;
}

.login {
  margin-top: 20px;
}

.loginText {
  color: $color-FE5C01;
}
</style>
