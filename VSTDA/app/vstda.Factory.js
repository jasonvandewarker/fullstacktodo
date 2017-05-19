(function () {
   'use strict';

   angular
       .module('app')
       .factory('VSTDAFactory', VSTDAFactory);

   VSTDAFactory.$inject = ['$http', '$q']; //should this be $inject?

   function VSTDAFactory($http, $q) {
       var service = {
           postTodo: postTodo,
       };

       return service;

       ////////////////

       function postTodo(toDoObject) {
           var defer = $q.defer();
           $http({
               method: 'POST',
               url: 'http://localhost:49781/api/todoes',
               headers: {
                   'Content-Type': 'application/json; charset=utf-8'
               },
               data: toDoObject,
           }).then(function (response) {
               defer.resolve(response.data);
           }, function (error) {
               defer.reject(error);
           })
           return defer.promise;
       } //end of postToDo

   } //end of factory function

})();
