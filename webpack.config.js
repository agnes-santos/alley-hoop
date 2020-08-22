const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = function (env, argv) {
  const isProduction = argv.mode === 'production';
  const isDevelopment = !isProduction;

  return {
    devtool: isDevelopment && 'cheap-module-source-map',
    devServer: {
      compress: true,
      historyApiFallback: true,
      open: true,
      overlay: true,
    },
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'assets/js/[name].[contenthash:8].js',
      // publicPath: isDevelopment ? '/' : '/dist',
    },
    module: {
      rules: [
        // .js
        {
          test: /\m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName: isProduction ? 'production' : 'development',
              presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
              plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
              ],
              env: {
                production: {
                  only: ['src'],
                  plugins: [
                    ['transform-react-remove-prop-types', { removeImport: true }],
                    '@babel/plugin-transform-react-inline-elements',
                    '@babel/plugin-transform-react-constant-elements',
                  ],
                },
              },
            },
          },
        },
        // .css
        {
          test: /\.css$/,
          use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
        },
        // .svg
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      isProduction &&
        new MiniCssExtractPlugin({
          filename: 'assets/css/[name].[contenthash:8].css',
          chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css',
        }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        inject: true,
        favicon: './public/favicon.ico',
      }),
      // new CompressionPlugin({
      //   deleteOriginalAssets: true,
      // }),
      new CleanWebpackPlugin(),
    ].filter(Boolean),
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserWebpackPlugin({
          extractComments: false,
          terserOptions: {
            compress: {
              comparisons: false,
            },
            mangle: {
              safari10: true,
            },
            output: {
              comments: false,
              ascii_only: true,
            },
            warnings: false,
          },
        }),
        new OptimizeCssAssetsPlugin(),
      ],
    },
  };
};
