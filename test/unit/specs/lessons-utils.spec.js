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

describe('workingDirectory', () => {
  it('compares the workingDirectory', () => {
    const workingDirectory = utils.workingDirectory('/home/user')
    let result = workingDirectory({
      emulator: {workingDirectory: '/home/user'}
    })
    expect(result).to.be.true

    result = workingDirectory({
      emulator: {workingDirectory: '/home/user/nein'}
    })
    expect(result).to.be.false
  })
})

describe('checkType', () => {
  it('returns true if file exists and is right type', () => {
    const result = utils.checkType('/dir', 'dir')({
      emulator: {fileSystem: {'/dir': {type: 'dir'}}}
    })
    expect(result).to.be.true

    const result2 = utils.checkType('/file', 'file')({
      emulator: {fileSystem: {'/file': {type: 'file'}}}
    })
    expect(result2).to.be.true
  })

  it('returns false if file exists but is wrong type', () => {
    const result = utils.checkType('/dir', 'dir')({
      emulator: {fileSystem: {'/dir': {type: 'file'}}}
    })
    expect(result).to.be.false

    const result2 = utils.checkType('/file', 'file')({
      emulator: {fileSystem: {'/file': {type: 'dir'}}}
    })
    expect(result2).to.be.false

    const result3 = utils.checkType('/file', null)({
      emulator: {fileSystem: {'/file': {type: 'dir'}}}
    })
    expect(result3).to.be.false
  })

  it('returns true if file doesnt exist but type is null', () => {
    const result2 = utils.checkType('/file', null)({emulator: {fileSystem: {}}})
    expect(result2).to.be.true
  })

  it('returns false if file doesnt exist but file or dir is wanted', () => {
    const result = utils.checkType('/dir', 'dir')({emulator: {fileSystem: {}}})
    expect(result).to.be.false

    const result2 = utils.checkType('/file', 'file')({emulator: {fileSystem: {}}})
    expect(result2).to.be.false
  })
})

describe('checkContent', () => {
  it('returns true if file exists and is right content', () => {
    const result = utils.checkContent('/dir', 'dir')({
      emulator: {fileSystem: {'/dir': {content: 'dir'}}}
    })
    expect(result).to.be.true
  })

  it('returns false if file exists but is wrong content', () => {
    const result = utils.checkContent('/dir', 'dir')({
      emulator: {fileSystem: {'/dir': {content: 'file'}}}
    })
    expect(result).to.be.false
  })

  it('returns false if file doesnt exit', () => {
    const result = utils.checkContent('/dir', 'dir')({
      emulator: {fileSystem: {}}
    })
    expect(result).to.be.false
  })
})

describe('compose', () => {
  it('returns a function that returns true if every argument function returns true', () => {
    const fn = utils.compose(
      (state) => { return state },
      (state) => { return state },
      (state) => { return state }
    )

    const result = fn(true)
    expect(result).to.be.true
  })

  it('returns a function that returns false if any argument function returns false', () => {
    const fn = utils.compose(
      (state) => { return state },
      (state) => { return false },
      (state) => { return state }
    )

    const result = fn(true)
    expect(result).to.be.false
  })
})
