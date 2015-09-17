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
        summary: "-sm",
        source: "-so",
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
        mailto: "mailto:",
        linkedin: "http://www.linkedin.com/shareArticle?mini=true&url="
    };
    var e = {
        via: "&via=",
        tweet_body: "&text=",
        container: encodeURIComponent("container/"),
        mail_body: "?body=",
        subject: "&subject=",
        title: "&title=",
        summary: "&summary=",
        source: "&source=",
        fb_share: "facebook",
        gp_share: "google-plus",
        twitter: "twitter",
        mailto: "mailto",
        linkedin: "linkedin"
    };
    var f = {
        fb_share: ".test-fbs",
        gp_share: ".test-gps",
        twitter: ".test-tw",
        mailto: ".test-mt",
        linkedin: ".test-li"
    };
    var g = {
        fb: "','myFacebookWin',",
        twitter: "','myTwitterWin',",
        linkedin: "','myLinkedinWin',",
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
    j("linkedin tests");
    var m = encodeURIComponent("linkedin title"), n = encodeURIComponent("linkedin title container"), o = encodeURIComponent("summary"), p = encodeURIComponent("The source"), q = encodeURIComponent(d.linkedin + d.test_e + e.linkedin + e.title + m), r = encodeURIComponent(d.linkedin + d.test_e + e.linkedin + e.title + b.title), s = encodeURIComponent(d.linkedin + d.test_e + e.linkedin + e.title + n), t = encodeURIComponent(d.linkedin + d.localhost_e + e.title + b.title), u = encodeURIComponent(d.linkedin + d.test_e + e.container + e.linkedin + e.title + n), v = encodeURIComponent(d.linkedin + d.test_e + e.linkedin + e.title + m + e.summary + o), w = encodeURIComponent(d.linkedin + d.test_e + e.linkedin + e.title + m + e.summary + o + e.source + p);
    h({
        name: "li - no container + url + title",
        class_tag: f.linkedin + c.no_container + c.url_title,
        expected_url: g.open + q + g.linkedin + g.dimensions + g.close
    });
    h({
        name: "li - no container + url + no title",
        class_tag: f.linkedin + c.no_container + c.url,
        expected_url: g.open + r + g.linkedin + g.dimensions + g.close
    });
    h({
        name: "li - no container + no url + no title",
        class_tag: f.linkedin + c.no_container + c.no_url_no_title,
        expected_url: g.open + t + g.linkedin + g.dimensions + g.close
    });
    h({
        name: "li - no container + url + title + summary",
        class_tag: f.linkedin + c.no_container + c.url + c.title + c.summary,
        expected_url: g.open + v + g.linkedin + g.dimensions + g.close
    });
    h({
        name: "li - no container + url + title + summary + source",
        class_tag: f.linkedin + c.no_container + c.url + c.title + c.summary + c.source,
        expected_url: g.open + w + g.linkedin + g.dimensions + g.close
    });
    h({
        name: "li - container + url + title",
        class_tag: f.linkedin + c.container + c.url_title,
        expected_url: g.open + q + g.linkedin + g.dimensions + g.close
    });
    h({
        name: "li - container + url + no title",
        class_tag: f.linkedin + c.container + c.url,
        expected_url: g.open + s + g.linkedin + g.dimensions + g.close
    });
    h({
        name: "li - container + no url + no title",
        class_tag: f.linkedin + c.container + c.no_url_no_title,
        expected_url: g.open + u + g.linkedin + g.dimensions + g.close
    });
    h({
        name: "li - container + url + title + summary",
        class_tag: f.linkedin + c.container + c.url + c.title + c.summary,
        expected_url: g.open + v + g.linkedin + g.dimensions + g.close
    });
    h({
        name: "li - container + url + title + summary + source",
        class_tag: f.linkedin + c.container + c.url + c.title + c.summary + c.source,
        expected_url: g.open + w + g.linkedin + g.dimensions + g.close
    });
    j("mailto tests");
    var x = encodeURIComponent("mt title"), y = x + encodeURIComponent(" container"), z = b.mail_body + encodeURIComponent(" ") + d.test_e + e.mailto, A = b.mail_body + encodeURIComponent(" ") + d.localhost_e, B = b.mail_body + encodeURIComponent(" ") + d.test_e + e.container + e.mailto;
    h({
        name: "mt - no container + url + title",
        class_tag: f.mailto + c.no_container + c.url_title,
        expected_url: d.mailto + e.mail_body + x + encodeURIComponent(" ") + d.test_e + e.mailto + e.subject + x
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
        expected_url: d.mailto + e.mail_body + x + escape(" ") + d.localhost_e + e.subject + x
    });
    h({
        name: "mt - no container + url + title + mail_body + subject",
        class_tag: f.mailto + c.no_container + c.url_title + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + z + e.subject + b.subject
    });
    h({
        name: "mt - no container + url + no title + mail_body + subject",
        class_tag: f.mailto + c.no_container + c.url + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + z + e.subject + b.subject
    });
    h({
        name: "mt - no container + no url + title + mail_body + subject",
        class_tag: f.mailto + c.no_container + c.title + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + A + e.subject + b.subject
    });
    h({
        name: "mt - no container + no url + no title + mail_body + subject",
        class_tag: f.mailto + c.no_container + c.no_url_no_title + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + A + e.subject + b.subject
    });
    h({
        name: "mt - no container + url + title + mail_body + subject + send_to(single)",
        class_tag: f.mailto + c.no_container + c.url_title + c.mail_body + c.subject + c.send_to,
        expected_url: d.mailto + b.address + e.mail_body + z + e.subject + b.subject
    });
    h({
        name: "mt - no container + url + title + mail_body + subject + send_to(multiple)",
        class_tag: f.mailto + c.no_container + c.url_title + c.mail_body + c.subject + c.send_to + c.multiple,
        expected_url: d.mailto + b.multi_address + e.mail_body + z + e.subject + b.subject
    });
    h({
        name: "mt - container + url + title",
        class_tag: f.mailto + c.container + c.url_title,
        expected_url: d.mailto + e.mail_body + x + escape(" ") + d.test_e + e.mailto + e.subject + x
    });
    h({
        name: "mt - container + url + no title",
        class_tag: f.mailto + c.container + c.url,
        expected_url: d.mailto + e.mail_body + y + escape(" ") + d.test_e + e.mailto + e.subject + y
    });
    h({
        name: "mt - container + no url + no title",
        class_tag: f.mailto + c.container + c.no_url_no_title,
        expected_url: d.mailto + e.mail_body + y + escape(" ") + d.test_e + e.container + e.mailto + e.subject + y
    });
    h({
        name: "mt - container + no url + title",
        class_tag: f.mailto + c.container + c.title,
        expected_url: d.mailto + e.mail_body + x + escape(" ") + d.test_e + e.container + e.mailto + e.subject + x
    });
    h({
        name: "mt - container + url + title + subject + mail_body",
        class_tag: f.mailto + c.container + c.url_title + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + z + e.subject + b.subject
    });
    h({
        name: "mt - container + url + no title + subject + mail_body",
        class_tag: f.mailto + c.container + c.url + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + z + e.subject + b.subject
    });
    h({
        name: "mt - container + no url + title + subject + mail_body",
        class_tag: f.mailto + c.container + c.title + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + B + e.subject + b.subject
    });
    h({
        name: "mt - container + no url + no title + subject +  mail_body",
        class_tag: f.mailto + c.container + c.no_url_no_title + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + B + e.subject + b.subject
    });
    h({
        name: "mt - container + url + title + mail_body + subject + send_to(single)",
        class_tag: f.mailto + c.container + c.url_title + c.mail_body + c.subject + c.send_to,
        expected_url: d.mailto + b.address + e.mail_body + z + e.subject + b.subject
    });
    h({
        name: "mt - container + url + title + mail_body + subject + send_to(multiple)",
        class_tag: f.mailto + c.container + c.url_title + c.mail_body + c.subject + c.send_to + c.multiple,
        expected_url: d.mailto + b.multi_address + e.mail_body + z + e.subject + b.subject
    });
    j("twitter tests");
    var C = encodeURIComponent("tw no container"), D = encodeURIComponent("tw with container"), E = encodeURIComponent(d.twitter + d.test_e + e.twitter + e.tweet_body + C), F = encodeURIComponent(d.twitter + d.test_e + e.twitter + e.tweet_body + D), G = encodeURIComponent(d.twitter + d.test_e + e.twitter + e.tweet_body + b.title), H = encodeURIComponent(d.twitter + d.test_e + e.twitter + e.tweet_body + b.tweet_body), I = encodeURIComponent(d.twitter + d.test_e + e.twitter + e.tweet_body + C + e.via + b.username), J = encodeURIComponent(d.twitter + d.test_e + e.twitter + e.tweet_body + D + e.via + b.username), t = encodeURIComponent(d.twitter + d.localhost_e + e.tweet_body + b.title), u = encodeURIComponent(d.twitter + d.test_e + e.container + e.twitter + e.tweet_body + D), K = encodeURIComponent(d.twitter + d.localhost_e + e.tweet_body + C);
    h({
        name: "tw - no container + url + title",
        class_tag: f.twitter + c.no_container + c.url_title,
        expected_url: g.open + E + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - no container + url + no title",
        class_tag: f.twitter + c.no_container + c.url,
        expected_url: g.open + G + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - no container + url + title + tweet_body",
        class_tag: f.twitter + c.no_container + c.url_title + c.tweet_body,
        expected_url: g.open + H + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - no container + url + no title + tweet_body",
        class_tag: f.twitter + c.no_container + c.url + c.tweet_body,
        expected_url: g.open + H + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - no container + url + title + via",
        class_tag: f.twitter + c.no_container + c.url_title + c.via,
        expected_url: g.open + I + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - no container + no url + no title",
        class_tag: f.twitter + c.no_container + c.no_url_no_title,
        expected_url: g.open + t + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - no container + no url + title",
        class_tag: f.twitter + c.no_container + c.title,
        expected_url: g.open + K + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - container + url + title",
        class_tag: f.twitter + c.container + c.url_title,
        expected_url: g.open + F + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - container + url + no title",
        class_tag: f.twitter + c.container + c.url,
        expected_url: g.open + F + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - container + url + title + tweet_body",
        class_tag: f.twitter + c.container + c.url_title + c.tweet_body,
        expected_url: g.open + H + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - container + url + no title + tweet_body",
        class_tag: f.twitter + c.container + c.url + c.tweet_body,
        expected_url: g.open + H + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - container + url + title + via",
        class_tag: f.twitter + c.container + c.url_title + c.via,
        expected_url: g.open + J + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - container + no url + no title",
        class_tag: f.twitter + c.container + c.no_url_no_title,
        expected_url: g.open + u + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - container + no url + title",
        class_tag: f.twitter + c.container + c.title,
        expected_url: g.open + u + g.twitter + g.dimensions + g.close
    });
})(jQuery);