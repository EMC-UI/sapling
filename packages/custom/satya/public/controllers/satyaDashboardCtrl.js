(function() {
  'use strict';

  /* jshint -W098 */

  function SatyaDashboardController($scope, SatyaService, CommonService, $state) {

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
      $scope.datas=[];
      var data =[];
      var data1=[];
      var data2=[];
      // $scope.data[2] =[];
      $scope.options = {
        scales: {
          xAxes: [{
            stacked: true,
              gridLines: {
                display: false
              }

          }

          ],
          yAxes: [{
            stacked: true,
            gridLines: {
              display: false
            }
          }]
        }
      };
      $scope.colors=["#456F06", "#CD5C5C", "#F7D704"];
      testResults.forEach(function(testResult) {
        $scope.labels.push(testResult.suite.name);
        data.push(parseInt(testResult.passed));
        data1.push(parseInt(testResult.failed));
        data2.push(parseInt(testResult.skipped));
      });
      $scope.testResults = response.data;
      $scope.datas=[data,data1,data2];
    }

    function getTestResultsFailed(err) {
      console.log('***getTestResults() Failed!');
      console.log(JSON.stringify(err, null, 2));
    }

    CommonService.getTestResults()
      .then(getTestResultsSuccess, getTestResultsFailed);

    $scope.dashboardClick = function() {
      $state.go('satya');
    };

  } //end of controller

  angular
    .module('mean.satya')
    .controller('SatyaDashboardController', SatyaDashboardController);

  SatyaDashboardController.$inject = ['$scope', 'SatyaService', 'CommonService', '$state'];

})();
