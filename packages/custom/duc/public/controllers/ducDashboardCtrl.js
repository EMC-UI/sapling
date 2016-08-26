(function() {
  'use strict';

  /* jshint -W098 */

  function DucDashboardController($scope, DucService, CommonService, $state) {

    $scope.labels = ['P1', 'P2', 'P3'];

    $scope.totalBugs = 0;
    $scope.bugsSummary = [
      [0, 0, 0]
    ];

    $scope.dashboardClick = function() {
      $state.go('duc');
    };

    /* Example on how to get testResults

    function getTestResultsSuccess(result) {
       console.log(JSON.stringify(result, null, 2));
    }

    function getTestResultsFailed(err) {
      console.log('***getTestResults() Failed!');
      console.log(JSON.stringify(err, null, 2));
    }

    CommonService.getTestResults()
      .then(getTestResultsSuccess, getTestResultsFailed);

    */

    function getBugsSummarySuccess(result) {
      $scope.totalBugs = result.data.grandTotal;
      $scope.bugsSummary = [[result.data.p1, result.data.p2, result.data.p3]];
    }

    function getBugsSummaryFailed(err) {
      window.alert('getBugsSummaryFailed() Failed!');
      console.log(JSON.stringify(err, null, 2));
    }

    DucService.getBugsSummary()
      .then(getBugsSummarySuccess, getBugsSummaryFailed);

  } //end of controller

  angular
    .module('mean.duc')
    .controller('DucDashboardController', DucDashboardController);

  DucDashboardController.$inject = ['$scope', 'DucService', 'CommonService', '$state'];

})();
