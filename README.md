QuickShare
==========

**QuickShare** is a simple and quick JS library to share content through social media services with near full control on style and content with **almost no javascript needing to be written**.

Services Supported
------------------

* Twitter
* Facebook (sharing)
* Google Plus (sharing)
* Email (through native desktop mail client)

How to Use
--------------

The goal of **QuickShare** is to have as much of the customisation and mark-up left in the CSS/HTML, free to manipulate without navigating Javascript APIs. It shares content using simple link tags, with different levels of customisation available depending on the social media plug-in.

To use **QuickShare**, simply download the script and include it with your script tag after including jQuery
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

**QuickShare** goes through your HTML and adds or updates the `href` attribute to the correct share endpoint. Technically, the user does not have to write anything outside of a HTML file to use all of its features, and the above javascript snippet is the only javascript that is needed.

Implementation
---------

**QuickShare** is designed to convert links in to share buttons, and will only look at links within the scope given to it. For example, if the scope is the whole page, then you can use

```javascript
$(document).quickShare();
```

If you want to contain **QuickShare** to look for links only in the body of the page, you can instead write

```javascript
$('body').quickShare();
```

The jQuery **QuickShare** function does not require any parameters and all settings are configured through the appropriate markup defined in the HTML.


Here's the simplest example

```html
<a class="qs-link" data-service="twitter">Twitter</a>
```

[Boom](https://twitter.com/intent/tweet?url=https%3A//github.com/Upstatement/quickshare&text=Sharing%3A%20). This will open up Twitter with a ready-to-publish tweet saying

	Sharing: *current-url-of-the-page*

If you want to share a specific url, you can define the `data-url` attribute on the link tag

```html
<a class="qs-link" data-service="twitter" data-url="http://specific-url.com">Twitter</a>
```

Share Containers
-----------------

If you want to share a specific url with an array of different social media options, you can avoid duplicated data attribute tags by using a share container

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

Any customisation of the content that gets shared takes the form of data attributes on the link tag. The values of the attributes do not have to be fully escaped, but they have to be parseable in HTML as string values.

###Common

The following attributes are used for all social media

`data-url="http://url"`

The url to share. The default is `window.location.href`, the current window location, although it is highly recommended to override this value as it is better to have a descriptive, permanent url used when sharing on social media.

---

`data-title="title"`

The title of the content to share. This field is not always used by every service but it is recommended that it is defined.

---

`target="value"`

This is a link tag attribute as [defined by W3C](http://www.w3schools.com/tags/att_a_target.asp) and defines how the link will be opened by the browser (eg in a new window/tab). The possible relevant values for the attribute are:

* `_blank` - open link in new window or tab
* `_self` - open link in same window (default)

###Twitter

`data-service="twitter"`

To share content on Twitter, Twitter exposes an endpoint to compose a tweet using the user's current logged in account. The endpoint URL looks like:

`https://twitter.com/intent/tweet?url=*url*&text=*message*&via=*username*`

#####Attributes

`data-tweet-body="message"`

The message you want to send. If not defined, it defaults to the value of the `data-title` attribute. If `data-title` is also not defined, will default to 'Sharing: '.

---

`data-via-username="username"`

The Twitter username intended as the username of the account who linked the content. Will append "via @*username*" to the end of the tweet. Twitter handles resolving the username. This parameter is optional, therefore default is for it not to be included in the message.

###Facebook (sharing)

`data-service="facebook-share"`

To share content on Facebook, **QuickShare** links to the Facebook share endpoint, which opens up a dialogue to share a link through the currently logged-in user's account. Facebook will automatically fill out the information (including thumbnail and blurb) using information gathered through its Open Graph web crawler, based on the shared url. To learn how to optimize for Facebook's Open Graph, visit their [Sharing Best Practices guide](https://developers.facebook.com/docs/opengraph/howtos/maximizing-distribution-media-content/).

#####Attributes

*no additional attributes*

###Google Plus (sharing)

`data-service="google-plus-share"`

To share content on Google Plus, **QuickShare** links to the Google Plus Share endpoint, which opens up a dialogue to share a link through the currently logged-in user's account. Google Plus will automatically fill out the snippet (eg thumbnail) attached to the post based on the shared url, using information gathered through its web crawler. To learn how to optimize for Google Plus's web crawler, visit their [snippet guide](https://developers.google.com/+/web/snippet/).

#####Attributes

*no additional attributes*

###E-Mail

`data-service="email"`

To share through e-mail, **QuickShare** currently relies on a native mail client to handle the sending of the email. Therefore the link will simply open up the default mail client installed on the client device, with a customisable set of fields already filled out. **QuickShare** uses the URI scheme `mailto`, which means link tag will look like:

```html
<a href="mailto:receiver@emailclient.com?subject=subject&body=message">
```
#####Attributes

`data-mail-body="message"`

The body of the email. This defaults to the value of the `data-title` attribute followed by the value of the `data-url` attribute. If `data-title` is not defined, then will default to the value of the `data-url` attribute.

---

`data-subject="subject"`

The subject header of the email.

---

`data-send-to="receiver@emailclient.com"`

The email address of the acount to share to. To add multiple addresses, simply have them comma separated, such as in the example below.

`data-send-to="one@example.com,two@example.com"`
