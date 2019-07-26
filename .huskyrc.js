const tasks = arr => arr.join(' && ')

module.exports = {
  hooks: {
    'pre-commit': tasks(['tsc', 'lint-staged', 'pretty-quick --staged']),
  },
}
