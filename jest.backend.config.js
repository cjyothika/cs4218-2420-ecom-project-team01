module.exports = {
  // display name
  displayName: "backend",

  // when testing backend
  testEnvironment: "node",

  // which test to run
  testMatch: ["<rootDir>/controllers/*.test.js"],

  // jest code coverage
  collectCoverage: true,
  collectCoverageFrom: ["controllers/**"],
  coverageDirectory: "coverage/backend",
  coverageThreshold: {
    global: {
      lines: 100,
      functions: 100,
    },
  },
};
