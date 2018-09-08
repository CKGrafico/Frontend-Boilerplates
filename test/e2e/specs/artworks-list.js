// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('.artworks-list', 5000)
      .assert.elementPresent('.el-table__body')
      .waitForElementVisible('tbody tr', 5000)
      .assert.elementCount('tbody tr', 10)

    browser
      .url(devServer)
      .waitForElementVisible('.artworks-list', 5000)
      .assert.elementCount('.el-breadcrumb__item', 2)
      .end()
  }
}
