const Path = require("path");
const glob = require("glob");
const apiFiles = glob.sync(Path.resolve(__dirname, "./") + "/**/[!_]*.js", {
  nodir: true,
});
let data = {};

apiFiles.forEach((filePath) => {
  const api = require(filePath);
  let [_, url] = filePath.split("mock/"); // e.g. comments.js
  url = url.slice(0, url.length - 3); // remove .js >> comments
  console.log(url.split("/")[1]);
  data[url.split("/")[1]] = api; // the only change
});

module.exports = () => {
  return data;
};
