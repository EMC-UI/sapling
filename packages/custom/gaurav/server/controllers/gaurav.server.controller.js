'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Person = mongoose.model('Person');

/**
 * Create a Bug
 */
exports.create = function(personData) {

  return new Promise(function(resolve, reject) {
    var person = new Person(personData);

    person.save(function(err) {
      if (err) {
        reject(err);
      } else {
        resolve(person);
      }
    });
  });

};

/**
 * List of Bugs
 */
function getPersons() {
  return new Promise(function(resolve, reject) {
    Person.find().exec(function(err, persons) {
      if (err) {
        reject(err);
      } else {
        resolve(persons);
      }
    });
  });
}



exports.list = getPersons;


