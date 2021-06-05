import path from "path";

const rootDir = path.join(__dirname, "../");

export const ENV = process.env.NODE_ENV || "development";
export const isDev = ENV === "development";
export default {
  rootDir,
  srcDir: path.join(rootDir, "src"),
  appHtml: path.join(rootDir, "src/assets/templates/index.html"),
  buildStaticDir: path.join(rootDir, "build-static"),
  buildServerDir: path.join(rootDir, "build-server"),
};
