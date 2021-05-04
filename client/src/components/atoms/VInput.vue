<template>
  <Field
    :id="id"
    :name="name"
    :type="type"
    :required="required"
    :class="style.input"
    @input="handleInputChange($event.target.value)"
  />
  <label v-if="labelText" :for="id" :class="style.label">{{ labelText }}</label>
  <ErrorMessage :name="name" :class="style.errorMessage" />
</template>

<script lang="ts">
import { defineComponent, useCssModule, PropType } from 'vue';
import { Field, ErrorMessage } from 'vee-validate';

export default defineComponent({
  components: {
    Field,
    ErrorMessage,
  },
  props: {
    type: {
      type: String as PropType<string>,
      required: true,
    },
    required: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
    id: {
      type: String as PropType<string>,
      required: true,
    },
    name: {
      type: String as PropType<string>,
      required: true,
    },
    labelText: {
      type: String as PropType<string>,
      default: '',
    },
  },
  emits: ['handle-input-change'],
  setup(props, { emit }) {
    const style = useCssModule();

    const handleInputChange = (value: HTMLInputElement) => {
      emit('handle-input-change', value, props.name);
    };

    return {
      style,
      handleInputChange,
    };
  },
});
</script>

<style module lang="scss">
@import '../../css/color';
@import '../../css/functions/rem';

.input {
  border: none;
  border-bottom: solid 1px $color-FE5C01;
  cursor: text;
  display: block;
  font-size: rem(15);
  padding: 7px 0 3px;
  transition: all 0.3s;
  width: 100%;

  &:focus,
  &:valid {
    ~ label {
      font-size: rem(12);
      top: -12px;
    }
  }
}

.label {
  color: $color-A9A9A9;
  cursor: text;
  position: absolute;
  top: 5px;
  transition: 0.2s;
}

.errorMessage {
  color: $color-FE7773;
  font-size: rem(14);
  position: absolute;
  top: 30px;
  white-space: nowrap;
}
</style>
