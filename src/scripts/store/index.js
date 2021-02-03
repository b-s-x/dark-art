import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arrBlack: [
      { id: 0, text: 'Mountain', src: '/images/black/1.jpeg' },
      { id: 1, text: 'Ocean', src: '/images/black/2.jpeg' },
      { id: 2, text: 'Smooth', src: '/images/black/9.jpeg' },
      { id: 3, text: 'Clouds', src: '/images/black/14.jpeg' },
      { id: 4, text: 'Flower', src: '/images/black/15.jpeg' },
    ],
    arrGreen: [
      { id: 0, text: '1', src: '/images/green/1.jpeg' },
      { id: 1, text: '2', src: '/images/green/2.jpeg' },
      { id: 2, text: 'Smooth', src: '/images/green/3.jpeg' },
      { id: 3, text: 'Clouds', src: '/images/green/4.jpeg' },
      { id: 4, text: 'Flowers', src: '/images/green/5.jpeg' },
    ],
  },
  getters: {
    arrGreenGetters:(state) => {
      return state.arrGreen
    },

    arrBlackGetters:(state) => {
      return state.arrBlack
    }
  },
  actions: {},
  mutations: {},
})
