export function getLessons (state) {
  return state.lessons.map((lesson, index) => {
    return { title: lesson.title, index }
  })
}

export function getCompletedSectionCount (state) {
  return state.currentSection
}

export function getSectionLength (state) {
  return state.lessons[state.currentLesson].sections.length
}

export function getCompletedCount (state) {
  return state.completedLessons.length
}

export function getLessonCount (state) {
  return state.lessons.length
}

export function getSection (state) {
  return state.lessons[state.currentLesson].sections[state.currentSection]
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
  try {
    return getSection(state).checkSolved(state) || state.solvedCurrentSection
  } catch (e) {
    return state.solvedCurrentSection
  }
}

export function getTurbo (state) {
  return state.turbo
}

export function getLessonSelectionActive (state) {
  return state.lessonSelectionActive
}
