const express = require("express");
const fs = require("fs");
const http = require("http");
const bodyParser = require("body-parser");
const { connectDB } = require("./db/dbconnection");
const config=require("./config/config");

const app = express();

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log(`server is start port no ${config.port}`);
});