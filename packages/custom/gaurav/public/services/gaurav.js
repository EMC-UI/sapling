(function() {
    'use strict';

    function GauravService($http) {
        return {
            getExamples: function() {
                return $http.get('/api/gaurav/example');
            }
        };
    }

    angular
        .module('mean.gaurav')
        .factory('GauravService', GauravService);

  GauravService.$inject = ['$http'];

})();
