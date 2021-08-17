<template lang="pug">
#app
  header(:style='color()')
    h4(@click='$router.push("/")') Home
    h4(@click='$router.push("/recipes")') Food
  router-view(:key='$route.fullPath')
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      recipeColor: 'getRecipeColor',
    }),
  },
  beforeMount() {},
  methods: {
    color() {
      if (this.recipeColor) return `${this.recipeColor}`;
      let hsla = `hsla(${~~(360 * Math.random())},90%,25%,0.8)`;
      const style = `background-color:${hsla}`;
      this.$store.dispatch('updateRecipeColor', style);
      return `${style}`;
    },
  },
};
</script>
<style>
header {
  /* background-color: rgba(6, 89, 121, 0.8); */
  padding: 12px 0px;
  justify-content: center;
  color: white;
  display: flex;
}
header h4 {
  cursor: pointer;
  margin-right: 15px;
}
</style>