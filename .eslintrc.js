const OFF = 0
const ERROR = 2

module.exports = {
  env: { browser: true, node: true },
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 2019, sourceType: 'module' },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'emotion'],
  rules: {
    'react/prop-types': OFF,
    'emotion/jsx-import': ERROR,
    'emotion/no-vanilla': ERROR,
    'emotion/import-from-emotion': ERROR,
    'emotion/styled-import': ERROR,
  },
  settings: {
    react: { version: '16' },
    'import/extensions': ['.js', '.ts', '.tsx'],
    'import/resolver': { node: { extensions: ['.js', '.ts', '.tsx'] } },
  },
}
