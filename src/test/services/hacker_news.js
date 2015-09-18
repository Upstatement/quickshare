_module('hacker-news tests');

var hackernews_default_title = encodeURIComponent("hacker-news title"),
	hackernews_default_title_w = encodeURIComponent("hacker-news title container");

// no container
_test ({
	name: "Hn - no container + url + title",
	class_tag: class_tags.hackernews + tags.no_container + tags.url_title,
	expected_url: urls.hackernews + urls.test_e + url_params.hackernews + url_params.hnTitle + hackernews_default_title
});

_test ({
	name: "Hn - no container + url + no title",
	class_tag: class_tags.hackernews + tags.no_container + tags.url,
	expected_url: urls.hackernews + urls.test_e + url_params.hackernews + url_params.hnTitle + defaults.title
});

_test ({
	name: "Hn - no container + no url + no title",
	class_tag: class_tags.hackernews + tags.no_container + tags.no_url_no_title,
	expected_url: urls.hackernews + urls.localhost_e + url_params.hnTitle + defaults.title
});

// with container
_test ({
	name: "Hn - container + url + title",
	class_tag: class_tags.hackernews + tags.container + tags.url_title,
	expected_url: urls.hackernews + urls.test_e + url_params.hackernews + url_params.hnTitle + hackernews_default_title
});

_test ({
	name: "Hn - container + url + no title",
	class_tag: class_tags.hackernews + tags.container + tags.url,
	expected_url: urls.hackernews + urls.test_e + url_params.hackernews + url_params.hnTitle + hackernews_default_title_w
});

_test ({
	name: "Hn - container + no url + no title",
	class_tag: class_tags.hackernews + tags.container + tags.no_url_no_title,
	expected_url: urls.hackernews + urls.test_e + url_params.container + url_params.hackernews + url_params.hnTitle + hackernews_default_title_w
});