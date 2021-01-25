import Vue from 'vue'
import App from './components/App'

console.log("MAIN.JS");

const app = new Vue({
  el: '#app',
  render: h => h(App)
});