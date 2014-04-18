(function($) {

    var _mightInclude = function(_name, _value) {
        if (_value)
            return _name + _value
        return '';
    };

    var _setNonEscapedDefault = function(_value,_default) {
    	if(_value)
    		return escape(_value);
    	return _default;
    }

    var _defaultParams = function($share_link) {
    	var params = {},
	    	$container = $share_link.parents('.qs-container'),
	        container_url = $container.data('url'),
	        container_title = $container.data('title');

    	params.src_url = escape($share_link.data('url') || container_url || window.location.href);
        params.title = escape($share_link.data('title') || container_title || 'Sharing: ');

        return params;
    };

    var services_lib = {
        'twitter': {
            extractParams: function($share_link) {
                var params = _defaultParams($share_link),
                	tweet_body = $share_link.data('tweet-body'),
                	via_username = $share_link.data('via_username');

                params.tweet_body = _setNonEscapedDefault(tweet_body, params.title);
                params.via_username = _setNonEscapedDefault(via_username, null);

                return params;
            },
            makeUrl: function(params) {
                var href_url = 'https://twitter.com/intent/tweet?url=' + params.src_url + _mightInclude("&text=", params.tweet_body) + _mightInclude('&via=', params.via_username);
                console.log(params.tweet_body);
                return href_url;
            },
            icon: 'twitter'
        },
        'facebook-share': {
            extractParams: _defaultParams, //facebook scrapes info for sharing
            makeUrl: function(params) {
                var href_url = "https://www.facebook.com/sharer/sharer.php?u=" + params.src_url;
                return href_url;
            },
            icon: 'facebook'
        },
        'google-plus': {
            extractParams: _defaultParams,
            makeUrl: function(params) {
            	var href_url = "https://plus.google.com/share?url=" + params.src_url;
            	return href_url;
            },
            icon: 'google-plus'
        },
        'email' : {
        	extractParams: _defaultParams,
        	makeUrl: function(params) {
            	var href_url = "mailto:?body=" + params.src_url + _mightInclude("&subject=",params.title);
            	return href_url;
            },
            icon: 'envelope-o'
        },
        'default': {
            extractParams: _defaultParams,
            makeUrl: function(params) {
                console.log('did not provide service to share to');
                return null;
            }
        }
    };

    $.fn.quickShare = function(args) {

    	console.log('quickShare() called');

        var $scope = $(this),
            $qslinks = $scope.find('.qs-link');

        $qslinks.each(function() {
            var $share_link = $(this),
                service_name = $share_link.data('service') || 'default',
                icon = $share_link.children('i.qs-icon') || false,
                service = services_lib[service_name],
                params = service.extractParams($share_link),
                href_url = service.makeUrl(params);
            if (href_url)
                $share_link.attr('href', href_url);
            if(icon)
            	icon.addClass('fa fa-' + service.icon);

            console.log(service_name);
            console.log(icon);

        });
    };

})(jQuery);
