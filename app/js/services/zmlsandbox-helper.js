angular.module('ZMLSandBox')
    .factory('ZMLSandboxHelper', function($http, configuration, HttpHelper){
        return{
            list: function(handlers, progressBar){
                HttpHelper.http({method:'GET', url:configuration.sandbox_controller_url}, handlers, progressBar);
            },
            
            read: function(sandboxId, handlers, progressBar){
                HttpHelper.http({method:'GET', url:configuration.sandbox_controller_url + sandboxId.toString()}, handlers, progressBar);
            },
            
            save: function(sandbox, handlers, progressBar){
                if(sandbox.id <= 0){
                    // sandbox nuova --> post
                    HttpHelper.http({method:'POST', url:configuration.sandbox_controller_url, headers:{'Content-Type':'application/json; charset=UTF-8'}, data: sandbox}, handlers, progressBar);
                }
                else{
                    //sandbox esistente --> put
                    HttpHelper.http({method:'PUT', url:configuration.sandbox_controller_url + sandbox.id.toString(), headers:{'Content-Type':'application/json; charset=UTF-8'}, data: sandbox}, handlers, progressBar);
                }
                
            },
            
            
            readListSandBox:function(){
                $http.get('test_json/sandboxlist.json')
                    .success(function(data){
                    return data;
                })
                    .error(function(data){
                        return -1;
                    })
                
            }
        }
    })
