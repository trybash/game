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

export function pwdIs (pwd) {
  return function (state) {
    return state.emulator.workingDirectory === pwd
  }
}
