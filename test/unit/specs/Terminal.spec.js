import Terminal from 'src/components/Terminal'

describe('Terminal.vue', () => {
  describe('initial data', () => {
    it('should return an object', () => {
      const result = Terminal.data()
      expect(result).to.deep.equal({command: ''})
    })
  })

  describe('ready', () => {
    it('calls scrollBottom and focusInput', () => {
      const spy = sinon.spy()
      Terminal.ready.call({scrollBottom: spy, focusInput: spy})
      expect(spy.calledTwice).to.be.true
    })
  })

  describe('watch', () => {
    describe('output', () => {
      it('calls scrollBottom', () => {
        const spy = sinon.spy()
        Terminal.watch.output.call({scrollBottom: spy})
        expect(spy.calledOnce).to.be.true
      })
    })

    describe('lessonSelectionActive', () => {
      it('calls focusInput if new val is false', () => {
        const spy = sinon.spy()
        Terminal.watch.lessonSelectionActive.call({focusInput: spy}, false)
        expect(spy.calledOnce).to.be.true
      })

      it('doesnt call focusInput if new val is true', () => {
        const spy = sinon.spy()
        Terminal.watch.lessonSelectionActive.call({focusInput: spy}, true)
        expect(spy.calledOnce).to.be.false
      })
    })

    describe('doneModalActive', () => {
      it('calls focusInput if new val is false', () => {
        const spy = sinon.spy()
        Terminal.watch.doneModalActive.call({focusInput: spy}, false)
        expect(spy.calledOnce).to.be.true
      })

      it('doesnt call focusInput if new val is true', () => {
        const spy = sinon.spy()
        Terminal.watch.doneModalActive.call({focusInput: spy}, true)
        expect(spy.calledOnce).to.be.false
      })
    })
  })

  describe('scrollBottom', () => {
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
      Terminal.methods.keydown.call({turbo: true, screenShake}, {})
      expect(screenShake.calledOnce).to.be.true
    })

    it('should not call screenshake if turbo is false', () => {
      const screenShake = sinon.spy()
      Terminal.methods.keydown.call({turbo: false, screenShake}, {})
      expect(screenShake.calledOnce).to.be.false
    })

    it('should submit if pressing enter', () => {
      const ENTER = 13
      const submit = sinon.spy()
      Terminal.methods.keydown.call({submit}, {which: ENTER})
      expect(submit.calledOnce).to.be.true
    })

    it('should return if pressing meta key', () => {
      const submit = sinon.spy()
      Terminal.methods.keydown.call({submit}, {altKey: true})
      expect(submit.called).to.be.false
    })

    it('should prevent default and then complete if pressing up or down', () => {
      const UP = 38
      const preventDefault = sinon.spy()
      const complete = sinon.spy()
      Terminal.methods.keydown.call({complete}, {which: UP, preventDefault})
      expect(preventDefault.calledOnce).to.be.true
      expect(complete.calledOnce).to.be.true
    })
  })

  describe('complete', () => {
    it('', () => {
      const UP = 38
      const setSelectionRange = sinon.spy()
      let callback
      const completeFunction = sinon.stub().returns({
        then (fn) {
          callback = fn
        }
      })
      const _this = {
        38: completeFunction,
        $els: {input: {
          selectionStart: 0,
          value: '',
          setSelectionRange
        }},
        command: ''
      }

      Terminal.methods.complete.call(_this, UP)
      callback()
      expect(_this.command).to.equal('')
      expect(setSelectionRange.called).to.be.false

      callback('pwd')
      expect(_this.command).to.equal('pwd')
      expect(setSelectionRange.called).to.be.true
    })

    it('returns early if there is no function for direction', () => {
      const _this = {
        $els: {input: {}}
      }

      const result = Terminal.methods.complete.call(_this, 'WEST')
      expect(result).to.be.undefined
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
