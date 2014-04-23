var defaults = {
	title: escape('Sharing: '),
	username: escape('thetmkay'),
	tweet_body: escape('This is my 1st sharing!!! : ')
};

var tags = {
	container: '-c',
	no_container: '-nc',
	title: '-t',
	url: '-u',
	url_title: '-ut',
	no_url_no_title: '-x',
	via: '-v',
	tweet_body: '-tb'
};

var urls = {
	test_e: escape('http://www.test.com/'),
	localhost_e: escape('http://localhost:3000/qs_test.html'),
	fb_share: ('https://www.facebook.com/sharer/sharer.php?u='),
	twitter: ('https://twitter.com/intent/tweet?url='),
	gp_share: ('https://plus.google.com/share?url=')
};

var url_params = {
	via: '&via=',
	tweet_body: '&text=',
	container: escape('container/'),
	fb_share: 'facebook',
	gp_share: 'google-plus',
	twitter: 'twitter'
};

var class_tags = {
	fb_share: '.test-fbs',
	gp_share: '.test-gps',
	twitter: '.test-tw'
};

var _test = function(test_params) {
	test(test_params.name, function() {
		var $link = $(test_params.class_tag);
		$link.trigger('click');
		equal($link.attr('href'), test_params.expected_url);
	});
};

var _test_setup = {
	setup: function() {
		$(document).quickShare();
	}
};

var _module = function(name) {
	module(name, _test_setup);
};
;
_module('facebook share tests');

//without container

_test({
		name: 'fbs - no container + url + title',
		class_tag: class_tags.fb_share + tags.no_container + tags.url_title,
		expected_url: urls.fb_share + urls.test_e + url_params.fb_share
});

_test({
		name: 'fbs - no container + url + no title',
		class_tag: class_tags.fb_share + tags.no_container + tags.url,
		expected_url: urls.fb_share + urls.test_e + url_params.fb_share
});

_test({
		name: 'fbs - no container + no url + no title',
		class_tag: class_tags.fb_share + tags.no_container + tags.no_url_no_title,
		expected_url: urls.fb_share + urls.localhost_e
});

_test({
		name: 'fbs - no container + no url + title',
		class_tag: class_tags.fb_share + tags.no_container + tags.title,
		expected_url: urls.fb_share + urls.localhost_e
});

//with container

_test({
		name: 'fbs - container + url + title',
		class_tag: class_tags.fb_share + tags.container + tags.url_title,
		expected_url: urls.fb_share + urls.test_e + url_params.fb_share
});

_test({
		name: 'fbs - container + url + no title',
		class_tag: class_tags.fb_share + tags.container + tags.url,
		expected_url: urls.fb_share + urls.test_e + url_params.fb_share
});

_test({
		name: 'fbs - container + no url + no title',
		class_tag: class_tags.fb_share + tags.container + tags.no_url_no_title,
		expected_url: urls.fb_share + urls.test_e + url_params.container + url_params.fb_share
});

_test({
		name: 'fbs - container + no url + title',
		class_tag: class_tags.fb_share + tags.container + tags.title,
		expected_url: urls.fb_share + urls.test_e + url_params.container + url_params.fb_share
});
;
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
;
_module('twitter tests');

var twitter_no_container_title = escape('tw no container'),
	twitter_with_container_title = escape('tw with container');

_test({
		name: 'tw - no container + url + title',
		class_tag: class_tags.twitter + tags.no_container + tags.url_title,
		expected_url: urls.twitter + urls.test_e + url_params.twitter + url_params.tweet_body + twitter_no_container_title
});

_test({
		name: 'tw - no container + url + no title',
		class_tag: class_tags.twitter + tags.no_container + tags.url,
		expected_url: urls.twitter + urls.test_e + url_params.twitter + url_params.tweet_body  + defaults.title
});

_test({
		name: 'tw - no container + url + title + tweet_body',
		class_tag: class_tags.twitter + tags.no_container + tags.url_title + tags.tweet_body,
		expected_url: urls.twitter + urls.test_e + url_params.twitter + url_params.tweet_body + defaults.tweet_body
});

_test({
		name: 'tw - no container + url + no title + tweet_body',
		class_tag: class_tags.twitter + tags.no_container + tags.url + tags.tweet_body,
		expected_url: urls.twitter + urls.test_e + url_params.twitter + url_params.tweet_body + defaults.tweet_body
});

_test({
		name: 'tw - no container + url + title + via',
		class_tag: class_tags.twitter + tags.no_container + tags.url_title + tags.via,
		expected_url: urls.twitter + urls.test_e + url_params.twitter + url_params.tweet_body + twitter_no_container_title + url_params.via + defaults.username
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
		expected_url: urls.twitter + urls.test_e + url_params.twitter + url_params.tweet_body + twitter_with_container_title
});

_test({
		name: 'tw - container + url + no title',
		class_tag: class_tags.twitter + tags.container + tags.url,
		expected_url: urls.twitter + urls.test_e + url_params.twitter + url_params.tweet_body + twitter_with_container_title
});

_test({
		name: 'tw - container + url + title + tweet_body',
		class_tag: class_tags.twitter + tags.container + tags.url_title + tags.tweet_body,
		expected_url: urls.twitter + urls.test_e + url_params.twitter + url_params.tweet_body + defaults.tweet_body
});

_test({
		name: 'tw - container + url + no title + tweet_body',
		class_tag: class_tags.twitter + tags.container + tags.url + tags.tweet_body,
		expected_url: urls.twitter + urls.test_e + url_params.twitter + url_params.tweet_body + defaults.tweet_body
});

_test({
		name: 'tw - container + url + title + via',
		class_tag: class_tags.twitter + tags.container + tags.url_title + tags.via,
		expected_url: urls.twitter + urls.test_e + url_params.twitter + url_params.tweet_body + twitter_with_container_title + url_params.via + defaults.username
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
