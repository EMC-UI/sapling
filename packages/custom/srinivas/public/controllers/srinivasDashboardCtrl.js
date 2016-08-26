(function() {
  'use strict';

  /* jshint -W098 */

  function SrinivasDashboardController($scope, SrinivasService, $state) {

    $scope.title = 'Srinivas Dashboard Widget - TBD';

    $scope.dashboardClick = function() {
      $state.go('srinivas');
    };

  } //end of controller

  angular
    .module('mean.srinivas')
    .controller('SrinivasDashboardController', SrinivasDashboardController);

  SrinivasDashboardController.$inject = ['$scope', 'SrinivasService', '$state'];

})();
