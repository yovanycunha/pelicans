import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch, faHeart, faListUl } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faHeart, faListUl)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://www.omdbapi.com/?&apikey=ebcafd7d&plot=full&Content-Type=application/json';

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
