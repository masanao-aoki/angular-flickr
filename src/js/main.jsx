'use strict';

import {RouterCtrl} from './RouterCtrl';
import {MainCtrl} from './MainCtrl';
import {TagsCtrl} from './TagsCtrl';
import {TagSearchCtrl} from './TagSearchCtrl';
import {FlickrService} from './FlickrService';


var myApp = angular.module('myApp', []);
var myRouter = angular.module('myRouter',['ui.router','myApp'],['$stateProvider', '$urlRouterProvider', ($sope, $urlRouterProvider) => new RouterCtrl($sope, $urlRouterProvider)]);

myRouter.run(function($rootScope, $location) {
  $rootScope.$location = $location;
});

myApp.service('FlickrService', ($rootScope) => new FlickrService($rootScope));

myApp.controller('MainCtrl', ($scope, FlickrService) => new MainCtrl($scope, FlickrService));

myApp.controller('TagsCtrl', ($scope, FlickrService) => new TagsCtrl($scope, FlickrService));

myApp.controller('TagSearchCtrl', ($scope, FlickrService, $stateParams) => new TagSearchCtrl($scope, FlickrService, $stateParams));
