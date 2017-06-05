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
            return "javascript:window.open('" + b + "','myFacebookWin','width=620,height=350'); void(0)";
        },
        icon: "facebook-square"
    };
    m["google-plus-share"] = {
        extractParams: l,
        makeUrl: function(a) {
            return "https://plus.google.com/share?url=" + a.src_url;
        },
        icon: "google-plus-square"
    };
    m["hacker-news"] = {
        extractParams: l,
        makeUrl: function(a) {
            return "http://news.ycombinator.com/submitlink?u=" + a.src_url + b("&t=", a.title);
        },
        getCount: function(a, b) {
            var c = new XMLHttpRequest();
            c.open("GET", "https://hn.algolia.com/api/v1/search?query=%22" + a, true);
            c.onload = function() {
                var a = JSON.parse(c.responseText);
                if (c.status >= 200 && c.status < 400) {
                    if (a.hits.length > 0) {
                        b(a.hits[0].points);
                    }
                } else {
                    b(0);
                }
            };
            c.onerror = function(a) {
                console.log("Quickshare getCount error: ", a);
            };
            c.send();
        },
        icon: "hacker-news"
    };
    m["linkedin"] = {
        extractParams: function(a) {
            var b = l(a), c = a.dataset.qsSummary || null;
            source = a.dataset.qsSource || null;
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
            var c = "https://www.linkedin.com/shareArticle?mini=true&url=" + a.src_url + b("&title=", a.title) + b("&summary=", a.summary) + b("&source=", a.source);
            return "javascript:window.open('" + encodeURIComponent(c) + "','myLinkedinWin','width=620,height=350'); void(0)";
        },
        icon: "linkedin"
    };
    m["mailto"] = {
        extractParams: function(a) {
            var b = l(a), c = a.dataset.qsMailBody || null, d = a.dataset.qsSubject || null, f = a.dataset.qsSendTo || null;
            b.mail_body = c ? encodeURIComponent(c + " ") + b.src_url : b.title + encodeURIComponent(" ") + b.src_url;
            b.subject = e(d, b.title);
            b.send_to = f || "";
            return b;
        },
        makeUrl: function(a) {
            return "mailto:" + a.send_to + b("?body=", a.mail_body) + b("&subject=", a.subject);
        },
        icon: "envelope"
    };
    m["pinterest"] = {
        extractParams: l,
        makeUrl: function(a) {
            return "http://www.pinterest.com/pin/create/button/?url=" + a.src_url + "&media=" + a.image + "&description=" + a.description;
        },
        icon: "pinterest-square"
    };
    m["reddit"] = {
        extractParams: l,
        makeUrl: function(a) {
            return "http://www.reddit.com/submit?url=" + a.src_url + b("&title=", a.title);
        },
        getCount: function(a, b) {
            var c = new XMLHttpRequest();
            c.open("GET", "http://buttons.reddit.com/button_info.json?url=" + a, true);
            c.onload = function() {
                var a = JSON.parse(c.responseText);
                if (c.status >= 200 && c.status < 400) {
                    if (a.data.children.length > 0) {
                        b(a.data.children[0].data.ups);
                    }
                } else {
                    b(0);
                }
            };
            c.onerror = function(a) {
                console.log("Quickshare getCount error: ", a);
            };
            c.send();
        },
        icon: "reddit-square"
    };
    m["twitter"] = {
        extractParams: function(a) {
            var b = l(a), f = a.dataset.qsTweetBody || null, g = a.dataset.qsViaUsername || null;
            b.tweet_body = f ? e(f, b.title) : c(d(b.title));
            b.via_username = e(g, null);
            return b;
        },
        makeUrl: function(a) {
            var c = "https://twitter.com/intent/tweet?url=" + a.src_url + b("&text=", a.tweet_body) + b("&via=", a.via_username);
            return "javascript:window.open('" + encodeURIComponent(c) + "','myTwitterWin','width=620,height=350'); void(0)";
        },
        icon: "twitter-square"
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
                        if (c) c.innerHTML = a;
                    });
                }
            }
        });
    };
})(window);