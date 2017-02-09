angular.module('skarpline-test.components')
    .component('toolbar', {
        bindings: {},
        transclude: true,
        replace: true,
        templateUrl: 'app/components/toolbar/toolbar.html',
        controller: function () {
            var $ctrl = this;

            $ctrl.$onInit = function () {
            }
        }
    });