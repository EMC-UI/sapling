'use strict';

import './assets/css/gaurav.css';
require('angular-chart.js');

angular.module('mean.gaurav')
  .config(function(dashboardProvider){
    dashboardProvider
      .widget('gaurav', {
        title: 'At a Glance ',
        description: 'Gaurav Widget',
        templateUrl: 'gaurav/views/dashboardView.html'
        // edit: {
        //   templateUrl: '{widgetsPath}/demo/src/edit.html'
        // }
      });
  });
