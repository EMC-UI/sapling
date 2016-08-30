(function () {
  'use strict';

  /* jshint -W098 */

  function YuvrajDashboardController($scope, YuvrajService, CommonService, $state) {

    $scope.rowCollection = [];

    function loadData() {
      $scope.rowCollection = [
        {testcaseName: '', componentName: ''}
      ];
    }

    loadData();

    $scope.dashboardClick = function() {
      $state.go('yuvraj');
    };

    function getTestResultsSuccess(response) {
      debugger;
      var allFailedTests = [];
      var allTestResults = response.data;
      $scope.rowCollection = [];
      allTestResults.forEach(function(testResult) {
        var suiteName = testResult.suite.name;
        var allTests = testResult.suite.tests;
        var failedTests = [];
        allTests.forEach(function(test) {
          if(test.status === 'FAIL') {
            failedTests.push(test);
          }
        });

        if (failedTests.length > 0){
          var tempResult = {testCases : failedTests, componentName : suiteName};
          allFailedTests.push(tempResult);
          failedTests = [];
        }

      });

      allFailedTests.forEach(function(failedTestResult) {
        var tests = failedTestResult.testCases;
        tests.forEach(function(test) {
          var row = {testcaseName: test.name, componentName: failedTestResult.componentName};
          $scope.rowCollection.push(row);
          });
      });
    }


    function getTestResultsFailed(err) {
      debugger;
      console.log('***getTestResults() Failed!');
      console.log(JSON.stringify(err, null, 2));
    }

    CommonService.getTestResults()
      .then(getTestResultsSuccess, getTestResultsFailed);


  } //end of controller


  angular
    .module('mean.yuvraj')
    .controller('YuvrajDashboardController', YuvrajDashboardController);

  YuvrajDashboardController.$inject = ['$scope', 'YuvrajService', 'CommonService', '$state'];

})();
