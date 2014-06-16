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

How to Use
----------

The goal of QuickShare is to have as much of the customisation and mark-up left in the HTML, free to manipulate without navigating JavaScript APIs. It shares content using simple `<a>` anchor tags, with different levels of customisation available depending on the social media plug-in.

### Installation (Copy & Paste)

To install QuickShare, simply download the script `/dist/quickshare.js` (or for the minified version `/dist/quickshare.min.js`) from this repository, copy it to an appropriate directory and include it with your script tag **after** including jQuery

```html
<script src="path_to_directory/jquery.js"></script>
<script src="path_to_directory/quickshare.js"></script>
```

### Installation (Bower)

QuickShare is now registered with Bower! [Bower](http://bower.io/) is a package management tool which makes it easier to install and keep up to date your project dependencies (aka third party libraries such as QuickShare).

To install Bower, run

```sh
npm install -g bower
```

If you don't have a `bower.json`, which makes it really easy to manage your Bower dependencies, run

```sh
bower init
```

And answer the questions when prompted.

To install QuickShare with Bower, use the command

```sh
bower install --save QuickShare
```

This should create a folder called `bower_components` (if you don't like this directory, you can use a [.bowerrc](https://github.com/bower/bower#custom-install-directory) to define your own directory to install the package in to), with the `quickshare.js` file located in the `QuickShare/dist` directory (It will also download jQuery, if you didn't have it already installed).

Then, include it with your script tag **after** including jQuery

```html
<script src="path_to_bower_directory/bower_components/jquery/dist/jquery.js"></script>
<script src="path_to_bower_directory/bower_components/QuickShare/dist/quickshare.js"></script>
```

### Running QuickShare on your website

To actually use QuickShare, once you've included the file, in a `<script>` tag or in a separate JavaScript file include the lines

```javascript
quickShare();
```

QuickShare goes through your HTML and adds or updates the `href` attribute to the correct share endpoint URL. Technically, the user does not have to write anything outside of a HTML file to use all of its features as the above snippet is the only JavaScript that is needed.


To define a link as a share link, add the class attribute `qs-link` to the anchor tag with the appropriate `data-qs-service` attribute (see the [reference](https://github.com/Upstatement/quickshare/wiki/Service-Attributes-Reference) for more details).

Here's the simplest example

```html
<a class="qs-link" data-qs-service="twitter">Twitter</a>
```

[Boom](https://twitter.com/intent/tweet?url=https%3A//github.com/Upstatement/quickshare&text=Sharing%3A%20). This will open up Twitter with a ready-to-publish tweet saying

	Sharing: *current-url-of-the-page*

If you want to share a specific URL, you can define the `data-qs-url` attribute on the anchor tag

```html
<a class="qs-link" data-qs-service="twitter" data-qs-url="http://specific-url.com">Twitter</a>
```

There are more customisible data attributes listed in the [Service Attributes Reference](https://github.com/Upstatement/quickshare/wiki/Service-Attributes-Reference), including social media dependent attributes.

Advanced Usage
--------------

###Share Containers

If you want to share a specific URL with an array of different social media options, you can avoid duplicated data attribute tags by using a share container, a parent HTML element with the class attribute `qs-container`.

Here's a simple example

```html
<div class="qs-container" data-qs-url="http://specific-url.com">
	<a class="qs-link" data-qs-service="twitter">Twitter</a>
	<a class="qs-link" data-qs-service="facebook-share">Facebook</a>
</div>
```

Both the Twitter and the Facebook share links will share the link `http://specific-url.com`.

You can use multiple share containers on the same page, but the chain of command is closest to the link has preference. The anchor tag has ultimate authority and can override any of its container's settings.

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

QuickShare supports nested share containers. When trying to find out the value of a customisable field, QuickShare looks for the closest parent container with that data attribute defined.

In the example below, the link will share the url `http://container-url.com` with the title `Example Title`, even though they are defined on different container elements:

```html
<div class="qs-container" data-qs-url="http://container-url.com" data-qs-title="Unused Title">
	<div class="qs-container" data-qs-title="Example Title">
		<a class="qs-link" data-qs-service="twitter">Twitter</a>
	</div>
</div>
```

Share containers currently only have three attributes: `data-qs-url`, `data-qs-suffix` and `data-qs-title`

###Count

QuickShare also plugs into exisiting APIs to find out how many times a URL has been shared on a certain social media service. Not all social media services are supported, currently the list is

* Twitter
* Facebook (sharing)
* Reddit (upvotes)
* Hacker News (points)

There is more specific details about implementation in the [Attributes Reference](https://github.com/Upstatement/quickshare/wiki/Service-Attributes-Reference) for each service, but what QuickShare will do is asynchronously fetch the count value, and put it in a HTML element of your choice.

The corresponding data attribute takes the form `data-qs-count-selector="selector"`. If the attribute is specified, only then will it try and fetch the count value (meaning if you don't want it, there won't be any unnecessary data-fetching). The value passed in as `selector` is the CSS selector. This is used in the same way as it is used in jQuery, so they can take the form of

* HTML elements like `"p"`
* Class selectors like `".css-class"`
* ID selectors like `"#css-id"`
* pseudo classes etc - see the [jQuery guide](http://api.jquery.com/category/selectors/)

Always remember to be careful when specifying the selector - QuickShare could overwrite some other important value if it also has the same selector.

The count value is passed in as the text of the specified HTML element - therefore it will not work on `<input>` elements.

###Icons

*Note: Font Awesome Icons are not supported yet for Hacker News and Reddit*

As an additional feature of QuickShare, there is direct integration with [Font Awesome's](http://fortawesome.github.io/Font-Awesome/) social media icons, so that you can easily add the icon to the anchor tag. In order to do this, you have to include Font-Awesome, which can be as simple as adding this tag to your `<head>` element of your HTML document.

```html
<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
```

For other or better ways to include Font-Awesome's stylesheets, check out their ['Get Started' guide](http://fortawesome.github.io/Font-Awesome/get-started/).

In terms of QuickShare, the appropriate social media icon will appear if you add a child `<i>` element to your anchor tag, with the class attribute `qs-icon`.

Here's a simple example to get a share to Twitter anchor to include the icon

```html
<a class="qs-link" data-qs-service="twitter">
	<i class="qs-icon">
	</i>
	Twitter
</a>
```

Version History
--------------
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

