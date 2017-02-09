angular.module('skarpline-test.components')
    .component('nav', {
    bindings: {
        user: '<'
    },
    templateUrl:'app/components/nav/nav.html',

    // The controller that handles our component logic
    controller: function () {

        this.$onInit = function () {
        }
    }
});