(function() {
    'use strict';

    /* jshint -W098 */
    // The Package is past automatically as first parameter
    module.exports = function(Srinivas, app) {


        app.get('/api/srinivas/example', function(req, res) {
          res.send('Successful ping to srinivas rest end point');
        });


    };
})();
