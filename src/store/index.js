import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    watched: [],
    favorites: []
  },
  mutations: {
    ADD_TO_FAV: (state, show) => {
      state.favorites.push(show)
    },
    ADD_TO_WATCHED: (state, show) => {
      state.watched.push(show)
    }
  },
  actions: {
    addToWatched: (context, show) => {
      context.commit("ADD_TO_WATCHED", show)
    },
    addToFavorites: (context, show) => {
      context.commit("ADD_TO_FAV", show)
    }
    
  },
  modules: {
  }
})
