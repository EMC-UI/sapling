'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Yuvraj = new Module('yuvraj');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Yuvraj.register(function(app) {

  //We enable routing. By default the Package Object is passed to the routes
  Yuvraj.routes(app);
  Yuvraj.angularDependencies(['adf', 'adf.structures.base', 'adf.provider', 'chart.js', 'smart-table']);

  //We are adding a link to the main menu for all authenticated users
  Yuvraj.menus.add({
    title: 'Failed Tests',
    link: 'yuvraj',
    roles: ['authenticated'],
    menu: 'main'
  });

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Yuvraj.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Yuvraj.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Yuvraj.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Yuvraj;
});
