import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://www.omdbapi.com/?&apikey=ebcafd7d&Content-Type=application/json';

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
