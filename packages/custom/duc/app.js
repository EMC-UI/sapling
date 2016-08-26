'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Duc = new Module('duc');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Duc.register(function(app) {

  //We enable routing. By default the Package Object is passed to the routes
  Duc.routes(app);
  Duc.angularDependencies(['adf', 'adf.structures.base', 'adf.provider', 'chart.js', 'angularMoment', 'smart-table']);


  //We are adding a link to the main menu for all authenticated users
  Duc.menus.add({
    title: 'Duc',
    link: 'duc',
    roles: ['authenticated'],
    menu: 'main'
  });

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Duc.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Duc.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Duc.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Duc;
});
