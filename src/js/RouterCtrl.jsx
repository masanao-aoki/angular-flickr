export class RouterCtrl {
    constructor($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('');
        $stateProvider.state('top',{
            url: "",
            views: {
                "": {
                    templateUrl: "./js/template/container.html",
                    controller: ""
                },
                "tags@top": {
                    templateUrl: "./js/template/tags.html",
                    controller: "TagsCtrl"
                },
                "photolist@top": {
                    templateUrl: "./js/template/photolist.html",
                    controller: "MainCtrl"
                }
            }
        }).state('top.tag',{
            url: '/tag/:tagID',
            views: {
                "photolist@top": {
                    templateUrl: "./js/template/photolist.html",
                    controller: "TagSearchCtrl"
                }
            }
        });
    }
}