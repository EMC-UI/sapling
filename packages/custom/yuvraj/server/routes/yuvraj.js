(function() {
    'use strict';

    /* jshint -W098 */
    // The Package is past automatically as first parameter
    module.exports = function(Yuvraj, app) {

        app.get('/api/yuvraj/example', function(req, res) {
          res.send('Successful ping to yuvraj rest end point');
        });
    };
})();
