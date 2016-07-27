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
    it('should add the "shake" class', () => {
      document.body.innerHTML = '<html><body><h1>Hello World</h1></body></html>'
      utils.screenShake()
      expect(document.body.classList.contains('shake')).to.be.true
    })

    it('should remove the "shake" class after the timeout', (done) => {
      document.body.innerHTML = '<html><body><h1>Hello World</h1></body></html>'
      utils.screenShake(50)
      setTimeout(function () {
        expect(document.body.classList.contains('shake')).to.be.false
        done()
      }, 50)
    })

    it('should add a transform between -10 and 10 on x and y axis', () => {
      document.body.innerHTML = '<html><body><h1>Hello World</h1></body></html>'
      utils.screenShake()

      const regex = /translate\((.*)px, (.*)px\)/g
      const [, x, y] = regex.exec(document.body.style.transform)

      expect(Number(x)).to.be.within(-10, 10)
      expect(Number(y)).to.be.within(-10, 10)
    })

    it('should remove the transform after the timeout', (done) => {
      document.body.innerHTML = '<html><body><h1>Hello World</h1></body></html>'
      utils.screenShake(50)
      setTimeout(function () {
        expect(document.body.style.transform).to.equal('')
        done()
      }, 50)
    })
  })
})
