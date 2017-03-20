/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */
(function(a) {
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define([ "jquery" ], a);
    } else if (typeof exports === "object") {
        // Node/CommonJS style for Browserify
        module.exports = a;
    } else {
        // Browser globals
        a(jQuery);
    }
})(function(a) {
    var b = [ "wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll" ], c = "onwheel" in document || document.documentMode >= 9 ? [ "wheel" ] : [ "mousewheel", "DomMouseScroll", "MozMousePixelScroll" ], d = Array.prototype.slice, e, f;
    if (a.event.fixHooks) {
        for (var g = b.length; g; ) {
            a.event.fixHooks[b[--g]] = a.event.mouseHooks;
        }
    }
    var h = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener) {
                for (var b = c.length; b; ) {
                    this.addEventListener(c[--b], i, false);
                }
            } else {
                this.onmousewheel = i;
            }
            // Store the line height and page height for this particular element
            a.data(this, "mousewheel-line-height", h.getLineHeight(this));
            a.data(this, "mousewheel-page-height", h.getPageHeight(this));
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var b = c.length; b; ) {
                    this.removeEventListener(c[--b], i, false);
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            a.removeData(this, "mousewheel-line-height");
            a.removeData(this, "mousewheel-page-height");
        },
        getLineHeight: function(b) {
            var c = a(b), d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            if (!d.length) {
                d = a("body");
            }
            return parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
        },
        getPageHeight: function(b) {
            return a(b).height();
        },
        settings: {
            adjustOldDeltas: true,
            // see shouldAdjustOldDeltas() below
            normalizeOffset: true
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a);
        }
    });
    function i(b) {
        var c = b || window.event, g = d.call(arguments, 1), i = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
        b = a.event.fix(c);
        b.type = "mousewheel";
        // Old school scrollwheel delta
        if ("detail" in c) {
            m = c.detail * -1;
        }
        if ("wheelDelta" in c) {
            m = c.wheelDelta;
        }
        if ("wheelDeltaY" in c) {
            m = c.wheelDeltaY;
        }
        if ("wheelDeltaX" in c) {
            l = c.wheelDeltaX * -1;
        }
        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ("axis" in c && c.axis === c.HORIZONTAL_AXIS) {
            l = m * -1;
            m = 0;
        }
        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        i = m === 0 ? l : m;
        // New school wheel delta (wheel event)
        if ("deltaY" in c) {
            m = c.deltaY * -1;
            i = m;
        }
        if ("deltaX" in c) {
            l = c.deltaX;
            if (m === 0) {
                i = l * -1;
            }
        }
        // No change actually happened, no reason to go any further
        if (m === 0 && l === 0) {
            return;
        }
        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if (c.deltaMode === 1) {
            var q = a.data(this, "mousewheel-line-height");
            i *= q;
            m *= q;
            l *= q;
        } else if (c.deltaMode === 2) {
            var r = a.data(this, "mousewheel-page-height");
            i *= r;
            m *= r;
            l *= r;
        }
        // Store lowest absolute delta to normalize the delta values
        n = Math.max(Math.abs(m), Math.abs(l));
        if (!f || n < f) {
            f = n;
            // Adjust older deltas if necessary
            if (k(c, n)) {
                f /= 40;
            }
        }
        // Adjust older deltas if necessary
        if (k(c, n)) {
            // Divide all the things by 40!
            i /= 40;
            l /= 40;
            m /= 40;
        }
        // Get a whole, normalized value for the deltas
        i = Math[i >= 1 ? "floor" : "ceil"](i / f);
        l = Math[l >= 1 ? "floor" : "ceil"](l / f);
        m = Math[m >= 1 ? "floor" : "ceil"](m / f);
        // Normalise offsetX and offsetY properties
        if (h.settings.normalizeOffset && this.getBoundingClientRect) {
            var s = this.getBoundingClientRect();
            o = b.clientX - s.left;
            p = b.clientY - s.top;
        }
        // Add information to the event object
        b.deltaX = l;
        b.deltaY = m;
        b.deltaFactor = f;
        b.offsetX = o;
        b.offsetY = p;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        b.deltaMode = 0;
        // Add event and delta to the front of the arguments
        g.unshift(b, i, l, m);
        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (e) {
            clearTimeout(e);
        }
        e = setTimeout(j, 200);
        return (a.event.dispatch || a.event.handle).apply(this, g);
    }
    function j() {
        f = null;
    }
    function k(a, b) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return h.settings.adjustOldDeltas && a.type === "mousewheel" && b % 120 === 0;
    }
});