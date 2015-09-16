_module('twitter tests');

var twitter_no_container_title = encodeURIComponent('tw no container'),
	twitter_with_container_title = encodeURIComponent('tw with container'),
	encodedURL_title = encodeURIComponent(urls.twitter + urls.test_e + url_params.twitter + url_params.tweet_body + twitter_no_container_title),
	encodedURL_title_w = encodeURIComponent(urls.twitter + urls.test_e + url_params.twitter + url_params.tweet_body + twitter_with_container_title),
	encodedURL_default_title = encodeURIComponent(urls.twitter + urls.test_e + url_params.twitter + url_params.tweet_body + defaults.title),
	encodedURL_default_tweet_body = encodeURIComponent(urls.twitter + urls.test_e + url_params.twitter + url_params.tweet_body + defaults.tweet_body),
	encodedURL_via = encodeURIComponent(urls.twitter + urls.test_e + url_params.twitter + url_params.tweet_body + twitter_no_container_title + url_params.via + defaults.username),
	encodedURL_via_w = encodeURIComponent(urls.twitter + urls.test_e + url_params.twitter + url_params.tweet_body + twitter_with_container_title + url_params.via + defaults.username);

_test({
		name: 'tw - no container + url + title',
		class_tag: class_tags.twitter + tags.no_container + tags.url_title,
		expected_url: windowData.open + encodedURL_title + windowData.twitter + windowData.dimensions + windowData.close
});

_test({
		name: 'tw - no container + url + no title',
		class_tag: class_tags.twitter + tags.no_container + tags.url,
		expected_url: windowData.open + encodedURL_default_title + windowData.twitter + windowData.dimensions + windowData.close
});

_test({
		name: 'tw - no container + url + title + tweet_body',
		class_tag: class_tags.twitter + tags.no_container + tags.url_title + tags.tweet_body,
		expected_url: windowData.open + encodedURL_default_tweet_body + windowData.twitter + windowData.dimensions + windowData.close
});

_test({
		name: 'tw - no container + url + no title + tweet_body',
		class_tag: class_tags.twitter + tags.no_container + tags.url + tags.tweet_body,
		expected_url: windowData.open + encodedURL_default_tweet_body + windowData.twitter + windowData.dimensions + windowData.close
});

_test({
		name: 'tw - no container + url + title + via',
		class_tag: class_tags.twitter + tags.no_container + tags.url_title + tags.via,
		expected_url: windowData.open + encodedURL_via + windowData.twitter + windowData.dimensions + windowData.close
});

_test({
		name: 'tw - no container + no url + no title',
		class_tag: class_tags.twitter + tags.no_container + tags.no_url_no_title,
		expected_url: urls.twitter + urls.localhost_e + url_params.tweet_body + defaults.title
});

_test({
		name: 'tw - no container + no url + title',
		class_tag: class_tags.twitter + tags.no_container + tags.title,
		expected_url: urls.twitter + urls.localhost_e + url_params.tweet_body + twitter_no_container_title
});

//with container

_test({
		name: 'tw - container + url + title',
		class_tag: class_tags.twitter + tags.container + tags.url_title,
		expected_url: windowData.open + encodedURL_title_w + windowData.twitter + windowData.dimensions + windowData.close
});

_test({
		name: 'tw - container + url + no title',
		class_tag: class_tags.twitter + tags.container + tags.url,
		expected_url: windowData.open + encodedURL_title_w + windowData.twitter + windowData.dimensions + windowData.close
});

_test({
		name: 'tw - container + url + title + tweet_body',
		class_tag: class_tags.twitter + tags.container + tags.url_title + tags.tweet_body,
		expected_url: windowData.open + encodedURL_default_tweet_body + windowData.twitter + windowData.dimensions + windowData.close
});

_test({
		name: 'tw - container + url + no title + tweet_body',
		class_tag: class_tags.twitter + tags.container + tags.url + tags.tweet_body,
		expected_url: windowData.open + encodedURL_default_tweet_body + windowData.twitter + windowData.dimensions + windowData.close
});

_test({
		name: 'tw - container + url + title + via',
		class_tag: class_tags.twitter + tags.container + tags.url_title + tags.via,
		expected_url: windowData.open + encodedURL_via_w + windowData.twitter + windowData.dimensions + windowData.close
});

_test({
		name: 'tw - container + no url + no title',
		class_tag: class_tags.twitter + tags.container + tags.no_url_no_title,
		expected_url: urls.twitter + urls.test_e + url_params.container + url_params.twitter + url_params.tweet_body + twitter_with_container_title
});

_test({
		name: 'tw - container + no url + title',
		class_tag: class_tags.twitter + tags.container + tags.title,
		expected_url: urls.twitter + urls.test_e + url_params.container + url_params.twitter + url_params.tweet_body + twitter_with_container_title
});
