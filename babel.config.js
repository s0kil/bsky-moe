const presets = [
  [
    '@babel/preset-env',
    {
      useBuiltIns: 'usage',
      corejs: 3,
      loose: true,
      targets: { esmodules: true },
    },
  ],
  '@babel/preset-react',
]

module.exports = { presets }
