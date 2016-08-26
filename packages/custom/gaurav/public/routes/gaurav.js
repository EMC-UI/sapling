(function() {
    'use strict';

    function Gaurav($stateProvider) {
        $stateProvider.state('gaurav', {
            url: '/gaurav',
            controller: 'GauravController',
            templateUrl: 'gaurav/views/index.html'
        });
    }

    angular
        .module('mean.gaurav')
        .config(Gaurav);

    Gaurav.$inject = ['$stateProvider'];

})();
