_module('reddit share tests');

var reddit_default_title = encodeURIComponent("reddit title"),
	reddit_default_title_w = encodeURIComponent("reddit title container");

// no container
_test ({
	name: "R - no container + url + title",
	class_tag: class_tags.reddit + tags.no_container + tags.url_title,
	expected_url: urls.reddit + urls.test_e + url_params.reddit + url_params.title + reddit_default_title
});

_test ({
	name: "R - no container + no url + title",
	class_tag: class_tags.reddit + tags.no_container + tags.title,
	expected_url: urls.reddit + urls.localhost_e  + url_params.title + reddit_default_title
});

_test ({
	name: "R - no container + no url + no title",
	class_tag: class_tags.reddit + tags.no_container + tags.no_url_no_title,
	expected_url: urls.reddit + urls.localhost_e  + url_params.title + defaults.title
});

// with container

_test ({
	name: "R - container + url + title",
	class_tag: class_tags.reddit + tags.container + tags.url_title,
	expected_url: urls.reddit + urls.test_e + url_params.reddit + url_params.title + reddit_default_title
});

_test ({
	name: "R - container + no url + title",
	class_tag: class_tags.reddit + tags.container + tags.title,
	expected_url: urls.reddit + urls.test_e + url_params.container + url_params.reddit + url_params.title + reddit_default_title
});

_test ({
	name: "R - container + no url + no title",
	class_tag: class_tags.reddit + tags.container + tags.no_url_no_title,
	expected_url: urls.reddit + urls.test_e + url_params.container + url_params.reddit + url_params.title + reddit_default_title_w
});