<template>
  <div>
    <template v-if="isLoading">
      Loading...
    </template>
    <template v-else>
      <VHeading tag="h2" class-name="heading--h2">
        レシピ一覧
      </VHeading>
      <template v-if="recipes.length >= 1">
        <Cassette v-for="(recipe, index) in recipes" :key="index" :recipe-data="recipe" />
      </template>
      <Unregistered v-else />
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Cassette from '../organisms/RecipeList/Cassete.vue';
import Unregistered from '../organisms//RecipeList/Unregistered.vue';
import { VHeading } from '@Components/atoms';

export default {
  components: {
    Cassette,
    Unregistered,
    VHeading,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    ...mapState('recipeList', ['recipes']),
  },
  async created() {
    await this.getAllRecipes();
    this.isLoading = false;
  },
  methods: {
    ...mapActions('recipeList', ['getAllRecipes']),
  },
};
</script>
