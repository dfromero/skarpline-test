angular.module('skarpline-test.components')
    .component('texteditor', {
        bindings: {},
        replace: true,
        templateUrl:'app/components/text-editor/text-editor.html',

        controller: function () {

            this.$onInit = function () {
            }
        }
    });