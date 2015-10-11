export class Uri {
    constructor() {
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

        return {getUri: this.getUri};
    }
}