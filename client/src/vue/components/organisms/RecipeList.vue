<template>
  <div>
    <p>{{ recipeData.dishName }}</p>
  </div>
</template>

<script>
export default {
  props: {
    recipeData: {
      type: Object,
      required: true,
    },
  },
};
</script>
