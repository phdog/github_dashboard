const Webpack = require('webpack')
const path = require('path')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ReactRefreshTypeScript = require('react-refresh-typescript')
const HTMLWebpackPlugin = require('html-webpack-plugin')

require('dotenv').config({ path: './.env' })

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.tsx'
  },
  output: {
    publicPath: '/'
  },
  devServer: {
    static: 'auto',
    port: 3001,
    historyApiFallback: true,
    hot: true,
    client: {
      overlay: true
    }
  },
  optimization: {
    runtimeChunk: 'single'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              getCustomTransformers: () => ({
                before: [ReactRefreshTypeScript()].filter(Boolean)
              }),
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-modules-typescript-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|ico|env|svg)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      pages: path.resolve(__dirname, 'src/pages'),
      services: path.resolve(__dirname, 'src/services'),
      state: path.resolve(__dirname, 'src/state'),
      styles: path.resolve(__dirname, 'src/styles'),
      utils: path.resolve(__dirname, 'src/utils'),
    }
  },
  plugins: [
    new ReactRefreshPlugin(),
    new HTMLWebpackPlugin({
      template: './public/index.html'
    }),
    new Webpack.DefinePlugin({ 'process.env': JSON.stringify(process.env) })
  ]
}
