//import express module
const express = require("express");

//use express in app variable
const app = express();

//use dontenv
require("dotenv").config();

const router = require("./src/routes/router");
const routerDb = require("./src/routes/routerDb");

app.use(express.json());

app.use("/api/v1/", routerDb);

//define the server port
const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
