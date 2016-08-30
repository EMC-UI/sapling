(function() {
    'use strict';

    function GauravService($http) {
        return {
            getExamples: function() {
                return $http.get('/api/gaurav/title');
            },
            getPersons: function(){
              return $http.get('api/gaurav/persons')
            }
        };
    }

    angular
        .module('mean.gaurav')
        .factory('GauravService', GauravService);

  GauravService.$inject = ['$http'];

})();
