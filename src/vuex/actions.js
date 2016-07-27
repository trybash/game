export function sendCommand ({dispatch}, command) {
  dispatch('SEND_COMMAND', command)
}

export function reset ({dispatch}) {
  dispatch('RESET')
}

export function restartSection ({dispatch, state}) {
  dispatch('START_SECTION', state.currentLesson, state.currentSection)
}

export function nextSection ({dispatch, state}) {
  dispatch('START_SECTION', state.currentLesson, state.currentSection + 1)
}

export function openLesson ({dispatch}, lessonNumber) {
  dispatch('START_SECTION', lessonNumber, 0)
  dispatch('DEACTIVATE_LESSON_SELECTION')
}

export function toggleTurbo ({dispatch}) {
  dispatch('TOGGLE_TURBO')
}

export function activateLessonSelection ({dispatch}) {
  dispatch('ACTIVATE_LESSON_SELECTION')
}

export function deactivateLessonSelection ({dispatch}) {
  dispatch('DEACTIVATE_LESSON_SELECTION')
}

export function addCompletedLesson ({dispatch}, index) {
  dispatch('ADD_COMPLETED_LESSON', index)
}
