const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 9000,
        open: true
    },
    plugins: [
        new CleanWebpackPlugin,
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './src/index.html',
            filename: 'index.html',
        }),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '', // This is needed to fix stupid "Automatic publicPath is not supported in this browser" error 
    },
    module: {
        rules: [
            {
                /**
                 * Support importing less files in Js with:
                 * import './styles.less';
                 * Note: the loaders run in reverse order i.e. less -> css -> style (Js)
                 */
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ], 
            },
            {
                test: /\.(png|svg)$/,
                type: 'asset/resource'
            },
            {
                /**
                 * Copy the referenced images/* from template html in src/
                 * into the dist/ directory and replace name with a hash
                 */
                test: /\.(html)$/,
                use: ['html-loader'],
            }
        ],
    },
};