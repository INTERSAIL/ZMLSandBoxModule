angular.module('ZMLSandBox')
.directive('sandboxList',function () {
    return{
        restrict: "E",
        templateUrl: "templates/sandbox-list.html",
        scope:{
            sandboxList: "=",
            selectedSandbox: "=",
            editable:"="
        },
        controller: "sandboxListController",
        controllerAs: "sandboxListCtrl"
    }
});