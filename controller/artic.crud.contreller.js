"use strict";

// the is the model for our mongoose
const artPiece = require("../models/artic.mongoose.model");

// POST controller for creating a new data item in our DB

const createFavourtieArtPiece = async (req, res) => {
  // when we are creating the data from the POST method , the post method send the data inside request body
  const { title, thumbnail, artist_name, description } = req.body;

  // res.send({
  //   "your title": title,
  //   "your artist name": artist_name,
  // });

  // now that we got our data we want to save it in the DB. we need mongoose to create a new model

  const slug = title.toLowerCase().split(" ").join("-");
  // 'Hello World' => 'hello world' => ['hello', 'world'] => 'hello-world'

  // before creating any new data, check it the data title already exist in the DB.
  artPiece.find({ slug: slug }, (error, data) => {
    if (data.length > 0) {
      res.send("data is already exist!");
    } else {
      // Creating new instance of the model
      const newArtPiece = new artPiece({
        //it will be containing object of the values
        title: title,
        slug: slug, // url friendly params, the different between it and title is that it doesn't contains spaces
        thumbnail: thumbnail,
        artist_name: artist_name,
        description: description,
      });

      // slug : [key identifier] to find our item when we search for them

      // Saving the instance data to our DB.
      newArtPiece.save();
      // Sending back the response to the user with the newly created Data
      res.send(newArtPiece);
    }
  });
};
//------------------------------------------------------------------

// GET controller for reading the stored data item in our DB
const getFavourtieArtPiece = async (req, res) => {
  //
  artPiece.find({}, (error, data) => {
    res.send(data);
  });
};

//------------------------------------------------------------------

// DELETE controller for deleting data item from our DB
const deleteFavourtieArtPiece = async (req, res) => {
  const slug = req.params.slug;

  // res.send(`your title is ${slug}`);

  artPiece.remove({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      // res.send(data);
      artPiece.find({}, (error, data) => {
        res.send(data);
      });
    }
  });
};

//------------------------------------------------------------------

// PUT controller for updating our data item in our DB
const updateFavourtieArtPiece = async (req, res) => {
  // destructure the data from the request body

  const slug = req.params.slug;

  const { description } = req.body;

  artPiece.find({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      data[0].description = description;
      // data[0].something = something;

      data[0].save();
      artPiece.find({}, (error, data) => {
        res.send(data);
      });
    }
  });
};

//   OTHER WAY THAN SLUG

// delete =>  data.description.splice(dataIdx, 1);
// update =>  data.description.splice(dataIdx, 1, { name: name, description: description, status: status  });
// app.delete('/book/:book_idx', deleteBook);
//app.put('/book/:book_idx', updateBook);

//------------------------------------------------------------------

module.exports = {
  createFavourtieArtPiece,
  getFavourtieArtPiece,
  deleteFavourtieArtPiece,
  updateFavourtieArtPiece,
};
