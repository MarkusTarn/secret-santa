module.exports = {
  verbose: true,
  testMatch: ['**/*.test.js'],
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    'jest-extended',
    '<rootDir>/tests/jest-init.js',
  ],
  collectCoverage: true,
  transform: {
    '^.+\\.jsx$': 'babel-jest',
  },
  globals: {
    NODE_ENV: 'test',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
  ],
}
