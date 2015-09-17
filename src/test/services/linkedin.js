_module('linkedin tests');

	var linkedin_default_title = encodeURIComponent("linkedin title"),
		linkedin_default_title_w = encodeURIComponent("linkedin title container"),
		linkedin_default_summary = encodeURIComponent("summary"),
		linkedin_default_source = encodeURIComponent("The source"),
		encodedURL_url_title = encodeURIComponent(urls.linkedin + urls.test_e + url_params.linkedin + url_params.title + linkedin_default_title),
		encodedURL_url_no_title = encodeURIComponent(urls.linkedin + urls.test_e + url_params.linkedin + url_params.title + defaults.title),
		encodedURL_url_no_title_w = encodeURIComponent(urls.linkedin + urls.test_e + url_params.linkedin + url_params.title + linkedin_default_title_w),
		encodedURL_no_url_no_title = encodeURIComponent(urls.linkedin + urls.localhost_e + url_params.title + defaults.title),
		encodedURL_no_url_no_title_w = encodeURIComponent(urls.linkedin + urls.test_e + url_params.container + url_params.linkedin + url_params.title + linkedin_default_title_w),
		encodedURL_summary = encodeURIComponent(urls.linkedin + urls.test_e + url_params.linkedin + url_params.title + linkedin_default_title + url_params.summary + linkedin_default_summary),
		encodedURL_source = encodeURIComponent(urls.linkedin + urls.test_e + url_params.linkedin + url_params.title + linkedin_default_title + url_params.summary + linkedin_default_summary + url_params.source + linkedin_default_source);

// no container
_test ({
	name: "li - no container + url + title",
	class_tag: class_tags.linkedin + tags.no_container + tags.url_title,
	expected_url: windowData.open + encodedURL_url_title + windowData.linkedin + windowData.dimensions + windowData.close
});

_test ({
	name: "li - no container + url + no title",
	class_tag: class_tags.linkedin + tags.no_container + tags.url,
	expected_url: windowData.open + encodedURL_url_no_title + windowData.linkedin + windowData.dimensions + windowData.close
});

_test ({
	name: "li - no container + no url + no title",
	class_tag: class_tags.linkedin + tags.no_container + tags.no_url_no_title,
	expected_url: windowData.open + encodedURL_no_url_no_title + windowData.linkedin + windowData.dimensions + windowData.close
});

_test ({
	name: "li - no container + url + title + summary",
	class_tag: class_tags.linkedin + tags.no_container + tags.url + tags.title + tags.summary,
	expected_url: windowData.open + encodedURL_summary  + windowData.linkedin + windowData.dimensions + windowData.close
});

_test ({
	name: "li - no container + url + title + summary + source",
	class_tag: class_tags.linkedin + tags.no_container + tags.url + tags.title + tags.summary + tags.source,
	expected_url: windowData.open + encodedURL_source  + windowData.linkedin + windowData.dimensions + windowData.close
});

// with container
_test ({
	name: "li - container + url + title",
	class_tag: class_tags.linkedin + tags.container + tags.url_title,
	expected_url: windowData.open + encodedURL_url_title + windowData.linkedin + windowData.dimensions + windowData.close
});

_test ({
	name: "li - container + url + no title",
	class_tag: class_tags.linkedin + tags.container + tags.url,
	expected_url: windowData.open + encodedURL_url_no_title_w + windowData.linkedin + windowData.dimensions + windowData.close
});

_test ({
	name: "li - container + no url + no title",
	class_tag: class_tags.linkedin + tags.container + tags.no_url_no_title,
	expected_url: windowData.open + encodedURL_no_url_no_title_w + windowData.linkedin + windowData.dimensions + windowData.close
});

_test ({
	name: "li - container + url + title + summary",
	class_tag: class_tags.linkedin + tags.container + tags.url + tags.title + tags.summary,
	expected_url: windowData.open + encodedURL_summary  + windowData.linkedin + windowData.dimensions + windowData.close
});

_test ({
	name: "li - container + url + title + summary + source",
	class_tag: class_tags.linkedin + tags.container + tags.url + tags.title + tags.summary + tags.source,
	expected_url: windowData.open + encodedURL_source  + windowData.linkedin + windowData.dimensions + windowData.close
});