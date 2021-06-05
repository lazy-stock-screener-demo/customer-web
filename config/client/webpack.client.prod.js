import { merge } from "webpack-merge";
import path from "path";
import webpack from "webpack";
// import UglifyJSPlugin from "uglifyjs-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import LoadablePlugin from "@loadable/webpack-plugin";
// import MiniCssExtractPlugin from "mini-css-extract-plugin";
// import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import commonConfig from "./webpack.client.common";
import paths from "../const.webpack";

const prodClientConfig = {
  mode: "production",
  entry: {
    index: [path.join(__dirname, "../../src/index.tsx")],
  },
  output: {
    path: paths.buildStaticDir,
    publicPath: "/",
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
  },
  plugins: [
    new LoadablePlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*"],
    }),
    new webpack.DefinePlugin({ __isBrowser__: "true" }),
  ],
  optimization: {
    // minimizer: [new OptimizeCSSAssetsPlugin({})],
    runtimeChunk: {
      name: "manifest",
    },
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      cacheGroups: {
        reactVendor: {
          name: "reactVendor",
          test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
          priority: 10,
        },
        axiosVendor: {
          name: "axiosVendor",
          test: /[\\/]node_modules[\\/](axios)[\\/]/,
          priority: 9,
        },
        common: {
          name: "common",
          minChunks: 2,
          priority: 2,
        },
        vendor: {
          test: /[\\/]node_modules[\\/](!react)(!react-dom)(!react-router-dom)[\\/]/,
          name: "vendor",
        },
      },
    },
  },
};

export default merge(commonConfig, prodClientConfig);
