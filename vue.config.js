const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {

    // proxy: {
    //   '/audio': {
    //     target: 'https://version.anxiashuyuan.com/',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/audio': ''
    //     }
    //   },
    //   '/api': {
    //     target: 'https://version.anxiashuyuan.com/',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   },
    // },

    proxy: {
      '/api': {
        target: 'http://version.anxiashuyuan.com/', //设置你调用的接口域名和端口号 别忘了加http
        // target: 'https://api.yimishiji.com/', //设置你调用的接口域名和端口号 别忘了加http

        changeOrigin: true,
        pathRewrite: {
          '^/api': '/' //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
        }
      }
    }
    // http://version.anxiashuyuan.com/
    // http://soundoss.anxiashuyuan.com/
  },

})