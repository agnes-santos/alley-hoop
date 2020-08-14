const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
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
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
};
