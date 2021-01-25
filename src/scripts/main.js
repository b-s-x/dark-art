import Vue from 'vue'
import App from './components/App'

// import router from '@router/router';
// import store from '@store/store';
console.log("its working ffafsnfjj");
// Vue.prototype.$eventBus = new Vue();

const app = new Vue({
  // router,
  // store,
  el: '#app',
  render: h => h(App)
});