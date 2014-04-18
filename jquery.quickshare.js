(function($) {

    var might_include = function(name, value) {
        if (value)
            return name + value
        return '';
    };

    var defaultParams = function($share_link) {
    	var params = {},
	    	$master = $share_link.parents('.qs-master'),
	        master_url = $master.data('url'),
	        master_title = $master.data('title');

    	params.src_url = escape($share_link.data('url') || master_url || window.location.href);
        params.title = escape($share_link.data('title') || master_title || 'Sharing: ');

        return params;
    };

    var services_lib = {
        'twitter': {
            extractParams: function($share_link) {
                var params = defaultParams($share_link),
                	tweet_body = $share_link.data('tweet-body');

                params.tweet_body = tweet_body? escape(tweet_body) : params.title ;
                params.via_username = escape($share_link.data('via-username'));

                return params;
            },
            makeUrl: function(params) {
                var href_url = 'https://twitter.com/intent/tweet?url=' + params.src_url + might_include("&text=", params.tweet_body) + might_include('&via=', params.via_username);
                console.log(params.tweet_body);
                return href_url;
            },
            icon: 'twitter'
        },
        'facebook-share': {
            extractParams: defaultParams, //facebook scrapes info for sharing
            makeUrl: function(params) {
                var href_url = "https://www.facebook.com/sharer/sharer.php?u=" + params.src_url;
                return href_url;
            },
            icon: 'facebook'
        },
        'google-plus': {
            extractParams: defaultParams,
            makeUrl: function(params) {
            	var href_url = "https://plus.google.com/share?url=" + params.src_url;
            	return href_url;
            },
            icon: 'google-plus'
        },
        'email' : {
        	extractParams: defaultParams,
        	makeUrl: function(params) {
            	var href_url = "mailto:?body=" + params.src_url + might_include("&subject=",params.title);
            	return href_url;
            },
            icon: 'envelope-o'
        },
        'default': {
            extractParams: defaultParams,
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
