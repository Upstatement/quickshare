(function(a) {
    var b = {
        title: escape("Sharing: "),
        username: escape("thetmkay"),
        tweet_body: escape("This is my 1st sharing!!! : ")
    };
    var c = {
        container: "-c",
        no_container: "-nc",
        title: "-t",
        url: "-u",
        url_title: "-ut",
        no_url_no_title: "-x",
        via: "-v",
        tweet_body: "-tb"
    };
    var d = {
        test_e: escape("http://www.test.com/"),
        localhost_e: escape("http://localhost:3000/qs_test.html"),
        fb_share: "https://www.facebook.com/sharer/sharer.php?u=",
        twitter: "https://twitter.com/intent/tweet?url=",
        gp_share: "https://plus.google.com/share?url="
    };
    var e = {
        via: "&via=",
        tweet_body: "&text=",
        container: escape("container/"),
        fb_share: "facebook",
        gp_share: "google-plus",
        twitter: "twitter"
    };
    var f = {
        fb_share: ".test-fbs",
        gp_share: ".test-gps",
        twitter: ".test-tw"
    };
    var g = function(b) {
        test(b.name, function() {
            var c = a(b.class_tag);
            c.trigger("click");
            equal(c.attr("href"), b.expected_url);
        });
    };
    var h = {
        setup: function() {
            a(document).quickShare();
        }
    };
    var i = function(a) {
        module(a, h);
    };
    module("email tests");
    i("facebook share tests");
    g({
        name: "fbs - no container + url + title",
        class_tag: f.fb_share + c.no_container + c.url_title,
        expected_url: d.fb_share + d.test_e + e.fb_share
    });
    g({
        name: "fbs - no container + url + no title",
        class_tag: f.fb_share + c.no_container + c.url,
        expected_url: d.fb_share + d.test_e + e.fb_share
    });
    g({
        name: "fbs - no container + no url + no title",
        class_tag: f.fb_share + c.no_container + c.no_url_no_title,
        expected_url: d.fb_share + d.localhost_e
    });
    g({
        name: "fbs - no container + no url + title",
        class_tag: f.fb_share + c.no_container + c.title,
        expected_url: d.fb_share + d.localhost_e
    });
    g({
        name: "fbs - container + url + title",
        class_tag: f.fb_share + c.container + c.url_title,
        expected_url: d.fb_share + d.test_e + e.fb_share
    });
    g({
        name: "fbs - container + url + no title",
        class_tag: f.fb_share + c.container + c.url,
        expected_url: d.fb_share + d.test_e + e.fb_share
    });
    g({
        name: "fbs - container + no url + no title",
        class_tag: f.fb_share + c.container + c.no_url_no_title,
        expected_url: d.fb_share + d.test_e + e.container + e.fb_share
    });
    g({
        name: "fbs - container + no url + title",
        class_tag: f.fb_share + c.container + c.title,
        expected_url: d.fb_share + d.test_e + e.container + e.fb_share
    });
    i("google-plus-share tests");
    g({
        name: "gps - no container + url + title",
        class_tag: f.gp_share + c.no_container + c.url_title,
        expected_url: d.gp_share + d.test_e + e.gp_share
    });
    g({
        name: "gps - no container + url + no title",
        class_tag: f.gp_share + c.no_container + c.url,
        expected_url: d.gp_share + d.test_e + e.gp_share
    });
    g({
        name: "gps - no container + no url + no title",
        class_tag: f.gp_share + c.no_container + c.no_url_no_title,
        expected_url: d.gp_share + d.localhost_e
    });
    g({
        name: "gps - no container + no url + title",
        class_tag: f.gp_share + c.no_container + c.title,
        expected_url: d.gp_share + d.localhost_e
    });
    g({
        name: "gps - container + url + title",
        class_tag: f.gp_share + c.container + c.url_title,
        expected_url: d.gp_share + d.test_e + e.gp_share
    });
    g({
        name: "gps - container + url + no title",
        class_tag: f.gp_share + c.container + c.url,
        expected_url: d.gp_share + d.test_e + e.gp_share
    });
    g({
        name: "gps - container + no url + no title",
        class_tag: f.gp_share + c.container + c.no_url_no_title,
        expected_url: d.gp_share + d.test_e + e.container + e.gp_share
    });
    g({
        name: "gps - container + no url + title",
        class_tag: f.gp_share + c.container + c.title,
        expected_url: d.gp_share + d.test_e + e.container + e.gp_share
    });
    i("twitter tests");
    var j = escape("tw no container"), k = escape("tw with container");
    g({
        name: "tw - no container + url + title",
        class_tag: f.twitter + c.no_container + c.url_title,
        expected_url: d.twitter + d.test_e + e.twitter + e.tweet_body + j
    });
    g({
        name: "tw - no container + url + no title",
        class_tag: f.twitter + c.no_container + c.url,
        expected_url: d.twitter + d.test_e + e.twitter + e.tweet_body + b.title
    });
    g({
        name: "tw - no container + url + title + tweet_body",
        class_tag: f.twitter + c.no_container + c.url_title + c.tweet_body,
        expected_url: d.twitter + d.test_e + e.twitter + e.tweet_body + b.tweet_body
    });
    g({
        name: "tw - no container + url + no title + tweet_body",
        class_tag: f.twitter + c.no_container + c.url + c.tweet_body,
        expected_url: d.twitter + d.test_e + e.twitter + e.tweet_body + b.tweet_body
    });
    g({
        name: "tw - no container + url + title + via",
        class_tag: f.twitter + c.no_container + c.url_title + c.via,
        expected_url: d.twitter + d.test_e + e.twitter + e.tweet_body + j + e.via + b.username
    });
    g({
        name: "tw - no container + no url + no title",
        class_tag: f.twitter + c.no_container + c.no_url_no_title,
        expected_url: d.twitter + d.localhost_e + e.tweet_body + b.title
    });
    g({
        name: "tw - no container + no url + title",
        class_tag: f.twitter + c.no_container + c.title,
        expected_url: d.twitter + d.localhost_e + e.tweet_body + j
    });
    g({
        name: "tw - container + url + title",
        class_tag: f.twitter + c.container + c.url_title,
        expected_url: d.twitter + d.test_e + e.twitter + e.tweet_body + k
    });
    g({
        name: "tw - container + url + no title",
        class_tag: f.twitter + c.container + c.url,
        expected_url: d.twitter + d.test_e + e.twitter + e.tweet_body + k
    });
    g({
        name: "tw - container + url + title + tweet_body",
        class_tag: f.twitter + c.container + c.url_title + c.tweet_body,
        expected_url: d.twitter + d.test_e + e.twitter + e.tweet_body + b.tweet_body
    });
    g({
        name: "tw - container + url + no title + tweet_body",
        class_tag: f.twitter + c.container + c.url + c.tweet_body,
        expected_url: d.twitter + d.test_e + e.twitter + e.tweet_body + b.tweet_body
    });
    g({
        name: "tw - container + url + title + via",
        class_tag: f.twitter + c.container + c.url_title + c.via,
        expected_url: d.twitter + d.test_e + e.twitter + e.tweet_body + k + e.via + b.username
    });
    g({
        name: "tw - container + no url + no title",
        class_tag: f.twitter + c.container + c.no_url_no_title,
        expected_url: d.twitter + d.test_e + e.container + e.twitter + e.tweet_body + k
    });
    g({
        name: "tw - container + no url + title",
        class_tag: f.twitter + c.container + c.title,
        expected_url: d.twitter + d.test_e + e.container + e.twitter + e.tweet_body + k
    });
})(jQuery);