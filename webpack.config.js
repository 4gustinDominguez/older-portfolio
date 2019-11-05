const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const basePath = __dirname;

module.exports = (mode = 'development') => ({
  entry: path.join(basePath, 'src', 'index.tsx'),
  output: {
    path: path.join(basePath, 'build'),
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: mode === 'development' ? 'inline-source-map' : 'eval-source-map',
  devServer: {
    port: 3000,
    contentBase: path.join(basePath, 'build'),
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
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          mimetype: 'application/octet-stream',
        },
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
