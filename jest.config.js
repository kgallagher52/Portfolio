module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testMatch: [
    "<rootDir>/**/*.test.tsx",
    "<rootDir>/**/*.test.ts",
],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],

  testEnvironment: 'jest-environment-jsdom',
}