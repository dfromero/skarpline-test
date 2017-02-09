var app = angular.module('skarpline-test', [
    'ui.router',
    'ui.bootstrap',
    'textAngular',
    'ngQuill',
    'skarpline-test.components',
    'skarpline-test.services'
]);

angular.module('skarpline-test.components', []);
angular.module('skarpline-test.services', []);
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
                }
            }
        })
        .state("dashboard.editor", {
            url: "editor",
            onEnter: ['$stateParams', '$state', '$uibModal', function ($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/components/text-editor/text-editor-modal.html',
                    controller: ['$scope', function ($scope) {
                        $scope.dismiss = function () {
                            $scope.$dismiss();
                        };

                        $scope.save = function () {
                        };

                        $scope.editorCreated = function (editor) {
                            console.log('editor',editor);
                        }

                        $scope.contentChanged = function (editor, html, text) {
                            console.log(editor, html, text);
                        }
                    }]
                }).result.finally(function () {
                    $state.go('^');
                });
            }]
        });


    $urlRouterProvider.otherwise("/");

});