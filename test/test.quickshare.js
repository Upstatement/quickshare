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
    blank: "B",
    description: "-d",
    media: "-m"
};

var urls = {
    test_e: encodeURIComponent("http://www.test.com/"),
    localhost_e: encodeURIComponent("http://localhost:3000/qs_test.html"),
    fb_share: "https://www.facebook.com/sharer/sharer.php?u=",
    twitter: "https://twitter.com/intent/tweet?url=",
    gp_share: "https://plus.google.com/share?url=",
    mailto: "mailto:",
    linkedin: "https://www.linkedin.com/shareArticle?mini=true&url=",
    hackernews: "https://news.ycombinator.com/submitlink?u=",
    pinterest: "https://www.pinterest.com/pin/create/button/?url=",
    reddit: "https://www.reddit.com/submit?url="
};

var url_params = {
    via: "&via=",
    tweet_body: "&text=",
    container: encodeURIComponent("container/"),
    mail_body: "?body=",
    description: "&description=",
    media: "&media=",
    subject: "&subject=",
    title: "&title=",
    hnTitle: "&t=",
    summary: "&summary=",
    source: "&source=",
    fb_share: "facebook",
    gp_share: "google-plus",
    twitter: "twitter",
    mailto: "mailto",
    linkedin: "linkedin",
    hackernews: "hacker-news",
    pinterest: "pinterest",
    reddit: "reddit"
};

var class_tags = {
    fb_share: ".test-fbs",
    gp_share: ".test-gps",
    twitter: ".test-tw",
    mailto: ".test-mt",
    linkedin: ".test-li",
    hackernews: ".test-hn",
    pinterest: ".test-p",
    reddit: ".test-r"
};

var windowData = {
    fb: "','myFacebookWin',",
    twitter: "','myTwitterWin',",
    linkedin: "','myLinkedinWin',",
    dimensions: "'width=620,height=350'",
    open: "javascript:window.open('",
    close: ");void(0)"
};

var _test = function(t) {
    QUnit.test(t.name, function(e) {
        var a = document.querySelector(t.class_tag);
        var s;
        try {
            s = new MouseEvent("click", {
                view: window,
                bubbles: true,
                cancelable: true
            });
        } catch (t) {
            s = document.createEvent("MouseEvent");
            s.initEvent("click", true, false);
        }
        a.dispatchEvent(s);
        e.equal(a.href, t.expected_url);
    });
};

var _test_setup = {
    setup: function() {
        quickShare();
    }
};

var _module = function(t) {
    QUnit.module(t, _test_setup);
};

function _rawUrlEncode(t) {
    t = (t + "").toString();
    return encodeURIComponent(t).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/" "/g, "%20");
}

function _rawUrlDecode(t) {
    return decodeURIComponent(t).replace(/%20/g, " ");
}

_module("facebook share tests");

_test({
    name: "fbs - no container + url + title",
    class_tag: class_tags.fb_share + tags.no_container + tags.url_title,
    expected_url: windowData.open + urls.fb_share + urls.test_e + url_params.fb_share + windowData.fb + windowData.dimensions + windowData.close
});

_test({
    name: "fbs - no container + url + no title",
    class_tag: class_tags.fb_share + tags.no_container + tags.url,
    expected_url: windowData.open + urls.fb_share + urls.test_e + url_params.fb_share + windowData.fb + windowData.dimensions + windowData.close
});

_test({
    name: "fbs - no container + no url + no title",
    class_tag: class_tags.fb_share + tags.no_container + tags.no_url_no_title,
    expected_url: windowData.open + urls.fb_share + urls.localhost_e + windowData.fb + windowData.dimensions + windowData.close
});

_test({
    name: "fbs - no container + no url + title",
    class_tag: class_tags.fb_share + tags.no_container + tags.title,
    expected_url: windowData.open + urls.fb_share + urls.localhost_e + windowData.fb + windowData.dimensions + windowData.close
});

_test({
    name: "fbs - container + url + title",
    class_tag: class_tags.fb_share + tags.container + tags.url_title,
    expected_url: windowData.open + urls.fb_share + urls.test_e + url_params.fb_share + windowData.fb + windowData.dimensions + windowData.close
});

_test({
    name: "fbs - container + url + no title",
    class_tag: class_tags.fb_share + tags.container + tags.url,
    expected_url: windowData.open + urls.fb_share + urls.test_e + url_params.fb_share + windowData.fb + windowData.dimensions + windowData.close
});

_test({
    name: "fbs - container + no url + no title",
    class_tag: class_tags.fb_share + tags.container + tags.no_url_no_title,
    expected_url: windowData.open + urls.fb_share + urls.test_e + url_params.container + url_params.fb_share + windowData.fb + windowData.dimensions + windowData.close
});

_test({
    name: "fbs - container + no url + title",
    class_tag: class_tags.fb_share + tags.container + tags.title,
    expected_url: windowData.open + urls.fb_share + urls.test_e + url_params.container + url_params.fb_share + windowData.fb + windowData.dimensions + windowData.close
});

_module("google-plus-share tests");

_test({
    name: "gps - no container + url + title",
    class_tag: class_tags.gp_share + tags.no_container + tags.url_title,
    expected_url: urls.gp_share + urls.test_e + url_params.gp_share
});

_test({
    name: "gps - no container + url + no title",
    class_tag: class_tags.gp_share + tags.no_container + tags.url,
    expected_url: urls.gp_share + urls.test_e + url_params.gp_share
});

_test({
    name: "gps - no container + no url + no title",
    class_tag: class_tags.gp_share + tags.no_container + tags.no_url_no_title,
    expected_url: urls.gp_share + urls.localhost_e
});

_test({
    name: "gps - no container + no url + title",
    class_tag: class_tags.gp_share + tags.no_container + tags.title,
    expected_url: urls.gp_share + urls.localhost_e
});

_test({
    name: "gps - container + url + title",
    class_tag: class_tags.gp_share + tags.container + tags.url_title,
    expected_url: urls.gp_share + urls.test_e + url_params.gp_share
});

_test({
    name: "gps - container + url + no title",
    class_tag: class_tags.gp_share + tags.container + tags.url,
    expected_url: urls.gp_share + urls.test_e + url_params.gp_share
});

_test({
    name: "gps - container + no url + no title",
    class_tag: class_tags.gp_share + tags.container + tags.no_url_no_title,
    expected_url: urls.gp_share + urls.test_e + url_params.container + url_params.gp_share
});

_test({
    name: "gps - container + no url + title",
    class_tag: class_tags.gp_share + tags.container + tags.title,
    expected_url: urls.gp_share + urls.test_e + url_params.container + url_params.gp_share
});

_module("hacker-news tests");

var hackernews_default_title = encodeURIComponent("hacker-news title"), hackernews_default_title_w = encodeURIComponent("hacker-news title container");

_test({
    name: "Hn - no container + url + title",
    class_tag: class_tags.hackernews + tags.no_container + tags.url_title,
    expected_url: urls.hackernews + urls.test_e + url_params.hackernews + url_params.hnTitle + hackernews_default_title
});

_test({
    name: "Hn - no container + url + no title",
    class_tag: class_tags.hackernews + tags.no_container + tags.url,
    expected_url: urls.hackernews + urls.test_e + url_params.hackernews + url_params.hnTitle + defaults.title
});

_test({
    name: "Hn - no container + no url + no title",
    class_tag: class_tags.hackernews + tags.no_container + tags.no_url_no_title,
    expected_url: urls.hackernews + urls.localhost_e + url_params.hnTitle + defaults.title
});

_test({
    name: "Hn - container + url + title",
    class_tag: class_tags.hackernews + tags.container + tags.url_title,
    expected_url: urls.hackernews + urls.test_e + url_params.hackernews + url_params.hnTitle + hackernews_default_title
});

_test({
    name: "Hn - container + url + no title",
    class_tag: class_tags.hackernews + tags.container + tags.url,
    expected_url: urls.hackernews + urls.test_e + url_params.hackernews + url_params.hnTitle + hackernews_default_title_w
});

_test({
    name: "Hn - container + no url + no title",
    class_tag: class_tags.hackernews + tags.container + tags.no_url_no_title,
    expected_url: urls.hackernews + urls.test_e + url_params.container + url_params.hackernews + url_params.hnTitle + hackernews_default_title_w
});

_module("linkedin tests");

var linkedin_default_title = encodeURIComponent("linkedin title"), linkedin_default_title_w = encodeURIComponent("linkedin title container"), linkedin_default_summary = encodeURIComponent("summary"), linkedin_default_source = encodeURIComponent("The source"), encodedURL_url_title = encodeURIComponent(urls.linkedin + urls.test_e + url_params.linkedin + url_params.title + linkedin_default_title), encodedURL_url_no_title = encodeURIComponent(urls.linkedin + urls.test_e + url_params.linkedin + url_params.title + defaults.title), encodedURL_url_no_title_w = encodeURIComponent(urls.linkedin + urls.test_e + url_params.linkedin + url_params.title + linkedin_default_title_w), encodedURL_no_url_no_title = encodeURIComponent(urls.linkedin + urls.localhost_e + url_params.title + defaults.title), encodedURL_no_url_no_title_w = encodeURIComponent(urls.linkedin + urls.test_e + url_params.container + url_params.linkedin + url_params.title + linkedin_default_title_w), encodedURL_summary = encodeURIComponent(urls.linkedin + urls.test_e + url_params.linkedin + url_params.title + linkedin_default_title + url_params.summary + linkedin_default_summary), encodedURL_source = encodeURIComponent(urls.linkedin + urls.test_e + url_params.linkedin + url_params.title + linkedin_default_title + url_params.summary + linkedin_default_summary + url_params.source + linkedin_default_source);

_test({
    name: "li - no container + url + title",
    class_tag: class_tags.linkedin + tags.no_container + tags.url_title,
    expected_url: windowData.open + encodedURL_url_title + windowData.linkedin + windowData.dimensions + windowData.close
});

_test({
    name: "li - no container + url + no title",
    class_tag: class_tags.linkedin + tags.no_container + tags.url,
    expected_url: windowData.open + encodedURL_url_no_title + windowData.linkedin + windowData.dimensions + windowData.close
});

_test({
    name: "li - no container + no url + no title",
    class_tag: class_tags.linkedin + tags.no_container + tags.no_url_no_title,
    expected_url: windowData.open + encodedURL_no_url_no_title + windowData.linkedin + windowData.dimensions + windowData.close
});

_test({
    name: "li - no container + url + title + summary",
    class_tag: class_tags.linkedin + tags.no_container + tags.url + tags.title + tags.summary,
    expected_url: windowData.open + encodedURL_summary + windowData.linkedin + windowData.dimensions + windowData.close
});

_test({
    name: "li - no container + url + title + summary + source",
    class_tag: class_tags.linkedin + tags.no_container + tags.url + tags.title + tags.summary + tags.source,
    expected_url: windowData.open + encodedURL_source + windowData.linkedin + windowData.dimensions + windowData.close
});

_test({
    name: "li - container + url + title",
    class_tag: class_tags.linkedin + tags.container + tags.url_title,
    expected_url: windowData.open + encodedURL_url_title + windowData.linkedin + windowData.dimensions + windowData.close
});

_test({
    name: "li - container + url + no title",
    class_tag: class_tags.linkedin + tags.container + tags.url,
    expected_url: windowData.open + encodedURL_url_no_title_w + windowData.linkedin + windowData.dimensions + windowData.close
});

_test({
    name: "li - container + no url + no title",
    class_tag: class_tags.linkedin + tags.container + tags.no_url_no_title,
    expected_url: windowData.open + encodedURL_no_url_no_title_w + windowData.linkedin + windowData.dimensions + windowData.close
});

_test({
    name: "li - container + url + title + summary",
    class_tag: class_tags.linkedin + tags.container + tags.url + tags.title + tags.summary,
    expected_url: windowData.open + encodedURL_summary + windowData.linkedin + windowData.dimensions + windowData.close
});

_test({
    name: "li - container + url + title + summary + source",
    class_tag: class_tags.linkedin + tags.container + tags.url + tags.title + tags.summary + tags.source,
    expected_url: windowData.open + encodedURL_source + windowData.linkedin + windowData.dimensions + windowData.close
});

_module("mailto tests");

var mailto_default_title = encodeURIComponent("mt title"), mailto_default_title_container = mailto_default_title + encodeURIComponent(" container"), mailto_default_mail_body = defaults.mail_body + encodeURIComponent(" ") + urls.test_e + url_params.mailto, mailto_mail_body_no_url = defaults.mail_body + encodeURIComponent(" ") + urls.localhost_e, mailto_mail_body_no_url_w = defaults.mail_body + encodeURIComponent(" ") + urls.test_e + url_params.container + url_params.mailto;

_test({
    name: "mt - no container + url + title",
    class_tag: class_tags.mailto + tags.no_container + tags.url_title,
    expected_url: urls.mailto + url_params.mail_body + mailto_default_title + encodeURIComponent(" ") + urls.test_e + url_params.mailto + url_params.subject + mailto_default_title
});

_test({
    name: "mt - no container + url + no title",
    class_tag: class_tags.mailto + tags.no_container + tags.url,
    expected_url: urls.mailto + url_params.mail_body + defaults.title + encodeURIComponent(" ") + urls.test_e + url_params.mailto + url_params.subject + defaults.title
});

_test({
    name: "mt - no container + no url + no title",
    class_tag: class_tags.mailto + tags.no_container + tags.no_url_no_title,
    expected_url: urls.mailto + url_params.mail_body + defaults.title + escape(" ") + urls.localhost_e + url_params.subject + defaults.title
});

_test({
    name: "mt - no container + no url + title",
    class_tag: class_tags.mailto + tags.no_container + tags.title,
    expected_url: urls.mailto + url_params.mail_body + mailto_default_title + escape(" ") + urls.localhost_e + url_params.subject + mailto_default_title
});

_test({
    name: "mt - no container + url + title + mail_body + subject",
    class_tag: class_tags.mailto + tags.no_container + tags.url_title + tags.mail_body + tags.subject,
    expected_url: urls.mailto + url_params.mail_body + mailto_default_mail_body + url_params.subject + defaults.subject
});

_test({
    name: "mt - no container + url + no title + mail_body + subject",
    class_tag: class_tags.mailto + tags.no_container + tags.url + tags.mail_body + tags.subject,
    expected_url: urls.mailto + url_params.mail_body + mailto_default_mail_body + url_params.subject + defaults.subject
});

_test({
    name: "mt - no container + no url + title + mail_body + subject",
    class_tag: class_tags.mailto + tags.no_container + tags.title + tags.mail_body + tags.subject,
    expected_url: urls.mailto + url_params.mail_body + mailto_mail_body_no_url + url_params.subject + defaults.subject
});

_test({
    name: "mt - no container + no url + no title + mail_body + subject",
    class_tag: class_tags.mailto + tags.no_container + tags.no_url_no_title + tags.mail_body + tags.subject,
    expected_url: urls.mailto + url_params.mail_body + mailto_mail_body_no_url + url_params.subject + defaults.subject
});

_test({
    name: "mt - no container + url + title + mail_body + subject + send_to(single)",
    class_tag: class_tags.mailto + tags.no_container + tags.url_title + tags.mail_body + tags.subject + tags.send_to,
    expected_url: urls.mailto + defaults.address + url_params.mail_body + mailto_default_mail_body + url_params.subject + defaults.subject
});

_test({
    name: "mt - no container + url + title + mail_body + subject + send_to(multiple)",
    class_tag: class_tags.mailto + tags.no_container + tags.url_title + tags.mail_body + tags.subject + tags.send_to + tags.multiple,
    expected_url: urls.mailto + defaults.multi_address + url_params.mail_body + mailto_default_mail_body + url_params.subject + defaults.subject
});

_test({
    name: "mt - container + url + title",
    class_tag: class_tags.mailto + tags.container + tags.url_title,
    expected_url: urls.mailto + url_params.mail_body + mailto_default_title + escape(" ") + urls.test_e + url_params.mailto + url_params.subject + mailto_default_title
});

_test({
    name: "mt - container + url + no title",
    class_tag: class_tags.mailto + tags.container + tags.url,
    expected_url: urls.mailto + url_params.mail_body + mailto_default_title_container + escape(" ") + urls.test_e + url_params.mailto + url_params.subject + mailto_default_title_container
});

_test({
    name: "mt - container + no url + no title",
    class_tag: class_tags.mailto + tags.container + tags.no_url_no_title,
    expected_url: urls.mailto + url_params.mail_body + mailto_default_title_container + escape(" ") + urls.test_e + url_params.container + url_params.mailto + url_params.subject + mailto_default_title_container
});

_test({
    name: "mt - container + no url + title",
    class_tag: class_tags.mailto + tags.container + tags.title,
    expected_url: urls.mailto + url_params.mail_body + mailto_default_title + escape(" ") + urls.test_e + url_params.container + url_params.mailto + url_params.subject + mailto_default_title
});

_test({
    name: "mt - container + url + title + subject + mail_body",
    class_tag: class_tags.mailto + tags.container + tags.url_title + tags.mail_body + tags.subject,
    expected_url: urls.mailto + url_params.mail_body + mailto_default_mail_body + url_params.subject + defaults.subject
});

_test({
    name: "mt - container + url + no title + subject + mail_body",
    class_tag: class_tags.mailto + tags.container + tags.url + tags.mail_body + tags.subject,
    expected_url: urls.mailto + url_params.mail_body + mailto_default_mail_body + url_params.subject + defaults.subject
});

_test({
    name: "mt - container + no url + title + subject + mail_body",
    class_tag: class_tags.mailto + tags.container + tags.title + tags.mail_body + tags.subject,
    expected_url: urls.mailto + url_params.mail_body + mailto_mail_body_no_url_w + url_params.subject + defaults.subject
});

_test({
    name: "mt - container + no url + no title + subject +  mail_body",
    class_tag: class_tags.mailto + tags.container + tags.no_url_no_title + tags.mail_body + tags.subject,
    expected_url: urls.mailto + url_params.mail_body + mailto_mail_body_no_url_w + url_params.subject + defaults.subject
});

_test({
    name: "mt - container + url + title + mail_body + subject + send_to(single)",
    class_tag: class_tags.mailto + tags.container + tags.url_title + tags.mail_body + tags.subject + tags.send_to,
    expected_url: urls.mailto + defaults.address + url_params.mail_body + mailto_default_mail_body + url_params.subject + defaults.subject
});

_test({
    name: "mt - container + url + title + mail_body + subject + send_to(multiple)",
    class_tag: class_tags.mailto + tags.container + tags.url_title + tags.mail_body + tags.subject + tags.send_to + tags.multiple,
    expected_url: urls.mailto + defaults.multi_address + url_params.mail_body + mailto_default_mail_body + url_params.subject + defaults.subject
});

_module("pinterest tests");

var image_link = encodeURIComponent("http://cdn.upstatement.com/wp-content/uploads/2013/08/stevens-book.jpg"), pinterest_default_description = encodeURIComponent("Pinterest description"), pinterest_default_description_w = encodeURIComponent("Pinterest description container");

_test({
    name: "P - no container + url + media + description",
    class_tag: class_tags.pinterest + tags.no_container + tags.url + tags.media + tags.description,
    expected_url: urls.pinterest + urls.test_e + url_params.pinterest + url_params.media + image_link + url_params.description + pinterest_default_description
});

_test({
    name: "P - no container + no url + media + description",
    class_tag: class_tags.pinterest + tags.no_container + tags.media + tags.description,
    expected_url: urls.pinterest + urls.localhost_e + url_params.media + image_link + url_params.description + pinterest_default_description
});

_test({
    name: "P - container + url + media + description",
    class_tag: class_tags.pinterest + tags.container + tags.url + tags.media + tags.description,
    expected_url: urls.pinterest + urls.test_e + url_params.pinterest + url_params.media + image_link + url_params.description + pinterest_default_description
});

_test({
    name: "P - container + no url + media + description",
    class_tag: class_tags.pinterest + tags.container + tags.media + tags.description,
    expected_url: urls.pinterest + urls.test_e + url_params.container + url_params.pinterest + url_params.media + image_link + url_params.description + pinterest_default_description
});

_test({
    name: "P - container + no url + no media + no description",
    class_tag: class_tags.pinterest + tags.container,
    expected_url: urls.pinterest + urls.test_e + url_params.container + url_params.pinterest + url_params.media + image_link + url_params.description + pinterest_default_description_w
});

_module("reddit share tests");

var reddit_default_title = encodeURIComponent("reddit title"), reddit_default_title_w = encodeURIComponent("reddit title container");

_test({
    name: "R - no container + url + title",
    class_tag: class_tags.reddit + tags.no_container + tags.url_title,
    expected_url: urls.reddit + urls.test_e + url_params.reddit + url_params.title + reddit_default_title
});

_test({
    name: "R - no container + no url + title",
    class_tag: class_tags.reddit + tags.no_container + tags.title,
    expected_url: urls.reddit + urls.localhost_e + url_params.title + reddit_default_title
});

_test({
    name: "R - no container + no url + no title",
    class_tag: class_tags.reddit + tags.no_container + tags.no_url_no_title,
    expected_url: urls.reddit + urls.localhost_e + url_params.title + defaults.title
});

_test({
    name: "R - container + url + title",
    class_tag: class_tags.reddit + tags.container + tags.url_title,
    expected_url: urls.reddit + urls.test_e + url_params.reddit + url_params.title + reddit_default_title
});

_test({
    name: "R - container + no url + title",
    class_tag: class_tags.reddit + tags.container + tags.title,
    expected_url: urls.reddit + urls.test_e + url_params.container + url_params.reddit + url_params.title + reddit_default_title
});

_test({
    name: "R - container + no url + no title",
    class_tag: class_tags.reddit + tags.container + tags.no_url_no_title,
    expected_url: urls.reddit + urls.test_e + url_params.container + url_params.reddit + url_params.title + reddit_default_title_w
});

_module("twitter tests");

var twitter_no_container_title = encodeURIComponent("tw no container"), twitter_with_container_title = encodeURIComponent("tw with container"), encodedURL_title = encodeURIComponent(urls.twitter + urls.test_e + url_params.twitter + url_params.tweet_body + twitter_no_container_title), encodedURL_title_w = encodeURIComponent(urls.twitter + urls.test_e + url_params.twitter + url_params.tweet_body + twitter_with_container_title), encodedURL_default_title = encodeURIComponent(urls.twitter + urls.test_e + url_params.twitter + url_params.tweet_body + defaults.title), encodedURL_default_tweet_body = encodeURIComponent(urls.twitter + urls.test_e + url_params.twitter + url_params.tweet_body + defaults.tweet_body), encodedURL_via = encodeURIComponent(urls.twitter + urls.test_e + url_params.twitter + url_params.tweet_body + twitter_no_container_title + url_params.via + defaults.username), encodedURL_via_w = encodeURIComponent(urls.twitter + urls.test_e + url_params.twitter + url_params.tweet_body + twitter_with_container_title + url_params.via + defaults.username), encodedURL_no_url_no_title = encodeURIComponent(urls.twitter + urls.localhost_e + url_params.tweet_body + defaults.title), encodedURL_no_url_no_title_w = encodeURIComponent(urls.twitter + urls.test_e + url_params.container + url_params.twitter + url_params.tweet_body + twitter_with_container_title), encodedURL_no_url = encodeURIComponent(urls.twitter + urls.localhost_e + url_params.tweet_body + twitter_no_container_title);

_test({
    name: "tw - no container + url + title",
    class_tag: class_tags.twitter + tags.no_container + tags.url_title,
    expected_url: windowData.open + encodedURL_title + windowData.twitter + windowData.dimensions + windowData.close
});

_test({
    name: "tw - no container + url + no title",
    class_tag: class_tags.twitter + tags.no_container + tags.url,
    expected_url: windowData.open + encodedURL_default_title + windowData.twitter + windowData.dimensions + windowData.close
});

_test({
    name: "tw - no container + url + title + tweet_body",
    class_tag: class_tags.twitter + tags.no_container + tags.url_title + tags.tweet_body,
    expected_url: windowData.open + encodedURL_default_tweet_body + windowData.twitter + windowData.dimensions + windowData.close
});

_test({
    name: "tw - no container + url + no title + tweet_body",
    class_tag: class_tags.twitter + tags.no_container + tags.url + tags.tweet_body,
    expected_url: windowData.open + encodedURL_default_tweet_body + windowData.twitter + windowData.dimensions + windowData.close
});

_test({
    name: "tw - no container + url + title + via",
    class_tag: class_tags.twitter + tags.no_container + tags.url_title + tags.via,
    expected_url: windowData.open + encodedURL_via + windowData.twitter + windowData.dimensions + windowData.close
});

_test({
    name: "tw - no container + no url + no title",
    class_tag: class_tags.twitter + tags.no_container + tags.no_url_no_title,
    expected_url: windowData.open + encodedURL_no_url_no_title + windowData.twitter + windowData.dimensions + windowData.close
});

_test({
    name: "tw - no container + no url + title",
    class_tag: class_tags.twitter + tags.no_container + tags.title,
    expected_url: windowData.open + encodedURL_no_url + windowData.twitter + windowData.dimensions + windowData.close
});

_test({
    name: "tw - container + url + title",
    class_tag: class_tags.twitter + tags.container + tags.url_title,
    expected_url: windowData.open + encodedURL_title_w + windowData.twitter + windowData.dimensions + windowData.close
});

_test({
    name: "tw - container + url + no title",
    class_tag: class_tags.twitter + tags.container + tags.url,
    expected_url: windowData.open + encodedURL_title_w + windowData.twitter + windowData.dimensions + windowData.close
});

_test({
    name: "tw - container + url + title + tweet_body",
    class_tag: class_tags.twitter + tags.container + tags.url_title + tags.tweet_body,
    expected_url: windowData.open + encodedURL_default_tweet_body + windowData.twitter + windowData.dimensions + windowData.close
});

_test({
    name: "tw - container + url + no title + tweet_body",
    class_tag: class_tags.twitter + tags.container + tags.url + tags.tweet_body,
    expected_url: windowData.open + encodedURL_default_tweet_body + windowData.twitter + windowData.dimensions + windowData.close
});

_test({
    name: "tw - container + url + title + via",
    class_tag: class_tags.twitter + tags.container + tags.url_title + tags.via,
    expected_url: windowData.open + encodedURL_via_w + windowData.twitter + windowData.dimensions + windowData.close
});

_test({
    name: "tw - container + no url + no title",
    class_tag: class_tags.twitter + tags.container + tags.no_url_no_title,
    expected_url: windowData.open + encodedURL_no_url_no_title_w + windowData.twitter + windowData.dimensions + windowData.close
});

_test({
    name: "tw - container + no url + title",
    class_tag: class_tags.twitter + tags.container + tags.title,
    expected_url: windowData.open + encodedURL_no_url_no_title_w + windowData.twitter + windowData.dimensions + windowData.close
});