'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Common = new Module('common');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Common.register(function(app) {

  //We enable routing. By default the Package Object is passed to the routes
  Common.routes(app);

  //We are adding a link to the main menu for all authenticated users
  // Common.menus.add({
  //   title: 'common example page',
  //   link: 'common example page',
  //   roles: ['authenticated'],
  //   menu: 'main'
  // });



  return Common;
});

require('./starter');
