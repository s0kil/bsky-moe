const { resolve } = require('path')

const OFF = 0
const ERROR = 2

module.exports = {
  env: { browser: true },
  parser: '@typescript-eslint/parser',
  parserOptions: { project: resolve(__dirname, 'tsconfig.json') },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'emotion', 'prettier'],
  rules: {
    'prettier/prettier': ERROR,
    'react/jsx-filename-extension': OFF,
    'react/prop-types': OFF,
    'emotion/jsx-import': ERROR,
    'emotion/no-vanilla': ERROR,
    'emotion/import-from-emotion': ERROR,
    'emotion/styled-import': ERROR,
    'import/prefer-default-export': OFF,
    'import/no-extraneous-dependencies': OFF,
    '@typescript-eslint/prefer-interface': OFF,
  },
  settings: {
    'import/extensions': ['.js', '.ts', '.tsx'],
    'import/resolver': { node: { extensions: ['.js', '.ts', '.tsx'] } },
  },
}
