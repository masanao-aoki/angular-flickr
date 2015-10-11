export class AjaxCtrl {
    constructor($scope, ajaxService) {
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
    }
}