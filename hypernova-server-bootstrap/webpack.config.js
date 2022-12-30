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
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new NodemonPlugin()],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

const client = {
  target: "web",
  entry: path.join(__dirname, "src/client.ts"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "client.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

module.exports = [server, client];
