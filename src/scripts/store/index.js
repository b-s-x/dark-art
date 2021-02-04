import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeArrayImage: 'black',

    arrBlack: [
      { id: 0, text: 'Mountain', src: '/images/black/1.jpeg' },
      { id: 1, text: 'Ocean', src: '/images/black/2.jpeg' },
      { id: 2, text: 'Smooth', src: '/images/black/3.jpeg' },
      { id: 3, text: 'Clouds', src: '/images/black/4.jpeg' },
      { id: 4, text: 'Flower', src: '/images/black/5.jpeg' },
    ],
    arrGreen: [
      { id: 0, text: 'Fern', src: '/images/green/1.jpeg' },
      { id: 1, text: 'Lawn', src: '/images/green/2.jpeg' },
      { id: 2, text: 'Herb', src: '/images/green/3.jpeg' },
      { id: 3, text: 'Evergreen', src: '/images/green/4.jpeg' },
      { id: 4, text: 'Sorrel', src: '/images/green/5.jpeg' },
    ],
  },
  getters: {
    arrGreenGetters:(state) => {
      return state.arrGreen
    },

    arrBlackGetters:(state) => {
      return state.arrBlack
    },

    arrActive:(state) => {
      return state.activeArrayImage
    }
  },
  actions: {},
  mutations: {
    changeActiveArr(state, arr) {
      state.activeArrayImage = arr
    }
  },
})
