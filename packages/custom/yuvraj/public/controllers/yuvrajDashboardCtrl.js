(function () {
  'use strict';

  /* jshint -W098 */

  function YuvrajDashboardController($scope, YuvrajService, CommonService, $state) {

    $scope.rowCollection = [];

    function loadData() {
      $scope.rowCollection = [
        // {componentName: 'AAA', totalTestCount: 85, testFailedCount: 5},
        // {componentName: 'ConfigMgr', totalTestCount: 40, testFailedCount: 2},
        // {componentName: 'SysMgr', totalTestCount: 65, testFailedCount: 7}
      ];
    }

    loadData();

    $scope.dashboardClick = function() {
      $state.go('yuvraj');
    };

    function getTestResultsSuccess(response) {
      // console.log(JSON.stringify(result, null, 2));
      var testResults = response.data;
      $scope.rowCollection = [];
      testResults.forEach(function(testResult) {
        var tableRowData = {
          componentName: testResult.suite.name,
          totalTestCount: testResult.total,
          testPassedCount: testResult.passed,
          testFailedCount: testResult.failed
        };
        $scope.rowCollection.push(tableRowData);
      });
    }

    function getTestResultsFailed(err) {
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
