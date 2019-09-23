const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (mode = "development") => ({
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devtool: mode !== "development" ? "eval" : "inline-source-map",
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, "dist"),
    open: true,
    compress: true,
    watchContentBase: true,
    progress: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
});
