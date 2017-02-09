angular.module('skarpline-test.services')
    .factory('ContactService', function ($http, $q) {

        var ContactService = {};

        ContactService.getContacts = function () {
            return $q.when([
                {profilePicture: 'http://pipsum.com/80x80.jpg', name: 'Skarpline Social'},
                {profilePicture: 'http://pipsum.com/80x80.jpg', name: 'Calvin Hobess'}
            ])
        };

        return ContactService;
    });