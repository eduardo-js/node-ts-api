import config from './jest.config';
export default {
  ...config,
  testMatch: ['**/?(*.)+(e2e-spec).ts?(x)'],
};
