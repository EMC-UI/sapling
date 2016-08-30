(function () {
  'use strict';

  /* jshint -W098 */

  function DashboardController($scope) {

    $scope.model = {
      title: "QA Portal",
      structure: "6-6",
      rows: [{
        columns: [{
          styleClass: "col-md-6",
          widgets: [{
            type: "srinivas",
            modalSize: 'lg',
            // fullScreen: true,
            config: {},
            title: "Srinivas Widget"
          }, {
            type: "satya",
            modalSize: 'lg',
            // fullScreen: true,
            config: {},
            title: "Satya - Test Results"
          }
          ]
        },
          {
            styleClass: "col-md-6",
            widgets: [{
              type: "duc",
              // fullScreen: true,
              modalSize: 'lg',
              config: {},
              title: "Duc - Bugs Count Summary"
            }]
          },
          {
            styleClass: "col-md-12",
            widgets: [{
              type: "gaurav",
              // fullScreen: true,
              modalSize: 'lg',
              config: {},
              title: "Gaurav Widget"
            }]
          },
          {
            styleClass: "col-md-12",
            widgets: [{
              type: "yuvraj",
              // fullScreen: true,
              modalSize: 'lg',
              config: {},
              title: "Yuvraj Widget"
            }]
          }]
      }]
    };

  }

  angular
    .module('mean.dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope'];

})();
