'use strict';

var AjaxCtrl = require("./mainCtrl").AjaxCtrl;
var Api = require("./api").Api;
var Uri = require("./uri").Uri;

var myApp = angular.module('myApp', []);


myApp.service('uriService', () => new Uri());

myApp.service('ajaxService', ($rootScope, uriService) => new Api($rootScope, uriService));

myApp.controller('ajaxCtrl', ($scope, ajaxService) => new AjaxCtrl($scope, ajaxService));
