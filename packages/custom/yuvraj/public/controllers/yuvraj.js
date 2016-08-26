(function() {
    'use strict';

    /* jshint -W098 */

    function YuvrajController($scope, YuvrajService) {

        $scope.title = 'Yuvraj Page';

    }

    angular
        .module('mean.yuvraj')
        .controller('YuvrajController', YuvrajController);

    YuvrajController.$inject = ['$scope', 'YuvrajService'];

})();
