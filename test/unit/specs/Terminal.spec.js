import Terminal from 'src/components/Terminal'

describe('Terminal.vue', () => {
  describe('initial data', () => {
    it('should return an object', () => {
      const result = Terminal.data()
      expect(result).to.deep.equal({command: ''})
    })
  })

  describe('scrollBottom', () => {
    it('should be called by watch.output and ready', () => {
      const scrollBottom = sinon.spy()
      Terminal.watch.output.call({scrollBottom})
      Terminal.ready.call({scrollBottom})
      expect(scrollBottom.calledTwice).to.be.true
    })

    it('should set scrollTop to scrollHeight', () => {
      let state = {$els: {terminal: {
        scrollTop: 0, scrollHeight: 100
      }}}

      Terminal.methods.scrollBottom.call(state)
      expect(state.$els.terminal.scrollTop).to.equal(100)
      expect(state.$els.terminal.scrollHeight).to.equal(100)
    })
  })

  describe('focusInput', () => {
    it('should focus the input element', () => {
      const focus = sinon.spy()
      Terminal.methods.focusInput.call({$els: {input: {focus}}})
      expect(focus.calledOnce).to.be.true
    })
  })

  describe('keydown', () => {
    it('should call screenshake if turbo is true', () => {
      const screenShake = sinon.spy()
      Terminal.methods.keydown.call({turbo: true, screenShake})
      expect(screenShake.calledOnce).to.be.true
    })

    it('should not call screenshake if turbo is false', () => {
      const screenShake = sinon.spy()
      Terminal.methods.keydown.call({turbo: false, screenShake})
      expect(screenShake.calledOnce).to.be.false
    })
  })

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
