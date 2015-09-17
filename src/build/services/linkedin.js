services_lib['linkedin'] = {
    extractParams: function($share_link) {
        var params = _defaultParams($share_link),
          summary = _getData($share_link, 'summary');
        	source = _getData($share_link, 'source');

        if(summary && summary.length < 256) {
          params.summary = _setNonEscapedDefault(summary, null);
        }
        if(source && source.length < 200) {
          params.source = _setNonEscapedDefault(source, null);
        }
        if(params.title && params.title.length > 200) {
          params.title = "Share on LinkedIn";
        }

        return params;
    },
    makeUrl: function(params) {
        var href_url = 'http://www.linkedin.com/shareArticle?mini=true&url=' + params.src_url + _mightInclude('&title=', params.title) + _mightInclude('&summary=', params.summary)+ _mightInclude('&source=', params.source);
        href_url = "javascript:window.open('" + encodeURIComponent(href_url) + "','myLinkedinWin','width=620,height=350'); void(0)";
        return href_url;
    },
    getCount : function(url, callback) {
        callback(0);
        // $.ajax({
        //   url: "http://urls.api.twitter.com/1/urls/count.json?url=" + url,
        //   success: function(data) {
        //     callback(data.count);
        //   },
        //   dataType: 'jsonp',
        //   crossDomain: true
        // });
    },
    icon: 'linkedin'
};
