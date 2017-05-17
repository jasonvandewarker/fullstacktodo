(function() {
'use strict';

    angular
        .module('app')
        .factory('VSTDAFactory', VSTDAFactory);

    VSTDAFactory.inject = ['$http'];   //should this be $inject?

    function VSTDAFactory($http) {
        var service = {
            getTodo: getTodo,
        };
        
        return service;

        ////////////////

        function getTodo() { 
            $http.get('http://localhost:49781/api/todoes')
            .then(function(data) {
                vm.results = data; //data is probably not going to be the correct variable

            }) //end of then in the function


        }
    }
})();