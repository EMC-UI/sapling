(function () {
  'use strict';

  /* jshint -W098 */

  function DucController($scope, DucService) {

    var BugService = DucService;
    $scope.package = {
      name: 'duc'
    };

    $scope.newBug = {};
    $scope.bugs = [];

    function getBugsSuccess(response) {
      $scope.newBug = {};
      $scope.bugs = response.data;
    }

    function getBugsFailed(err) {
      window.alert("Failed to get Bugs");
      console.log(JSON.stringify(err));
    }


    function createBugSuccess() {
      loadBugs();
    }

    function createBugFailed(err) {
      window.alert("Failed to create Bug");
      console.log(JSON.stringify(err));
    }


    $scope.createBug = function () {
      BugService.createBug($scope.newBug)
        .then(createBugSuccess, createBugFailed);

    };


    function loadBugs() {
      BugService.getBugs()
        .then(getBugsSuccess, getBugsFailed);
    }

    function initialize() {
      loadBugs();
    }

    initialize();


  }

  angular
    .module('mean.duc')
    .controller('DucController', DucController);

  DucController.$inject = ['$scope', 'DucService'];

})();
