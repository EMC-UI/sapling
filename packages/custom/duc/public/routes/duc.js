(function() {
    'use strict';

    function Duc($stateProvider) {
        $stateProvider.state('duc', {
            url: '/duc',
            controller: 'DucController',
            templateUrl: 'duc/views/index.html'
        });
    }

    angular
        .module('mean.duc')
        .config(Duc);

    Duc.$inject = ['$stateProvider'];

})();
