<template>
  <div>
    <template v-if="isLoading">Loading...</template>
    <template v-else>
      <VHeading tag="h2" class-name="heading--h2">レシピ一覧</VHeading>
      <template v-if="recipes.length >= 1">
        <Cassette v-for="(recipe, index) in recipes" :key="index" :recipe-data="recipe" />
      </template>
      <Unregistered v-else />
    </template>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue';
import { useStore } from '../../ts/store/index';
import Cassette from '../organisms/RecipeList/Cassete.vue';
import Unregistered from '../organisms//RecipeList/Unregistered.vue';
import { VHeading } from '@Components/atoms';

export default defineComponent({
  components: {
    Cassette,
    Unregistered,
    VHeading,
  },
  setup() {
    const isLoading = ref<boolean>(true);
    const store = useStore();

    const asyncGetAllRecipes = async () => {
      await store.dispatch('recipeList/getAllRecipes');
      isLoading.value = false;
    };
    asyncGetAllRecipes();

    return {
      isLoading,
      recipes: computed(() => store.state.recipeList.recipes),
    };
  },
});
</script>
