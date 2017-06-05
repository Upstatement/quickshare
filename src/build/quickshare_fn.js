window.quickShare = function(scope) {

    if(!scope)
        scope   = window.document;
        qslinks = scope.querySelectorAll('.qs-link');

    [].forEach.call(qslinks, function(link) {
        var share_link     = link,
            service_name   = share_link.dataset.qsService || 'default',
            count_selector = share_link.dataset.qsCountSelector || false,
            icon           = share_link.querySelector('i.qs-icon') || false,
            service        = services_lib[service_name] || services_lib['default'],
            params         = service.extractParams(share_link),
            href_url       = service.makeUrl(params);
        
        if ( href_url )
            share_link.href = href_url;
        
        if ( icon ) {
        	_addClass(icon,'fa');
            _addClass(icon,'fa-' + service.icon );
        }
        
        if ( count_selector ) {
            if ( service.getCount ) {
                service.getCount(params.src_url, function(count) {
                    var count_el = scope.querySelector(count_selector);
                    console.log(count_el);
                    if ( count_el )
                        count_el.innerHTML = count;
                });
            }
        }
    });
};
