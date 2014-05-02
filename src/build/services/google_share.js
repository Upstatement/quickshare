services_lib['google-plus-share'] = {
    extractParams: _defaultParams,
    makeUrl: function(params) {
    	var href_url = 'https://plus.google.com/share?url=' + params.src_url;
    	return href_url;
    },
    getCount: function(url, callback) {
    	callback(0);
    },
    icon: 'google-plus'
};
