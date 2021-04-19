<template>
  <Form v-slot="{ handleSubmit }" :class="style.signIn" :validation-schema="signInSchema.validation" as="div">
    <form :class="style.form" novalidate @submit="handleSubmit($event, handleLoginClick)">
      <VHeading tag="h2" class-name="heading--h2">ログイン</VHeading>
      <span v-if="errorMessage" :class="style.errorMessage">{{ errorMessage }}</span>
      <div v-for="field in signInSchema.fields" :key="field.name" :class="style.inputWrap">
        <VInput
          :id="field.name"
          :name="field.name"
          :type="field.type"
          :required="field.required"
          :label-text="field.labelText"
        />
      </div>
      <VButton :class="style.loginButton" class-name="authButton">ログインする</VButton>
      <p :class="style.regist">
        アカウントをお持ちでないですか？
        <router-link to="/signup" :class="style.registText">登録する</router-link>
      </p>
    </form>
  </Form>
</template>

<script lang="ts">
import { defineComponent, useCssModule, computed } from 'vue';
import { useStore } from '../../ts/store/index';
import { Form } from 'vee-validate';
import { VButton, VHeading, VInput } from '@Components/atoms';
import { signInSchema } from '../../ts/utilities/schema';

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

    const handleLoginClick = (values: { email: string; password: string }) => {
      store.dispatch('userInfo/signIn', values);
    };

    return {
      style,
      handleLoginClick,
      signInSchema,
      errorMessage: computed(() => store.state.userInfo.errorMessage),
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

.loginButton {
  margin-top: 40px;
}

.regist {
  margin-top: 20px;
}

.registText {
  color: $color-FE5C01;
}
</style>
