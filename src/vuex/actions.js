export function sendCommand ({dispatch}, command) {
  dispatch('SEND_COMMAND', command)
}

export function reset ({dispatch}) {
  dispatch('RESET')
}

export function nextSection ({dispatch, state}) {
  dispatch('START_SECTION', state.currentLesson, state.currentSection + 1)
}
