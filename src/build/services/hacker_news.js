services_lib['hacker-news'] = {
    extractParams: _defaultParams,
    makeUrl: function(params) {
        return 'http://news.ycombinator.com/submitlink?u=' + params.src_url + _mightInclude('&t=', params.title);
    },
    getCount : function(url, callback) {
        var request = new XMLHttpRequest();
        
        request.open('GET', "https://hn.algolia.com/api/v1/search?query=%22" + url, true);

        request.onload = function() {
            var data = JSON.parse(request.responseText);
              
            if (request.status >= 200 && request.status < 400) {
                if (data.hits.length > 0) {
                    callback(data.hits[0].points);
                }
            } else {
                callback(0);
            }
        };

        request.onerror = function(err) {
            console.log("Quickshare getCount error: ", err);    
        };

        request.send();
    },
    icon: 'hacker-news'
};
