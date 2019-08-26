module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'ts',
    'tsx'
  ],
  transform: {
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  testMatch: [
    '**/**/*.test.(js|jsx|ts|tsx)|**/tests/unit/specs/*.(js|jsx|ts|tsx)'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testURL: 'http://localhost/',
  globals: {
    'ts-jest': {
      babelConfig: '.babelrc'
    }
  }
};
