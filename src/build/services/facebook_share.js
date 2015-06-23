services_lib['facebook-share'] = {
    extractParams: _defaultParams, //facebook scrapes info for sharing
    makeUrl: function(params) {
        var href_url = 'https://www.facebook.com/sharer/sharer.php?u=' + params.src_url;
        href_url = "javascript:window.open('" + href_url + "','myFacebookWin','width=620,height=350');";
        return href_url;
    },
    getCount : function(url, callback) {
        $.ajax({
          url: "https://api.facebook.com/method/links.getStats?urls=" + url + "&format=json",
          success: function(data) {
            if(data.length > 0)
              callback(data[0].share_count);
            else
              callback(0);
          },
          dataType: 'jsonp',
          crossDomain: true
        });
    },
    icon: 'facebook'
};
