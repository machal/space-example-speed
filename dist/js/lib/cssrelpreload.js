(function(n) {
    "use strict";
    if (!n.loadCSS) {
        n.loadCSS = function() {};
    }
    var o = loadCSS.relpreload = {};
    o.support = function() {
        var t;
        try {
            t = n.document.createElement("link").relList.supports("preload");
        } catch (e) {
            t = false;
        }
        return function() {
            return t;
        };
    }();
    o.bindMediaToggle = function(e) {
        var t = e.media || "all";
        function a() {
            e.media = t;
        }
        if (e.addEventListener) {
            e.addEventListener("load", a);
        } else if (e.attachEvent) {
            e.attachEvent("onload", a);
        }
        setTimeout(function() {
            e.rel = "stylesheet";
            e.media = "only x";
        });
        setTimeout(a, 3e3);
    };
    o.poly = function() {
        if (o.support()) {
            return;
        }
        var e = n.document.getElementsByTagName("link");
        for (var t = 0; t < e.length; t++) {
            var a = e[t];
            if (a.rel === "preload" && a.getAttribute("as") === "style" && !a.getAttribute("data-loadcss")) {
                a.setAttribute("data-loadcss", true);
                o.bindMediaToggle(a);
            }
        }
    };
    if (!o.support()) {
        o.poly();
        var e = n.setInterval(o.poly, 500);
        if (n.addEventListener) {
            n.addEventListener("load", function() {
                o.poly();
                n.clearInterval(e);
            });
        } else if (n.attachEvent) {
            n.attachEvent("onload", function() {
                o.poly();
                n.clearInterval(e);
            });
        }
    }
    if (typeof exports !== "undefined") {
        exports.loadCSS = loadCSS;
    } else {
        n.loadCSS = loadCSS;
    }
})(typeof global !== "undefined" ? global : this);