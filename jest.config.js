module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/test/"
  ],
  collectCoverageFrom: [
    "src/*.{js,ts}"
  ]
}
