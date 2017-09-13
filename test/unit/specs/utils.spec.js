import * as utils from 'src/utils'

describe('utils', () => {
  describe('clear', () => {
    it('adds new-lines to clear the screen', () => {
      document.body.innerHTML = `
        <div class="Step" style="line-height: 10px;"></div>
        <div class="Terminal" style="height: 30px;"></div>
      `

      const env = {
        output: sinon.spy(),
        exit: sinon.spy()
      }
      utils.clear(env)

      expect(env.output.calledOnce).to.be.true
      expect(env.output.firstCall.args).to.deep.equal(['\n\n'])
      expect(env.exit.calledOnce).to.be.true
    })
  })

  describe('yolo', () => {
    it('should add the "yolo" class', () => {
      document.body.innerHTML = '<html><body><h1>Hello World</h1></body></html>'
      const env = { exit: () => {} }
      utils.yolo(env)
      expect(document.body.classList.contains('yolo')).to.be.true
    })

    it('should remove the "yolo" class after the timeout', (done) => {
      document.body.innerHTML = '<html><body><h1>Hello World</h1></body></html>'
      const env = {
        exit: () => {
          expect(document.body.classList.contains('yolo')).to.be.false
          done()
        }
      }
      utils.yolo(env, null, 50)
    })
  })

  describe('noop', () => {
    it('calls exit without arguments', () => {
      const env = { exit: sinon.spy() }
      utils.noop(env)
      expect(env.exit.calledWithExactly()).to.be.true
    })
  })

  describe('sudo', () => {
    it('only accepts reboot command', () => {
      const env = { exit: sinon.spy() }
      utils.sudo({})(env, [])
      expect(env.exit.calledWith(1)).to.be.true
    })

    it('can run reboot', (done) => {
      const store = {
        dispatch: sinon.spy()
      }
      const env = {
        exit: (code) => {
          expect(store.dispatch.calledWith('RESET')).to.be.true
          expect(code).to.be.undefined
          done()
        }
      }
      utils.sudo(store)(env, ['reboot'])
    })
  })

  describe('reboot', () => {
    it('fails without sudo', () => {
      const env = {
        output: sinon.spy(),
        exit: sinon.spy()
      }
      utils.reboot(env)

      expect(env.output.calledWith('reboot: Need to be root')).to.be.true
      expect(env.exit.calledWith(1)).to.be.true
    })
  })

  describe('screenShake', () => {
    it('adds the "shake" class', () => {
      document.body.innerHTML = '<div id="terminal"><h1>Hello World</h1></div>'
      utils.screenShake()
      expect(document.getElementById('terminal').classList.contains('shake')).to.be.true
    })

    it('removes the "shake" class after the timeout', (done) => {
      document.body.innerHTML = '<div id="terminal"><h1>Hello World</h1></div>'
      utils.screenShake(50)
      setTimeout(function () {
        expect(document.getElementById('terminal').classList.contains('shake')).to.be.false
        done()
      }, 50)
    })

    it('adds a transform', () => {
      document.body.innerHTML = '<div id="terminal"><h1>Hello World</h1></div>'
      utils.screenShake()

      expect(document.getElementById('terminal').style.transform).to.include('translate')
      expect(document.getElementById('terminal').style.transform).to.include('rotate')
    })

    it('removes the transform after the timeout', (done) => {
      document.body.innerHTML = '<div id="terminal"><h1>Hello World</h1></div>'
      utils.screenShake(50)
      setTimeout(function () {
        expect(document.getElementById('terminal').style.transform).to.equal('')
        done()
      }, 50)
    })
  })
})
