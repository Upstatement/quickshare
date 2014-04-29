(function(a, b) {
    var c = function(a, b) {
        if (b) return a + b;
        return "";
    };
    var d = function(a, b) {
        if (a) return escape(a);
        return b;
    };
    var e = function(a) {
        while (a.charAt(a.length - 1) === "/") {
            a = a.substr(0, a.length - 1);
        }
        return a;
    };
    var f = function(a, b) {
        var c = "qs-";
        console.log(a.data(c + b));
        return a.data(c + b);
    };
    var g = function(a) {
        var c = {}, d = a.parents(".qs-container"), g, h, i;
        if (d) {
            g = f(d, "url");
            h = f(d, "title");
            i = f(d, "suffix");
        }
        var j = f(a, "suffix") || i || "", k = f(a, "url") || g || b.location.href, l = f(a, "title") || h || "Sharing: ";
        if (j) k = e(k) + j;
        c.src_url = escape(k);
        c.title = escape(l);
        return c;
    };
    var h = {};
    h["default"] = {
        extractParams: g,
        makeUrl: function(a) {
            console.error("did not provide service to share to");
            return null;
        }
    };
    h["facebook-share"] = {
        extractParams: g,
        makeUrl: function(a) {
            var b = "https://www.facebook.com/sharer/sharer.php?u=" + a.src_url;
            return b;
        },
        icon: "facebook"
    };
    h["google-plus-share"] = {
        extractParams: g,
        makeUrl: function(a) {
            var b = "https://plus.google.com/share?url=" + a.src_url;
            return b;
        },
        icon: "google-plus"
    };
    h["mailto"] = {
        extractParams: function(a) {
            var b = g(a), c = f(a, "mail-body"), e = f(a, "subject"), h = f(a, "send-to");
            b.mail_body = d(c, b.title + escape(" ") + b.src_url);
            b.subject = d(e, b.title);
            b.send_to = escape(h || "");
            return b;
        },
        makeUrl: function(a) {
            var b = "mailto:" + a.send_to + c("?body=", a.mail_body) + c("&subject=", a.subject);
            return b;
        },
        icon: "envelope-o"
    };
    h["twitter"] = {
        extractParams: function(a) {
            var b = g(a), c = f(a, "tweet-body"), e = f(a, "via-username");
            b.tweet_body = d(c, b.title);
            b.via_username = d(e, null);
            return b;
        },
        makeUrl: function(a) {
            var b = "https://twitter.com/intent/tweet?url=" + a.src_url + c("&text=", a.tweet_body) + c("&via=", a.via_username);
            return b;
        },
        icon: "twitter"
    };
    a.fn.quickShare = function(b) {
        var c = a(this), d = c.find(".qs-link");
        d.each(function() {
            var b = a(this), c = f(b, "service") || "default", d = f(b, "count-id") || false, e = b.children("i.qs-icon") || false, g = h[c] || h["default"], i = g.extractParams(b), j = g.makeUrl(i);
            if (j) b.attr("href", j);
            if (e) e.addClass("fa fa-" + g.icon);
            if (d) {
                g.findCount(function(b) {
                    a(d).val(b);
                });
            }
        });
        return true;
    };
})(jQuery, window);