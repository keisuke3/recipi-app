<template>
  <component :is="tag" :class="style[className]">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, useCssModule } from 'vue';
import { propTypeCheck } from '../../ts/utilities/propTypeCheck';
import { tagTypes } from './types/Heading.type';

export default defineComponent({
  props: {
    tag: {
      type: String,
      required: true,
      validator(val: string) {
        return propTypeCheck(val, tagTypes);
      },
    },
    className: {
      type: String,
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

.header__title {
  align-items: center;
  display: flex;
  font-size: rem(24);
}

.heading--h2 {
  font-size: rem(20);
}
</style>
