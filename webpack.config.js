const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.ts'),
  watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.js",
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'ts-loader',
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
};

