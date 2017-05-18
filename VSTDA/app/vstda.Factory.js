(function () {
    'use strict';

    angular
        .module('app')
        .factory('VSTDAFactory', VSTDAFactory);

    VSTDAFactory.$inject = ['$http', '$q']; //should this be $inject?

    function VSTDAFactory($http, $q) {
        var service = {
            getTodo: getTodo,
        };

        return service;

        ////////////////

        function getTodo() {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: 'http://localhost:49781/api/todoes',
                data: vm.toDoArray,
            }).then(function (response) {
                defer.resolve(response.data);
            }, function (error) {
                defer.reject(error);
            })

            return defer.promise;
        }

        function postTodo(toDoArray) {
            var defer = $q.defer();
            $http({
                method: 'POST',
                url: 'http://localhost:49781/api/todoes',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                data: toDoArray,
            }).then(function (response) {
                defer.resolve(response.data);
            }, function (error) {
                defer.reject(error);
            })
            return defer.promise;
        } //end of postToDo

    } //end of factory function

})();