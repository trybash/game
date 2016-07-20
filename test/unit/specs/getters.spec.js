import * as getters from 'src/vuex/getters'

const state = {
  lessons: [
    {title: 'Title 0'},
    {title: 'Title 1', sections: [
      {task: 'Section 1', checkSolved () { return false }},
      {task: 'Section 2', checkSolved () { return true }},
      {task: 'Section 3', checkSolved () { return true }}
    ]}
  ],
  turbo: true,
  currentSection: 1,
  currentLesson: 1,
  completedLessons: [0, 1],
  lessonSelectionActive: false
}

describe('getters', () => {
  describe('getLessons', () => {
    it('should return a list of title and index', () => {
      const result = getters.getLessons(state)
      expect(result).to.deep.equal([
        {title: 'Title 0', index: 0},
        {title: 'Title 1', index: 1}
      ])
    })
  })

  describe('getCompletedSectionCount', () => {
    it('returns number of completed sections if currently working on a section', () => {
      const state2 = Object.assign({}, state, {currentSection: 0})
      const result = getters.getCompletedSectionCount(state2)
      expect(result).to.equal(0)
    })

    it('returns number +1 if current section is also solved', () => {
      const result = getters.getCompletedSectionCount(state)
      expect(result).to.equal(2)
    })
  })

  describe('getSectionCount', () => {
    it('should return length of current section', () => {
      const result = getters.getSectionCount(state)
      expect(result).to.equal(3)
    })
  })

  describe('getCompletedCount', () => {
    it('should return how many lessons are completed', () => {
      const result = getters.getCompletedCount(state)
      expect(result).to.equal(2)
    })
  })

  describe('getCompleted', () => {
    it('returns indices of completed lessons', () => {
      const result = getters.getCompleted(state)
      expect(result).to.deep.equal([0, 1])
    })
  })

  describe('getLesson', () => {
    it('returns current lesson with index', () => {
      const state2 = Object.assign({}, state, {currentLesson: 0})
      const result = getters.getLesson(state2)
      expect(result).to.deep.equal({title: 'Title 0', index: 0})
    })
  })

  describe('getLessonCount', () => {
    it('should return how many lessons there are', () => {
      const result = getters.getLessonCount(state)
      expect(result).to.equal(2)
    })
  })

  describe('getSection', () => {
    it('should return the current section', () => {
      const result = getters.getSection(state)
      expect(result.task).to.equal('Section 2')
    })
  })

  describe('getTask', () => {
    it('should return the current sections task', () => {
      const result = getters.getTask(state)
      expect(result).to.equal('Section 2')
    })
  })

  describe('getOutput', () => {
    it('should return the output', () => {
      const result = getters.getOutput(state)
      expect(result).to.equal()
    })
  })

  describe('getHistory', () => {
    it('should return the history', () => {
      const result = getters.getHistory(state)
      expect(result).to.equal()
    })
  })

  describe('getTurbo', () => {
    it('should return the turbo', () => {
      const result = getters.getTurbo(state)
      expect(result).to.equal(true)
    })
  })

  describe('getLessonSelectionActive', () => {
    it('should return if lesson selection is active', () => {
      const result = getters.getLessonSelectionActive(state)
      expect(result).to.equal(false)
    })
  })

  describe('getLessonSolved', () => {
    it('should return true if the last section of the lesson was solved', () => {
      const state2 = Object.assign({}, state, {currentSection: 2})
      const result = getters.getLessonSolved(state2)
      expect(result).to.be.true
    })

    it('should return false if the last section of the lesson was not solved', () => {
      const result = getters.getLessonSolved(state)
      expect(result).to.be.false
    })
  })

  describe('getSolved', () => {
    it('should return if the current section is solved', () => {
      const result = getters.getSolved(state)
      expect(result).to.equal(true)
    })

    it('should return if the current section has ever been solved', () => {
      const state = {
        lessons: [
          {title: 'Title 0'},
          {title: 'Title 1', sections: [
            {task: 'Section 1'},
            {task: 'Section 2', checkSolved () { return false }},
            {task: 'Section 3'}
          ]}
        ],
        currentSection: 1,
        currentLesson: 1,
        completedLessons: [0, 1],
        solvedCurrentSection: true
      }
      const result = getters.getSolved(state)
      expect(result).to.equal(true)
    })
  })
})
