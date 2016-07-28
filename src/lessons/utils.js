// NOTE: current implementation does not support multiple sections with identical commands as solutions
export function lastCommand (command) {
  return function (state) {
    return state.emulator.history[state.emulator.history.length - 1] === command
  }
}
