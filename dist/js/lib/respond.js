/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
(function(a) {
    "use strict";
    a.matchMedia = a.matchMedia || function(a, b) {
        var c, d = a.documentElement, e = d.firstElementChild || d.firstChild, f = a.createElement("body"), g = a.createElement("div");
        g.id = "mq-test-1";
        g.style.cssText = "position:absolute;top:-100em";
        f.style.background = "none";
        f.appendChild(g);
        return function(a) {
            g.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>';
            d.insertBefore(f, e);
            c = g.offsetWidth === 42;
            d.removeChild(f);
            return {
                matches: c,
                media: a
            };
        };
    }(a.document);
})(this);

/*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
(function(a) {
    "use strict";
    if (a.matchMedia && a.matchMedia("all").addListener) {
        return false;
    }
    var b = a.matchMedia, c = b("only all").matches, d = false, e = 0, f = [], g = function(c) {
        a.clearTimeout(e);
        e = a.setTimeout(function() {
            for (var c = 0, d = f.length; c < d; c++) {
                var e = f[c].mql, g = f[c].listeners || [], h = b(e.media).matches;
                if (h !== e.matches) {
                    e.matches = h;
                    for (var i = 0, j = g.length; i < j; i++) {
                        g[i].call(a, e);
                    }
                }
            }
        }, 30);
    };
    a.matchMedia = function(e) {
        var h = b(e), i = [], j = 0;
        h.addListener = function(b) {
            if (!c) {
                return;
            }
            if (!d) {
                d = true;
                a.addEventListener("resize", g, true);
            }
            if (j === 0) {
                j = f.push({
                    mql: h,
                    listeners: i
                });
            }
            i.push(b);
        };
        h.removeListener = function(a) {
            for (var b = 0, c = i.length; b < c; b++) {
                if (i[b] === a) {
                    i.splice(b, 1);
                }
            }
        };
        return h;
    };
})(this);

(function(a) {
    "use strict";
    var b = {};
    a.respond = b;
    b.update = function() {};
    var c = [], d = function() {
        var b = false;
        try {
            b = new a.XMLHttpRequest();
        } catch (c) {
            b = new a.ActiveXObject("Microsoft.XMLHTTP");
        }
        return function() {
            return b;
        };
    }(), e = function(a, b) {
        var c = d();
        if (!c) {
            return;
        }
        c.open("GET", a, true);
        c.onreadystatechange = function() {
            if (c.readyState !== 4 || c.status !== 200 && c.status !== 304) {
                return;
            }
            b(c.responseText);
        };
        if (c.readyState === 4) {
            return;
        }
        c.send(null);
    }, f = function(a) {
        return a.replace(b.regex.minmaxwh, "").match(b.regex.other);
    };
    b.ajax = e;
    b.queue = c;
    b.unsupportedmq = f;
    b.regex = {
        media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
        keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
        comments: /\/\*[^*]*\*+([^\/][^*]*\*+)*\//gi,
        urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
        findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
        only: /(only\s+)?([a-zA-Z]+)\s?/,
        minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
        other: /\([^\)]*\)/g
    };
    b.mediaQueriesSupported = a.matchMedia && a.matchMedia("only all") !== null && a.matchMedia("only all").matches;
    if (b.mediaQueriesSupported) {
        return;
    }
    var g = a.document, h = g.documentElement, i = [], j = [], k = [], l = {}, m = 30, n = g.getElementsByTagName("head")[0] || h, o = g.getElementsByTagName("base")[0], p = n.getElementsByTagName("link"), q, r, s, t = function() {
        var a, b = g.createElement("div"), c = g.body, d = h.style.fontSize, e = c && c.style.fontSize, f = false;
        b.style.cssText = "position:absolute;font-size:1em;width:1em";
        if (!c) {
            c = f = g.createElement("body");
            c.style.background = "none";
        }
        h.style.fontSize = "100%";
        c.style.fontSize = "100%";
        c.appendChild(b);
        if (f) {
            h.insertBefore(c, h.firstChild);
        }
        a = b.offsetWidth;
        if (f) {
            h.removeChild(c);
        } else {
            c.removeChild(b);
        }
        h.style.fontSize = d;
        if (e) {
            c.style.fontSize = e;
        }
        a = s = parseFloat(a);
        return a;
    }, u = function(b) {
        var c = "clientWidth", d = h[c], e = g.compatMode === "CSS1Compat" && d || g.body[c] || d, f = {}, l = p[p.length - 1], o = new Date().getTime();
        if (b && q && o - q < m) {
            a.clearTimeout(r);
            r = a.setTimeout(u, m);
            return;
        } else {
            q = o;
        }
        for (var v in i) {
            if (i.hasOwnProperty(v)) {
                var w = i[v], x = w.minw, y = w.maxw, z = x === null, A = y === null, B = "em";
                if (!!x) {
                    x = parseFloat(x) * (x.indexOf(B) > -1 ? s || t() : 1);
                }
                if (!!y) {
                    y = parseFloat(y) * (y.indexOf(B) > -1 ? s || t() : 1);
                }
                if (!w.hasquery || (!z || !A) && (z || e >= x) && (A || e <= y)) {
                    if (!f[w.media]) {
                        f[w.media] = [];
                    }
                    f[w.media].push(j[w.rules]);
                }
            }
        }
        for (var C in k) {
            if (k.hasOwnProperty(C)) {
                if (k[C] && k[C].parentNode === n) {
                    n.removeChild(k[C]);
                }
            }
        }
        k.length = 0;
        for (var D in f) {
            if (f.hasOwnProperty(D)) {
                var E = g.createElement("style"), F = f[D].join("\n");
                E.type = "text/css";
                E.media = D;
                n.insertBefore(E, l.nextSibling);
                if (E.styleSheet) {
                    E.styleSheet.cssText = F;
                } else {
                    E.appendChild(g.createTextNode(F));
                }
                k.push(E);
            }
        }
    }, v = function(a, c, d) {
        var e = a.replace(b.regex.comments, "").replace(b.regex.keyframes, "").match(b.regex.media), g = e && e.length || 0;
        c = c.substring(0, c.lastIndexOf("/"));
        var h = function(a) {
            return a.replace(b.regex.urls, "$1" + c + "$2$3");
        }, k = !g && d;
        if (c.length) {
            c += "/";
        }
        if (k) {
            g = 1;
        }
        for (var l = 0; l < g; l++) {
            var m, n, o, p;
            if (k) {
                m = d;
                j.push(h(a));
            } else {
                m = e[l].match(b.regex.findStyles) && RegExp.$1;
                j.push(RegExp.$2 && h(RegExp.$2));
            }
            o = m.split(",");
            p = o.length;
            for (var q = 0; q < p; q++) {
                n = o[q];
                if (f(n)) {
                    continue;
                }
                i.push({
                    media: n.split("(")[0].match(b.regex.only) && RegExp.$2 || "all",
                    rules: j.length - 1,
                    hasquery: n.indexOf("(") > -1,
                    minw: n.match(b.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                    maxw: n.match(b.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                });
            }
        }
        u();
    }, w = function() {
        if (c.length) {
            var b = c.shift();
            e(b.href, function(c) {
                v(c, b.href, b.media);
                l[b.href] = true;
                a.setTimeout(function() {
                    w();
                }, 0);
            });
        }
    }, x = function() {
        for (var b = 0; b < p.length; b++) {
            var d = p[b], e = d.href, f = d.media, g = d.rel && d.rel.toLowerCase() === "stylesheet";
            if (!!e && g && !l[e]) {
                if (d.styleSheet && d.styleSheet.rawCssText) {
                    v(d.styleSheet.rawCssText, e, f);
                    l[e] = true;
                } else {
                    if (!/^([a-zA-Z:]*\/\/)/.test(e) && !o || e.replace(RegExp.$1, "").split("/")[0] === a.location.host) {
                        if (e.substring(0, 2) === "//") {
                            e = a.location.protocol + e;
                        }
                        c.push({
                            href: e,
                            media: f
                        });
                    }
                }
            }
        }
        w();
    };
    x();
    b.update = x;
    b.getEmValue = t;
    function y() {
        u(true);
    }
    if (a.addEventListener) {
        a.addEventListener("resize", y, false);
    } else if (a.attachEvent) {
        a.attachEvent("onresize", y);
    }
})(this);