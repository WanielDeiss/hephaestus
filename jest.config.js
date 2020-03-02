module.exports = {
  projects: [
    {
      displayName: 'Client',
      rootDir: '<rootDir>/client',
      preset: 'jest-preset-angular',
      setupTestFrameworkScriptFile: '<rootDir>/setupJest.ts',
      globals: {
        'ts-jest': {
          tsConfig: '<rootDir>/tsconfig.spec.json',
        },
      },
    },
    {
      displayName: 'Server',
      testRegex: '.spec.ts$',
      rootDir: '<rootDir>/server',
      moduleFileExtensions: ['js', 'json', 'ts'],
      coverageDirectory: '<rootDir>/../coverage',
      testEnvironment: 'node',
      transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
      },
    },
  ],
};
