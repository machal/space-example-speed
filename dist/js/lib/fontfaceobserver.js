(function() {
    function a(a, b) {
        document.addEventListener ? a.addEventListener("scroll", b, !1) : a.attachEvent("scroll", b);
    }
    function b(a) {
        document.body ? a() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function b() {
            document.removeEventListener("DOMContentLoaded", b);
            a();
        }) : document.attachEvent("onreadystatechange", function b() {
            if ("interactive" == document.readyState || "complete" == document.readyState) document.detachEvent("onreadystatechange", b), 
            a();
        });
    }
    function c(a) {
        this.a = document.createElement("div");
        this.a.setAttribute("aria-hidden", "true");
        this.a.appendChild(document.createTextNode(a));
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
    function d(a, b) {
        a.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:" + b + ";";
    }
    function e(a) {
        var b = a.a.offsetWidth, c = b + 100;
        a.f.style.width = c + "px";
        a.c.scrollLeft = c;
        a.b.scrollLeft = a.b.scrollWidth + 100;
        return a.g !== b ? (a.g = b, !0) : !1;
    }
    function f(b, c) {
        function d() {
            var a = f;
            e(a) && null !== a.a.parentNode && c(a.g);
        }
        var f = b;
        a(b.b, d);
        a(b.c, d);
        e(b);
    }
    function g(a, b) {
        var c = b || {};
        this.family = a;
        this.style = c.style || "normal";
        this.weight = c.weight || "normal";
        this.stretch = c.stretch || "normal";
    }
    var h = null, i = null, j = null;
    function k() {
        if (null === i) {
            var a = document.createElement("div");
            try {
                a.style.font = "condensed 100px sans-serif";
            } catch (a) {}
            i = "" !== a.style.font;
        }
        return i;
    }
    function l(a, b) {
        return [ a.style, a.weight, k() ? a.stretch : "", "100px", b ].join(" ");
    }
    g.prototype.load = function(a, e) {
        var g = this, i = a || "BESbswy", k = 0, m = e || 3e3, n = new Date().getTime();
        return new Promise(function(a, e) {
            null === j && (j = !!document.fonts);
            if (j) {
                var o = new Promise(function(a, b) {
                    function c() {
                        new Date().getTime() - n >= m ? b() : document.fonts.load(l(g, '"' + g.family + '"'), i).then(function(b) {
                            1 <= b.length ? a() : setTimeout(c, 25);
                        }, function() {
                            b();
                        });
                    }
                    c();
                }), p = new Promise(function(a, b) {
                    k = setTimeout(b, m);
                });
                Promise.race([ p, o ]).then(function() {
                    clearTimeout(k);
                    a(g);
                }, function() {
                    e(g);
                });
            } else b(function() {
                function b() {
                    var b;
                    if (b = -1 != r && -1 != s || -1 != r && -1 != t || -1 != s && -1 != t) (b = r != s && r != t && s != t) || (null === h && (b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), 
                    h = !!b && (536 > parseInt(b[1], 10) || 536 === parseInt(b[1], 10) && 11 >= parseInt(b[2], 10))), 
                    b = h && (r == u && s == u && t == u || r == v && s == v && t == v || r == w && s == w && t == w)), 
                    b = !b;
                    b && (null !== x.parentNode && x.parentNode.removeChild(x), clearTimeout(k), a(g));
                }
                function j() {
                    if (new Date().getTime() - n >= m) null !== x.parentNode && x.parentNode.removeChild(x), 
                    e(g); else {
                        var a = document.hidden;
                        if (!0 === a || void 0 === a) r = o.a.offsetWidth, s = p.a.offsetWidth, t = q.a.offsetWidth, 
                        b();
                        k = setTimeout(j, 50);
                    }
                }
                var o = new c(i), p = new c(i), q = new c(i), r = -1, s = -1, t = -1, u = -1, v = -1, w = -1, x = document.createElement("div");
                x.dir = "ltr";
                d(o, l(g, "sans-serif"));
                d(p, l(g, "serif"));
                d(q, l(g, "monospace"));
                x.appendChild(o.a);
                x.appendChild(p.a);
                x.appendChild(q.a);
                document.body.appendChild(x);
                u = o.a.offsetWidth;
                v = p.a.offsetWidth;
                w = q.a.offsetWidth;
                j();
                f(o, function(a) {
                    r = a;
                    b();
                });
                d(o, l(g, '"' + g.family + '",sans-serif'));
                f(p, function(a) {
                    s = a;
                    b();
                });
                d(p, l(g, '"' + g.family + '",serif'));
                f(q, function(a) {
                    t = a;
                    b();
                });
                d(q, l(g, '"' + g.family + '",monospace'));
            });
        });
    };
    "undefined" !== typeof module ? module.exports = g : (window.FontFaceObserver = g, 
    window.FontFaceObserver.prototype.load = g.prototype.load);
})();