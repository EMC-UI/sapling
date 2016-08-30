(function() {
    'use strict';
  var testResults = require('../../../common/server/controllers/testResult.server.controller');
    /* jshint -W098 */
    // The Package is past automatically as first parameter
    module.exports = function(Srinivas, app) {

    function getTestResults(req,res){
      return testResults.list(req,res);
    }

        app.route('/api/srinivas/getJsonsFromDB')
          .get(getTestResults);

    };
})();
