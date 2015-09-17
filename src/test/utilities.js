var defaults = {
	title: encodeURIComponent("Sharing: "),
	username: encodeURIComponent("thetmkay"),
	tweet_body: _rawUrlEncode("This is my 1st sharing!!! : "),
	address: "thetmkay@gmail.com",
	multi_address: "thetmkay@gmail.com,george@upstatement.com,george.nishimura_1@outlook.com",
	subject: encodeURIComponent("subject header"),
	mail_body: encodeURIComponent("mail body")
};

var tags = {
	container: "-c",
	no_container: "-nc",
	title: "-t",
	url: "-u",
	url_title: "-ut",
	no_url_no_title: "-x",
	via: "-v",
	tweet_body: "-tb",
	mail_body: "-mb",
	subject: "-s",
	summary: "-sm",
	source: "-so",
	send_to: "-st",
	multiple: "N",
	blank: "B"
};

var urls = {
	test_e: encodeURIComponent("http://www.test.com/"),
	localhost_e: encodeURIComponent("http://localhost:3000/test/qs_test.html"),
	fb_share: "https://www.facebook.com/sharer/sharer.php?u=",
	twitter: "https://twitter.com/intent/tweet?url=",
	gp_share: "https://plus.google.com/share?url=",
	mailto: "mailto:",
	linkedin: "http://www.linkedin.com/shareArticle?mini=true&url="
};

var url_params = {
	via: "&via=",
	tweet_body: "&text=",
	container: encodeURIComponent("container/"),
	mail_body: "?body=",
	subject: "&subject=",
	title: "&title=",
	summary: "&summary=",
	source: "&source=",
	fb_share: "facebook",
	gp_share: "google-plus",
	twitter: "twitter",
	mailto: "mailto",
	linkedin: "linkedin"
};

var class_tags = {
	fb_share: ".test-fbs",
	gp_share: ".test-gps",
	twitter: ".test-tw",
	mailto: ".test-mt",
	linkedin: ".test-li"
};

var windowData = {
	fb: "','myFacebookWin',",
	twitter: "','myTwitterWin',",
	linkedin: "','myLinkedinWin',",
	dimensions: "'width=620,height=350'",
	open: "javascript:window.open('",
	close: "); void(0)"
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
		quickShare();
	}
};

var _module = function(name) {
	module(name, _test_setup);
};

function _rawUrlEncode(_value) {
    _value = (_value + '').toString();
    
    return encodeURIComponent(_value)
    .replace(/!/g, '%21')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/\*/g, '%2A')
    .replace(/" "/g, '%20');
};

function _rawUrlDecode(_value) {
    return decodeURIComponent(_value)
    .replace(/%20/g, ' ');
};
