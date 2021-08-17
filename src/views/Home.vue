<template lang='pug'>
div
  .center
    .tag-container(v-if='isLoading')
      .placeholder-tag(v-for='i in 3')
    .tag-container(v-else)
      span.tag--active(v-for='tag in activeTags', @click='toggleTag(tag)') {{ tag }}
      span.tag--inactive(v-for='tag in inactiveTags', @click='toggleTag(tag)') {{ tag }}
    .card-container(v-if='isLoading')
      .placeholder-card(v-for='i in 3')
    .card-container(v-else)
      .card(v-for='(item, index) in allFood', :style='color(index)', :key='index', @click='test(item, $event)')
        h2 {{ item.name }}
</template>

<script>
import { getAllFood, getFoodByTag, getAllFoodTags } from '@/plugins/firestore';
export default {
  data() {
    return {
      allFood: [],
      allFoodTags: [],
      activeTags: [],
      isLoading: false,
    };
  },
  computed: {
    inactiveTags() {
      return this.allFoodTags.filter(x => !this.activeTags.includes(x));
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      this.isLoading = true;
      if (this.$route.query.tag) {
        this.activeTags = this.$route.query.tag.split('#');
        this.allFood = await getFoodByTag(this.activeTags);
      } else {
        this.allFood = await getAllFood();
      }
      this.allFoodTags = await getAllFoodTags();
      this.isLoading = false;
    },
    toggleTag(tag) {
      let filter = [];
      switch (true) {
        case this.activeTags.includes(tag):
          filter = this.activeTags.filter(value => {
            if (tag !== value) return value;
          });
          break;
        case !this.activeTags.includes(tag):
          this.activeTags.push(tag);
          filter = this.activeTags;
          break;
        default:
          break;
      }
      this.$router.push({ query: { tag: filter.join('#') } });
      this.init();
    },
    color(index) {
      let hsla = `hsla(${~~(360 * Math.random())},90%,25%,0.8)`;
      this.allFood[index].color = `background-color:${hsla}`;
      return `background-color:${hsla}`;
    },
    test(item, a) {
      this.$store.dispatch('updateRecipeColor', item.color);
      this.$router.push(`/recipes/${item.slug}`);
    },
  },
};
</script>

<style>
.card {
  border-radius: 5px;
  min-width: 160px;
  max-width: 160px;
  height: 160px;
  margin: 5px;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  line-height: 30px;
  background-color: white;
  font-family: 'Poppins', sans-serif;
  color: #f3f4f6;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.center {
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tag-container {
  text-transform: capitalize;
  margin: 16px 0px;
  max-width: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.tag--active,
.tag--inactive {
  border: 0.2px solid gray;
  border-radius: 15px;
  padding: 4px 12px;
  margin-right: 5px;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 5px;
}

.tag--active {
  background-color: black;
  color: white;
  border: none;
  background-color: rgba(6, 89, 121, 0.8);
}

.placeholder-card {
  background-color: rgb(219, 219, 219);
  box-shadow: 0 4px 10px 0 rgb(231, 231, 231);
  border-radius: 5px;
  margin: 5px;
  height: 160px;
  width: 160px;
  position: relative;
  overflow: hidden;
}
.placeholder-tag {
  background-color: rgb(219, 219, 219);
  box-shadow: 0 4px 10px 0 rgb(231, 231, 231);
  border-radius: 15px;
  padding: 4px 12px;
  margin-right: 5px;
  margin-top: 5px;
  height: 30px;
  width: 60px;
  position: relative;
  overflow: hidden;
}
@keyframes load {
  from {
    left: -150px;
  }
  to {
    left: 100%;
  }
}
@keyframes load-tag {
  from {
    left: -60px;
  }
  to {
    left: 100%;
  }
}
@media only screen and (min-width: 143px) {
  .card-container {
    width: 143px;
  }
}
@media only screen and (min-width: 343px) {
  .card-container {
    width: 343px;
  }
}
@media only screen and (min-width: 513px) {
  .card-container {
    width: 513px;
  }
}
@media only screen and (min-width: 683px) {
  .card-container {
    width: 683px;
  }
}
</style>
