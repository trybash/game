module.exports = function lastCommand (command) {
  return function (state) {
    return state.emulator.history[state.emulator.history.length - 1] === command
  }
}
