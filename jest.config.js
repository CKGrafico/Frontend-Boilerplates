module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'ts',
    'tsx'
  ],
  transform: {
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: [
    '**/**/*.test.(js|jsx|ts|tsx)|**/tests/unit/specs/*.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/',
  globals: {
    'ts-jest': {
      babelConfig: true
    }
  }
}
