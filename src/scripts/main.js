import Vue from 'vue'
import App from './App'

console.log("MAIN.JS");

const app = new Vue({
  el: '#app',
  render: h => h(App)
});