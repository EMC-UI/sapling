'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Bug Schema
 */
var PersonSchema = new Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  sex: {
    type: String

  }
});

mongoose.model('Person', PersonSchema);
