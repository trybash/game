import * as utils from 'src/lessons/utils'

describe('lastCommand', () => {
  it('checks the state for the last command', () => {
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

  it('checks the state for the last general command', () => {
    const lastCommandIsLs = utils.lastCommand('ls', true)
    let result = lastCommandIsLs({
      emulator: {history: ['ls']}
    })
    expect(result).to.be.true

    result = lastCommandIsLs({
      emulator: {history: ['ls -l']}
    })
    expect(result).to.be.true
  })
})

describe('pwdIs', () => {
  it('compares the workingDirectory', () => {
    const pwdIs = utils.pwdIs('/home/user')
    let result = pwdIs({
      emulator: {workingDirectory: '/home/user'}
    })
    expect(result).to.be.true

    result = pwdIs({
      emulator: {workingDirectory: '/home/user/nein'}
    })
    expect(result).to.be.false
  })
})
