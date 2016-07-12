// import Vue from 'vue'
import Progress from 'src/components/Progress'

function fillWidth (current, max) {
  return Progress.computed.fillWidth.bind({current, max})()
}

describe('Progress.vue', () => {
  it('should calculate fill width', () => {
    let result = fillWidth(0, 10)
    expect(result).to.equal('0%')

    result = fillWidth(5, 10)
    expect(result).to.equal('50%')

    result = fillWidth(10, 10)
    expect(result).to.equal('100%')
  })
})
