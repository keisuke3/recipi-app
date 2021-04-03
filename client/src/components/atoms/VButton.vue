<template>
  <button :class="[style[className], style.button]">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, useCssModule, PropType } from 'vue';

export default defineComponent({
  props: {
    className: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup() {
    const style = useCssModule();

    return {
      style,
    };
  },
});
</script>

<style module lang="scss">
@import '../../css/color';
@import '../../css/functions/rem';

.button {
  background-color: $color-white;
  border: 1px solid $color-FE5C01;
  border-radius: 4px;
  color: $color-FE5C01;
  font-weight: bold;
}

.authButton {
  height: 30px;
  width: 250px;

  &:hover {
    opacity: 0.7;
  }
}
</style>
