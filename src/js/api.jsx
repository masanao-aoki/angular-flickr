export var api = myApp.service('ajaxService', function ($rootScope, uriService) {
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