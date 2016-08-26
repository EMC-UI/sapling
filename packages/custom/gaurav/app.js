'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Gaurav = new Module('gaurav');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Gaurav.register(function(app) {

  //We enable routing. By default the Package Object is passed to the routes
  Gaurav.routes(app);

  Gaurav.angularDependencies(['adf', 'adf.structures.base', 'adf.provider', 'chart.js', 'smart-table']);

  //We are adding a link to the main menu for all authenticated users
  Gaurav.menus.add({
    title: 'Gaurav',
    link: 'gaurav',
    roles: ['authenticated'],
    menu: 'main'
  });

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Gaurav.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Gaurav.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Gaurav.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Gaurav;
});
