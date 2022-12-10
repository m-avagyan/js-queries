const configs = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/*.+(ts|js)', '**/?(*.)+test.+(ts|js)'],
  collectCoverageFrom: ['**/functions/*.+(ts|js)'],
};

module.exports = configs;
