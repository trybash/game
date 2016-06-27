export function incrementProgress ({ dispatch, state }) {
  dispatch('INCREMENT_PROGRESS', 1)
}

export function sendCommand ({dispatch}, command) {
  dispatch('SEND_COMMAND', command)
}

export function updateTask ({dispatch}, newTask) {
  dispatch('UPDATE_TASK', newTask)
}

export function reset ({dispatch}) {
  dispatch('RESET')
}
