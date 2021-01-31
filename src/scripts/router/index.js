import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import NewApp from '@components/NewApp'
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
    {
      path: '/about',
      component: NewApp
    },
  ]
})
