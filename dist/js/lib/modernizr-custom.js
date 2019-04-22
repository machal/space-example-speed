!function(i, c, d) {
    function e(e) {
        var n = w.className, t = b._config.classPrefix || "";
        if (S && (n = n.baseVal), b._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(r, "$1" + t + "js$2");
        }
        b._config.enableClasses && (n += " " + t + e.join(" " + t), S ? w.className.baseVal = n : w.className = n);
    }
    function p(e, n) {
        return typeof e === n;
    }
    function n() {
        var e, n, t, r, o, s, i;
        for (var l in x) if (x.hasOwnProperty(l)) {
            if (e = [], n = x[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
            for (r = p(n.fn, "function") ? n.fn() : n.fn, o = 0; o < e.length; o++) s = e[o], 
            i = s.split("."), 1 === i.length ? b[i[0]] = r : (!b[i[0]] || b[i[0]] instanceof Boolean || (b[i[0]] = new Boolean(b[i[0]])), 
            b[i[0]][i[1]] = r), C.push((r ? "" : "no-") + i.join("-"));
        }
    }
    function m(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
            return n + t.toUpperCase();
        }).replace(/^-/, "");
    }
    function y() {
        return "function" != typeof c.createElement ? c.createElement(arguments[0]) : S ? c.createElementNS.call(c, "http://www.w3.org/2000/svg", arguments[0]) : c.createElement.apply(c, arguments);
    }
    function s(e, n) {
        return function() {
            return e.apply(n, arguments);
        };
    }
    function l(e, n, t) {
        var r;
        for (var o in e) if (e[o] in n) return t === !1 ? e[o] : (r = n[e[o]], p(r, "function") ? s(r, t || n) : r);
        return !1;
    }
    function o(e) {
        return e.replace(/([A-Z])/g, function(e, n) {
            return "-" + n.toLowerCase();
        }).replace(/^ms-/, "-ms-");
    }
    function a(e, n, t) {
        var r;
        if ("getComputedStyle" in i) {
            r = getComputedStyle.call(i, e, n);
            var o = i.console;
            if (null !== r) t && (r = r.getPropertyValue(t)); else if (o) {
                var s = o.error ? "error" : "log";
                o[s].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
            }
        } else r = !n && e.currentStyle && e.currentStyle[t];
        return r;
    }
    function g() {
        var e = c.body;
        return e || (e = y(S ? "svg" : "body"), e.fake = !0), e;
    }
    function f(e, n, t, r) {
        var o, s, i, l, a = "modernizr", f = y("div"), u = g();
        if (parseInt(t, 10)) for (;t--; ) i = y("div"), i.id = r ? r[t] : a + (t + 1), f.appendChild(i);
        return o = y("style"), o.type = "text/css", o.id = "s" + a, (u.fake ? u : f).appendChild(o), 
        u.appendChild(f), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(c.createTextNode(e)), 
        f.id = a, u.fake && (u.style.background = "", u.style.overflow = "hidden", l = w.style.overflow, 
        w.style.overflow = "hidden", w.appendChild(u)), s = n(f, e), u.fake ? (u.parentNode.removeChild(u), 
        w.style.overflow = l, w.offsetHeight) : f.parentNode.removeChild(f), !!s;
    }
    function v(e, n) {
        var t = e.length;
        if ("CSS" in i && "supports" in i.CSS) {
            for (;t--; ) if (i.CSS.supports(o(e[t]), n)) return !0;
            return !1;
        }
        if ("CSSSupportsRule" in i) {
            for (var r = []; t--; ) r.push("(" + o(e[t]) + ":" + n + ")");
            return r = r.join(" or "), f("@supports (" + r + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == a(e, null, "position");
            });
        }
        return d;
    }
    function h(e, n) {
        return !!~("" + e).indexOf(n);
    }
    function u(e, n, t, r) {
        function o() {
            i && (delete N.style, delete N.modElem);
        }
        if (r = p(r, "undefined") ? !1 : r, !p(t, "undefined")) {
            var s = v(e, t);
            if (!p(s, "undefined")) return s;
        }
        for (var i, l, a, f, u, c = [ "modernizr", "tspan", "samp" ]; !N.style && c.length; ) i = !0, 
        N.modElem = y(c.shift()), N.style = N.modElem.style;
        for (a = e.length, l = 0; a > l; l++) if (f = e[l], u = N.style[f], h(f, "-") && (f = m(f)), 
        N.style[f] !== d) {
            if (r || p(t, "undefined")) return o(), "pfx" == n ? f : !0;
            try {
                N.style[f] = t;
            } catch (e) {}
            if (N.style[f] != u) return o(), "pfx" == n ? f : !0;
        }
        return o(), !1;
    }
    function r(e, n, t, r, o) {
        var s = e.charAt(0).toUpperCase() + e.slice(1), i = (e + " " + z.join(s + " ") + s).split(" ");
        return p(n, "string") || p(n, "undefined") ? u(i, n, r, o) : (i = (e + " " + E.join(s + " ") + s).split(" "), 
        l(i, n, t));
    }
    function t(e, n, t) {
        return r(e, d, d, n, t);
    }
    var C = [], w = c.documentElement, S = "svg" === w.nodeName.toLowerCase(), x = [], _ = {
        _version: "3.6.0",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, n) {
            var t = this;
            setTimeout(function() {
                n(t[e]);
            }, 0);
        },
        addTest: function(e, n, t) {
            x.push({
                name: e,
                fn: n,
                options: t
            });
        },
        addAsyncTest: function(e) {
            x.push({
                name: null,
                fn: e
            });
        }
    }, b = function() {};
    b.prototype = _, b = new b();
    var P = "Moz O ms Webkit", z = _._config.usePrefixes ? P.split(" ") : [];
    _._cssomPrefixes = z;
    var E = _._config.usePrefixes ? P.toLowerCase().split(" ") : [];
    _._domPrefixes = E;
    var T = {
        elem: y("modernizr")
    };
    b._q.push(function() {
        delete T.elem;
    });
    var N = {
        style: T.elem.style
    };
    b._q.unshift(function() {
        delete N.style;
    }), _.testAllProps = r, _.testAllProps = t, b.addTest("cssgridlegacy", t("grid-columns", "10px", !0)), 
    b.addTest("cssgrid", t("grid-template-rows", "none", !0)), n(), e(C), delete _.addTest, 
    delete _.addAsyncTest;
    for (var j = 0; j < b._q.length; j++) b._q[j]();
    i.Modernizr = b;
}(window, document);