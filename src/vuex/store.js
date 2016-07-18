import _ from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import BashEmulator from 'bash-emulator'
import * as utils from 'src/utils'
import * as getters from 'src/vuex/getters'

Vue.use(Vuex)
Vue.use(VueResource)

export function saveLocalStorage (state) {
  window.localStorage.state = JSON.stringify(_.pick(state, [
    'currentLesson',
    'currentSection',
    'completedLessons',
    'solvedCurrentSection',
    'output',
    'emulator'
  ]))
}

const lessons = require('../lessons')

const initialState = {
  currentLesson: 1,
  currentSection: 1,
  solvedCurrentSection: false,
  lessons: lessons,
  completedLessons: [],
  output: [],
  turbo: false,
  lessonSelectionActive: false,
  emulator: lessons[0].sections[0].emulator
}

export const mutations = {
  START_SECTION (state, lessonNumber, sectionNumber) {
    state.solvedCurrentSection = false
    state.currentLesson = lessonNumber
    state.currentSection = sectionNumber

    saveLocalStorage(state)

    Object.assign(emulator.state, state.lessons[state.currentLesson - 1].sections[state.currentSection - 1].emulator)
    state.emulator = emulator.state
  },

  SEND_COMMAND (state, command) {
    state.output.push({type: 'INPUT', text: command})

    emulator
      .run(command)
      .then((result) => {
        state.output.push({type: 'OUTPUT', text: result})
      }, (err) => {
        state.output.push({type: 'ERR', text: err})
      })
      .then(() => {
        state.emulator = emulator.state
        state.solvedCurrentSection = getters.getSolved(state)
        saveLocalStorage(state)
      })
  },

  RESET (state) {
    _.forIn(initialState, (value, key) => {
      state[key] = value
    })
    saveLocalStorage(state)
  },

  TOGGLE_TURBO (state) {
    state.turbo = !state.turbo
  },

  ACTIVATE_LESSON_SELECTION (state) {
    state.lessonSelectionActive = true
  },

  DEACTIVATE_LESSON_SELECTION (state) {
    state.lessonSelectionActive = false
  }
}

const vuexState = JSON.parse(window.localStorage.state || '{}')

const store = new Vuex.Store({
  state: Object.assign({}, initialState, vuexState),
  mutations
})

const emulator = window.emulator = BashEmulator(vuexState.emulator)

emulator.commands.clear = utils.clear
emulator.commands.yolo = utils.yolo
emulator.commands.sudo = utils.sudo(store)
emulator.commands.reboot = utils.reboot

export default store
