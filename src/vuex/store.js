import Vue from 'vue'
import Vuex from 'vuex'
import BashEmulator from 'bash-emulator'

Vue.use(Vuex)

const emulator = BashEmulator()

const state = {
  progress: 0,
  maxProgress: 20,
  results: [],
  task: 'There is so much to do!'
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
  },

  UPDATE_TASK (state, newTask) {
    state.task = newTask
  }
}

export default new Vuex.Store({
  state,
  mutations
})
