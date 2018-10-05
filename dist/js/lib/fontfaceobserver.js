(function() {
    function o(e, t) {
        document.addEventListener ? e.addEventListener("scroll", t, !1) : e.attachEvent("scroll", t);
    }
    function n(t) {
        document.body ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function e() {
            document.removeEventListener("DOMContentLoaded", e);
            t();
        }) : document.attachEvent("onreadystatechange", function e() {
            if ("interactive" == document.readyState || "complete" == document.readyState) document.detachEvent("onreadystatechange", e), 
            t();
        });
    }
    function g(e) {
        this.a = document.createElement("div");
        this.a.setAttribute("aria-hidden", "true");
        this.a.appendChild(document.createTextNode(e));
        this.b = document.createElement("span");
        this.c = document.createElement("span");
        this.h = document.createElement("span");
        this.f = document.createElement("span");
        this.g = -1;
        this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
        this.b.appendChild(this.h);
        this.c.appendChild(this.f);
        this.a.appendChild(this.b);
        this.a.appendChild(this.c);
    }
    function x(e, t) {
        e.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + t + ";";
    }
    function a(e) {
        var t = e.a.offsetWidth, n = t + 100;
        e.f.style.width = n + "px";
        e.c.scrollLeft = n;
        e.b.scrollLeft = e.b.scrollWidth + 100;
        return e.g !== t ? (e.g = t, !0) : !1;
    }
    function E(e, t) {
        function n() {
            var e = i;
            a(e) && e.a.parentNode && t(e.g);
        }
        var i = e;
        o(e.b, n);
        o(e.c, n);
        a(e);
    }
    function e(e, t) {
        var n = t || {};
        this.family = e;
        this.style = n.style || "normal";
        this.weight = n.weight || "normal";
        this.stretch = n.stretch || "normal";
    }
    var T = null, t = null, i = null, s = null;
    function d() {
        if (null === t) if (l() && /Apple/.test(window.navigator.vendor)) {
            var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
            t = !!e && 603 > parseInt(e[1], 10);
        } else t = !1;
        return t;
    }
    function l() {
        null === s && (s = !!document.fonts);
        return s;
    }
    function c() {
        if (null === i) {
            var e = document.createElement("div");
            try {
                e.style.font = "condensed 100px sans-serif";
            } catch (e) {}
            i = "" !== e.style.font;
        }
        return i;
    }
    function C(e, t) {
        return [ e.style, e.weight, c() ? e.stretch : "", "100px", t ].join(" ");
    }
    e.prototype.load = function(e, t) {
        var m = this, w = e || "BESbswy", v = 0, y = t || 3e3, b = new Date().getTime();
        return new Promise(function(u, p) {
            if (l() && !d()) {
                var e = new Promise(function(t, e) {
                    function n() {
                        new Date().getTime() - b >= y ? e() : document.fonts.load(C(m, '"' + m.family + '"'), w).then(function(e) {
                            1 <= e.length ? t() : setTimeout(n, 25);
                        }, function() {
                            e();
                        });
                    }
                    n();
                }), t = new Promise(function(e, t) {
                    v = setTimeout(t, y);
                });
                Promise.race([ t, e ]).then(function() {
                    clearTimeout(v);
                    u(m);
                }, function() {
                    p(m);
                });
            } else n(function() {
                function t() {
                    var e;
                    if (e = -1 != s && -1 != d || -1 != s && -1 != l || -1 != d && -1 != l) (e = s != d && s != l && d != l) || (null === T && (e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), 
                    T = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))), 
                    e = T && (s == c && d == c && l == c || s == r && d == r && l == r || s == h && d == h && l == h)), 
                    e = !e;
                    e && (f.parentNode && f.parentNode.removeChild(f), clearTimeout(v), u(m));
                }
                function n() {
                    if (new Date().getTime() - b >= y) f.parentNode && f.parentNode.removeChild(f), 
                    p(m); else {
                        var e = document.hidden;
                        if (!0 === e || void 0 === e) s = i.a.offsetWidth, d = o.a.offsetWidth, l = a.a.offsetWidth, 
                        t();
                        v = setTimeout(n, 50);
                    }
                }
                var i = new g(w), o = new g(w), a = new g(w), s = -1, d = -1, l = -1, c = -1, r = -1, h = -1, f = document.createElement("div");
                f.dir = "ltr";
                x(i, C(m, "sans-serif"));
                x(o, C(m, "serif"));
                x(a, C(m, "monospace"));
                f.appendChild(i.a);
                f.appendChild(o.a);
                f.appendChild(a.a);
                document.body.appendChild(f);
                c = i.a.offsetWidth;
                r = o.a.offsetWidth;
                h = a.a.offsetWidth;
                n();
                E(i, function(e) {
                    s = e;
                    t();
                });
                x(i, C(m, '"' + m.family + '",sans-serif'));
                E(o, function(e) {
                    d = e;
                    t();
                });
                x(o, C(m, '"' + m.family + '",serif'));
                E(a, function(e) {
                    l = e;
                    t();
                });
                x(a, C(m, '"' + m.family + '",monospace'));
            });
        });
    };
    "object" === typeof module ? module.exports = e : (window.FontFaceObserver = e, 
    window.FontFaceObserver.prototype.load = e.prototype.load);
})();