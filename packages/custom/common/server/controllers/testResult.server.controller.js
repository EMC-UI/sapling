'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  TestResult = mongoose.model('TestResult');

/**
 * Create a testResult
 */
exports.create = function(testResultData) {

  return new Promise(function(resolve, reject) {
    var testResult = new TestResult(testResultData);
    testResult.suite.tests = testResultData.suite.tests;

    testResult.save(function(err) {
      if (err) {
        reject(err);
      } else {
        resolve(testResult);
      }
    });
  });

};

/**
 * List of testResults
 */
exports.list = function() {
  return new Promise(function(resolve, reject) {
    TestResult.find().sort('-name').exec(function(err, testResults) {
      if (err) {
        reject(err);
      } else {
        resolve(testResults);
      }
    });
  });
};

/**
 * remove all testResults
 */
exports.clearAll = function() {
  return new Promise(function(resolve, reject) {
    TestResult.remove(function(err, result){
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};


