import Vue from 'vue'
import Vuex from 'vuex'
import Persistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      id: '',
      mail: ''
    },
    items: []
  },
  mutations: {
    logout (state) {
      state.user.name = ''
      state.user.id = ''
    },
    login (state, data) {
      state.user.name = data.account
      state.user.id = data._id
    },
    addCart (state, data) {
      state.items.push(data)
    },
    delCart (state, index) {
      state.items.splice(index, 1)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    items (state) {
      return state.items
    }
  },
  plugins: [Persistedstate()]
})
