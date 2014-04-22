services_lib['facebook-share'] = {
    extractParams: _defaultParams, //facebook scrapes info for sharing
    makeUrl: function(params) {
        var href_url = 'https://www.facebook.com/sharer/sharer.php?u=' + params.src_url;
        return href_url;
    },
    icon: 'facebook'
};
