(function($) {

	'use strict';

	var _test_setup = {
		setup: function() {
			$(document).quickShare();
		}
	};

	var localhost_url = escape('http://localhost:3000/qs_test.html'),
		test_site_url = escape('http://www.test.com/'),
		container_param = escape('container/'),
		container_tag = '-c',
		no_container_tag = '-nc',
		title_only_tag = '-t',
		url_only_tag = '-u',
		url_and_title_tag = '-ut',
		no_title_no_url_tag = '-x',
		default_title = escape('Sharing: ');

	module('facebook-share tests', _test_setup);

	var facebook_share_url = 'https://www.facebook.com/sharer/sharer.php?u=',
		facebook_class_id = '.test-fbs';

	//without container

	test('fb-s no container with url + title', function() {
		var $link = $(facebook_class_id + no_container_tag + url_and_title_tag);
		$link.trigger('click');
		equal($link.attr('href'), facebook_share_url + test_site_url +'facebook');
	});

	test('fb-s no container with url + no title', function() {
		var $link = $(facebook_class_id + no_container_tag + url_only_tag);
		$link.trigger('click');
		equal($link.attr('href'), facebook_share_url + test_site_url +'facebook');
	});

	test('fb-s no container with no url + no title', function() {
		var $link = $(facebook_class_id + no_container_tag + no_title_no_url_tag);
		$link.trigger('click');
		equal($link.attr('href'), facebook_share_url + localhost_url);
	});

	test('fb-s no container with no url + title', function() {
		var $link = $(facebook_class_id + no_container_tag + title_only_tag);
		$link.trigger('click');
		equal($link.attr('href'), facebook_share_url + localhost_url);
	});

	//with container

	test('fb-s with container with url + title', function() {
		var $link = $(facebook_class_id + container_tag + url_and_title_tag);
		$link.trigger('click');
		equal($link.attr('href'), facebook_share_url + test_site_url + 'facebook');
	});

	test('fb-s with container with url + no title', function() {
		var $link = $(facebook_class_id + container_tag + url_only_tag);
		$link.trigger('click');
		equal($link.attr('href'), facebook_share_url + test_site_url +'facebook');
	});

	test('fb-s with container with no url + no title', function() {
		var $link = $(facebook_class_id + container_tag + no_title_no_url_tag);
		$link.trigger('click');
		equal($link.attr('href'), facebook_share_url + test_site_url + container_param + 'facebook');
	});

	test('fb-s with container with no url + title', function() {
		var $link = $(facebook_class_id + container_tag + title_only_tag);
		$link.trigger('click');
		equal($link.attr('href'), facebook_share_url + test_site_url + container_param + 'facebook');
	});

	module('twitter tests', _test_setup);

	var twitter_share_url = 'https://twitter.com/intent/tweet?url=',
		twitter_class_id = '.test-tw',
		via_tag = '-v',
		tweet_body_tag = '-tb',
		via_param = '&via=',
		tweet_body_param = '&text=',
		tweet_body_text = escape('This is my 1st sharing!!! : '),
		via_username = escape('thetmkay'),
		twitter_no_container_title = escape('tw no container'),
		twitter_with_container_title = escape('tw with container');


	//without container

	test('tw no container with url + title', function() {
		var $link = $(twitter_class_id + no_container_tag + url_and_title_tag);
		$link.trigger('click');
		equal($link.attr('href'), twitter_share_url + test_site_url +'twitter' + tweet_body_param + twitter_no_container_title);
	});

	test('tw no container with url + no title', function() {
		var $link = $(twitter_class_id + no_container_tag + url_only_tag);
		$link.trigger('click');
		equal($link.attr('href'), twitter_share_url + test_site_url +'twitter' + tweet_body_param + default_title);
	});

	test('tw no container with url + title + tweet_body', function() {
		var $link = $(twitter_class_id + no_container_tag + url_and_title_tag + tweet_body_tag);
		$link.click();
		equal($link.attr('href'), twitter_share_url + test_site_url +'twitter' + tweet_body_param + tweet_body_text);
	});

	test('tw no container with url + no title + tweet_body', function() {
		var $link = $(twitter_class_id + no_container_tag + url_only_tag + tweet_body_tag);
		$link.trigger('click');
		equal($link.attr('href'), twitter_share_url + test_site_url +'twitter' + tweet_body_param + tweet_body_text);
	});

	test('tw no container with url + title + via', function() {
		var $link = $(twitter_class_id + no_container_tag + url_and_title_tag + via_tag);
		$link.click();
		equal($link.attr('href'), twitter_share_url + test_site_url +'twitter' + tweet_body_param + twitter_no_container_title + via_param + via_username);
	});

	test('tw no container with no url + no title', function() {
		var $link = $(twitter_class_id + no_container_tag + no_title_no_url_tag);
		$link.trigger('click');
		equal($link.attr('href'), twitter_share_url + localhost_url + tweet_body_param + default_title);
	});

	test('tw no container with no url + title', function() {
		var $link = $(twitter_class_id + no_container_tag + title_only_tag);
		$link.trigger('click');
		equal($link.attr('href'), twitter_share_url + localhost_url + tweet_body_param + twitter_no_container_title);
	});

	//with container

	test('tw with container with url + title', function() {
		var $link = $(twitter_class_id + container_tag + url_and_title_tag);
		$link.trigger('click');
		equal($link.attr('href'), twitter_share_url + test_site_url +'twitter' + tweet_body_param + twitter_with_container_title);
	});

	test('tw with container with url + with title', function() {
		var $link = $(twitter_class_id + container_tag + url_only_tag);
		$link.trigger('click');
		equal($link.attr('href'), twitter_share_url + test_site_url +'twitter' + tweet_body_param + twitter_with_container_title);
	});

	test('tw with container with url + title + tweet_body', function() {
		var $link = $(twitter_class_id + container_tag + url_and_title_tag + tweet_body_tag);
		$link.trigger('click');
		equal($link.attr('href'), twitter_share_url + test_site_url +'twitter' + tweet_body_param + tweet_body_text);
	});

	test('tw with container with url + no title + tweet_body', function() {
		var $link = $(twitter_class_id + container_tag + url_only_tag + tweet_body_tag);
		$link.trigger('click');
		equal($link.attr('href'), twitter_share_url + test_site_url +'twitter' + tweet_body_param + tweet_body_text);
	});

	test('tw with container with url + title + via', function() {
		var $link = $(twitter_class_id + container_tag + url_and_title_tag + via_tag);
		$link.trigger('click');
		equal($link.attr('href'), twitter_share_url + test_site_url +'twitter' + tweet_body_param + twitter_with_container_title + via_param + via_username);
	});

	test('tw with container with no url + no title', function() {
		var $link = $(twitter_class_id + container_tag + no_title_no_url_tag);
		$link.trigger('click');
		equal($link.attr('href'), twitter_share_url + test_site_url + container_param + "twitter" +  tweet_body_param + twitter_with_container_title);
	});

	test('tw with container with no url + title', function() {
		var $link = $(twitter_class_id + container_tag + title_only_tag);
		$link.trigger('click');
		equal($link.attr('href'), twitter_share_url + test_site_url + container_param + "twitter" + tweet_body_param + twitter_with_container_title);
	});

	module('google-plus-share tests', _test_setup);

	var google_plus_share_url = 'https://plus.google.com/share?url=',
		google_plus_class_id = '.test-gps';

	//without container

	test('gp-s no container with url + title', function() {
		var $link = $(google_plus_class_id + no_container_tag + url_and_title_tag);
		$link.trigger('click');
		equal($link.attr('href'), google_plus_share_url + test_site_url +'google-plus');
	});

	test('gp-s no container with url + no title', function() {
		var $link = $(google_plus_class_id + no_container_tag + url_only_tag);
		$link.trigger('click');
		equal($link.attr('href'), google_plus_share_url + test_site_url +'google-plus');
	});

	test('gp-s no container with no url + no title', function() {
		var $link = $(google_plus_class_id + no_container_tag + no_title_no_url_tag);
		$link.trigger('click');
		equal($link.attr('href'), google_plus_share_url + localhost_url);
	});

	test('gp-s no container with no url + title', function() {
		var $link = $(google_plus_class_id + no_container_tag + title_only_tag);
		$link.trigger('click');
		equal($link.attr('href'), google_plus_share_url + localhost_url);
	});

	//with container

	test('gp-s with container with url + title', function() {
		var $link = $(google_plus_class_id + container_tag + url_and_title_tag);
		$link.trigger('click');
		equal($link.attr('href'), google_plus_share_url + test_site_url + 'google-plus');
	});

	test('gp-s with container with url + no title', function() {
		var $link = $(google_plus_class_id + container_tag + url_only_tag);
		$link.trigger('click');
		equal($link.attr('href'), google_plus_share_url + test_site_url +'google-plus');
	});

	test('gp-s with container with no url + no title', function() {
		var $link = $(google_plus_class_id + container_tag + no_title_no_url_tag);
		$link.trigger('click');
		equal($link.attr('href'), google_plus_share_url + test_site_url + container_param + 'google-plus');
	});

	test('gp-s with container with no url + title', function() {
		var $link = $(google_plus_class_id + container_tag + title_only_tag);
		$link.trigger('click');
		equal($link.attr('href'), google_plus_share_url + test_site_url + container_param + 'google-plus');
	});

	module('container tests', _test_setup);

	console.log("done testing");

})(jQuery);
