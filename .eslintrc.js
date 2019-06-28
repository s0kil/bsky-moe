const OFF = 0
const ERROR = 2

module.exports = {
  parser: 'babel-eslint',
  env: { browser: true },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: { 'prettier/prettier': ERROR, 'react/jsx-filename-extension': OFF },
  settings: { react: { pragma: 'h' } },
}
