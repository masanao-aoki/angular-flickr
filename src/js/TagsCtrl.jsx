export class TagsCtrl {
    constructor($scope, FlickrService) {
        $scope.tags = [];
        FlickrService.getEntries("Tag","");
        
        $scope.$on('getTagCompleted', function (event, params) {
            var tags = params.response.who.tags.tag;
            //console.log(tags);
            $scope.$apply(function () {
                angular.copy(tags, $scope.tags);
            });
        });
    }
}