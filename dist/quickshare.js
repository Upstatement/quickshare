(function(a, b) {
    var c = function(a, b) {
        if (b) return a + b;
        return "";
    };
    var d = function(a) {
        a = (a + "").toString();
        return encodeURIComponent(a).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/" "/g, "%20");
    };
    var e = function(a) {
        return decodeURIComponent(a).replace(/%20/g, " ");
    };
    var f = function(a, b) {
        if (a) return d(a);
        return b;
    };
    var g = function(a, b) {
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
    var h = function(a, b) {
        var c = "data-qs-";
        if (a) return a.getAttribute(c + b);
        return false;
    };
    var i = function(a, b) {
        if (!a) return;
        if (a.classList) a.classList.add(b); else if (!PGACommon.hasClass(a, b)) a.className += " " + b;
    };
    var j = function(a, b) {
        if (a.classList) return a.classList.contains(b); else return !!a.className.match(new RegExp("(\\s|^)" + b + "(\\s|$)"));
    };
    var k = function(a, b) {
        var c = [];
        while (a.parentNode) {
            a = a.parentNode;
            if (a.className != undefined) {
                if (j(a, b)) {
                    c.push(a);
                }
            }
        }
        return c;
    };
    var l = function(a, b) {
        var c = k(a, "qs-container");
        for (var d = 0; d < c.length; d++) {
            var e = c[d].getAttribute("data-qs-" + b);
            if (e != "" && e) {
                return e;
            }
        }
    };
    var m = function(a) {
        var c = {}, d = l(a, "url"), e = l(a, "title"), f = l(a, "suffix");
        container_image = l(a, "image");
        container_description = l(a, "description");
        var i = h(a, "suffix") || f || "", j = h(a, "url") || d || b.location.href, k = h(a, "title") || e || "Sharing: ", m = h(a, "image") || container_image || "";
        description = h(a, "description") || container_description || "";
        if (i) {
            j = g(j, true) + i;
        } else {
            j = g(j, false);
        }
        c.src_url = encodeURIComponent(j);
        c.title = encodeURIComponent(k);
        c.image = encodeURIComponent(m);
        c.description = encodeURIComponent(description);
        return c;
    };
    var n = {};
    n["default"] = {
        extractParams: m,
        makeUrl: function(a) {
            console.error("did not provide service to share to");
            return null;
        }
    };
    n["facebook-share"] = {
        extractParams: m,
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
    n["google-plus-share"] = {
        extractParams: m,
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
    n["hacker-news"] = {
        extractParams: m,
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
    n["linkedin"] = {
        extractParams: function(a) {
            var b = m(a), c = h(a, "summary");
            source = h(a, "source");
            if (c && c.length < 256) {
                b.summary = f(c, null);
            }
            if (source && source.length < 200) {
                b.source = f(source, null);
            }
            if (b.title && b.title.length > 200) {
                b.title = "Share on LinkedIn";
            }
            return b;
        },
        makeUrl: function(a) {
            var b = "http://www.linkedin.com/shareArticle?mini=true&url=" + a.src_url + c("&title=", a.title) + c("&summary=", a.summary) + c("&source=", a.source);
            b = "javascript:window.open('" + encodeURIComponent(b) + "','myLinkedinWin','width=620,height=350'); void(0)";
            return b;
        },
        getCount: function(a, b) {
            b(0);
        },
        icon: "linkedin"
    };
    n["mailto"] = {
        extractParams: function(a) {
            var b = m(a), c = h(a, "mail-body"), d = h(a, "subject"), e = h(a, "send-to");
            if (c) {
                b.mail_body = encodeURIComponent(c + " ") + b.src_url;
            } else {
                b.mail_body = b.title + encodeURIComponent(" ") + b.src_url;
            }
            b.subject = f(d, b.title);
            b.send_to = e || "";
            return b;
        },
        makeUrl: function(a) {
            var b = "mailto:" + a.send_to + c("?body=", a.mail_body) + c("&subject=", a.subject);
            return b;
        },
        getCount: function(a, b) {},
        icon: "envelope-o"
    };
    n["pinterest"] = {
        extractParams: m,
        makeUrl: function(a) {
            var b = "http://www.pinterest.com/pin/create/button/?url=" + a.src_url + "&media=" + a.image + "&description=" + a.description;
            return b;
        },
        icon: "pinterest-p"
    };
    n["reddit"] = {
        extractParams: m,
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
    n["twitter"] = {
        extractParams: function(a) {
            var b = m(a), c = a.dataset.qsTweetBody, g = a.dataset.qsViaUsername;
            if (c) {
                b.tweet_body = f(c, b.title);
            } else {
                b.tweet_body = d(e(b.title));
            }
            b.via_username = f(g, null);
            return b;
        },
        makeUrl: function(a) {
            var b = "https://twitter.com/intent/tweet?url=" + a.src_url + c("&text=", a.tweet_body) + c("&via=", a.via_username);
            b = "javascript:window.open('" + encodeURIComponent(b) + "','myTwitterWin','width=620,height=350'); void(0)";
            return b;
        },
        icon: "twitter"
    };
    b.quickShare = function(a) {
        if (!a) a = b.document;
        qslinks = a.querySelectorAll(".qs-link");
        [].forEach.call(qslinks, function(b) {
            var c = b, d = c.dataset.qsService || "default", e = c.dataset.qsCountSelector || false, f = c.querySelector("i.qs-icon") || false, g = n[d] || n["default"], h = g.extractParams(c), j = g.makeUrl(h);
            if (j) c.href = j;
            if (f) {
                i(f, "fa");
                i(f, "fa-" + g.icon);
            }
            if (e) {
                console.log(g.getCount);
                if (g.getCount) {
                    g.getCount(h.src_url, function(b) {
                        var c = a.querySelector(e);
                        if (c) c.innerHTML(b);
                    });
                }
            }
        });
    };
})(jQuery, window);