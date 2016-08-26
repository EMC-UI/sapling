'use strict';

import './assets/css/duc.css';
require('angular-chart.js');

angular.module('mean.duc')
  .config(function(dashboardProvider){
    dashboardProvider
      .widget('duc', {
        title: 'Duc Widget',
        description: 'Duc widget',
        templateUrl: 'duc/views/dashboardView.html'
        // edit: {
        //   templateUrl: '{widgetsPath}/demo/src/edit.html'
        // }
      });
  });
