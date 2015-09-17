_module('facebook share tests');

//without container

_test({
	name: 'fbs - no container + url + title',
	class_tag: class_tags.fb_share + tags.no_container + tags.url_title,
	expected_url: windowData.open + urls.fb_share + urls.test_e + url_params.fb_share + windowData.fb + windowData.dimensions + windowData.close 
});

_test({
	name: 'fbs - no container + url + no title',
	class_tag: class_tags.fb_share + tags.no_container + tags.url,
	expected_url: windowData.open + urls.fb_share + urls.test_e + url_params.fb_share + windowData.fb + windowData.dimensions + windowData.close 
});

_test({
	name: 'fbs - no container + no url + no title',
	class_tag: class_tags.fb_share + tags.no_container + tags.no_url_no_title,
	expected_url: windowData.open + urls.fb_share + urls.localhost_e + windowData.fb + windowData.dimensions + windowData.close 
});

_test({
	name: 'fbs - no container + no url + title',
	class_tag: class_tags.fb_share + tags.no_container + tags.title,
	expected_url: windowData.open + urls.fb_share + urls.localhost_e + windowData.fb + windowData.dimensions + windowData.close 
});

//with container

_test({
	name: 'fbs - container + url + title',
	class_tag: class_tags.fb_share + tags.container + tags.url_title,
	expected_url: windowData.open + urls.fb_share + urls.test_e + url_params.fb_share + windowData.fb + windowData.dimensions + windowData.close 
});

_test({
	name: 'fbs - container + url + no title',
	class_tag: class_tags.fb_share + tags.container + tags.url,
	expected_url: windowData.open + urls.fb_share + urls.test_e + url_params.fb_share + windowData.fb + windowData.dimensions + windowData.close 
});

_test({
	name: 'fbs - container + no url + no title',
	class_tag: class_tags.fb_share + tags.container + tags.no_url_no_title,
	expected_url: windowData.open + urls.fb_share + urls.test_e + url_params.container + url_params.fb_share + windowData.fb + windowData.dimensions + windowData.close 
});

_test({
	name: 'fbs - container + no url + title',
	class_tag: class_tags.fb_share + tags.container + tags.title,
	expected_url: windowData.open + urls.fb_share + urls.test_e + url_params.container + url_params.fb_share + windowData.fb + windowData.dimensions + windowData.close
});
