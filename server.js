"use strict";

// Include require packages for our server.

const express = require("express");
// const superagent = require("superagent");
const cors = require("cors");

// Require monogoose.
// We are going to include mongoose inside models file.
// Model is instance of mongoose.

require("dotenv").config();

// 2- Initialize the server packages.

const app = express();

// Define the port.
const PORT = process.env.PORT || 8081;
// Define our middleware (use) :

// - Enable cors.
app.use(cors());
// - Enable JSON data.
app.use(express.json());

// Use mongoose.

// Server endpoints

// Proof of life endpoint : "define our first route"
app.get("/", (req, res) => {
  res.send("Server is working!");
});

// test the server if its working
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
