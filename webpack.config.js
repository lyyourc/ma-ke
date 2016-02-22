const path = require('path')

const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlwebpackPlugin = require('html-webpack-plugin')

const TARGET = process.env.npm_lifecycle_event
const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
}

// common config
const common = {
  entry: [
    'babel-polyfill',
    PATHS.src
  ],

  output: {
    path: PATHS.build,
    filename: 'build.js'
  },

  plugins: [
    new HtmlwebpackPlugin({
      template: 'index.html'
    })
  ],

  module: {
    loaders: [
      {
        loaders: ['style', 'css', 'sass'],
        test: /\.scss$/,
        include: PATHS.src
      },
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}

// for dev env
if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: '#inline-source-map',
    debug: true,

    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      host: 'localhost',
      port: '3000'
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],

    module: {
      preLoaders: [
        {
          test: /\.js$/,
          loaders: ['eslint'],
          include: PATHS.src
        }
      ]
    }
  })
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    devtool: 'eval'
  })
}

if (TARGET === 'test') {
  module.exports = common
}
