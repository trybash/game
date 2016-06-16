export function incrementProgress ({ dispatch, state }) {
  dispatch('INCREMENT_PROGRESS', 1)
}

export function sendCommand ({dispatch}, command) {
  dispatch('SEND_COMMAND', command)
}
