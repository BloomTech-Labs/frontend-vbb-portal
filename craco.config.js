/* global require module */
const WebpackBar = require("webpackbar");
const CracoAntDesignPlugin = require("craco-antd");

// Don't open the browser during development
process.env.BROWSER = "none";

module.exports = {
  eslint: {
    enable: false,
  },
  webpack: {
    plugins: [
      new WebpackBar({ profile: true }),
    ],
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: './src/less/antTheme.less',
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
