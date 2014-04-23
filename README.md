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

QuickShare is designed to convert links in to share buttons, and will only look at links within the scope given to it. For example, if the scope is the whole page, then you can use

```javascript
$(document).quickShare();
```

If you want to contain QuickShare to look for links only in a specific part of the HTML document, such as the body of the page, you can instead write

```javascript
$('body').quickShare();
```

The jQuery quickShare() function does not require any parameters as all settings are configured through the appropriate markup defined in the HTML document.

To define a link as a share link, add the class attribute `qs-link` to the link tag.

Here's the simplest example

```html
<a class="qs-link" data-service="twitter">Twitter</a>
```

[Boom](https://twitter.com/intent/tweet?url=https%3A//github.com/Upstatement/quickshare&text=Sharing%3A%20). This will open up Twitter with a ready-to-publish tweet saying

	Sharing: *current-url-of-the-page*

If you want to share a specific URL, you can define the `data-url` attribute on the link tag

```html
<a class="qs-link" data-service="twitter" data-url="http://specific-url.com">Twitter</a>
```

Share Containers
-----------------

If you want to share a specific URL with an array of different social media options, you can avoid duplicated data attribute tags by using a share container, using a parent HTML element with the class attribute `qs-container`.

Here's a simple example

```html
<div class="qs-container" data-url="http://specific-url.com">
	<a class="qs-link" data-service="twitter">Twitter</a>
	<a class="qs-link" data-service="facebook-share">Facebook</a>
</div>
```

You can use multiple share containers on the same page, and even nested containers, but the chain of command is closest to the link has preference. The link tag has ultimate authority and can override any of its container's settings.

For example the following will share the link `http://share-url.com`

```html
<div class="qs-container" data-url="http://container-url.com">
	<a class="qs-link" data-service="twitter" data-url="http://share-url.com">Twitter</a>
</div>
```

And the following will share the link `http://container-url.com`

```html
<div class="qs-container" data-url="http://another-container-url.com">
	<div class="qs-container" data-url="http://container-url.com">
		<a class="qs-link" data-service="twitter">Twitter</a>
	</div>
</div>
```

Share containers currently only have two attributes: `data-url` and `data-title`

Attributes Reference
-------------------------------

Any customisation of the content that gets shared takes the form of data attributes on the link tag. The values of the attributes do not have to be percent-escaped.

###Common

*The following attributes are used for all social media*

##### URL

`data-url="http://url"`

The url to share. The default is the value of `window.location.href`, the current window's URL, although it is highly recommended to override this value as it is better to have a descriptive, permanent URL used when sharing on social media.

##### Title

`data-title="title"`

The title of the content to share. This field is not always used by every service but it is recommended that it is defined. The default is `Sharing: `.

##### Target

`target="value"`

This is a link tag attribute as [defined by W3C](http://www.w3schools.com/tags/att_a_target.asp) and tells the browser how the link should be opened (eg in a new window/tab). The possible relevant values for the attribute are:

* `_blank` - open link in new window or tab
* `_self` - open link in same window (default)

###Twitter

`data-service="twitter"`

To share content on Twitter, Twitter exposes an endpoint to compose a tweet using the user's current logged-in account, with a fully customisible message.

####Attributes

##### Tweet Body

`data-tweet-body="message"`

The message you want to tweet. If not defined, it defaults to the value of the `data-title` attribute. The shared URL will follow directly after the tweet.

##### Via Username

`data-via-username="username"`

The Twitter username intended as the account who linked the content. Will append "via @*username*" to the end of the tweet. Twitter handles resolving the username after the user posts the tweet. This parameter is optional, default is for it not to be included in the message.

###Facebook (sharing)

`data-service="facebook-share"`

To share content on Facebook, QuickShare links to the Facebook share endpoint, which opens up a new post dialogue to share a link through the currently logged-in user's account. Facebook will automatically fill out the information (including thumbnail and blurb) using information gathered through its Open Graph web crawler, based on the shared URL. To learn how to optimize for Facebook's Open Graph, visit their ['Sharing Best Practices' guide](https://developers.facebook.com/docs/opengraph/howtos/maximizing-distribution-media-content/).

####Attributes

*no additional attributes*

###Google Plus (sharing)

`data-service="google-plus-share"`

To share content on Google Plus, QuickShare links to the Google Plus Share endpoint, which opens up a dialogue to share a link through the currently logged-in user's account. Google Plus will automatically fill out the snippet (thumbnail, etc) attached to the post based on the shared URL, using information gathered through its web crawler. To learn how to optimize for Google Plus's web crawler, visit their [snippet guide](https://developers.google.com/+/web/snippet/).

####Attributes

*no additional attributes*

###E-Mail

`data-service="mailto"`

To share through e-mail, QuickShare currently relies on a native mail client to handle the sending of the email. Therefore the link will simply open up the default mail client installed on the client device, with a customisable set of fields already filled out. QuickShare uses the URI scheme `mailto`, which means the  tag will look like:

```html
<a href="mailto:receiver@gmail.com?body=message&subject=subject">
```
####Attributes

#####Mail Body

`data-mail-body="message"`

The body of the email. This defaults to the value of the `data-title` attribute followed by a space, then the value of the `data-url` attribute.

#####Subject

`data-subject="subject"`

The subject header of the email. This defaults to the value of the `data-title` attribute.

#####Send To

`data-send-to="receiver@emailclient.com"`

The email address of the account to which to send the email. To add multiple addresses, simply have each address comma separated, such as in the example below.

`data-send-to="one@example.com,two@example.com"`

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
<a class="qs-link" data-service="twitter">
	<i class="qs-icon">
	</i>
	Twitter
</a>
```

Slimming down
-------------
If performance is a big issue, there are several ways to reduce the overall size of QuickShare components.

####jQuery

Instead of including all of jQuery, you could use another jQuery-like libraries (such as [Zepto](http://zeptojs.com/)). The only jQuery functions that are used by QuickShare are:

* [$()](https://api.jquery.com/jquery/)
* [find()](https://api.jquery.com/find/)
* [children()](https://api.jquery.com/children/)
* [addClass()](https://api.jquery.com/addclass/)
* [attr()](https://api.jquery.com/attr/)
* [data()](https://api.jquery.com/data/)

Note in order for QuickShare to work, any replacement jQuery library would require the definition of these functions in an exposed variable called `jQuery`.

####QuickShare

If you do not intend to use all of the social media plug-ins available through QuickShare, a really simple way of reducing the size and clutter of the library is to remove the unnecessary code for unused social plug-ins. In order to do this, first you will need to download the project and edit the Gruntfile. The structure of the library is such that each social media plug-in is defined in its own JavaScript file in the `build/services` directory.

Go in to the Gruntfile and look for the lines:

```JavaScript
concat: {
      options: {
        separator: ';\n'
      },
      build : {
        src: ['build/utilities.js','build/services/*.js','build/quickshare.js'],
        dest: 'build/quickshare.concat.js',
        nonull: true
      },
      ...
```

Edit the line beginning with `src`. For example, if you only want to include Twitter, edit it to say

```JavaScript
src: ['build/utilities.js','build/services/twitter.js','build/quickshare.js']
```

You can list each file independently, or look at the [reference](https://github.com/gruntjs/grunt-contrib-concat) to use wildcards. Note that the files you wish to include **must be between** the `utilities.js` and `quickshare.js` files.

*If you do not wish to edit the Gruntfile, you could instead delete the plug-ins you **don't** need from the `build/services` folder*

To rebuild the library, call `grunt build`. If you also want to minify the library, call `grunt minify` after building.

*Don't forget to `npm install` from within the QuickShare directory if you have just cloned the repo (Hint: you will also need node and npm)*
