services_lib['twitter'] = {
    extractParams: function(share_link) {
        var params       = _defaultParams(share_link),
        	tweet_body   = share_link.dataset.qsTweetBody,
        	via_username = share_link.dataset.qsViaUsername;

        if ( tweet_body ) {
            params.tweet_body = _setNonEscapedDefault(tweet_body, params.title);
        } else {
            params.tweet_body = _rawUrlEncode(_rawUrlDecode(params.title));
        }

        params.via_username = _setNonEscapedDefault(via_username, null);

        return params;
    },
    makeUrl: function(params) {
        var href_url = 'https://twitter.com/intent/tweet?url=' + params.src_url + _mightInclude('&text=', params.tweet_body) + _mightInclude('&via=', params.via_username);
        href_url = "javascript:window.open('" + encodeURIComponent(href_url) + "','myTwitterWin','width=620,height=350'); void(0)";
        return href_url;
    },
    icon: 'twitter-square'
};