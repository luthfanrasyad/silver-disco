<template lang="pug">
.admin
  table
    tr 
      th Name
      th Actions
    tr(v-for='item in allRecipes')
      td {{ item.name }}
      td 
        button(@click='$router.push(`/admin/recipes/edit/${item.slug}`)') Edit
</template>

<script>
import { getAllFood, getFoodByTag, getAllFoodTags } from '@/plugins/firestore';
export default {
  data() {
    return {
      allRecipes: [],
    };
  },
  async mounted() {
    this.allRecipes = await getAllFood();
  },
};
</script>

<style>
.admin table {
  background-color: white;
  border-collapse: collapse;
  border: 1px solid gray;
  border-radius: 5px;
}
.admin th,
.admin td {
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
  padding: 10px;
}
</style>
