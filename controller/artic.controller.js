"use strict";

// This controller is only responsible for getting the data from the API.

// Link : https://api.artic.edu/api/v1/artworks

// Get info from API endpoint controller.
const superagent = require("superagent");
// we write it as variable function instead of normal function because it is easier to use the "async" with this type of function. and we are usong async because we are seprating our files.

// axios and superagent are promise based function
const getArtData = async (req, res) => {
  const url = "https://api.artic.edu/api/v1/artworks";
  superagent
    .get(url)
    .then((data) => {
      res.send(data.body.data[0].title);
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
