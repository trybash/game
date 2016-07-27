import Done from 'src/components/Done'

describe('Done.vue', () => {
  describe('watch', () => {
    describe('active', () => {
      it('calls focus() on $els.next if active became true', () => {
        const spy = sinon.spy()
        Done.watch.active.call({$els: {next: {focus: spy}}}, true)
        expect(spy.calledOnce).to.be.true
      })

      it('does not call focus() on $els.next if active became false', () => {
        const spy = sinon.spy()
        Done.watch.active.call({$els: {next: {focus: spy}}}, false)
        expect(spy.calledOnce).to.be.false
      })
    })
  })
})
