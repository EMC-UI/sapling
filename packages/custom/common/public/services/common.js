(function() {
    'use strict';

    function CommonService($http) {
        return {
          getTestResults: function () {
            return $http.get('/api/testResults');
          }
        };
    }

    angular
        .module('mean.common')
        .factory('CommonService', CommonService);

  CommonService.$inject = ['$http'];

})();
