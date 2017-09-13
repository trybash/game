import _ from 'lodash'

module.exports = {
  clear (env) {
    const $0 = document.getElementsByClassName('Step')[0]
    var lineHeight
    try {
      lineHeight = parseFloat(window.getComputedStyle($0)['line-height'], 10)
    } catch (e) {
      lineHeight = 17
    }
    const $terminal = document.getElementsByClassName('Terminal')[0]
    const height = parseFloat($terminal.offsetHeight, 10)
    const numberOfLines = parseInt(height / lineHeight, 10)
    env.output(new Array(numberOfLines).join('\n'))
    env.exit()
  },

  yolo (env, args, delay = 1000) {
    document.body.classList.add('yolo')
    setTimeout(function () {
      document.body.classList.remove('yolo')
      env.exit()
    }, delay)
  },

  sudo (store) {
    return (env, args) => {
      if (args[0] !== 'reboot') {
        env.exit(1)
        return
      }
      store.dispatch('RESET')
      store.dispatch('START_LESSON', 0, 0)
      env.exit()
    }
  },

  reboot (env) {
    env.output('reboot: Need to be root')
    env.exit(1)
  },

  noop (env) {
    env.exit()
  },

  screenShake (delay = 50) {
    const terminal = document.getElementById('terminal')
    terminal.classList.add('shake')
    const x = _.random(-1.5, 1.5)
    const y = _.random(-1.5, 1.5)
    const r = _.random(-2.5, 2.5)
    terminal.style.transform = `translate(${x}%, ${y}%) rotate(${r}deg)`

    setTimeout(function () {
      terminal.classList.remove('shake')
      terminal.style.transform = ''
    }, delay)
  }
}
