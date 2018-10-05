(function(u) {
    "use strict";
    var e = function(e, n, t) {
        var i = u.document;
        var r = i.createElement("link");
        var o;
        if (n) {
            o = n;
        } else {
            var a = (i.body || i.getElementsByTagName("head")[0]).childNodes;
            o = a[a.length - 1];
        }
        var d = i.styleSheets;
        r.rel = "stylesheet";
        r.href = e;
        r.media = "only x";
        function l(e) {
            if (i.body) {
                return e();
            }
            setTimeout(function() {
                l(e);
            });
        }
        l(function() {
            o.parentNode.insertBefore(r, n ? o : o.nextSibling);
        });
        var f = function(e) {
            var n = r.href;
            var t = d.length;
            while (t--) {
                if (d[t].href === n) {
                    return e();
                }
            }
            setTimeout(function() {
                f(e);
            });
        };
        function s() {
            if (r.addEventListener) {
                r.removeEventListener("load", s);
            }
            r.media = t || "all";
        }
        if (r.addEventListener) {
            r.addEventListener("load", s);
        }
        r.onloadcssdefined = f;
        f(s);
        return r;
    };
    if (typeof exports !== "undefined") {
        exports.loadCSS = e;
    } else {
        u.loadCSS = e;
    }
})(typeof global !== "undefined" ? global : this);