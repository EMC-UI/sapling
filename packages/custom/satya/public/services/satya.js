(function() {
    'use strict';

    function SatyaService($http) {
        return {
            getExamples: function() {

                return $http.get('/api/satya/example');

            }
        };
    }

    angular
        .module('mean.satya')
        .factory('SatyaService', SatyaService);

  SatyaService.$inject = ['$http'];

})();
