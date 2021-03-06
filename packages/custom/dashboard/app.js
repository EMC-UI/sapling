'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Dashboard = new Module('dashboard');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Dashboard.register(function(meanStarter, app) {

  //We enable routing. By default the Package Object is passed to the routes
  Dashboard.routes(app);

  //need to depend on 'mean.system' to require mean.system to load first and make $viewPathProvider available
  //to be injected in dashboard/public/routes to override the main view
  Dashboard.angularDependencies(['mean.system','adf', 'adf.structures.base', 'mean.common', 'mean.gaurav', 'mean.duc', 'mean.satya', 'mean.yuvraj']);

  //We are adding a link to the main menu for all authenticated users
  // Dashboard.menus.add({
  //   title: 'dashboard example page',
  //   link: 'dashboard example page',
  //   roles: ['authenticated'],
  //   menu: 'main'
  // });

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Dashboard.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Dashboard.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Dashboard.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Dashboard;
});
