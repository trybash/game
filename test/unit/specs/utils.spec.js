import * as utils from 'src/utils'

describe('utils', () => {
  describe('clear', () => {
    it('should', () => {
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
      utils.yolo()
      expect(document.body.classList.contains('yolo')).to.be.true
    })

    it('should remove the "yolo" class after the timeout', (done) => {
      document.body.innerHTML = '<html><body><h1>Hello World</h1></body></html>'
      utils.yolo(null, null, 50)
      setTimeout(function () {
        expect(document.body.classList.contains('yolo')).to.be.false
        done()
      }, 50)
    })
  })

  describe('screenShake', () => {
    it('should add the "shake" class', () => {
      document.body.innerHTML = '<html><body><h1>Hello World</h1></body></html>'
      utils.screenShake(null, null)
      expect(document.body.classList.contains('shake')).to.be.true
    })

    it('should remove the "shake" class after the timeout', (done) => {
      document.body.innerHTML = '<html><body><h1>Hello World</h1></body></html>'
      utils.screenShake(null, null, 50)
      setTimeout(function () {
        expect(document.body.classList.contains('shake')).to.be.false
        done()
      }, 50)
    })

    it('should add a transform between -10 and 10 on x and y axis', () => {
      document.body.innerHTML = '<html><body><h1>Hello World</h1></body></html>'
      utils.screenShake(null, null)

      const regex = /translate\((.*)px, (.*)px\)/g
      const [, x, y] = regex.exec(document.body.style.transform)

      expect(Number(x)).to.be.within(-10, 10)
      expect(Number(y)).to.be.within(-10, 10)
    })

    it('should remove the transform after the timeout', (done) => {
      document.body.innerHTML = '<html><body><h1>Hello World</h1></body></html>'
      utils.screenShake(null, null, 50)
      setTimeout(function () {
        expect(document.body.style.transform).to.equal('')
        done()
      }, 50)
    })
  })
})
