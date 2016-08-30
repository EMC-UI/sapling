(function() {
    'use strict';

    function Srinivas($stateProvider) {
        $stateProvider.state('srinivas', {
            url: '/srinivas',
            controller: 'SrinivasController',
            templateUrl: 'srinivas/views/index.html'
        });
    }

    angular
        .module('mean.srinivas')
        .config(Srinivas);

    Srinivas.$inject = ['$stateProvider'];
})();
