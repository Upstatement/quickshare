var _mightInclude = function(_name, _value) {
    if (_value)
        return _name + _value;
    return '';
};

var _setNonEscapedDefault = function(_value,_default) {
	if(_value)
		return escape(_value);
	return _default;
};

var _removeTrailingSlash = function(url) {
    while(url.charAt(url.length-1) === '/') {
        url = url.substr(0,url.length-1);
    }
    return url;
};

var _getData = function($elem, attr) {

    var data_prefix = "qs-";
    console.log($elem.data(data_prefix + attr));
    return $elem.data(data_prefix + attr);
};

var _defaultParams = function($share_link) {
	var params = {},
    	$container = $share_link.parents('.qs-container'),
        container_url,
        container_title,
        container_suffix;

    if($container) {
    	container_url = _getData($container, 'url');
        container_title = _getData($container, 'title');
        container_suffix = _getData($container, 'suffix');
    }

    var suffix = _getData($share_link, 'suffix') || container_suffix || "",
        src_url = _getData($share_link, 'url') || container_url || window.location.href,
        title = _getData($share_link, 'title') || container_title || 'Sharing: ';

    if(suffix)
        src_url = _removeTrailingSlash(src_url) + suffix;


    params.src_url = escape(src_url);
    params.title = escape(title);

    return params;
};

var services_lib = {};

services_lib['default'] = {
    extractParams: _defaultParams,
    makeUrl: function(params) {
        console.error('did not provide service to share to');
        return null;
    }
};
