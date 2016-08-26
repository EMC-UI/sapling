'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Test Schema
 */
var Test = new Schema({
  name: String,
  status: String
});


/**
 * Suite Schema
 */
var Suite = new Schema({
  name: String,
  tests: [Test]
});


/**
 * TestResult Schema
 */
var TestResultSchema = new Schema({
  skipped: String,
  failed: String,
  total: String,
  passed: String,
  suite: Suite
});

mongoose.model('TestResult', TestResultSchema);
