/*! loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT */
(function(a) {
    var b = function(b, c) {
        "use strict";
        var d = a.document.getElementsByTagName("script")[0];
        var e = a.document.createElement("script");
        e.src = b;
        e.async = true;
        d.parentNode.insertBefore(e, d);
        if (c && typeof c === "function") {
            e.onload = c;
        }
        return e;
    };
    // commonjs
    if (typeof module !== "undefined") {
        module.exports = b;
    } else {
        a.loadJS = b;
    }
})(typeof global !== "undefined" ? global : this);