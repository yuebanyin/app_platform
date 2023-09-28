const { merge } = require("webpack-merge");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");
const baseConfig = require("./webpack.common.js");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],
  cache: {
    type: "filesystem",
    buildDependencies: {
      config: [__filename],
    },
    maxAge: 3600000,
  },
  optimization: {
    nodeEnv: "development",
  },
  devServer: {
    compress: true,
    port: 3000,
    host: "0.0.0.0",
    open: true,
    hot: true,
    liveReload: false,
    static: false,
    client: {
      logging: "info",
      progress: true,
    },
    proxy: {
      "/api": {
        target: "https://target.com",
        changeOrigin: true,
        pathRewrite: { '^/api/': '/v1/' },
      },
    },
  },
});
