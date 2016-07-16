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
      expect(dispatch.calledOnce).to.be.true
      expect(dispatch.calledWith('RESET')).to.be.true
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
      const state = { turbo: false }
      actions.toggleTurbo({dispatch, state})
      expect(dispatch.calledOnce).to.be.true
      expect(dispatch.calledWith('TOGGLE_TURBO'))
    })
  })
})
