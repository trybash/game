import Task from 'src/components/Task'

describe('Task.vue', () => {
  describe('initial data', () => {
    it('returns an object', () => {
      const result = Task.data.call({section: 'section'})
      expect(result).to.deep.equal({sections: ['', 'section']})
    })
  })

  describe('watch', () => {
    describe('section', () => {
      it('shifts the array and adds the new value to the end', () => {
        const sections = [1, 2]
        Task.watch.section.call({sections}, 3)
        expect(sections).to.deep.equal([2, 3])
      })
    })
  })
})
