import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@pages/Main'

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'root',
      component: Main
    },

    // {
    //   path: '*',
    //   component: 404
    // }
  ]
})
