window.quickShare = function(scope) {

    if(!scope)
        scope = window.document;

    var $scope = $(scope),
        $qslinks = $scope.find('.qs-link');

    $qslinks.each(function() {
        var $share_link = $(this),
            service_name = _getData($share_link, 'service') || 'default',
            count_selector = _getData($share_link, 'count-selector') || false,
            icon = $share_link.children('i.qs-icon') || false,
            service = services_lib[service_name] || services_lib['default'],
            params = service.extractParams($share_link),
            href_url = service.makeUrl(params);
        if (href_url)
            $share_link.attr('href', href_url);
        if(icon)
        	icon.addClass('fa fa-' + service.icon);
        if(count_selector) {
            service.getCount(params.src_url, function(count) {
                $(count_selector).text(count);
            });
        }
    });
};
