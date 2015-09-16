(function(a) {
    var b = {
        title: encodeURIComponent("Sharing: "),
        username: encodeURIComponent("thetmkay"),
        tweet_body: k("This is my 1st sharing!!! : "),
        address: "thetmkay@gmail.com",
        multi_address: "thetmkay@gmail.com,george@upstatement.com,george.nishimura_1@outlook.com",
        subject: encodeURIComponent("subject header"),
        mail_body: encodeURIComponent("mail body")
    };
    var c = {
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
        send_to: "-st",
        multiple: "N",
        blank: "B"
    };
    var d = {
        test_e: encodeURIComponent("http://www.test.com/"),
        localhost_e: encodeURIComponent("http://localhost:3000/test/qs_test.html"),
        fb_share: "https://www.facebook.com/sharer/sharer.php?u=",
        twitter: "https://twitter.com/intent/tweet?url=",
        gp_share: "https://plus.google.com/share?url=",
        mailto: "mailto:"
    };
    var e = {
        via: "&via=",
        tweet_body: "&text=",
        container: encodeURIComponent("container/"),
        mail_body: "?body=",
        subject: "&subject=",
        fb_share: "facebook",
        gp_share: "google-plus",
        twitter: "twitter",
        mailto: "mailto"
    };
    var f = {
        fb_share: ".test-fbs",
        gp_share: ".test-gps",
        twitter: ".test-tw",
        mailto: ".test-mt"
    };
    var g = {
        fb: "','myFacebookWin',",
        twitter: "','myTwitterWin',",
        linkedin: "', 'myLinkedinWin',",
        dimensions: "'width=620,height=350'",
        open: "javascript:window.open('",
        close: "); void(0)"
    };
    var h = function(b) {
        test(b.name, function() {
            var c = a(b.class_tag);
            c.trigger("click");
            equal(c.attr("href"), b.expected_url);
        });
    };
    var i = {
        setup: function() {
            quickShare();
        }
    };
    var j = function(a) {
        module(a, i);
    };
    function k(a) {
        a = (a + "").toString();
        return encodeURIComponent(a).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/" "/g, "%20");
    }
    function l(a) {
        return decodeURIComponent(a).replace(/%20/g, " ");
    }
    j("facebook share tests");
    h({
        name: "fbs - no container + url + title",
        class_tag: f.fb_share + c.no_container + c.url_title,
        expected_url: g.open + d.fb_share + d.test_e + e.fb_share + g.fb + g.dimensions + g.close
    });
    h({
        name: "fbs - no container + url + no title",
        class_tag: f.fb_share + c.no_container + c.url,
        expected_url: g.open + d.fb_share + d.test_e + e.fb_share + g.fb + g.dimensions + g.close
    });
    h({
        name: "fbs - no container + no url + no title",
        class_tag: f.fb_share + c.no_container + c.no_url_no_title,
        expected_url: g.open + d.fb_share + d.localhost_e + g.fb + g.dimensions + g.close
    });
    h({
        name: "fbs - no container + no url + title",
        class_tag: f.fb_share + c.no_container + c.title,
        expected_url: g.open + d.fb_share + d.localhost_e + g.fb + g.dimensions + g.close
    });
    h({
        name: "fbs - container + url + title",
        class_tag: f.fb_share + c.container + c.url_title,
        expected_url: g.open + d.fb_share + d.test_e + e.fb_share + g.fb + g.dimensions + g.close
    });
    h({
        name: "fbs - container + url + no title",
        class_tag: f.fb_share + c.container + c.url,
        expected_url: g.open + d.fb_share + d.test_e + e.fb_share + g.fb + g.dimensions + g.close
    });
    h({
        name: "fbs - container + no url + no title",
        class_tag: f.fb_share + c.container + c.no_url_no_title,
        expected_url: g.open + d.fb_share + d.test_e + e.container + e.fb_share + g.fb + g.dimensions + g.close
    });
    h({
        name: "fbs - container + no url + title",
        class_tag: f.fb_share + c.container + c.title,
        expected_url: g.open + d.fb_share + d.test_e + e.container + e.fb_share + g.fb + g.dimensions + g.close
    });
    j("google-plus-share tests");
    h({
        name: "gps - no container + url + title",
        class_tag: f.gp_share + c.no_container + c.url_title,
        expected_url: d.gp_share + d.test_e + e.gp_share
    });
    h({
        name: "gps - no container + url + no title",
        class_tag: f.gp_share + c.no_container + c.url,
        expected_url: d.gp_share + d.test_e + e.gp_share
    });
    h({
        name: "gps - no container + no url + no title",
        class_tag: f.gp_share + c.no_container + c.no_url_no_title,
        expected_url: d.gp_share + d.localhost_e
    });
    h({
        name: "gps - no container + no url + title",
        class_tag: f.gp_share + c.no_container + c.title,
        expected_url: d.gp_share + d.localhost_e
    });
    h({
        name: "gps - container + url + title",
        class_tag: f.gp_share + c.container + c.url_title,
        expected_url: d.gp_share + d.test_e + e.gp_share
    });
    h({
        name: "gps - container + url + no title",
        class_tag: f.gp_share + c.container + c.url,
        expected_url: d.gp_share + d.test_e + e.gp_share
    });
    h({
        name: "gps - container + no url + no title",
        class_tag: f.gp_share + c.container + c.no_url_no_title,
        expected_url: d.gp_share + d.test_e + e.container + e.gp_share
    });
    h({
        name: "gps - container + no url + title",
        class_tag: f.gp_share + c.container + c.title,
        expected_url: d.gp_share + d.test_e + e.container + e.gp_share
    });
    j("mailto tests");
    var m = encodeURIComponent("mt title"), n = m + encodeURIComponent(" container"), o = b.mail_body + encodeURIComponent(" ") + d.test_e + e.mailto, p = m + escape(" ") + d.test_e, q = b.title + escape(" ") + d.localhost_e, r = b.title + escape(" ") + d.test_e, s = m + escape(" ") + d.localhost_e;
    h({
        name: "mt - no container + url + title",
        class_tag: f.mailto + c.no_container + c.url_title,
        expected_url: d.mailto + e.mail_body + m + encodeURIComponent(" ") + d.test_e + e.mailto + e.subject + m
    });
    h({
        name: "mt - no container + url + no title",
        class_tag: f.mailto + c.no_container + c.url,
        expected_url: d.mailto + e.mail_body + b.title + encodeURIComponent(" ") + d.test_e + e.mailto + e.subject + b.title
    });
    h({
        name: "mt - no container + no url + no title",
        class_tag: f.mailto + c.no_container + c.no_url_no_title,
        expected_url: d.mailto + e.mail_body + b.title + escape(" ") + d.localhost_e + e.subject + b.title
    });
    h({
        name: "mt - no container + no url + title",
        class_tag: f.mailto + c.no_container + c.title,
        expected_url: d.mailto + e.mail_body + m + escape(" ") + d.localhost_e + e.subject + m
    });
    h({
        name: "mt - no container + url + title + mail_body + subject",
        class_tag: f.mailto + c.no_container + c.url_title + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + o + e.subject + b.subject
    });
    h({
        name: "mt - no container + url + no title + mail_body + subject",
        class_tag: f.mailto + c.no_container + c.url + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + o + e.subject + b.subject
    });
    h({
        name: "mt - no container + no url + title + mail_body + subject",
        class_tag: f.mailto + c.no_container + c.title + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + b.mail_body + e.subject + b.subject
    });
    h({
        name: "mt - no container + no url + no title + mail_body + subject",
        class_tag: f.mailto + c.no_container + c.no_url_no_title + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + b.mail_body + e.subject + b.subject
    });
    h({
        name: "mt - no container + url + title + mail_body + subject + send_to(single)",
        class_tag: f.mailto + c.no_container + c.url_title + c.mail_body + c.subject + c.send_to,
        expected_url: d.mailto + b.address + e.mail_body + o + e.subject + b.subject
    });
    h({
        name: "mt - no container + url + title + mail_body + subject + send_to(multiple)",
        class_tag: f.mailto + c.no_container + c.url_title + c.mail_body + c.subject + c.send_to + c.multiple,
        expected_url: d.mailto + b.multi_address + e.mail_body + o + e.subject + b.subject
    });
    h({
        name: "mt - container + url + title",
        class_tag: f.mailto + c.container + c.url_title,
        expected_url: d.mailto + e.mail_body + m + escape(" ") + d.test_e + e.mailto + e.subject + m
    });
    h({
        name: "mt - container + url + no title",
        class_tag: f.mailto + c.container + c.url,
        expected_url: d.mailto + e.mail_body + n + escape(" ") + d.test_e + e.mailto + e.subject + n
    });
    h({
        name: "mt - container + no url + no title",
        class_tag: f.mailto + c.container + c.no_url_no_title,
        expected_url: d.mailto + e.mail_body + n + escape(" ") + d.test_e + e.container + e.mailto + e.subject + n
    });
    h({
        name: "mt - container + no url + title",
        class_tag: f.mailto + c.container + c.title,
        expected_url: d.mailto + e.mail_body + m + escape(" ") + d.test_e + e.container + e.mailto + e.subject + m
    });
    h({
        name: "mt - container + url + title + subject + mail_body",
        class_tag: f.mailto + c.container + c.url_title + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + o + e.subject + b.subject
    });
    h({
        name: "mt - container + url + no title + subject + mail_body",
        class_tag: f.mailto + c.container + c.url + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + o + e.subject + b.subject
    });
    h({
        name: "mt - container + no url + title + subject + mail_body",
        class_tag: f.mailto + c.container + c.title + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + b.mail_body + e.subject + b.subject
    });
    h({
        name: "mt - container + no url + no title + subject +  mail_body",
        class_tag: f.mailto + c.container + c.no_url_no_title + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + b.mail_body + e.subject + b.subject
    });
    h({
        name: "mt - container + url + title + mail_body + subject + send_to(single)",
        class_tag: f.mailto + c.container + c.url_title + c.mail_body + c.subject + c.send_to,
        expected_url: d.mailto + b.address + e.mail_body + o + e.subject + b.subject
    });
    h({
        name: "mt - container + url + title + mail_body + subject + send_to(multiple)",
        class_tag: f.mailto + c.container + c.url_title + c.mail_body + c.subject + c.send_to + c.multiple,
        expected_url: d.mailto + b.multi_address + e.mail_body + o + e.subject + b.subject
    });
    j("twitter tests");
    var t = encodeURIComponent("tw no container"), u = encodeURIComponent("tw with container"), v = encodeURIComponent(d.twitter + d.test_e + e.twitter + e.tweet_body + t), w = encodeURIComponent(d.twitter + d.test_e + e.twitter + e.tweet_body + u), x = encodeURIComponent(d.twitter + d.test_e + e.twitter + e.tweet_body + b.title), y = encodeURIComponent(d.twitter + d.test_e + e.twitter + e.tweet_body + b.tweet_body), z = encodeURIComponent(d.twitter + d.test_e + e.twitter + e.tweet_body + t + e.via + b.username), A = encodeURIComponent(d.twitter + d.test_e + e.twitter + e.tweet_body + u + e.via + b.username);
    h({
        name: "tw - no container + url + title",
        class_tag: f.twitter + c.no_container + c.url_title,
        expected_url: g.open + v + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - no container + url + no title",
        class_tag: f.twitter + c.no_container + c.url,
        expected_url: g.open + x + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - no container + url + title + tweet_body",
        class_tag: f.twitter + c.no_container + c.url_title + c.tweet_body,
        expected_url: g.open + y + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - no container + url + no title + tweet_body",
        class_tag: f.twitter + c.no_container + c.url + c.tweet_body,
        expected_url: g.open + y + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - no container + url + title + via",
        class_tag: f.twitter + c.no_container + c.url_title + c.via,
        expected_url: g.open + z + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - no container + no url + no title",
        class_tag: f.twitter + c.no_container + c.no_url_no_title,
        expected_url: d.twitter + d.localhost_e + e.tweet_body + b.title
    });
    h({
        name: "tw - no container + no url + title",
        class_tag: f.twitter + c.no_container + c.title,
        expected_url: d.twitter + d.localhost_e + e.tweet_body + t
    });
    h({
        name: "tw - container + url + title",
        class_tag: f.twitter + c.container + c.url_title,
        expected_url: g.open + w + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - container + url + no title",
        class_tag: f.twitter + c.container + c.url,
        expected_url: g.open + w + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - container + url + title + tweet_body",
        class_tag: f.twitter + c.container + c.url_title + c.tweet_body,
        expected_url: g.open + y + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - container + url + no title + tweet_body",
        class_tag: f.twitter + c.container + c.url + c.tweet_body,
        expected_url: g.open + y + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - container + url + title + via",
        class_tag: f.twitter + c.container + c.url_title + c.via,
        expected_url: g.open + A + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - container + no url + no title",
        class_tag: f.twitter + c.container + c.no_url_no_title,
        expected_url: d.twitter + d.test_e + e.container + e.twitter + e.tweet_body + u
    });
    h({
        name: "tw - container + no url + title",
        class_tag: f.twitter + c.container + c.title,
        expected_url: d.twitter + d.test_e + e.container + e.twitter + e.tweet_body + u
    });
})(jQuery);