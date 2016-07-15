angular.module('ZMLSandBox')
    .controller('sandboxViewController', function($scope, $http,ZMLSandboxHelper, Utils, cfpLoadingBar){

        $scope.selectedSandbox = null;
        $scope.tmpSandbox = { "id":0,
            "identifier":null,
            "name":null,
            "description":null,
            "icon":null};

        $scope.editable = false;
        $scope.isValidSandbox = false;

       ZMLSandboxHelper.list({
            successFunction:function(data){
                $scope.errors = null;
                $scope.sandboxList = data;
                $scope.selectedSandbox = $scope.sandboxList[0];
                $scope.tmpSandbox = Utils.cloneSandbox($scope.selectedSandbox);
            },
            errorFunction: function(data){
                $scope.sandboxList = null;
                $scope.selectedSandbox = null;
                $scope.tmpSandbox = Utils.cleanTmpSandbox();
                $scope.errors = data;
            }
        }, cfpLoadingBar);
        
        this.getSelectedSandbox = function(){
            return $scope.selectedSandbox;
        };
        
        this.setSelectedSandbox = function (sandbox) {
            $scope.selectedSandbox = sandbox;
            $scope.tmpSandbox = Utils.cloneSandbox(sandbox);
        };

    });
