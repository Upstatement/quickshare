_module('pinterest tests');

var image_link = encodeURIComponent("http://cdn.upstatement.com/wp-content/uploads/2013/08/stevens-book.jpg"),
	pinterest_default_description = encodeURIComponent("Pinterest description"),
	pinterest_default_description_w = encodeURIComponent("Pinterest description container");

// no container
_test ({
	name: "P - no container + url + media + description",
	class_tag: class_tags.pinterest + tags.no_container + tags.url + tags.media + tags.description,
	expected_url: urls.pinterest + urls.test_e + url_params.pinterest + url_params.media + image_link + url_params.description + pinterest_default_description
});

_test ({
	name: "P - no container + no url + media + description",
	class_tag: class_tags.pinterest + tags.no_container + tags.media + tags.description,
	expected_url: urls.pinterest + urls.localhost_e + url_params.media + image_link + url_params.description + pinterest_default_description
});

// with container 
_test ({
	name: "P - container + url + media + description",
	class_tag: class_tags.pinterest + tags.container + tags.url + tags.media + tags.description,
	expected_url: urls.pinterest + urls.test_e + url_params.pinterest + url_params.media + image_link + url_params.description + pinterest_default_description
});

_test ({
	name: "P - container + no url + media + description",
	class_tag: class_tags.pinterest + tags.container + tags.media + tags.description,
	expected_url: urls.pinterest + urls.test_e + url_params.container + url_params.pinterest + url_params.media + image_link + url_params.description + pinterest_default_description
});

_test ({
	name: "P - container + no url + no media + no description",
	class_tag: class_tags.pinterest + tags.container,
	expected_url: urls.pinterest + urls.test_e + url_params.container + url_params.pinterest + url_params.media + image_link + url_params.description + pinterest_default_description_w
});