export default {
  preset: 'ts-jest',
  clearMocks: true,
  coverageProvider: 'v8',
  collectCoverage: false,
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  globalSetup: './test/setup.ts',
};
