module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/*.stories.tsx',
    '!<rootDir>/src/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/styles/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/pages/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/components/Loading/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/components/SectionTestimonials/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/graphql/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/graphql/queries/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/routes/*.{js,jsx,ts,tsx}',
    '!<rootDir>/**/*.stories.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  }
}
