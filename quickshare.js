var _mightInclude = function(e, t) {
    if (t) return e + t;
    return "";
};

var _rawUrlEncode = function(e) {
    e = (e + "").toString();
    return encodeURIComponent(e).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/" "/g, "%20");
};

var _rawUrlDecode = function(e) {
    return decodeURIComponent(e).replace(/%20/g, " ");
};

var _setNonEscapedDefault = function(e, t) {
    if (e) return _rawUrlEncode(e);
    return t;
};

var _formatUrl = function(e, t) {
    if (e.indexOf("http:") === -1 && e.indexOf("https:") === -1) {
        e = "http://" + e;
    }
    if (t) {
        while (e.charAt(e.length - 1) === "/") {
            e = e.substr(0, e.length - 1);
        }
    }
    return e;
};

var _camelCasify = function(e) {
    return e.replace(/-([a-z])/g, function(e) {
        return e[1].toUpperCase();
    });
};

var _getData = function(e, t) {
    var r = _camelCasify("qs-" + t);
    if (e) return e.dataset[r];
    return false;
};

var _addClass = function(e, t) {
    if (!e) return;
    if (e.classList) e.classList.add(t); else if (!PGACommon.hasClass(e, t)) e.className += " " + t;
};

var _hasClass = function(e, t) {
    if (e.classList) return e.classList.contains(t); else return !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"));
};

var _getParents = function(e, t) {
    var r = [];
    while (e.parentNode) {
        e = e.parentNode;
        if (e.className !== undefined) {
            if (_hasClass(e, t)) {
                r.push(e);
            }
        }
    }
    return r;
};

var _getContainerData = function(e, t) {
    var r = _getParents(e, "qs-container");
    for (var a = 0; a < r.length; a++) {
        var n = _camelCasify("qs-" + t);
        var i = r[a].dataset[n];
        if (i !== "" && i) {
            return i;
        }
    }
};

var _defaultParams = function(e) {
    var t = {}, r = _getContainerData(e, "url"), a = _getContainerData(e, "title"), n = _getContainerData(e, "suffix");
    container_image = _getContainerData(e, "image");
    container_description = _getContainerData(e, "description");
    var i = _getData(e, "suffix") || n || "", s = _getData(e, "url") || r || window.location.href, o = _getData(e, "title") || a || "Sharing: ", l = _getData(e, "image") || container_image || "";
    description = _getData(e, "description") || container_description || "";
    if (i) {
        s = _formatUrl(s, true) + i;
    } else {
        s = _formatUrl(s, false);
    }
    t.src_url = encodeURIComponent(s);
    t.title = encodeURIComponent(o);
    t.image = encodeURIComponent(l);
    t.description = encodeURIComponent(description);
    return t;
};

var services_lib = {};

services_lib["default"] = {
    extractParams: _defaultParams,
    makeUrl: function(e) {
        console.error("did not provide service to share to");
        return null;
    }
};

services_lib["facebook-share"] = {
    extractParams: _defaultParams,
    makeUrl: function(e) {
        var t = "https://www.facebook.com/sharer/sharer.php?u=" + e.src_url;
        return "javascript:window.open('" + t + "','myFacebookWin','width=620,height=350');void(0)";
    },
    icon: "facebook"
};

services_lib["google-plus-share"] = {
    extractParams: _defaultParams,
    makeUrl: function(e) {
        return "https://plus.google.com/share?url=" + e.src_url;
    },
    icon: "google-plus"
};

services_lib["hacker-news"] = {
    extractParams: _defaultParams,
    makeUrl: function(e) {
        return "https://news.ycombinator.com/submitlink?u=" + e.src_url + _mightInclude("&t=", e.title);
    },
    getCount: function(e, t) {
        var r = new XMLHttpRequest();
        r.open("GET", "https://hn.algolia.com/api/v1/search?query=%22" + e, true);
        r.onload = function() {
            var e = JSON.parse(r.responseText);
            if (r.status >= 200 && r.status < 400) {
                if (e.hits.length > 0) {
                    t(e.hits[0].points);
                }
            } else {
                t(0);
            }
        };
        r.onerror = function(e) {
            console.log("Quickshare getCount error: ", e);
        };
        r.send();
    },
    icon: "hacker-news"
};

services_lib["linkedin"] = {
    extractParams: function(e) {
        var t = _defaultParams(e), r = e.dataset.qsSummary || null;
        source = e.dataset.qsSource || null;
        if (r && r.length < 256) {
            t.summary = _setNonEscapedDefault(r, null);
        }
        if (source && source.length < 200) {
            t.source = _setNonEscapedDefault(source, null);
        }
        if (t.title && t.title.length > 200) {
            t.title = "Share on LinkedIn";
        }
        return t;
    },
    makeUrl: function(e) {
        var t = "https://www.linkedin.com/shareArticle?mini=true&url=" + e.src_url + _mightInclude("&title=", e.title) + _mightInclude("&summary=", e.summary) + _mightInclude("&source=", e.source);
        return "javascript:window.open('" + encodeURIComponent(t) + "','myLinkedinWin','width=620,height=350');void(0)";
    },
    icon: "linkedin"
};

services_lib["mailto"] = {
    extractParams: function(e) {
        var t = _defaultParams(e), r = e.dataset.qsMailBody || null, a = e.dataset.qsSubject || null, n = e.dataset.qsSendTo || null;
        t.mail_body = r ? encodeURIComponent(r + " ") + t.src_url : t.title + encodeURIComponent(" ") + t.src_url;
        t.subject = _setNonEscapedDefault(a, t.title);
        t.send_to = n || "";
        return t;
    },
    makeUrl: function(e) {
        return "mailto:" + e.send_to + _mightInclude("?body=", e.mail_body) + _mightInclude("&subject=", e.subject);
    },
    icon: "envelope"
};

services_lib["pinterest"] = {
    extractParams: _defaultParams,
    makeUrl: function(e) {
        return "https://www.pinterest.com/pin/create/button/?url=" + e.src_url + "&media=" + e.image + "&description=" + e.description;
    },
    icon: "pinterest-p"
};

services_lib["reddit"] = {
    extractParams: _defaultParams,
    makeUrl: function(e) {
        return "https://www.reddit.com/submit?url=" + e.src_url + _mightInclude("&title=", e.title);
    },
    getCount: function(e, t) {
        var r = new XMLHttpRequest();
        r.open("GET", "http://buttons.reddit.com/button_info.json?url=" + e, true);
        r.onload = function() {
            var e = JSON.parse(r.responseText);
            if (r.status >= 200 && r.status < 400) {
                if (e.data.children.length > 0) {
                    t(e.data.children[0].data.ups);
                }
            } else {
                t(0);
            }
        };
        r.onerror = function(e) {
            console.log("Quickshare getCount error: ", e);
        };
        r.send();
    },
    icon: "reddit-alien"
};

services_lib["twitter"] = {
    extractParams: function(e) {
        var t = _defaultParams(e), r = e.dataset.qsTweetBody || null, a = e.dataset.qsViaUsername || null;
        t.tweet_body = r ? _setNonEscapedDefault(r, t.title) : _rawUrlEncode(_rawUrlDecode(t.title));
        t.via_username = _setNonEscapedDefault(a, null);
        return t;
    },
    makeUrl: function(e) {
        var t = "https://twitter.com/intent/tweet?url=" + e.src_url + _mightInclude("&text=", e.tweet_body) + _mightInclude("&via=", e.via_username);
        return "javascript:window.open('" + encodeURIComponent(t) + "','myTwitterWin','width=620,height=350');void(0)";
    },
    icon: "twitter"
};

window.quickShare = function(e) {
    if (!e) e = window.document;
    var t = e.querySelectorAll(".qs-link");
    [].forEach.call(t, function(t) {
        var r = t, a = r.dataset.qsService || "default", n = r.dataset.qsCountSelector || false, i = r.querySelector("i.qs-icon") || false, s = services_lib[a] || services_lib["default"], o = s.extractParams(r), l = s.makeUrl(o);
        if (l) r.href = l;
        if (i) {
            _addClass(i, "fa");
            _addClass(i, "fa-" + s.icon);
        }
        if (n) {
            if (s.getCount) {
                s.getCount(o.src_url, function(t) {
                    var r = e.querySelector(n);
                    if (r) r.innerHTML = t;
                });
            }
        }
    });
};