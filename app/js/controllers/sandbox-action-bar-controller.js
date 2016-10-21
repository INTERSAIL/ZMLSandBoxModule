angular.module("ZMLSandBox")
    .controller('sandboxActionBarController', function($scope, ZMLSandboxHelper, Utils, cfpLoadingBar){

        $scope.refresh = function(){
                ZMLSandboxHelper.list({
                    successFunction:function(data){
                        angular.element("#imgIcon").val(null);
                        $scope.$parent.errors = null;
                        $scope.$parent.sandboxList = data;
                        $scope.$parent.selectedSandbox = $scope.$parent.sandboxList[0];
                        $scope.$parent.tmpSandbox = Utils.cloneSandbox($scope.$parent.selectedSandbox);
                        $scope.$parent.isValidSandbox = false;
                    },
                    errorFunction: function(data){
                        angular.element("#imgIcon").val(null);
                        $scope.$parent.sandboxList = null;
                        $scope.$parent.selectedSandbox = null;
                        $scope.$parent.tmpSandbox = Utils.cleanTmpSandbox();
                        $scope.$parent.errors = data;
                    }
                }, cfpLoadingBar);
        };

        $scope.editSandbox = function(sandbox){
                if($scope.$parent.selectedSandbox == null)
                {

                }
                else
                {
                   angular.element("#imgIcon").val(null); // altrimenti non resetta il valore relativo all'input file
                   $scope.$parent.editable = true;
                   $scope.$parent.tmpSandbox = Utils.cloneSandbox($scope.$parent.selectedSandbox);
                }
        };

        $scope.newSandbox = function(){
                $scope.$parent.selectedSandbox = null;
                var newSandbox = {
                        "id":0,
                        "identifier":null,
                        "name":null,
                        "description":null,
                        "icon":null
                };
                $scope.$parent.editable = true;
                $scope.$parent.tmpSandbox = newSandbox;
        };

        $scope.saveSandbox = function(){
              ZMLSandboxHelper.save($scope.$parent.tmpSandbox,{
                     successFunction: function(data){
                        $scope.$parent.selectedSandbox = data;
                        $scope.$parent.tmpSandbox = Utils.cloneSandbox($scope.$parent.selectedSandbox);
                        $scope.$parent.editable = false;
                        $scope.$parent.isValidSandbox = false;
                        $scope.refresh();
                     },
                     errorFunction: function(data){
                        $scope.$parent.errors = data;
                     }

              }, cfpLoadingBar);
        };

        $scope.undoSandbox = function(){
                $scope.$parent.editable = false;
                $scope.$parent.tmpSandbox = null;
                $scope.$parent.selectedSandbox = null;
                $scope.$parent.isValidSandbox = false;
                angular.element("#imgIcon").val(null);

        };
    });
