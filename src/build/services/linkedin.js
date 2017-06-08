services_lib['linkedin'] = {
    extractParams: function(share_link) {
        var params  = _defaultParams(share_link),
            summary = share_link.dataset.qsSummary || null;
        	source  = share_link.dataset.qsSource || null;

        if (summary && summary.length < 256) {
          params.summary = _setNonEscapedDefault(summary, null);
        }
        if (source && source.length < 200) {
          params.source = _setNonEscapedDefault(source, null);
        }
        if (params.title && params.title.length > 200) {
          params.title = "Share on LinkedIn";
        }

        return params;
    },
    makeUrl: function(params) {
        var href_url = 'https://www.linkedin.com/shareArticle?mini=true&url=' + params.src_url + _mightInclude('&title=', params.title) + _mightInclude('&summary=', params.summary)+ _mightInclude('&source=', params.source);
        return "javascript:window.open('" + encodeURIComponent(href_url) + "','myLinkedinWin','width=620,height=350');void(0)";
    },
    icon: 'linkedin'
};
