(function() {
    'use strict';

  let testResultController = require('../controllers/testResult.server.controller');

  /* jshint -W098 */
    // The Package is past automatically as first parameter
    module.exports = function(Common, app) {

      function getTestResults(req, res, next) {
        testResultController.list()
          .then(function(testResults) {
            res.jsonp(testResults);
          })
          .catch(function(err) {
            return res.status(400).send(JSON.stringify(err));
          });
      }

      app.route('/api/testResults')
        .get(getTestResults)
    };
})();
