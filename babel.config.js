const presets = [
  '@babel/preset-typescript',
  [
    '@babel/preset-env',
    { useBuiltIns: 'usage', corejs: 3, targets: { esmodules: true } },
  ],
  '@babel/preset-react',
]

const plugins = ['emotion']

module.exports = { presets, plugins }
