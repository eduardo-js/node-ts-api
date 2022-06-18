export default {
  preset: 'ts-jest',
  clearMocks: true,
  coverageProvider: 'v8',
  collectCoverage: false,
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  testEnvironment: 'node',
  setupFiles: ['dotenv/config', 'reflect-metadata'],
  globalSetup: './test/setup.ts',
};
