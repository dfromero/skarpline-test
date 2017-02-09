angular.module('skarpline-test.services')
    .factory('CardService', function ($q, $uibModal) {

        var CardService = {};

        CardService.editingCard = null;

        CardService.getCards = function () {
            return $q.when([
                {
                    title: 'E-books',
                    ownerPicture: 'http://pipsum.com/40x40.jpg',
                    itemCount: '31 items'
                },
                {
                    title: 'Landing GIFs',
                    ownerPicture: 'http://pipsum.com/40x40.jpg',
                    itemCount: '2 items'
                },
                {
                    title: 'LANDING PAGE',
                    ownerPicture: 'http://pipsum.com/40x40.jpg',
                    itemCount: '6 items'
                },
                {
                    title: 'New Social Image',
                    ownerPicture: 'http://pipsum.com/40x40.jpg',
                    itemCount: '19 items'
                },
                {
                    title: 'Social Images',
                    ownerPicture: 'http://pipsum.com/40x40.jpg',
                    itemCount: '1 item'
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