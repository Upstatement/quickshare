QuickShare
==========

QuickShare is a simple and quick JS library to share content through social media services with near full control on style and content **without any (real) JavaScript needing to be written**.

Services Supported
------------------

* Twitter
* Facebook (sharing)
* Google Plus (sharing)
* Email (through native desktop mail client)
* Reddit
* Hacker News
* LinkedIn
* Pinterest



## Installation 

### Copy & Paste

To install QuickShare, simply download the script `quickshare.js` (or for the minified version `quickshare.min.js`) from this repository, copy it to an appropriate directory.

```html
<script src="path_to_directory/quickshare.js"></script>
```

### Bower

To install QuickShare with Bower, use the command

```sh
bower install --save QuickShare
```

```html
<script src="path_to_bower_directory/bower_components/QuickShare/quickshare.js"></script>
```

## Usage

To activate QuickShare, simply call the QuickShare funtion in a JavaScript file:

```javascript
quickShare();
```

Once activated, QuickShare will add or update the `href` attribute of any targeted anchor tags with a given share URL.

To define a QuickShare link, add `qs-link` to the class attribute of an anchor tag. Define the sharing service by adding the attribute `data-qs-service` and set the value to the share service you wish to use. (see the [reference](https://github.com/Upstatement/quickshare/wiki/Service-Attributes-Reference) for more details).

Here's a simple example:

```html
<a class="qs-link" data-qs-service="twitter">Twitter</a>
```

[Boom](https://twitter.com/intent/tweet?url=https%3A//github.com/Upstatement/quickshare&text=Sharing%3A%20). This will open Twitter with a ready-to-publish tweet stating:

	Sharing: *current-url-of-the-page*

If you want to share a specific URL, you can define a `data-qs-url` attribute on the anchor tag:

```html
<a class="qs-link" data-qs-service="twitter" data-qs-url="http://specific-url.com">Twitter</a>
```

To further customize a sharing link please see [Service Attributes Reference](https://github.com/Upstatement/quickshare/wiki/Service-Attributes-Reference) to learn more.

## Advanced Usage


### Share Containers

If you want to share a specific URL amongst an array of different social media options, you can avoid duplicate data attribute tags by adding `qs-container` to the class attribute of the parent element.

Here's an example:

```html
<div class="qs-container" data-qs-url="http://specific-url.com">
	<a class="qs-link" data-qs-service="twitter">Twitter</a>
	<a class="qs-link" data-qs-service="facebook-share">Facebook</a>
	<a class="qs-link" data-qs-service="mailto">Facebook</a>
</div>
```

All QuickShare links that are children of the `.qs-container` class will share the link `http://specific-url.com`.

You can also use multiple share containers on the same page, but the URL defined closest to the link has preference. The anchor tag has ultimate authority and can override any of its container's settings.

In the following example, `http://share-url.com`, will be the URL shared by the share link:

```html
<div class="qs-container" data-qs-url="http://container-url.com">
	<a class="qs-link" data-qs-service="twitter" data-qs-url="http://share-url.com">Twitter</a>
</div>
```

In contrast, `http://container-url.com`, will be the URL shared in the example shown below:

```html
<div class="qs-container" data-qs-url="http://another-container-url.com">
	<div class="qs-container" data-qs-url="http://container-url.com">
		<a class="qs-link" data-qs-service="twitter">Twitter</a>
	</div>
</div>
```

QuickShare title and suffix data atrributes can also be shared via QuickShare containers.

In the example below, the link will share the URL `http://container-url.com` with the title `Example Title` and the suffix `/example-suffix`, even though they are defined on different container elements:

```html
<div class="qs-container" data-qs-url="http://container-url.com" data-qs-title="Unused Title" data-qs-suffix="/example-suffix">
	<div class="qs-container" data-qs-title="Example Title">
		<a class="qs-link" data-qs-service="twitter">Twitter</a>
	</div>
</div>
```

Currently, QuickShare containers only support three attributes: `data-qs-url`, `data-qs-suffix` and `data-qs-title`.

### Count

QuickShare also plugs into exisiting APIs to find out how many times a URL has been shared on a certain social media service. Unfortunately, the current list of share services is fairly short:

* Reddit (upvotes)
* Hacker News (points)

There are more specific details about implementation in the [Attributes Reference](https://github.com/Upstatement/quickshare/wiki/Service-Attributes-Reference) for each service. In brief, QuickShare will asynchronously fetch the count value, and return that value in an HTML element of your choice.

To choose the HTML element in which you want the share count to render, use the `data-qs-count-selector` attribute. When this attribute is specified, only then will QuickShare try and fetch the count value (meaning if you don't want it, there won't be any unnecessary data-fetching). The value passed to the `data-qs-count-selector` attribute represents the CSS selector that will be targeted when the share count is returned. **NOTE**: Always remember to be careful when specifying the selector - QuickShare could overwrite some other important value if it also has the same selector. Example selectors are: `.my-share-selector` or `#reddit-share-count`. Essentially, any selector that works with JavaScript's `querySelector` will work as a seletor value in this case ([follow this link to learn about querySelector selectors](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)).

### Icons

As an additional feature of QuickShare, [Font Awesome's](http://fontawesome.io/) social media icons can easily be integrated with a share link. In order to do this, Font-Awesome needs to be included with your project. A simple way to do this is by adding the subsequent link tag to the `<head>` element of your HTML document:

```html
<link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet">
```

For other ways to include Font-Awesome's stylesheets, check out their ['Get Started' guide](http://fontawesome.io/get-started/).

To render the social icon of a QuickShare link, add an `<i>` element with the class attribute `qs-icon` as a child to the anchor tag:

```html
<a class="qs-link" data-qs-service="twitter">
	<i class="qs-icon"></i>
	Twitter
</a>
```

Version History
--------------
* 09/21/15 - 1.3.7 - Code cleanup
* 09/18/15 - 1.3.6 - Test revisions
* 09/15/15 - 1.3.5 - Encoding fixes
* 08/03/15 - 1.3.4 - Twitter character escaping
* 07/06/15 - 1.3.3 - Added window fix for IE9
* 02/16/15 - 1.3.0 - Added sizes to
* 05/06/14 - 1.2.0 - Added LinkedIn Support
* 05/05/14 - 1.1.2 - Fixed Nested Containers
* 05/05/14 - 1.1.1 - Remove debug statements
* 02/05/14 - 1.1.0 - Added Support for Hacker News and Reddit
* 01/05/14 - 1.0.1 - Bower Release
* 30/04/14 - 0.0.1

Anything else?
--------------

Check out the [wiki](https://github.com/Upstatement/quickshare/wiki)!

*Copyright of Upstatement 2014*

