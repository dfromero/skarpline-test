angular.module('skarpline-test.components')
    .component('talkboard', {
        bindings: {
            users: '<',
            groups: '<',
            contacts: '<',
            user: '<'
        },
        templateUrl: 'app/components/talkboard/talkboard.html'
    });