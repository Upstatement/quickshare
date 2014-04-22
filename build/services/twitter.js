services_lib['twitter'] = {
    extractParams: function($share_link) {
        var params = _defaultParams($share_link),
        	tweet_body = $share_link.data('tweet-body'),
        	via_username = $share_link.data('via-username');

        params.tweet_body = _setNonEscapedDefault(tweet_body, params.title);
        params.via_username = _setNonEscapedDefault(via_username, null);

        return params;
    },
    makeUrl: function(params) {
        var href_url = 'https://twitter.com/intent/tweet?url=' + params.src_url + _mightInclude('&text=', params.tweet_body) + _mightInclude('&via=', params.via_username);
        return href_url;
    },
    icon: 'twitter'
};
