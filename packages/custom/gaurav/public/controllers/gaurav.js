(function() {
    'use strict';

    /* jshint -W098 */

    function GauravController($scope, GauravService) {

        $scope.title = 'Guarav Page';
    }

    angular
        .module('mean.gaurav')
        .controller('GauravController', GauravController);

    GauravController.$inject = ['$scope', 'GauravService'];

})();
