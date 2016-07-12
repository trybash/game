import _ from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import BashEmulator from 'bash-emulator'
import * as utils from 'src/utils'

Vue.use(Vuex)
Vue.use(VueResource)

const vuexState = JSON.parse(window.localStorage.state || '{}')

const emulator = window.emulator = BashEmulator(vuexState.emulator)

emulator.commands.clear = utils.clear

const lessons = require('../lessons')

const initialState = {
  currentLesson: 1,
  currentSection: 1,
  lessons: lessons,
  completedLessons: [],
  output: [],
  emulator: lessons[0].sections[0].emulator
}

const mutations = {
  START_SECTION (state, lessonNumber, sectionNumber) {
    console.log(`start lesson ${lessonNumber} and section ${sectionNumber}`)
    state.currentLesson = lessonNumber
    state.currentSection = sectionNumber

    console.log(state)

    Object.assign(emulator.state, state.lessons[state.currentLesson - 1].sections[state.currentSection - 1].emulator)
    state.emulator = emulator.state
  },

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
      .then()
      .then(() => {
        window.localStorage.state = JSON.stringify(_.pick(state, [
          'currentLesson',
          'currentSection',
          'completedLessons',
          'output',
          'emulator'
        ]))
      })
      .then(() => {
        state.emulator = emulator.state
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
  state: Object.assign({}, initialState, vuexState),
  mutations
})

export default store
