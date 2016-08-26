'use strict';

import './assets/css/yuvraj.css';

require('angular-chart.js');

angular.module('mean.yuvraj')
  .config(function(dashboardProvider){
    dashboardProvider
      .widget('yuvraj', {
        title: 'Yuvraj Widget',
        description: 'Yuvraj widget',
        templateUrl: 'yuvraj/views/dashboardView.html'
        // edit: {
        //   templateUrl: '{widgetsPath}/demo/src/edit.html'
        // }
      });
  });

