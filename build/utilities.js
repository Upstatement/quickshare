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


var _defaultParams = function($share_link) {
	var params = {},
    	$container = $share_link.parents('.qs-container'),
        container_url,
        container_title;

    if($container) {
    	container_url = $container.data('url');
        container_title = $container.data('title');
    }

	params.src_url = escape($share_link.data('url') || container_url || window.location.href);
    params.title = escape($share_link.data('title') || container_title || 'Sharing: ');

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
