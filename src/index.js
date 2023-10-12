const http = require("http");
const fs = require("fs");
const express = require("express");
const bodyparser = require("body-parser");
const { connectDB } = require("./db/dbconnection");
const config = require("./config/config");

const app = express();

connectDB();

app.use(bodyparser.urlencoded({ extended: true }));

app.use(bodyparser.json());

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log(`server start successfully! ${config.port}`);
});