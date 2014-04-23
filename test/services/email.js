module('email tests');

//TODO check empties (empty string values)

var email_with_container_title = "",
	email_no_container_title = "";

//without container

_test({
	name: "em - no container + url + title",
	class_tag: class_tags.email + tags.no_container + tags.url_title,
});

_test({
	name: "em - no container + url + no title",
	class_tag: class_tags.email + tags.no_container + tags.url,
});

_test({
	name: "em - no container + no url + no title",
	class_tag: class_tags.email + tags.no_container + tags.no_url_no_title,
});

_test({
	name: "em - no container + no url + title",
	class_tag: class_tags.email + tags.no_container + tags.title,
});

_test({
	name: "em - no container + url + title + subject",
	class_tag: class_tags.email + tags.no_container + tags.url_title + tags.subject,
});

_test({
	name: "em - no container + url + no title + subject",
	class_tag: class_tags.email + tags.no_container + tags.url + tags.subject,
});

_test({
	name: "em - no container + url + title + mail_body",
	class_tag: class_tags.email + tags.no_container + tags.url_title + tags.mail_body,
});

_test({
	name: "em - no container + url + no title + mail_body",
	class_tag: class_tags.email + tags.no_container + tags.url + tags.mail_body,
});

_test({
	name: "em - no container + no url + title + mail_body",
	class_tag: class_tags.email + tags.no_container + tags.title + tags.mail_body,
});

_test({
	name: "em - no container + no url + no title + mail_body",
	class_tag: class_tags.email + tags.no_container + tags.no_url_no_title + tags.mail_body
});

_test({
	name: "em - no container + url + title + send_to(single)",
	class_tag: class_tags.email + tags.no_container + tags.url_title + tags.send_to,
});

_test({
	name: "em - no container + url + title + send_to(multiple)",
	class_tag: class_tags.email + tags.no_container + tags.url_title + tags.send_to + tags.multiple,
});

//with container

_test({
	name: "em - container + url + title",
	class_tag: class_tags.email + tags.container + tags.url_title,
});

_test({
	name: "em - container + url + no title",
	class_tag: class_tags.email + tags.container + tags.url,
});

_test({
	name: "em - container + no url + no title",
	class_tag: class_tags.email + tags.container + tags.no_url_no_title,
});

_test({
	name: "em - container + no url + title",
	class_tag: class_tags.email + tags.container + tags.title,
});

_test({
	name: "em - container + url + title + subject",
	class_tag: class_tags.email + tags.container + tags.url_title + tags.subject,
});

_test({
	name: "em - container + url + no title + subject",
	class_tag: class_tags.email + tags.container + tags.url + tags.subject,
});

_test({
	name: "em - container + url + title + mail_body",
	class_tag: class_tags.email + tags.container + tags.url_title + tags.mail_body,
});

_test({
	name: "em - container + url + no title + mail_body",
	class_tag: class_tags.email + tags.container + tags.url + tags.mail_body,
});

_test({
	name: "em - container + no url + title + mail_body",
	class_tag: class_tags.email + tags.container + tags.title + tags.mail_body,
});

_test({
	name: "em - container + no url + no title + mail_body",
	class_tag: class_tags.email + tags.container + tags.no_url_no_title + tags.mail_body
});

_test({
	name: "em - container + url + title + send_to(single)",
	class_tag: class_tags.email + tags.container + tags.url_title + tags.send_to,
	expected_url: urls.email + defaults.address + url_params.mail_body + defaults.title + escape(" ") + urls.test +
});

_test({
	name: "em - container + url + title + send_to(multiple)",
	class_tag: class_tags.email + tags.container + tags.url_title + tags.send_to + tags.multiple,
	expected_url: urls.email + defaults.multi_address + url_params.mail_body + _ + url_params.subject + _
});
