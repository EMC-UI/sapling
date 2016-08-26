(function() {
    'use strict';

    /* jshint -W098 */
    // The Package is past automatically as first parameter
    module.exports = function(Satya, app) {

        app.get('/api/satya/example', function(req, res) {
          res.send('Successful ping to satya rest end point');
        });

    };
})();
