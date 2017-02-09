angular.module('skarpline-test.components')
    .component('main', {
    bindings: {
        message: '<'
    },
    replace: true,
    templateUrl:'app/components/main/main.html',

    // The controller that handles our component logic
    controller: function () {
        this.message = "Thomas component";

        console.log('?', this)
        this.$onInit = function () {
            console.log('??')
        }
    }
});