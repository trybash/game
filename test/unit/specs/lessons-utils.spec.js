import * as utils from 'src/lessons/utils'

describe('lastCommand', () => {
  it('should return a function that checks the state', () => {
    const lastCommandIsLs = utils.lastCommand('ls')
    let result = lastCommandIsLs({
      emulator: {history: ['ls']}
    })
    expect(result).to.be.true

    result = lastCommandIsLs({
      emulator: {history: ['cd']}
    })
    expect(result).to.be.false
  })
})
