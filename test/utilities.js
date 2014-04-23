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
	tweet_body: '-tb',
	mail_body: '-mb',
	subject: '-s',
	send_to: '-st',
	multiple: 'N',
	blank: 'B'
};

var urls = {
	test_e: escape('http://www.test.com/'),
	localhost_e: escape('http://localhost:3000/qs_test.html'),
	fb_share: 'https://www.facebook.com/sharer/sharer.php?u=',
	twitter: 'https://twitter.com/intent/tweet?url=',
	gp_share: 'https://plus.google.com/share?url=',
	email: 'mailto:'
};

var url_params = {
	via: '&via=',
	tweet_body: '&text=',
	container: escape('container/'),
	mail_body: 'body=',
	subject: '&subject='
	fb_share: 'facebook',
	gp_share: 'google-plus',
	twitter: 'twitter',
	email: 'email'
};

var class_tags = {
	fb_share: '.test-fbs',
	gp_share: '.test-gps',
	twitter: '.test-tw',
	email: '.test-em'
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
