const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const basePath = __dirname;

module.exports = (mode = 'development') => ({
  entry: path.join(basePath, 'src', 'index.tsx'),
  output: {
    path: path.join(basePath, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: mode === 'development' ? 'inline-source-map' : '',
  devServer: {
    port: 3000,
    contentBase: path.join(basePath, 'dist'),
    open: true,
    compress: true,
    watchContentBase: true,
    progress: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(basePath, 'src', 'index.html'),
      filename: 'index.html',
    }),
  ],
});
