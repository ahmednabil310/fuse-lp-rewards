const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const config = require('config')

const isDev = process.env.NODE_ENV === 'development'
const sourceMap = isDev

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          !isDev ? {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './'
            }
          } : {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap
            }
          },
          {
            loader: 'resolve-url-loader',
            options: {
              sourceMap
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        exclude: /fonts/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]',
              publicPath: './images'
            }
          },
          isDev ? {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 7
              },
              pngquant: {
                speed: 4
              },
              mozjpeg: {
                progressive: true
              }
            }
          } : null
        ].filter(Boolean)
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader']
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@': path.resolve(path.resolve(__dirname, './'), 'src')
    }
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ProgressBarPlugin(),
    new webpack.DefinePlugin({ CONFIG: JSON.stringify(config) }),
    new FaviconsWebpackPlugin({
      logo: path.join(path.resolve(__dirname, './'), '/src/assets/images/favicon.png'),
      prefix: 'images/favicons/',
      favicons: {
        appName: 'Fuse LP Rewards',
        appDescription: 'Fuse LP Rewards',
        developerName: null,
        developerURL: null,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          windows: false,
          yandex: false
        }
      }
    }),
    new HtmlWebpackPlugin({
      appMountId: 'app',
      filename: 'index.html',
      template: path.join(__dirname, 'src', 'index.html')
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin()
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
}
