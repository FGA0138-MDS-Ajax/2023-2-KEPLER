const { merge } = require('webpack-merge');
const commonConfig = require('./common.config');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    proxy: {
      '/': 'http://django:8000',
    },
    // We need hot=false (Disable HMR) to set liveReload=true
    hot: false,
    liveReload: true,
    client: {
      webSocketURL: 'auto://0.0.0.0:0/ws', // note the `:0` after `0.0.0.0`
    }
  },
});
