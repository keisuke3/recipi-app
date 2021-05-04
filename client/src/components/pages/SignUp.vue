<template>
  <Form v-slot="{ handleSubmit }" :class="style.signUp" :validation-schema="signUpSchema.validation" as="div">
    <form :class="style.form" novalidate @submit="handleSubmit($event, handleRegistClick)">
      <VHeading tag="h2" class-name="heading--h2">新規会員登録</VHeading>
      <span v-if="errorMessage" :class="style.errorMessage">{{ errorMessage }}</span>
      <div v-for="field in signUpSchema.fields" :key="field.name" :class="style.inputWrap">
        <VInput
          :id="field.name"
          :name="field.name"
          :type="field.type"
          :required="field.required"
          :label-text="field.labelText"
        />
      </div>
      <VButton :class="style.registButton" class-name="authButton">登録する</VButton>
      <p :class="style.login">
        アカウントをお持ちですか？
        <router-link to="/signin" :class="style.loginText">ログインする</router-link>
      </p>
    </form>
  </Form>
</template>

<script lang="ts">
import { defineComponent, useCssModule, computed } from 'vue';
import { useStore } from '../../ts/store/index';
import { VButton, VHeading, VInput } from '@Components/atoms';
import { Form } from 'vee-validate';
import { signUpSchema } from '../../ts/utilities/schema';

export default defineComponent({
  components: {
    VButton,
    VHeading,
    VInput,
    Form,
  },
  setup() {
    const style = useCssModule();
    const store = useStore();

    const handleRegistClick = (values: { displayName: string; email: string; password: string }) => {
      store.dispatch('userInfo/signUp', values);
    };

    return {
      style,
      handleRegistClick,
      signUpSchema,
      errorMessage: computed(() => store.state.userInfo.errorMessage),
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
  position: relative;
  transition: 0.3s;
  width: 100%;
}

.errorMessage {
  color: $color-FE7773;
  font-size: rem(14);
  position: absolute;
  top: 65px;
}

.inputWrap {
  margin-top: 40px;
  position: relative;
  width: 250px;
}

.registButton {
  margin-top: 40px;
}

.login {
  margin-top: 20px;
}

.loginText {
  color: $color-FE5C01;
}
</style>
