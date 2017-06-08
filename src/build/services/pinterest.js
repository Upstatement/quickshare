services_lib['pinterest'] = {
	extractParams: _defaultParams,
	makeUrl: function(params) {
		return 'https://www.pinterest.com/pin/create/button/?url=' + params.src_url + "&media=" + params.image + "&description=" + params.description;
	},
  icon: 'pinterest-p'
};
