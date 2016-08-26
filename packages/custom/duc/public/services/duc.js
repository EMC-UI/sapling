(function () {
  'use strict';

  function DucService($http) {
    return {
      createBug: function (bug) {
        return $http.post('/api/bugs', bug);
      },
      getBugs: function () {
        return $http.get('/api/bugs');
      },
      getBugsSummary: function () {
        return $http.get('/api/bugs/summary');
      }
    };
  }

  angular
    .module('mean.duc')
    .factory('DucService', DucService);

  DucService.$inject = ['$http'];

})();
