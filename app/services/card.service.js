angular.module('skarpline-test.services')
    .factory('CardService', function ($q, $uibModal) {

        var CardService = {};

        CardService.editingCard = null;

        CardService.getCards = function () {
            return $q.when([
                {
                    title: 'E-books',
                    ownerPicture: 'http://pipsum.com/40x40.jpg'
                },
                {
                    title: 'Landing GIFs',
                    ownerPicture: 'http://pipsum.com/40x40.jpg'
                },
                {
                    name: 'LANDING PAGE',
                    ownerPicture: 'http://pipsum.com/40x40.jpg'
                },
                {
                    name: 'New Social Image',
                    ownerPicture: 'http://pipsum.com/40x40.jpg'
                },
                {
                    name: 'Social Images',
                    ownerPicture: 'http://pipsum.com/40x40.jpg'
                },
                {
                    name: 'Note name',
                    ownerPicture: 'http://pipsum.com/40x40.jpg',
                    note: true,
                    cardModifier: 'card-type-1',
                    htmlContent: ''
                },
                {
                    name: 'Note name',
                    ownerPicture: 'http://pipsum.com/40x40.jpg',
                    note: true,
                    cardModifier: 'card-type-2',
                    htmlContent: ''
                },
                {
                    name: 'Note name',
                    ownerPicture: 'http://pipsum.com/40x40.jpg',
                    note: true,
                    cardModifier: 'card-type-3',
                    htmlContent: ''
                }
            ]);
        };

        CardService.openCardEditor = function () {
            $uibModal.open({
                templateUrl: 'app/components/texteditor/texteditor-modal.html',
                controller: ['$scope', 'CardService', function ($scope, CardService) {
                    $scope.card = CardService.editingCard;

                    $scope.close = function () {
                        $scope.card.lastUpdated = new Date();
                        CardService.editingCard = $scope.card;
                        $scope.$close();
                    };

                }]
            }).result
                .then(function (result) {})
                .catch(function (reason) {})
                .finally(function () {});
        };

        return CardService;
    });