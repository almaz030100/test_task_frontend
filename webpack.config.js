const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode,
    target,
    devtool,

    devServer: {
        port: 3000,
        hot: true,
        client: {
            logging: 'warn'
        }
    },

    entry: ['@babel/polyfill', path.resolve(__dirname, 'src/index.js')],

    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: '[name].js',
        assetModuleFilename: 'assets/[name][ext]'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        })
    ],

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [require('postcss-preset-env')]
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name][ext]'
                }
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                        ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }
        ]
    },

    optimization: {
        minimizer: [
          "...",
          new ImageMinimizerPlugin({
            minimizer: {
              implementation: ImageMinimizerPlugin.imageminMinify,
              options: {
                plugins: [
                  ["jpegtran", { progressive: true }],
                  ["optipng", { optimizationLevel: 7 }],
                ],
              },
            },
          }),
        ],
    }
}