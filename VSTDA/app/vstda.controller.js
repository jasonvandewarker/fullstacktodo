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

        vm.toDoArray = [];
        vm.postList = postList;
        // Takes the info put into the input and the priority set by the
        // select menu and pushes them both into an array.
        function postList() {
            vm.toDoArray.push({
                toDo: vm.toDoObject.toDoInput,
                priority: vm.toDoObject.priority
            });

            VSTDAFactory
                .postTodo(toDoArray)
                .then(function (response) {
                    console.log(response)
                });

        } //end of postList function





    } //end of controller function
})();