'use strict';

import './assets/css/srinivas.css';
require('angular-chart.js');

angular.module('mean.srinivas')
  .config(function(dashboardProvider){
    dashboardProvider
      .widget('srinivas', {
        title: 'Srinivas Widget',
        description: 'Srinivas widget',
        templateUrl: 'srinivas/views/dashboardView.html'
        // edit: {
        //   templateUrl: '{widgetsPath}/demo/src/edit.html'
        // }
      });
  });
