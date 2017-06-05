services_lib['pinterest'] = {
	extractParams: _defaultParams,
	makeUrl: function(params) {
		var href_url = 'http://www.pinterest.com/pin/create/button/?url=' + params.src_url + "&media=" + params.image + "&description=" + params.description;
		return href_url;
	},
  icon: 'pinterest-square'
};
