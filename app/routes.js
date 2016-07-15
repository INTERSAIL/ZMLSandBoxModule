angular.module("ZMLSandBox")
    .config(['$routeProvider', function($routeProvider)
    {
        $routeProvider.when('/zmlsandbox',{
            templateUrl: 'templates/index.html'
        })
            .otherwise({
                redirectTo: '/zmlsandbox'
            })
        }]);
