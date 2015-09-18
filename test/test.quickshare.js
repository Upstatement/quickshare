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
        blank: "B",
        description: "-d",
        media: "-m"
    };
    var d = {
        test_e: encodeURIComponent("http://www.test.com/"),
        localhost_e: encodeURIComponent("http://localhost:3000/test/qs_test.html"),
        fb_share: "https://www.facebook.com/sharer/sharer.php?u=",
        twitter: "https://twitter.com/intent/tweet?url=",
        gp_share: "https://plus.google.com/share?url=",
        mailto: "mailto:",
        linkedin: "http://www.linkedin.com/shareArticle?mini=true&url=",
        hackernews: "http://news.ycombinator.com/submitlink?u=",
        pinterest: "http://www.pinterest.com/pin/create/button/?url=",
        reddit: "http://www.reddit.com/submit?url="
    };
    var e = {
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
    var f = {
        fb_share: ".test-fbs",
        gp_share: ".test-gps",
        twitter: ".test-tw",
        mailto: ".test-mt",
        linkedin: ".test-li",
        hackernews: ".test-hn",
        pinterest: ".test-p",
        reddit: ".test-r"
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
    j("hacker-news tests");
    var m = encodeURIComponent("hacker-news title"), n = encodeURIComponent("hacker-news title container");
    h({
        name: "Hn - no container + url + title",
        class_tag: f.hackernews + c.no_container + c.url_title,
        expected_url: d.hackernews + d.test_e + e.hackernews + e.hnTitle + m
    });
    h({
        name: "Hn - no container + url + no title",
        class_tag: f.hackernews + c.no_container + c.url,
        expected_url: d.hackernews + d.test_e + e.hackernews + e.hnTitle + b.title
    });
    h({
        name: "Hn - no container + no url + no title",
        class_tag: f.hackernews + c.no_container + c.no_url_no_title,
        expected_url: d.hackernews + d.localhost_e + e.hnTitle + b.title
    });
    h({
        name: "Hn - container + url + title",
        class_tag: f.hackernews + c.container + c.url_title,
        expected_url: d.hackernews + d.test_e + e.hackernews + e.hnTitle + m
    });
    h({
        name: "Hn - container + url + no title",
        class_tag: f.hackernews + c.container + c.url,
        expected_url: d.hackernews + d.test_e + e.hackernews + e.hnTitle + n
    });
    h({
        name: "Hn - container + no url + no title",
        class_tag: f.hackernews + c.container + c.no_url_no_title,
        expected_url: d.hackernews + d.test_e + e.container + e.hackernews + e.hnTitle + n
    });
    j("linkedin tests");
    var o = encodeURIComponent("linkedin title"), p = encodeURIComponent("linkedin title container"), q = encodeURIComponent("summary"), r = encodeURIComponent("The source"), s = encodeURIComponent(d.linkedin + d.test_e + e.linkedin + e.title + o), t = encodeURIComponent(d.linkedin + d.test_e + e.linkedin + e.title + b.title), u = encodeURIComponent(d.linkedin + d.test_e + e.linkedin + e.title + p), v = encodeURIComponent(d.linkedin + d.localhost_e + e.title + b.title), w = encodeURIComponent(d.linkedin + d.test_e + e.container + e.linkedin + e.title + p), x = encodeURIComponent(d.linkedin + d.test_e + e.linkedin + e.title + o + e.summary + q), y = encodeURIComponent(d.linkedin + d.test_e + e.linkedin + e.title + o + e.summary + q + e.source + r);
    h({
        name: "li - no container + url + title",
        class_tag: f.linkedin + c.no_container + c.url_title,
        expected_url: g.open + s + g.linkedin + g.dimensions + g.close
    });
    h({
        name: "li - no container + url + no title",
        class_tag: f.linkedin + c.no_container + c.url,
        expected_url: g.open + t + g.linkedin + g.dimensions + g.close
    });
    h({
        name: "li - no container + no url + no title",
        class_tag: f.linkedin + c.no_container + c.no_url_no_title,
        expected_url: g.open + v + g.linkedin + g.dimensions + g.close
    });
    h({
        name: "li - no container + url + title + summary",
        class_tag: f.linkedin + c.no_container + c.url + c.title + c.summary,
        expected_url: g.open + x + g.linkedin + g.dimensions + g.close
    });
    h({
        name: "li - no container + url + title + summary + source",
        class_tag: f.linkedin + c.no_container + c.url + c.title + c.summary + c.source,
        expected_url: g.open + y + g.linkedin + g.dimensions + g.close
    });
    h({
        name: "li - container + url + title",
        class_tag: f.linkedin + c.container + c.url_title,
        expected_url: g.open + s + g.linkedin + g.dimensions + g.close
    });
    h({
        name: "li - container + url + no title",
        class_tag: f.linkedin + c.container + c.url,
        expected_url: g.open + u + g.linkedin + g.dimensions + g.close
    });
    h({
        name: "li - container + no url + no title",
        class_tag: f.linkedin + c.container + c.no_url_no_title,
        expected_url: g.open + w + g.linkedin + g.dimensions + g.close
    });
    h({
        name: "li - container + url + title + summary",
        class_tag: f.linkedin + c.container + c.url + c.title + c.summary,
        expected_url: g.open + x + g.linkedin + g.dimensions + g.close
    });
    h({
        name: "li - container + url + title + summary + source",
        class_tag: f.linkedin + c.container + c.url + c.title + c.summary + c.source,
        expected_url: g.open + y + g.linkedin + g.dimensions + g.close
    });
    j("mailto tests");
    var z = encodeURIComponent("mt title"), A = z + encodeURIComponent(" container"), B = b.mail_body + encodeURIComponent(" ") + d.test_e + e.mailto, C = b.mail_body + encodeURIComponent(" ") + d.localhost_e, D = b.mail_body + encodeURIComponent(" ") + d.test_e + e.container + e.mailto;
    h({
        name: "mt - no container + url + title",
        class_tag: f.mailto + c.no_container + c.url_title,
        expected_url: d.mailto + e.mail_body + z + encodeURIComponent(" ") + d.test_e + e.mailto + e.subject + z
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
        expected_url: d.mailto + e.mail_body + z + escape(" ") + d.localhost_e + e.subject + z
    });
    h({
        name: "mt - no container + url + title + mail_body + subject",
        class_tag: f.mailto + c.no_container + c.url_title + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + B + e.subject + b.subject
    });
    h({
        name: "mt - no container + url + no title + mail_body + subject",
        class_tag: f.mailto + c.no_container + c.url + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + B + e.subject + b.subject
    });
    h({
        name: "mt - no container + no url + title + mail_body + subject",
        class_tag: f.mailto + c.no_container + c.title + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + C + e.subject + b.subject
    });
    h({
        name: "mt - no container + no url + no title + mail_body + subject",
        class_tag: f.mailto + c.no_container + c.no_url_no_title + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + C + e.subject + b.subject
    });
    h({
        name: "mt - no container + url + title + mail_body + subject + send_to(single)",
        class_tag: f.mailto + c.no_container + c.url_title + c.mail_body + c.subject + c.send_to,
        expected_url: d.mailto + b.address + e.mail_body + B + e.subject + b.subject
    });
    h({
        name: "mt - no container + url + title + mail_body + subject + send_to(multiple)",
        class_tag: f.mailto + c.no_container + c.url_title + c.mail_body + c.subject + c.send_to + c.multiple,
        expected_url: d.mailto + b.multi_address + e.mail_body + B + e.subject + b.subject
    });
    h({
        name: "mt - container + url + title",
        class_tag: f.mailto + c.container + c.url_title,
        expected_url: d.mailto + e.mail_body + z + escape(" ") + d.test_e + e.mailto + e.subject + z
    });
    h({
        name: "mt - container + url + no title",
        class_tag: f.mailto + c.container + c.url,
        expected_url: d.mailto + e.mail_body + A + escape(" ") + d.test_e + e.mailto + e.subject + A
    });
    h({
        name: "mt - container + no url + no title",
        class_tag: f.mailto + c.container + c.no_url_no_title,
        expected_url: d.mailto + e.mail_body + A + escape(" ") + d.test_e + e.container + e.mailto + e.subject + A
    });
    h({
        name: "mt - container + no url + title",
        class_tag: f.mailto + c.container + c.title,
        expected_url: d.mailto + e.mail_body + z + escape(" ") + d.test_e + e.container + e.mailto + e.subject + z
    });
    h({
        name: "mt - container + url + title + subject + mail_body",
        class_tag: f.mailto + c.container + c.url_title + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + B + e.subject + b.subject
    });
    h({
        name: "mt - container + url + no title + subject + mail_body",
        class_tag: f.mailto + c.container + c.url + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + B + e.subject + b.subject
    });
    h({
        name: "mt - container + no url + title + subject + mail_body",
        class_tag: f.mailto + c.container + c.title + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + D + e.subject + b.subject
    });
    h({
        name: "mt - container + no url + no title + subject +  mail_body",
        class_tag: f.mailto + c.container + c.no_url_no_title + c.mail_body + c.subject,
        expected_url: d.mailto + e.mail_body + D + e.subject + b.subject
    });
    h({
        name: "mt - container + url + title + mail_body + subject + send_to(single)",
        class_tag: f.mailto + c.container + c.url_title + c.mail_body + c.subject + c.send_to,
        expected_url: d.mailto + b.address + e.mail_body + B + e.subject + b.subject
    });
    h({
        name: "mt - container + url + title + mail_body + subject + send_to(multiple)",
        class_tag: f.mailto + c.container + c.url_title + c.mail_body + c.subject + c.send_to + c.multiple,
        expected_url: d.mailto + b.multi_address + e.mail_body + B + e.subject + b.subject
    });
    j("pinterest tests");
    var E = encodeURIComponent("http://cdn.upstatement.com/wp-content/uploads/2013/08/stevens-book.jpg"), F = encodeURIComponent("Pinterest description"), G = encodeURIComponent("Pinterest description container");
    h({
        name: "P - no container + url + media + description",
        class_tag: f.pinterest + c.no_container + c.url + c.media + c.description,
        expected_url: d.pinterest + d.test_e + e.pinterest + e.media + E + e.description + F
    });
    h({
        name: "P - no container + no url + media + description",
        class_tag: f.pinterest + c.no_container + c.media + c.description,
        expected_url: d.pinterest + d.localhost_e + e.media + E + e.description + F
    });
    h({
        name: "P - container + url + media + description",
        class_tag: f.pinterest + c.container + c.url + c.media + c.description,
        expected_url: d.pinterest + d.test_e + e.pinterest + e.media + E + e.description + F
    });
    h({
        name: "P - container + no url + media + description",
        class_tag: f.pinterest + c.container + c.media + c.description,
        expected_url: d.pinterest + d.test_e + e.container + e.pinterest + e.media + E + e.description + F
    });
    h({
        name: "P - container + no url + no media + no description",
        class_tag: f.pinterest + c.container,
        expected_url: d.pinterest + d.test_e + e.container + e.pinterest + e.media + E + e.description + G
    });
    j("reddit share tests");
    var H = encodeURIComponent("reddit title"), I = encodeURIComponent("reddit title container");
    h({
        name: "R - no container + url + title",
        class_tag: f.reddit + c.no_container + c.url_title,
        expected_url: d.reddit + d.test_e + e.reddit + e.title + H
    });
    h({
        name: "R - no container + no url + title",
        class_tag: f.reddit + c.no_container + c.title,
        expected_url: d.reddit + d.localhost_e + e.title + H
    });
    h({
        name: "R - no container + no url + no title",
        class_tag: f.reddit + c.no_container + c.no_url_no_title,
        expected_url: d.reddit + d.localhost_e + e.title + b.title
    });
    h({
        name: "R - container + url + title",
        class_tag: f.reddit + c.container + c.url_title,
        expected_url: d.reddit + d.test_e + e.reddit + e.title + H
    });
    h({
        name: "R - container + no url + title",
        class_tag: f.reddit + c.container + c.title,
        expected_url: d.reddit + d.test_e + e.container + e.reddit + e.title + H
    });
    h({
        name: "R - container + no url + no title",
        class_tag: f.reddit + c.container + c.no_url_no_title,
        expected_url: d.reddit + d.test_e + e.container + e.reddit + e.title + I
    });
    j("twitter tests");
    var J = encodeURIComponent("tw no container"), K = encodeURIComponent("tw with container"), L = encodeURIComponent(d.twitter + d.test_e + e.twitter + e.tweet_body + J), M = encodeURIComponent(d.twitter + d.test_e + e.twitter + e.tweet_body + K), N = encodeURIComponent(d.twitter + d.test_e + e.twitter + e.tweet_body + b.title), O = encodeURIComponent(d.twitter + d.test_e + e.twitter + e.tweet_body + b.tweet_body), P = encodeURIComponent(d.twitter + d.test_e + e.twitter + e.tweet_body + J + e.via + b.username), Q = encodeURIComponent(d.twitter + d.test_e + e.twitter + e.tweet_body + K + e.via + b.username), v = encodeURIComponent(d.twitter + d.localhost_e + e.tweet_body + b.title), w = encodeURIComponent(d.twitter + d.test_e + e.container + e.twitter + e.tweet_body + K), R = encodeURIComponent(d.twitter + d.localhost_e + e.tweet_body + J);
    h({
        name: "tw - no container + url + title",
        class_tag: f.twitter + c.no_container + c.url_title,
        expected_url: g.open + L + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - no container + url + no title",
        class_tag: f.twitter + c.no_container + c.url,
        expected_url: g.open + N + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - no container + url + title + tweet_body",
        class_tag: f.twitter + c.no_container + c.url_title + c.tweet_body,
        expected_url: g.open + O + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - no container + url + no title + tweet_body",
        class_tag: f.twitter + c.no_container + c.url + c.tweet_body,
        expected_url: g.open + O + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - no container + url + title + via",
        class_tag: f.twitter + c.no_container + c.url_title + c.via,
        expected_url: g.open + P + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - no container + no url + no title",
        class_tag: f.twitter + c.no_container + c.no_url_no_title,
        expected_url: g.open + v + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - no container + no url + title",
        class_tag: f.twitter + c.no_container + c.title,
        expected_url: g.open + R + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - container + url + title",
        class_tag: f.twitter + c.container + c.url_title,
        expected_url: g.open + M + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - container + url + no title",
        class_tag: f.twitter + c.container + c.url,
        expected_url: g.open + M + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - container + url + title + tweet_body",
        class_tag: f.twitter + c.container + c.url_title + c.tweet_body,
        expected_url: g.open + O + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - container + url + no title + tweet_body",
        class_tag: f.twitter + c.container + c.url + c.tweet_body,
        expected_url: g.open + O + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - container + url + title + via",
        class_tag: f.twitter + c.container + c.url_title + c.via,
        expected_url: g.open + Q + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - container + no url + no title",
        class_tag: f.twitter + c.container + c.no_url_no_title,
        expected_url: g.open + w + g.twitter + g.dimensions + g.close
    });
    h({
        name: "tw - container + no url + title",
        class_tag: f.twitter + c.container + c.title,
        expected_url: g.open + w + g.twitter + g.dimensions + g.close
    });
})(jQuery);