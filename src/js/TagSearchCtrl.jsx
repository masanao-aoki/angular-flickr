export class TagSearchCtrl {
    constructor($scope, FlickrService, $stateParams) {
        $scope.entries = [];
        $scope.tag = $stateParams['tagID'];
        console.log($scope.tag);
        
        FlickrService.getEntries('Search',$scope.tag);

        $scope.$on('getSearchCompleted', function (event, params) {
            var entries = params.response.photos.photo;
            $scope.$apply(function () {
                angular.copy(entries, $scope.entries);
            });
        });    
    }
}