<template>
  <div :class="style.wrapper">
    <TheHeader />
    <div :class="style.content">
      <router-view v-slot="{ Component }">
        <transition name="router" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import TheHeader from './pages/TheHeader.vue';
import { defineComponent, useCssModule } from 'vue';

export default defineComponent({
  components: {
    TheHeader,
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
.content {
  margin: 0 auto;
  padding-top: 30px;
  width: 980px;
}
</style>

<style scoped lang="scss">
.router-enter-active,
.router-leave-active {
  transition-duration: 0.25s;
  transition-property: opacity;
}

.router-enter-active {
  transition-delay: 0.25s;
}

.router-enter,
.router-leave-active {
  opacity: 0;
}
</style>
