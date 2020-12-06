<template>
  <div>
    <template v-if="isLoading">
      Loading...
    </template>
    <template v-else>
      <h2>レシピ一覧</h2>
      <template v-if="recipes.length >= 1">
        <RecipeList v-for="(recipe, index) in recipes" :key="index" :recipe-data="recipe" />
      </template>
      <template v-else>
        <RecipeListZero />
      </template>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import RecipeList from '../organisms/RecipeList.vue';
import RecipeListZero from '../organisms/RecipeListZero.vue';

export default {
  components: {
    RecipeList,
    RecipeListZero,
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
