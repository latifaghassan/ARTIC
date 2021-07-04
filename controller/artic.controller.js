"use strict";

// This controller is only responsible for getting the data from the API.

// Link : https://api.artic.edu/api/v1/artworks

// Get info from API endpoint controller.
const superagent = require("superagent");
const ArticModel = require("../models/artic.model");
// we write it as variable function instead of normal function because it is easier to use the "async" with this type of function. and we are usong async because we are seprating our files.

// we are sending here a request to the API and getting the data.

// axios and superagent are promise based function
const getArtData = async (req, res) => {
  const url = "https://api.artic.edu/api/v1/artworks";
  superagent
    .get(url)
    .then((data) => {
      // res.send(data.body.data[0].title);
      // we will be using map the go through data and select specific data.
      // loop through data response and model the data accordingly

      const responseData = data.body.data.map((art) => {
        // model our data.
        return new ArticModel(art);
      });
      res.send(responseData);
    })
    .catch((error) => {
      console.log("===========");
      console.log("An Error Occurred!");
      console.log(error);
      console.log("===========");
    });
};

module.exports = {
  getArtData,
};

// when you face an error says that something.map is not a function, that means you are passing the wrong data. and map only accept array values.
