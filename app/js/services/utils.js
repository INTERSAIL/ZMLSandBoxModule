angular.module("ZMLSandBox")
    .factory('Utils', function(){
        return{
            cloneSandbox: function(sandbox2){
                var sandbox1 ={};
                sandbox1.name = sandbox2.name;
                sandbox1.description = sandbox2.description;
                sandbox1.icon = sandbox2.icon;
                sandbox1.identifier = sandbox2.identifier;
                sandbox1.id = sandbox2.id;
                
                return sandbox1;
            },

            cleanTmpSandbox: function(){
              
                var sandbox = { "id":0,
                    "identifier":"",
                    "name":"",
                    "description":"",
                    "icon":""};
                
                return sandbox;
            }
        }

    });
