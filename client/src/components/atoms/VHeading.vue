<template>
  <component :is="tag" :class="$style[className]">
    <slot />
  </component>
</template>

<script>
import { propTypeCheck } from '../../js/utilities/propTypeCheck';
import { tagTypes } from './types/Heading.type';

export default {
  props: {
    tag: {
      type: String,
      required: true,
      validator(val) {
        return propTypeCheck(val, tagTypes);
      },
    },
    className: {
      type: String,
      required: true,
    },
  },
};
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
