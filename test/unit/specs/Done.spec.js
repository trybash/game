import Done from 'src/components/Done'

describe('Done.vue', () => {
  describe('data', () => {
    it('returns the initial data', () => {
      const result = Done.data()
      expect(result.praises).to.be.an.array
      expect(result.praises.length).to.be.above(0)
      expect(result.praiseIndex).to.equal(0)
    })
  })

  describe('watch', () => {
    describe('active', () => {
      it('calls focus() on $els.next if active became true', () => {
        const focus = sinon.spy()
        const newPraise = sinon.spy()
        Done.watch.active.call({$els: {next: {focus}}, newPraise}, true)
        expect(focus.calledOnce).to.be.true
        expect(newPraise.calledOnce).to.be.true
      })

      it('does not call focus() on $els.next if active became false', () => {
        const focus = sinon.spy()
        const newPraise = sinon.spy()
        Done.watch.active.call({$els: {next: {focus}}, newPraise}, false)
        expect(focus.calledOnce).to.be.false
        expect(newPraise.calledOnce).to.be.false
      })
    })
  })

  describe('methods', () => {
    describe('newPraise', () => {
      it('sets praiseIndex to some index of the praises array', () => {
        for (var i = 0; i < 100; i++) {
          const _this = {
            praiseIndex: 0,
            praises: ['a', 'b', 'c']
          }

          Done.methods.newPraise.call(_this)

          expect(_this.praiseIndex).to.be.at.least(0)
          expect(_this.praiseIndex).to.be.at.most(2)
        }
      })
    })
  })
})
