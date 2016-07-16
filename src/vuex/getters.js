export function getLessons (state) {
  return state.lessons.map((lesson, index) => {
    return { title: lesson.title, index }
  })
}

export function getCompletedSectionCount (state) {
  return state.currentSection - 1
}

export function getSectionLength (state) {
  return state.lessons[state.currentLesson - 1].sections.length
}

export function getCompletedCount (state) {
  return state.completedLessons.length
}

export function getLessonCount (state) {
  return state.lessons.length
}

export function getSection (state) {
  return state.lessons[state.currentLesson - 1].sections[state.currentSection - 1]
}

export function getTask (state) {
  return getSection(state).task
}

export function getOutput (state) {
  return state.output
}

export function getHistory (state) {
  return state.history
}

export function getSolved (state) {
  return getSection(state).checkSolved(state) || state.solvedCurrentSection
}

export function getTurbo (state) {
  return state.turbo
}
