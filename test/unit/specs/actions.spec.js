import * as actions from 'src/vuex/actions'

describe('actions', () => {
  describe('sendCommand', () => {
    it('should dispatch command', () => {
      const dispatch = sinon.spy()
      actions.sendCommand({ dispatch }, 'Command')
      expect(dispatch.calledOnce).to.be.true
      expect(dispatch.calledWith('SEND_COMMAND', 'Command')).to.be.true
    })
  })

  describe('reset', () => {
    it('should dispatch reset', () => {
      const dispatch = sinon.spy()
      actions.reset({ dispatch })
      expect(dispatch.calledWith('RESET')).to.be.true
      expect(dispatch.calledWith('START_SECTION', 0, 0)).to.be.true
    })
  })

  describe('restartSection', () => {
    it('should restart current section', () => {
      const dispatch = sinon.spy()
      const state = {
        currentLesson: 0,
        currentSection: 1
      }
      actions.restartSection({dispatch, state})
      expect(dispatch.calledOnce).to.be.true
      expect(dispatch.calledWithExactly('START_SECTION', 0, 1))
    })
  })

  describe('nextSection', () => {
    it('should start next section', () => {
      const dispatch = sinon.spy()
      const state = {
        currentLesson: 0,
        currentSection: 1
      }
      actions.nextSection({dispatch, state})
      expect(dispatch.calledOnce).to.be.true
      expect(dispatch.calledWith('START_SECTION', 0, 2))
    })
  })

  describe('toggleTurbo', () => {
    it('should toggle the turbo', () => {
      const dispatch = sinon.spy()
      actions.toggleTurbo({dispatch})
      expect(dispatch.calledOnce).to.be.true
      expect(dispatch.calledWith('TOGGLE_TURBO'))
    })
  })

  describe('activateLessonSelection', () => {
    it('should activate the lesson selection', () => {
      const dispatch = sinon.spy()
      actions.activateLessonSelection({dispatch})
      expect(dispatch.calledOnce).to.be.true
      expect(dispatch.calledWith('ACTIVATE_LESSON_SELECTION'))
    })
  })

  describe('deactivateLessonSelection', () => {
    it('should deactivate the lesson selection', () => {
      const dispatch = sinon.spy()
      actions.deactivateLessonSelection({dispatch})
      expect(dispatch.calledOnce).to.be.true
      expect(dispatch.calledWith('DEACTIVATE_LESSON_SELECTION'))
    })
  })

  describe('openLesson', () => {
    it('it should open the specified lesson', () => {
      const dispatch = sinon.spy()
      actions.openLesson({dispatch}, 5)
      expect(dispatch.calledTwice).to.be.true
      expect(dispatch.calledWith('START_SECTION', 5, 1))
      expect(dispatch.calledWith('DEACTIVATE_LESSON_SELECTION'))
    })
  })

  describe('addCompletedLesson', () => {
    it('dispatches the ADD_COMPLETED_LESSON mutation', () => {
      const dispatch = sinon.spy()
      actions.addCompletedLesson({dispatch}, 5)
      expect(dispatch.calledOnce).to.be.true
      expect(dispatch.calledWith('ADD_COMPLETED_LESSON', 5))
    })
  })
})
