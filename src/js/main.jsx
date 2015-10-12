'use strict';

import {MainCtrl} from './MainCtrl';
import {FlickrService} from './FlickrService';

var myApp = angular.module('myApp', []);

myApp.service('FlickrService', ($rootScope) => new FlickrService($rootScope));

myApp.controller('MainCtrl', ($scope, FlickrService) => new MainCtrl($scope, FlickrService));
