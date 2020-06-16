module.exports = (on, config) => {
  return Object.assign({}, config, {
    fixturesFolder: 'fixtures',
    integrationFolder: 'specs',
    screenshotsFolder: 'screenshots',
    videosFolder: 'videos'
  });
};
