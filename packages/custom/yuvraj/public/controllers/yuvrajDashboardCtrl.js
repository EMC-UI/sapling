(function () {
  'use strict';

  /* jshint -W098 */

  function YuvrajDashboardController($scope, YuvrajService, $state) {

    $scope.rowCollection = [];

    function loadData() {
      $scope.rowCollection = [
        {componentName: 'AAA', totalTestCount: 85, testFailedCount: 5},
        {componentName: 'ConfigMgr', totalTestCount: 40, testFailedCount: 2},
        {componentName: 'SysMgr', totalTestCount: 65, testFailedCount: 7}
      ];
    }

    loadData();

    $scope.dashboardClick = function() {
      $state.go('yuvraj');
    };

  } //end of controller


  angular
    .module('mean.yuvraj')
    .controller('YuvrajDashboardController', YuvrajDashboardController);

  YuvrajDashboardController.$inject = ['$scope', 'YuvrajService', '$state'];

})();
