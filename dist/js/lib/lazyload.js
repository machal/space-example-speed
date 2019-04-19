function _extends() {
    _extends = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) {
                if (Object.prototype.hasOwnProperty.call(n, r)) {
                    t[r] = n[r];
                }
            }
        }
        return t;
    };
    return _extends.apply(this, arguments);
}

function _typeof(t) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function t(e) {
            return typeof e;
        };
    } else {
        _typeof = function t(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
    }
    return _typeof(t);
}

(function(t, e) {
    (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined" ? module.exports = e() : typeof define === "function" && define.amd ? define(e) : t.LazyLoad = e();
})(this, function() {
    "use strict";
    var t = typeof window !== "undefined";
    var a = t && !("onscroll" in window) || typeof navigator !== "undefined" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent);
    var n = t && "IntersectionObserver" in window;
    var r = t && "classList" in document.createElement("p");
    var o = {
        elements_selector: "img",
        container: a || t ? document : null,
        threshold: 300,
        thresholds: null,
        data_src: "src",
        data_srcset: "srcset",
        data_sizes: "sizes",
        data_bg: "bg",
        class_loading: "loading",
        class_loaded: "loaded",
        class_error: "error",
        load_delay: 0,
        auto_unobserve: true,
        callback_enter: null,
        callback_exit: null,
        callback_reveal: null,
        callback_loaded: null,
        callback_error: null,
        callback_finish: null,
        use_native: false
    };
    var i = function t(e) {
        return _extends({}, o, e);
    };
    var s = "data-";
    var c = "was-processed";
    var u = "ll-timeout";
    var l = "true";
    var f = function t(e, n) {
        return e.getAttribute(s + n);
    };
    var v = function t(e, n, r) {
        var a = s + n;
        if (r === null) {
            e.removeAttribute(a);
            return;
        }
        e.setAttribute(a, r);
    };
    var d = function t(e) {
        return v(e, c, l);
    };
    var _ = function t(e) {
        return f(e, c) === l;
    };
    var g = function t(e, n) {
        return v(e, u, n);
    };
    var m = function t(e) {
        return f(e, u);
    };
    var b = function t(e) {
        return e.filter(function(t) {
            return !_(t);
        });
    };
    var h = function t(e, n) {
        return e.filter(function(t) {
            return t !== n;
        });
    };
    var p = function t(e, n) {
        var r;
        var a = "LazyLoad::Initialized";
        var o = new e(n);
        try {
            r = new CustomEvent(a, {
                detail: {
                    instance: o
                }
            });
        } catch (t) {
            r = document.createEvent("CustomEvent");
            r.initCustomEvent(a, false, false, {
                instance: o
            });
        }
        window.dispatchEvent(r);
    };
    function e(t, e) {
        if (!e) {
            return;
        }
        if (!e.length) {
            p(t, e);
        } else {
            for (var n = 0, r; r = e[n]; n += 1) {
                p(t, r);
            }
        }
    }
    var y = function t(e, n) {
        if (e) {
            e(n);
        }
    };
    var E = function t(e, n) {
        e._loadingCount += n;
        if (e._elements.length === 0 && e._loadingCount === 0) {
            y(e._settings.callback_finish);
        }
    };
    var w = function t(e) {
        var n = [];
        for (var r = 0, a; a = e.children[r]; r += 1) {
            if (a.tagName === "SOURCE") {
                n.push(a);
            }
        }
        return n;
    };
    var I = function t(e, n, r) {
        if (!r) {
            return;
        }
        e.setAttribute(n, r);
    };
    var k = function t(e, n) {
        I(e, "sizes", f(e, n.data_sizes));
        I(e, "srcset", f(e, n.data_srcset));
        I(e, "src", f(e, n.data_src));
    };
    var x = function t(e, n) {
        var r = e.parentNode;
        if (r && r.tagName === "PICTURE") {
            var a = w(r);
            a.forEach(function(t) {
                k(t, n);
            });
        }
        k(e, n);
    };
    var A = function t(e, n) {
        I(e, "src", f(e, n.data_src));
    };
    var L = function t(e, n) {
        var r = w(e);
        r.forEach(function(t) {
            I(t, "src", f(t, n.data_src));
        });
        I(e, "src", f(e, n.data_src));
        e.load();
    };
    var O = function t(e, n) {
        var r = f(e, n.data_src);
        var a = f(e, n.data_bg);
        if (r) {
            e.style.backgroundImage = 'url("'.concat(r, '")');
        }
        if (a) {
            e.style.backgroundImage = a;
        }
    };
    var N = {
        IMG: x,
        IFRAME: A,
        VIDEO: L
    };
    var z = function t(e, n) {
        var r = n._settings;
        var a = e.tagName;
        var o = N[a];
        if (o) {
            o(e, r);
            E(n, 1);
            n._elements = h(n._elements, e);
            return;
        }
        O(e, r);
    };
    var C = function t(e, n) {
        if (r) {
            e.classList.add(n);
            return;
        }
        e.className += (e.className ? " " : "") + n;
    };
    var M = function t(e, n) {
        if (r) {
            e.classList.remove(n);
            return;
        }
        e.className = e.className.replace(new RegExp("(^|\\s+)" + n + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
    };
    var R = "load";
    var S = "loadeddata";
    var T = "error";
    var j = function t(e, n, r) {
        e.addEventListener(n, r);
    };
    var F = function t(e, n, r) {
        e.removeEventListener(n, r);
    };
    var G = function t(e, n, r) {
        j(e, R, n);
        j(e, S, n);
        j(e, T, r);
    };
    var D = function t(e, n, r) {
        F(e, R, n);
        F(e, S, n);
        F(e, T, r);
    };
    var P = function t(e, n, r) {
        var a = r._settings;
        var o = n ? a.class_loaded : a.class_error;
        var i = n ? a.callback_loaded : a.callback_error;
        var s = e.target;
        M(s, a.class_loading);
        C(s, o);
        y(i, s);
        E(r, -1);
    };
    var U = function t(n, r) {
        var a = function t(e) {
            P(e, true, r);
            D(n, t, o);
        };
        var o = function t(e) {
            P(e, false, r);
            D(n, a, t);
        };
        G(n, a, o);
    };
    var V = [ "IMG", "IFRAME", "VIDEO" ];
    var $ = function t(e, n) {
        var r = n._settings;
        y(r.callback_enter, e);
        if (!r.load_delay) {
            q(e, n);
            return;
        }
        J(e, n);
    };
    var q = function t(e, n) {
        var r = n._observer;
        K(e, n);
        if (r && n._settings.auto_unobserve) {
            r.unobserve(e);
        }
    };
    var H = function t(e, n) {
        var r = n._settings;
        y(r.callback_exit, e);
        if (!r.load_delay) {
            return;
        }
        B(e);
    };
    var B = function t(e) {
        var n = m(e);
        if (!n) {
            return;
        }
        clearTimeout(n);
        g(e, null);
    };
    var J = function t(e, n) {
        var r = n._settings.load_delay;
        var a = m(e);
        if (a) {
            return;
        }
        a = setTimeout(function() {
            q(e, n);
            B(e);
        }, r);
        g(e, a);
    };
    var K = function t(e, n, r) {
        var a = n._settings;
        if (!r && _(e)) {
            return;
        }
        if (V.indexOf(e.tagName) > -1) {
            U(e, n);
            C(e, a.class_loading);
        }
        z(e, n);
        d(e);
        y(a.callback_reveal, e);
        y(a.callback_set, e);
    };
    var Q = function t(e) {
        return e.isIntersecting || e.intersectionRatio > 0;
    };
    var W = function t(e) {
        return {
            root: e.container === document ? null : e.container,
            rootMargin: e.thresholds || e.threshold + "px"
        };
    };
    var X = function t(e) {
        if (!n) {
            return false;
        }
        e._observer = new IntersectionObserver(function(t) {
            t.forEach(function(t) {
                return Q(t) ? $(t.target, e) : H(t.target, e);
            });
        }, W(e._settings));
        return true;
    };
    var Y = [ "IMG", "IFRAME" ];
    var Z = function t(e) {
        return e.use_native && "loading" in HTMLImageElement.prototype;
    };
    var tt = function t(e) {
        e._elements.forEach(function(t) {
            if (Y.indexOf(t.tagName) === -1) {
                return;
            }
            t.setAttribute("loading", "lazy");
            K(t, e);
        });
    };
    var et = function t(e) {
        return Array.prototype.slice.call(e);
    };
    var nt = function t(e) {
        return e.container.querySelectorAll(e.elements_selector);
    };
    var rt = function t(e, n) {
        return b(et(e || nt(n)));
    };
    var at = function t(e, n) {
        this._settings = i(e);
        this._loadingCount = 0;
        X(this);
        this.update(n);
    };
    at.prototype = {
        update: function t(e) {
            var n = this;
            var r = this._settings;
            this._elements = rt(e, r);
            if (a || !this._observer) {
                this.loadAll();
                return;
            }
            if (Z(r)) {
                tt(this);
                this._elements = rt(e, r);
            }
            this._elements.forEach(function(t) {
                n._observer.observe(t);
            });
        },
        destroy: function t() {
            var e = this;
            if (this._observer) {
                this._elements.forEach(function(t) {
                    e._observer.unobserve(t);
                });
                this._observer = null;
            }
            this._elements = null;
            this._settings = null;
        },
        load: function t(e, n) {
            K(e, this, n);
        },
        loadAll: function t() {
            var e = this;
            this._elements.forEach(function(t) {
                q(t, e);
            });
        }
    };
    if (t) {
        e(at, window.lazyLoadOptions);
    }
    return at;
});