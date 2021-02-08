import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeArrayImage: 'black',

    mapSection: ['black', 'green', 'darkRed', 'hand'],

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
    arrDarkRed: [
      { id: 0, text: 'Red', src: '/images/darkRed/1.jpeg' },
      { id: 1, text: 'Rose', src: '/images/darkRed/2.jpeg' },
      { id: 2, text: 'Guppy', src: '/images/darkRed/3.jpeg' },
      { id: 3, text: 'Hibiscus', src: '/images/darkRed/4.jpeg' },
      { id: 4, text: 'Blossom', src: '/images/darkRed/5.jpeg' },
    ],
    arrHand: [
      { id: 0, text: 'Power', src: '/images/hand/1.jpeg' },
      { id: 1, text: 'Creation', src: '/images/hand/2.jpeg' },
      { id: 2, text: 'Meet', src: '/images/hand/3.jpeg' },
      { id: 3, text: 'Love', src: '/images/hand/4.jpeg' },
      { id: 4, text: 'Happy', src: '/images/hand/5.jpeg' },
      { id: 5, text: 'Peace', src: '/images/hand/6.jpeg' },
    ],
  },
  getters: {
    arrGreenGetters:(state) => {
      return state.arrGreen
    },

    arrBlackGetters:(state) => {
      return state.arrBlack
    },

    arrDarkRedGetters:(state) => {
      return state.arrDarkRed
    },

    arrHandGetters:(state) => {
      return state.arrHand
    },

    arrActive:(state) => {
      return state.activeArrayImage
    },

    mapSection: (state) => {
      return state.mapSection
    },
  },
  actions: {},
  mutations: {
    changeActiveArr(state, arr) {
      state.activeArrayImage = arr
    }
  },
})
