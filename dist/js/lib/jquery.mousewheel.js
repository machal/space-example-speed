(function(e) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], e);
    } else if (typeof exports === "object") {
        module.exports = e;
    } else {
        e(jQuery);
    }
})(function(d) {
    var e = [ "wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll" ], t = "onwheel" in document || document.documentMode >= 9 ? [ "wheel" ] : [ "mousewheel", "DomMouseScroll", "MozMousePixelScroll" ], c = Array.prototype.slice, m, g;
    if (d.event.fixHooks) {
        for (var i = e.length; i; ) {
            d.event.fixHooks[e[--i]] = d.event.mouseHooks;
        }
    }
    var w = d.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener) {
                for (var e = t.length; e; ) {
                    this.addEventListener(t[--e], n, false);
                }
            } else {
                this.onmousewheel = n;
            }
            d.data(this, "mousewheel-line-height", w.getLineHeight(this));
            d.data(this, "mousewheel-page-height", w.getPageHeight(this));
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var e = t.length; e; ) {
                    this.removeEventListener(t[--e], n, false);
                }
            } else {
                this.onmousewheel = null;
            }
            d.removeData(this, "mousewheel-line-height");
            d.removeData(this, "mousewheel-page-height");
        },
        getLineHeight: function(e) {
            var t = d(e), i = t["offsetParent" in d.fn ? "offsetParent" : "parent"]();
            if (!i.length) {
                i = d("body");
            }
            return parseInt(i.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16;
        },
        getPageHeight: function(e) {
            return d(e).height();
        },
        settings: {
            adjustOldDeltas: true,
            normalizeOffset: true
        }
    };
    d.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e);
        }
    });
    function n(e) {
        var t = e || window.event, i = c.call(arguments, 1), n = 0, l = 0, o = 0, s = 0, a = 0, h = 0;
        e = d.event.fix(t);
        e.type = "mousewheel";
        if ("detail" in t) {
            o = t.detail * -1;
        }
        if ("wheelDelta" in t) {
            o = t.wheelDelta;
        }
        if ("wheelDeltaY" in t) {
            o = t.wheelDeltaY;
        }
        if ("wheelDeltaX" in t) {
            l = t.wheelDeltaX * -1;
        }
        if ("axis" in t && t.axis === t.HORIZONTAL_AXIS) {
            l = o * -1;
            o = 0;
        }
        n = o === 0 ? l : o;
        if ("deltaY" in t) {
            o = t.deltaY * -1;
            n = o;
        }
        if ("deltaX" in t) {
            l = t.deltaX;
            if (o === 0) {
                n = l * -1;
            }
        }
        if (o === 0 && l === 0) {
            return;
        }
        if (t.deltaMode === 1) {
            var f = d.data(this, "mousewheel-line-height");
            n *= f;
            o *= f;
            l *= f;
        } else if (t.deltaMode === 2) {
            var r = d.data(this, "mousewheel-page-height");
            n *= r;
            o *= r;
            l *= r;
        }
        s = Math.max(Math.abs(o), Math.abs(l));
        if (!g || s < g) {
            g = s;
            if (p(t, s)) {
                g /= 40;
            }
        }
        if (p(t, s)) {
            n /= 40;
            l /= 40;
            o /= 40;
        }
        n = Math[n >= 1 ? "floor" : "ceil"](n / g);
        l = Math[l >= 1 ? "floor" : "ceil"](l / g);
        o = Math[o >= 1 ? "floor" : "ceil"](o / g);
        if (w.settings.normalizeOffset && this.getBoundingClientRect) {
            var u = this.getBoundingClientRect();
            a = e.clientX - u.left;
            h = e.clientY - u.top;
        }
        e.deltaX = l;
        e.deltaY = o;
        e.deltaFactor = g;
        e.offsetX = a;
        e.offsetY = h;
        e.deltaMode = 0;
        i.unshift(e, n, l, o);
        if (m) {
            clearTimeout(m);
        }
        m = setTimeout(v, 200);
        return (d.event.dispatch || d.event.handle).apply(this, i);
    }
    function v() {
        g = null;
    }
    function p(e, t) {
        return w.settings.adjustOldDeltas && e.type === "mousewheel" && t % 120 === 0;
    }
});