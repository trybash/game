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
          lessons: [{sections: [{}, {emulator: {}}]}],
          completedLessons: {
            $remove: sinon.spy()
          }
        }

        store.mutations.START_SECTION(state, 0, 0)
        expect(state.solvedCurrentSection).to.be.false
        expect(state.currentLesson).to.equal(0)
        expect(state.currentSection).to.equal(0)
        expect(state.completedLessons.$remove.calledOnce).to.be.true
        expect(state.completedLessons.$remove.calledWith(0)).to.be.true
      })

      it('should not reset the output if the sectionNumber isnt 0', () => {
        const state = {
          lessons: [{sections: [{}, {emulator: {}}]}],
          completedLessons: {
            $remove: sinon.spy()
          },
          output: [1, 2, 3]
        }

        store.mutations.START_SECTION(state, 0, 1)
        expect(state.output).to.deep.equal([1, 2, 3])
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

      it('marks the lesson as completed if it was solved by that command', (done) => {
        const state = {
          output: [],
          lessons: [
            {title: 'Title 0', sections: [
             {checkSolved () { return true }}
            ]}
          ],
          currentSection: 0,
          currentLesson: 0,
          completedLessons: []
        }

        store.mutations.SEND_COMMAND(state, 'cd /')
        setTimeout(function () {
          expect(state.completedLessons).to.deep.equal([0])
          done()
        }, 10)
      })
    })

    describe('ADD_COMPLETED_LESSON', () => {
      it('adds the index to the array', () => {
        const state = {completedLessons: []}
        store.mutations.ADD_COMPLETED_LESSON(state, 0)
        expect(state.completedLessons).to.deep.equal([0])
      })

      it('sorts the array ascending', () => {
        const state = {completedLessons: [0, 1, 3]}
        store.mutations.ADD_COMPLETED_LESSON(state, 2)
        expect(state.completedLessons).to.deep.equal([0, 1, 2, 3])
      })

      it('doesnt create duplicate values', () => {
        const state = {completedLessons: [0, 1, 2]}
        store.mutations.ADD_COMPLETED_LESSON(state, 1)
        expect(state.completedLessons).to.deep.equal([0, 1, 2])
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
