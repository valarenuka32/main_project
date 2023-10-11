const http = require("http");
const fs = require("fs");
const express = require("express");

const app = express();

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log(`server start successfully! ${config.port}`);
});