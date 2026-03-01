module.exports = {
  'moduleFileExtensions': [
    'js',
    'vue'
  ],
  'mapCoverage': true,
  'transform': {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/jest-vue-preprocessor'
  },
  'moduleNameMapper': {
    '\\.(css|less)$': '<rootDir>/tests/__mocks__/style.js',
    '^@/(.*)$': '<rootDir>/components/$1',
    'util.js': '<rootDir>/tests/util.js'
  },
  'coverageDirectory': './coverage/',
  'collectCoverage': true
}
