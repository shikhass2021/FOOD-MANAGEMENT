var app = angular.module('myApp', [], ['ui.bootstrap']);
var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
        templateUrl: 'about.html',
        controller: 'FirstController'
    })

    .when('/menu', {
        templateUrl: 'menu.html',
        controller: 'SecondController'
    })

    .when('/resto', {
        templateUrl: 'resto.html',
        controller: 'ThirdController'
    })

    .otherwise({
        redirectTo: '/'
    });
});


app.controller('FirstController', function($scope) {
    $scope.message = ' xoiuytrdcfvbnjm,.l,kjuytytfygjkhbmxsdf ';
});

app.controller('SecondController', function($scope, $http) {
    $http.get('https://shikhass2021.github.io/WSD_ANG_JSON/food.json')
        .success(function(response) {
            $scope.names = response.Employee;
        });
});

app.controller('ThirdController', function($scope, $http) {
    $http.get('https://shikhass2021.github.io/WSD_ANG_JSON/food.json')
        .success(function(response) {
            $scope.names = response.Employee;
            $scope.rowlimit = 6;
        });
});
