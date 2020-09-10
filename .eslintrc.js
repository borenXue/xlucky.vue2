module.exports = {
  root: true,
  env: { node: true, browser: true },
  // parser: 'babel-eslint',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
    },
    requireConfigFile: false,
    allowImportExportEverywhere: false,
  },
  plugins: ['prettier'],
  extends: ['alloy', 'alloy/typescript'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'no-debugger': 'warn',
    '@typescript-eslint/explicit-member-accessibility': 0,
    'guard-for-in': 0,
  },
};
