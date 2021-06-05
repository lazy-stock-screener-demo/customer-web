// import MiniCssExtractPlugin from "mini-css-extract-plugin";
import "dotenv/config";
import { DefinePlugin } from "webpack";
import stringify from "stringify-object-values";
import { loadableTransformer } from "loadable-ts-transformer";
import paths from "../const.webpack";
import global from "../const.static.app";

const commonConfig = {
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            getCustomTransformers: () => ({ before: [loadableTransformer] }),
            configFile: "../../tsconfig-server.json",
          },
        },
        include: paths.srcDir,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new DefinePlugin(stringify(global.variables))],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
};

export default commonConfig;
