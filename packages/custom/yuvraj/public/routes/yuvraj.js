(function() {
    'use strict';

    function Yuvraj($stateProvider) {
        $stateProvider.state('yuvraj', {
            url: '/yuvraj',
            controller: 'YuvrajController',
            templateUrl: 'yuvraj/views/index.html'
        });
    }

    angular
        .module('mean.yuvraj')
        .config(Yuvraj);

    Yuvraj.$inject = ['$stateProvider'];

})();
