var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //插件项
    // plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        index : 'js/index.js'
    },
    //入口文件输出配置
    output: {
        path: 'js',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { 
                context: path.join(__dirname, 'css/pageThemes'),
                from: '*', 
                to: 'pageThemes',
                force: true
            },
            { 
                context: path.join(__dirname, 'imgs'),
                from: '*', 
                to: 'imgs',
                force: true
            },
            { 
                context: path.join(__dirname, 'css/themes'),
                from: '*', 
                to: 'themes',
                force: true
            },
            { 
                context: path.join(__dirname, './'),
                from: "index.html",
                to: 'index.html',
                force: true
            },
            { 
                context: path.join(__dirname, './'),
                from: "demo.md",
                to: 'demo.md',
                force: true
            },
            { 
                context: path.join(__dirname, './'),
                from: "favicon.ico",
                to: 'favicon.ico',
                force: true
            },
            { 
                context: path.join(__dirname, './'),
                from: "CNAME",
                to: 'CNAME',
                toType: 'file',
                force: true
            }
        ])
    ]
};
