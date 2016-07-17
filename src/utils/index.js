import _ from 'lodash'

module.exports = {
  clear (env) {
    const $0 = document.getElementsByClassName('Step')[0]
    const lineHeight = parseFloat(window.getComputedStyle($0)['line-height'], 10)
    const $terminal = document.getElementsByClassName('Terminal')[0]
    const height = parseFloat($terminal.offsetHeight, 10)
    const numberOfLines = parseInt(height / lineHeight, 10)
    env.output(new Array(numberOfLines).join('\n'))
    env.exit()
  },

  yolo (env, args, delay = 1000) {
    document.getElementsByTagName('body')[0].className = 'yolo'
    setTimeout(function () {
      document.getElementsByTagName('body')[0].className = ''
    }, delay)
  },

  screenShake (env, args, delay = 50) {
    const body = document.getElementsByTagName('body')[0]
    body.className = 'shake'
    const x = _.random(-10, 10)
    const y = _.random(-10, 10)
    body.style.transform = `translate(${x}px, ${y}px)`

    setTimeout(function () {
      document.getElementsByTagName('body')[0].className = ''
      body.style.transform = ''
    }, delay)
  }
}
