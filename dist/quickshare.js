(function(a) {
    var b = function(a, b) {
        if (b) return a + b;
        return "";
    };
    var c = function(a) {
        a = (a + "").toString();
        return encodeURIComponent(a).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/" "/g, "%20");
    };
    var d = function(a) {
        return decodeURIComponent(a).replace(/%20/g, " ");
    };
    var e = function(a, b) {
        if (a) return c(a);
        return b;
    };
    var f = function(a, b) {
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
    var g = function(a, b) {
        var c = "data-qs-";
        if (a) return a.getAttribute(c + b);
        return false;
    };
    var h = function(a, b) {
        if (!a) return;
        if (a.classList) a.classList.add(b); else if (!PGACommon.hasClass(a, b)) a.className += " " + b;
    };
    var i = function(a, b) {
        if (a.classList) return a.classList.contains(b); else return !!a.className.match(new RegExp("(\\s|^)" + b + "(\\s|$)"));
    };
    var j = function(a, b) {
        var c = [];
        while (a.parentNode) {
            a = a.parentNode;
            if (a.className != undefined) {
                if (i(a, b)) {
                    c.push(a);
                }
            }
        }
        return c;
    };
    var k = function(a, b) {
        var c = j(a, "qs-container");
        for (var d = 0; d < c.length; d++) {
            var e = c[d].getAttribute("data-qs-" + b);
            if (e != "" && e) {
                return e;
            }
        }
    };
    var l = function(b) {
        var c = {}, d = k(b, "url"), e = k(b, "title"), h = k(b, "suffix");
        container_image = k(b, "image");
        container_description = k(b, "description");
        var i = g(b, "suffix") || h || "", j = g(b, "url") || d || a.location.href, l = g(b, "title") || e || "Sharing: ", m = g(b, "image") || container_image || "";
        description = g(b, "description") || container_description || "";
        if (i) {
            j = f(j, true) + i;
        } else {
            j = f(j, false);
        }
        c.src_url = encodeURIComponent(j);
        c.title = encodeURIComponent(l);
        c.image = encodeURIComponent(m);
        c.description = encodeURIComponent(description);
        return c;
    };
    var m = {};
    m["default"] = {
        extractParams: l,
        makeUrl: function(a) {
            console.error("did not provide service to share to");
            return null;
        }
    };
    m["facebook-share"] = {
        extractParams: l,
        makeUrl: function(a) {
            var b = "https://www.facebook.com/sharer/sharer.php?u=" + a.src_url;
            b = "javascript:window.open('" + b + "','myFacebookWin','width=620,height=350'); void(0)";
            return b;
        },
        icon: "facebook"
    };
    m["google-plus-share"] = {
        extractParams: l,
        makeUrl: function(a) {
            var b = "https://plus.google.com/share?url=" + a.src_url;
            return b;
        },
        getCount: function(a, b) {
            $.ajax({
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
                        id: a,
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
    m["hacker-news"] = {
        extractParams: l,
        makeUrl: function(a) {
            var c = "http://news.ycombinator.com/submitlink?u=" + a.src_url + b("&t=", a.title);
            return c;
        },
        getCount: function(a, b) {
            $.ajax({
                url: "https://hn.algolia.com/api/v1/search?query=%22" + a + "%22&tags=story&advancedSyntax=true&attributesToRetrieve=points,url",
                success: function(a) {
                    if (a.hits.length > 0) b(a.hits[0].points); else b(0);
                },
                crossDomain: true
            });
        },
        icon: "hacker-news"
    };
    m["linkedin"] = {
        extractParams: function(a) {
            var b = l(a), c = g(a, "summary");
            source = g(a, "source");
            if (c && c.length < 256) {
                b.summary = e(c, null);
            }
            if (source && source.length < 200) {
                b.source = e(source, null);
            }
            if (b.title && b.title.length > 200) {
                b.title = "Share on LinkedIn";
            }
            return b;
        },
        makeUrl: function(a) {
            var c = "http://www.linkedin.com/shareArticle?mini=true&url=" + a.src_url + b("&title=", a.title) + b("&summary=", a.summary) + b("&source=", a.source);
            c = "javascript:window.open('" + encodeURIComponent(c) + "','myLinkedinWin','width=620,height=350'); void(0)";
            return c;
        },
        getCount: function(a, b) {
            b(0);
        },
        icon: "linkedin"
    };
    m["mailto"] = {
        extractParams: function(a) {
            var b = l(a), c = g(a, "mail-body"), d = g(a, "subject"), f = g(a, "send-to");
            if (c) {
                b.mail_body = encodeURIComponent(c + " ") + b.src_url;
            } else {
                b.mail_body = b.title + encodeURIComponent(" ") + b.src_url;
            }
            b.subject = e(d, b.title);
            b.send_to = f || "";
            return b;
        },
        makeUrl: function(a) {
            var c = "mailto:" + a.send_to + b("?body=", a.mail_body) + b("&subject=", a.subject);
            return c;
        },
        getCount: function(a, b) {},
        icon: "envelope-o"
    };
    m["pinterest"] = {
        extractParams: l,
        makeUrl: function(a) {
            var b = "http://www.pinterest.com/pin/create/button/?url=" + a.src_url + "&media=" + a.image + "&description=" + a.description;
            return b;
        },
        icon: "pinterest-p"
    };
    m["reddit"] = {
        extractParams: l,
        makeUrl: function(a) {
            var c = "http://www.reddit.com/submit?url=" + a.src_url + b("&title=", a.title);
            return c;
        },
        getCount: function(a, b) {
            $.ajax({
                url: "http://buttons.reddit.com/button_info.json?url=" + a,
                success: function(a) {
                    if (a.data.children.length > 0) b(a.data.children[0].data.ups); else b(0);
                },
                crossDomain: true
            });
        },
        icon: "reddit"
    };
    m["twitter"] = {
        extractParams: function(a) {
            var b = l(a), f = a.dataset.qsTweetBody, g = a.dataset.qsViaUsername;
            if (f) {
                b.tweet_body = e(f, b.title);
            } else {
                b.tweet_body = c(d(b.title));
            }
            b.via_username = e(g, null);
            return b;
        },
        makeUrl: function(a) {
            var c = "https://twitter.com/intent/tweet?url=" + a.src_url + b("&text=", a.tweet_body) + b("&via=", a.via_username);
            c = "javascript:window.open('" + encodeURIComponent(c) + "','myTwitterWin','width=620,height=350'); void(0)";
            return c;
        },
        icon: "twitter"
    };
    a.quickShare = function(b) {
        if (!b) b = a.document;
        qslinks = b.querySelectorAll(".qs-link");
        [].forEach.call(qslinks, function(a) {
            var c = a, d = c.dataset.qsService || "default", e = c.dataset.qsCountSelector || false, f = c.querySelector("i.qs-icon") || false, g = m[d] || m["default"], i = g.extractParams(c), j = g.makeUrl(i);
            if (j) c.href = j;
            if (f) {
                h(f, "fa");
                h(f, "fa-" + g.icon);
            }
            if (e) {
                if (g.getCount) {
                    g.getCount(i.src_url, function(a) {
                        var c = b.querySelector(e);
                        console.log(c);
                        if (c) c.innerHTML = a;
                    });
                }
            }
        });
    };
})(window);