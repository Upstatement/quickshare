QuickShare
==========

QuickShare is a simple and quick JS library to share content through social media services with near full control on style and content **without any JavaScript needing to be written**.

Services Supported
------------------

* Twitter
* Facebook (sharing)
* Google Plus (sharing)
* Email (through native desktop mail client)

How to Use
--------------

The goal of QuickShare is to have as much of the customisation and mark-up left in the HTML, free to manipulate without navigating JavaScript APIs. It shares content using simple `<a>` link tags, with different levels of customisation available depending on the social media plug-in.

To use QuickShare, simply download the script and include it with your script tag **after** including jQuery

```html
<script src="jquery.js"></script>
<script src="jquery.quickshare.js"></script>
```

Then in a `<script>` tag or in a separate JavaScript file include the lines

```javascript
$(document).ready(function() {
	 $(document).quickShare();
});
```

QuickShare goes through your HTML and adds or updates the `href` attribute to the correct share endpoint URL. Technically, the user does not have to write anything outside of a HTML file to use all of its features as the above snippet is the only JavaScript that is needed.

Implementation
---------

To define a link as a share link, add the class attribute `qs-link` to the link tag with the appropriate `data-qs-service` attribute (see the reference section for more details).

Here's the simplest example

```html
<a class="qs-link" data-qs-service="twitter">Twitter</a>
```

[Boom](https://twitter.com/intent/tweet?url=https%3A//github.com/Upstatement/quickshare&text=Sharing%3A%20). This will open up Twitter with a ready-to-publish tweet saying

	Sharing: *current-url-of-the-page*

If you want to share a specific URL, you can define the `data-qs-url` attribute on the link tag

```html
<a class="qs-link" data-qs-service="twitter" data-qs-url="http://specific-url.com">Twitter</a>
```

There are more customisible data attributes listed in the [Service Attributes Reference](https://github.com/Upstatement/quickshare/wiki/Service-Attributes-Reference), including social media dependent attributes.

Share Containers
-----------------

If you want to share a specific URL with an array of different social media options, you can avoid duplicated data attribute tags by using a share container, a parent HTML element with the class attribute `qs-container`.

Here's a simple example

```html
<div class="qs-container" data-qs-url="http://specific-url.com">
	<a class="qs-link" data-qs-service="twitter">Twitter</a>
	<a class="qs-link" data-qs-service="facebook-share">Facebook</a>
</div>
```

You can use multiple share containers on the same page, and even nested containers, but the chain of command is closest to the link has preference. The link tag has ultimate authority and can override any of its container's settings.

For example the following will share the link `http://share-url.com`

```html
<div class="qs-container" data-qs-url="http://container-url.com">
	<a class="qs-link" data-qs-service="twitter" data-qs-url="http://share-url.com">Twitter</a>
</div>
```

And the following will share the link `http://container-url.com`

```html
<div class="qs-container" data-qs-url="http://another-container-url.com">
	<div class="qs-container" data-qs-url="http://container-url.com">
		<a class="qs-link" data-qs-service="twitter">Twitter</a>
	</div>
</div>
```

Share containers currently only have two attributes: `data-qs-url` and `data-qs-title`


Icons
-----

As an additional feature of QuickShare, there is direct integration with [Font Awesome's](http://fortawesome.github.io/Font-Awesome/) social media icons, so that you can easily add the icon to the link tag. In order to do this, you have to include Font-Awesome, which can be as simple as adding this tag to your `<head>` element of your HTML document.

```html
<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
```

For other or better ways to include Font-Awesome's stylesheets, check out their ['Get Started' guide](http://fortawesome.github.io/Font-Awesome/get-started/).

In terms of QuickShare, the appropriate social media icon will appear if you add a child `<i>` element to your link tag, with the class attribute `qs-icon`.

Here's a simple example to get a share to Twitter link to include the icon

```html
<a class="qs-link" data-qs-service="twitter">
	<i class="qs-icon">
	</i>
	Twitter
</a>
```

Anything else?
--------------

Check out the [wiki](https://github.com/Upstatement/quickshare/wiki)!

