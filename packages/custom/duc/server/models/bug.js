'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Bug Schema
 */
var BugSchema = new Schema({
  name: {
    type: String
  },
  priority: {
    type: Number
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Bug', BugSchema);
