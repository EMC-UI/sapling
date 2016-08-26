(function() {
  'use strict';

  /* jshint -W098 */

  function GauravDashboardController($scope, GauravService, $state) {

    $scope.title = 'Gaurav Dashboard Widget - TBD';

    $scope.dashboardClick = function() {
      $state.go('gaurav');
    };

  } //end of controller

  angular
    .module('mean.gaurav')
    .controller('GauravDashboardController', GauravDashboardController);

  GauravDashboardController.$inject = ['$scope', 'GauravService', '$state'];

})();
