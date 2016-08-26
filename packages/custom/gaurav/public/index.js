'use strict';

import './assets/css/gaurav.css';
require('angular-chart.js');

angular.module('mean.gaurav')
  .config(function(dashboardProvider){
    dashboardProvider
      .widget('gaurav', {
        title: 'Gaurav Widget',
        description: 'Gaurav widget',
        templateUrl: 'gaurav/views/dashboardView.html'
        // edit: {
        //   templateUrl: '{widgetsPath}/demo/src/edit.html'
        // }
      });
  });
