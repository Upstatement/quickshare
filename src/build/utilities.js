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

var _formatUrl = function(url, has_suffix) {

    if(url.indexOf("http:") === -1 && url.indexOf("https:") === -1) {
        url = 'http://' + url;
    }

    if(has_suffix) {
        while(url.charAt(url.length-1) === '/') {
            url = url.substr(0,url.length-1);
        }
    }

    return url;
};

var _getData = function($elem, attr) {

    var data_prefix = "qs-";
    if($elem)
        return $elem.data(data_prefix + attr);
    return false;
};

//TODO: turn combine _getData and _getContainer
var _getContainerData = function($share_link, data_attr) {
    var $container = $share_link.parents('.qs-container[data-qs-'+data_attr+']');
    if($container)
        return _getData($container, data_attr);
    else
        return false;
};

var _defaultParams = function($share_link) {
	var params = {},
    	container_url = _getContainerData($share_link, 'url'),
        container_title = _getContainerData($share_link, 'title'),
        container_suffix = _getContainerData($share_link, 'suffix');
        container_image = _getContainerData($share_link, 'image');
        container_description = _getContainerData($share_link, 'description');

    var suffix = _getData($share_link, 'suffix') || container_suffix || "",
        src_url = _getData($share_link, 'url') || container_url || window.location.href,
        title = _getData($share_link, 'title') || container_title || 'Sharing: ',
        image = _getData($share_link, 'image') || container_image || "";
        description = _getData($share_link, 'description') || container_description || "";

    if(suffix) {
        src_url = _formatUrl(src_url, true) + suffix;
    }
    else {
        src_url = _formatUrl(src_url, false);
    }

    params.src_url = escape(src_url);
    params.title = escape(title);
    params.image = escape(image);
    params.description = escape(description);

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
