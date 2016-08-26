(function() {
    'use strict';

    function YuvrajService($http) {
        return {
            getExamples: function() {

                return $http.get('/api/yuvraj/example');

            }
        };
    }

    angular
        .module('mean.yuvraj')
        .factory('YuvrajService', YuvrajService);

  YuvrajService.$inject = ['$http'];

})();
