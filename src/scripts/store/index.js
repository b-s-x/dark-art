import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imageSets: [],
    currentImageSet: null,
  },

  getters: {},

  actions: {
    async fetchArray({ commit }) {
      const result = await fetch('files/array.json');
      const data = await result.json();

      commit('changeData', data);
    }
  },

  mutations: {
    changeActiveSetByName(state, imageSetName) {
      state.currentImageSet = state.imageSets.find(s => s.name == imageSetName);
    },

    changeData(state, arr) {
      state.imageSets = arr;
      if (arr.length === 0) return;

      state.currentImageSet = arr[0];
    }
  },
})
