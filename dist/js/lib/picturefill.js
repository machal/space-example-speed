/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
(function(a) {
    /*jshint eqnull:true */
    var b = navigator.userAgent;
    if (a.HTMLPictureElement && (/ecko/.test(b) && b.match(/rv\:(\d+)/) && RegExp.$1 < 45)) {
        addEventListener("resize", function() {
            var b;
            var c = document.createElement("source");
            var d = function(a) {
                var b, d;
                var e = a.parentNode;
                if (e.nodeName.toUpperCase() === "PICTURE") {
                    b = c.cloneNode();
                    e.insertBefore(b, e.firstElementChild);
                    setTimeout(function() {
                        e.removeChild(b);
                    });
                } else if (!a._pfLastSize || a.offsetWidth > a._pfLastSize) {
                    a._pfLastSize = a.offsetWidth;
                    d = a.sizes;
                    a.sizes += ",100vw";
                    setTimeout(function() {
                        a.sizes = d;
                    });
                }
            };
            var e = function() {
                var a;
                var b = document.querySelectorAll("picture > img, img[srcset][sizes]");
                for (a = 0; a < b.length; a++) {
                    d(b[a]);
                }
            };
            var f = function() {
                clearTimeout(b);
                b = setTimeout(e, 99);
            };
            var g = a.matchMedia && matchMedia("(orientation: landscape)");
            var h = function() {
                f();
                if (g && g.addListener) {
                    g.addListener(f);
                }
            };
            c.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
            if (/^[c|i]|d$/.test(document.readyState || "")) {
                h();
            } else {
                document.addEventListener("DOMContentLoaded", h);
            }
            return f;
        }());
    }
})(window);

/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */
(function(a, b, c) {
    // Enable strict mode
    "use strict";
    // HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)
    b.createElement("picture");
    var d, e, f, g;
    // local object for method references and testing exposure
    var h = {};
    var i = false;
    var j = function() {};
    var k = b.createElement("img");
    var l = k.getAttribute;
    var m = k.setAttribute;
    var n = k.removeAttribute;
    var o = b.documentElement;
    var p = {};
    var q = {
        //resource selection:
        algorithm: ""
    };
    var r = "data-pfsrc";
    var s = r + "set";
    // ua sniffing is done for undetectable img loading features,
    // to do some non crucial perf optimizations
    var t = navigator.userAgent;
    var u = /rident/.test(t) || /ecko/.test(t) && t.match(/rv\:(\d+)/) && RegExp.$1 > 35;
    var v = "currentSrc";
    var w = /\s+\+?\d+(e\d+)?w/;
    var x = /(\([^)]+\))?\s*(.+)/;
    var y = a.picturefillCFG;
    /**
	 * Shortcut property for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
	 */
    // baseStyle also used by getEmValue (i.e.: width: 1em is important)
    var z = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
    var A = "font-size:100%!important;";
    var B = true;
    var C = {};
    var D = {};
    var E = a.devicePixelRatio;
    var F = {
        px: 1,
        in: 96
    };
    var G = b.createElement("a");
    /**
	 * alreadyRun flag used for setOptions. is it true setOptions will reevaluate
	 * @type {boolean}
	 */
    var H = false;
    // Reusable, non-"g" Regexes
    // (Don't use \s, to avoid matching non-breaking space.)
    var I = /^[ \t\n\r\u000c]+/, J = /^[, \t\n\r\u000c]+/, K = /^[^ \t\n\r\u000c]+/, L = /[,]+$/, M = /^\d+$/, // ( Positive or negative or unsigned integers or decimals, without or without exponents.
    // Must include at least one digit.
    // According to spec tests any decimal point must be followed by a digit.
    // No leading plus sign is allowed.)
    // https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
    N = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
    var O = function(a, b, c, d) {
        if (a.addEventListener) {
            a.addEventListener(b, c, d || false);
        } else if (a.attachEvent) {
            a.attachEvent("on" + b, c);
        }
    };
    /**
	 * simple memoize function:
	 */
    var P = function(a) {
        var b = {};
        return function(c) {
            if (!(c in b)) {
                b[c] = a(c);
            }
            return b[c];
        };
    };
    // UTILITY FUNCTIONS
    // Manual is faster than RegEx
    // http://jsperf.com/whitespace-character/5
    function Q(a) {
        // space
        // horizontal tab
        // new line
        // form feed
        return a === " " || a === "\t" || a === "\n" || a === "\f" || a === "\r";
    }
    /**
	 * gets a mediaquery and returns a boolean or gets a css length and returns a number
	 * @param css mediaqueries or css length
	 * @returns {boolean|number}
	 *
	 * based on: https://gist.github.com/jonathantneal/db4f77009b155f083738
	 */
    var R = function() {
        var a = /^([\d\.]+)(em|vw|px)$/;
        var b = function() {
            var a = arguments, b = 0, c = a[0];
            while (++b in a) {
                c = c.replace(a[b], a[++b]);
            }
            return c;
        };
        var c = P(function(a) {
            // interpret `and`
            // interpret `,`
            // interpret `min-` as >=
            // interpret `max-` as <=
            //calc value
            // interpret css values
            //make eval less evil
            return "return " + b((a || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";";
        });
        return function(b, d) {
            var e;
            if (!(b in C)) {
                C[b] = false;
                if (d && (e = b.match(a))) {
                    C[b] = e[1] * F[e[2]];
                } else {
                    /*jshint evil:true */
                    try {
                        C[b] = new Function("e", c(b))(F);
                    } catch (a) {}
                }
            }
            return C[b];
        };
    }();
    var S = function(a, b) {
        if (a.w) {
            // h = means height: || descriptor.type === 'h' do not handle yet...
            a.cWidth = h.calcListLength(b || "100vw");
            a.res = a.w / a.cWidth;
        } else {
            a.res = a.d;
        }
        return a;
    };
    /**
	 *
	 * @param opt
	 */
    var T = function(a) {
        if (!i) {
            return;
        }
        var c, d, e;
        var f = a || {};
        if (f.elements && f.elements.nodeType === 1) {
            if (f.elements.nodeName.toUpperCase() === "IMG") {
                f.elements = [ f.elements ];
            } else {
                f.context = f.elements;
                f.elements = null;
            }
        }
        c = f.elements || h.qsa(f.context || b, f.reevaluate || f.reselect ? h.sel : h.selShort);
        if (e = c.length) {
            h.setupRun(f);
            H = true;
            // Loop through all elements
            for (d = 0; d < e; d++) {
                h.fillImg(c[d], f);
            }
            h.teardownRun(f);
        }
    };
    /**
	 * outputs a warning for the developer
	 * @param {message}
	 * @type {Function}
	 */
    d = a.console && console.warn ? function(a) {
        console.warn(a);
    } : j;
    if (!(v in k)) {
        v = "src";
    }
    // Add support for standard mime types.
    p["image/jpeg"] = true;
    p["image/gif"] = true;
    p["image/png"] = true;
    function U(b, c) {
        // based on Modernizr's lossless img-webp test
        // note: asynchronous
        var d = new a.Image();
        d.onerror = function() {
            p[b] = false;
            T();
        };
        d.onload = function() {
            p[b] = d.width === 1;
            T();
        };
        d.src = c;
        return "pending";
    }
    // test svg support
    p["image/svg+xml"] = b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
    /**
	 * updates the internal vW property with the current viewport width in px
	 */
    function V() {
        B = false;
        E = a.devicePixelRatio;
        C = {};
        D = {};
        h.DPR = E || 1;
        F.width = Math.max(a.innerWidth || 0, o.clientWidth);
        F.height = Math.max(a.innerHeight || 0, o.clientHeight);
        F.vw = F.width / 100;
        F.vh = F.height / 100;
        g = [ F.height, F.width, E ].join("-");
        F.em = h.getEmValue();
        F.rem = F.em;
    }
    function W(a, b, c, d) {
        var e, f, g, h;
        //experimental
        if (q.algorithm === "saveData") {
            if (a > 2.7) {
                h = c + 1;
            } else {
                f = b - c;
                e = Math.pow(a - .6, 1.5);
                g = f * e;
                if (d) {
                    g += .1 * e;
                }
                h = a + g;
            }
        } else {
            h = c > 1 ? Math.sqrt(a * b) : a;
        }
        return h > c;
    }
    function X(a) {
        var b;
        var c = h.getSet(a);
        var d = false;
        if (c !== "pending") {
            d = g;
            if (c) {
                b = h.setRes(c);
                h.applySetCandidate(b, a);
            }
        }
        a[h.ns].evaled = d;
    }
    function Y(a, b) {
        return a.res - b.res;
    }
    function Z(a, b, c) {
        var d;
        if (!c && b) {
            c = a[h.ns].sets;
            c = c && c[c.length - 1];
        }
        d = $(b, c);
        if (d) {
            b = h.makeUrl(b);
            a[h.ns].curSrc = b;
            a[h.ns].curCan = d;
            if (!d.res) {
                S(d, d.set.sizes);
            }
        }
        return d;
    }
    function $(a, b) {
        var c, d, e;
        if (a && b) {
            e = h.parseSet(b);
            a = h.makeUrl(a);
            for (c = 0; c < e.length; c++) {
                if (a === h.makeUrl(e[c].url)) {
                    d = e[c];
                    break;
                }
            }
        }
        return d;
    }
    function _(a, b) {
        var c, d, e, f;
        // SPEC mismatch intended for size and perf:
        // actually only source elements preceding the img should be used
        // also note: don't use qsa here, because IE8 sometimes doesn't like source as the key part in a selector
        var g = a.getElementsByTagName("source");
        for (c = 0, d = g.length; c < d; c++) {
            e = g[c];
            e[h.ns] = true;
            f = e.getAttribute("srcset");
            // if source does not have a srcset attribute, skip
            if (f) {
                b.push({
                    srcset: f,
                    media: e.getAttribute("media"),
                    type: e.getAttribute("type"),
                    sizes: e.getAttribute("sizes")
                });
            }
        }
    }
    /**
	 * Srcset Parser
	 * By Alex Bell |  MIT License
	 *
	 * @returns Array [{url: _, d: _, w: _, h:_, set:_(????)}, ...]
	 *
	 * Based super duper closely on the reference algorithm at:
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
	 */
    // 1. Let input be the value passed to this algorithm.
    // (TO-DO : Explain what "set" argument is here. Maybe choose a more
    // descriptive & more searchable name.  Since passing the "set" in really has
    // nothing to do with parsing proper, I would prefer this assignment eventually
    // go in an external fn.)
    function aa(a, b) {
        function c(b) {
            var c, d = b.exec(a.substring(j));
            if (d) {
                c = d[0];
                j += c.length;
                return c;
            }
        }
        var d = a.length, e, f, g, h, i, // 2. Let position be a pointer into input, initially pointing at the start
        //    of the string.
        j = 0, // 3. Let candidates be an initially empty source set.
        k = [];
        /**
		* Adds descriptor properties to a candidate, pushes to the candidates array
		* @return undefined
		*/
        // (Declared outside of the while loop so that it's only created once.
        // (This fn is defined before it is used, in order to pass JSHINT.
        // Unfortunately this breaks the sequencing of the spec comments. :/ )
        function l() {
            // 9. Descriptor parser: Let error be no.
            var a = false, // 10. Let width be absent.
            // 11. Let density be absent.
            // 12. Let future-compat-h be absent. (We're implementing it now as h)
            c, d, g, h, i = {}, j, l, m, n, o;
            // 13. For each descriptor in descriptors, run the appropriate set of steps
            // from the following list:
            for (h = 0; h < f.length; h++) {
                j = f[h];
                l = j[j.length - 1];
                m = j.substring(0, j.length - 1);
                n = parseInt(m, 10);
                o = parseFloat(m);
                // If the descriptor consists of a valid non-negative integer followed by
                // a U+0077 LATIN SMALL LETTER W character
                if (M.test(m) && l === "w") {
                    // If width and density are not both absent, then let error be yes.
                    if (c || d) {
                        a = true;
                    }
                    // Apply the rules for parsing non-negative integers to the descriptor.
                    // If the result is zero, let error be yes.
                    // Otherwise, let width be the result.
                    if (n === 0) {
                        a = true;
                    } else {
                        c = n;
                    }
                } else if (N.test(m) && l === "x") {
                    // If width, density and future-compat-h are not all absent, then let error
                    // be yes.
                    if (c || d || g) {
                        a = true;
                    }
                    // Apply the rules for parsing floating-point number values to the descriptor.
                    // If the result is less than zero, let error be yes. Otherwise, let density
                    // be the result.
                    if (o < 0) {
                        a = true;
                    } else {
                        d = o;
                    }
                } else if (M.test(m) && l === "h") {
                    // If height and density are not both absent, then let error be yes.
                    if (g || d) {
                        a = true;
                    }
                    // Apply the rules for parsing non-negative integers to the descriptor.
                    // If the result is zero, let error be yes. Otherwise, let future-compat-h
                    // be the result.
                    if (n === 0) {
                        a = true;
                    } else {
                        g = n;
                    }
                } else {
                    a = true;
                }
            }
            // (close step 13 for loop)
            // 15. If error is still no, then append a new image source to candidates whose
            // URL is url, associated with a width width if not absent and a pixel
            // density density if not absent. Otherwise, there is a parse error.
            if (!a) {
                i.url = e;
                if (c) {
                    i.w = c;
                }
                if (d) {
                    i.d = d;
                }
                if (g) {
                    i.h = g;
                }
                if (!g && !d && !c) {
                    i.d = 1;
                }
                if (i.d === 1) {
                    b.has1x = true;
                }
                i.set = b;
                k.push(i);
            }
        }
        // (close parseDescriptors fn)
        /**
		* Tokenizes descriptor properties prior to parsing
		* Returns undefined.
		* (Again, this fn is defined before it is used, in order to pass JSHINT.
		* Unfortunately this breaks the logical sequencing of the spec comments. :/ )
		*/
        function m() {
            // 8.1. Descriptor tokeniser: Skip whitespace
            c(I);
            // 8.2. Let current descriptor be the empty string.
            g = "";
            // 8.3. Let state be in descriptor.
            h = "in descriptor";
            while (true) {
                // 8.4. Let c be the character at position.
                i = a.charAt(j);
                //  Do the following depending on the value of state.
                //  For the purpose of this step, "EOF" is a special character representing
                //  that position is past the end of input.
                // In descriptor
                if (h === "in descriptor") {
                    // Do the following, depending on the value of c:
                    // Space character
                    // If current descriptor is not empty, append current descriptor to
                    // descriptors and let current descriptor be the empty string.
                    // Set state to after descriptor.
                    if (Q(i)) {
                        if (g) {
                            f.push(g);
                            g = "";
                            h = "after descriptor";
                        }
                    } else if (i === ",") {
                        j += 1;
                        if (g) {
                            f.push(g);
                        }
                        l();
                        return;
                    } else if (i === "(") {
                        g = g + i;
                        h = "in parens";
                    } else if (i === "") {
                        if (g) {
                            f.push(g);
                        }
                        l();
                        return;
                    } else {
                        g = g + i;
                    }
                } else if (h === "in parens") {
                    // U+0029 RIGHT PARENTHESIS ())
                    // Append c to current descriptor. Set state to in descriptor.
                    if (i === ")") {
                        g = g + i;
                        h = "in descriptor";
                    } else if (i === "") {
                        f.push(g);
                        l();
                        return;
                    } else {
                        g = g + i;
                    }
                } else if (h === "after descriptor") {
                    // Do the following, depending on the value of c:
                    // Space character: Stay in this state.
                    if (Q(i)) {} else if (i === "") {
                        l();
                        return;
                    } else {
                        h = "in descriptor";
                        j -= 1;
                    }
                }
                // Advance position to the next character in input.
                j += 1;
            }
        }
        // 4. Splitting loop: Collect a sequence of characters that are space
        //    characters or U+002C COMMA characters. If any U+002C COMMA characters
        //    were collected, that is a parse error.
        while (true) {
            c(J);
            // 5. If position is past the end of input, return candidates and abort these steps.
            if (j >= d) {
                return k;
            }
            // 6. Collect a sequence of characters that are not space characters,
            //    and let that be url.
            e = c(K);
            // 7. Let descriptors be a new empty list.
            f = [];
            // 8. If url ends with a U+002C COMMA character (,), follow these substeps:
            //		(1). Remove all trailing U+002C COMMA characters from url. If this removed
            //         more than one character, that is a parse error.
            if (e.slice(-1) === ",") {
                e = e.replace(L, "");
                // (Jump ahead to step 9 to skip tokenization and just push the candidate).
                l();
            } else {
                m();
            }
        }
    }
    /*
	 * Sizes Parser
	 *
	 * By Alex Bell |  MIT License
	 *
	 * Non-strict but accurate and lightweight JS Parser for the string value <img sizes="here">
	 *
	 * Reference algorithm at:
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-sizes-attribute
	 *
	 * Most comments are copied in directly from the spec
	 * (except for comments in parens).
	 *
	 * Grammar is:
	 * <source-size-list> = <source-size># [ , <source-size-value> ]? | <source-size-value>
	 * <source-size> = <media-condition> <source-size-value>
	 * <source-size-value> = <length>
	 * http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-sizes
	 *
	 * E.g. "(max-width: 30em) 100vw, (max-width: 50em) 70vw, 100vw"
	 * or "(min-width: 30em), calc(30vw - 15px)" or just "30vw"
	 *
	 * Returns the first valid <css-length> with a media condition that evaluates to true,
	 * or "100vw" if all valid media conditions evaluate to false.
	 *
	 */
    function ba(a) {
        // (Percentage CSS lengths are not allowed in this case, to avoid confusion:
        // https://html.spec.whatwg.org/multipage/embedded-content.html#valid-source-size-list
        // CSS allows a single optional plus or minus sign:
        // http://www.w3.org/TR/CSS2/syndata.html#numbers
        // CSS is ASCII case-insensitive:
        // http://www.w3.org/TR/CSS2/syndata.html#characters )
        // Spec allows exponential notation for <number> type:
        // http://dev.w3.org/csswg/css-values/#numbers
        var b = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;
        // (This is a quick and lenient test. Because of optional unlimited-depth internal
        // grouping parens and strict spacing rules, this could get very complicated.)
        var c = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
        var d;
        var e;
        var f;
        var g;
        var i;
        var j;
        // UTILITY FUNCTIONS
        //  (Toy CSS parser. The goals here are:
        //  1) expansive test coverage without the weight of a full CSS parser.
        //  2) Avoiding regex wherever convenient.
        //  Quick tests: http://jsfiddle.net/gtntL4gr/3/
        //  Returns an array of arrays.)
        function k(a) {
            var b;
            var c = "";
            var d = [];
            var e = [];
            var f = 0;
            var g = 0;
            var h = false;
            function i() {
                if (c) {
                    d.push(c);
                    c = "";
                }
            }
            function j() {
                if (d[0]) {
                    e.push(d);
                    d = [];
                }
            }
            // (Loop forwards from the beginning of the string.)
            while (true) {
                b = a.charAt(g);
                if (b === "") {
                    // ( End of string reached.)
                    i();
                    j();
                    return e;
                } else if (h) {
                    if (b === "*" && a[g + 1] === "/") {
                        // (At end of a comment.)
                        h = false;
                        g += 2;
                        i();
                        continue;
                    } else {
                        g += 1;
                        // (Skip all characters inside comments.)
                        continue;
                    }
                } else if (Q(b)) {
                    // (If previous character in loop was also a space, or if
                    // at the beginning of the string, do not add space char to
                    // component.)
                    if (a.charAt(g - 1) && Q(a.charAt(g - 1)) || !c) {
                        g += 1;
                        continue;
                    } else if (f === 0) {
                        i();
                        g += 1;
                        continue;
                    } else {
                        // (Replace any space character with a plain space for legibility.)
                        b = " ";
                    }
                } else if (b === "(") {
                    f += 1;
                } else if (b === ")") {
                    f -= 1;
                } else if (b === ",") {
                    i();
                    j();
                    g += 1;
                    continue;
                } else if (b === "/" && a.charAt(g + 1) === "*") {
                    h = true;
                    g += 2;
                    continue;
                }
                c = c + b;
                g += 1;
            }
        }
        function l(a) {
            if (b.test(a) && parseFloat(a) >= 0) {
                return true;
            }
            if (c.test(a)) {
                return true;
            }
            // ( http://www.w3.org/TR/CSS2/syndata.html#numbers says:
            // "-0 is equivalent to 0 and is not a negative number." which means that
            // unitless zero and unitless negative zero must be accepted as special cases.)
            if (a === "0" || a === "-0" || a === "+0") {
                return true;
            }
            return false;
        }
        // When asked to parse a sizes attribute from an element, parse a
        // comma-separated list of component values from the value of the element's
        // sizes attribute (or the empty string, if the attribute is absent), and let
        // unparsed sizes list be the result.
        // http://dev.w3.org/csswg/css-syntax/#parse-comma-separated-list-of-component-values
        e = k(a);
        f = e.length;
        // For each unparsed size in unparsed sizes list:
        for (d = 0; d < f; d++) {
            g = e[d];
            // 1. Remove all consecutive <whitespace-token>s from the end of unparsed size.
            // ( parseComponentValues() already omits spaces outside of parens. )
            // If unparsed size is now empty, that is a parse error; continue to the next
            // iteration of this algorithm.
            // ( parseComponentValues() won't push an empty array. )
            // 2. If the last component value in unparsed size is a valid non-negative
            // <source-size-value>, let size be its value and remove the component value
            // from unparsed size. Any CSS function other than the calc() function is
            // invalid. Otherwise, there is a parse error; continue to the next iteration
            // of this algorithm.
            // http://dev.w3.org/csswg/css-syntax/#parse-component-value
            i = g[g.length - 1];
            if (l(i)) {
                j = i;
                g.pop();
            } else {
                continue;
            }
            // 3. Remove all consecutive <whitespace-token>s from the end of unparsed
            // size. If unparsed size is now empty, return size and exit this algorithm.
            // If this was not the last item in unparsed sizes list, that is a parse error.
            if (g.length === 0) {
                return j;
            }
            // 4. Parse the remaining component values in unparsed size as a
            // <media-condition>. If it does not parse correctly, or it does parse
            // correctly but the <media-condition> evaluates to false, continue to the
            // next iteration of this algorithm.
            // (Parsing all possible compound media conditions in JS is heavy, complicated,
            // and the payoff is unclear. Is there ever an situation where the
            // media condition parses incorrectly but still somehow evaluates to true?
            // Can we just rely on the browser/polyfill to do it?)
            g = g.join(" ");
            if (!h.matchesMedia(g)) {
                continue;
            }
            // 5. Return size and exit this algorithm.
            return j;
        }
        // If the above algorithm exhausts unparsed sizes list without returning a
        // size value, return 100vw.
        return "100vw";
    }
    // namespace
    h.ns = ("pf" + new Date().getTime()).substr(0, 9);
    // srcset support test
    h.supSrcset = "srcset" in k;
    h.supSizes = "sizes" in k;
    h.supPicture = !!a.HTMLPictureElement;
    // UC browser does claim to support srcset and picture, but not sizes,
    // this extended test reveals the browser does support nothing
    if (h.supSrcset && h.supPicture && !h.supSizes) {
        (function(a) {
            k.srcset = "data:,a";
            a.src = "data:,a";
            h.supSrcset = k.complete === a.complete;
            h.supPicture = h.supSrcset && h.supPicture;
        })(b.createElement("img"));
    }
    // Safari9 has basic support for sizes, but does't expose the `sizes` idl attribute
    if (h.supSrcset && !h.supSizes) {
        (function() {
            var a = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
            var c = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
            var d = b.createElement("img");
            var e = function() {
                var a = d.width;
                if (a === 2) {
                    h.supSizes = true;
                }
                f = h.supSrcset && !h.supSizes;
                i = true;
                // force async
                setTimeout(T);
            };
            d.onload = e;
            d.onerror = e;
            d.setAttribute("sizes", "9px");
            d.srcset = c + " 1w," + a + " 9w";
            d.src = c;
        })();
    } else {
        i = true;
    }
    // using pf.qsa instead of dom traversing does scale much better,
    // especially on sites mixing responsive and non-responsive images
    h.selShort = "picture>img,img[srcset]";
    h.sel = h.selShort;
    h.cfg = q;
    /**
	 * Shortcut property for `devicePixelRatio` ( for easy overriding in tests )
	 */
    h.DPR = E || 1;
    h.u = F;
    // container of supported mime types that one might need to qualify before using
    h.types = p;
    h.setSize = j;
    /**
	 * Gets a string and returns the absolute URL
	 * @param src
	 * @returns {String} absolute URL
	 */
    h.makeUrl = P(function(a) {
        G.href = a;
        return G.href;
    });
    /**
	 * Gets a DOM element or document and a selctor and returns the found matches
	 * Can be extended with jQuery/Sizzle for IE7 support
	 * @param context
	 * @param sel
	 * @returns {NodeList|Array}
	 */
    h.qsa = function(a, b) {
        return "querySelector" in a ? a.querySelectorAll(b) : [];
    };
    /**
	 * Shortcut method for matchMedia ( for easy overriding in tests )
	 * wether native or pf.mMQ is used will be decided lazy on first call
	 * @returns {boolean}
	 */
    h.matchesMedia = function() {
        if (a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches) {
            h.matchesMedia = function(a) {
                return !a || matchMedia(a).matches;
            };
        } else {
            h.matchesMedia = h.mMQ;
        }
        return h.matchesMedia.apply(this, arguments);
    };
    /**
	 * A simplified matchMedia implementation for IE8 and IE9
	 * handles only min-width/max-width with px or em values
	 * @param media
	 * @returns {boolean}
	 */
    h.mMQ = function(a) {
        return a ? R(a) : true;
    };
    /**
	 * Returns the calculated length in css pixel from the given sourceSizeValue
	 * http://dev.w3.org/csswg/css-values-3/#length-value
	 * intended Spec mismatches:
	 * * Does not check for invalid use of CSS functions
	 * * Does handle a computed length of 0 the same as a negative and therefore invalid value
	 * @param sourceSizeValue
	 * @returns {Number}
	 */
    h.calcLength = function(a) {
        var b = R(a, true) || false;
        if (b < 0) {
            b = false;
        }
        return b;
    };
    /**
	 * Takes a type string and checks if its supported
	 */
    h.supportsType = function(a) {
        return a ? p[a] : true;
    };
    /**
	 * Parses a sourceSize into mediaCondition (media) and sourceSizeValue (length)
	 * @param sourceSizeStr
	 * @returns {*}
	 */
    h.parseSize = P(function(a) {
        var b = (a || "").match(x);
        return {
            media: b && b[1],
            length: b && b[2]
        };
    });
    h.parseSet = function(a) {
        if (!a.cands) {
            a.cands = aa(a.srcset, a);
        }
        return a.cands;
    };
    /**
	 * returns 1em in css px for html/body default size
	 * function taken from respondjs
	 * @returns {*|number}
	 */
    h.getEmValue = function() {
        var a;
        if (!e && (a = b.body)) {
            var c = b.createElement("div"), d = o.style.cssText, f = a.style.cssText;
            c.style.cssText = z;
            // 1em in a media query is the value of the default font size of the browser
            // reset docElem and body to ensure the correct value is returned
            o.style.cssText = A;
            a.style.cssText = A;
            a.appendChild(c);
            e = c.offsetWidth;
            a.removeChild(c);
            //also update eminpx before returning
            e = parseFloat(e, 10);
            // restore the original values
            o.style.cssText = d;
            a.style.cssText = f;
        }
        return e || 16;
    };
    /**
	 * Takes a string of sizes and returns the width in pixels as a number
	 */
    h.calcListLength = function(a) {
        // Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
        //
        //                           or (min-width:30em) calc(30% - 15px)
        if (!(a in D) || q.uT) {
            var b = h.calcLength(ba(a));
            D[a] = !b ? F.width : b;
        }
        return D[a];
    };
    /**
	 * Takes a candidate object with a srcset property in the form of url/
	 * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
	 *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
	 *     "images/pic-small.png"
	 * Get an array of image candidates in the form of
	 *      {url: "/foo/bar.png", resolution: 1}
	 * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
	 * If sizes is specified, res is calculated
	 */
    h.setRes = function(a) {
        var b;
        if (a) {
            b = h.parseSet(a);
            for (var c = 0, d = b.length; c < d; c++) {
                S(b[c], a.sizes);
            }
        }
        return b;
    };
    h.setRes.res = S;
    h.applySetCandidate = function(a, b) {
        if (!a.length) {
            return;
        }
        var c, d, e, f, g, i, j, k, l;
        var m = b[h.ns];
        var n = h.DPR;
        i = m.curSrc || b[v];
        j = m.curCan || Z(b, i, a[0].set);
        // if we have a current source, we might either become lazy or give this source some advantage
        if (j && j.set === a[0].set) {
            // if browser can abort image request and the image has a higher pixel density than needed
            // and this image isn't downloaded yet, we skip next part and try to save bandwidth
            l = u && !b.complete && j.res - .1 > n;
            if (!l) {
                j.cached = true;
                // if current candidate is "best", "better" or "okay",
                // set it to bestCandidate
                if (j.res >= n) {
                    g = j;
                }
            }
        }
        if (!g) {
            a.sort(Y);
            f = a.length;
            g = a[f - 1];
            for (d = 0; d < f; d++) {
                c = a[d];
                if (c.res >= n) {
                    e = d - 1;
                    // we have found the perfect candidate,
                    // but let's improve this a little bit with some assumptions ;-)
                    if (a[e] && (l || i !== h.makeUrl(c.url)) && W(a[e].res, c.res, n, a[e].cached)) {
                        g = a[e];
                    } else {
                        g = c;
                    }
                    break;
                }
            }
        }
        if (g) {
            k = h.makeUrl(g.url);
            m.curSrc = k;
            m.curCan = g;
            if (k !== i) {
                h.setSrc(b, g);
            }
            h.setSize(b);
        }
    };
    h.setSrc = function(a, b) {
        var c;
        a.src = b.url;
        // although this is a specific Safari issue, we don't want to take too much different code paths
        if (b.set.type === "image/svg+xml") {
            c = a.style.width;
            a.style.width = a.offsetWidth + 1 + "px";
            // next line only should trigger a repaint
            // if... is only done to trick dead code removal
            if (a.offsetWidth + 1) {
                a.style.width = c;
            }
        }
    };
    h.getSet = function(a) {
        var b, c, d;
        var e = false;
        var f = a[h.ns].sets;
        for (b = 0; b < f.length && !e; b++) {
            c = f[b];
            if (!c.srcset || !h.matchesMedia(c.media) || !(d = h.supportsType(c.type))) {
                continue;
            }
            if (d === "pending") {
                c = d;
            }
            e = c;
            break;
        }
        return e;
    };
    h.parseSets = function(a, b, d) {
        var e, g, i, j;
        var k = b && b.nodeName.toUpperCase() === "PICTURE";
        var o = a[h.ns];
        if (o.src === c || d.src) {
            o.src = l.call(a, "src");
            if (o.src) {
                m.call(a, r, o.src);
            } else {
                n.call(a, r);
            }
        }
        if (o.srcset === c || d.srcset || !h.supSrcset || a.srcset) {
            e = l.call(a, "srcset");
            o.srcset = e;
            j = true;
        }
        o.sets = [];
        if (k) {
            o.pic = true;
            _(b, o.sets);
        }
        if (o.srcset) {
            g = {
                srcset: o.srcset,
                sizes: l.call(a, "sizes")
            };
            o.sets.push(g);
            i = (f || o.src) && w.test(o.srcset || "");
            // add normal src as candidate, if source has no w descriptor
            if (!i && o.src && !$(o.src, g) && !g.has1x) {
                g.srcset += ", " + o.src;
                g.cands.push({
                    url: o.src,
                    d: 1,
                    set: g
                });
            }
        } else if (o.src) {
            o.sets.push({
                srcset: o.src,
                sizes: null
            });
        }
        o.curCan = null;
        o.curSrc = c;
        // if img has picture or the srcset was removed or has a srcset and does not support srcset at all
        // or has a w descriptor (and does not support sizes) set support to false to evaluate
        o.supported = !(k || g && !h.supSrcset || i && !h.supSizes);
        if (j && h.supSrcset && !o.supported) {
            if (e) {
                m.call(a, s, e);
                a.srcset = "";
            } else {
                n.call(a, s);
            }
        }
        if (o.supported && !o.srcset && (!o.src && a.src || a.src !== h.makeUrl(o.src))) {
            if (o.src === null) {
                a.removeAttribute("src");
            } else {
                a.src = o.src;
            }
        }
        o.parsed = true;
    };
    h.fillImg = function(a, b) {
        var c;
        var d = b.reselect || b.reevaluate;
        // expando for caching data on the img
        if (!a[h.ns]) {
            a[h.ns] = {};
        }
        c = a[h.ns];
        // if the element has already been evaluated, skip it
        // unless `options.reevaluate` is set to true ( this, for example,
        // is set to true when running `picturefill` on `resize` ).
        if (!d && c.evaled === g) {
            return;
        }
        if (!c.parsed || b.reevaluate) {
            h.parseSets(a, a.parentNode, b);
        }
        if (!c.supported) {
            X(a);
        } else {
            c.evaled = g;
        }
    };
    h.setupRun = function() {
        if (!H || B || E !== a.devicePixelRatio) {
            V();
        }
    };
    // If picture is supported, well, that's awesome.
    if (h.supPicture) {
        T = j;
        h.fillImg = j;
    } else {
        // Set up picture polyfill by polling the document
        (function() {
            var c;
            var d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/;
            var e = function() {
                var a = b.readyState || "";
                f = setTimeout(e, a === "loading" ? 200 : 999);
                if (b.body) {
                    h.fillImgs();
                    c = c || d.test(a);
                    if (c) {
                        clearTimeout(f);
                    }
                }
            };
            var f = setTimeout(e, b.body ? 9 : 99);
            // Also attach picturefill on resize and readystatechange
            // http://modernjavascript.blogspot.com/2013/08/building-better-debounce.html
            var g = function(a, b) {
                var c, d;
                var e = function() {
                    var f = new Date() - d;
                    if (f < b) {
                        c = setTimeout(e, b - f);
                    } else {
                        c = null;
                        a();
                    }
                };
                return function() {
                    d = new Date();
                    if (!c) {
                        c = setTimeout(e, b);
                    }
                };
            };
            var i = o.clientHeight;
            var j = function() {
                B = Math.max(a.innerWidth || 0, o.clientWidth) !== F.width || o.clientHeight !== i;
                i = o.clientHeight;
                if (B) {
                    h.fillImgs();
                }
            };
            O(a, "resize", g(j, 99));
            O(b, "readystatechange", e);
        })();
    }
    h.picturefill = T;
    //use this internally for easy monkey patching/performance testing
    h.fillImgs = T;
    h.teardownRun = j;
    /* expose methods for testing */
    T._ = h;
    a.picturefillCFG = {
        pf: h,
        push: function(a) {
            var b = a.shift();
            if (typeof h[b] === "function") {
                h[b].apply(h, a);
            } else {
                q[b] = a[0];
                if (H) {
                    h.fillImgs({
                        reselect: true
                    });
                }
            }
        }
    };
    while (y && y.length) {
        a.picturefillCFG.push(y.shift());
    }
    /* expose picturefill */
    a.picturefill = T;
    /* expose picturefill */
    if (typeof module === "object" && typeof module.exports === "object") {
        // CommonJS, just export
        module.exports = T;
    } else if (typeof define === "function" && define.amd) {
        // AMD support
        define("picturefill", function() {
            return T;
        });
    }
    // IE8 evals this sync, so it must be the last thing we do
    if (!h.supPicture) {
        p["image/webp"] = U("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==");
    }
})(window, document);