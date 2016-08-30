(function() {
    'use strict';

    /* jshint -W098 */

    function SatyaController($scope, SatyaService) {

        $scope.title2 = 'Satya Page';
      // $scope.xx = 'hello';

    }

    angular
        .module('mean.satya')
        .controller('SatyaController', SatyaController);

    SatyaController.$inject = ['$scope', 'SatyaService'];

})();
