import Terminal from 'src/components/Terminal'

describe('Terminal.vue', () => {
  describe('submit()', () => {
    it('works', () => {
      const sendCommandSpy = sinon.spy()
      const preventDefaultSpy = sinon.spy()
      const state = {
        command: 'test command',
        sendCommand: sendCommandSpy
      }
      Terminal.methods.submit.call(state, {
        preventDefault: preventDefaultSpy
      })
      expect(sendCommandSpy.calledWith('test command')).to.be.true
      expect(preventDefaultSpy.calledOnce).to.be.true
      expect(state.command).to.equal('')
    })

    it('ignores empty commands', () => {
      const sendCommandSpy = sinon.spy()
      const preventDefaultSpy = sinon.spy()
      Terminal.methods.submit.call({
        command: '',
        sendCommand: sendCommandSpy
      }, {
        preventDefault: preventDefaultSpy
      })
      expect(sendCommandSpy.called).to.be.false
      expect(preventDefaultSpy.calledOnce).to.be.true
    })
  })
})
