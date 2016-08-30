(function() {
    'use strict';

    function SrinivasService($http) {
        return {
            getExamples: function() {

                return $http.get('/api/srinivas/example');

            },
          getJsonsFromDB: function() {

            return $http.get('/api/srinivas/getJsonsFromDB');

          }
        };



    }

    angular
        .module('mean.srinivas')
        .factory('SrinivasService', SrinivasService);

  SrinivasService.$inject = ['$http'];

})();


