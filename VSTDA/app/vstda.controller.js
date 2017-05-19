(function () {
    'use strict';

    angular
        .module('app')
        .controller('VstdaController', VstdaController);

    VstdaController.$inject = ['VSTDAFactory'];

    /* @ngInject */
    function VstdaController(VSTDAFactory) {
        var vm = this;
        vm.title = 'VstdaController';
        var d = new Date();
        var CreateDate = d.toLocaleString('en-US');
        vm.toDoArray = [];
        vm.postList = postList;

        /////////////////////////////////


        vm.addTodo = function (todo) {
            todo.CreateDate = CreateDate;
            VSTDAFactory
                .postTodo(todo)
                .then(function (response) {
                    console.log(response);
                    postList(response);
                }, function (error) {
                    console.log(error);
                });
        } // end of vm.addTodo


        // Takes the info put into the input and the priority set by the
        // select menu and pushes them both into an array.
        
        function postList(todo) {
            vm.toDoArray.push({
                toDo: todo.todoText,
                priority: todo.setPriority
            });
        } //end of postList function
} //end of controller function
})();