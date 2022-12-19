//Webpack requires this to work with directories
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// This is main configuration object that tells Webpackw what to do.
module.exports = {
  //path to entry paint
  entry: "./src/index.js",
  //path and filename of the final output
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },

  //default mode is production
  mode: "development",
  externalsType: "promise",
  externals: {
    react: "Promise.resolve(React)",
    "react-dom": "Promise.resolve(ReactDOM)",
    "@material-ui/core": "Promise.resolve(MaterialUI)",
  },
  devtool: "inline-source-map",

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/index.html",
    }),
  ],
};
