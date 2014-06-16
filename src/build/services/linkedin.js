services_lib['linkedin'] = {
    extractParams: function($share_link) {
        var params = _defaultParams($share_link),
          summary = _getData($share_link, 'summary');
        	source = _getData($share_link, 'source');

        if(summary.length < 256) {
          params.summary = _setNonEscapedDefault(summary, null);
        }
        if(source.length < 200) {
          params.source = _setNonEscapedDefault(source, null);
        }
        if(params.title > 200) {
          params.title = "Share on LinkedIn";
        }

        return params;
    },
    makeUrl: function(params) {
        var href_url = 'http://www.linkedin.com/shareArticle?mini=true&url=' + params.src_url + _mightInclude('&title=', params.title) + _mightInclude('&summary=', params.summary)+ _mightInclude('&source=', params.source);
        return href_url;
    },
    // getCount : function(url, callback) {
    //     $.ajax({
    //       url: "http://urls.api.twitter.com/1/urls/count.json?url=" + url,
    //       success: function(data) {
    //         callback(data.count);
    //       },
    //       dataType: 'jsonp',
    //       crossDomain: true
    //     });
    // },
    icon: 'linkedin'
};
