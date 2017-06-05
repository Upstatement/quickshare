services_lib['mailto'] = {
	extractParams: function(share_link) {
        var params    = _defaultParams(share_link),
        	mail_body = share_link.dataset.mailBody || null,
        	subject   = share_link.dataset.subject || null,
            send_to   = share_link.dataset.sendTo || null;
  
        params.mail_body = mail_body ? encodeURIComponent(mail_body + " ") + params.src_url : params.title + encodeURIComponent(" ") + params.src_url;
        params.subject = _setNonEscapedDefault(subject, params.title);
        params.send_to = send_to || '';

        return params;
    },
	makeUrl: function(params) {
    	var href_url = 'mailto:' + params.send_to + _mightInclude('?body=',params.mail_body) + _mightInclude('&subject=',params.subject);
    	return href_url;
    },
    icon: 'envelope'
};
