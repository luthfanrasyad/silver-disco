import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipeColor: '',
  },
  getters: {
    getRecipeColor: state => state.recipeColor,
  },
  actions: {
    updateRecipeColor({ commit }, color) {
      commit('updateRecipeColor', color);
    },
  },
  mutations: {
    updateRecipeColor(state, color) {
      state.recipeColor = color;
    },
  },
  modules: {},
});
