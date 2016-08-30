(function() {
  'use strict';

  /* jshint -W098 */

  function GauravDashboardController($scope, GauravService, CommonService, $state) {

    $scope.totalTestCount;
    $scope.testResults = [];

    $scope.dashboardClick = function() {
      $state.go('gaurav');
    };
    $scope.labels = [];
    $scope.series = ['Passed', 'Failed', 'Skipped'];
    $scope.data = [
      [], //passed data points for each testResult
      [], //failed data points for each testResult
      []  //skipped data points for each testResult
    ];

    function getTestResultsSuccess(response) {
      // console.log(JSON.stringify(result, null, 2));
      var testResults = response.data;
      $scope.labels = [];
      $scope.data[0] =[];
      $scope.data[1] =[];
      $scope.data[2] =[];
      testResults.forEach(function(testResult) {
        $scope.labels.push(testResult.suite.name);
        $scope.data[0].push(parseInt(testResult.passed));
        $scope.data[1].push(parseInt(testResult.failed));
        $scope.data[2].push(parseInt(testResult.skipped));
      });
      $scope.testResults = response.data;
    }

    function getTestResultsFailed(err) {
      console.log('***getTestResults() Failed!');
      console.log(JSON.stringify(err, null, 2));
    }

    CommonService.getTestResults()
      .then(getTestResultsSuccess, getTestResultsFailed);


  } //end of controller

  angular
    .module('mean.gaurav')
    .controller('GauravDashboardController', GauravDashboardController);

  GauravDashboardController.$inject = ['$scope', 'GauravService', 'CommonService', '$state'];

})();
