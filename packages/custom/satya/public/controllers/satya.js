(function() {
    'use strict';

    /* jshint -W098 */

    function SatyaController($scope, SatyaService) {

        $scope.title = 'Satya Page';

    }

    angular
        .module('mean.satya')
        .controller('SatyaController', SatyaController);

    SatyaController.$inject = ['$scope', 'SatyaService'];

})();
