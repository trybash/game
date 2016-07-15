import * as getters from 'src/vuex/getters'

const state = {
  lessons: [
    {title: 'Title 0'},
    {title: 'Title 1', sections: [
      {task: 'Section 1'},
      {task: 'Section 2', checkSolved () { return true }},
      {task: 'Section 3'}
    ]}
  ],
  currentSection: 2,
  currentLesson: 2,
  completedLessons: [1, 2]
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
    it('should return the current section - 1', () => {
      const result = getters.getCompletedSectionCount(state)
      expect(result).to.equal(1)
    })
  })

  describe('getSectionLength', () => {
    it('should return length of current section', () => {
      const result = getters.getSectionLength(state)
      expect(result).to.equal(3)
    })
  })

  describe('getCompletedCount', () => {
    it('should return how many lessons are completed', () => {
      const result = getters.getCompletedCount(state)
      expect(result).to.equal(2)
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
        currentSection: 2,
        currentLesson: 2,
        completedLessons: [1, 2],
        solvedCurrentSection: true
      }
      const result = getters.getSolved(state)
      expect(result).to.equal(true)
    })
  })
})
