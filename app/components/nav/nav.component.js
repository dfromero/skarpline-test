angular.module('skarpline-test.components')
    .component('nav', {
    bindings: {
        user: '<'
    },
    templateUrl:'app/components/nav/nav.html'
});