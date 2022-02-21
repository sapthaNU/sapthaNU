const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  optimization: {
    flagIncludedChunks: true,
    sideEffects: true,
    concatenateModules: false,
    providedExports: false,
    usedExports: false,
    runtimeChunk: {
      name: "manifest",
    },
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      // minSize: 0,
      minSize: 100000,
      maxAsyncRequests: 20,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
