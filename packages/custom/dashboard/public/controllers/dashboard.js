(function () {
  'use strict';

  /* jshint -W098 */

  function DashboardController($scope) {

    $scope.model = {
      title: "Acceptance Test Results",
      structure: "6-6",
      rows: [{
        columns: [{
          styleClass: "col-md-6",
          widgets: [
            {
              type: "gaurav",
              modalSize: 'lg',
              // fullScreen: true,
              config: {},
              title: "At a Glance"
            }, {
            type: "satya",
            modalSize: 'lg',
            // fullScreen: true,
            config: {},
            title: "Test Results By Components"
          }
          ]
        },
          {
            styleClass: "col-md-6",
            widgets: [{
              type: "srinivas",
              modalSize: 'lg',
              // fullScreen: true,
              config: {},
              title: "By Components"
            },
            {
              type: "duc",
              // fullScreen: true,
              modalSize: 'lg',
              config: {},
              title: "Bugs Count Summary"
            }
              ]
          },
          {
            styleClass: "col-md-12",
            widgets: [{
              type: "yuvraj",
              // fullScreen: true,
              modalSize: 'lg',
              config: {},
              title: "Failed Test Cases"
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
