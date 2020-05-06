const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const TerserPlugin = require("terser-webpack-plugin");

const workboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.jsx",

  resolve: {
    mainFields: ["browser", "main", "module"],
    extensions: [".jsx", ".js", ".mjs"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: "main.css" }),
    new workboxPlugin.GenerateSW({
      swDest: "sw.js",
      clientsClaim: true,
      skipWaiting: false,
    }),
  ],

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader",
      },
      {
        test: /.(less|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
              lessOptions: {
                modifyVars: {
                  "@text-color": "#fff",
                  "@heading-color": "#fff",
                  "@error-color": "#DE4B4B",
                  "@label-color": "#bfbfbf",
                  "@input-color": "#3c3c3c",
                  "@btn-height-lg": "3.071rem",
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },

  optimization: {
    minimizer: [new TerserPlugin()],

    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
        },
      },

      chunks: "async",
      minChunks: 1,
      minSize: 30000,
      name: true,
    },
  },
};
