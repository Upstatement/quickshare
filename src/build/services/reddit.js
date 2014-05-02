services_lib['reddit'] = {
    extractParams: _defaultParams,
    makeUrl: function(params) {
        var href_url = 'http://www.reddit.com/submit?url=' +  params.src_url + _mightInclude('&title=', params.title);
        return href_url;
    },
    getCount : function(url, callback) {
        $.ajax({
          url: "http://buttons.reddit.com/button_info.json?url=" + url,
          success: function(data) {
            console.log(data);
            if(data.data.children.length > 0)
              callback(data.data.children[0].data.ups);
            else
              callback(0);
          },
          crossDomain: true
        });
    },
    icon: 'external-link'
};
