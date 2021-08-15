<template lang="pug">
#app
  p(@click="$router.push('/recipes')") recipes
  router-view(:key="$route.fullPath")
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  beforeMount() {},
  methods: {},
};
</script>
