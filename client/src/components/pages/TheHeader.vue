<template>
  <div :class="style.header">
    <div :class="style.header__inner">
      <VHeading tag="h1" class-name="header__title">マイレピ</VHeading>
      <ul :class="style.header__list">
        <li v-for="(route, index) in $options.routerName" :key="index" :class="style.header__item">
          <router-link :to="route.path">
            {{ route.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { VHeading } from '@Components/atoms';
import { defineComponent, useCssModule } from 'vue';

export default defineComponent({
  routerName: [
    {
      name: 'レシピ',
      path: '/',
    },
    {
      name: '買い物リスト',
      path: '/shopping',
    },
    {
      name: 'レシピ登録',
      path: '/registration',
    },
  ],
  components: {
    VHeading,
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

.header {
  background-color: $color-white;
}

.header__inner {
  display: flex;
  height: 64px;
  justify-content: space-between;
  margin: 0 auto;
  width: 980px;
}

.header__list {
  align-items: center;
  display: flex;
}

.header__item {
  margin-left: 15px;
  &:hover {
    opacity: 0.7;
  }

  &:first-child {
    margin-left: 0;
  }
}
</style>

<style scoped lang="scss">
@import '../../css/color';

.router-link-exact-active {
  border-bottom: 2px solid $color-FE5C01;
}
</style>
