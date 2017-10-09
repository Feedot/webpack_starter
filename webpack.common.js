const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default;


module.exports = {
    entry: {
        build: './src/js/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: "/dist"
    },
    watchOptions: {
        aggregateTimeout: 100
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            },
            {
                test: /\\.(gif|png|jpg|svg|webp)$/i,
                use:{
                    loader: "file-loader"
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {loader: "css-loader"},
                        {loader: 'autoprefixer-loader'}
                    ]

                })
            },
            {
                test: /\.(gif|jpeg|jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: './img/[name].[ext]',
                },
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: './fonts/[name].[ext]',
                },
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: 'src/index.html'
        }),
        new ExtractTextPlugin({
            filename: '[name].css'
        }),

        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })

    ],
};