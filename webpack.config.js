const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:3000",
    //     pathRewrite: { "^/api": "" }
    //   }
    // }
    historyApiFallback: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'react'],
          },
        },
      },
      {
        test: /\.(webmanifest|mp3)$/i,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
    ],
  },
};
