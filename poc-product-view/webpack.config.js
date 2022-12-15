const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

const server = {
  target: "node",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "server.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/, // add |ts
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [new NodemonPlugin()],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
};

const client = {
  target: "web",
  entry: path.join(__dirname, "src/client.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "client.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/, // add |ts
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
};

module.exports = [server, client];
