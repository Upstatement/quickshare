services_lib['pinterest'] = {
	extractParams: _defaultParams,
	makeUrl: function(params) {
		var href_url = 'http://www.pinterest.com/pin/create/button/?url=' + params.src_url + "&media=" + params.image;
		return href_url;
	},
};