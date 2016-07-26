import LessonSelection from 'src/components/LessonSelection'

describe('LessonSelection.vue', () => {
  describe('methods', () => {
    describe('getColor', () => {
      it('returns grey if neither active nor done', () => {
        const result = LessonSelection.methods.getColor({
          active: false,
          done: false
        })
        expect(result).to.equal('green')
      })

      it('returns yellow if active but not done', () => {
        const result = LessonSelection.methods.getColor({
          active: true,
          done: false
        })
        expect(result).to.equal('yellow')
      })

      it('returns green if done', () => {
        const result = LessonSelection.methods.getColor({
          active: false,
          done: true
        })
        expect(result).to.equal('green')

        const result2 = LessonSelection.methods.getColor({
          active: true,
          done: true
        })
        expect(result2).to.equal('yellow')
      })
    })

    describe('getButtontext', () => {
      it('returns Start if neither active nor done', () => {
        const result = LessonSelection.methods.getButtontext({
          active: false,
          done: false
        })
        expect(result).to.equal('Start')
      })

      it('returns Continue if active but not done', () => {
        const result = LessonSelection.methods.getButtontext({
          active: true,
          done: false
        })
        expect(result).to.equal('Continue')
      })

      it('returns Play Again if done', () => {
        const result = LessonSelection.methods.getButtontext({
          active: false,
          done: true
        })
        expect(result).to.equal('Play Again')

        const result2 = LessonSelection.methods.getButtontext({
          active: true,
          done: true
        })
        expect(result2).to.equal('Play Again')
      })
    })
  })
})
