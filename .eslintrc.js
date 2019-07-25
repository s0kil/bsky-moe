const OFF = 0
const ERROR = 2

module.exports = {
  parser: 'babel-eslint',
  env: { browser: true },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['emotion', 'prettier'],
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
  },
}
