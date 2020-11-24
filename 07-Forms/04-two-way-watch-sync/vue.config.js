module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: process.env.API_PROXY_TARGET,
        changeOrigin: true,
      },
    },
  },
};
