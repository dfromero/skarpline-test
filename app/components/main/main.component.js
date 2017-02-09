angular.module('skarpline-test.components')
    .component('main', {
        bindings: {
            cards: '<'
        },
        replace: true,
        templateUrl: 'app/components/main/main.html',

        controller: function ($state, CardService) {

            this.editCard = function (card) {
                CardService.editingCard = card;
                CardService.openCardEditor();
            }
        }
    });