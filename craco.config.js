// The place where you override Webpack
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '~': `${path.resolve(__dirname)}/src`
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^~(.*)$': '<rootDir>/src$1'
      }
    }
  }
}
