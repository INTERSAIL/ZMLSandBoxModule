angular.module('ZMLSandBox')
    .directive('sandboxView', function(){
        return{
            restrict:"E",
            templateUrl:'templates/sandbox-view.html',
            controller: "sandboxViewController",
            controllerAs: "sandboxViewCtrl"

        }

    });
