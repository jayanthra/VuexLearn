import Vue from 'vue'
import Vuex from 'vuex'
import gifModule from './modules/giphy'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    giphy: { namespaced: true, ...gifModule },
  }
})
