const http = require("http");
const fs = require("fs");
const express = require("express");
const bodyparser = require("body-parser");
const { connectDB } = require("./db/dbconnection");
const config = require("./config/config");
const routes=require("./routes");

const app = express();

connectDB();

app.use("/v1",routes);

app.use(bodyparser.urlencoded({ extended: true }));

app.use(bodyparser.json());

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log(`server start successfully! ${config.port}`);
});