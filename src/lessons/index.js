const utils = require('./utils')

const production = [
  require('./lesson1'),
  require('./lesson2'),
  require('./lesson3')
]

const devLesson = {
  title: 'Dev 1',
  sections: [{
    task: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim vitae necessitatibus eos dolorem accusantium. Ex, aut aliquam, aperiam architecto quo voluptatem natus dolor. Temporibus tempora hic animi, earum modi ipsam.\n\nType ls.',
    checkSolved: utils.lastCommand('ls'),
    emulator: {
      history: [],
      workingDirectory: '/',
      user: 'user',
      fileSystem: {
        '/': {
          type: 'dir',
          modified: Date.now()
        }
      }
    }
  }, {
    task: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim vitae necessitatibus eos dolorem accusantium. Ex, aut aliquam, aperiam architecto quo voluptatem natus dolor. Temporibus tempora hic animi, earum modi ipsam.\n\nType ls.',
    checkSolved: utils.lastCommand('ls'),
    emulator: {
      history: [],
      workingDirectory: '/',
      user: 'user',
      fileSystem: {
        '/': {
          type: 'dir',
          modified: Date.now()
        }
      }
    }
  }]
}

const development = [
  devLesson,
  devLesson,
  devLesson,
  devLesson,
  devLesson
]

if (process.env.NODE_ENV === 'production') {
  module.exports = production
} else {
  module.exports = development
}
