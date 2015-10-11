/**
 * アプリケーションの定義
 */
var myApp = angular.module('myApp', []);

myApp.service('uriService', function () {
	this.getUri = function (type,name) {
		var name = encodeURI(name);
		var uri = "";
		var api_key = '23518cd2dc9536dc9aa21dea96a993a5';
		var user_id = '126218952%40N06'
		var format = 'json';
		var nojsoncallback = 1;

		//console.log(type);

		if(type == "Search") {
			if(!name) {
				uri = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+api_key+'&user_id='+user_id+'&format='+format+'&nojsoncallback='+nojsoncallback;
			}
			else {
				uri = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+api_key+'&user_id='+user_id+'&tags='+name+'&format='+format+'&nojsoncallback='+nojsoncallback;
			}
		}
		else if (type == "Tag") {
				uri = 'https://api.flickr.com/services/rest/?method=flickr.tags.getListUser&api_key='+api_key+'&user_id='+user_id+'&format='+format+'&nojsoncallback='+nojsoncallback;
		}
		return uri; 
	}
});

myApp.service('ajaxService', function ($rootScope, uriService) {
    this.getEntries = function (type,name) {
        var url = uriService.getUri(type,name);
        //console.log(url);
        var evName = 'get'+type+'Completed'

        $.ajax({
            url: url,
            dataType: 'json',
            success: function (response) {
                $rootScope.$broadcast(evName, {
                    response: response
                });
            }
        });
    }
});



myApp.controller('ajaxCtrl', function ($scope, ajaxService) {
    $scope.entries = [];
    $scope.tags = [];
    $scope.tag = "";
    ajaxService.getEntries("Tag","");

    $scope.changeTug = function(tag) {
    	$scope.tag = tag;
    	//console.log(tag);
    }
		$scope.$watch('tag', function() {		  
	    ajaxService.getEntries('Search',$scope.tag);
		});

		$scope.$on('getTagCompleted', function (event, params) {
			var tags = params.response.who.tags.tag;
			//console.log(tags);
      $scope.$apply(function () {
          angular.copy(tags, $scope.tags);
      });
    });

    $scope.$on('getSearchCompleted', function (event, params) {
    		//console.log(params);
        var entries = params.response.photos.photo;
        $scope.$apply(function () {
            angular.copy(entries, $scope.entries);
        });
    });
});