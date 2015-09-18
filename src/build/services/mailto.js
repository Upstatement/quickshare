services_lib['mailto'] = {
	extractParams: function($share_link) {
        var params = _defaultParams($share_link),
        	mail_body = _getData($share_link,'mail-body'),
        	subject = _getData($share_link,'subject'),
            send_to = _getData($share_link,'send-to');

        if (mail_body){
            params.mail_body = encodeURIComponent(mail_body + " ") + params.src_url;
        } else {
            params.mail_body = params.title + encodeURIComponent(" ") + params.src_url;
        }
        params.subject = _setNonEscapedDefault(subject, params.title);
        params.send_to = send_to || '';

        return params;
    },
	makeUrl: function(params) {
    	var href_url = 'mailto:' + params.send_to + _mightInclude('?body=',params.mail_body) + _mightInclude('&subject=',params.subject);
    	return href_url;
    },
    getCount: function(url, callback) {

    },
    icon: 'envelope-o'
};
