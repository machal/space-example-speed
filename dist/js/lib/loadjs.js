(function(r) {
    var e = function(e, t) {
        "use strict";
        var n = r.document.getElementsByTagName("script")[0];
        var o = r.document.createElement("script");
        o.src = e;
        o.async = true;
        n.parentNode.insertBefore(o, n);
        if (t && typeof t === "function") {
            o.onload = t;
        }
        return o;
    };
    if (typeof module !== "undefined") {
        module.exports = e;
    } else {
        r.loadJS = e;
    }
})(typeof global !== "undefined" ? global : this);