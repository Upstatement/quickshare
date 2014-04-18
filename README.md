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

The goal of QuickShare is to have as much of the customisation and mark-up left in the CSS/HTML, free to manipulate without navigating Javascript APIs. It uses simple links to share URLs, with different levels of customisation available depending on the social media plug-in.

To use QuickShare, simply download the script and include it with your script tag after including jQuery

	<script src="jquery.js"></script>
	<script src="jquery.quickshare.js"></script>

Then in a <script></script> tag or in your javascript function, include the lines


	$(document).ready(function() {
		 $(document).quickShare();
	});


Overarching Implementation
---------

QuickShare is designed to convert links in to share buttons, and will only look at links within the scope given to it. For example, if the scope is the whole page, then you can use

	$(document).quickShare();

If you want to contain QuickShare to look for links only in the body of the page, you can instead write

	$('body').quickShare();

QuickShare does not require any parameters and all settings are configured through the appropriate markup defined in the HTML



Here's the simplest example

	<a class='qs-link' data-service='twitter'>Twitter</a>

This will create a link to post the current url on the page to Twitter, with the message 'Sharing: *http://current-url-of-the-page.com*'

If you want to share a specific url, you can define the `data-url` attribute

	<a class='qs-link' data-service='twitter' data-url='http://specific-url.com'>Twitter</a>

If you want to share a specific url with a large array of different social media, you can also use a 'master' container

	<div class='qs-master' data-url='http://specific-url.com'>
		<a class='qs-link' data-service='twitter' >Twitter</a>
		<a class='qs-link' data-service='facebook-share'>Facebook</a>
	</div>

You can use multiple master containers on the same page, but the chain of command is closest to the link has preference. The link tag has ultimate authority, and can override any 'master' settings.

For example the following will link to *http://child-url.com*

	<div class='qs-master' data-url='http://master-url.com'>
		<a class='qs-link' data-service='twitter' http://child-url.com>Twitter</a>
	</div>

And the following will link to *http://master-url.com*

	<div class='qs-master' data-url='http://super-master-url.com'>
		<div class='qs-master' data-url='http://master-url.com'>
			<a class='qs-link' data-service='twitter'>Twitter</a>
		</div>
	</div>

Any customisation of the content that gets shared takes the form of data attributes on the link tag. Below is a table showing what customisation options are available for each service and their defaults.


