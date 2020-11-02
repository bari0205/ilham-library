//import express module
const express = require("express");
require("express-group-routes");

//use express in app variable
const app = express();

//use dontenv
require("dotenv").config();

//use cors
const cors = require("cors");

const router = require("./src/routes/router");
const routerDb = require("./src/routes/routerDb");

app.use("/api/v1/", routerDb);

app.use(express.json());

app.use(cors());

//define the server port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
