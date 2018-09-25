const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env, argv) => {
    return {
        entry: ['babel-polyfill', './src/index.js'],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "env",
                                "react",
                                "stage-2"
                            ]
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [{
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }]
                    })
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }]
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    }
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        output: {
            path: __dirname + '/public',
            publicPath: '/',
            filename: 'bundle.js'
        },
        devServer: {
            contentBase: './public',
            historyApiFallback: true
        },
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            drop_console: true,
                        }
                    }
                })
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'PUBLIC_URL': argv.mode === 'production' ? JSON.stringify('/wheels-react') : JSON.stringify(''),
                    'API_SERVER': 'http://massoudjoveini.com/wheels-laravel/api/v1',
                    'NODE_ENV': JSON.stringify(argv.mode)
                }
            }),
            new ExtractTextPlugin('styles.css')
        ]
    }
};
