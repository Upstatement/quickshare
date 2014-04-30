_module('mailto tests');

//TODO check empties (empty string values)

var mailto_default_title = escape("mt title"),
	mailto_default_title_container = mailto_default_title + escape(" container"),
	url_title_mail_body = mailto_default_title + escape(" ") + urls.test_e,
	no_url_no_title_mail_body = defaults.title+ escape(" ") + urls.localhost_e,
	url_no_title_mail_body = defaults.title + escape(" ") + urls.test_e,
	no_url_title_mail_body = mailto_default_title + escape(" ") + urls.localhost_e;

//without container

_test({
	name: "mt - no container + url + title",
	class_tag: class_tags.mailto + tags.no_container + tags.url_title,
	expected_url: urls.mailto + url_params.mail_body + mailto_default_title + escape(" ") + urls.test_e + url_params.mailto + url_params.subject + mailto_default_title
});

_test({
	name: "mt - no container + url + no title",
	class_tag: class_tags.mailto + tags.no_container + tags.url,
	expected_url: urls.mailto + url_params.mail_body + defaults.title + escape(" ") + urls.test_e + url_params.mailto + url_params.subject + defaults.title
});

_test({
	name: "mt - no container + no url + no title",
	class_tag: class_tags.mailto + tags.no_container + tags.no_url_no_title,
	expected_url: urls.mailto + url_params.mail_body + defaults.title + escape(" ") + urls.localhost_e + url_params.subject + defaults.title
});

_test({
	name: "mt - no container + no url + title",
	class_tag: class_tags.mailto + tags.no_container + tags.title,
	expected_url: urls.mailto + url_params.mail_body + mailto_default_title + escape(" ") + urls.localhost_e + url_params.subject + mailto_default_title
});

// _test({
// 	name: "mt - no container + url + title + mail_body + subject",
// 	class_tag: class_tags.mailto + tags.no_container + tags.url_title + tags.subject,
// 	expected_url: ''
// });

// _test({
// 	name: "mt - no container + url + no title + mail_body + subject",
// 	class_tag: class_tags.mailto + tags.no_container + tags.url + tags.subject,
// 	expected_url: ''
// });

_test({
	name: "mt - no container + url + title + mail_body + subject",
	class_tag: class_tags.mailto + tags.no_container + tags.url_title + tags.mail_body + tags.subject,
	expected_url: urls.mailto + url_params.mail_body + defaults.mail_body + url_params.subject + defaults.subject
});

_test({
	name: "mt - no container + url + no title + mail_body + subject",
	class_tag: class_tags.mailto + tags.no_container + tags.url + tags.mail_body + tags.subject,
	expected_url: urls.mailto + url_params.mail_body + defaults.mail_body + url_params.subject + defaults.subject
});

_test({
	name: "mt - no container + no url + title + mail_body + subject",
	class_tag: class_tags.mailto + tags.no_container + tags.title + tags.mail_body + tags.subject,
	expected_url: urls.mailto + url_params.mail_body + defaults.mail_body + url_params.subject + defaults.subject
});

_test({
	name: "mt - no container + no url + no title + mail_body + subject",
	class_tag: class_tags.mailto + tags.no_container + tags.no_url_no_title + tags.mail_body + tags.subject,
	expected_url: urls.mailto + url_params.mail_body + defaults.mail_body + url_params.subject + defaults.subject
});

_test({
	name: "mt - no container + url + title + mail_body + subject + send_to(single)",
	class_tag: class_tags.mailto + tags.no_container + tags.url_title + tags.mail_body + tags.subject + tags.send_to,
	expected_url: urls.mailto + defaults.address + url_params.mail_body + defaults.mail_body + url_params.subject + defaults.subject
});

_test({
	name: "mt - no container + url + title + mail_body + subject + send_to(multiple)",
	class_tag: class_tags.mailto + tags.no_container + tags.url_title + tags.mail_body + tags.subject + tags.send_to + tags.multiple,
	expected_url: urls.mailto + defaults.multi_address + url_params.mail_body + defaults.mail_body + url_params.subject + defaults.subject
});

//with container

_test({
	name: "mt - container + url + title",
	class_tag: class_tags.mailto + tags.container + tags.url_title,
	expected_url: urls.mailto + url_params.mail_body + mailto_default_title + escape(" ") + urls.test_e + url_params.mailto + url_params.subject + mailto_default_title
});

_test({
	name: "mt - container + url + no title",
	class_tag: class_tags.mailto + tags.container + tags.url,
	expected_url: urls.mailto + url_params.mail_body + mailto_default_title_container + escape(" ") + urls.test_e + url_params.mailto + url_params.subject + mailto_default_title_container
});

_test({
	name: "mt - container + no url + no title",
	class_tag: class_tags.mailto + tags.container + tags.no_url_no_title,
	expected_url: urls.mailto + url_params.mail_body + mailto_default_title_container + escape(" ") + urls.test_e + url_params.container + url_params.mailto + url_params.subject + mailto_default_title_container
});

_test({
	name: "mt - container + no url + title",
	class_tag: class_tags.mailto + tags.container + tags.title,
	expected_url: urls.mailto + url_params.mail_body + mailto_default_title + escape(" ") + urls.test_e + url_params.container + url_params.mailto + url_params.subject + mailto_default_title
});

// _test({
// 	name: "mt - container + url + title + mail_body + subject",
// 	class_tag: class_tags.mailto + tags.container + tags.url_title + tags.subject,
// 	expected_url: urls.mailto + url_params.mail_body + url_title_mail_body+ url_params.subject + defaults.subject
// });

// _test({
// 	name: "mt - container + url + no title + mail_body + subject",
// 	class_tag: class_tags.mailto + tags.container + tags.url + tags.subject,
// 	expected_url: urls.mailto + url_params.mail_body + url_no_title_mail_body + url_params.subject + defaults.subject
// });

_test({
	name: "mt - container + url + title + subject + mail_body",
	class_tag: class_tags.mailto + tags.container + tags.url_title + tags.mail_body + tags.subject,
	expected_url: urls.mailto + url_params.mail_body + defaults.mail_body + url_params.subject + defaults.subject
});

_test({
	name: "mt - container + url + no title + subject + mail_body",
	class_tag: class_tags.mailto + tags.container + tags.url + tags.mail_body + tags.subject,
	expected_url: urls.mailto + url_params.mail_body + defaults.mail_body + url_params.subject + defaults.subject
});

_test({
	name: "mt - container + no url + title + subject + mail_body",
	class_tag: class_tags.mailto + tags.container + tags.title +  tags.mail_body + tags.subject,
	expected_url: urls.mailto + url_params.mail_body + defaults.mail_body + url_params.subject + defaults.subject
});

_test({
	name: "mt - container + no url + no title + subject +  mail_body",
	class_tag: class_tags.mailto + tags.container + tags.no_url_no_title + tags.mail_body + tags.subject,
	expected_url: urls.mailto + url_params.mail_body + defaults.mail_body + url_params.subject + defaults.subject
});

_test({
	name: "mt - container + url + title + mail_body + subject + send_to(single)",
	class_tag: class_tags.mailto + tags.container +tags.url_title + tags.mail_body + tags.subject +  tags.send_to,
	expected_url: urls.mailto + defaults.address + url_params.mail_body + defaults.mail_body + url_params.subject + defaults.subject
});

_test({
	name: "mt - container + url + title + mail_body + subject + send_to(multiple)",
	class_tag: class_tags.mailto + tags.container + tags.url_title + tags.mail_body + tags.subject + tags.send_to + tags.multiple,
	expected_url: urls.mailto + defaults.multi_address + url_params.mail_body + defaults.mail_body + url_params.subject + defaults.subject
});

