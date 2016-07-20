import * as store from 'src/vuex/store'

describe('store', () => {
  describe('vuexState', () => {
    it('should use {} if localStorage is empty', () => {
      delete window.localStorage.state

      // remove store from require cache and load it again
      // to evaluate the other branch for setting `vuexState`
      delete require.cache[require.resolve('src/vuex/store')]
      const store2 = require('src/vuex/store')

      expect(store2.state).to.be.an.object
    })
  })

  describe('mutations', () => {
    describe('START_SECTION', () => {
      it('should set the properties to the new lesson', () => {
        const state = {
          lessons: [{sections: [{}, {emulator: {}}]}]
        }

        store.mutations.START_SECTION(state, 0, 0)
        expect(state.solvedCurrentSection).to.be.false
        expect(state.currentLesson).to.equal(0)
        expect(state.currentSection).to.equal(0)
      })
    })

    describe('SEND_COMMAND', () => {
      before(() => {
        require('es6-promise').polyfill()
      })

      it('should add the new command to the history', (done) => {
        const state = {output: []}

        store.mutations.SEND_COMMAND(state, 'cd /')
        setTimeout(function () {
          expect(state.output[0]).to.deep.equal({type: 'INPUT', text: 'cd /'})
          expect(state.output).to.have.lengthOf(2)
          done()
        }, 10)
      })

      it('should return an error if input is wrong', (done) => {
        const state = {output: []}

        store.mutations.SEND_COMMAND(state, 'not_implemented')
        setTimeout(function () {
          expect(state.output[1]).to.deep.equal({type: 'ERR', text: 'not_implemented: command not found'})
          done()
        }, 10)
      })
    })

    describe('RESET', () => {
      it('should reset the whole state', () => {
        const state = {}
        store.mutations.RESET(state)
        expect(state.currentLesson).to.equal(0)
        expect(state.currentSection).to.equal(0)
        expect(state.solvedCurrentSection).to.be.false
      })
    })

    describe('TOGGLE_TURBO', () => {
      it('should set state.turbo to false if true', () => {
        const state = {turbo: true}
        store.mutations.TOGGLE_TURBO(state)
        expect(state.turbo).to.be.false
      })

      it('should set state.turbo to true if false', () => {
        const state = {turbo: false}
        store.mutations.TOGGLE_TURBO(state)
        expect(state.turbo).to.be.true
      })
    })

    describe('ACTIVATE_LESSON_SELECTION', () => {
      it('should set state.lessonSelectionActive to true', () => {
        const state = {lessonSelectionActive: false}
        store.mutations.ACTIVATE_LESSON_SELECTION(state)
        expect(state.lessonSelectionActive).to.be.true
      })
    })

    describe('DEACTIVATE_LESSON_SELECTION', () => {
      it('should set state.lessonSelectionActive to false', () => {
        const state = {lessonSelectionActive: true}
        store.mutations.DEACTIVATE_LESSON_SELECTION(state)
        expect(state.lessonSelectionActive).to.be.false
      })
    })
  })
})
