<template>
  <div id="app">
    <p>こんにちは</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'App',
  computed: {
    ...mapState('recipeList', ['recipes']),
  },
  created() {
    this.getAllRecipes();
  },
  methods: {
    ...mapActions('recipeList', ['getAllRecipes']),
  },
};
</script>

<style module lang="scss">
.text {
  content: 'おはよう';
  margin: 0;
}
</style>
