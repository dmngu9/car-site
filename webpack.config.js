const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src/frontend'),
    entry: {
        'app': './app.tsx'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        path: path.resolve(__dirname, './dist/frontend'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [/node_modules/],
                use: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {minimize: true}
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body',
            hash: false
        })
    ]
};
