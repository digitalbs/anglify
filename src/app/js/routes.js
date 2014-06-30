'use strict';

module.exports = function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './src/app/views/home.html',
            controller: 'HomeCtrl'
        });
};