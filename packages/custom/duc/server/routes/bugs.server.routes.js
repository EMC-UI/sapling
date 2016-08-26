(function() {
  'use strict';

   let bugsController = require('../controllers/bugs.server.controller');

  /* jshint -W098 */
  // The Package is past automatically as first parameter
  module.exports = function(Duc, app) {

      function getBugs(req, res, next) {
        bugsController.list()
          .then(function(bugs) {
            res.jsonp(bugs);
          })
          .catch(function(err) {
            return res.status(400).send(JSON.stringify(err));
          });
      }

      function createBug(req, res, next) {
        bugsController.create(req.body)
          .then(function(bug) {
            res.jsonp(bug);
          })
          .catch(function(err) {
            return res.status(400).send(JSON.stringify(err));
          });
      }

    function getBugsSummary(req, res, next) {
      bugsController.getBugsSummary()
        .then(function(bugsSummary) {
          res.jsonp(bugsSummary);
        })
        .catch(function(err) {
          return res.status(400).send(JSON.stringify(err));
        });
    }

      // Bugs Routes
      app.route('/api/bugs')
        .get(getBugs)
        .post(createBug);

      app.route('/api/bugs/summary')
        .get(getBugsSummary);
  };
})();

