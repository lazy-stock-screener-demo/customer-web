import path from "path";
import { DefinePlugin } from "webpack";
import { merge } from "webpack-merge";
// import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import commonConfig from "./webpack.server.common";
import nodeExternals from "webpack-node-externals";
import paths from "../const.webpack";

const prodServerConfig = {
  mode: "production",
  target: "node",
  externals: [nodeExternals(), "react", "react-dom"],
  output: {
    path: paths.buildServerDir,
    filename: "[name].js",
  },
  entry: {
    server: path.resolve(__dirname, "../../src/server/index.ts"),
  },
  plugins: [
    new DefinePlugin({ __isBrowser__: "false" }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*"],
    }),
  ],
};

export default merge(commonConfig, prodServerConfig);
