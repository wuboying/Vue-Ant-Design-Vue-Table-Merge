module.exports = {
  lintOnSave: false,
  publicPath: './',
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 15000,
    https: false,
    hotOnly: false,
    before: app => { },
    proxy: {
      '/baseGet': {
        target: 'http://192.168.6.16:60006',//王超
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/baseGet': ''   //需要rewrite的,
        }
      },
    }

  },
}
