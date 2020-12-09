module.exports = {
  '*.{js,jsx}': ['yarn lint:base --fix --max-warnings=0', 'yarn import-sort:base'],
  '*.{json,md,yml}': ['yarn format:base']
};
