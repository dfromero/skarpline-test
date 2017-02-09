var app = angular.module('skarpline-test', [
    'ui.router',
    'ui.bootstrap',
    'textAngular',
    'ngQuill',
    'skarpline-test.components',
    'skarpline-test.services',
    'skarpline-test.filters'
]);

angular.module('skarpline-test.components', []);
angular.module('skarpline-test.services', []);
angular.module('skarpline-test.filters', []);
angular.module('skarpline-test.controllers', []);


app.config(function ($urlRouterProvider, $stateProvider, ngQuillConfigProvider) {
    ngQuillConfigProvider.set({
        toolbar: [

            [{'font': []}],
            [{'header': [1, 2, 3, 4, 5, 6, false]}],

            ['bold', 'italic', 'underline', 'strike'],

            [{'color': []}, {'background': []}],

            [{'list': 'ordered'}, {'list': 'bullet'}],
            [{'align': []}],

            ['link']
        ]
    });

    $stateProvider.state('dashboard', {
        url: '/',
        views: {
            '': {
                template: '<div class="row"><ui-view name="nav"></ui-view><div class="col-md-9" ui-view="main"></div> <div class="col-md-3" ui-view="talkboard"></div></div>'
            },
            'main@dashboard': {
                component: 'main'
            },
            'talkboard@dashboard': {
                component: 'talkboard'
            },
            'nav@dashboard': {
                component: 'nav'
            }
        },
        resolve: {
            users: function (UserService) {
                return UserService.getUsers();
            },
            contacts: function (ContactService) {
                return ContactService.getContacts();
            },
            groups: function (GroupService) {
                return GroupService.getGroups();
            },
            user: function (UserService) {
                return UserService.getCurrentUser();
            },
            cards: function (CardService) {
                return CardService.getCards()
            }
        }
    });

    $urlRouterProvider.otherwise("/");

});