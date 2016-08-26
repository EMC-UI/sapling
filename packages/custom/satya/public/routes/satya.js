(function() {
    'use strict';

    function Satya($stateProvider) {
        $stateProvider.state('satya', {
            url: '/satya',
            controller: 'SatyaController',
            templateUrl: 'satya/views/index.html'
        });
    }

    angular
        .module('mean.satya')
        .config(Satya);

    Satya.$inject = ['$stateProvider'];

})();
