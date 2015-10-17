export class MainCtrl {
    constructor($scope, FlickrService) {
        $scope.entries = [];
        FlickrService.getEntries('Search',"");

        $scope.$on('getSearchCompleted', function (event, params) {
            var entries = params.response.photos.photo;
            $scope.$apply(function () {
                angular.copy(entries, $scope.entries);
            });
        });
    }
}