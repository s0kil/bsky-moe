const presets = [['@babel/preset-modules', { loose: true }]];

const plugins = [['@babel/plugin-transform-react-jsx', { pragma: 'h' }]];

module.exports = { presets, plugins };
