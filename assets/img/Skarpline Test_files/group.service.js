angular.module('skarpline-test.services')
    .factory('GroupService', function ($http, $q) {

        var GroupService = {};

        GroupService.getGroups = function () {
            return $q.when([
                {profilePicture: 'http://pipsum.com/80x80.jpg', name: 'Skarpline', lastSeen: 'an hour ago'},
                {profilePicture: 'http://pipsum.com/80x80.jpg', name: 'LinkShareTest', lastSeen: '9 months ago'},
                {profilePicture: 'http://pipsum.com/80x80.jpg', name: 'prodDeploy', lastSeen: '2 months ago'},
                {profilePicture: 'http://pipsum.com/80x80.jpg', name: 'SocialChannels', lastSeen: '3 months ago'}
            ])
        };

        return GroupService;
    });