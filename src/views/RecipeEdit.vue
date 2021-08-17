<template lang='pug'>
div
  p Name
  input(v-model='name')
  p Description
  textarea(v-model='description')
  p Ingredients
  p Tags
  select
    option(v-for='tag in tags', :value='tag') {{ tag }}
</template>

<script>
import { getFoodBySlug, getAllFoodTags } from '@/plugins/firestore';

export default {
  data() {
    return {
      tags: [],
      name: '',
      description: '',
    };
  },
  async mounted() {
    this.tags = await getAllFoodTags();
    const recipe = await getFoodBySlug(this.$route.params.slug);
    this.name = recipe.name;
    this.description = recipe.description;
  },
};
</script>

<style>
</style>
