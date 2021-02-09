import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeArrayImage: 'black',

    mapSection: ['black', 'green', 'darkRed', 'hand'],
    mapColor: ['black', 'white', '#7a7a7a'],

    // loading: true,

    arrBlack: [
      { id: 0, text: 'Mountain', src: '/images/black/1.jpeg' },
      { id: 1, text: 'Ocean', src: '/images/black/2.jpeg' },
      { id: 2, text: 'Smooth', src: '/images/black/3.jpeg' },
      { id: 3, text: 'Clouds', src: '/images/black/4.jpeg' },
      { id: 4, text: 'Flower', src: '/images/black/5.jpeg' },
    ],

    // arrBlack: null,
    arrGreen: null,
    arrDarkRed: null,
    arrHand: null,

    navSectionName: [
      { name: "Black" },
      { name: "Green" },
      { name: "Dark Red" },
      { name: "Hands" },
    ]
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
    fetchArray({commit}) {
      fetch('array.json')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          commit('changeData', data)
        })
    }
  },
  mutations: {
    changeActiveArr(state, arr) {
      state.activeArrayImage = arr
    },

    changeData(state, arr) {
      for(let item in arr) {

        state[item] = arr[item]
        console.log('все загрузилось');
      }

      // state.loading = false
    }
  },
})
