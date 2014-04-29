$.fn.quickShare = function(args) {

    var $scope = $(this),
        $qslinks = $scope.find('.qs-link');

    $qslinks.each(function() {
        var $share_link = $(this),
            service_name = _getData($share_link, 'service') || 'default',
            count_id = _getData($share_link, 'count-id') || false,
            icon = $share_link.children('i.qs-icon') || false,
            service = services_lib[service_name] || services_lib['default'],
            params = service.extractParams($share_link),
            href_url = service.makeUrl(params);
        if (href_url)
            $share_link.attr('href', href_url);
        if(icon)
        	icon.addClass('fa fa-' + service.icon);
        if(count_id) {
            service.findCount(function(count) {
                $(count_id).val(count);
            });
        }

    });

    return true;
};
