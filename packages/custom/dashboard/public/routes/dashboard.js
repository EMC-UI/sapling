(function() {
    'use strict';

    function Dashboard($stateProvider, $viewPathProvider) {
        $stateProvider.state('dashboard', {
            url: '/',
            controller: 'DashboardController',
            templateUrl: 'dashboard/views/index.html'
        });

      $viewPathProvider.override('meanStarter/views/system/index.html', 'dashboard/views/index.html');
    }

    angular
        .module('mean.dashboard')
        .config(Dashboard);

    Dashboard.$inject = ['$stateProvider', '$viewPathProvider'];

})();
