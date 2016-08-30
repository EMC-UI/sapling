(function() {
    'use strict';

    /* jshint -W098 */

   function SrinivasController($scope, SrinivasService,CommonService) {

        $scope.title = 'Srinivas Page';
        $scope.jsons=[];
        CommonService.getTestResults().then(Onsuccess, Onfailure);

        function Onsuccess(res){
          $scope.jsons=res.data;
        }
        function Onfailure(err){
          console.log(err);
        }

    }

    angular
        .module('mean.srinivas')
        .controller('SrinivasController', SrinivasController);

    SrinivasController.$inject = ['$scope', 'SrinivasService','CommonService'];

})();
