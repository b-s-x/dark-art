import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import NewApp from '@components/NewApp'

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'root',
      component: App
    },
    {
      path: '/about',
      component: NewApp
    },
  ]
})
