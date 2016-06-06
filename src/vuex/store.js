import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  progress: 0,
  maxProgress: 20
}

const mutations = {
  INCREMENT_PROGRESS (state, amount) {
    state.progress = state.progress + amount
  }
}

export default new Vuex.Store({
  state,
  mutations
})
