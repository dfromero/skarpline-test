angular.module('skarpline-test.services')
    .factory('CardService', function ($q, $uibModal) {

        var CardService = {};

        CardService.editingCard = null;

        CardService.getCards = function () {
            return $q.when([
                {
                    name: 'Note name',
                    cardModifier: 'card-type-1',
                    htmlContent: ''
                },
                {
                    name: 'Note name',
                    cardModifier: 'card-type-2',
                    htmlContent: ''
                },
                {
                    name: 'Note name',
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