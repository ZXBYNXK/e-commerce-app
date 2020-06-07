const config = require("config");
const express = require("express");
const server = express();
const PORT = config.get("PORT");
const connectDatabase = require("./config/db");

connectDatabase();

server.listen(PORT, () => {
    console.log(`Server is now listening...`)
})
