angular.module('ZMLSandBox')
    .directive('sandboxInfo', function(){
        return{
            restrict:"E",
            templateUrl:"templates/sandbox-info.html",
            scope:{
                selectedSandbox: "=",
                editable:"=",
                tmpSandbox: "=",
                isValidSandbox: "="
            },
            controller: "sandboxInfoController",
            link: function(scope, element, args){

                var loadFile = function(event) {
                    var input = event.target;
                    var fr = new FileReader();
                    fr.onload = function(){
                        scope.tmpSandbox.icon = fr.result.substr(fr.result.indexOf(',') + 1);;
                    };
                    fr.readAsDataURL(input.files[0]);
                };
              element.find("#imgIcon").on('change', loadFile);

                scope.$watch('frmSandbox.$valid', function(validity) {
                    scope.isValidSandbox = validity;
                });


            }
        }
    });
