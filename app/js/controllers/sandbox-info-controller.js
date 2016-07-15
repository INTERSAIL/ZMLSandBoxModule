angular.module('ZMLSandBox')
    .controller('sandboxInfoController', function($scope){

        $scope.$watch('$parent.selectedSandbox', function(){
            if($scope.$parent.selectedSandbox != null)
            {
                $scope.tmpSandbox.name = $scope.$parent.selectedSandbox.name;
                $scope.tmpSandbox.identifier = $scope.$parent.selectedSandbox.identifier;
                $scope.tmpSandbox.icon = $scope.$parent.selectedSandbox.icon;
                $scope.tmpSandbox.description = $scope.$parent.selectedSandbox.description;
            }
        });
        
    });
