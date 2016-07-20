import Done from 'src/components/Done'

describe('Done.vue', () => {
  describe('computed', () => {
    describe('active', () => {
      it('is true if section is solved and lesson is not solved', () => {
        const result = Done.computed.active.call({solved: true, lessonSolved: false})
        expect(result).to.be.true
      })

      it('is false if section is not solved', () => {
        const result1 = Done.computed.active.call({solved: false, lessonSolved: true})
        expect(result1).to.be.false

        const result2 = Done.computed.active.call({solved: false, lessonSolved: false})
        expect(result2).to.be.false
      })

      it('is false if lesson is solved', () => {
        const result1 = Done.computed.active.call({solved: true, lessonSolved: true})
        expect(result1).to.be.false

        const result2 = Done.computed.active.call({solved: false, lessonSolved: true})
        expect(result2).to.be.false
      })
    })
  })
})
