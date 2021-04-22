const webpack = require('webpack');
const path = require('path');
const src = path.resolve(__dirname, './client/src');
const outputPath = path.resolve(__dirname, './dist');
const TerserPlugin = require('terser-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, argv) => {
  const IS_DEVELOPMENT = argv.mode === 'development';

  return {
    devtool: IS_DEVELOPMENT ? 'source-map' : 'none',
    plugins: [
      new VueLoaderPlugin(),
      new StyleLintPlugin({
        files: ['**/*.{vue,css,scss}'],
      }),
      new webpack.DefinePlugin({
        "__VUE_OPTIONS_API__": false,
        "__VUE_PROD_DEVTOOLS__": false,
      }),
      // new BundleAnalyzerPlugin()
    ],
    resolve: {
      extensions: ['.vue', '.js', '.ts', '.css'],
      alias: {
        '@Components': path.resolve(__dirname, './client/src/components'),
      },
    },
    entry: {
      app: [
        `${src}/ts/index.ts`
      ]
    },
    output: {
      filename: '[name].js',
      path: outputPath,
    },
    devServer: {
      open: true,
      contentBase: outputPath,
      watchContentBase: true,
      inline: true,
      port: 8000,
      hot: true,
      watchOptions: {
        ignored: /node_modules/
      },
    },
    externals: {
      'firebase': 'firebase',
      'firebase/auth': '',
    },
    optimization: {
      minimizer: IS_DEVELOPMENT
        ? []
        : [
            new TerserPlugin({
              terserOptions: {
                compress: { drop_console: true }
              }
            })
          ]
    },
    module: {
      rules: [
        {
          test: /\.(vue|js|ts)$/,
          enforce: 'pre',
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        },
        {
          test: /\.vue$/,
          exclude: /node-modules/,
          loader: 'vue-loader',
        },
        {
          test: /\.js$/,
          exclude: /node-modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.(css$|scss)$/,
          exclude: /node-modules/,
          oneOf: [
            {
              resourceQuery: /module/,
              use: [
                'vue-style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    modules: {
                      localIdentName: '[local]--[hash:base64:5]',
                    }
                  },
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    plugins: [
                      require('autoprefixer'),
                    ]
                  },
                },
                'sass-loader',
              ]
            },
            {
              use: [
                'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 2,
                  },
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    plugins: [
                      require('autoprefixer'),
                    ]
                  },
                },
                'sass-loader',
              ]
            }
          ]
        }
      ]
    }
  }
};