(function() {
  'use strict';

  /* jshint -W098 */

  function SatyaDashboardController($scope, SatyaService, $state) {

    $scope.labels = ['P1', 'P2', 'P3'];
    $scope.series = ['AAA', 'ConfigMgr', 'SysMgr'];

    $scope.data = [
      [65, 59, 80],
      [28, 48, 40],
      [86, 27, 90]
    ];

    $scope.dashboardClick = function() {
      $state.go('satya');
    };

  } //end of controller

  angular
    .module('mean.satya')
    .controller('SatyaDashboardController', SatyaDashboardController);

  SatyaDashboardController.$inject = ['$scope', 'SatyaService', '$state'];

})();
