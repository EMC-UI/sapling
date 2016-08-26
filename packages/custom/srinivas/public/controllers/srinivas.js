(function() {
    'use strict';

    /* jshint -W098 */

    function SrinivasController($scope, SrinivasService) {

        $scope.title = 'Srinivas Page';

    }

    angular
        .module('mean.srinivas')
        .controller('SrinivasController', SrinivasController);

    SrinivasController.$inject = ['$scope', 'SrinivasService'];

})();
