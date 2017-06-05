services_lib['pinterest'] = {
	extractParams: _defaultParams,
	makeUrl: function(params) {
		return 'http://www.pinterest.com/pin/create/button/?url=' + params.src_url + "&media=" + params.image + "&description=" + params.description;
	},
  icon: 'pinterest-square'
};
