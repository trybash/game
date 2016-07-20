import LessonSelection from 'src/components/LessonSelection'

describe('LessonSelection.vue', () => {
  describe('computed', () => {
    describe('active', () => {
      it('is true if selectionActive or lessonSolved are true', () => {
        const result1 = LessonSelection.computed.active.call({selectionActive: true, lessonSolved: true})
        expect(result1).to.be.true

        const result2 = LessonSelection.computed.active.call({selectionActive: true, lessonSolved: false})
        expect(result2).to.be.true

        const result3 = LessonSelection.computed.active.call({selectionActive: false, lessonSolved: true})
        expect(result3).to.be.true
      })

      it('is false if selectionActive and lessonSolved are false', () => {
        const result1 = LessonSelection.computed.active.call({selectionActive: false, lessonSolved: false})
        expect(result1).to.be.false
      })
    })
  })
})
