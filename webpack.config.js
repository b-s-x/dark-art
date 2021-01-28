const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const hotModuleScript = 'webpack-hot-middleware/client'//?path=/__webpack_hmr&timeout=20000&  '

module.exports = {
  mode: 'development',
  entry: [hotModuleScript, './src/scripts/main.js' ],

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'src', 'static/dist'),
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loader: {
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          },
          {
            use: ['raw-loader', 'pug-plain-loader']
          }
        ]
      },
      {
        test: /\.css$/,
        use:  [
          'vue-style-loader',
          'style-loader',
          {
            loader:  'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use:  [
          {
            loader: 'style-loader',
          },
          {
            loader:  'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template : './src/views/index.pug',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue', '.scss'],
  }
}
