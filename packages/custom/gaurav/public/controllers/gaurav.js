(function() {
    'use strict';

    /* jshint -W098 */

    function GauravController($scope, GauravService) {

     /* $scope.title = 'Acceptance Test Results - Configuration';
      var person1 = {name: "Duc",age: 25, sex: "male"};
      var person2 = {name: "Gaurav",age: 25, sex: "supermale"};
      $scope.persons=[person1,person2];
      */
      //$scope.demotitle = 'Hello World !';

      GauravService.getPersons().then(successFn, failFn);

      function successFn(response)
      {
        debugger;
        $scope.persons=response.data;
      }
      function failFn(err){
        debugger;
      }





    }


    angular
        .module('mean.gaurav')
        .controller('GauravController', GauravController);

    GauravController.$inject = ['$scope', 'GauravService'];

})();
