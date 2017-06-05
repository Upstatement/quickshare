services_lib['reddit'] = {
    extractParams: _defaultParams,
    makeUrl: function(params) {
        return 'http://www.reddit.com/submit?url=' +  params.src_url + _mightInclude('&title=', params.title);
    },
    getCount : function(url, callback) {
        var request = new XMLHttpRequest();
        request.open('GET', "http://buttons.reddit.com/button_info.json?url=" + url, true);

        request.onload = function() {
            var data = JSON.parse(request.responseText);
            
            if (request.status >= 200 && request.status < 400) {
                if (data.data.children.length > 0) {
                    callback(data.data.children[0].data.ups);
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
    icon: 'reddit-square'
};
