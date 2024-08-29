/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transform: {},
  modulePathIgnorePatterns: ['../__fixtures__/nestedData.js'],
};

module.exports = config;
