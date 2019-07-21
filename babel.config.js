const presets = [
  [
    '@babel/preset-env',
    { useBuiltIns: 'usage', corejs: 3, targets: { esmodules: true } },
  ],
]

const plugins = [
  ['@babel/plugin-transform-react-jsx', { pragma: 'h' }],
  'emotion',
]

module.exports = { presets, plugins }
