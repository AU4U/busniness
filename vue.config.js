const path = require('path')
// // const { postcss } = require('postcss-pxtorem')

module.exports = {
    publicPath: './', // 基本路径
    outputDir: 'dist', // 输出文件目录
    lintOnSave: false, // eslint-loader 是否在保存的时候检查
    css: {
        extract: true, // 是否使用css分离插件 ExtractTextPlugin
        sourceMap: false, // 开启 CSS source maps?
        loaderOptions: {
            sass: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.sass` 这个文件
                // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
                additionalData: `@import "~@/variables.sass"`
              },
              // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
              // 因为 `scss` 语法在内部也是由 sass-loader 处理的
              // 但是在配置 `prependData` 选项的时候
              // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
              // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
              scss: {
                additionalData: `@import "~@/variables.scss";`
              },
            css: {}, // 这里的选项会传递给 css-loader
            postcss: {},// 这里的选项会传递给 postcss-loader
            // modules: false
        }, 
    },
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0', // 允许外部ip访问
        port: 80, // 端口
        proxy: {
            '/api': {
                // target: "http://121.43.53.75:3428/",
                target: "http://211.159.163.225:8082/",
                changeOrigin: true, // 允许websockets跨域
                pathRewrite: {
                    '^/api': ''
                }
            }
        } // 代理转发配置，用于调试环境
    },
//     // 第三方插件配置
//     pluginOptions: {}
}