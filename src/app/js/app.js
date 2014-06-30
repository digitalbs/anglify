'use strict';

require('angular/angular');
require('angular-ui-router/release/angular-ui-router');

var routes = require('./routes');
var HomeCtrl = require('./controllers/homeCtrl');
var app = angular.module('myApp', ['ui.router']).config(routes);

app.controller('HomeCtrl', ['$scope', HomeCtrl]);
