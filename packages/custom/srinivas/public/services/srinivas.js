(function() {
    'use strict';

    function SrinivasService($http) {
        return {
            getExamples: function() {

                return $http.get('/api/srinivas/example');

            }
        };
    }

    angular
        .module('mean.srinivas')
        .factory('SrinivasService', SrinivasService);

  SrinivasService.$inject = ['$http'];

})();
