(function() {
    'use strict';

    /* jshint -W098 */

    function SatyaController($scope, SatyaService, CommonService) {

        $scope.testResults = [];

      function getTestResultsSuccess(response) {
        // console.log(JSON.stringify(result, null, 2));
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
        .module('mean.satya')
        .controller('SatyaController', SatyaController);

    SatyaController.$inject = ['$scope', 'SatyaService', 'CommonService'];

})();
