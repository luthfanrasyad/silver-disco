<template lang="pug">
div
  div(:style='color()')
  .hero
    h1 {{ recipe.name }}
    .tag-container-recipe 
      span.tag(v-for='tag in recipe.tags', @click='$router.push(`/recipes?tag=${tag}`)') {{ tag }}
  .recipe
    .detail
      p {{ recipe.description }}
    .ingredients
      table
        tr(v-for='item in recipe.ingredients')
          td 
            b {{ `${item.item}` }}
          td {{ `${item.amount * portions} ${item.unit}` }}
</template>

<script>
import { getFoodBySlug } from '@/plugins/firestore';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      recipe: {},
      portions: 1,
      tags: {},
    };
  },
  computed: {
    ...mapGetters({
      recipeColor: 'getRecipeColor',
    }),
  },
  async mounted() {
    this.recipe = await getFoodBySlug(this.$route.params.slug);
  },
  methods: {
    color() {
      if (this.recipeColor) return `height: 200px ; ${this.recipeColor}`;
      let hsla = `hsla(${~~(360 * Math.random())},90%,25%,0.8)`;
      const style = `background-color:${hsla}`;
      this.$store.dispatch('updateRecipeColor', style);
      return `height: 200px ; ${style}`;
    },
  },
};
</script>

<style>
.hero {
  font-family: 'Poppins', sans-serif;
  margin: 20px;
  margin-bottom: 10px;
}
.recipe {
  font-family: 'Poppins', sans-serif;
  margin: 20px;
  margin-top: 0px;
  display: flex;
}
.detail {
  width: 500px;
  margin-right: 50px;
}
.tag-container-recipe {
  text-transform: capitalize;
}
.tag {
  border: 0.2px solid gray;
  border-radius: 15px;
  padding: 2px 12px;
  margin-right: 5px;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
}
table {
  border-collapse: collapse;
}
th,
td {
  padding: 5px;
  padding-left: 0px;
  padding-top: 0px;
}

@media only screen and (max-width: 750px) {
  .recipe {
    flex-direction: column;
  }
  .detail {
    width: 100%;
    margin-bottom: 30px;
  }
}
</style>
