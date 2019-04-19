(function(c) {
    "use strict";
    var e = function(e, t, n, i) {
        var r = c.document;
        var o = r.createElement("link");
        var a;
        if (t) {
            a = t;
        } else {
            var d = (r.body || r.getElementsByTagName("head")[0]).childNodes;
            a = d[d.length - 1];
        }
        var f = r.styleSheets;
        if (i) {
            for (var l in i) {
                if (i.hasOwnProperty(l)) {
                    o.setAttribute(l, i[l]);
                }
            }
        }
        o.rel = "stylesheet";
        o.href = e;
        o.media = "only x";
        function s(e) {
            if (r.body) {
                return e();
            }
            setTimeout(function() {
                s(e);
            });
        }
        s(function() {
            a.parentNode.insertBefore(o, t ? a : a.nextSibling);
        });
        var u = function(e) {
            var t = o.href;
            var n = f.length;
            while (n--) {
                if (f[n].href === t) {
                    return e();
                }
            }
            setTimeout(function() {
                u(e);
            });
        };
        function v() {
            if (o.addEventListener) {
                o.removeEventListener("load", v);
            }
            o.media = n || "all";
        }
        if (o.addEventListener) {
            o.addEventListener("load", v);
        }
        o.onloadcssdefined = u;
        u(v);
        return o;
    };
    if (typeof exports !== "undefined") {
        exports.loadCSS = e;
    } else {
        c.loadCSS = e;
    }
})(typeof global !== "undefined" ? global : this);