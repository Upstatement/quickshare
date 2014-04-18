QuickShare
==========

QuickShare is a simple and quick JS library to share content through social media services with near full control on style and content.

Services Supported
------------------

* Twitter
* Facebook (sharing)
* Google Plus (sharing)
* Email (through native desktop mail client)

How to Use
--------------

The goal of QuickShare is to have as much of the customisation and mark-up left in the CSS/HTML, free to manipulate without navigating Javascript APIs. It shares content using simple link tags, with different levels of customisation available depending on the social media plug-in.

To use QuickShare, simply download the script and include it with your script tag after including jQuery
```html
<script src="jquery.js"></script>
<script src="jquery.quickshare.js"></script>
```

Then in a `<script>` tag or in a separate Javascript file include the lines

```javascript
$(document).ready(function() {
	 $(document).quickShare();
});
```

Implementation
---------

QuickShare is designed to convert links in to share buttons, and will only look at links within the scope given to it. For example, if the scope is the whole page, then you can use

```javascript
$(document).quickShare();
```

If you want to contain QuickShare to look for links only in the body of the page, you can instead write

```javascript
$('body').quickShare();
```

The jQuery QuickShare function does not require any parameters and all settings are configured through the appropriate markup defined in the HTML.


Here's the simplest example

```html
<a class='qs-link' data-service='twitter'>Twitter</a>
```

[Boom](https://twitter.com/intent/tweet?url=https%3A//github.com/Upstatement/quickshare&text=Sharing%3A%20). This will open up Twitter with a ready-to-publish tweet saying

	Sharing: *current-url-of-the-page*

If you want to share a specific url, you can define the `data-url` attribute on the link tag

```html
<a class='qs-link' data-service='twitter' data-url='http://specific-url.com'>Twitter</a>
```

Share Containers
-----------------

If you want to share a specific url with an array of different social media options, you can avoid duplicated data attribute tags by using a share container

```html
<div class='qs-container' data-url='http://specific-url.com'>
	<a class='qs-link' data-service='twitter'>Twitter</a>
	<a class='qs-link' data-service='facebook-share'>Facebook</a>
</div>
```

You can use multiple share containers on the same page, but the chain of command is closest to the link has preference. The link tag has ultimate authority and can override any 'master' settings.

For example the following will share the link `http://share-url.com`

```html
<div class='qs-container' data-url='http://container-url.com'>
	<a class='qs-link' data-service='twitter' http://share-url.com>Twitter</a>
</div>
```

And the following will share the link `http://container-url.com`

```html
<div class='qs-container' data-url='http://another-container-url.com'>
	<div class='qs-container' data-url='http://container-url.com'>
		<a class='qs-link' data-service='twitter'>Twitter</a>
	</div>
</div>
```

Share containers currently only have two attributes: `data-url` and `data-title`

Service Customisation Reference
-------------------------------

Any customisation of the content that gets shared takes the form of data attributes on the link tag.

###Common attributes

The following attributes are used for all social media

`data-url`=`'url'`

The url to share. The default is `window.location.href` the current window location, although it is highly recommended to override this value as it is better to have descriptive, permanent urls used when sharing on social media.

`data-title`=`'title'`

The title of the content to share.

