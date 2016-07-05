export function sendCommand ({dispatch}, command) {
  dispatch('SEND_COMMAND', command)
}

export function updateTask ({dispatch}, newTask) {
  dispatch('UPDATE_TASK', newTask)
}

export function reset ({dispatch}) {
  dispatch('RESET')
}

export function nextSection (state) {
  // normal
  // letzte section
  // letzte übung
  const lessonNumber = 1
  const sectionNumber = 2
  state.dispatch('START_SECTION', lessonNumber, sectionNumber)
}
