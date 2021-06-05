import http from "http";
import app from "./http/app";

http
  .createServer(app)
  .listen(Number(process.env.PORT), process.env.HOST, 23, () => {
    console.log(`Web Service listening on port ${process.env.PORT}!`);
  });
