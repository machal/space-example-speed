/*! loadCSS. [c]2017 Filament Group, Inc. MIT License */
(function(a) {
    "use strict";
    /* exported loadCSS */
    var b = function(b, c, d) {
        // Arguments explained:
        // `href` [REQUIRED] is the URL for your CSS file.
        // `before` [OPTIONAL] is the element the script should use as a reference for injecting our stylesheet <link> before
        // By default, loadCSS attempts to inject the link after the last stylesheet or script in the DOM. However, you might desire a more specific location in your document.
        // `media` [OPTIONAL] is the media type or query of the stylesheet. By default it will be 'all'
        var e = a.document;
        var f = e.createElement("link");
        var g;
        if (c) {
            g = c;
        } else {
            var h = (e.body || e.getElementsByTagName("head")[0]).childNodes;
            g = h[h.length - 1];
        }
        var i = e.styleSheets;
        f.rel = "stylesheet";
        f.href = b;
        // temporarily set media to something inapplicable to ensure it'll fetch without blocking render
        f.media = "only x";
        // wait until body is defined before injecting link. This ensures a non-blocking load in IE11.
        function j(a) {
            if (e.body) {
                return a();
            }
            setTimeout(function() {
                j(a);
            });
        }
        // Inject link
        // Note: the ternary preserves the existing behavior of "before" argument, but we could choose to change the argument to "after" in a later release and standardize on ref.nextSibling for all refs
        // Note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
        j(function() {
            g.parentNode.insertBefore(f, c ? g : g.nextSibling);
        });
        // A method (exposed on return object for external use) that mimics onload by polling document.styleSheets until it includes the new sheet.
        var k = function(a) {
            var b = f.href;
            var c = i.length;
            while (c--) {
                if (i[c].href === b) {
                    return a();
                }
            }
            setTimeout(function() {
                k(a);
            });
        };
        function l() {
            if (f.addEventListener) {
                f.removeEventListener("load", l);
            }
            f.media = d || "all";
        }
        // once loaded, set link's media back to `all` so that the stylesheet applies once it loads
        if (f.addEventListener) {
            f.addEventListener("load", l);
        }
        f.onloadcssdefined = k;
        k(l);
        return f;
    };
    // commonjs
    if (typeof exports !== "undefined") {
        exports.loadCSS = b;
    } else {
        a.loadCSS = b;
    }
})(typeof global !== "undefined" ? global : this);