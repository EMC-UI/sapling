(function() {
    'use strict';

    function Dashboard($http, $q) {
        return {
            name: 'dashboard',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/dashboard/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.dashboard')
        .factory('Dashboard', Dashboard);

    Dashboard.$inject = ['$http', '$q'];

})();
