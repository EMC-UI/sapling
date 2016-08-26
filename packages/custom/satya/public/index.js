'use strict';

import './assets/css/satya.css';
require('angular-chart.js');

angular.module('mean.satya')
  .config(function(dashboardProvider){
    dashboardProvider
      .widget('satya', {
        title: 'Satya Widget',
        description: 'Satya widget',
        templateUrl: 'satya/views/dashboardView.html'
        // edit: {
        //   templateUrl: '{widgetsPath}/demo/src/edit.html'
        // }
      });
  });
