"use strict";

// This models is responsible for modeling the data the returned from the API

// MODEL THE DATA
class ArticModel {
  constructor(data) {
    this.name = data.title;
    this.thumbnail = data.thumbnail.lqip;
    this.artist_name = data.artist_name;
    this.description = data.credit_line;
  }
}

module.exports = ArticModel;
