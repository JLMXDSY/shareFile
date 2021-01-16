const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports ={
    entry:"./src/index.ts",
    output:{
        filename:"main.js"
    },
    resolve:{
        // 自动解析一下拓展，当我们要引入src/index.ts的时候，只需要写src/index即可
        extensions:[".tsx",".ts",".js"]
    },
    module:{
        // 配置以.ts/.tsx结尾的文件都用ts-loader解析
        // 这里我们用到ts-loader,所以要安装一下
        // npm Install ts-loader -D
        rules:[
            {
                test:/\.tsx?$/,
                use:"ts-loader",
                exclude:/node_modules/
            }
        ]
    },
    // 指定编译后是否生成source-map,这里判断如果是生产打包环境则不生成source-map
    devtool:process.env.NODE_ENV === "production"?false:"inline-source-map",
    // 这里使用webpack-dev-server,进行本地开发调试
    devServer:{
        contentBase:"./dist",
        stats:"errors-only",
        compress:false,
        host:"localhost",
        port:8888
    },
    // 这里用到两个插件，所以我们要记着先安装
    // html-webpack-plugin clean-webpack-plugin
    plugins:[
        // 这里在编译之前先删除dist文件夹
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:["./dist"]
        }),
        // 这里我们指定编译需要用的模版
        new HtmlWebpackPlugin({
            template:"./src/template/index.html"
        })
    ]
}