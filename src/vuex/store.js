import _ from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import BashEmulator from 'bash-emulator'

Vue.use(Vuex)
Vue.use(VueResource)

import { incrementProgress } from './actions'

Vue.http.get('/lessons/1.json').then((response) => {
  console.log(response.json())
  incrementProgress(store)
}, (response) => {
  // error callback
})

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
    },
    '/home/test/1.txt': {
      type: 'file',
      content: `Before we can do anything useful within the command line, we have to get comfortable moving around the file system.

The file system exists on any computer system, and can be thought of as having a tree structure, with leaves attached to each branch, cascading upwards (or downwards) from the root.

A less abstract example, would be to think of the file system kind of like a library.

If you can imagine each page of a book as a file, then, each book, it's container, would be a folder -- or more specifically, a directory. Each book is organized in a particular location on their respective shelves, and would also function as a directory.

To illustrate how this would work, we will imagine we want to access page 5 from Moby Dick. We have to find it's shelf, it's location on the shelf, and turn to page 5. This could be visualized as such.`
    }
  }
})

const initialState = {
  progress: 0,
  maxProgress: 20,
  output: [{
    type: 'INSTRUCTION',
    text: 'Hi!'}],
  task: 'Before we can do anything useful within the command line, we have to get comfortable moving around the file system. The file system exists on any computer system, and can be thought of as having a tree structure, with leaves attached to each branch, cascading upwards (or downwards) from the root.',
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

const store = new Vuex.Store({
  state: _.cloneDeep(initialState),
  mutations
})

export default store
