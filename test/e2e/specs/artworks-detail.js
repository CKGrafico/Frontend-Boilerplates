// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL + '/artworks/SK-C-211'

    browser
      .url(devServer)
      .waitForElementVisible('.artwork-detail', 5000)
      .assert.elementPresent('.artwork-detail__title')
      .assert.containsText('.artwork-detail__title', 'The Windmill at Wijk bij Duurstede')

    browser
      .url(devServer)
      .waitForElementVisible('.artwork-detail', 5000)
      .assert.elementCount('.el-breadcrumb__item', 3)
      .end()
  }
}
