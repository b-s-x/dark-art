import Vue from 'vue'
import App from './App'
import router from "./router"

Vue.prototype.$eventBus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
