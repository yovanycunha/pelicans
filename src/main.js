import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner, faSearch, faReply, faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faSpinner, faSearch, faReply, faHeart)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://www.omdbapi.com/?&apikey=ebcafd7d&Content-Type=application/json';

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
