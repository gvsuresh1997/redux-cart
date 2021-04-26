const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },

  //   loader config
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
    loaders: [{ test: /\.jsx?$/, loader: "babel" }],
  },

  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },

  //   devServer setup
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 9000,
  },
};
