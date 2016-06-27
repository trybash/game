import _ from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'
import BashEmulator from 'bash-emulator'

Vue.use(Vuex)

const emulator = BashEmulator({
  history: ['ls'],
  workingDirectory: '/home/test',
  fileSystem: {
    '/': {
      type: 'dir',
      lastEdited: Date.now()
    },
    '/home': {
      type: 'dir',
      lastEdited: Date.now()
    },
    '/home/test': {
      type: 'dir',
      lastEdited: Date.now()
    }
  }
})

const initialState = {
  progress: 0,
  maxProgress: 20,
  output: [],
  task: 'There is so much to do!',
  history: emulator.state.history
}

const mutations = {
  INCREMENT_PROGRESS (state, amount) {
    state.progress = state.progress + amount
  },

  SEND_COMMAND (state, command) {
    state.output.push({type: 'INPUT', text: command})

    emulator
      .run(command)
      .then(result => {
        state.output.push({type: 'OUTPUT', text: result})
      }, err => {
        state.output.push({type: 'ERR', text: err})
      })
      .then(() => {
        state.history = emulator.state.history
      })
  },

  UPDATE_TASK (state, newTask) {
    state.task = newTask
  },

  RESET (state) {
    _.forIn(_.cloneDeep(initialState), (value, key) => {
      state[key] = value
    })
  }
}

export default new Vuex.Store({
  state: _.cloneDeep(initialState),
  mutations
})
