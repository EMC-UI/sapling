(function() {
  'use strict';


  /* jshint -W098 */

  function SrinivasDashboardController($scope, SrinivasService, $state) {

    $scope.title = 'Srinivas Dashboard Widget - TBD';
    $scope.labels = ['Configuration', 'Integration', 'SysMgr CRUD', 'AAA CRUD', 'ConfigMgr CRUD', 'Services'];
    //$scope.series = ['Series A', 'Series B'];

    $scope.data = [65, 59, 80, 81, 56, 55, 40];
    $scope.options = {
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          }
        }]
      }
    };





    $scope.dashboardClick = function() {
      $state.go('srinivas');
    };

  } //end of controller

  angular
    .module('mean.srinivas')
    .controller('SrinivasDashboardController', SrinivasDashboardController);

  SrinivasDashboardController.$inject = ['$scope', 'SrinivasService', '$state'];

})();





