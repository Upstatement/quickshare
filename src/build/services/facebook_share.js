services_lib['facebook-share'] = {
    extractParams: _defaultParams, //facebook scrapes info for sharing
    makeUrl: function(params) {
        var href_url = 'https://www.facebook.com/sharer/sharer.php?u=' + params.src_url;
        href_url = "javascript:window.open('" + href_url + "','myFacebookWin','width=620,height=350'); void(0)";
        return href_url;
    },
    icon: 'facebook'
};
