export class FlickrService {
    constructor($rootScope) {
        this.getEntries = function (type,name) {
            var name = encodeURI(name);
            var url = "";
            var api_key = 'e2d99c3ff7885e30c624973bb84fdb09';
            var user_id = '126218952%40N06'
            var format = 'json';
            var nojsoncallback = 1;
            var evName = 'get'+type+'Completed'

            if(type == "Search") {
                if(!name) {
                    url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+api_key+'&user_id='+user_id+'&format='+format+'&nojsoncallback='+nojsoncallback;
                }
                else {
                    url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+api_key+'&user_id='+user_id+'&tags='+name+'&format='+format+'&nojsoncallback='+nojsoncallback;
                }
            }
            else if (type == "Tag") {
                    url = 'https://api.flickr.com/services/rest/?method=flickr.tags.getListUser&api_key='+api_key+'&user_id='+user_id+'&format='+format+'&nojsoncallback='+nojsoncallback;
            }

            //console.log(url);

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

    }
}