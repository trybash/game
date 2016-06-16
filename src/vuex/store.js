import Vue from 'vue'
import Vuex from 'vuex'
import BashEmulator from 'bash-emulator'

Vue.use(Vuex)

const emulator = BashEmulator()

const state = {
  progress: 0,
  maxProgress: 20,
  results: []
}

const mutations = {
  INCREMENT_PROGRESS (state, amount) {
    state.progress = state.progress + amount
  },

  SEND_COMMAND (state, command) {
    state.results.push(command)

    emulator
      .run(command)
      .then(result => {
        state.results.push(result)
      })
  }
}

export default new Vuex.Store({
  state,
  mutations
})
