services_lib['mailto'] = {
	extractParams: function($share_link) {
        var params = _defaultParams($share_link),
        	mail_body = $share_link.data('mail-body'),
        	subject = $share_link.data('subject'),
            send_to = $share_link.data('send-to');

        params.mail_body = _setNonEscapedDefault(mail_body, params.title + escape(' ') + params.src_url);
        params.subject = _setNonEscapedDefault(subject, params.title);
        params.send_to = escape(send_to || '');

        return params;
    },
	makeUrl: function(params) {
    	var href_url = 'mailto:' + params.send_to + _mightInclude('?body=',params.mail_body) + _mightInclude('&subject=',params.subject);
    	return href_url;
    },
    icon: 'envelope-o'
};
