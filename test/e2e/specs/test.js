// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    browser
    .url('http://localhost:8080')
      .waitForElementVisible('body', 5000)
      .assert.elementPresent('.Terminal')
      .end()
      // .assert.containsText('h1', 'Hello World!')
      // .assert.elementCount('p', 3)
  }
}
