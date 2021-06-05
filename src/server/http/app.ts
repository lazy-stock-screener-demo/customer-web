require("dotenv").config();
import express from "express";
import { json } from "body-parser";
import cors from "cors";
import { staticFileRouter } from "./routes";

const app = express();
const origin = {
  origin: "*",
};

app.use(json());
app.use(cors(origin));

app.use(express.static("build-static"));
app.use(staticFileRouter);

export default app;
