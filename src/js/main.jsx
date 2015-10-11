'use strict';

var MainCtrl = require("./MainCtrl").MainCtrl;
var FlickrService = require("./FlickrService").FlickrService;

var myApp = angular.module('myApp', []);

myApp.service('FlickrService', ($rootScope) => new FlickrService($rootScope));

myApp.controller('MainCtrl', ($scope, FlickrService) => new MainCtrl($scope, FlickrService));
