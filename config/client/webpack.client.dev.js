import path from "path";
import { merge } from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";
import commonClientConfig from "./webpack.client.common";
import paths from "../const.webpack";

const devClientConfig = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    index: [
      "react-hot-loader/patch",
      path.join(__dirname, "../../src/index.tsx"),
    ],
  },
  output: {
    publicPath: "/",
    filename: "[name].[hash].js",
  },
  devServer: {
    port: process.env.PORT,
    historyApiFallback: true,
    host: "0.0.0.0",
    hot: true,
  },
  plugins: [
    // Remove this if using SSR, delegate template to renderer.tsx
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: paths.appHtml,
    }),
  ],
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
};

export default merge(commonClientConfig, devClientConfig);
