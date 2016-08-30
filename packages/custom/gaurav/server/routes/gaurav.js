(function() {
    'use strict';
var personController = require('../controllers/gaurav.server.controller');
    /* jshint -W098 */
    // The Package is past automatically as first parameter
    module.exports = function(Gaurav, app) {


        app.get('/api/gaurav/example', function(req, res) {
            res.send('Successful ping to gaurav rest end point');
        }
        );
      app.get('/api/gaurav/title', function(req, res) {
        console.log('############');
        res.send('Hello World from Node Server');
      });
      app.get('/api/gaurav/persons', function(req, res) {
        console.log('############');
        return getPersons(req, res);
      });

      function createPerson(req, res, next) {
        req.body = {name: "Duc",age: 25, sex: "male"};
        personController.create(req.body)
          .then(function(person) {
            res.json(person);
          })
          .catch(function(err) {
            return res.status(400).send(JSON.stringify(err));
          });
      }
      function getPersons(req, res, next){
        return personController.list()
          .then(function (persons) {
             res.json(persons);
          } )
          .catch(function(err) {
            return res.status(400).send(JSON.stringify(err));
          });
      }

    };
})();
