angular.module("ZMLSandBox")
    .directive("sandboxListItem", function () {
        return{
            restrict:'E',
            templateUrl: 'templates/sandbox-list-item.html',
            //controller: 'SandboxListItemController',
            require: "^sandboxView",
            link: function(scope, element, args, parentController){
                element.on('click', function(){
                    scope.$apply(function () {
                        parentController.setSelectedSandbox(scope.sandbox);
                    });

                });

                scope.isSelectedSandboxItem = function(sandbox){
                    var selSandbox = parentController.getSelectedSandbox();
                    return (selSandbox && selSandbox.id == sandbox.id);
                }

                scope.setImage = function(sandbox){
                    if(sandbox.icon == null)
                        return 'icons/stop.png';
                    else
                        return ('data:image/png;base64,'+sandbox.icon);
                };
            }
    }
    });