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
  }
}
