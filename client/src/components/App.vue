<template>
  <div :class="$style.wrapper">
    <Header />
    <div :class="$style.content">
      <transition name="router" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Header from './pages/globals/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style module lang="scss">
.content {
  margin: 0 auto;
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
