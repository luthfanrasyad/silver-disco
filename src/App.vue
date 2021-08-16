<template lang="pug">
#app
  header
    h4(@click="$router.push('/')") Home
    h4(@click="$router.push('/recipes')") Food
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
<style>
header {
  background-color: rgba(6, 89, 121, 0.8);
  padding: 16px 0px;
  justify-content: center;
  color: white;
  display: flex;

}
header h4 {
  cursor: pointer;
  margin-right: 15px;
}
</style>