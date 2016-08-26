(function() {
    'use strict';

    function Common($stateProvider) {
        $stateProvider.state('common', {
            url: '/common',
            controller: 'CommonController',
            templateUrl: 'common/views/index.html'
        });
    }

    angular
        .module('mean.common')
        .config(Common);

    Common.$inject = ['$stateProvider'];

})();
