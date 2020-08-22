const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { findAllByDisplayValue } = require('@testing-library/react');

module.exports = {
  devServer: {
    // for faster reload
    compress: true,
    // history-based routing
    historyApiFallback: true,
    // opens the browser after launching
    open: true,
    // displays webpack errors
    overlay: true,
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  plugins: [
    // Creates dist/index.html using public/index.html as template
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      inject: true,
      favicon: 'src/logo.svg',
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      // .js / .jsx
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/react',
              {
                plugins: ['@babel/plugin-proposal-class-properties'],
              },
            ],
          },
        },
      },
      // .html
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
      // .css
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  // Minifies JS and CSS
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // Ensures modern browsers compatibility
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
      new OptimizeCSSAssetsPlugin(),
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
};
