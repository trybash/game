// import Vue from 'vue'
import ProgressBar from 'src/components/ProgressBar'

function fillWidth (current, max) {
  return ProgressBar.computed.fillWidth.bind({current, max})()
}

describe('ProgressBar.vue', () => {
  it('should calculate fill width', () => {
    let result = fillWidth(0, 10)
    expect(result).to.equal('0%')

    result = fillWidth(5, 10)
    expect(result).to.equal('50%')

    result = fillWidth(10, 10)
    expect(result).to.equal('100%')
  })
})
