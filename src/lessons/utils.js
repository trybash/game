const _ = require('lodash')

// NOTE: current implementation does not support multiple sections with identical commands as solutions
export function lastCommand (command, general) {
  if (general) {
    return function (state) {
      return state.emulator.history[state.emulator.history.length - 1].indexOf(command) > -1
    }
  } else {
    return function (state) {
      return state.emulator.history[state.emulator.history.length - 1] === command
    }
  }
}

export function workingDirectory (pwd) {
  return function (state) {
    return state.emulator.workingDirectory === pwd
  }
}

export function checkType (path, type) {
  return function (state) {
    if (state.emulator.fileSystem[path]) {
      return state.emulator.fileSystem[path].type === type
    }

    return type === null
  }
}

export function checkContent (path, content) {
  return function (state) {
    if (state.emulator.fileSystem[path]) {
      return state.emulator.fileSystem[path].content === content
    }

    return false
  }
}

export function compose (...functions) {
  return function (state) {
    return _.every(functions, fn => fn(state))
  }
}
