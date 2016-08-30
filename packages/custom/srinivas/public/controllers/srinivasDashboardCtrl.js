(function() {
  'use strict';

  /* jshint -W098 */

  function SrinivasDashboardController($scope, SrinivasService, $state, CommonService) {
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

    function calTotals (){
      $scope.totalTests=0;
      $scope.totalPassed=0;
      $scope.totalFailed=0;
      for(index=0;index<$scope.aggResults.length;++index){
        $scope.totalTests=$scope.totalTests+parseInt($scope.aggResults[index].total);
        $scope.totalPassed=$scope.totalPassed+parseInt($scope.aggResults[index].passed);
        $scope.totalFailed=$scope.totalFailed+parseInt($scope.aggResults[index].failed);
      }
      if($scope.totalFailed==0){
        return "PASSED";
      }
      debugger;
      return "FAILED";
    }
    $scope.dashboardClick = function() {
      $state.go('srinivas');
    };

  } //end of controller

  angular
    .module('mean.srinivas')
    .controller('SrinivasDashboardController', SrinivasDashboardController);

  SrinivasDashboardController.$inject = ['$scope', 'SrinivasService', '$state','CommonService'];

})();
