'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Bug = mongoose.model('Bug');

/**
 * Create a Bug
 */
exports.create = function(bugData) {

  return new Promise(function(resolve, reject) {
    var bug = new Bug(bugData);

    bug.save(function(err) {
      if (err) {
        reject(err);
      } else {
        resolve(bug);
      }
    });
  });

};

/**
 * List of Bugs
 */
function getBugs() {
  return new Promise(function(resolve, reject) {
    Bug.find().sort('-created').exec(function(err, bugs) {
      if (err) {
        reject(err);
      } else {
        resolve(bugs);
      }
    });
  });
};

exports.list = getBugs;

exports.getBugsSummary = function () {
  return new Promise(function (resolve, reject) {
    getBugs()
      .then(function (bugs) {
        let summary = {
          grandTotal: bugs.length,
          p1: 0,
          p2: 0,
          p3: 0
        };
        bugs.forEach((bug) => {
          if (bug.priority == 1) {
            summary.p1++;
          } else if (bug.priority == 2) {
            summary.p2++;
          } else if (bug.priority == 3) {
            summary.p3++;
          }
        });

        resolve(summary);
      })
      .catch(function (err) {
        reject(err);
      });
  });
};
