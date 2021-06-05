import "dotenv/config";
import path from "path";
import { loadableTransformer } from "loadable-ts-transformer";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import webpack from "webpack";
import stringify from "stringify-object-values";
import global from "../const.static.app";
import paths, { isDev } from "../const.webpack";

const isAnalyze = typeof process.env.BUNDLE_ANALYZE !== "undefined";
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
            configFile: path.resolve(__dirname, "../../tsconfig-client.json"),
          },
        },
        include: paths.srcDir,
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png|gif|JPG)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "[name].[ext]",
            outputPath: "static/assets/images",
            publicPath: "static/assets/images",
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|ttc)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            name: `[name].[ext]`,
            outputPath: "static/assets/fonts",
            publicPath: "static/assets/fonts",
          },
        },
      },
      {
        test: /\.svg$/,
        use: {
          loader: "svg-url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/assets/svg",
            publicPath: "static/assets/svg",
          },
        },
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "pug-html-loader",
            options: {
              pretty: isDev,
            },
          },
        ],
      },
    ],
  },
  plugins: (() => {
    const plugins = [new webpack.DefinePlugin(stringify(global.variables))];
    if (isAnalyze) {
      plugins.push(new BundleAnalyzerPlugin());
    }
    return plugins;
  })(),
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      bigCalendarStyle: path.join(
        __dirname,
        "node_modules/react-big-calendar/lib/css/react-big-calendar.css"
      ),
      dayPickerStyle: path.join(
        __dirname,
        "node_modules/react-day-picker/lib/style.css"
      ),
    },
  },
};

export default commonConfig;
