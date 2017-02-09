angular.module('skarpline-test.services')
    .factory('UserService', function ($http, $q) {

        var UserService = {};

        UserService.getUsers = function () {
            return $q.when([
                {profilePicture: 'http://pipsum.com/80x80.jpg', name: 'Dan Storbaek',favorited: true, status: 'online'},
                {profilePicture: 'http://pipsum.com/80x80.jpg', name: 'Utsav Sharma', status: 'online'},
                {profilePicture: 'http://pipsum.com/80x80.jpg', name: 'Berkay Sargin',  lastSeen: 'an hour ago'},
                {profilePicture: 'http://pipsum.com/80x80.jpg', name: 'Taras Puzynyak', lastSeen: 'a day ago'}
            ])
        };

        UserService.getCurrentUser = function(){
            var user = {
                name: 'Diego Romero',
                profilePicture: 'http://pipsum.com/80x80.jpg'
            };
            return $q.when(user)
        };

        return UserService;
    });