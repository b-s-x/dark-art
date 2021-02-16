import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // mapSection: ['black', 'green', 'darkRed', 'hand'],
    mapColor: ['black', 'white', '#7a7a7a'],

    imageSets: [],
    currentImageSet: null,
  },
  getters: {
    arrActive:(state) => {
      return state.activeArrayImage
    },

    mapSection: (state) => {
      return state.mapSection
    },

    mapColor: (state) => {
      return state.mapColor
    },

    navSectionName: (state) => {
      return state.navSectionName
    },

    onLoading: (state) => {
      return state.loading
    }
  },
  actions: {
    async fetchArray({ commit }) {
      const res = await fetch('files/array.json');
      const data = await res.json();

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
