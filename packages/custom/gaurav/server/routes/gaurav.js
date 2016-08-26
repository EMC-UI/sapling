(function() {
    'use strict';

    /* jshint -W098 */
    // The Package is past automatically as first parameter
    module.exports = function(Gaurav, app) {


        app.get('/api/gaurav/example', function(req, res) {
            res.send('Successful ping to gaurav rest end point');
        });

    };
})();
