(function(a) {
    var b = function(a, b) {
        if (b) return a + b;
        return "";
    };
    var c = function(a, b) {
        if (a) return escape(a);
        return b;
    };
    var d = function(a) {
        var b = {}, c = a.parents(".qs-container"), d, e;
        if (c) {
            d = c.data("url");
            e = c.data("title");
        }
        b.src_url = escape(a.data("url") || d || window.location.href);
        b.title = escape(a.data("title") || e || "Sharing: ");
        return b;
    };
    var e = {};
    e["default"] = {
        extractParams: d,
        makeUrl: function(a) {
            console.error("did not provide service to share to");
            return null;
        }
    };
    e["facebook-share"] = {
        extractParams: d,
        makeUrl: function(a) {
            var b = "https://www.facebook.com/sharer/sharer.php?u=" + a.src_url;
            return b;
        },
        icon: "facebook"
    };
    e["google-plus-share"] = {
        extractParams: d,
        makeUrl: function(a) {
            var b = "https://plus.google.com/share?url=" + a.src_url;
            return b;
        },
        icon: "google-plus"
    };
    e["mailto"] = {
        extractParams: function(a) {
            var b = d(a), e = a.data("mail-body"), f = a.data("subject"), g = a.data("send-to");
            b.mail_body = c(e, b.title + escape(" ") + b.src_url);
            b.subject = c(f, b.title);
            b.send_to = escape(g || "");
            return b;
        },
        makeUrl: function(a) {
            var c = "mailto:" + a.send_to + b("?body=", a.mail_body) + b("&subject=", a.subject);
            return c;
        },
        icon: "envelope-o"
    };
    e["twitter"] = {
        extractParams: function(a) {
            var b = d(a), e = a.data("tweet-body"), f = a.data("via-username");
            b.tweet_body = c(e, b.title);
            b.via_username = c(f, null);
            return b;
        },
        makeUrl: function(a) {
            var c = "https://twitter.com/intent/tweet?url=" + a.src_url + b("&text=", a.tweet_body) + b("&via=", a.via_username);
            return c;
        },
        icon: "twitter"
    };
    a.fn.quickShare = function(b) {
        var c = a(this), d = c.find(".qs-link");
        d.each(function() {
            var b = a(this), c = b.data("service") || "default", d = b.children("i.qs-icon") || false, f = e[c] || e["default"], g = f.extractParams(b), h = f.makeUrl(g);
            if (h) b.attr("href", h);
            if (d) d.addClass("fa fa-" + f.icon);
        });
        return true;
    };
})(jQuery);