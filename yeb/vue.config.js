let proxyObj = {}
proxyObj['/'] = {
  //webscocket
  ws:false,
  //目标地址
  target:'http://localhost:8081',
  changeOrigin:true,
  //不重写请求地址
  pathRewrite:{
    '^/':'/'
  }
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    host:'localhost',
    port:8080,
    proxy:proxyObj
    // proxy:{
    //   '/':{
    //     target:'http://localhost:8081'
    //   }
    // }
  }
})
