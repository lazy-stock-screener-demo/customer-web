require("@babel/register");
let webpackConfig;
if (process.env.NODE_ENV === "production") {
  webpackConfig = "./webpack.client.prod";
} else {
  webpackConfig = "./webpack.client.dev";
}
module.exports = require(webpackConfig);
