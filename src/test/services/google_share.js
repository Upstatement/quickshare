_module('google-plus-share tests');

//without container

_test({
	name: 'gps - no container + url + title',
	class_tag: class_tags.gp_share + tags.no_container + tags.url_title,
	expected_url: urls.gp_share + urls.test_e + url_params.gp_share
});

_test({
	name: 'gps - no container + url + no title',
	class_tag: class_tags.gp_share + tags.no_container + tags.url,
	expected_url: urls.gp_share + urls.test_e + url_params.gp_share
});

_test({
	name: 'gps - no container + no url + no title',
	class_tag: class_tags.gp_share + tags.no_container + tags.no_url_no_title,
	expected_url: urls.gp_share + urls.localhost_e
});

_test({
	name: 'gps - no container + no url + title',
	class_tag: class_tags.gp_share + tags.no_container + tags.title,
	expected_url: urls.gp_share + urls.localhost_e
});

//with container

_test({
	name: 'gps - container + url + title',
	class_tag: class_tags.gp_share + tags.container + tags.url_title,
	expected_url: urls.gp_share + urls.test_e + url_params.gp_share
});

_test({
	name: 'gps - container + url + no title',
	class_tag: class_tags.gp_share + tags.container + tags.url,
	expected_url: urls.gp_share + urls.test_e + url_params.gp_share
});

_test({
	name: 'gps - container + no url + no title',
	class_tag: class_tags.gp_share + tags.container + tags.no_url_no_title,
	expected_url: urls.gp_share + urls.test_e + url_params.container + url_params.gp_share
});

_test({
	name: 'gps - container + no url + title',
	class_tag: class_tags.gp_share + tags.container + tags.title,
	expected_url: urls.gp_share + urls.test_e + url_params.container + url_params.gp_share
});
