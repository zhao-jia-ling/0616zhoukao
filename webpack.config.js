const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode:"development",
    // entry:"./src/index.js" ,// 改变入口文件
    // 多入口，单出口，把多个入口文件合并成一个 js 文件
    // entry: ['./src/index.js', './src/detail.js'], // 入口文件
    // output: {
    //   path: path.join(__dirname, 'build'), // 输出的文件夹，绝对路径
    //   filename: 'index.js', // 输出的文件名
    //   clean: true // 自动删除之前打包的文件
    // },
    // 多入口，多出口
  entry: {
    app1: './src/index/index.js',
    app2: './src/detail/detail.js'
  },
    devtool:'source-map',// 添加源代码和打包后代码的映射关系
    output:{
        path: path.join(__dirname, 'build')  , //输出的文件夹，绝对路径
    // 输出的文件名
    // [name] 根据入口配置的key输出对应的文件名
    // [hash:8] 根据文件内容生成哈希值，防止代码更新时用户读缓存
        filename:'js/[name][hash:8].js', // 输出的文件名,根据入口配置的key输出对应的文件名
        clean: true, //自动删除之前打包的文件
        assetModuleFilename: 'imgs/[name].[hash:8][ext]' // 图片名称
    },
    module:{
        // 配置各种loader ,  解析除 js 和 json 以外的文件 
        rules:[
            {
                test:/\.(s?css|sass)$/i,//i大小写
                // MiniCssExtractPlugin.loader 抽离单独的css文件
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']// 把解析好的样式加到行内
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',// 使用 webpack5 内置的资源管理模块处理图片
                // parser: {
                //     dataUrlCondition: {
                //       maxSize: 4 * 1024 // 4kb 以内全部转成base64
                //     }
                //   }
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use:'babel-loader'
            }

        ]
    },
    plugins: [ // 配置插件
        new HtmlWebpackPlugin({ // 复制 html 文件，自动把生成的 js 引入到 html
            template:'./src/index.html',
            filename:'index.html',
            chunks:['app1'] // 设置引入的js文件
        }),
        new HtmlWebpackPlugin({ // 复制 html 文件，自动把生成的 js 引入到 html
            template:'./src/detail.html',
            filename:'detail.html',
            chunks:['app2'] // 设置引入的js文件
        }),
        // 配置抽离css文件
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css'
        })
    ],
    devServer:{ // 配置本地开发服务器
        port: 9002,
        open: true,
        //请求代理
        proxy: [
            {
              // 当请求 /api/abc 转发到 http://ustbhuangyi.com/abc
              context: ['/api'],
              target: 'http://ustbhuangyi.com',
              pathRewrite:{ '^/api':'' }, //重写路径 把地址里面的/api 转成 空字符串 删掉
              changeOrigin: true,//改变源地址
            }
          ]
    },
    resolve:{
        alias:{
            // 配置常用目录别名
            '@':path.join(__dirname,'src'),
            'Utils':path.join(__dirname, 'src/utils')
        }
    }
}
