'use strict';


let parser = require('xml2json');
let fs = require('fs');


/**
 * read xml file and return json object represenation
 * @param fileName
 */
function readFile(fileName) {

  let xmlContent = fs.readFileSync(fileName, 'utf8');

  let options = {
    object: true,
    reversible: false,
    coerce: false,
    sanitize: true,
    trim: true,
    arrayNotation: false
  };


  let jsonContent = parser.toJson(xmlContent, options);
  return jsonContent;
}

function getSimpleTests(suiteTests) {
  return suiteTests.map(function(test) {
    return {
      name: test.name,
      // durationMilli: test['duration-ms'],
      // startedAt: test['started-at'],
      // finishedAt: test['finished-at'],
      status: test.class['test-method'].status || 'UNKNOWN'
    };
  });
}

function getSimpleSuite(suite) {
  return {
    name: suite.name,
    // durationMilli: suite['duration-ms'],
    // startedAt: suite['started-at'],
    // finishedAt: suite['finished-at'],
    tests: getSimpleTests(suite.test)
  }
}

function simplifyTestResult(testResultJson) {
  let simpleResult = {
    skipped: testResultJson['testng-results'].skipped,
    failed: testResultJson['testng-results'].failed,
    total: testResultJson['testng-results'].total,
    passed: testResultJson['testng-results'].passed,
    suite: getSimpleSuite(testResultJson['testng-results'].suite)
  };

  return simpleResult;
}

/*
  FIXME: the code below get execute for every cluster worker.  We only want to run once
 */
let saveToMongoPromises = [];
let testResultController = require('./server/controllers/testResult.server.controller');
let fileNames = fs.readdirSync(__dirname + '/testResults');
let Q = require('q');
fileNames.forEach(function(fileName) {
  let jsonTestResult = readFile(__dirname + '/testResults/' + fileName);
  let simpleTestResult = simplifyTestResult(jsonTestResult);
  saveToMongoPromises.push(testResultController.create(simpleTestResult));
});

//clear out database testResults before every run
testResultController.clearAll()
  .then(() => {
//now repopulate database with testResults
    Q.all(saveToMongoPromises)
      .then(() => console.log('testResults save to MongoDB Successfull!'))
      .fail((err) => console.log('testResults save to MongoDB Failed!', JSON.stringify(err, null, 2)));
  })
  .catch((err) => console.log('Failed to clear all testResults', JSON.stringify(err, null, 2)));


