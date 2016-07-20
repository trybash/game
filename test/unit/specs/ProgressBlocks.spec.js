import ProgressBlocks from 'src/components/ProgressBlocks'

describe('ProgressBlocks.vue', () => {
  describe('computed', () => {
    describe('blocks', () => {
      it('returns list of lessons with done, active and index properties', () => {
        const result1 = ProgressBlocks.computed.blocks.call({
          lessons: [{index: 0}, {index: 1}],
          completed: [0],
          lesson: {index: 1}
        })
        expect(result1).to.deep.equal([{
          index: 0, done: true, active: false
        }, {
          index: 1, done: false, active: true
        }])
      })
    })
  })
})
