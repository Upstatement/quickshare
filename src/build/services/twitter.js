services_lib['twitter'] = {
    extractParams: function($share_link) {
        var params = _defaultParams($share_link),
        	tweet_body = _getData($share_link, 'tweet-body'),
        	via_username = _getData($share_link, 'via-username');

        params.tweet_body = _setNonEscapedDefault(tweet_body, params.title);
        params.via_username = _setNonEscapedDefault(via_username, null);

        return params;
    },
    makeUrl: function(params) {
        var href_url = 'https://twitter.com/intent/tweet?url=' + params.src_url + _mightInclude('&text=', params.tweet_body) + _mightInclude('&via=', params.via_username);
        href_url = "javascript:window.open('" + href_url + "','myTwitterWin','width=620,height=350'); void(0)";
        return href_url;
    },
    getCount : function(url, callback) {
        $.ajax({
          url: "http://urls.api.twitter.com/1/urls/count.json?url=" + url,
          success: function(data) {
            callback(data.count);
          },
          dataType: 'jsonp',
          crossDomain: true
        });
    },
    icon: 'twitter'
};
