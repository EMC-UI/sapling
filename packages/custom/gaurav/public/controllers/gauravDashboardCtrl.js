(function() {
  'use strict';

  /* jshint -W098 */

  function GauravDashboardController($scope, GauravService, $state, CommonService) {

    $scope.acceptanceStatus="";
    $scope.title = 'Aggregated eCDM Test Results ';
    $scope.aggResults=[];
    $scope.totalTests=0;
    $scope.totalPassed=0;
    $scope.totalFailed=0;

    CommonService.getTestResults().then(Onsuccess, Onfailure);

    function Onsuccess(res){
      $scope.aggResults=res.data;
      $scope.acceptanceStatus=calTotals();
    }
    function Onfailure(err){
      console.log(err);
    }
    var index=0;

    function calTotals () {
      $scope.totalTests = 0;
      $scope.totalPassed = 0;
      $scope.totalFailed = 0;
      for (index = 0; index < $scope.aggResults.length; ++index) {
        $scope.totalTests = $scope.totalTests + parseInt($scope.aggResults[index].total);
        $scope.totalPassed = $scope.totalPassed + parseInt($scope.aggResults[index].passed);
        $scope.totalFailed = $scope.totalFailed + parseInt($scope.aggResults[index].failed);
        $scope.totalSkipped = $scope.totalSkipped + parseInt($scope.aggResults[index].skipped);
      }
      if ($scope.totalFailed == 0) {
        return "PASSED";
      }
      $scope.labels = ["Passed", "Failed", "Skipped"];
      // $scope.data = [7, 2, 1];
      $scope.data = [$scope.totalPassed, $scope.totalFailed, $scope.totalSkipped];

      $scope.colors = ["green", "red", "yellow"]


      // $scope.title = 'Gaurav Dashboard Widget - TBD';

      $scope.dashboardClick = function () {
        $state.go('gaurav');
      };


    }

  } //end of controller

  angular
    .module('mean.gaurav')
    .controller('GauravDashboardController', GauravDashboardController);

  GauravDashboardController.$inject = ['$scope', 'GauravService', '$state', 'CommonService'];

})();
