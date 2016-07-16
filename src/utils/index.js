import _ from 'lodash'

module.exports = {
  clear (env, args) {
    const $0 = document.getElementsByClassName('Step')[0]
    const lineHeight = parseFloat(window.getComputedStyle($0)['line-height'], 10)
    const $terminal = document.getElementsByClassName('Terminal')[0]
    const height = parseFloat($terminal.offsetHeight)
    const numberOfLines = parseInt(height / lineHeight)
    env.output(new Array(numberOfLines).join('\n'))
    env.exit()
  },

  yolo (env, args) {
    document.getElementsByTagName('body')[0].className = 'yolo'
    setTimeout(function () {
      document.getElementsByTagName('body')[0].className = ''
    }, 1000)
  },

  screenShake () {
    const body = document.getElementsByTagName('body')[0]
    body.className = 'shake'
    const x = _.random(-20, 20)
    const y = _.random(-20, 20)
    body.style.transform = `translate(${x}px, ${y}px)`

    setTimeout(function () {
      document.getElementsByTagName('body')[0].className = ''
      body.style.transform = ''
    }, 50)
  }
}
