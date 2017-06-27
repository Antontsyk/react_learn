var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry:[
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        APP_DIR + '/index.jsx'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        host: 'localhost',
        port: 3000,

        historyApiFallback: true,
        // respond to 404s with index.html

        hot: true,
        // enable HMR on the server
    },
};

module.exports = config;