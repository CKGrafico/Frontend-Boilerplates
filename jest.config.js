module.exports = {
  moduleFileExtensions: [
    'js',
    'json'
  ],
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: [
    '**/**/*.test.(js)|**/tests/unit/*.(js)'
  ],
  testURL: 'http://localhost/'
};
