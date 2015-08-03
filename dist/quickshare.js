(function(a, b) {
    var c = function(a, b) {
        if (b) return a + b;
        return "";
    };
    var d = function(a, b) {
        if (a) return escape(a);
        return b;
    };
    var e = function(a, b) {
        if (a.indexOf("http:") === -1 && a.indexOf("https:") === -1) {
            a = "http://" + a;
        }
        if (b) {
            while (a.charAt(a.length - 1) === "/") {
                a = a.substr(0, a.length - 1);
            }
        }
        return a;
    };
    var f = function(a, b) {
        var c = "qs-";
        if (a) return a.data(c + b);
        return false;
    };
    var g = function(a, b) {
        var c = a.parents(".qs-container[data-qs-" + b + "]");
        if (c) return f(c, b); else return false;
    };
    var h = function(a) {
        var c = {}, d = g(a, "url"), h = g(a, "title"), i = g(a, "suffix");
        container_image = g(a, "image");
        container_description = g(a, "description");
        var j = f(a, "suffix") || i || "", k = f(a, "url") || d || b.location.href, l = f(a, "title") || h || "Sharing: ", m = f(a, "image") || container_image || "";
        description = f(a, "description") || container_description || "";
        if (j) {
            k = e(k, true) + j;
        } else {
            k = e(k, false);
        }
        c.src_url = escape(k);
        c.title = escape(l);
        c.image = escape(m);
        c.description = escape(description);
        return c;
    };
    var i = {};
    i["default"] = {
        extractParams: h,
        makeUrl: function(a) {
            console.error("did not provide service to share to");
            return null;
        }
    };
    i["facebook-share"] = {
        extractParams: h,
        makeUrl: function(a) {
            var b = "https://www.facebook.com/sharer/sharer.php?u=" + a.src_url;
            b = "javascript:window.open('" + b + "','myFacebookWin','width=620,height=350'); void(0)";
            return b;
        },
        getCount: function(b, c) {
            a.ajax({
                url: "https://api.facebook.com/method/links.getStats?urls=" + b + "&format=json",
                success: function(a) {
                    if (a.length > 0) c(a[0].share_count); else c(0);
                },
                dataType: "jsonp",
                crossDomain: true
            });
        },
        icon: "facebook"
    };
    i["google-plus-share"] = {
        extractParams: h,
        makeUrl: function(a) {
            var b = "https://plus.google.com/share?url=" + a.src_url;
            return b;
        },
        getCount: function(b, c) {
            a.ajax({
                url: "https://clients6.google.com/rpc",
                success: function(a) {
                    console.log(a);
                },
                crossDomain: true,
                datatype: "jsonp",
                body: [ {
                    method: "pos.plusones.get",
                    id: "p",
                    params: {
                        nolog: true,
                        id: b,
                        source: "widget",
                        userId: "@viewer",
                        groupId: "@self"
                    },
                    jsonrpc: "2.0",
                    key: "p",
                    apiVersion: "v1"
                } ]
            });
        },
        icon: "google-plus"
    };
    i["hacker-news"] = {
        extractParams: h,
        makeUrl: function(a) {
            var b = "http://news.ycombinator.com/submitlink?u=" + a.src_url + c("&t=", a.title);
            return b;
        },
        getCount: function(b, c) {
            a.ajax({
                url: "https://hn.algolia.com/api/v1/search?query=%22" + b + "%22&tags=story&advancedSyntax=true&attributesToRetrieve=points,url",
                success: function(a) {
                    if (a.hits.length > 0) c(a.hits[0].points); else c(0);
                },
                crossDomain: true
            });
        },
        icon: "hacker-news"
    };
    i["linkedin"] = {
        extractParams: function(a) {
            var b = h(a), c = f(a, "summary");
            source = f(a, "source");
            if (c && c.length < 256) {
                b.summary = d(c, null);
            }
            if (source && source.length < 200) {
                b.source = d(source, null);
            }
            if (b.title && b.title.length > 200) {
                b.title = "Share on LinkedIn";
            }
            return b;
        },
        makeUrl: function(a) {
            var b = "http://www.linkedin.com/shareArticle?mini=true&url=" + a.src_url + c("&title=", a.title) + c("&summary=", a.summary) + c("&source=", a.source);
            b = "javascript:window.open('" + b + "','myLinkedinWin','width=620,height=350'); void(0)";
            return b;
        },
        getCount: function(a, b) {
            b(0);
        },
        icon: "linkedin"
    };
    i["mailto"] = {
        extractParams: function(a) {
            var b = h(a), c = f(a, "mail-body"), e = f(a, "subject"), g = f(a, "send-to");
            b.mail_body = d(c, b.title + escape(" ") + b.src_url);
            b.subject = d(e, b.title);
            b.send_to = escape(g || "");
            return b;
        },
        makeUrl: function(a) {
            var b = "mailto:" + a.send_to + c("?body=", a.mail_body) + c("&subject=", a.subject);
            return b;
        },
        getCount: function(a, b) {},
        icon: "envelope-o"
    };
    i["pinterest"] = {
        extractParams: h,
        makeUrl: function(a) {
            var b = "http://www.pinterest.com/pin/create/button/?url=" + a.src_url + "&media=" + a.image + "&description=" + a.description;
            return b;
        },
        icon: "pinterest-p"
    };
    i["reddit"] = {
        extractParams: h,
        makeUrl: function(a) {
            var b = "http://www.reddit.com/submit?url=" + a.src_url + c("&title=", a.title);
            return b;
        },
        getCount: function(b, c) {
            a.ajax({
                url: "http://buttons.reddit.com/button_info.json?url=" + b,
                success: function(a) {
                    if (a.data.children.length > 0) c(a.data.children[0].data.ups); else c(0);
                },
                crossDomain: true
            });
        },
        icon: "reddit"
    };
    i["twitter"] = {
        extractParams: function(a) {
            var b = h(a), c = f(a, "tweet-body"), e = f(a, "via-username");
            if (c) {
                b.tweet_body = d(c, b.title);
            } else {
                b.tweet_body = encodeURIComponent(unescape(b.title));
                if (b.tweet_body.indexOf("'")) {
                    b.tweet_body = b.tweet_body.replace(/'/g, "%27");
                }
            }
            b.via_username = d(e, null);
            return b;
        },
        makeUrl: function(a) {
            var b = "https://twitter.com/intent/tweet?url=" + a.src_url + c("&text=", a.tweet_body) + c("&via=", a.via_username);
            b = "javascript:window.open('" + escape(b) + "','myTwitterWin','width=620,height=350'); void(0)";
            return b;
        },
        getCount: function(b, c) {
            a.ajax({
                url: "http://urls.api.twitter.com/1/urls/count.json?url=" + b,
                success: function(a) {
                    c(a.count);
                },
                dataType: "jsonp",
                crossDomain: true
            });
        },
        icon: "twitter"
    };
    b.quickShare = function(c) {
        if (!c) c = b.document;
        var d = a(c), e = d.find(".qs-link");
        e.each(function() {
            var b = a(this), c = f(b, "service") || "default", d = f(b, "count-selector") || false, e = b.children("i.qs-icon") || false, g = i[c] || i["default"], h = g.extractParams(b), j = g.makeUrl(h);
            if (j) b.attr("href", j);
            if (e) e.addClass("fa fa-" + g.icon);
            if (d) {
                g.getCount(h.src_url, function(b) {
                    a(d).text(b);
                });
            }
        });
    };
})(jQuery, window);