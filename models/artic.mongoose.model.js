"use strict";

const mongoose = require("mongoose");

// Create a schema for our model

const artPieceSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true,
    lowerCase: true,
    trim: true, // remove the white space
  },
  slug: {
    type: String,
    unique: true,
    lowerCase: true,
    trim: true,
  },
  thumdnail: String,
  artist_name: String,
  description: String,
});
// model our shcema
// the schema is only descrbiing how the data should look like
const artPieceModel = mongoose.model("art_piece", artPieceSchema);

// "art_piece" => name of the collection in our mongo db
// the collection is the place where we will store our data
// we are using model as refrence to that collection

// export the model to be used

module.exports = artPieceModel;
