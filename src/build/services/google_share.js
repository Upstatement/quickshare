services_lib['google-plus-share'] = {
    extractParams: _defaultParams,
    makeUrl: function(params) {
    	return 'https://plus.google.com/share?url=' + params.src_url;
    },
    icon: 'google-plus'
};
