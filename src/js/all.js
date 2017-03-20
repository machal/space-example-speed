/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */
(function(a, b) {
    if (typeof module === "object" && typeof module.exports === "object") {
        // For CommonJS and CommonJS-like environments where a proper `window`
        // is present, execute the factory and get jQuery.
        // For environments that do not have a `window` with a `document`
        // (such as Node.js), expose a factory as module.exports.
        // This accentuates the need for the creation of a real `window`.
        // e.g. var jQuery = require("jquery")(window);
        // See ticket #14549 for more info.
        module.exports = a.document ? b(a, true) : function(a) {
            if (!a.document) {
                throw new Error("jQuery requires a window with a document");
            }
            return b(a);
        };
    } else {
        b(a);
    }
})(typeof window !== "undefined" ? window : this, function(a, b) {
    // Support: Firefox 18+
    // Can't be in strict mode, several libs including ASP.NET trace
    // the stack via arguments.caller.callee and Firefox dies if
    // you try to trace through "use strict" call chains. (#13335)
    //"use strict";
    var c = [];
    var d = a.document;
    var e = c.slice;
    var f = c.concat;
    var g = c.push;
    var h = c.indexOf;
    var i = {};
    var j = i.toString;
    var k = i.hasOwnProperty;
    var l = {};
    var m = "1.12.4", // Define a local copy of jQuery
    n = function(a, b) {
        // The jQuery object is actually just the init constructor 'enhanced'
        // Need init if jQuery is called (just allow error to be thrown if not included)
        return new n.fn.init(a, b);
    }, // Support: Android<4.1, IE<9
    // Make sure we trim BOM and NBSP
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, // Matches dashed string for camelizing
    p = /^-ms-/, q = /-([\da-z])/gi, // Used by jQuery.camelCase as callback to replace()
    r = function(a, b) {
        return b.toUpperCase();
    };
    n.fn = n.prototype = {
        // The current version of jQuery being used
        jquery: m,
        constructor: n,
        // Start with an empty selector
        selector: "",
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
            return e.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(a) {
            // Return just the one element from the set
            // Return all the elements in a clean array
            return a != null ? a < 0 ? this[a + this.length] : this[a] : e.call(this);
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(a) {
            // Build a new jQuery matched element set
            var b = n.merge(this.constructor(), a);
            // Add the old object onto the stack (as a reference)
            b.prevObject = this;
            b.context = this.context;
            // Return the newly-formed element set
            return b;
        },
        // Execute a callback for every element in the matched set.
        each: function(a) {
            return n.each(this, a);
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: g,
        sort: c.sort,
        splice: c.splice
    };
    n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = false;
        // Handle a deep copy situation
        if (typeof g === "boolean") {
            j = g;
            // skip the boolean and the target
            g = arguments[h] || {};
            h++;
        }
        // Handle case when target is a string or something (possible in deep copy)
        if (typeof g !== "object" && !n.isFunction(g)) {
            g = {};
        }
        // extend jQuery itself if only one argument is passed
        if (h === i) {
            g = this;
            h--;
        }
        for (;h < i; h++) {
            // Only deal with non-null/undefined values
            if ((e = arguments[h]) != null) {
                // Extend the base object
                for (d in e) {
                    a = g[d];
                    c = e[d];
                    // Prevent never-ending loop
                    if (g === c) {
                        continue;
                    }
                    // Recurse if we're merging plain objects or arrays
                    if (j && c && (n.isPlainObject(c) || (b = n.isArray(c)))) {
                        if (b) {
                            b = false;
                            f = a && n.isArray(a) ? a : [];
                        } else {
                            f = a && n.isPlainObject(a) ? a : {};
                        }
                        // Never move original objects, clone them
                        g[d] = n.extend(j, f, c);
                    } else if (c !== undefined) {
                        g[d] = c;
                    }
                }
            }
        }
        // Return the modified object
        return g;
    };
    n.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: true,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        // See test/unit/core.js for details concerning isFunction.
        // Since version 1.3, DOM methods and functions like alert
        // aren't supported. They return false on IE (#2968).
        isFunction: function(a) {
            return n.type(a) === "function";
        },
        isArray: Array.isArray || function(a) {
            return n.type(a) === "array";
        },
        isWindow: function(a) {
            /* jshint eqeqeq: false */
            return a != null && a == a.window;
        },
        isNumeric: function(a) {
            // parseFloat NaNs numeric-cast false positives (null|true|false|"")
            // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
            // subtraction forces infinities to NaN
            // adding 1 corrects loss of precision from parseFloat (#15100)
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) {
                return false;
            }
            return true;
        },
        isPlainObject: function(a) {
            var b;
            // Must be an Object.
            // Because of IE, we also have to check the presence of the constructor property.
            // Make sure that DOM nodes and window objects don't pass through, as well
            if (!a || n.type(a) !== "object" || a.nodeType || n.isWindow(a)) {
                return false;
            }
            try {
                // Not own constructor property must be Object
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) {
                    return false;
                }
            } catch (a) {
                // IE8,9 Will throw exceptions on certain host objects #9897
                return false;
            }
            // Support: IE<9
            // Handle iteration over inherited properties before own properties.
            if (!l.ownFirst) {
                for (b in a) {
                    return k.call(a, b);
                }
            }
            // Own properties are enumerated firstly, so to speed up,
            // if last one is own, then all properties are own.
            for (b in a) {}
            return b === undefined || k.call(a, b);
        },
        type: function(a) {
            if (a == null) {
                return a + "";
            }
            return typeof a === "object" || typeof a === "function" ? i[j.call(a)] || "object" : typeof a;
        },
        // Workarounds based on findings by Jim Driscoll
        // http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
        globalEval: function(b) {
            if (b && n.trim(b)) {
                // We use execScript on Internet Explorer
                // We use an anonymous function so that context is window
                // rather than jQuery in Firefox
                (a.execScript || function(b) {
                    a["eval"].call(a, b);
                })(b);
            }
        },
        // Convert dashed to camelCase; used by the css and data modules
        // Microsoft forgot to hump their vendor prefix (#9572)
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                c = a.length;
                for (;d < c; d++) {
                    if (b.call(a[d], d, a[d]) === false) {
                        break;
                    }
                }
            } else {
                for (d in a) {
                    if (b.call(a[d], d, a[d]) === false) {
                        break;
                    }
                }
            }
            return a;
        },
        // Support: Android<4.1, IE<9
        trim: function(a) {
            return a == null ? "" : (a + "").replace(o, "");
        },
        // results is for internal usage only
        makeArray: function(a, b) {
            var c = b || [];
            if (a != null) {
                if (s(Object(a))) {
                    n.merge(c, typeof a === "string" ? [ a ] : a);
                } else {
                    g.call(c, a);
                }
            }
            return c;
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (h) {
                    return h.call(b, a, c);
                }
                d = b.length;
                c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                for (;c < d; c++) {
                    // Skip accessing in sparse arrays
                    if (c in b && b[c] === a) {
                        return c;
                    }
                }
            }
            return -1;
        },
        merge: function(a, b) {
            var c = +b.length, d = 0, e = a.length;
            while (d < c) {
                a[e++] = b[d++];
            }
            // Support: IE<9
            // Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
            if (c !== c) {
                while (b[d] !== undefined) {
                    a[e++] = b[d++];
                }
            }
            a.length = e;
            return a;
        },
        grep: function(a, b, c) {
            var d, e = [], f = 0, g = a.length, h = !c;
            // Go through the array, only saving the items
            // that pass the validator function
            for (;f < g; f++) {
                d = !b(a[f], f);
                if (d !== h) {
                    e.push(a[f]);
                }
            }
            return e;
        },
        // arg is for internal usage only
        map: function(a, b, c) {
            var d, e, g = 0, h = [];
            // Go through the array, translating each of the items to their new values
            if (s(a)) {
                d = a.length;
                for (;g < d; g++) {
                    e = b(a[g], g, c);
                    if (e != null) {
                        h.push(e);
                    }
                }
            } else {
                for (g in a) {
                    e = b(a[g], g, c);
                    if (e != null) {
                        h.push(e);
                    }
                }
            }
            // Flatten any nested arrays
            return f.apply([], h);
        },
        // A global GUID counter for objects
        guid: 1,
        // Bind a function to a context, optionally partially applying any
        // arguments.
        proxy: function(a, b) {
            var c, d, f;
            if (typeof b === "string") {
                f = a[b];
                b = a;
                a = f;
            }
            // Quick check to determine if target is callable, in the spec
            // this throws a TypeError, but we will just return undefined.
            if (!n.isFunction(a)) {
                return undefined;
            }
            // Simulated bind
            c = e.call(arguments, 2);
            d = function() {
                return a.apply(b || this, c.concat(e.call(arguments)));
            };
            // Set the guid of unique handler to the same of original handler, so it can be removed
            d.guid = a.guid = a.guid || n.guid++;
            return d;
        },
        now: function() {
            return +new Date();
        },
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: l
    });
    // JSHint would error on this code due to the Symbol not being defined in ES5.
    // Defining this global in .jshintrc would create a danger of using the global
    // unguarded in another place, it seems safer to just disable JSHint for these
    // three lines.
    /* jshint ignore: start */
    if (typeof Symbol === "function") {
        n.fn[Symbol.iterator] = c[Symbol.iterator];
    }
    /* jshint ignore: end */
    // Populate the class2type map
    n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase();
    });
    function s(a) {
        // Support: iOS 8.2 (not reproducible in simulator)
        // `in` check used to prevent JIT error (gh-2145)
        // hasOwn isn't used here due to false negatives
        // regarding Nodelist length in IE
        var b = !!a && "length" in a && a.length, c = n.type(a);
        if (c === "function" || n.isWindow(a)) {
            return false;
        }
        return c === "array" || b === 0 || typeof b === "number" && b > 0 && b - 1 in a;
    }
    var t = /*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
    function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, // Local document vars
        m, n, o, p, q, r, s, t, // Instance-specific data
        u = "sizzle" + 1 * new Date(), v = a.document, w = 0, x = 0, y = fa(), z = fa(), A = fa(), B = function(a, b) {
            if (a === b) {
                l = true;
            }
            return 0;
        }, // General-purpose constants
        C = 1 << 31, // Instance methods
        D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, // Use a stripped-down indexOf as it's faster than native
        // http://jsperf.com/thor-indexof-vs-for/5
        J = function(a, b) {
            var c = 0, d = a.length;
            for (;c < d; c++) {
                if (a[c] === b) {
                    return c;
                }
            }
            return -1;
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", // Regular expressions
        // http://www.w3.org/TR/css3-selectors/#whitespace
        L = "[\\x20\\t\\r\\n\\f]", // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
        N = "\\[" + L + "*(" + M + ")(?:" + L + // Operator (capture 2)
        "*([*^$|!~]?=)" + L + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]", O = ":(" + M + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
        // 1. quoted (capture 3; capture 4 or capture 5)
        "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
        "((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|" + // 3. anything else (capture 2)
        ".*" + ")\\)|)", // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
        P = new RegExp(L + "+", "g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), U = new RegExp(O), V = new RegExp("^" + M + "$"), W = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + N),
            PSEUDO: new RegExp("^" + O),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, // Easily-parseable/retrievable ID or TAG or CLASS selectors
        $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g, // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
        ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), ca = function(a, b, c) {
            var d = "0x" + b - 65536;
            // NaN means non-codepoint
            // Support: Firefox<24
            // Workaround erroneous numeric interpretation of +"0x"
            // BMP codepoint
            // Supplemental Plane codepoint (surrogate pair)
            return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, d & 1023 | 56320);
        }, // Used for iframes
        // See setDocument()
        // Removing the function wrapper causes a "Permission Denied"
        // error in IE
        da = function() {
            m();
        };
        // Optimize for push.apply( _, NodeList )
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes);
            // Support: Android<4.0
            // Detect silently failing push.apply
            E[v.childNodes.length].nodeType;
        } catch (a) {
            H = {
                apply: E.length ? // Leverage slice if possible
                function(a, b) {
                    G.apply(a, I.call(b));
                } : // Support: IE<9
                // Otherwise append directly
                function(a, b) {
                    var c = a.length, d = 0;
                    // Can't trust NodeList.length
                    while (a[c++] = b[d++]) {}
                    a.length = c - 1;
                }
            };
        }
        function ea(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, // nodeType defaults to 9, since context defaults to document
            x = b ? b.nodeType : 9;
            d = d || [];
            // Return early from calls with invalid selector or context
            if (typeof a !== "string" || !a || x !== 1 && x !== 9 && x !== 11) {
                return d;
            }
            // Try to shortcut find operations (as opposed to filters) in HTML documents
            if (!e) {
                if ((b ? b.ownerDocument || b : v) !== n) {
                    m(b);
                }
                b = b || n;
                if (p) {
                    // If the selector is sufficiently simple, try using a "get*By*" DOM method
                    // (excepting DocumentFragment context, where the methods don't exist)
                    if (x !== 11 && (o = $.exec(a))) {
                        // ID selector
                        if (f = o[1]) {
                            // Document context
                            if (x === 9) {
                                if (j = b.getElementById(f)) {
                                    // Support: IE, Opera, Webkit
                                    // TODO: identify versions
                                    // getElementById can match elements by name instead of ID
                                    if (j.id === f) {
                                        d.push(j);
                                        return d;
                                    }
                                } else {
                                    return d;
                                }
                            } else {
                                // Support: IE, Opera, Webkit
                                // TODO: identify versions
                                // getElementById can match elements by name instead of ID
                                if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) {
                                    d.push(j);
                                    return d;
                                }
                            }
                        } else if (o[2]) {
                            H.apply(d, b.getElementsByTagName(a));
                            return d;
                        } else if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) {
                            H.apply(d, b.getElementsByClassName(f));
                            return d;
                        }
                    }
                    // Take advantage of querySelectorAll
                    if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                        if (x !== 1) {
                            w = b;
                            s = a;
                        } else if (b.nodeName.toLowerCase() !== "object") {
                            // Capture the context ID, setting it first if necessary
                            if (k = b.getAttribute("id")) {
                                k = k.replace(aa, "\\$&");
                            } else {
                                b.setAttribute("id", k = u);
                            }
                            // Prefix every selector in the list
                            r = g(a);
                            h = r.length;
                            l = V.test(k) ? "#" + k : "[id='" + k + "']";
                            while (h--) {
                                r[h] = l + " " + pa(r[h]);
                            }
                            s = r.join(",");
                            // Expand context for sibling selectors
                            w = _.test(a) && na(b.parentNode) || b;
                        }
                        if (s) {
                            try {
                                H.apply(d, w.querySelectorAll(s));
                                return d;
                            } catch (a) {} finally {
                                if (k === u) {
                                    b.removeAttribute("id");
                                }
                            }
                        }
                    }
                }
            }
            // All others
            return i(a.replace(Q, "$1"), b, d, e);
        }
        /**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
        function fa() {
            var a = [];
            function b(c, e) {
                // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                if (a.push(c + " ") > d.cacheLength) {
                    // Only keep the most recent entries
                    delete b[a.shift()];
                }
                return b[c + " "] = e;
            }
            return b;
        }
        /**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
        function ga(a) {
            a[u] = true;
            return a;
        }
        /**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
        function ha(a) {
            var b = n.createElement("div");
            try {
                return !!a(b);
            } catch (a) {
                return false;
            } finally {
                // Remove from its parent by default
                if (b.parentNode) {
                    b.parentNode.removeChild(b);
                }
                // release memory in IE
                b = null;
            }
        }
        /**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
        function ia(a, b) {
            var c = a.split("|"), e = c.length;
            while (e--) {
                d.attrHandle[c[e]] = b;
            }
        }
        /**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
        function ja(a, b) {
            var c = b && a, d = c && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            // Use IE sourceIndex if available on both nodes
            if (d) {
                return d;
            }
            // Check if b follows a
            if (c) {
                while (c = c.nextSibling) {
                    if (c === b) {
                        return -1;
                    }
                }
            }
            return a ? 1 : -1;
        }
        /**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
        function ka(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return c === "input" && b.type === a;
            };
        }
        /**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return (c === "input" || c === "button") && b.type === a;
            };
        }
        /**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
        function ma(a) {
            return ga(function(b) {
                b = +b;
                return ga(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    // Match elements found at the specified indexes
                    while (g--) {
                        if (c[e = f[g]]) {
                            c[e] = !(d[e] = c[e]);
                        }
                    }
                });
            });
        }
        /**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
        function na(a) {
            return a && typeof a.getElementsByTagName !== "undefined" && a;
        }
        // Expose support vars for convenience
        c = ea.support = {};
        /**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
        f = ea.isXML = function(a) {
            // documentElement is verified for cases where it doesn't yet exist
            // (such as loading iframes in IE - #4833)
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? b.nodeName !== "HTML" : false;
        };
        /**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
        m = ea.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            // Return early if doc is invalid or already selected
            if (g === n || g.nodeType !== 9 || !g.documentElement) {
                return n;
            }
            // Update global variables
            n = g;
            o = n.documentElement;
            p = !f(n);
            // Support: IE 9-11, Edge
            // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
            if ((e = n.defaultView) && e.top !== e) {
                // Support: IE 11
                if (e.addEventListener) {
                    e.addEventListener("unload", da, false);
                } else if (e.attachEvent) {
                    e.attachEvent("onunload", da);
                }
            }
            /* Attributes
	---------------------------------------------------------------------- */
            // Support: IE<8
            // Verify that getAttribute really returns attributes and not properties
            // (excepting IE8 booleans)
            c.attributes = ha(function(a) {
                a.className = "i";
                return !a.getAttribute("className");
            });
            /* getElement(s)By*
	---------------------------------------------------------------------- */
            // Check if getElementsByTagName("*") returns only elements
            c.getElementsByTagName = ha(function(a) {
                a.appendChild(n.createComment(""));
                return !a.getElementsByTagName("*").length;
            });
            // Support: IE<9
            c.getElementsByClassName = Z.test(n.getElementsByClassName);
            // Support: IE<10
            // Check if getElementById returns elements by name
            // The broken getElementById methods don't pick up programatically-set names,
            // so use a roundabout getElementsByName test
            c.getById = ha(function(a) {
                o.appendChild(a).id = u;
                return !n.getElementsByName || !n.getElementsByName(u).length;
            });
            // ID find and filter
            if (c.getById) {
                d.find["ID"] = function(a, b) {
                    if (typeof b.getElementById !== "undefined" && p) {
                        var c = b.getElementById(a);
                        return c ? [ c ] : [];
                    }
                };
                d.filter["ID"] = function(a) {
                    var b = a.replace(ba, ca);
                    return function(a) {
                        return a.getAttribute("id") === b;
                    };
                };
            } else {
                // Support: IE6/7
                // getElementById is not reliable as a find shortcut
                delete d.find["ID"];
                d.filter["ID"] = function(a) {
                    var b = a.replace(ba, ca);
                    return function(a) {
                        var c = typeof a.getAttributeNode !== "undefined" && a.getAttributeNode("id");
                        return c && c.value === b;
                    };
                };
            }
            // Tag
            d.find["TAG"] = c.getElementsByTagName ? function(a, b) {
                if (typeof b.getElementsByTagName !== "undefined") {
                    return b.getElementsByTagName(a);
                } else if (c.qsa) {
                    return b.querySelectorAll(a);
                }
            } : function(a, b) {
                var c, d = [], e = 0, // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                f = b.getElementsByTagName(a);
                // Filter out possible comments
                if (a === "*") {
                    while (c = f[e++]) {
                        if (c.nodeType === 1) {
                            d.push(c);
                        }
                    }
                    return d;
                }
                return f;
            };
            // Class
            d.find["CLASS"] = c.getElementsByClassName && function(a, b) {
                if (typeof b.getElementsByClassName !== "undefined" && p) {
                    return b.getElementsByClassName(a);
                }
            };
            /* QSA/matchesSelector
	---------------------------------------------------------------------- */
            // QSA and matchesSelector support
            // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
            r = [];
            // qSa(:focus) reports false when true (Chrome 21)
            // We allow this because of a bug in IE8/9 that throws an error
            // whenever `document.activeElement` is accessed on an iframe
            // So, we allow :focus to pass through QSA all the time to avoid the IE error
            // See http://bugs.jquery.com/ticket/13378
            q = [];
            if (c.qsa = Z.test(n.querySelectorAll)) {
                // Build QSA regex
                // Regex strategy adopted from Diego Perini
                ha(function(a) {
                    // Select is set to empty string on purpose
                    // This is to test IE's treatment of not explicitly
                    // setting a boolean content attribute,
                    // since its presence should be enough
                    // http://bugs.jquery.com/ticket/12359
                    o.appendChild(a).innerHTML = "<a id='" + u + "'></a>" + "<select id='" + u + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                    // Support: IE8, Opera 11-12.16
                    // Nothing should be selected when empty strings follow ^= or $= or *=
                    // The test attribute must be unknown in Opera but "safe" for WinRT
                    // http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                    if (a.querySelectorAll("[msallowcapture^='']").length) {
                        q.push("[*^$]=" + L + "*(?:''|\"\")");
                    }
                    // Support: IE8
                    // Boolean attributes and "value" are not treated correctly
                    if (!a.querySelectorAll("[selected]").length) {
                        q.push("\\[" + L + "*(?:value|" + K + ")");
                    }
                    // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
                    if (!a.querySelectorAll("[id~=" + u + "-]").length) {
                        q.push("~=");
                    }
                    // Webkit/Opera - :checked should return selected option elements
                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    // IE8 throws error here and will not see later tests
                    if (!a.querySelectorAll(":checked").length) {
                        q.push(":checked");
                    }
                    // Support: Safari 8+, iOS 8+
                    // https://bugs.webkit.org/show_bug.cgi?id=136851
                    // In-page `selector#id sibing-combinator selector` fails
                    if (!a.querySelectorAll("a#" + u + "+*").length) {
                        q.push(".#.+[+~]");
                    }
                });
                ha(function(a) {
                    // Support: Windows 8 Native Apps
                    // The type and name attributes are restricted during .innerHTML assignment
                    var b = n.createElement("input");
                    b.setAttribute("type", "hidden");
                    a.appendChild(b).setAttribute("name", "D");
                    // Support: IE8
                    // Enforce case-sensitivity of name attribute
                    if (a.querySelectorAll("[name=d]").length) {
                        q.push("name" + L + "*[*^$|!~]?=");
                    }
                    // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                    // IE8 throws error here and will not see later tests
                    if (!a.querySelectorAll(":enabled").length) {
                        q.push(":enabled", ":disabled");
                    }
                    // Opera 10-11 does not throw on post-comma invalid pseudos
                    a.querySelectorAll("*,:x");
                    q.push(",.*:");
                });
            }
            if (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) {
                ha(function(a) {
                    // Check to see if it's possible to do matchesSelector
                    // on a disconnected node (IE 9)
                    c.disconnectedMatch = s.call(a, "div");
                    // This should fail with an exception
                    // Gecko does not error, returns false instead
                    s.call(a, "[s!='']:x");
                    r.push("!=", O);
                });
            }
            q = q.length && new RegExp(q.join("|"));
            r = r.length && new RegExp(r.join("|"));
            /* Contains
	---------------------------------------------------------------------- */
            b = Z.test(o.compareDocumentPosition);
            // Element contains another
            // Purposefully self-exclusive
            // As in, an element does not contain itself
            t = b || Z.test(o.contains) ? function(a, b) {
                var c = a.nodeType === 9 ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !!(d && d.nodeType === 1 && (c.contains ? c.contains(d) : a.compareDocumentPosition && a.compareDocumentPosition(d) & 16));
            } : function(a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return true;
                        }
                    }
                }
                return false;
            };
            /* Sorting
	---------------------------------------------------------------------- */
            // Document order sorting
            B = b ? function(a, b) {
                // Flag for duplicate removal
                if (a === b) {
                    l = true;
                    return 0;
                }
                // Sort on method existence if only one input has compareDocumentPosition
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (d) {
                    return d;
                }
                // Calculate position if both inputs belong to the same document
                d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
                1;
                // Disconnected nodes
                if (d & 1 || !c.sortDetached && b.compareDocumentPosition(a) === d) {
                    // Choose the first element that is related to our preferred document
                    if (a === n || a.ownerDocument === v && t(v, a)) {
                        return -1;
                    }
                    if (b === n || b.ownerDocument === v && t(v, b)) {
                        return 1;
                    }
                    // Maintain original order
                    return k ? J(k, a) - J(k, b) : 0;
                }
                return d & 4 ? -1 : 1;
            } : function(a, b) {
                // Exit early if the nodes are identical
                if (a === b) {
                    l = true;
                    return 0;
                }
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [ a ], h = [ b ];
                // Parentless nodes are either documents or disconnected
                if (!e || !f) {
                    return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                } else if (e === f) {
                    return ja(a, b);
                }
                // Otherwise we need full lists of their ancestors for comparison
                c = a;
                while (c = c.parentNode) {
                    g.unshift(c);
                }
                c = b;
                while (c = c.parentNode) {
                    h.unshift(c);
                }
                // Walk down the tree looking for a discrepancy
                while (g[d] === h[d]) {
                    d++;
                }
                // Do a sibling check if the nodes have a common ancestor
                // Otherwise nodes in our document sort first
                return d ? ja(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
            };
            return n;
        };
        ea.matches = function(a, b) {
            return ea(a, null, null, b);
        };
        ea.matchesSelector = function(a, b) {
            // Set document vars if needed
            if ((a.ownerDocument || a) !== n) {
                m(a);
            }
            // Make sure that attribute selectors are quoted
            b = b.replace(T, "='$1']");
            if (c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) {
                try {
                    var d = s.call(a, b);
                    // IE 9's matchesSelector returns false on disconnected nodes
                    if (d || c.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                    // fragment in IE 9
                    a.document && a.document.nodeType !== 11) {
                        return d;
                    }
                } catch (a) {}
            }
            return ea(b, n, null, [ a ]).length > 0;
        };
        ea.contains = function(a, b) {
            // Set document vars if needed
            if ((a.ownerDocument || a) !== n) {
                m(a);
            }
            return t(a, b);
        };
        ea.attr = function(a, b) {
            // Set document vars if needed
            if ((a.ownerDocument || a) !== n) {
                m(a);
            }
            var e = d.attrHandle[b.toLowerCase()], // Don't get fooled by Object.prototype properties (jQuery #13807)
            f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : undefined;
            return f !== undefined ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        };
        ea.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        };
        /**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
        ea.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            // Unless we *know* we can detect duplicates, assume their presence
            l = !c.detectDuplicates;
            k = !c.sortStable && a.slice(0);
            a.sort(B);
            if (l) {
                while (b = a[f++]) {
                    if (b === a[f]) {
                        e = d.push(f);
                    }
                }
                while (e--) {
                    a.splice(d[e], 1);
                }
            }
            // Clear input after sorting to release objects
            // See https://github.com/jquery/sizzle/pull/225
            k = null;
            return a;
        };
        /**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
        e = ea.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (!f) {
                // If no nodeType, this is expected to be an array
                while (b = a[d++]) {
                    // Do not traverse comment nodes
                    c += e(b);
                }
            } else if (f === 1 || f === 9 || f === 11) {
                // Use textContent for elements
                // innerText usage removed for consistency of new lines (jQuery #11153)
                if (typeof a.textContent === "string") {
                    return a.textContent;
                } else {
                    // Traverse its children
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a);
                    }
                }
            } else if (f === 3 || f === 4) {
                return a.nodeValue;
            }
            // Do not include comment or processing instruction nodes
            return c;
        };
        d = ea.selectors = {
            // Can be adjusted by the user
            cacheLength: 50,
            createPseudo: ga,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    a[1] = a[1].replace(ba, ca);
                    // Move the given value to match[3] whether quoted or unquoted
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca);
                    if (a[2] === "~=") {
                        a[3] = " " + a[3] + " ";
                    }
                    return a.slice(0, 4);
                },
                CHILD: function(a) {
                    /* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
                    a[1] = a[1].toLowerCase();
                    if (a[1].slice(0, 3) === "nth") {
                        // nth-* requires argument
                        if (!a[3]) {
                            ea.error(a[0]);
                        }
                        // numeric x and y parameters for Expr.filter.CHILD
                        // remember that false/true cast respectively to 0/1
                        a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * (a[3] === "even" || a[3] === "odd"));
                        a[5] = +(a[7] + a[8] || a[3] === "odd");
                    } else if (a[3]) {
                        ea.error(a[0]);
                    }
                    return a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    if (W["CHILD"].test(a[0])) {
                        return null;
                    }
                    // Accept quoted arguments as-is
                    if (a[3]) {
                        a[2] = a[4] || a[5] || "";
                    } else if (c && U.test(c) && (// Get excess from tokenize (recursively)
                    b = g(c, true)) && (// advance to the next closing parenthesis
                    b = c.indexOf(")", c.length - b) - c.length)) {
                        // excess is a negative index
                        a[0] = a[0].slice(0, b);
                        a[2] = c.slice(0, b);
                    }
                    // Return only captures needed by the pseudo filter method (type and argument)
                    return a.slice(0, 3);
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return a === "*" ? function() {
                        return true;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test(typeof a.className === "string" && a.className || typeof a.getAttribute !== "undefined" && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ea.attr(d, a);
                        if (e == null) {
                            return b === "!=";
                        }
                        if (!b) {
                            return true;
                        }
                        e += "";
                        return b === "=" ? e === c : b === "!=" ? e !== c : b === "^=" ? c && e.indexOf(c) === 0 : b === "*=" ? c && e.indexOf(c) > -1 : b === "$=" ? c && e.slice(-c.length) === c : b === "~=" ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : b === "|=" ? e === c || e.slice(0, c.length + 1) === c + "-" : false;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = a.slice(0, 3) !== "nth", g = a.slice(-4) !== "last", h = b === "of-type";
                    // Shortcut for :nth-*(n)
                    return d === 1 && e === 0 ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = false;
                        if (q) {
                            // :(first|last|only)-(child|of-type)
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p]) {
                                        if (h ? m.nodeName.toLowerCase() === r : m.nodeType === 1) {
                                            return false;
                                        }
                                    }
                                    // Reverse direction for :only-* (if we haven't yet done so)
                                    o = p = a === "only" && !o && "nextSibling";
                                }
                                return true;
                            }
                            o = [ g ? q.firstChild : q.lastChild ];
                            // non-xml :nth-child(...) stores cache data on `parent`
                            if (g && s) {
                                // Seek `elem` from a previously-cached index
                                // ...in a gzip-friendly way
                                m = q;
                                l = m[u] || (m[u] = {});
                                // Support: IE <9 only
                                // Defend against cloned attroperties (jQuery gh-1709)
                                k = l[m.uniqueID] || (l[m.uniqueID] = {});
                                j = k[a] || [];
                                n = j[0] === w && j[1];
                                t = n && j[2];
                                m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (// Fallback to seeking `elem` from the start
                                t = n = 0) || o.pop()) {
                                    // When found, cache indexes on `parent` and break
                                    if (m.nodeType === 1 && ++t && m === b) {
                                        k[a] = [ w, n, t ];
                                        break;
                                    }
                                }
                            } else {
                                // Use previously-cached element index if available
                                if (s) {
                                    // ...in a gzip-friendly way
                                    m = b;
                                    l = m[u] || (m[u] = {});
                                    // Support: IE <9 only
                                    // Defend against cloned attroperties (jQuery gh-1709)
                                    k = l[m.uniqueID] || (l[m.uniqueID] = {});
                                    j = k[a] || [];
                                    n = j[0] === w && j[1];
                                    t = n;
                                }
                                // xml :nth-child(...)
                                // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                if (t === false) {
                                    // Use the same loop as above to seek `elem` from the start
                                    while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                        if ((h ? m.nodeName.toLowerCase() === r : m.nodeType === 1) && ++t) {
                                            // Cache the index of each encountered element
                                            if (s) {
                                                l = m[u] || (m[u] = {});
                                                // Support: IE <9 only
                                                // Defend against cloned attroperties (jQuery gh-1709)
                                                k = l[m.uniqueID] || (l[m.uniqueID] = {});
                                                k[a] = [ w, t ];
                                            }
                                            if (m === b) {
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            // Incorporate the offset, then check against cycle size
                            t -= e;
                            return t === d || t % d === 0 && t / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    // pseudo-class names are case-insensitive
                    // http://www.w3.org/TR/selectors/#pseudo-classes
                    // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                    // Remember that setFilters inherits from pseudos
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ea.error("unsupported pseudo: " + a);
                    // The user may use createPseudo to indicate that
                    // arguments are needed to create the filter function
                    // just as Sizzle does
                    if (e[u]) {
                        return e(b);
                    }
                    // But maintain support for old signatures
                    if (e.length > 1) {
                        c = [ a, a, "", b ];
                        return d.setFilters.hasOwnProperty(a.toLowerCase()) ? ga(function(a, c) {
                            var d, f = e(a, b), g = f.length;
                            while (g--) {
                                d = J(a, f[g]);
                                a[d] = !(c[d] = f[g]);
                            }
                        }) : function(a) {
                            return e(a, 0, c);
                        };
                    }
                    return e;
                }
            },
            pseudos: {
                // Potentially complex pseudos
                not: ga(function(a) {
                    // Trim the selector passed to compile
                    // to avoid treating leading and trailing
                    // spaces as combinators
                    var b = [], c = [], d = h(a.replace(Q, "$1"));
                    return d[u] ? ga(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        // Match elements unmatched by `matcher`
                        while (h--) {
                            if (f = g[h]) {
                                a[h] = !(b[h] = f);
                            }
                        }
                    }) : function(a, e, f) {
                        b[0] = a;
                        d(b, null, f, c);
                        // Don't keep the element (issue #299)
                        b[0] = null;
                        return !c.pop();
                    };
                }),
                has: ga(function(a) {
                    return function(b) {
                        return ea(a, b).length > 0;
                    };
                }),
                contains: ga(function(a) {
                    a = a.replace(ba, ca);
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }),
                // "Whether an element is represented by a :lang() selector
                // is based solely on the element's language value
                // being equal to the identifier C,
                // or beginning with the identifier C immediately followed by "-".
                // The matching of C against the element's language value is performed case-insensitively.
                // The identifier C does not have to be a valid language name."
                // http://www.w3.org/TR/selectors/#lang-pseudo
                lang: ga(function(a) {
                    // lang value must be a valid identifier
                    if (!V.test(a || "")) {
                        ea.error("unsupported lang: " + a);
                    }
                    a = a.replace(ba, ca).toLowerCase();
                    return function(b) {
                        var c;
                        do {
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) {
                                c = c.toLowerCase();
                                return c === a || c.indexOf(a + "-") === 0;
                            }
                        } while ((b = b.parentNode) && b.nodeType === 1);
                        return false;
                    };
                }),
                // Miscellaneous
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === o;
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                // Boolean properties
                enabled: function(a) {
                    return a.disabled === false;
                },
                disabled: function(a) {
                    return a.disabled === true;
                },
                checked: function(a) {
                    // In CSS3, :checked should return both checked and selected elements
                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && !!a.checked || b === "option" && !!a.selected;
                },
                selected: function(a) {
                    // Accessing this property makes selected-by-default
                    // options in Safari work properly
                    if (a.parentNode) {
                        a.parentNode.selectedIndex;
                    }
                    return a.selected === true;
                },
                // Contents
                empty: function(a) {
                    // http://www.w3.org/TR/selectors/#empty-pseudo
                    // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                    //   but not by others (comment: 8; processing instruction: 7; etc.)
                    // nodeType < 6 works because attributes (2) do not appear as children
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeType < 6) {
                            return false;
                        }
                    }
                    return true;
                },
                parent: function(a) {
                    return !d.pseudos["empty"](a);
                },
                // Element/input types
                header: function(a) {
                    return Y.test(a.nodeName);
                },
                input: function(a) {
                    return X.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && a.type === "button" || b === "button";
                },
                text: function(a) {
                    var b;
                    // Support: IE<8
                    // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                    return a.nodeName.toLowerCase() === "input" && a.type === "text" && ((b = a.getAttribute("type")) == null || b.toLowerCase() === "text");
                },
                // Position-in-collection
                first: ma(function() {
                    return [ 0 ];
                }),
                last: ma(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: ma(function(a, b, c) {
                    return [ c < 0 ? c + b : c ];
                }),
                even: ma(function(a, b) {
                    var c = 0;
                    for (;c < b; c += 2) {
                        a.push(c);
                    }
                    return a;
                }),
                odd: ma(function(a, b) {
                    var c = 1;
                    for (;c < b; c += 2) {
                        a.push(c);
                    }
                    return a;
                }),
                lt: ma(function(a, b, c) {
                    var d = c < 0 ? c + b : c;
                    for (;--d >= 0; ) {
                        a.push(d);
                    }
                    return a;
                }),
                gt: ma(function(a, b, c) {
                    var d = c < 0 ? c + b : c;
                    for (;++d < b; ) {
                        a.push(d);
                    }
                    return a;
                })
            }
        };
        d.pseudos["nth"] = d.pseudos["eq"];
        // Add button/input type pseudos
        for (b in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        }) {
            d.pseudos[b] = ka(b);
        }
        for (b in {
            submit: true,
            reset: true
        }) {
            d.pseudos[b] = la(b);
        }
        // Easy API for creating new setFilters
        function oa() {}
        oa.prototype = d.filters = d.pseudos;
        d.setFilters = new oa();
        g = ea.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) {
                return b ? 0 : k.slice(0);
            }
            h = a;
            i = [];
            j = d.preFilter;
            while (h) {
                // Comma and first run
                if (!c || (e = R.exec(h))) {
                    if (e) {
                        // Don't consume trailing commas as valid
                        h = h.slice(e[0].length) || h;
                    }
                    i.push(f = []);
                }
                c = false;
                // Combinators
                if (e = S.exec(h)) {
                    c = e.shift();
                    f.push({
                        value: c,
                        // Cast descendant combinators to space
                        type: e[0].replace(Q, " ")
                    });
                    h = h.slice(c.length);
                }
                // Filters
                for (g in d.filter) {
                    if ((e = W[g].exec(h)) && (!j[g] || (e = j[g](e)))) {
                        c = e.shift();
                        f.push({
                            value: c,
                            type: g,
                            matches: e
                        });
                        h = h.slice(c.length);
                    }
                }
                if (!c) {
                    break;
                }
            }
            // Return the length of the invalid excess
            // if we're just parsing
            // Otherwise, throw an error or return tokens
            // Cache the tokens
            return b ? h.length : h ? ea.error(a) : z(a, i).slice(0);
        };
        function pa(a) {
            var b = 0, c = a.length, d = "";
            for (;b < c; b++) {
                d += a[b].value;
            }
            return d;
        }
        function qa(a, b, c) {
            var d = b.dir, e = c && d === "parentNode", f = x++;
            // Check against closest ancestor/preceding element
            // Check against all ancestor/preceding elements
            return b.first ? function(b, c, f) {
                while (b = b[d]) {
                    if (b.nodeType === 1 || e) {
                        return a(b, c, f);
                    }
                }
            } : function(b, c, g) {
                var h, i, j, k = [ w, f ];
                // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                if (g) {
                    while (b = b[d]) {
                        if (b.nodeType === 1 || e) {
                            if (a(b, c, g)) {
                                return true;
                            }
                        }
                    }
                } else {
                    while (b = b[d]) {
                        if (b.nodeType === 1 || e) {
                            j = b[u] || (b[u] = {});
                            // Support: IE <9 only
                            // Defend against cloned attroperties (jQuery gh-1709)
                            i = j[b.uniqueID] || (j[b.uniqueID] = {});
                            if ((h = i[d]) && h[0] === w && h[1] === f) {
                                // Assign to newCache so results back-propagate to previous elements
                                return k[2] = h[2];
                            } else {
                                // Reuse newcache so results back-propagate to previous elements
                                i[d] = k;
                                // A match means we're done; a fail means we have to keep checking
                                if (k[2] = a(b, c, g)) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            };
        }
        function ra(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--) {
                    if (!a[e](b, c, d)) {
                        return false;
                    }
                }
                return true;
            } : a[0];
        }
        function sa(a, b, c) {
            var d = 0, e = b.length;
            for (;d < e; d++) {
                ea(a, b[d], c);
            }
            return c;
        }
        function ta(a, b, c, d, e) {
            var f, g = [], h = 0, i = a.length, j = b != null;
            for (;h < i; h++) {
                if (f = a[h]) {
                    if (!c || c(f, d, e)) {
                        g.push(f);
                        if (j) {
                            b.push(h);
                        }
                    }
                }
            }
            return g;
        }
        function ua(a, b, c, d, e, f) {
            if (d && !d[u]) {
                d = ua(d);
            }
            if (e && !e[u]) {
                e = ua(e, f);
            }
            return ga(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, // Get initial elements from seed or context
                p = f || sa(b || "*", h.nodeType ? [ h ] : h, []), // Prefilter to get matcher input, preserving a map for seed-results synchronization
                q = a && (f || !b) ? ta(p, m, a, h, i) : p, r = c ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                e || (f ? a : o || d) ? // ...intermediate processing is necessary
                [] : // ...otherwise use results directly
                g : q;
                // Find primary matches
                if (c) {
                    c(q, r, h, i);
                }
                // Apply postFilter
                if (d) {
                    j = ta(r, n);
                    d(j, [], h, i);
                    // Un-match failing elements by moving them back to matcherIn
                    k = j.length;
                    while (k--) {
                        if (l = j[k]) {
                            r[n[k]] = !(q[n[k]] = l);
                        }
                    }
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            // Get the final matcherOut by condensing this intermediate into postFinder contexts
                            j = [];
                            k = r.length;
                            while (k--) {
                                if (l = r[k]) {
                                    // Restore matcherIn since elem is not yet a final match
                                    j.push(q[k] = l);
                                }
                            }
                            e(null, r = [], j, i);
                        }
                        // Move matched elements from seed to results to keep them synchronized
                        k = r.length;
                        while (k--) {
                            if ((l = r[k]) && (j = e ? J(f, l) : m[k]) > -1) {
                                f[j] = !(g[j] = l);
                            }
                        }
                    }
                } else {
                    r = ta(r === g ? r.splice(o, r.length) : r);
                    if (e) {
                        e(null, g, r, i);
                    } else {
                        H.apply(g, r);
                    }
                }
            });
        }
        function va(a) {
            var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, // The foundational matcher ensures that elements are reachable from top-level context(s)
            k = qa(function(a) {
                return a === b;
            }, h, true), l = qa(function(a) {
                return J(b, a) > -1;
            }, h, true), m = [ function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                // Avoid hanging onto element (issue #299)
                b = null;
                return e;
            } ];
            for (;i < f; i++) {
                if (c = d.relative[a[i].type]) {
                    m = [ qa(ra(m), c) ];
                } else {
                    c = d.filter[a[i].type].apply(null, a[i].matches);
                    // Return special upon seeing a positional matcher
                    if (c[u]) {
                        // Find the next relative operator (if any) for proper handling
                        e = ++i;
                        for (;e < f; e++) {
                            if (d.relative[a[e].type]) {
                                break;
                            }
                        }
                        // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                        return ua(i > 1 && ra(m), i > 1 && pa(a.slice(0, i - 1).concat({
                            value: a[i - 2].type === " " ? "*" : ""
                        })).replace(Q, "$1"), c, i < e && va(a.slice(i, e)), e < f && va(a = a.slice(e)), e < f && pa(a));
                    }
                    m.push(c);
                }
            }
            return ra(m);
        }
        function wa(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, // We must always have either seed elements or outermost context
                x = f || e && d.find["TAG"]("*", k), // Use integer dirruns iff this is the outermost matcher
                y = w += v == null ? 1 : Math.random() || .1, z = x.length;
                if (k) {
                    j = g === n || g || k;
                }
                // Add elements passing elementMatchers directly to results
                // Support: IE<9, Safari
                // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                for (;s !== z && (l = x[s]) != null; s++) {
                    if (e && l) {
                        o = 0;
                        if (!g && l.ownerDocument !== n) {
                            m(l);
                            h = !p;
                        }
                        while (q = a[o++]) {
                            if (q(l, g || n, h)) {
                                i.push(l);
                                break;
                            }
                        }
                        if (k) {
                            w = y;
                        }
                    }
                    // Track unmatched elements for set filters
                    if (c) {
                        // They will have gone through all possible matchers
                        if (l = !q && l) {
                            r--;
                        }
                        // Lengthen the array for every element, matched or not
                        if (f) {
                            t.push(l);
                        }
                    }
                }
                // `i` is now the count of elements visited above, and adding it to `matchedCount`
                // makes the latter nonnegative.
                r += s;
                // Apply set filters to unmatched elements
                // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                // no element matchers and no seed.
                // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                // numerically zero.
                if (c && s !== r) {
                    o = 0;
                    while (q = b[o++]) {
                        q(t, u, g, h);
                    }
                    if (f) {
                        // Reintegrate element matches to eliminate the need for sorting
                        if (r > 0) {
                            while (s--) {
                                if (!(t[s] || u[s])) {
                                    u[s] = F.call(i);
                                }
                            }
                        }
                        // Discard index placeholder values to get only actual matches
                        u = ta(u);
                    }
                    // Add matches to results
                    H.apply(i, u);
                    // Seedless set matches succeeding multiple successful matchers stipulate sorting
                    if (k && !f && u.length > 0 && r + b.length > 1) {
                        ea.uniqueSort(i);
                    }
                }
                // Override manipulation of globals by nested matchers
                if (k) {
                    w = y;
                    j = v;
                }
                return t;
            };
            return c ? ga(f) : f;
        }
        h = ea.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                // Generate a function of recursive functions that can be used to check each element
                if (!b) {
                    b = g(a);
                }
                c = b.length;
                while (c--) {
                    f = va(b[c]);
                    if (f[u]) {
                        d.push(f);
                    } else {
                        e.push(f);
                    }
                }
                // Cache the compiled function
                f = A(a, wa(e, d));
                // Save selector and tokenization
                f.selector = a;
            }
            return f;
        };
        /**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
        i = ea.select = function(a, b, e, f) {
            var i, j, k, l, m, n = typeof a === "function" && a, o = !f && g(a = n.selector || a);
            e = e || [];
            // Try to minimize operations if there is only one selector in the list and no seed
            // (the latter of which guarantees us context)
            if (o.length === 1) {
                // Reduce context if the leading compound selector is an ID
                j = o[0] = o[0].slice(0);
                if (j.length > 2 && (k = j[0]).type === "ID" && c.getById && b.nodeType === 9 && p && d.relative[j[1].type]) {
                    b = (d.find["ID"](k.matches[0].replace(ba, ca), b) || [])[0];
                    if (!b) {
                        return e;
                    } else if (n) {
                        b = b.parentNode;
                    }
                    a = a.slice(j.shift().value.length);
                }
                // Fetch a seed set for right-to-left matching
                i = W["needsContext"].test(a) ? 0 : j.length;
                while (i--) {
                    k = j[i];
                    // Abort if we hit a combinator
                    if (d.relative[l = k.type]) {
                        break;
                    }
                    if (m = d.find[l]) {
                        // Search, expanding context for leading sibling combinators
                        if (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && na(b.parentNode) || b)) {
                            // If seed is empty or no tokens remain, we can return early
                            j.splice(i, 1);
                            a = f.length && pa(j);
                            if (!a) {
                                H.apply(e, f);
                                return e;
                            }
                            break;
                        }
                    }
                }
            }
            // Compile and execute a filtering function if one is not provided
            // Provide `match` to avoid retokenization if we modified the selector above
            (n || h(a, o))(f, b, !p, e, !b || _.test(a) && na(b.parentNode) || b);
            return e;
        };
        // One-time assignments
        // Sort stability
        c.sortStable = u.split("").sort(B).join("") === u;
        // Support: Chrome 14-35+
        // Always assume duplicates if they aren't passed to the comparison function
        c.detectDuplicates = !!l;
        // Initialize against the default document
        m();
        // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
        // Detached nodes confoundingly follow *each other*
        c.sortDetached = ha(function(a) {
            // Should return 1, but returns 4 (following)
            return a.compareDocumentPosition(n.createElement("div")) & 1;
        });
        // Support: IE<8
        // Prevent attribute/property "interpolation"
        // http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
        if (!ha(function(a) {
            a.innerHTML = "<a href='#'></a>";
            return a.firstChild.getAttribute("href") === "#";
        })) {
            ia("type|href|height|width", function(a, b, c) {
                if (!c) {
                    return a.getAttribute(b, b.toLowerCase() === "type" ? 1 : 2);
                }
            });
        }
        // Support: IE<9
        // Use defaultValue in place of getAttribute("value")
        if (!c.attributes || !ha(function(a) {
            a.innerHTML = "<input/>";
            a.firstChild.setAttribute("value", "");
            return a.firstChild.getAttribute("value") === "";
        })) {
            ia("value", function(a, b, c) {
                if (!c && a.nodeName.toLowerCase() === "input") {
                    return a.defaultValue;
                }
            });
        }
        // Support: IE<9
        // Use getAttributeNode to fetch booleans when getAttribute lies
        if (!ha(function(a) {
            return a.getAttribute("disabled") == null;
        })) {
            ia(K, function(a, b, c) {
                var d;
                if (!c) {
                    return a[b] === true ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
                }
            });
        }
        return ea;
    }(a);
    n.find = t;
    n.expr = t.selectors;
    n.expr[":"] = n.expr.pseudos;
    n.uniqueSort = n.unique = t.uniqueSort;
    n.text = t.getText;
    n.isXMLDoc = t.isXML;
    n.contains = t.contains;
    var u = function(a, b, c) {
        var d = [], e = c !== undefined;
        while ((a = a[b]) && a.nodeType !== 9) {
            if (a.nodeType === 1) {
                if (e && n(a).is(c)) {
                    break;
                }
                d.push(a);
            }
        }
        return d;
    };
    var v = function(a, b) {
        var c = [];
        for (;a; a = a.nextSibling) {
            if (a.nodeType === 1 && a !== b) {
                c.push(a);
            }
        }
        return c;
    };
    var w = n.expr.match.needsContext;
    var x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;
    var y = /^.[^:#\[\.,]*$/;
    // Implement the identical functionality for filter and not
    function z(a, b, c) {
        if (n.isFunction(b)) {
            return n.grep(a, function(a, d) {
                /* jshint -W018 */
                return !!b.call(a, d, a) !== c;
            });
        }
        if (b.nodeType) {
            return n.grep(a, function(a) {
                return a === b !== c;
            });
        }
        if (typeof b === "string") {
            if (y.test(b)) {
                return n.filter(b, a, c);
            }
            b = n.filter(b, a);
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) > -1 !== c;
        });
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        if (c) {
            a = ":not(" + a + ")";
        }
        return b.length === 1 && d.nodeType === 1 ? n.find.matchesSelector(d, a) ? [ d ] : [] : n.find.matches(a, n.grep(b, function(a) {
            return a.nodeType === 1;
        }));
    };
    n.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if (typeof a !== "string") {
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; b < e; b++) {
                        if (n.contains(d[b], this)) {
                            return true;
                        }
                    }
                }));
            }
            for (b = 0; b < e; b++) {
                n.find(a, d[b], c);
            }
            // Needed because $( selector, context ) becomes $( context ).find( selector )
            c = this.pushStack(e > 1 ? n.unique(c) : c);
            c.selector = this.selector ? this.selector + " " + a : a;
            return c;
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], false));
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], true));
        },
        is: function(a) {
            // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            return !!z(this, typeof a === "string" && w.test(a) ? n(a) : a || [], false).length;
        }
    });
    // Initialize a jQuery object
    // A central reference to the root jQuery(document)
    var A, // A simple way to check for HTML strings
    // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
    // Strict HTML recognition (#11290: must start with <)
    B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function(a, b, c) {
        var e, f;
        // HANDLE: $(""), $(null), $(undefined), $(false)
        if (!a) {
            return this;
        }
        // init accepts an alternate rootjQuery
        // so migrate can support jQuery.sub (gh-2101)
        c = c || A;
        // Handle HTML strings
        if (typeof a === "string") {
            if (a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3) {
                // Assume that strings that start and end with <> are HTML and skip the regex check
                e = [ null, a, null ];
            } else {
                e = B.exec(a);
            }
            // Match html or make sure no context is specified for #id
            if (e && (e[1] || !b)) {
                // HANDLE: $(html) -> $(array)
                if (e[1]) {
                    b = b instanceof n ? b[0] : b;
                    // scripts is true for back-compat
                    // Intentionally let the error be thrown if parseHTML is not present
                    n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, true));
                    // HANDLE: $(html, props)
                    if (x.test(e[1]) && n.isPlainObject(b)) {
                        for (e in b) {
                            // Properties of context are called as methods if possible
                            if (n.isFunction(this[e])) {
                                this[e](b[e]);
                            } else {
                                this.attr(e, b[e]);
                            }
                        }
                    }
                    return this;
                } else {
                    f = d.getElementById(e[2]);
                    // Check parentNode to catch when Blackberry 4.6 returns
                    // nodes that are no longer in the document #6963
                    if (f && f.parentNode) {
                        // Handle the case where IE and Opera return items
                        // by name instead of ID
                        if (f.id !== e[2]) {
                            return A.find(a);
                        }
                        // Otherwise, we inject the element directly into the jQuery object
                        this.length = 1;
                        this[0] = f;
                    }
                    this.context = d;
                    this.selector = a;
                    return this;
                }
            } else if (!b || b.jquery) {
                return (b || c).find(a);
            } else {
                return this.constructor(b).find(a);
            }
        } else if (a.nodeType) {
            this.context = this[0] = a;
            this.length = 1;
            return this;
        } else if (n.isFunction(a)) {
            // Execute immediately if ready is not present
            return typeof c.ready !== "undefined" ? c.ready(a) : a(n);
        }
        if (a.selector !== undefined) {
            this.selector = a.selector;
            this.context = a.context;
        }
        return n.makeArray(a, this);
    };
    // Give the init function the jQuery prototype for later instantiation
    C.prototype = n.fn;
    // Initialize central reference
    A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/, // methods guaranteed to produce a unique set when starting from a unique set
    E = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    n.fn.extend({
        has: function(a) {
            var b, c = n(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; b < d; b++) {
                    if (n.contains(this, c[b])) {
                        return true;
                    }
                }
            });
        },
        closest: function(a, b) {
            var c, d = 0, e = this.length, f = [], g = w.test(a) || typeof a !== "string" ? n(a, b || this.context) : 0;
            for (;d < e; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    // Always skip document fragments
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : // Don't pass non-elements to Sizzle
                    c.nodeType === 1 && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break;
                    }
                }
            }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
        },
        // Determine the position of an element within
        // the matched set of elements
        index: function(a) {
            // No argument, return index in parent
            if (!a) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            // index in selector
            if (typeof a === "string") {
                return n.inArray(this[0], n(a));
            }
            // Locate the position of the desired element
            // If it receives a jQuery object, the first element is used
            return n.inArray(a.jquery ? a[0] : a, this);
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
        },
        addBack: function(a) {
            return this.add(a == null ? this.prevObject : this.prevObject.filter(a));
        }
    });
    function F(a, b) {
        do {
            a = a[b];
        } while (a && a.nodeType !== 1);
        return a;
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null;
        },
        parents: function(a) {
            return u(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c);
        },
        next: function(a) {
            return F(a, "nextSibling");
        },
        prev: function(a) {
            return F(a, "previousSibling");
        },
        nextAll: function(a) {
            return u(a, "nextSibling");
        },
        prevAll: function(a) {
            return u(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c);
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return v(a.firstChild);
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes);
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            if (a.slice(-5) !== "Until") {
                d = c;
            }
            if (d && typeof d === "string") {
                e = n.filter(d, e);
            }
            if (this.length > 1) {
                // Remove duplicates
                if (!E[a]) {
                    e = n.uniqueSort(e);
                }
                // Reverse order for parents* and prev-derivatives
                if (D.test(a)) {
                    e = e.reverse();
                }
            }
            return this.pushStack(e);
        };
    });
    var G = /\S+/g;
    // Convert String-formatted options into Object-formatted ones
    function H(a) {
        var b = {};
        n.each(a.match(G) || [], function(a, c) {
            b[c] = true;
        });
        return b;
    }
    /*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
    n.Callbacks = function(a) {
        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        a = typeof a === "string" ? H(a) : n.extend({}, a);
        var // Flag to know if list is currently firing
        b, // Last fire value for non-forgettable lists
        c, // Flag to know if list was already fired
        d, // Flag to prevent firing
        e, // Actual callback list
        f = [], // Queue of execution data for repeatable lists
        g = [], // Index of currently firing callback (modified by add/remove as needed)
        h = -1, // Fire callbacks
        i = function() {
            // Enforce single-firing
            e = a.once;
            // Execute callbacks for all pending executions,
            // respecting firingIndex overrides and runtime changes
            d = b = true;
            for (;g.length; h = -1) {
                c = g.shift();
                while (++h < f.length) {
                    // Run callback and check for early termination
                    if (f[h].apply(c[0], c[1]) === false && a.stopOnFalse) {
                        // Jump to end and forget the data so .add doesn't re-fire
                        h = f.length;
                        c = false;
                    }
                }
            }
            // Forget the data if we're done with it
            if (!a.memory) {
                c = false;
            }
            b = false;
            // Clean up if we're done firing for good
            if (e) {
                // Keep an empty list if we have data for future add calls
                if (c) {
                    f = [];
                } else {
                    f = "";
                }
            }
        }, // Actual Callbacks object
        j = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
                if (f) {
                    // If we have memory from a past run, we should fire after adding
                    if (c && !b) {
                        h = f.length - 1;
                        g.push(c);
                    }
                    (function b(c) {
                        n.each(c, function(c, d) {
                            if (n.isFunction(d)) {
                                if (!a.unique || !j.has(d)) {
                                    f.push(d);
                                }
                            } else if (d && d.length && n.type(d) !== "string") {
                                // Inspect recursively
                                b(d);
                            }
                        });
                    })(arguments);
                    if (c && !b) {
                        i();
                    }
                }
                return this;
            },
            // Remove a callback from the list
            remove: function() {
                n.each(arguments, function(a, b) {
                    var c;
                    while ((c = n.inArray(b, f, c)) > -1) {
                        f.splice(c, 1);
                        // Handle firing indexes
                        if (c <= h) {
                            h--;
                        }
                    }
                });
                return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(a) {
                return a ? n.inArray(a, f) > -1 : f.length > 0;
            },
            // Remove all callbacks from the list
            empty: function() {
                if (f) {
                    f = [];
                }
                return this;
            },
            // Disable .fire and .add
            // Abort any current/pending executions
            // Clear all callbacks and values
            disable: function() {
                e = g = [];
                f = c = "";
                return this;
            },
            disabled: function() {
                return !f;
            },
            // Disable .fire
            // Also disable .add unless we have memory (since it would have no effect)
            // Abort any pending executions
            lock: function() {
                e = true;
                if (!c) {
                    j.disable();
                }
                return this;
            },
            locked: function() {
                return !!e;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function(a, c) {
                if (!e) {
                    c = c || [];
                    c = [ a, c.slice ? c.slice() : c ];
                    g.push(c);
                    if (!b) {
                        i();
                    }
                }
                return this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
                j.fireWith(this, arguments);
                return this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
                return !!d;
            }
        };
        return j;
    };
    n.extend({
        Deferred: function(a) {
            var b = [ // action, add listener, listener list, final state
            [ "resolve", "done", n.Callbacks("once memory"), "resolved" ], [ "reject", "fail", n.Callbacks("once memory"), "rejected" ], [ "notify", "progress", n.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    e.done(arguments).fail(arguments);
                    return this;
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            // deferred[ done | fail | progress ] for forwarding actions to newDefer
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                if (a && n.isFunction(a.promise)) {
                                    a.promise().progress(c.notify).done(c.resolve).fail(c.reject);
                                } else {
                                    c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                                }
                            });
                        });
                        a = null;
                    }).promise();
                },
                // Get a promise for this deferred
                // If obj is provided, the promise aspect is added to the object
                promise: function(a) {
                    return a != null ? n.extend(a, d) : d;
                }
            }, e = {};
            // Keep pipe for back-compat
            d.pipe = d.then;
            // Add list-specific methods
            n.each(b, function(a, f) {
                var g = f[2], h = f[3];
                // promise[ done | fail | progress ] = list.add
                d[f[1]] = g.add;
                // Handle state
                if (h) {
                    g.add(function() {
                        // state = [ resolved | rejected ]
                        c = h;
                    }, b[a ^ 1][2].disable, b[2][2].lock);
                }
                // deferred[ resolve | reject | notify ]
                e[f[0]] = function() {
                    e[f[0] + "With"](this === e ? d : this, arguments);
                    return this;
                };
                e[f[0] + "With"] = g.fireWith;
            });
            // Make the deferred a promise
            d.promise(e);
            // Call given func if any
            if (a) {
                a.call(e, e);
            }
            // All done!
            return e;
        },
        // Deferred helper
        when: function(a) {
            var b = 0, c = e.call(arguments), d = c.length, // the count of uncompleted subordinates
            f = d !== 1 || a && n.isFunction(a.promise) ? d : 0, // the master Deferred.
            // If resolveValues consist of only a single Deferred, just use that.
            g = f === 1 ? a : n.Deferred(), // Update function for both resolve and progress values
            h = function(a, b, c) {
                return function(d) {
                    b[a] = this;
                    c[a] = arguments.length > 1 ? e.call(arguments) : d;
                    if (c === i) {
                        g.notifyWith(b, c);
                    } else if (!--f) {
                        g.resolveWith(b, c);
                    }
                };
            }, i, j, k;
            // add listeners to Deferred subordinates; treat others as resolved
            if (d > 1) {
                i = new Array(d);
                j = new Array(d);
                k = new Array(d);
                for (;b < d; b++) {
                    if (c[b] && n.isFunction(c[b].promise)) {
                        c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject);
                    } else {
                        --f;
                    }
                }
            }
            // if we're not waiting on anything, resolve the master
            if (!f) {
                g.resolveWith(k, c);
            }
            return g.promise();
        }
    });
    // The deferred used on DOM ready
    var I;
    n.fn.ready = function(a) {
        // Add the callback
        n.ready.promise().done(a);
        return this;
    };
    n.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1,
        // Hold (or release) the ready event
        holdReady: function(a) {
            if (a) {
                n.readyWait++;
            } else {
                n.ready(true);
            }
        },
        // Handle when the DOM is ready
        ready: function(a) {
            // Abort if there are pending holds or we're already ready
            if (a === true ? --n.readyWait : n.isReady) {
                return;
            }
            // Remember that the DOM is ready
            n.isReady = true;
            // If a normal DOM Ready event fired, decrement, and wait if need be
            if (a !== true && --n.readyWait > 0) {
                return;
            }
            // If there are functions bound, to execute
            I.resolveWith(d, [ n ]);
            // Trigger any bound ready events
            if (n.fn.triggerHandler) {
                n(d).triggerHandler("ready");
                n(d).off("ready");
            }
        }
    });
    /**
 * Clean-up method for dom ready events
 */
    function J() {
        if (d.addEventListener) {
            d.removeEventListener("DOMContentLoaded", K);
            a.removeEventListener("load", K);
        } else {
            d.detachEvent("onreadystatechange", K);
            a.detachEvent("onload", K);
        }
    }
    /**
 * The ready event handler and self cleanup method
 */
    function K() {
        // readyState === "complete" is good enough for us to call the dom ready in oldIE
        if (d.addEventListener || a.event.type === "load" || d.readyState === "complete") {
            J();
            n.ready();
        }
    }
    n.ready.promise = function(b) {
        if (!I) {
            I = n.Deferred();
            // Catch cases where $(document).ready() is called
            // after the browser event has already occurred.
            // Support: IE6-10
            // Older IE sometimes signals "interactive" too soon
            if (d.readyState === "complete" || d.readyState !== "loading" && !d.documentElement.doScroll) {
                // Handle it asynchronously to allow scripts the opportunity to delay ready
                a.setTimeout(n.ready);
            } else if (d.addEventListener) {
                // Use the handy event callback
                d.addEventListener("DOMContentLoaded", K);
                // A fallback to window.onload, that will always work
                a.addEventListener("load", K);
            } else {
                // Ensure firing before onload, maybe late but safe also for iframes
                d.attachEvent("onreadystatechange", K);
                // A fallback to window.onload, that will always work
                a.attachEvent("onload", K);
                // If IE and not a frame
                // continually check to see if the document is ready
                var c = false;
                try {
                    c = a.frameElement == null && d.documentElement;
                } catch (a) {}
                if (c && c.doScroll) {
                    (function b() {
                        if (!n.isReady) {
                            try {
                                // Use the trick by Diego Perini
                                // http://javascript.nwbox.com/IEContentLoaded/
                                c.doScroll("left");
                            } catch (c) {
                                return a.setTimeout(b, 50);
                            }
                            // detach all dom ready events
                            J();
                            // and execute any waiting functions
                            n.ready();
                        }
                    })();
                }
            }
        }
        return I.promise(b);
    };
    // Kick off the DOM ready check even if the user does not
    n.ready.promise();
    // Support: IE<9
    // Iteration over object's inherited properties before its own
    var L;
    for (L in n(l)) {
        break;
    }
    l.ownFirst = L === "0";
    // Note: most support tests are defined in their respective modules.
    // false until the test is run
    l.inlineBlockNeedsLayout = false;
    // Execute ASAP in case we need to set body.style.zoom
    n(function() {
        // Minified: var a,b,c,d
        var a, b, c, e;
        c = d.getElementsByTagName("body")[0];
        if (!c || !c.style) {
            // Return for frameset docs that don't have a body
            return;
        }
        // Setup
        b = d.createElement("div");
        e = d.createElement("div");
        e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
        c.appendChild(e).appendChild(b);
        if (typeof b.style.zoom !== "undefined") {
            // Support: IE<8
            // Check if natively block-level elements act like inline-block
            // elements when setting their display to 'inline' and giving
            // them layout
            b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
            l.inlineBlockNeedsLayout = a = b.offsetWidth === 3;
            if (a) {
                // Prevent IE 6 from affecting layout for positioned elements #11048
                // Prevent IE from shrinking the body in IE 7 mode #12869
                // Support: IE<8
                c.style.zoom = 1;
            }
        }
        c.removeChild(e);
    });
    (function() {
        var a = d.createElement("div");
        // Support: IE<9
        l.deleteExpando = true;
        try {
            delete a.test;
        } catch (a) {
            l.deleteExpando = false;
        }
        // Null elements to avoid leaks in IE.
        a = null;
    })();
    var M = function(a) {
        var b = n.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
        // Do not set data on non-element DOM nodes because it will not be cleared (#8335).
        // Nodes accept data unless otherwise specified; rejection can be conditional
        return c !== 1 && c !== 9 ? false : !b || b !== true && a.getAttribute("classid") === b;
    };
    var N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
    function P(a, b, c) {
        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if (c === undefined && a.nodeType === 1) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            c = a.getAttribute(d);
            if (typeof c === "string") {
                try {
                    c = c === "true" ? true : c === "false" ? false : c === "null" ? null : // Only convert to a number if it doesn't change the string
                    +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
                } catch (a) {}
                // Make sure we set the data so it isn't changed later
                n.data(a, b, c);
            } else {
                c = undefined;
            }
        }
        return c;
    }
    // checks a cache object for emptiness
    function Q(a) {
        var b;
        for (b in a) {
            // if the public data object is empty, the private is still empty
            if (b === "data" && n.isEmptyObject(a[b])) {
                continue;
            }
            if (b !== "toJSON") {
                return false;
            }
        }
        return true;
    }
    function R(a, b, d, e) {
        if (!M(a)) {
            return;
        }
        var f, g, h = n.expando, // We have to handle DOM nodes and JS objects differently because IE6-7
        // can't GC object references properly across the DOM-JS boundary
        i = a.nodeType, // Only DOM nodes need the global jQuery cache; JS object data is
        // attached directly to the object so GC can occur automatically
        j = i ? n.cache : a, // Only defining an ID for JS objects if its cache already exists allows
        // the code to shortcut on the same path as a DOM node with no cache
        k = i ? a[h] : a[h] && h;
        // Avoid doing any more work than we need to when trying to get data on an
        // object that has no data at all
        if ((!k || !j[k] || !e && !j[k].data) && d === undefined && typeof b === "string") {
            return;
        }
        if (!k) {
            // Only DOM nodes need a new unique ID for each element since their data
            // ends up in the global cache
            if (i) {
                k = a[h] = c.pop() || n.guid++;
            } else {
                k = h;
            }
        }
        if (!j[k]) {
            // Avoid exposing jQuery metadata on plain JS objects when the object
            // is serialized using JSON.stringify
            j[k] = i ? {} : {
                toJSON: n.noop
            };
        }
        // An object can be passed to jQuery.data instead of a key/value pair; this gets
        // shallow copied over onto the existing cache
        if (typeof b === "object" || typeof b === "function") {
            if (e) {
                j[k] = n.extend(j[k], b);
            } else {
                j[k].data = n.extend(j[k].data, b);
            }
        }
        g = j[k];
        // jQuery data() is stored in a separate object inside the object's internal data
        // cache in order to avoid key collisions between internal data and user-defined
        // data.
        if (!e) {
            if (!g.data) {
                g.data = {};
            }
            g = g.data;
        }
        if (d !== undefined) {
            g[n.camelCase(b)] = d;
        }
        // Check for both converted-to-camel and non-converted data property names
        // If a data property was specified
        if (typeof b === "string") {
            // First Try to find as-is property data
            f = g[b];
            // Test for null|undefined property data
            if (f == null) {
                // Try to find the camelCased property
                f = g[n.camelCase(b)];
            }
        } else {
            f = g;
        }
        return f;
    }
    function S(a, b, c) {
        if (!M(a)) {
            return;
        }
        var d, e, f = a.nodeType, // See jQuery.data for more information
        g = f ? n.cache : a, h = f ? a[n.expando] : n.expando;
        // If there is already no cache entry for this object, there is no
        // purpose in continuing
        if (!g[h]) {
            return;
        }
        if (b) {
            d = c ? g[h] : g[h].data;
            if (d) {
                // Support array or space separated string names for data keys
                if (!n.isArray(b)) {
                    // try the string as a key before any manipulation
                    if (b in d) {
                        b = [ b ];
                    } else {
                        // split the camel cased version by spaces unless a key with the spaces exists
                        b = n.camelCase(b);
                        if (b in d) {
                            b = [ b ];
                        } else {
                            b = b.split(" ");
                        }
                    }
                } else {
                    // If "name" is an array of keys...
                    // When data is initially created, via ("key", "val") signature,
                    // keys will be converted to camelCase.
                    // Since there is no way to tell _how_ a key was added, remove
                    // both plain key and camelCase key. #12786
                    // This will only penalize the array argument path.
                    b = b.concat(n.map(b, n.camelCase));
                }
                e = b.length;
                while (e--) {
                    delete d[b[e]];
                }
                // If there is no data left in the cache, we want to continue
                // and let the cache object itself get destroyed
                if (c ? !Q(d) : !n.isEmptyObject(d)) {
                    return;
                }
            }
        }
        // See jQuery.data for more information
        if (!c) {
            delete g[h].data;
            // Don't destroy the parent cache unless the internal data object
            // had been the only thing left in it
            if (!Q(g[h])) {
                return;
            }
        }
        // Destroy the cache
        if (f) {
            n.cleanData([ a ], true);
        } else if (l.deleteExpando || g != g.window) {
            /* jshint eqeqeq: true */
            delete g[h];
        } else {
            g[h] = undefined;
        }
    }
    n.extend({
        cache: {},
        // The following elements (space-suffixed to avoid Object.prototype collisions)
        // throw uncatchable exceptions if you attempt to set expando properties
        noData: {
            "applet ": true,
            "embed ": true,
            // ...but Flash objects (which have this classid) *can* handle expandos
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando];
            return !!a && !Q(a);
        },
        data: function(a, b, c) {
            return R(a, b, c);
        },
        removeData: function(a, b) {
            return S(a, b);
        },
        // For internal use only.
        _data: function(a, b, c) {
            return R(a, b, c, true);
        },
        _removeData: function(a, b) {
            return S(a, b, true);
        }
    });
    n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            // Special expections of .data basically thwart jQuery.access,
            // so implement the relevant behavior ourselves
            // Gets all values
            if (a === undefined) {
                if (this.length) {
                    e = n.data(f);
                    if (f.nodeType === 1 && !n._data(f, "parsedAttrs")) {
                        c = g.length;
                        while (c--) {
                            // Support: IE11+
                            // The attrs elements can be null (#14894)
                            if (g[c]) {
                                d = g[c].name;
                                if (d.indexOf("data-") === 0) {
                                    d = n.camelCase(d.slice(5));
                                    P(f, d, e[d]);
                                }
                            }
                        }
                        n._data(f, "parsedAttrs", true);
                    }
                }
                return e;
            }
            // Sets multiple values
            if (typeof a === "object") {
                return this.each(function() {
                    n.data(this, a);
                });
            }
            // Sets one value
            // Gets one value
            // Try to fetch any internally stored data first
            return arguments.length > 1 ? this.each(function() {
                n.data(this, a, b);
            }) : f ? P(f, a, n.data(f, a)) : undefined;
        },
        removeData: function(a) {
            return this.each(function() {
                n.removeData(this, a);
            });
        }
    });
    n.extend({
        queue: function(a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue";
                d = n._data(a, b);
                // Speed up dequeue by getting out quickly if this is just a lookup
                if (c) {
                    if (!d || n.isArray(c)) {
                        d = n._data(a, b, n.makeArray(c));
                    } else {
                        d.push(c);
                    }
                }
                return d || [];
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function() {
                n.dequeue(a, b);
            };
            // If the fx queue is dequeued, always remove the progress sentinel
            if (e === "inprogress") {
                e = c.shift();
                d--;
            }
            if (e) {
                // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if (b === "fx") {
                    c.unshift("inprogress");
                }
                // clear up the last queue stop function
                delete f.stop;
                e.call(a, g, f);
            }
            if (!d && f) {
                f.empty.fire();
            }
        },
        // not intended for public consumption - generates a queueHooks object,
        // or returns the current one
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return n._data(a, c) || n._data(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    n._removeData(a, b + "queue");
                    n._removeData(a, c);
                })
            });
        }
    });
    n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            if (typeof a !== "string") {
                b = a;
                a = "fx";
                c--;
            }
            if (arguments.length < c) {
                return n.queue(this[0], a);
            }
            return b === undefined ? this : this.each(function() {
                var c = n.queue(this, a, b);
                // ensure a hooks for this queue
                n._queueHooks(this, a);
                if (a === "fx" && c[0] !== "inprogress") {
                    n.dequeue(this, a);
                }
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                if (!--d) {
                    e.resolveWith(f, [ f ]);
                }
            };
            if (typeof a !== "string") {
                b = a;
                a = undefined;
            }
            a = a || "fx";
            while (g--) {
                c = n._data(f[g], a + "queueHooks");
                if (c && c.empty) {
                    d++;
                    c.empty.add(h);
                }
            }
            h();
            return e.promise(b);
        }
    });
    (function() {
        var a;
        l.shrinkWrapBlocks = function() {
            if (a != null) {
                return a;
            }
            // Will be changed later if needed.
            a = false;
            // Minified: var b,c,d
            var b, c, e;
            c = d.getElementsByTagName("body")[0];
            if (!c || !c.style) {
                // Test fired too early or in an unsupported environment, exit.
                return;
            }
            // Setup
            b = d.createElement("div");
            e = d.createElement("div");
            e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            c.appendChild(e).appendChild(b);
            // Support: IE6
            // Check if elements with layout shrink-wrap their children
            if (typeof b.style.zoom !== "undefined") {
                // Reset CSS: box-sizing; display; margin; border
                b.style.cssText = // Support: Firefox<29, Android 2.3
                // Vendor-prefix box-sizing
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;" + "padding:1px;width:1px;zoom:1";
                b.appendChild(d.createElement("div")).style.width = "5px";
                a = b.offsetWidth !== 3;
            }
            c.removeChild(e);
            return a;
        };
    })();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i");
    var V = [ "Top", "Right", "Bottom", "Left" ];
    var W = function(a, b) {
        // isHidden might be called from jQuery#filter function;
        // in that case, element will be second argument
        a = b || a;
        return n.css(a, "display") === "none" || !n.contains(a.ownerDocument, a);
    };
    function X(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function() {
            return d.cur();
        } : function() {
            return n.css(a, b, "");
        }, i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), // Starting value computation is required for potential unit mismatches
        k = (n.cssNumber[b] || j !== "px" && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            // Trust units reported by jQuery.css
            j = j || k[3];
            // Make sure we update the tween properties later on
            c = c || [];
            // Iteratively approximate from a nonzero starting point
            k = +i || 1;
            do {
                // If previous iteration zeroed out, double until we get *something*.
                // Use string for doubling so we don't accidentally see scale as unchanged below
                f = f || ".5";
                // Adjust and apply
                k = k / f;
                n.style(a, b, k + j);
            } while (f !== (f = h() / i) && f !== 1 && --g);
        }
        if (c) {
            k = +k || +i || 0;
            // Apply relative offset (+=/-=) if specified
            e = c[1] ? k + (c[1] + 1) * c[2] : +c[2];
            if (d) {
                d.unit = j;
                d.start = k;
                d.end = e;
            }
        }
        return e;
    }
    // Multifunctional method to get and set values of a collection
    // The value/s can optionally be executed if it's a function
    var Y = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = c == null;
        // Sets many values
        if (n.type(c) === "object") {
            e = true;
            for (h in c) {
                Y(a, b, h, c[h], true, f, g);
            }
        } else if (d !== undefined) {
            e = true;
            if (!n.isFunction(d)) {
                g = true;
            }
            if (j) {
                // Bulk operations run against the entire set
                if (g) {
                    b.call(a, d);
                    b = null;
                } else {
                    j = b;
                    b = function(a, b, c) {
                        return j.call(n(a), c);
                    };
                }
            }
            if (b) {
                for (;h < i; h++) {
                    b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                }
            }
        }
        // Gets
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };
    var Z = /^(?:checkbox|radio)$/i;
    var $ = /<([\w:-]+)/;
    var _ = /^$|\/(?:java|ecma)script/i;
    var aa = /^\s+/;
    var ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|" + "details|dialog|figcaption|figure|footer|header|hgroup|main|" + "mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    function ca(a) {
        var b = ba.split("|"), c = a.createDocumentFragment();
        if (c.createElement) {
            while (b.length) {
                c.createElement(b.pop());
            }
        }
        return c;
    }
    (function() {
        var a = d.createElement("div"), b = d.createDocumentFragment(), c = d.createElement("input");
        // Setup
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        // IE strips leading whitespace when .innerHTML is used
        l.leadingWhitespace = a.firstChild.nodeType === 3;
        // Make sure that tbody elements aren't automatically inserted
        // IE will insert them into empty tables
        l.tbody = !a.getElementsByTagName("tbody").length;
        // Make sure that link elements get serialized correctly by innerHTML
        // This requires a wrapper element in IE
        l.htmlSerialize = !!a.getElementsByTagName("link").length;
        // Makes sure cloning an html5 element does not cause problems
        // Where outerHTML is undefined, this still works
        l.html5Clone = d.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
        // Check if a disconnected checkbox will retain its checked
        // value of true after appended to the DOM (IE6/7)
        c.type = "checkbox";
        c.checked = true;
        b.appendChild(c);
        l.appendChecked = c.checked;
        // Make sure textarea (and checkbox) defaultValue is properly cloned
        // Support: IE6-IE11+
        a.innerHTML = "<textarea>x</textarea>";
        l.noCloneChecked = !!a.cloneNode(true).lastChild.defaultValue;
        // #11217 - WebKit loses check when the name is after the checked attribute
        b.appendChild(a);
        // Support: Windows Web Apps (WWA)
        // `name` and `type` must use .setAttribute for WWA (#14901)
        c = d.createElement("input");
        c.setAttribute("type", "radio");
        c.setAttribute("checked", "checked");
        c.setAttribute("name", "t");
        a.appendChild(c);
        // Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
        // old WebKit doesn't clone checked state correctly in fragments
        l.checkClone = a.cloneNode(true).cloneNode(true).lastChild.checked;
        // Support: IE<9
        // Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
        l.noCloneEvent = !!a.addEventListener;
        // Support: IE<9
        // Since attributes and properties are the same in IE,
        // cleanData must set properties to undefined rather than use removeAttribute
        a[n.expando] = 1;
        l.attributes = !a.getAttribute(n.expando);
    })();
    // We have to close these tags to support XHTML (#13200)
    var da = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        // Support: IE8
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        // IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
        // unless wrapped in a div with non-breaking characters in front of it.
        _default: l.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    };
    // Support: IE8-IE9
    da.optgroup = da.option;
    da.tbody = da.tfoot = da.colgroup = da.caption = da.thead;
    da.th = da.td;
    function ea(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== "undefined" ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== "undefined" ? a.querySelectorAll(b || "*") : undefined;
        if (!f) {
            for (f = [], c = a.childNodes || a; (d = c[e]) != null; e++) {
                if (!b || n.nodeName(d, b)) {
                    f.push(d);
                } else {
                    n.merge(f, ea(d, b));
                }
            }
        }
        return b === undefined || b && n.nodeName(a, b) ? n.merge([ a ], f) : f;
    }
    // Mark scripts as having already been evaluated
    function fa(a, b) {
        var c, d = 0;
        for (;(c = a[d]) != null; d++) {
            n._data(c, "globalEval", !b || n._data(b[d], "globalEval"));
        }
    }
    var ga = /<|&#?\w+;/, ha = /<tbody/i;
    function ia(a) {
        if (Z.test(a.type)) {
            a.defaultChecked = a.checked;
        }
    }
    function ja(a, b, c, d, e) {
        var f, g, h, i, j, k, m, o = a.length, // Ensure a safe fragment
        p = ca(b), q = [], r = 0;
        for (;r < o; r++) {
            g = a[r];
            if (g || g === 0) {
                // Add nodes directly
                if (n.type(g) === "object") {
                    n.merge(q, g.nodeType ? [ g ] : g);
                } else if (!ga.test(g)) {
                    q.push(b.createTextNode(g));
                } else {
                    i = i || p.appendChild(b.createElement("div"));
                    // Deserialize a standard representation
                    j = ($.exec(g) || [ "", "" ])[1].toLowerCase();
                    m = da[j] || da._default;
                    i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2];
                    // Descend through wrappers to the right content
                    f = m[0];
                    while (f--) {
                        i = i.lastChild;
                    }
                    // Manually add leading whitespace removed by IE
                    if (!l.leadingWhitespace && aa.test(g)) {
                        q.push(b.createTextNode(aa.exec(g)[0]));
                    }
                    // Remove IE's autoinserted <tbody> from table fragments
                    if (!l.tbody) {
                        // String was a <table>, *may* have spurious <tbody>
                        g = j === "table" && !ha.test(g) ? i.firstChild : // String was a bare <thead> or <tfoot>
                        m[1] === "<table>" && !ha.test(g) ? i : 0;
                        f = g && g.childNodes.length;
                        while (f--) {
                            if (n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length) {
                                g.removeChild(k);
                            }
                        }
                    }
                    n.merge(q, i.childNodes);
                    // Fix #12392 for WebKit and IE > 9
                    i.textContent = "";
                    // Fix #12392 for oldIE
                    while (i.firstChild) {
                        i.removeChild(i.firstChild);
                    }
                    // Remember the top-level container for proper cleanup
                    i = p.lastChild;
                }
            }
        }
        // Fix #11356: Clear elements from fragment
        if (i) {
            p.removeChild(i);
        }
        // Reset defaultChecked for any radios and checkboxes
        // about to be appended to the DOM in IE 6/7 (#8060)
        if (!l.appendChecked) {
            n.grep(ea(q, "input"), ia);
        }
        r = 0;
        while (g = q[r++]) {
            // Skip elements already in the context collection (trac-4087)
            if (d && n.inArray(g, d) > -1) {
                if (e) {
                    e.push(g);
                }
                continue;
            }
            h = n.contains(g.ownerDocument, g);
            // Append to fragment
            i = ea(p.appendChild(g), "script");
            // Preserve script evaluation history
            if (h) {
                fa(i);
            }
            // Capture executables
            if (c) {
                f = 0;
                while (g = i[f++]) {
                    if (_.test(g.type || "")) {
                        c.push(g);
                    }
                }
            }
        }
        i = null;
        return p;
    }
    (function() {
        var b, c, e = d.createElement("div");
        // Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
        for (b in {
            submit: true,
            change: true,
            focusin: true
        }) {
            c = "on" + b;
            if (!(l[b] = c in a)) {
                // Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
                e.setAttribute(c, "t");
                l[b] = e.attributes[c].expando === false;
            }
        }
        // Null elements to avoid leaks in IE.
        e = null;
    })();
    var ka = /^(?:input|select|textarea)$/i, la = /^key/, ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, na = /^(?:focusinfocus|focusoutblur)$/, oa = /^([^.]*)(?:\.(.+)|)/;
    function pa() {
        return true;
    }
    function qa() {
        return false;
    }
    // Support: IE9
    // See #13393 for more info
    function ra() {
        try {
            return d.activeElement;
        } catch (a) {}
    }
    function sa(a, b, c, d, e, f) {
        var g, h;
        // Types can be a map of types/handlers
        if (typeof b === "object") {
            // ( types-Object, selector, data )
            if (typeof c !== "string") {
                // ( types-Object, data )
                d = d || c;
                c = undefined;
            }
            for (h in b) {
                sa(a, h, c, d, b[h], f);
            }
            return a;
        }
        if (d == null && e == null) {
            // ( types, fn )
            e = c;
            d = c = undefined;
        } else if (e == null) {
            if (typeof c === "string") {
                // ( types, selector, fn )
                e = d;
                d = undefined;
            } else {
                // ( types, data, fn )
                e = d;
                d = c;
                c = undefined;
            }
        }
        if (e === false) {
            e = qa;
        } else if (!e) {
            return a;
        }
        if (f === 1) {
            g = e;
            e = function(a) {
                // Can use an empty set, since event contains the info
                n().off(a);
                return g.apply(this, arguments);
            };
            // Use same guid so caller can remove using origFn
            e.guid = g.guid || (g.guid = n.guid++);
        }
        return a.each(function() {
            n.event.add(this, b, e, d, c);
        });
    }
    /*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            // Don't attach events to noData or text/comment nodes (but allow plain objects)
            if (!r) {
                return;
            }
            // Caller can pass in an object of custom data in lieu of the handler
            if (c.handler) {
                i = c;
                c = i.handler;
                e = i.selector;
            }
            // Make sure that the handler has a unique ID, used to find/remove it later
            if (!c.guid) {
                c.guid = n.guid++;
            }
            // Init the element's event structure and main handler, if this is the first
            if (!(g = r.events)) {
                g = r.events = {};
            }
            if (!(k = r.handle)) {
                k = r.handle = function(a) {
                    // Discard the second event of a jQuery.event.trigger() and
                    // when an event is called after a page has unloaded
                    return typeof n !== "undefined" && (!a || n.event.triggered !== a.type) ? n.event.dispatch.apply(k.elem, arguments) : undefined;
                };
                // Add elem as a property of the handle fn to prevent a memory leak
                // with IE non-native events
                k.elem = a;
            }
            // Handle multiple events separated by a space
            b = (b || "").match(G) || [ "" ];
            h = b.length;
            while (h--) {
                f = oa.exec(b[h]) || [];
                o = q = f[1];
                p = (f[2] || "").split(".").sort();
                // There *must* be a type, no attaching namespace-only handlers
                if (!o) {
                    continue;
                }
                // If event changes its type, use the special event handlers for the changed type
                j = n.event.special[o] || {};
                // If selector defined, determine special event api type, otherwise given type
                o = (e ? j.delegateType : j.bindType) || o;
                // Update special based on newly reset type
                j = n.event.special[o] || {};
                // handleObj is passed to all event handlers
                l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i);
                // Init the event handler queue if we're the first
                if (!(m = g[o])) {
                    m = g[o] = [];
                    m.delegateCount = 0;
                    // Only use addEventListener/attachEvent if the special events handler returns false
                    if (!j.setup || j.setup.call(a, d, p, k) === false) {
                        // Bind the global event handler to the element
                        if (a.addEventListener) {
                            a.addEventListener(o, k, false);
                        } else if (a.attachEvent) {
                            a.attachEvent("on" + o, k);
                        }
                    }
                }
                if (j.add) {
                    j.add.call(a, l);
                    if (!l.handler.guid) {
                        l.handler.guid = c.guid;
                    }
                }
                // Add to the element's handler list, delegates in front
                if (e) {
                    m.splice(m.delegateCount++, 0, l);
                } else {
                    m.push(l);
                }
                // Keep track of which events have ever been used, for event optimization
                n.event.global[o] = true;
            }
            // Nullify elem to prevent memory leaks in IE
            a = null;
        },
        // Detach an event or set of events from an element
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (!r || !(k = r.events)) {
                return;
            }
            // Once for each type.namespace in types; type may be omitted
            b = (b || "").match(G) || [ "" ];
            j = b.length;
            while (j--) {
                h = oa.exec(b[j]) || [];
                o = q = h[1];
                p = (h[2] || "").split(".").sort();
                // Unbind all events (on this namespace, if provided) for the element
                if (!o) {
                    for (o in k) {
                        n.event.remove(a, o + b[j], c, d, true);
                    }
                    continue;
                }
                l = n.event.special[o] || {};
                o = (d ? l.delegateType : l.bindType) || o;
                m = k[o] || [];
                h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)");
                // Remove matching events
                i = f = m.length;
                while (f--) {
                    g = m[f];
                    if ((e || q === g.origType) && (!c || c.guid === g.guid) && (!h || h.test(g.namespace)) && (!d || d === g.selector || d === "**" && g.selector)) {
                        m.splice(f, 1);
                        if (g.selector) {
                            m.delegateCount--;
                        }
                        if (l.remove) {
                            l.remove.call(a, g);
                        }
                    }
                }
                // Remove generic event handler if we removed something and no more handlers exist
                // (avoids potential for endless recursion during removal of special event handlers)
                if (i && !m.length) {
                    if (!l.teardown || l.teardown.call(a, p, r.handle) === false) {
                        n.removeEvent(a, o, r.handle);
                    }
                    delete k[o];
                }
            }
            // Remove the expando if it's no longer used
            if (n.isEmptyObject(k)) {
                delete r.handle;
                // removeData also checks for emptiness and clears the expando if empty
                // so use it instead of delete
                n._removeData(a, "events");
            }
        },
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [ e || d ], q = k.call(b, "type") ? b.type : b, r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            i = m = e = e || d;
            // Don't do events on text and comment nodes
            if (e.nodeType === 3 || e.nodeType === 8) {
                return;
            }
            // focus/blur morphs to focusin/out; ensure we're not firing them right now
            if (na.test(q + n.event.triggered)) {
                return;
            }
            if (q.indexOf(".") > -1) {
                // Namespaced trigger; create a regexp to match event type in handle()
                r = q.split(".");
                q = r.shift();
                r.sort();
            }
            h = q.indexOf(":") < 0 && "on" + q;
            // Caller can pass in a jQuery.Event object, Object, or just an event type string
            b = b[n.expando] ? b : new n.Event(q, typeof b === "object" && b);
            // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
            b.isTrigger = f ? 2 : 3;
            b.namespace = r.join(".");
            b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            // Clean up the event in case it is being reused
            b.result = undefined;
            if (!b.target) {
                b.target = e;
            }
            // Clone any incoming data and prepend the event, creating the handler arg list
            c = c == null ? [ b ] : n.makeArray(c, [ b ]);
            // Allow special events to draw outside the lines
            l = n.event.special[q] || {};
            if (!f && l.trigger && l.trigger.apply(e, c) === false) {
                return;
            }
            // Determine event propagation path in advance, per W3C events spec (#9951)
            // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
            if (!f && !l.noBubble && !n.isWindow(e)) {
                j = l.delegateType || q;
                if (!na.test(j + q)) {
                    i = i.parentNode;
                }
                for (;i; i = i.parentNode) {
                    p.push(i);
                    m = i;
                }
                // Only add window if we got to document (e.g., not plain obj or detached DOM)
                if (m === (e.ownerDocument || d)) {
                    p.push(m.defaultView || m.parentWindow || a);
                }
            }
            // Fire handlers on the event path
            o = 0;
            while ((i = p[o++]) && !b.isPropagationStopped()) {
                b.type = o > 1 ? j : l.bindType || q;
                // jQuery handler
                g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle");
                if (g) {
                    g.apply(i, c);
                }
                // Native handler
                g = h && i[h];
                if (g && g.apply && M(i)) {
                    b.result = g.apply(i, c);
                    if (b.result === false) {
                        b.preventDefault();
                    }
                }
            }
            b.type = q;
            // If nobody prevented the default action, do it now
            if (!f && !b.isDefaultPrevented()) {
                if ((!l._default || l._default.apply(p.pop(), c) === false) && M(e)) {
                    // Call a native DOM method on the target with the same name name as the event.
                    // Can't use an .isFunction() check here because IE6/7 fails that test.
                    // Don't do default actions on window, that's where global variables be (#6170)
                    if (h && e[q] && !n.isWindow(e)) {
                        // Don't re-trigger an onFOO event when we call its FOO() method
                        m = e[h];
                        if (m) {
                            e[h] = null;
                        }
                        // Prevent re-triggering of the same event, since we already bubbled it above
                        n.event.triggered = q;
                        try {
                            e[q]();
                        } catch (a) {}
                        n.event.triggered = undefined;
                        if (m) {
                            e[h] = m;
                        }
                    }
                }
            }
            return b.result;
        },
        dispatch: function(a) {
            // Make a writable jQuery.Event from the native event object
            a = n.event.fix(a);
            var b, c, d, f, g, h = [], i = e.call(arguments), j = (n._data(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            // Use the fix-ed jQuery.Event rather than the (read-only) native event
            i[0] = a;
            a.delegateTarget = this;
            // Call the preDispatch hook for the mapped type, and let it bail if desired
            if (k.preDispatch && k.preDispatch.call(this, a) === false) {
                return;
            }
            // Determine handlers
            h = n.event.handlers.call(this, a, j);
            // Run delegates first; they may want to stop propagation beneath us
            b = 0;
            while ((f = h[b++]) && !a.isPropagationStopped()) {
                a.currentTarget = f.elem;
                c = 0;
                while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
                    // Triggered event must either 1) have no namespace, or 2) have namespace(s)
                    // a subset or equal to those in the bound event (both can have no namespace).
                    if (!a.rnamespace || a.rnamespace.test(g.namespace)) {
                        a.handleObj = g;
                        a.data = g.data;
                        d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i);
                        if (d !== undefined) {
                            if ((a.result = d) === false) {
                                a.preventDefault();
                                a.stopPropagation();
                            }
                        }
                    }
                }
            }
            // Call the postDispatch hook for the mapped type
            if (k.postDispatch) {
                k.postDispatch.call(this, a);
            }
            return a.result;
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            // Support (at least): Chrome, IE9
            // Find delegate handlers
            // Black-hole SVG <use> instance trees (#13180)
            //
            // Support: Firefox<=42+
            // Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
            if (h && i.nodeType && (a.type !== "click" || isNaN(a.button) || a.button < 1)) {
                /* jshint eqeqeq: false */
                for (;i != this; i = i.parentNode || this) {
                    /* jshint eqeqeq: true */
                    // Don't check non-elements (#13208)
                    // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                    if (i.nodeType === 1 && (i.disabled !== true || a.type !== "click")) {
                        d = [];
                        for (c = 0; c < h; c++) {
                            f = b[c];
                            // Don't conflict with Object.prototype properties (#13203)
                            e = f.selector + " ";
                            if (d[e] === undefined) {
                                d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [ i ]).length;
                            }
                            if (d[e]) {
                                d.push(f);
                            }
                        }
                        if (d.length) {
                            g.push({
                                elem: i,
                                handlers: d
                            });
                        }
                    }
                }
            }
            // Add the remaining (directly-bound) handlers
            if (h < b.length) {
                g.push({
                    elem: this,
                    handlers: b.slice(h)
                });
            }
            return g;
        },
        fix: function(a) {
            if (a[n.expando]) {
                return a;
            }
            // Create a writable copy of the event object and normalize some properties
            var b, c, e, f = a.type, g = a, h = this.fixHooks[f];
            if (!h) {
                this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {};
            }
            e = h.props ? this.props.concat(h.props) : this.props;
            a = new n.Event(g);
            b = e.length;
            while (b--) {
                c = e[b];
                a[c] = g[c];
            }
            // Support: IE<9
            // Fix target property (#1925)
            if (!a.target) {
                a.target = g.srcElement || d;
            }
            // Support: Safari 6-8+
            // Target should not be a text node (#504, #13143)
            if (a.target.nodeType === 3) {
                a.target = a.target.parentNode;
            }
            // Support: IE<9
            // For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
            a.metaKey = !!a.metaKey;
            return h.filter ? h.filter(a, g) : a;
        },
        // Includes some event props shared by KeyEvent and MouseEvent
        props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " + "metaKey relatedTarget shiftKey target timeStamp view which").split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                // Add which for key events
                if (a.which == null) {
                    a.which = b.charCode != null ? b.charCode : b.keyCode;
                }
                return a;
            }
        },
        mouseHooks: {
            props: ("button buttons clientX clientY fromElement offsetX offsetY " + "pageX pageY screenX screenY toElement").split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button, h = b.fromElement;
                // Calculate pageX/Y if missing and clientX/Y available
                if (a.pageX == null && b.clientX != null) {
                    e = a.target.ownerDocument || d;
                    f = e.documentElement;
                    c = e.body;
                    a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0);
                    a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0);
                }
                // Add relatedTarget, if necessary
                if (!a.relatedTarget && h) {
                    a.relatedTarget = h === a.target ? b.toElement : h;
                }
                // Add which for click: 1 === left; 2 === middle; 3 === right
                // Note: button is not normalized, so don't use it
                if (!a.which && g !== undefined) {
                    a.which = g & 1 ? 1 : g & 2 ? 3 : g & 4 ? 2 : 0;
                }
                return a;
            }
        },
        special: {
            load: {
                // Prevent triggered image.load events from bubbling to window.load
                noBubble: true
            },
            focus: {
                // Fire native event if possible so blur/focus sequence is correct
                trigger: function() {
                    if (this !== ra() && this.focus) {
                        try {
                            this.focus();
                            return false;
                        } catch (a) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === ra() && this.blur) {
                        this.blur();
                        return false;
                    }
                },
                delegateType: "focusout"
            },
            click: {
                // For checkbox, fire native event so checked state will be right
                trigger: function() {
                    if (n.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        this.click();
                        return false;
                    }
                },
                // For cross-browser consistency, don't fire native .click() on links
                _default: function(a) {
                    return n.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    // Support: Firefox 20+
                    // Firefox doesn't alert if the returnValue field is not set.
                    if (a.result !== undefined && a.originalEvent) {
                        a.originalEvent.returnValue = a.result;
                    }
                }
            }
        },
        // Piggyback on a donor event to simulate a different one
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event(), c, {
                type: a,
                isSimulated: true
            });
            n.event.trigger(d, null, b);
            if (d.isDefaultPrevented()) {
                c.preventDefault();
            }
        }
    };
    n.removeEvent = d.removeEventListener ? function(a, b, c) {
        // This "if" is needed for plain objects
        if (a.removeEventListener) {
            a.removeEventListener(b, c);
        }
    } : function(a, b, c) {
        var d = "on" + b;
        if (a.detachEvent) {
            // #8545, #7054, preventing memory leaks for custom events in IE6-8
            // detachEvent needed property on element, by name of that event,
            // to properly expose it to GC
            if (typeof a[d] === "undefined") {
                a[d] = null;
            }
            a.detachEvent(d, c);
        }
    };
    n.Event = function(a, b) {
        // Allow instantiation without the 'new' keyword
        if (!(this instanceof n.Event)) {
            return new n.Event(a, b);
        }
        // Event object
        if (a && a.type) {
            this.originalEvent = a;
            this.type = a.type;
            // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = a.defaultPrevented || a.defaultPrevented === undefined && // Support: IE < 9, Android < 4.0
            a.returnValue === false ? pa : qa;
        } else {
            this.type = a;
        }
        // Put explicitly provided properties onto the event object
        if (b) {
            n.extend(this, b);
        }
        // Create a timestamp if incoming event doesn't have one
        this.timeStamp = a && a.timeStamp || n.now();
        // Mark it as fixed
        this[n.expando] = true;
    };
    // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
    // http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = pa;
            if (!a) {
                return;
            }
            // If preventDefault exists, run it on the original event
            if (a.preventDefault) {
                a.preventDefault();
            } else {
                a.returnValue = false;
            }
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = pa;
            if (!a || this.isSimulated) {
                return;
            }
            // If stopPropagation exists, run it on the original event
            if (a.stopPropagation) {
                a.stopPropagation();
            }
            // Support: IE
            // Set the cancelBubble property of the original event to true
            a.cancelBubble = true;
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa;
            if (a && a.stopImmediatePropagation) {
                a.stopImmediatePropagation();
            }
            this.stopPropagation();
        }
    };
    // Create mouseenter/leave events using mouseover/out and event-time checks
    // so that event delegation works in jQuery.
    // Do the same for pointerenter/pointerleave and pointerover/pointerout
    //
    // Support: Safari 7 only
    // Safari sends mouseenter too often; see:
    // https://code.google.com/p/chromium/issues/detail?id=470258
    // for the description of the bug (it existed in older Chrome versions as well).
    n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                // For mouseenter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                if (!e || e !== d && !n.contains(d, e)) {
                    a.type = f.origType;
                    c = f.handler.apply(this, arguments);
                    a.type = b;
                }
                return c;
            }
        };
    });
    // IE submit delegation
    if (!l.submit) {
        n.event.special.submit = {
            setup: function() {
                // Only need this for delegated form submit events
                if (n.nodeName(this, "form")) {
                    return false;
                }
                // Lazy-add a submit handler when a descendant form may potentially be submitted
                n.event.add(this, "click._submit keypress._submit", function(a) {
                    // Node name check avoids a VML-related crash in IE (#9807)
                    var b = a.target, c = n.nodeName(b, "input") || n.nodeName(b, "button") ? // Support: IE <=8
                    // We use jQuery.prop instead of elem.form
                    // to allow fixing the IE8 delegated submit issue (gh-2332)
                    // by 3rd party polyfills/workarounds.
                    n.prop(b, "form") : undefined;
                    if (c && !n._data(c, "submit")) {
                        n.event.add(c, "submit._submit", function(a) {
                            a._submitBubble = true;
                        });
                        n._data(c, "submit", true);
                    }
                });
            },
            postDispatch: function(a) {
                // If form was submitted by the user, bubble the event up the tree
                if (a._submitBubble) {
                    delete a._submitBubble;
                    if (this.parentNode && !a.isTrigger) {
                        n.event.simulate("submit", this.parentNode, a);
                    }
                }
            },
            teardown: function() {
                // Only need this for delegated form submit events
                if (n.nodeName(this, "form")) {
                    return false;
                }
                // Remove delegated handlers; cleanData eventually reaps submit handlers attached above
                n.event.remove(this, "._submit");
            }
        };
    }
    // IE change delegation and checkbox/radio fix
    if (!l.change) {
        n.event.special.change = {
            setup: function() {
                if (ka.test(this.nodeName)) {
                    // IE doesn't fire change on a check/radio until blur; trigger it on click
                    // after a propertychange. Eat the blur-change in special.change.handle.
                    // This still fires onchange a second time for check/radio after blur.
                    if (this.type === "checkbox" || this.type === "radio") {
                        n.event.add(this, "propertychange._change", function(a) {
                            if (a.originalEvent.propertyName === "checked") {
                                this._justChanged = true;
                            }
                        });
                        n.event.add(this, "click._change", function(a) {
                            if (this._justChanged && !a.isTrigger) {
                                this._justChanged = false;
                            }
                            // Allow triggered, simulated change events (#11500)
                            n.event.simulate("change", this, a);
                        });
                    }
                    return false;
                }
                // Delegated event; lazy-add a change handler on descendant inputs
                n.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    if (ka.test(b.nodeName) && !n._data(b, "change")) {
                        n.event.add(b, "change._change", function(a) {
                            if (this.parentNode && !a.isSimulated && !a.isTrigger) {
                                n.event.simulate("change", this.parentNode, a);
                            }
                        });
                        n._data(b, "change", true);
                    }
                });
            },
            handle: function(a) {
                var b = a.target;
                // Swallow native change events from checkbox/radio, we already triggered them above
                if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") {
                    return a.handleObj.handler.apply(this, arguments);
                }
            },
            teardown: function() {
                n.event.remove(this, "._change");
                return !ka.test(this.nodeName);
            }
        };
    }
    // Support: Firefox
    // Firefox doesn't have focus(in | out) events
    // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
    //
    // Support: Chrome, Safari
    // focus(in | out) events fire after focus & blur events,
    // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
    // Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
    if (!l.focusin) {
        n.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            // Attach a single capturing handler on the document while someone wants focusin/focusout
            var c = function(a) {
                n.event.simulate(b, a.target, n.event.fix(a));
            };
            n.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this, e = n._data(d, b);
                    if (!e) {
                        d.addEventListener(a, c, true);
                    }
                    n._data(d, b, (e || 0) + 1);
                },
                teardown: function() {
                    var d = this.ownerDocument || this, e = n._data(d, b) - 1;
                    if (!e) {
                        d.removeEventListener(a, c, true);
                        n._removeData(d, b);
                    } else {
                        n._data(d, b, e);
                    }
                }
            };
        });
    }
    n.fn.extend({
        on: function(a, b, c, d) {
            return sa(this, a, b, c, d);
        },
        one: function(a, b, c, d) {
            return sa(this, a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) {
                // ( event )  dispatched jQuery.Event
                d = a.handleObj;
                n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler);
                return this;
            }
            if (typeof a === "object") {
                // ( types-object [, selector] )
                for (e in a) {
                    this.off(e, b, a[e]);
                }
                return this;
            }
            if (b === false || typeof b === "function") {
                // ( types [, fn] )
                c = b;
                b = undefined;
            }
            if (c === false) {
                c = qa;
            }
            return this.each(function() {
                n.event.remove(this, a, c, b);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) {
                return n.event.trigger(a, b, c, true);
            }
        }
    });
    var ta = / jQuery\d+="(?:null|\d+)"/g, ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"), va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, // Support: IE 10-11, Edge 10240+
    // In IE/Edge using regex groups here causes severe slowdowns.
    // See https://connect.microsoft.com/IE/feedback/details/1736512/
    wa = /<script|<style|<link/i, // checked="checked" or checked
    xa = /checked\s*(?:[^=]|=\s*.checked.)/i, ya = /^true\/(.*)/, za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Aa = ca(d), Ba = Aa.appendChild(d.createElement("div"));
    // Support: IE<8
    // Manipulating tables requires a tbody
    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(b.nodeType !== 11 ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    // Replace/restore the type attribute of script elements for safe DOM manipulation
    function Da(a) {
        a.type = (n.find.attr(a, "type") !== null) + "/" + a.type;
        return a;
    }
    function Ea(a) {
        var b = ya.exec(a.type);
        if (b) {
            a.type = b[1];
        } else {
            a.removeAttribute("type");
        }
        return a;
    }
    function Fa(a, b) {
        if (b.nodeType !== 1 || !n.hasData(a)) {
            return;
        }
        var c, d, e, f = n._data(a), g = n._data(b, f), h = f.events;
        if (h) {
            delete g.handle;
            g.events = {};
            for (c in h) {
                for (d = 0, e = h[c].length; d < e; d++) {
                    n.event.add(b, c, h[c][d]);
                }
            }
        }
        // make the cloned public data object a copy from the original
        if (g.data) {
            g.data = n.extend({}, g.data);
        }
    }
    function Ga(a, b) {
        var c, d, e;
        // We do not need to do anything for non-Elements
        if (b.nodeType !== 1) {
            return;
        }
        c = b.nodeName.toLowerCase();
        // IE6-8 copies events bound via attachEvent when using cloneNode.
        if (!l.noCloneEvent && b[n.expando]) {
            e = n._data(b);
            for (d in e.events) {
                n.removeEvent(b, d, e.handle);
            }
            // Event data gets referenced instead of copied if the expando gets copied too
            b.removeAttribute(n.expando);
        }
        // IE blanks contents when cloning scripts, and tries to evaluate newly-set text
        if (c === "script" && b.text !== a.text) {
            Da(b).text = a.text;
            Ea(b);
        } else if (c === "object") {
            if (b.parentNode) {
                b.outerHTML = a.outerHTML;
            }
            // This path appears unavoidable for IE9. When cloning an object
            // element in IE9, the outerHTML strategy above is not sufficient.
            // If the src has innerHTML and the destination does not,
            // copy the src.innerHTML into the dest.innerHTML. #10324
            if (l.html5Clone && (a.innerHTML && !n.trim(b.innerHTML))) {
                b.innerHTML = a.innerHTML;
            }
        } else if (c === "input" && Z.test(a.type)) {
            // IE6-8 fails to persist the checked state of a cloned checkbox
            // or radio button. Worse, IE6-7 fail to give the cloned element
            // a checked appearance if the defaultChecked value isn't also set
            b.defaultChecked = b.checked = a.checked;
            // IE6-7 get confused and end up setting the value of a cloned
            // checkbox/radio button to an empty string instead of "on"
            if (b.value !== a.value) {
                b.value = a.value;
            }
        } else if (c === "option") {
            b.defaultSelected = b.selected = a.defaultSelected;
        } else if (c === "input" || c === "textarea") {
            b.defaultValue = a.defaultValue;
        }
    }
    function Ha(a, b, c, d) {
        // Flatten any nested arrays
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q);
        // We can't cloneNode fragments that contain checked, in WebKit
        if (r || o > 1 && typeof q === "string" && !l.checkClone && xa.test(q)) {
            return a.each(function(e) {
                var f = a.eq(e);
                if (r) {
                    b[0] = q.call(this, e, f.html());
                }
                Ha(f, b, c, d);
            });
        }
        if (o) {
            k = ja(b, a[0].ownerDocument, false, a, d);
            e = k.firstChild;
            if (k.childNodes.length === 1) {
                k = e;
            }
            // Require either new content or an interest in ignored elements to invoke the callback
            if (e || d) {
                i = n.map(ea(k, "script"), Da);
                h = i.length;
                // Use the original fragment for the last item
                // instead of the first because it can end up
                // being emptied incorrectly in certain situations (#8070).
                for (;m < o; m++) {
                    g = k;
                    if (m !== p) {
                        g = n.clone(g, true, true);
                        // Keep references to cloned scripts for later restoration
                        if (h) {
                            // Support: Android<4.1, PhantomJS<2
                            // push.apply(_, arraylike) throws on ancient WebKit
                            n.merge(i, ea(g, "script"));
                        }
                    }
                    c.call(a[m], g, m);
                }
                if (h) {
                    j = i[i.length - 1].ownerDocument;
                    // Reenable scripts
                    n.map(i, Ea);
                    // Evaluate executable scripts on first document insertion
                    for (m = 0; m < h; m++) {
                        g = i[m];
                        if (_.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g)) {
                            if (g.src) {
                                // Optional AJAX dependency, but won't run scripts if not present
                                if (n._evalUrl) {
                                    n._evalUrl(g.src);
                                }
                            } else {
                                n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, ""));
                            }
                        }
                    }
                }
                // Fix #11809: Avoid leaking memory
                k = e = null;
            }
        }
        return a;
    }
    function Ia(a, b, c) {
        var d, e = b ? n.filter(b, a) : a, f = 0;
        for (;(d = e[f]) != null; f++) {
            if (!c && d.nodeType === 1) {
                n.cleanData(ea(d));
            }
            if (d.parentNode) {
                if (c && n.contains(d.ownerDocument, d)) {
                    fa(ea(d, "script"));
                }
                d.parentNode.removeChild(d);
            }
        }
        return a;
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(va, "<$1></$2>");
        },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">")) {
                f = a.cloneNode(true);
            } else {
                Ba.innerHTML = a.outerHTML;
                Ba.removeChild(f = Ba.firstChild);
            }
            if ((!l.noCloneEvent || !l.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !n.isXMLDoc(a)) {
                // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
                d = ea(f);
                h = ea(a);
                // Fix all IE cloning issues
                for (g = 0; (e = h[g]) != null; ++g) {
                    // Ensure that the destination node is not null; Fixes #9587
                    if (d[g]) {
                        Ga(e, d[g]);
                    }
                }
            }
            // Copy the events from the original to the clone
            if (b) {
                if (c) {
                    h = h || ea(a);
                    d = d || ea(f);
                    for (g = 0; (e = h[g]) != null; g++) {
                        Fa(e, d[g]);
                    }
                } else {
                    Fa(a, f);
                }
            }
            // Preserve script evaluation history
            d = ea(f, "script");
            if (d.length > 0) {
                fa(d, !i && ea(a, "script"));
            }
            d = h = e = null;
            // Return the cloned set
            return f;
        },
        cleanData: function(a, /* internal */ b) {
            var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special;
            for (;(d = a[h]) != null; h++) {
                if (b || M(d)) {
                    f = d[i];
                    g = f && j[f];
                    if (g) {
                        if (g.events) {
                            for (e in g.events) {
                                if (m[e]) {
                                    n.event.remove(d, e);
                                } else {
                                    n.removeEvent(d, e, g.handle);
                                }
                            }
                        }
                        // Remove cache only if it was not already removed by jQuery.event.remove
                        if (j[f]) {
                            delete j[f];
                            // Support: IE<9
                            // IE does not allow us to delete expando properties from nodes
                            // IE creates expando attributes along with the property
                            // IE does not have a removeAttribute function on Document nodes
                            if (!k && typeof d.removeAttribute !== "undefined") {
                                d.removeAttribute(i);
                            } else {
                                d[i] = undefined;
                            }
                            c.push(f);
                        }
                    }
                }
            }
        }
    });
    n.fn.extend({
        // Keep domManip exposed until 3.0 (gh-2225)
        domManip: Ha,
        detach: function(a) {
            return Ia(this, a, true);
        },
        remove: function(a) {
            return Ia(this, a);
        },
        text: function(a) {
            return Y(this, function(a) {
                return a === undefined ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a));
            }, null, a, arguments.length);
        },
        append: function() {
            return Ha(this, arguments, function(a) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var b = Ca(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return Ha(this, arguments, function(a) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return Ha(this, arguments, function(a) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(a, this);
                }
            });
        },
        after: function() {
            return Ha(this, arguments, function(a) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(a, this.nextSibling);
                }
            });
        },
        empty: function() {
            var a, b = 0;
            for (;(a = this[b]) != null; b++) {
                // Remove element nodes and prevent memory leaks
                if (a.nodeType === 1) {
                    n.cleanData(ea(a, false));
                }
                // Remove any remaining nodes
                while (a.firstChild) {
                    a.removeChild(a.firstChild);
                }
                // If this is a select, ensure that it displays empty (#12336)
                // Support: IE<9
                if (a.options && n.nodeName(a, "select")) {
                    a.options.length = 0;
                }
            }
            return this;
        },
        clone: function(a, b) {
            a = a == null ? false : a;
            b = b == null ? a : b;
            return this.map(function() {
                return n.clone(this, a, b);
            });
        },
        html: function(a) {
            return Y(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (a === undefined) {
                    return b.nodeType === 1 ? b.innerHTML.replace(ta, "") : undefined;
                }
                // See if we can take a shortcut and just use innerHTML
                if (typeof a === "string" && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (;c < d; c++) {
                            // Remove element nodes and prevent memory leaks
                            b = this[c] || {};
                            if (b.nodeType === 1) {
                                n.cleanData(ea(b, false));
                                b.innerHTML = a;
                            }
                        }
                        b = 0;
                    } catch (a) {}
                }
                if (b) {
                    this.empty().append(a);
                }
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = [];
            // Make the changes, replacing each non-ignored context element with the new content
            return Ha(this, arguments, function(b) {
                var c = this.parentNode;
                if (n.inArray(this, a) < 0) {
                    n.cleanData(ea(this));
                    if (c) {
                        c.replaceChild(b, this);
                    }
                }
            }, a);
        }
    });
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            var c, d = 0, e = [], f = n(a), h = f.length - 1;
            for (;d <= h; d++) {
                c = d === h ? this : this.clone(true);
                n(f[d])[b](c);
                // Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
                g.apply(e, c.get());
            }
            return this.pushStack(e);
        };
    });
    var Ja, Ka = {
        // Support: Firefox
        // We have to pre-define these values for FF (#10227)
        HTML: "block",
        BODY: "block"
    };
    /**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
    // Called only from within defaultDisplay
    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body), d = n.css(c[0], "display");
        // We don't have any data stored on the element,
        // so use "detach" method as fast way to get rid of the element
        c.detach();
        return d;
    }
    /**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
    function Ma(a) {
        var b = d, c = Ka[a];
        if (!c) {
            c = La(a, b);
            // If the simple way fails, read from inside an iframe
            if (c === "none" || !c) {
                // Use the already-created iframe if possible
                Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement);
                // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
                b = (Ja[0].contentWindow || Ja[0].contentDocument).document;
                // Support: IE
                b.write();
                b.close();
                c = La(a, b);
                Ja.detach();
            }
            // Store the correct default display
            Ka[a] = c;
        }
        return c;
    }
    var Na = /^margin/;
    var Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i");
    var Pa = function(a, b, c, d) {
        var e, f, g = {};
        // Remember the old values, and insert the new ones
        for (f in b) {
            g[f] = a.style[f];
            a.style[f] = b[f];
        }
        e = c.apply(a, d || []);
        // Revert the old values
        for (f in b) {
            a.style[f] = g[f];
        }
        return e;
    };
    var Qa = d.documentElement;
    (function() {
        var b, c, e, f, g, h, i = d.createElement("div"), j = d.createElement("div");
        // Finish early in limited (non-browser) environments
        if (!j.style) {
            return;
        }
        j.style.cssText = "float:left;opacity:.5";
        // Support: IE<9
        // Make sure that element opacity exists (as opposed to filter)
        l.opacity = j.style.opacity === "0.5";
        // Verify style float existence
        // (IE uses styleFloat instead of cssFloat)
        l.cssFloat = !!j.style.cssFloat;
        j.style.backgroundClip = "content-box";
        j.cloneNode(true).style.backgroundClip = "";
        l.clearCloneStyle = j.style.backgroundClip === "content-box";
        i = d.createElement("div");
        i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
        j.innerHTML = "";
        i.appendChild(j);
        // Support: Firefox<29, Android 2.3
        // Vendor-prefix box-sizing
        l.boxSizing = j.style.boxSizing === "" || j.style.MozBoxSizing === "" || j.style.WebkitBoxSizing === "";
        n.extend(l, {
            reliableHiddenOffsets: function() {
                if (b == null) {
                    k();
                }
                return f;
            },
            boxSizingReliable: function() {
                // We're checking for pixelPositionVal here instead of boxSizingReliableVal
                // since that compresses better and they're computed together anyway.
                if (b == null) {
                    k();
                }
                return e;
            },
            pixelMarginRight: function() {
                // Support: Android 4.0-4.3
                if (b == null) {
                    k();
                }
                return c;
            },
            pixelPosition: function() {
                if (b == null) {
                    k();
                }
                return b;
            },
            reliableMarginRight: function() {
                // Support: Android 2.3
                if (b == null) {
                    k();
                }
                return g;
            },
            reliableMarginLeft: function() {
                // Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
                if (b == null) {
                    k();
                }
                return h;
            }
        });
        function k() {
            var k, l, m = d.documentElement;
            // Setup
            m.appendChild(i);
            j.style.cssText = // Support: Android 2.3
            // Vendor-prefix box-sizing
            "-webkit-box-sizing:border-box;box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
            // Support: IE<9
            // Assume reasonable values in the absence of getComputedStyle
            b = e = h = false;
            c = g = true;
            // Check for getComputedStyle so that this code is not run in IE<9.
            if (a.getComputedStyle) {
                l = a.getComputedStyle(j);
                b = (l || {}).top !== "1%";
                h = (l || {}).marginLeft === "2px";
                e = (l || {
                    width: "4px"
                }).width === "4px";
                // Support: Android 4.0 - 4.3 only
                // Some styles come back with percentage values, even though they shouldn't
                j.style.marginRight = "50%";
                c = (l || {
                    marginRight: "4px"
                }).marginRight === "4px";
                // Support: Android 2.3 only
                // Div with explicit width and no margin-right incorrectly
                // gets computed margin-right based on width of container (#3333)
                // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
                k = j.appendChild(d.createElement("div"));
                // Reset CSS: box-sizing; display; margin; border; padding
                k.style.cssText = j.style.cssText = // Support: Android 2.3
                // Vendor-prefix box-sizing
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                k.style.marginRight = k.style.width = "0";
                j.style.width = "1px";
                g = !parseFloat((a.getComputedStyle(k) || {}).marginRight);
                j.removeChild(k);
            }
            // Support: IE6-8
            // First check that getClientRects works as expected
            // Check if table cells still have offsetWidth/Height when they are set
            // to display:none and there are still other visible table cells in a
            // table row; if so, offsetWidth/Height are not reliable for use when
            // determining if an element has been hidden directly using
            // display:none (it is still safe to use offsets if a parent element is
            // hidden; don safety goggles and see bug #4512 for more information).
            j.style.display = "none";
            f = j.getClientRects().length === 0;
            if (f) {
                j.style.display = "";
                j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                j.childNodes[0].style.borderCollapse = "separate";
                k = j.getElementsByTagName("td");
                k[0].style.cssText = "margin:0;border:0;padding:0;display:none";
                f = k[0].offsetHeight === 0;
                if (f) {
                    k[0].style.display = "";
                    k[1].style.display = "none";
                    f = k[0].offsetHeight === 0;
                }
            }
            // Teardown
            m.removeChild(i);
        }
    })();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    if (a.getComputedStyle) {
        Ra = function(b) {
            // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
            // IE throws on elements created in popups
            // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
            var c = b.ownerDocument.defaultView;
            if (!c || !c.opener) {
                c = a;
            }
            return c.getComputedStyle(b);
        };
        Sa = function(a, b, c) {
            var d, e, f, g, h = a.style;
            c = c || Ra(a);
            // getPropertyValue is only needed for .css('filter') in IE9, see #12537
            g = c ? c.getPropertyValue(b) || c[b] : undefined;
            // Support: Opera 12.1x only
            // Fall back to style even without computed
            // computed is undefined for elems on document fragments
            if ((g === "" || g === undefined) && !n.contains(a.ownerDocument, a)) {
                g = n.style(a, b);
            }
            if (c) {
                // A tribute to the "awesome hack by Dean Edwards"
                // Chrome < 17 and Safari 5.0 uses "computed value"
                // instead of "used value" for margin-right
                // Safari 5.1.7 (at least) returns percentage for a larger set of values,
                // but width seems to be reliably pixels
                // this is against the CSSOM draft spec:
                // http://dev.w3.org/csswg/cssom/#resolved-values
                if (!l.pixelMarginRight() && Oa.test(g) && Na.test(b)) {
                    // Remember the original values
                    d = h.width;
                    e = h.minWidth;
                    f = h.maxWidth;
                    // Put in the new values to get a computed value out
                    h.minWidth = h.maxWidth = h.width = g;
                    g = c.width;
                    // Revert the changed values
                    h.width = d;
                    h.minWidth = e;
                    h.maxWidth = f;
                }
            }
            // Support: IE
            // IE returns zIndex value as an integer.
            return g === undefined ? g : g + "";
        };
    } else if (Qa.currentStyle) {
        Ra = function(a) {
            return a.currentStyle;
        };
        Sa = function(a, b, c) {
            var d, e, f, g, h = a.style;
            c = c || Ra(a);
            g = c ? c[b] : undefined;
            // Avoid setting ret to empty string here
            // so we don't default to auto
            if (g == null && h && h[b]) {
                g = h[b];
            }
            // From the awesome hack by Dean Edwards
            // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
            // If we're not dealing with a regular pixel number
            // but a number that has a weird ending, we need to convert it to pixels
            // but not position css attributes, as those are
            // proportional to the parent element instead
            // and we can't measure the parent instead because it
            // might trigger a "stacking dolls" problem
            if (Oa.test(g) && !Ta.test(b)) {
                // Remember the original values
                d = h.left;
                e = a.runtimeStyle;
                f = e && e.left;
                // Put in the new values to get a computed value out
                if (f) {
                    e.left = a.currentStyle.left;
                }
                h.left = b === "fontSize" ? "1em" : g;
                g = h.pixelLeft + "px";
                // Revert the changed values
                h.left = d;
                if (f) {
                    e.left = f;
                }
            }
            // Support: IE
            // IE returns zIndex value as an integer.
            return g === undefined ? g : g + "" || "auto";
        };
    }
    function Ua(a, b) {
        // Define the hook, we'll check on the first run if it's really needed.
        return {
            get: function() {
                if (a()) {
                    // Hook not needed (or it's not possible to use it due
                    // to missing dependency), remove it.
                    delete this.get;
                    return;
                }
                // Hook needed; redefine it so that the support test is not executed again.
                return (this.get = b).apply(this, arguments);
            }
        };
    }
    var Va = /alpha\([^)]*\)/i, Wa = /opacity\s*=\s*([^)]*)/i, // swappable if display is none or starts with table except
    // "table", "table-cell", or "table-caption"
    // see here for display values:
    // https://developer.mozilla.org/en-US/docs/CSS/display
    Xa = /^(none|table(?!-c[ea]).+)/, Ya = new RegExp("^(" + T + ")(.*)$", "i"), Za = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, $a = {
        letterSpacing: "0",
        fontWeight: "400"
    }, _a = [ "Webkit", "O", "Moz", "ms" ], ab = d.createElement("div").style;
    // return a css property mapped to a potentially vendor prefixed property
    function bb(a) {
        // shortcut for names that are not vendor prefixed
        if (a in ab) {
            return a;
        }
        // check for vendor prefixed names
        var b = a.charAt(0).toUpperCase() + a.slice(1), c = _a.length;
        while (c--) {
            a = _a[c] + b;
            if (a in ab) {
                return a;
            }
        }
    }
    function cb(a, b) {
        var c, d, e, f = [], g = 0, h = a.length;
        for (;g < h; g++) {
            d = a[g];
            if (!d.style) {
                continue;
            }
            f[g] = n._data(d, "olddisplay");
            c = d.style.display;
            if (b) {
                // Reset the inline display of this element to learn if it is
                // being hidden by cascaded rules or not
                if (!f[g] && c === "none") {
                    d.style.display = "";
                }
                // Set elements which have been overridden with display: none
                // in a stylesheet to whatever the default browser style is
                // for such an element
                if (d.style.display === "" && W(d)) {
                    f[g] = n._data(d, "olddisplay", Ma(d.nodeName));
                }
            } else {
                e = W(d);
                if (c && c !== "none" || !e) {
                    n._data(d, "olddisplay", e ? c : n.css(d, "display"));
                }
            }
        }
        // Set the display of most of the elements in a second loop
        // to avoid the constant reflow
        for (g = 0; g < h; g++) {
            d = a[g];
            if (!d.style) {
                continue;
            }
            if (!b || d.style.display === "none" || d.style.display === "") {
                d.style.display = b ? f[g] || "" : "none";
            }
        }
        return a;
    }
    function db(a, b, c) {
        var d = Ya.exec(b);
        // Guard against undefined "subtract", e.g., when used as in cssHooks
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function eb(a, b, c, d, e) {
        var f = c === (d ? "border" : "content") ? // If we already have the right measurement, avoid augmentation
        4 : // Otherwise initialize for horizontal or vertical properties
        b === "width" ? 1 : 0, g = 0;
        for (;f < 4; f += 2) {
            // both box models exclude margin, so add it if we want it
            if (c === "margin") {
                g += n.css(a, c + V[f], true, e);
            }
            if (d) {
                // border-box includes padding, so remove it if we want content
                if (c === "content") {
                    g -= n.css(a, "padding" + V[f], true, e);
                }
                // at this point, extra isn't border nor margin, so remove border
                if (c !== "margin") {
                    g -= n.css(a, "border" + V[f] + "Width", true, e);
                }
            } else {
                // at this point, extra isn't content, so add padding
                g += n.css(a, "padding" + V[f], true, e);
                // at this point, extra isn't content nor padding, so add border
                if (c !== "padding") {
                    g += n.css(a, "border" + V[f] + "Width", true, e);
                }
            }
        }
        return g;
    }
    function fb(a, b, c) {
        // Start with offset property, which is equivalent to the border-box value
        var d = true, e = b === "width" ? a.offsetWidth : a.offsetHeight, f = Ra(a), g = l.boxSizing && n.css(a, "boxSizing", false, f) === "border-box";
        // some non-html elements return undefined for offsetWidth, so check for null/undefined
        // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
        // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
        if (e <= 0 || e == null) {
            // Fall back to computed then uncomputed css if necessary
            e = Sa(a, b, f);
            if (e < 0 || e == null) {
                e = a.style[b];
            }
            // Computed unit is not pixels. Stop here and return.
            if (Oa.test(e)) {
                return e;
            }
            // we need the check for style in case a browser which returns unreliable values
            // for getComputedStyle silently falls back to the reliable elem.style
            d = g && (l.boxSizingReliable() || e === a.style[b]);
            // Normalize "", auto, and prepare for extra
            e = parseFloat(e) || 0;
        }
        // use the active box-sizing model to add/subtract irrelevant styles
        return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    n.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        // We should always get a number back from opacity
                        var c = Sa(a, "opacity");
                        return c === "" ? "1" : c;
                    }
                }
            }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
            animationIterationCount: true,
            columnCount: true,
            fillOpacity: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {
            // normalize float css property
            float: l.cssFloat ? "cssFloat" : "styleFloat"
        },
        // Get and set the style property on a DOM Node
        style: function(a, b, c, d) {
            // Don't set styles on text and comment nodes
            if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) {
                return;
            }
            // Make sure that we're working with the right name
            var e, f, g, h = n.camelCase(b), i = a.style;
            b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h);
            // gets hook for the prefixed version
            // followed by the unprefixed version
            g = n.cssHooks[b] || n.cssHooks[h];
            // Check if we're setting a value
            if (c !== undefined) {
                f = typeof c;
                // Convert "+=" or "-=" to relative numbers (#7345)
                if (f === "string" && (e = U.exec(c)) && e[1]) {
                    c = X(a, b, e);
                    // Fixes bug #9237
                    f = "number";
                }
                // Make sure that null and NaN values aren't set. See: #7116
                if (c == null || c !== c) {
                    return;
                }
                // If a number was passed in, add the unit (except for certain CSS properties)
                if (f === "number") {
                    c += e && e[3] || (n.cssNumber[h] ? "" : "px");
                }
                // Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
                // but it would mean to define eight
                // (for every problematic property) identical functions
                if (!l.clearCloneStyle && c === "" && b.indexOf("background") === 0) {
                    i[b] = "inherit";
                }
                // If a hook was provided, use that value, otherwise just set the specified value
                if (!g || !("set" in g) || (c = g.set(a, c, d)) !== undefined) {
                    // Support: IE
                    // Swallow errors from 'invalid' CSS values (#5509)
                    try {
                        i[b] = c;
                    } catch (a) {}
                }
            } else {
                // If a hook was provided get the non-computed value from there
                if (g && "get" in g && (e = g.get(a, false, d)) !== undefined) {
                    return e;
                }
                // Otherwise just get the value from the style object
                return i[b];
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            // Make sure that we're working with the right name
            b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h);
            // gets hook for the prefixed version
            // followed by the unprefixed version
            g = n.cssHooks[b] || n.cssHooks[h];
            // If a hook was provided get the computed value from there
            if (g && "get" in g) {
                f = g.get(a, true, c);
            }
            // Otherwise, if a way to get the computed value exists, use that
            if (f === undefined) {
                f = Sa(a, b, d);
            }
            //convert "normal" to computed value
            if (f === "normal" && b in $a) {
                f = $a[b];
            }
            // Return, converting to number if forced or a qualifier was provided and val looks numeric
            if (c === "" || c) {
                e = parseFloat(f);
                return c === true || isFinite(e) ? e || 0 : f;
            }
            return f;
        }
    });
    n.each([ "height", "width" ], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) {
                    // certain elements can have dimension info if we invisibly show them
                    // however, it must have a current display style that would benefit from this
                    return Xa.test(n.css(a, "display")) && a.offsetWidth === 0 ? Pa(a, Za, function() {
                        return fb(a, b, d);
                    }) : fb(a, b, d);
                }
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return db(a, c, d ? eb(a, b, d, l.boxSizing && n.css(a, "boxSizing", false, e) === "border-box", e) : 0);
            }
        };
    });
    if (!l.opacity) {
        n.cssHooks.opacity = {
            get: function(a, b) {
                // IE uses filters for opacity
                return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
            },
            set: function(a, b) {
                var c = a.style, d = a.currentStyle, e = n.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "", f = d && d.filter || c.filter || "";
                // IE has trouble with opacity if it does not have layout
                // Force it by setting the zoom level
                c.zoom = 1;
                // if setting opacity to 1, and no other filters exist -
                // attempt to remove filter attribute #6652
                // if value === "", then remove inline opacity #12685
                if ((b >= 1 || b === "") && n.trim(f.replace(Va, "")) === "" && c.removeAttribute) {
                    // Setting style.filter to null, "" & " " still leave "filter:" in the cssText
                    // if "filter:" is present at all, clearType is disabled, we want to avoid this
                    // style.removeAttribute is IE Only, but so apparently is this code path...
                    c.removeAttribute("filter");
                    // if there is no filter style applied in a css rule
                    // or unset inline opacity, we are done
                    if (b === "" || d && !d.filter) {
                        return;
                    }
                }
                // otherwise, set new filter values
                c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e;
            }
        };
    }
    n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
        if (b) {
            return Pa(a, {
                display: "inline-block"
            }, Sa, [ a, "marginRight" ]);
        }
    });
    n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
        if (b) {
            // Support: IE<=11+
            // Running getBoundingClientRect on a disconnected node in IE throws an error
            // Support: IE8 only
            // getClientRects() errors on disconnected elems
            return (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
                marginLeft: 0
            }, function() {
                return a.getBoundingClientRect().left;
            }) : 0)) + "px";
        }
    });
    // These hooks are used by animate to expand properties
    n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                var d = 0, e = {}, // assumes a single number if not a string
                f = typeof c === "string" ? c.split(" ") : [ c ];
                for (;d < 4; d++) {
                    e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                }
                return e;
            }
        };
        if (!Na.test(a)) {
            n.cssHooks[a + b].set = db;
        }
    });
    n.fn.extend({
        css: function(a, b) {
            return Y(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    d = Ra(a);
                    e = b.length;
                    for (;g < e; g++) {
                        f[b[g]] = n.css(a, b[g], false, d);
                    }
                    return f;
                }
                return c !== undefined ? n.style(a, b, c) : n.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function() {
            return cb(this, true);
        },
        hide: function() {
            return cb(this);
        },
        toggle: function(a) {
            if (typeof a === "boolean") {
                return a ? this.show() : this.hide();
            }
            return this.each(function() {
                if (W(this)) {
                    n(this).show();
                } else {
                    n(this).hide();
                }
            });
        }
    });
    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a, b, c, d, e);
    }
    n.Tween = gb;
    gb.prototype = {
        constructor: gb,
        init: function(a, b, c, d, e, f) {
            this.elem = a;
            this.prop = c;
            this.easing = e || n.easing._default;
            this.options = b;
            this.start = this.now = this.cur();
            this.end = d;
            this.unit = f || (n.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = gb.propHooks[this.prop];
            return a && a.get ? a.get(this) : gb.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = gb.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration);
            } else {
                this.pos = b = a;
            }
            this.now = (this.end - this.start) * b + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }
            if (c && c.set) {
                c.set(this);
            } else {
                gb.propHooks._default.set(this);
            }
            return this;
        }
    };
    gb.prototype.init.prototype = gb.prototype;
    gb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                // Use a property on the element directly when it is not a DOM element,
                // or when there is no matching style property that exists.
                if (a.elem.nodeType !== 1 || a.elem[a.prop] != null && a.elem.style[a.prop] == null) {
                    return a.elem[a.prop];
                }
                // passing an empty string as a 3rd parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails
                // so, simple values such as "10px" are parsed to Float.
                // complex values such as "rotate(1rad)" are returned as is.
                b = n.css(a.elem, a.prop, "");
                // Empty strings, null, undefined and "auto" are converted to 0.
                return !b || b === "auto" ? 0 : b;
            },
            set: function(a) {
                // use step hook for back compat - use cssHook if its there - use .style if its
                // available and use plain properties where available
                if (n.fx.step[a.prop]) {
                    n.fx.step[a.prop](a);
                } else if (a.elem.nodeType === 1 && (a.elem.style[n.cssProps[a.prop]] != null || n.cssHooks[a.prop])) {
                    n.style(a.elem, a.prop, a.now + a.unit);
                } else {
                    a.elem[a.prop] = a.now;
                }
            }
        }
    };
    // Support: IE <=9
    // Panic based approach to setting things on disconnected nodes
    gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
        set: function(a) {
            if (a.elem.nodeType && a.elem.parentNode) {
                a.elem[a.prop] = a.now;
            }
        }
    };
    n.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        },
        _default: "swing"
    };
    n.fx = gb.prototype.init;
    // Back Compat <1.8 extension point
    n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/, kb = /queueHooks$/;
    // Animations created synchronously will run synchronously
    function lb() {
        a.setTimeout(function() {
            hb = undefined;
        });
        return hb = n.now();
    }
    // Generate parameters to create a standard animation
    function mb(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        // if we include width, step value is 1 to do all cssExpand values,
        // if we don't include width, step value is 2 to skip over Left and Right
        b = b ? 1 : 0;
        for (;e < 4; e += 2 - b) {
            c = V[e];
            d["margin" + c] = d["padding" + c] = a;
        }
        if (b) {
            d.opacity = d.width = a;
        }
        return d;
    }
    function nb(a, b, c) {
        var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length;
        for (;f < g; f++) {
            if (d = e[f].call(c, b, a)) {
                // we're done with this property
                return d;
            }
        }
    }
    function ob(a, b, c) {
        /* jshint validthis: true */
        var d, e, f, g, h, i, j, k, m = this, o = {}, p = a.style, q = a.nodeType && W(a), r = n._data(a, "fxshow");
        // handle queue: false promises
        if (!c.queue) {
            h = n._queueHooks(a, "fx");
            if (h.unqueued == null) {
                h.unqueued = 0;
                i = h.empty.fire;
                h.empty.fire = function() {
                    if (!h.unqueued) {
                        i();
                    }
                };
            }
            h.unqueued++;
            m.always(function() {
                // doing this makes sure that the complete handler will be called
                // before this completes
                m.always(function() {
                    h.unqueued--;
                    if (!n.queue(a, "fx").length) {
                        h.empty.fire();
                    }
                });
            });
        }
        // height/width overflow pass
        if (a.nodeType === 1 && ("height" in b || "width" in b)) {
            // Make sure that nothing sneaks out
            // Record all 3 overflow attributes because IE does not
            // change the overflow attribute when overflowX and
            // overflowY are set to the same value
            c.overflow = [ p.overflow, p.overflowX, p.overflowY ];
            // Set display property to inline-block for height/width
            // animations on inline elements that are having width/height animated
            j = n.css(a, "display");
            // Test default display if display is currently "none"
            k = j === "none" ? n._data(a, "olddisplay") || Ma(a.nodeName) : j;
            if (k === "inline" && n.css(a, "float") === "none") {
                // inline-level elements accept inline-block;
                // block-level elements need to be inline with layout
                if (!l.inlineBlockNeedsLayout || Ma(a.nodeName) === "inline") {
                    p.display = "inline-block";
                } else {
                    p.zoom = 1;
                }
            }
        }
        if (c.overflow) {
            p.overflow = "hidden";
            if (!l.shrinkWrapBlocks()) {
                m.always(function() {
                    p.overflow = c.overflow[0];
                    p.overflowX = c.overflow[1];
                    p.overflowY = c.overflow[2];
                });
            }
        }
        // show/hide pass
        for (d in b) {
            e = b[d];
            if (jb.exec(e)) {
                delete b[d];
                f = f || e === "toggle";
                if (e === (q ? "hide" : "show")) {
                    // If there is dataShow left over from a stopped hide or show
                    // and we are going to proceed with show, we should pretend to be hidden
                    if (e === "show" && r && r[d] !== undefined) {
                        q = true;
                    } else {
                        continue;
                    }
                }
                o[d] = r && r[d] || n.style(a, d);
            } else {
                j = undefined;
            }
        }
        if (!n.isEmptyObject(o)) {
            if (r) {
                if ("hidden" in r) {
                    q = r.hidden;
                }
            } else {
                r = n._data(a, "fxshow", {});
            }
            // store state if its toggle - enables .stop().toggle() to "reverse"
            if (f) {
                r.hidden = !q;
            }
            if (q) {
                n(a).show();
            } else {
                m.done(function() {
                    n(a).hide();
                });
            }
            m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) {
                    n.style(a, b, o[b]);
                }
            });
            for (d in o) {
                g = nb(q ? r[d] : 0, d, m);
                if (!(d in r)) {
                    r[d] = g.start;
                    if (q) {
                        g.end = g.start;
                        g.start = d === "width" || d === "height" ? 1 : 0;
                    }
                }
            }
        } else if ((j === "none" ? Ma(a.nodeName) : j) === "inline") {
            p.display = j;
        }
    }
    function pb(a, b) {
        var c, d, e, f, g;
        // camelCase, specialEasing and expand cssHook pass
        for (c in a) {
            d = n.camelCase(c);
            e = b[d];
            f = a[c];
            if (n.isArray(f)) {
                e = f[1];
                f = a[c] = f[0];
            }
            if (c !== d) {
                a[d] = f;
                delete a[c];
            }
            g = n.cssHooks[d];
            if (g && "expand" in g) {
                f = g.expand(f);
                delete a[d];
                // not quite $.extend, this wont overwrite keys already present.
                // also - reusing 'index' from above because we have the correct "name"
                for (c in f) {
                    if (!(c in a)) {
                        a[c] = f[c];
                        b[c] = e;
                    }
                }
            } else {
                b[d] = e;
            }
        }
    }
    function qb(a, b, c) {
        var d, e, f = 0, g = qb.prefilters.length, h = n.Deferred().always(function() {
            // don't match elem in the :animated selector
            delete i.elem;
        }), i = function() {
            if (e) {
                return false;
            }
            var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), // Support: Android 2.3
            // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
            d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length;
            for (;g < i; g++) {
                j.tweens[g].run(f);
            }
            h.notifyWith(a, [ j, f, c ]);
            if (f < 1 && i) {
                return c;
            } else {
                h.resolveWith(a, [ j ]);
                return false;
            }
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(true, {
                specialEasing: {},
                easing: n.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: hb || lb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                j.tweens.push(d);
                return d;
            },
            stop: function(b) {
                var c = 0, // if we are going to the end, we want to run all the tweens
                // otherwise we skip this part
                d = b ? j.tweens.length : 0;
                if (e) {
                    return this;
                }
                e = true;
                for (;c < d; c++) {
                    j.tweens[c].run(1);
                }
                // resolve when we played the last frame
                // otherwise, reject
                if (b) {
                    h.notifyWith(a, [ j, 1, 0 ]);
                    h.resolveWith(a, [ j, b ]);
                } else {
                    h.rejectWith(a, [ j, b ]);
                }
                return this;
            }
        }), k = j.props;
        pb(k, j.opts.specialEasing);
        for (;f < g; f++) {
            d = qb.prefilters[f].call(j, a, k, j.opts);
            if (d) {
                if (n.isFunction(d.stop)) {
                    n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d);
                }
                return d;
            }
        }
        n.map(k, nb, j);
        if (n.isFunction(j.opts.start)) {
            j.opts.start.call(a, j);
        }
        n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        }));
        // attach callbacks from options
        return j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    n.Animation = n.extend(qb, {
        tweeners: {
            "*": [ function(a, b) {
                var c = this.createTween(a, b);
                X(c.elem, a, U.exec(b), c);
                return c;
            } ]
        },
        tweener: function(a, b) {
            if (n.isFunction(a)) {
                b = a;
                a = [ "*" ];
            } else {
                a = a.match(G);
            }
            var c, d = 0, e = a.length;
            for (;d < e; d++) {
                c = a[d];
                qb.tweeners[c] = qb.tweeners[c] || [];
                qb.tweeners[c].unshift(b);
            }
        },
        prefilters: [ ob ],
        prefilter: function(a, b) {
            if (b) {
                qb.prefilters.unshift(a);
            } else {
                qb.prefilters.push(a);
            }
        }
    });
    n.speed = function(a, b, c) {
        var d = a && typeof a === "object" ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        d.duration = n.fx.off ? 0 : typeof d.duration === "number" ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default;
        // normalize opt.queue - true/undefined/null -> "fx"
        if (d.queue == null || d.queue === true) {
            d.queue = "fx";
        }
        // Queueing
        d.old = d.complete;
        d.complete = function() {
            if (n.isFunction(d.old)) {
                d.old.call(this);
            }
            if (d.queue) {
                n.dequeue(this, d.queue);
            }
        };
        return d;
    };
    n.fn.extend({
        fadeTo: function(a, b, c, d) {
            // show any hidden elements after setting opacity to 0
            return this.filter(W).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function() {
                // Operate on a copy of prop so per-property easing won't be lost
                var b = qb(this, n.extend({}, a), f);
                // Empty animations, or finishing resolves immediately
                if (e || n._data(this, "finish")) {
                    b.stop(true);
                }
            };
            g.finish = g;
            return e || f.queue === false ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop;
                b(c);
            };
            if (typeof a !== "string") {
                c = b;
                b = a;
                a = undefined;
            }
            if (b && a !== false) {
                this.queue(a || "fx", []);
            }
            return this.each(function() {
                var b = true, e = a != null && a + "queueHooks", f = n.timers, g = n._data(this);
                if (e) {
                    if (g[e] && g[e].stop) {
                        d(g[e]);
                    }
                } else {
                    for (e in g) {
                        if (g[e] && g[e].stop && kb.test(e)) {
                            d(g[e]);
                        }
                    }
                }
                for (e = f.length; e--; ) {
                    if (f[e].elem === this && (a == null || f[e].queue === a)) {
                        f[e].anim.stop(c);
                        b = false;
                        f.splice(e, 1);
                    }
                }
                // start the next in the queue if the last step wasn't forced
                // timers currently will call their complete callbacks, which will dequeue
                // but only if they were gotoEnd
                if (b || !c) {
                    n.dequeue(this, a);
                }
            });
        },
        finish: function(a) {
            if (a !== false) {
                a = a || "fx";
            }
            return this.each(function() {
                var b, c = n._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                // enable finishing flag on private data
                c.finish = true;
                // empty the queue first
                n.queue(this, a, []);
                if (e && e.stop) {
                    e.stop.call(this, true);
                }
                // look for any active animations, and finish them
                for (b = f.length; b--; ) {
                    if (f[b].elem === this && f[b].queue === a) {
                        f[b].anim.stop(true);
                        f.splice(b, 1);
                    }
                }
                // look for any animations in the old queue and finish them
                for (b = 0; b < g; b++) {
                    if (d[b] && d[b].finish) {
                        d[b].finish.call(this);
                    }
                }
                // turn off finishing flag
                delete c.finish;
            });
        }
    });
    n.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return a == null || typeof a === "boolean" ? c.apply(this, arguments) : this.animate(mb(b, true), a, d, e);
        };
    });
    // Generate shortcuts for custom animations
    n.each({
        slideDown: mb("show"),
        slideUp: mb("hide"),
        slideToggle: mb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    });
    n.timers = [];
    n.fx.tick = function() {
        var a, b = n.timers, c = 0;
        hb = n.now();
        for (;c < b.length; c++) {
            a = b[c];
            // Checks the timer has not already been removed
            if (!a() && b[c] === a) {
                b.splice(c--, 1);
            }
        }
        if (!b.length) {
            n.fx.stop();
        }
        hb = undefined;
    };
    n.fx.timer = function(a) {
        n.timers.push(a);
        if (a()) {
            n.fx.start();
        } else {
            n.timers.pop();
        }
    };
    n.fx.interval = 13;
    n.fx.start = function() {
        if (!ib) {
            ib = a.setInterval(n.fx.tick, n.fx.interval);
        }
    };
    n.fx.stop = function() {
        a.clearInterval(ib);
        ib = null;
    };
    n.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
    };
    // Based off of the plugin by Clint Helfers, with permission.
    // http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
    n.fn.delay = function(b, c) {
        b = n.fx ? n.fx.speeds[b] || b : b;
        c = c || "fx";
        return this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e);
            };
        });
    };
    (function() {
        var a, b = d.createElement("input"), c = d.createElement("div"), e = d.createElement("select"), f = e.appendChild(d.createElement("option"));
        // Setup
        c = d.createElement("div");
        c.setAttribute("className", "t");
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        a = c.getElementsByTagName("a")[0];
        // Support: Windows Web Apps (WWA)
        // `type` must use .setAttribute for WWA (#14901)
        b.setAttribute("type", "checkbox");
        c.appendChild(b);
        a = c.getElementsByTagName("a")[0];
        // First batch of tests.
        a.style.cssText = "top:1px";
        // Test setAttribute on camelCase class.
        // If it works, we need attrFixes when doing get/setAttribute (ie6/7)
        l.getSetAttribute = c.className !== "t";
        // Get the style information from getAttribute
        // (IE uses .cssText instead)
        l.style = /top/.test(a.getAttribute("style"));
        // Make sure that URLs aren't manipulated
        // (IE normalizes it by default)
        l.hrefNormalized = a.getAttribute("href") === "/a";
        // Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
        l.checkOn = !!b.value;
        // Make sure that a selected-by-default option has a working selected property.
        // (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
        l.optSelected = f.selected;
        // Tests for enctype support on a form (#6743)
        l.enctype = !!d.createElement("form").enctype;
        // Make sure that the options inside disabled selects aren't marked as disabled
        // (WebKit marks them as disabled)
        e.disabled = true;
        l.optDisabled = !f.disabled;
        // Support: IE8 only
        // Check if we can trust getAttribute("value")
        b = d.createElement("input");
        b.setAttribute("value", "");
        l.input = b.getAttribute("value") === "";
        // Check if an input maintains its value after becoming a radio
        b.value = "t";
        b.setAttribute("type", "radio");
        l.radioValue = b.value === "t";
    })();
    var rb = /\r/g, sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            if (!arguments.length) {
                if (e) {
                    b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()];
                    if (b && "get" in b && (c = b.get(e, "value")) !== undefined) {
                        return c;
                    }
                    c = e.value;
                    // handle most common string cases
                    // handle cases where value is null/undef or number
                    return typeof c === "string" ? c.replace(rb, "") : c == null ? "" : c;
                }
                return;
            }
            d = n.isFunction(a);
            return this.each(function(c) {
                var e;
                if (this.nodeType !== 1) {
                    return;
                }
                if (d) {
                    e = a.call(this, c, n(this).val());
                } else {
                    e = a;
                }
                // Treat null/undefined as ""; convert numbers to string
                if (e == null) {
                    e = "";
                } else if (typeof e === "number") {
                    e += "";
                } else if (n.isArray(e)) {
                    e = n.map(e, function(a) {
                        return a == null ? "" : a + "";
                    });
                }
                b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()];
                // If set returns undefined, fall back to normal setting
                if (!b || !("set" in b) || b.set(this, e, "value") === undefined) {
                    this.value = e;
                }
            });
        }
    });
    n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    // Support: IE10-11+
                    // option.text throws exceptions (#14686, #14858)
                    // Strip and collapse whitespace
                    // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                    return b != null ? b : n.trim(n.text(a)).replace(sb, " ");
                }
            },
            select: {
                get: function(a) {
                    var b, c, d = a.options, e = a.selectedIndex, f = a.type === "select-one" || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0;
                    // Loop through all the selected options
                    for (;i < h; i++) {
                        c = d[i];
                        // oldIE doesn't update selected after form reset (#2551)
                        if ((c.selected || i === e) && (// Don't return options that are disabled or in a disabled optgroup
                        l.optDisabled ? !c.disabled : c.getAttribute("disabled") === null) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            // Get the specific value for the option
                            b = n(c).val();
                            // We don't need an array for one selects
                            if (f) {
                                return b;
                            }
                            // Multi-Selects return an array
                            g.push(b);
                        }
                    }
                    return g;
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--) {
                        d = e[g];
                        if (n.inArray(n.valHooks.option.get(d), f) > -1) {
                            // Support: IE6
                            // When new option element is added to select box we need to
                            // force reflow of newly added node in order to workaround delay
                            // of initialization properties
                            try {
                                d.selected = c = true;
                            } catch (a) {
                                // Will be executed only in IE6
                                d.scrollHeight;
                            }
                        } else {
                            d.selected = false;
                        }
                    }
                    // Force browsers to behave consistently when non-matching value is set
                    if (!c) {
                        a.selectedIndex = -1;
                    }
                    return e;
                }
            }
        }
    });
    // Radios and checkboxes getter/setter
    n.each([ "radio", "checkbox" ], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                if (n.isArray(b)) {
                    return a.checked = n.inArray(n(a).val(), b) > -1;
                }
            }
        };
        if (!l.checkOn) {
            n.valHooks[this].get = function(a) {
                return a.getAttribute("value") === null ? "on" : a.value;
            };
        }
    });
    var tb, ub, vb = n.expr.attrHandle, wb = /^(?:checked|selected)$/i, xb = l.getSetAttribute, yb = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a);
            });
        }
    });
    n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            // Don't get/set attributes on text, comment and attribute nodes
            if (f === 3 || f === 8 || f === 2) {
                return;
            }
            // Fallback to prop when attributes are not supported
            if (typeof a.getAttribute === "undefined") {
                return n.prop(a, b, c);
            }
            // All attributes are lowercase
            // Grab necessary hook if one is defined
            if (f !== 1 || !n.isXMLDoc(a)) {
                b = b.toLowerCase();
                e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb);
            }
            if (c !== undefined) {
                if (c === null) {
                    n.removeAttr(a, b);
                    return;
                }
                if (e && "set" in e && (d = e.set(a, c, b)) !== undefined) {
                    return d;
                }
                a.setAttribute(b, c + "");
                return c;
            }
            if (e && "get" in e && (d = e.get(a, b)) !== null) {
                return d;
            }
            d = n.find.attr(a, b);
            // Non-existent attributes return null, we normalize to undefined
            return d == null ? undefined : d;
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && b === "radio" && n.nodeName(a, "input")) {
                        // Setting the type on a radio button after the value resets the value in IE8-9
                        // Reset value to default in case type is set after value during creation
                        var c = a.value;
                        a.setAttribute("type", b);
                        if (c) {
                            a.value = c;
                        }
                        return b;
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(G);
            if (f && a.nodeType === 1) {
                while (c = f[e++]) {
                    d = n.propFix[c] || c;
                    // Boolean attributes get special treatment (#10870)
                    if (n.expr.match.bool.test(c)) {
                        // Set corresponding property to false
                        if (yb && xb || !wb.test(c)) {
                            a[d] = false;
                        } else {
                            a[n.camelCase("default-" + c)] = a[d] = false;
                        }
                    } else {
                        n.attr(a, c, "");
                    }
                    a.removeAttribute(xb ? c : d);
                }
            }
        }
    });
    // Hooks for boolean attributes
    ub = {
        set: function(a, b, c) {
            if (b === false) {
                // Remove boolean attributes when set to false
                n.removeAttr(a, c);
            } else if (yb && xb || !wb.test(c)) {
                // IE<8 needs the *property* name
                a.setAttribute(!xb && n.propFix[c] || c, c);
            } else {
                // Support: IE<9
                // Use defaultChecked and defaultSelected for oldIE
                a[n.camelCase("default-" + c)] = a[c] = true;
            }
            return c;
        }
    };
    n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = vb[b] || n.find.attr;
        if (yb && xb || !wb.test(b)) {
            vb[b] = function(a, b, d) {
                var e, f;
                if (!d) {
                    // Avoid an infinite loop by temporarily removing this function from the getter
                    f = vb[b];
                    vb[b] = e;
                    e = c(a, b, d) != null ? b.toLowerCase() : null;
                    vb[b] = f;
                }
                return e;
            };
        } else {
            vb[b] = function(a, b, c) {
                if (!c) {
                    return a[n.camelCase("default-" + b)] ? b.toLowerCase() : null;
                }
            };
        }
    });
    // fix oldIE attroperties
    if (!yb || !xb) {
        n.attrHooks.value = {
            set: function(a, b, c) {
                if (n.nodeName(a, "input")) {
                    // Does not return so that setAttribute is also used
                    a.defaultValue = b;
                } else {
                    // Use nodeHook if defined (#1954); otherwise setAttribute is fine
                    return tb && tb.set(a, b, c);
                }
            }
        };
    }
    // IE6/7 do not support getting/setting some attributes with get/setAttribute
    if (!xb) {
        // Use this for any attribute in IE6/7
        // This fixes almost every IE6/7 issue
        tb = {
            set: function(a, b, c) {
                // Set the existing or create a new attribute node
                var d = a.getAttributeNode(c);
                if (!d) {
                    a.setAttributeNode(d = a.ownerDocument.createAttribute(c));
                }
                d.value = b += "";
                // Break association with cloned elements by also using setAttribute (#9646)
                if (c === "value" || b === a.getAttribute(c)) {
                    return b;
                }
            }
        };
        // Some attributes are constructed with empty-string values when not defined
        vb.id = vb.name = vb.coords = function(a, b, c) {
            var d;
            if (!c) {
                return (d = a.getAttributeNode(b)) && d.value !== "" ? d.value : null;
            }
        };
        // Fixing value retrieval on a button requires this module
        n.valHooks.button = {
            get: function(a, b) {
                var c = a.getAttributeNode(b);
                if (c && c.specified) {
                    return c.value;
                }
            },
            set: tb.set
        };
        // Set contenteditable to false on removals(#10429)
        // Setting to empty string throws an error as an invalid value
        n.attrHooks.contenteditable = {
            set: function(a, b, c) {
                tb.set(a, b === "" ? false : b, c);
            }
        };
        // Set width and height to auto instead of 0 on empty string( Bug #8150 )
        // This is for removals
        n.each([ "width", "height" ], function(a, b) {
            n.attrHooks[b] = {
                set: function(a, c) {
                    if (c === "") {
                        a.setAttribute(b, "auto");
                        return c;
                    }
                }
            };
        });
    }
    if (!l.style) {
        n.attrHooks.style = {
            get: function(a) {
                // Return undefined in the case of empty string
                // Note: IE uppercases css property names, but if we were to .toLowerCase()
                // .cssText, that would destroy case sensitivity in URL's, like in "background"
                return a.style.cssText || undefined;
            },
            set: function(a, b) {
                return a.style.cssText = b + "";
            }
        };
    }
    var zb = /^(?:input|select|textarea|button|object)$/i, Ab = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            a = n.propFix[a] || a;
            return this.each(function() {
                // try/catch handles cases where IE balks (such as removing a property on window)
                try {
                    this[a] = undefined;
                    delete this[a];
                } catch (a) {}
            });
        }
    });
    n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            // Don't get/set properties on text, comment and attribute nodes
            if (f === 3 || f === 8 || f === 2) {
                return;
            }
            if (f !== 1 || !n.isXMLDoc(a)) {
                // Fix name and attach hooks
                b = n.propFix[b] || b;
                e = n.propHooks[b];
            }
            if (c !== undefined) {
                if (e && "set" in e && (d = e.set(a, c, b)) !== undefined) {
                    return d;
                }
                return a[b] = c;
            }
            if (e && "get" in e && (d = e.get(a, b)) !== null) {
                return d;
            }
            return a[b];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    // elem.tabIndex doesn't always return the
                    // correct value when it hasn't been explicitly set
                    // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                    // Use proper attribute retrieval(#12072)
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    });
    // Some attributes require a special call on IE
    // http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
    if (!l.hrefNormalized) {
        // href/src property should get the full normalized URL (#10299/#12915)
        n.each([ "href", "src" ], function(a, b) {
            n.propHooks[b] = {
                get: function(a) {
                    return a.getAttribute(b, 4);
                }
            };
        });
    }
    // Support: Safari, IE9+
    // Accessing the selectedIndex property
    // forces the browser to respect setting selected
    // on the option
    // The getter ensures a default option is selected
    // when in an optgroup
    if (!l.optSelected) {
        n.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                if (b) {
                    b.selectedIndex;
                    // Make sure that it also works with optgroups, see #5701
                    if (b.parentNode) {
                        b.parentNode.selectedIndex;
                    }
                }
                return null;
            },
            set: function(a) {
                var b = a.parentNode;
                if (b) {
                    b.selectedIndex;
                    if (b.parentNode) {
                        b.parentNode.selectedIndex;
                    }
                }
            }
        };
    }
    n.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        n.propFix[this.toLowerCase()] = this;
    });
    // IE6/7 call enctype encoding
    if (!l.enctype) {
        n.propFix.enctype = "encoding";
    }
    var Bb = /[\t\r\n\f]/g;
    function Cb(a) {
        return n.attr(a, "class") || "";
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) {
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, Cb(this)));
                });
            }
            if (typeof a === "string" && a) {
                b = a.match(G) || [];
                while (c = this[i++]) {
                    e = Cb(c);
                    d = c.nodeType === 1 && (" " + e + " ").replace(Bb, " ");
                    if (d) {
                        g = 0;
                        while (f = b[g++]) {
                            if (d.indexOf(" " + f + " ") < 0) {
                                d += f + " ";
                            }
                        }
                        // only assign if different to avoid unneeded rendering.
                        h = n.trim(d);
                        if (e !== h) {
                            n.attr(c, "class", h);
                        }
                    }
                }
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) {
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, Cb(this)));
                });
            }
            if (!arguments.length) {
                return this.attr("class", "");
            }
            if (typeof a === "string" && a) {
                b = a.match(G) || [];
                while (c = this[i++]) {
                    e = Cb(c);
                    // This expression is here for better compressibility (see addClass)
                    d = c.nodeType === 1 && (" " + e + " ").replace(Bb, " ");
                    if (d) {
                        g = 0;
                        while (f = b[g++]) {
                            // Remove *all* instances
                            while (d.indexOf(" " + f + " ") > -1) {
                                d = d.replace(" " + f + " ", " ");
                            }
                        }
                        // Only assign if different to avoid unneeded rendering.
                        h = n.trim(d);
                        if (e !== h) {
                            n.attr(c, "class", h);
                        }
                    }
                }
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            if (typeof b === "boolean" && c === "string") {
                return b ? this.addClass(a) : this.removeClass(a);
            }
            if (n.isFunction(a)) {
                return this.each(function(c) {
                    n(this).toggleClass(a.call(this, c, Cb(this), b), b);
                });
            }
            return this.each(function() {
                var b, d, e, f;
                if (c === "string") {
                    // Toggle individual class names
                    d = 0;
                    e = n(this);
                    f = a.match(G) || [];
                    while (b = f[d++]) {
                        // Check each className given, space separated list
                        if (e.hasClass(b)) {
                            e.removeClass(b);
                        } else {
                            e.addClass(b);
                        }
                    }
                } else if (a === undefined || c === "boolean") {
                    b = Cb(this);
                    if (b) {
                        // store className if set
                        n._data(this, "__className__", b);
                    }
                    // If the element has a class name or if we're passed "false",
                    // then remove the whole classname (if there was one, the above saved it).
                    // Otherwise bring back whatever was previously saved (if anything),
                    // falling back to the empty string if nothing was stored.
                    n.attr(this, "class", b || a === false ? "" : n._data(this, "__className__") || "");
                }
            });
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++]) {
                if (c.nodeType === 1 && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) {
                    return true;
                }
            }
            return false;
        }
    });
    // Return jQuery for attributes-only inclusion
    n.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(a, b) {
        // Handle event binding
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    });
    n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        }
    });
    var Db = a.location;
    var Eb = n.now();
    var Fb = /\?/;
    var Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        // Attempt to parse using the native JSON parser first
        if (a.JSON && a.JSON.parse) {
            // Support: Android 2.3
            // Workaround failure to string-cast null input
            return a.JSON.parse(b + "");
        }
        var c, d = null, e = n.trim(b + "");
        // Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
        // after removing valid tokens
        return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
            // Force termination if we see a misplaced comma
            if (c && b) {
                d = 0;
            }
            // Perform no more replacements after returning to outermost depth
            if (d === 0) {
                return a;
            }
            // Commas must not follow "[", "{", or ","
            c = e || b;
            // Determine new depth
            // array/object open ("[" or "{"): depth += true - false (increment)
            // array/object close ("]" or "}"): depth += false - true (decrement)
            // other cases ("," or primitive): depth += true - true (numeric cast)
            d += !f - !e;
            // Remove this token
            return "";
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b);
    };
    // Cross-browser xml parsing
    n.parseXML = function(b) {
        var c, d;
        if (!b || typeof b !== "string") {
            return null;
        }
        try {
            if (a.DOMParser) {
                // Standard
                d = new a.DOMParser();
                c = d.parseFromString(b, "text/xml");
            } else {
                // IE
                c = new a.ActiveXObject("Microsoft.XMLDOM");
                c.async = "false";
                c.loadXML(b);
            }
        } catch (a) {
            c = undefined;
        }
        if (!c || !c.documentElement || c.getElementsByTagName("parsererror").length) {
            n.error("Invalid XML: " + b);
        }
        return c;
    };
    var Hb = /#.*$/, Ib = /([?&])_=[^&]*/, // IE leaves an \r character at EOL
    Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, // #7653, #8125, #8152: local protocol detection
    Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Lb = /^(?:GET|HEAD)$/, Mb = /^\/\//, Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, /* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
    Ob = {}, /* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
    Pb = {}, // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
    Qb = "*/".concat("*"), // Document location
    Rb = Db.href, // Segment location into parts
    Sb = Nb.exec(Rb.toLowerCase()) || [];
    // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function Tb(a) {
        // dataTypeExpression is optional and defaults to "*"
        return function(b, c) {
            if (typeof b !== "string") {
                c = b;
                b = "*";
            }
            var d, e = 0, f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c)) {
                // For each dataType in the dataTypeExpression
                while (d = f[e++]) {
                    // Prepend if requested
                    if (d.charAt(0) === "+") {
                        d = d.slice(1) || "*";
                        (a[d] = a[d] || []).unshift(c);
                    } else {
                        (a[d] = a[d] || []).push(c);
                    }
                }
            }
        };
    }
    // Base inspection function for prefilters and transports
    function Ub(a, b, c, d) {
        var e = {}, f = a === Pb;
        function g(h) {
            var i;
            e[h] = true;
            n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                if (typeof j === "string" && !f && !e[j]) {
                    b.dataTypes.unshift(j);
                    g(j);
                    return false;
                } else if (f) {
                    return !(i = j);
                }
            });
            return i;
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    // A special extend for ajax options
    // that takes "flat" options (not to be deep extended)
    // Fixes #9887
    function Vb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) {
            if (b[d] !== undefined) {
                (e[d] ? a : c || (c = {}))[d] = b[d];
            }
        }
        if (c) {
            n.extend(true, a, c);
        }
        return a;
    }
    /* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
    function Wb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        // Remove auto dataType and get content-type in the process
        while (i[0] === "*") {
            i.shift();
            if (e === undefined) {
                e = a.mimeType || b.getResponseHeader("Content-Type");
            }
        }
        // Check if we're dealing with a known content-type
        if (e) {
            for (g in h) {
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break;
                }
            }
        }
        // Check to see if we have a response for the expected dataType
        if (i[0] in c) {
            f = i[0];
        } else {
            // Try convertible dataTypes
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break;
                }
                if (!d) {
                    d = g;
                }
            }
            // Or just use first one
            f = f || d;
        }
        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if (f) {
            if (f !== i[0]) {
                i.unshift(f);
            }
            return c[f];
        }
    }
    /* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
    function Xb(a, b, c, d) {
        var e, f, g, h, i, j = {}, // Work with a copy of dataTypes in case we need to modify it for conversion
        k = a.dataTypes.slice();
        // Create converters map with lowercased keys
        if (k[1]) {
            for (g in a.converters) {
                j[g.toLowerCase()] = a.converters[g];
            }
        }
        f = k.shift();
        // Convert to each sequential dataType
        while (f) {
            if (a.responseFields[f]) {
                c[a.responseFields[f]] = b;
            }
            // Apply the dataFilter if provided
            if (!i && d && a.dataFilter) {
                b = a.dataFilter(b, a.dataType);
            }
            i = f;
            f = k.shift();
            if (f) {
                // There's only work to do if current dataType is non-auto
                if (f === "*") {
                    f = i;
                } else if (i !== "*" && i !== f) {
                    // Seek a direct converter
                    g = j[i + " " + f] || j["* " + f];
                    // If none found, seek a pair
                    if (!g) {
                        for (e in j) {
                            // If conv2 outputs current
                            h = e.split(" ");
                            if (h[1] === f) {
                                // If prev can be converted to accepted input
                                g = j[i + " " + h[0]] || j["* " + h[0]];
                                if (g) {
                                    // Condense equivalence converters
                                    if (g === true) {
                                        g = j[e];
                                    } else if (j[e] !== true) {
                                        f = h[0];
                                        k.unshift(h[1]);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    // Apply converter (if not an equivalence)
                    if (g !== true) {
                        // Unless errors are allowed to bubble, catch and return them
                        if (g && a["throws"]) {
                            // jscs:ignore requireDotNotation
                            b = g(b);
                        } else {
                            try {
                                b = g(b);
                            } catch (a) {
                                return {
                                    state: "parsererror",
                                    error: g ? a : "No conversion from " + i + " to " + f
                                };
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    n.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rb,
            type: "GET",
            isLocal: Kb.test(Sb[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
            accepts: {
                "*": Qb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
                // Convert anything to text
                "* text": String,
                // Text to html (true = no transformation)
                "text html": true,
                // Evaluate text as a json expression
                "text json": n.parseJSON,
                // Parse text as xml
                "text xml": n.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
                url: true,
                context: true
            }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(a, b) {
            // Building a settings object
            // Extending ajaxSettings
            return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a);
        },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        // Main method
        ajax: function(b, c) {
            // If url is an object, simulate pre-1.5 signature
            if (typeof b === "object") {
                c = b;
                b = undefined;
            }
            // Force options to be an object
            c = c || {};
            var // Cross-domain detection vars
            d, // Loop variable
            e, // URL without anti-cache param
            f, // Response headers as string
            g, // timeout handle
            h, // To know if global events are to be dispatched
            i, j, // Response headers
            k, // Create the final options object
            l = n.ajaxSetup({}, c), // Callbacks context
            m = l.context || l, // Context for global events is callbackContext if it is a DOM node or jQuery collection
            o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event, // Deferreds
            p = n.Deferred(), q = n.Callbacks("once memory"), // Status-dependent callbacks
            r = l.statusCode || {}, // Headers (they are sent all at once)
            s = {}, t = {}, // The jqXHR state
            u = 0, // Default abort message
            v = "canceled", // Fake xhr
            w = {
                readyState: 0,
                // Builds headers hashtable if needed
                getResponseHeader: function(a) {
                    var b;
                    if (u === 2) {
                        if (!k) {
                            k = {};
                            while (b = Jb.exec(g)) {
                                k[b[1].toLowerCase()] = b[2];
                            }
                        }
                        b = k[a.toLowerCase()];
                    }
                    return b == null ? null : b;
                },
                // Raw string
                getAllResponseHeaders: function() {
                    return u === 2 ? g : null;
                },
                // Caches the header
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    if (!u) {
                        a = t[c] = t[c] || a;
                        s[a] = b;
                    }
                    return this;
                },
                // Overrides response content-type header
                overrideMimeType: function(a) {
                    if (!u) {
                        l.mimeType = a;
                    }
                    return this;
                },
                // Status-dependent callbacks
                statusCode: function(a) {
                    var b;
                    if (a) {
                        if (u < 2) {
                            for (b in a) {
                                // Lazy-add the new callback in a way that preserves old ones
                                r[b] = [ r[b], a[b] ];
                            }
                        } else {
                            // Execute the appropriate callbacks
                            w.always(a[w.status]);
                        }
                    }
                    return this;
                },
                // Cancel the request
                abort: function(a) {
                    var b = a || v;
                    if (j) {
                        j.abort(b);
                    }
                    x(0, b);
                    return this;
                }
            };
            // Attach deferreds
            p.promise(w).complete = q.add;
            w.success = w.done;
            w.error = w.fail;
            // Remove hash character (#7531: and string promotion)
            // Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
            // Handle falsy url in the settings object (#10093: consistency with old signature)
            // We also use the url parameter if available
            l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//");
            // Alias method option to type as per ticket #12004
            l.type = c.method || c.type || l.method || l.type;
            // Extract dataTypes list
            l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [ "" ];
            // A cross-domain request is in order when we have a protocol:host:port mismatch
            if (l.crossDomain == null) {
                d = Nb.exec(l.url.toLowerCase());
                l.crossDomain = !!(d && (d[1] !== Sb[1] || d[2] !== Sb[2] || (d[3] || (d[1] === "http:" ? "80" : "443")) !== (Sb[3] || (Sb[1] === "http:" ? "80" : "443"))));
            }
            // Convert data if not already a string
            if (l.data && l.processData && typeof l.data !== "string") {
                l.data = n.param(l.data, l.traditional);
            }
            // Apply prefilters
            Ub(Ob, l, c, w);
            // If request was aborted inside a prefilter, stop there
            if (u === 2) {
                return w;
            }
            // We can fire global events as of now if asked to
            // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
            i = n.event && l.global;
            // Watch for a new set of requests
            if (i && n.active++ === 0) {
                n.event.trigger("ajaxStart");
            }
            // Uppercase the type
            l.type = l.type.toUpperCase();
            // Determine if request has content
            l.hasContent = !Lb.test(l.type);
            // Save the URL in case we're toying with the If-Modified-Since
            // and/or If-None-Match header later on
            f = l.url;
            // More options handling for requests with no content
            if (!l.hasContent) {
                // If data is available, append data to url
                if (l.data) {
                    f = l.url += (Fb.test(f) ? "&" : "?") + l.data;
                    // #9682: remove data so that it's not used in an eventual retry
                    delete l.data;
                }
                // Add anti-cache in url if needed
                if (l.cache === false) {
                    l.url = Ib.test(f) ? // If there is already a '_' parameter, set its value
                    f.replace(Ib, "$1_=" + Eb++) : // Otherwise add one to the end
                    f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++;
                }
            }
            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if (l.ifModified) {
                if (n.lastModified[f]) {
                    w.setRequestHeader("If-Modified-Since", n.lastModified[f]);
                }
                if (n.etag[f]) {
                    w.setRequestHeader("If-None-Match", n.etag[f]);
                }
            }
            // Set the correct header, if data is being sent
            if (l.data && l.hasContent && l.contentType !== false || c.contentType) {
                w.setRequestHeader("Content-Type", l.contentType);
            }
            // Set the Accepts header for the server, depending on the dataType
            w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
            // Check for headers option
            for (e in l.headers) {
                w.setRequestHeader(e, l.headers[e]);
            }
            // Allow custom headers/mimetypes and early abort
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === false || u === 2)) {
                // Abort if not done already and return
                return w.abort();
            }
            // aborting is no longer a cancellation
            v = "abort";
            // Install callbacks on deferreds
            for (e in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                w[e](l[e]);
            }
            // Get transport
            j = Ub(Pb, l, c, w);
            // If no transport, we auto-abort
            if (!j) {
                x(-1, "No Transport");
            } else {
                w.readyState = 1;
                // Send global event
                if (i) {
                    o.trigger("ajaxSend", [ w, l ]);
                }
                // If request was aborted inside ajaxSend, stop there
                if (u === 2) {
                    return w;
                }
                // Timeout
                if (l.async && l.timeout > 0) {
                    h = a.setTimeout(function() {
                        w.abort("timeout");
                    }, l.timeout);
                }
                try {
                    u = 1;
                    j.send(s, x);
                } catch (a) {
                    // Propagate exception as error if not done
                    if (u < 2) {
                        x(-1, a);
                    } else {
                        throw a;
                    }
                }
            }
            // Callback for when everything is done
            function x(b, c, d, e) {
                var k, s, t, v, x, y = c;
                // Called once
                if (u === 2) {
                    return;
                }
                // State is "done" now
                u = 2;
                // Clear timeout if it exists
                if (h) {
                    a.clearTimeout(h);
                }
                // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                j = undefined;
                // Cache response headers
                g = e || "";
                // Set readyState
                w.readyState = b > 0 ? 4 : 0;
                // Determine if successful
                k = b >= 200 && b < 300 || b === 304;
                // Get response data
                if (d) {
                    v = Wb(l, w, d);
                }
                // Convert no matter what (that way responseXXX fields are always set)
                v = Xb(l, v, w, k);
                // If successful, handle type chaining
                if (k) {
                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if (l.ifModified) {
                        x = w.getResponseHeader("Last-Modified");
                        if (x) {
                            n.lastModified[f] = x;
                        }
                        x = w.getResponseHeader("etag");
                        if (x) {
                            n.etag[f] = x;
                        }
                    }
                    // if no content
                    if (b === 204 || l.type === "HEAD") {
                        y = "nocontent";
                    } else if (b === 304) {
                        y = "notmodified";
                    } else {
                        y = v.state;
                        s = v.data;
                        t = v.error;
                        k = !t;
                    }
                } else {
                    // We extract error from statusText
                    // then normalize statusText and status for non-aborts
                    t = y;
                    if (b || !y) {
                        y = "error";
                        if (b < 0) {
                            b = 0;
                        }
                    }
                }
                // Set data for the fake xhr object
                w.status = b;
                w.statusText = (c || y) + "";
                // Success/Error
                if (k) {
                    p.resolveWith(m, [ s, y, w ]);
                } else {
                    p.rejectWith(m, [ w, y, t ]);
                }
                // Status-dependent callbacks
                w.statusCode(r);
                r = undefined;
                if (i) {
                    o.trigger(k ? "ajaxSuccess" : "ajaxError", [ w, l, k ? s : t ]);
                }
                // Complete
                q.fireWith(m, [ w, y ]);
                if (i) {
                    o.trigger("ajaxComplete", [ w, l ]);
                    // Handle the global AJAX counter
                    if (!--n.active) {
                        n.event.trigger("ajaxStop");
                    }
                }
            }
            return w;
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return n.get(a, undefined, b, "script");
        }
    });
    n.each([ "get", "post" ], function(a, b) {
        n[b] = function(a, c, d, e) {
            // shift arguments if data argument was omitted
            if (n.isFunction(c)) {
                e = e || d;
                d = c;
                c = undefined;
            }
            // The url can be an options object (which then must have .url)
            return n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a));
        };
    });
    n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            // Make this explicit, since user can override this through ajaxSetup (#11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            throws: true
        });
    };
    n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a)) {
                return this.each(function(b) {
                    n(this).wrapAll(a.call(this, b));
                });
            }
            if (this[0]) {
                // The elements to wrap the target around
                var b = n(a, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    b.insertBefore(this[0]);
                }
                b.map(function() {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) {
                        a = a.firstChild;
                    }
                    return a;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(a) {
            if (n.isFunction(a)) {
                return this.each(function(b) {
                    n(this).wrapInner(a.call(this, b));
                });
            }
            return this.each(function() {
                var b = n(this), c = b.contents();
                if (c.length) {
                    c.wrapAll(a);
                } else {
                    b.append(a);
                }
            });
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!n.nodeName(this, "body")) {
                    n(this).replaceWith(this.childNodes);
                }
            }).end();
        }
    });
    function Yb(a) {
        return a.style && a.style.display || n.css(a, "display");
    }
    function Zb(a) {
        // Disconnected elements are considered hidden
        if (!n.contains(a.ownerDocument || d, a)) {
            return true;
        }
        while (a && a.nodeType === 1) {
            if (Yb(a) === "none" || a.type === "hidden") {
                return true;
            }
            a = a.parentNode;
        }
        return false;
    }
    n.expr.filters.hidden = function(a) {
        // Support: Opera <= 12.12
        // Opera reports offsetWidths and offsetHeights less than zero on some elements
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a);
    };
    n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a);
    };
    var $b = /%20/g, _b = /\[\]$/, ac = /\r?\n/g, bc = /^(?:submit|button|image|reset|file)$/i, cc = /^(?:input|select|textarea|keygen)/i;
    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b)) {
            // Serialize array item.
            n.each(b, function(b, e) {
                if (c || _b.test(a)) {
                    // Treat each array item as a scalar.
                    d(a, e);
                } else {
                    // Item is non-scalar (array or object), encode its numeric index.
                    dc(a + "[" + (typeof e === "object" && e != null ? b : "") + "]", e, c, d);
                }
            });
        } else if (!c && n.type(b) === "object") {
            // Serialize object item.
            for (e in b) {
                dc(a + "[" + e + "]", b[e], c, d);
            }
        } else {
            // Serialize scalar item.
            d(a, b);
        }
    }
    // Serialize an array of form elements or a set of
    // key/values into a query string
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            // If value is a function, invoke it and return its value
            b = n.isFunction(b) ? b() : b == null ? "" : b;
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        // Set traditional to true for jQuery <= 1.3.2 behavior.
        if (b === undefined) {
            b = n.ajaxSettings && n.ajaxSettings.traditional;
        }
        // If an array was passed in, assume that it is an array of form elements.
        if (n.isArray(a) || a.jquery && !n.isPlainObject(a)) {
            // Serialize the form elements
            n.each(a, function() {
                e(this.name, this.value);
            });
        } else {
            // If traditional, encode the "old" way (the way 1.3.2 or older
            // did it), otherwise encode params recursively.
            for (c in a) {
                dc(c, a[c], b, e);
            }
        }
        // Return the resulting serialization
        return d.join("&").replace($b, "+");
    };
    n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                // Can add propHook for "elements" to filter or add form elements
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                // Use .is(":disabled") so that fieldset[disabled] works
                return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a));
            }).map(function(a, b) {
                var c = n(this).val();
                return c == null ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ac, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(ac, "\r\n")
                };
            }).get();
        }
    });
    // Create the request object
    // (This is still attached to ajaxSettings for backward compatibility)
    n.ajaxSettings.xhr = a.ActiveXObject !== undefined ? // Support: IE6-IE8
    function() {
        // XHR cannot access local files, always use ActiveX for that case
        if (this.isLocal) {
            return ic();
        }
        // Support: IE 9-11
        // IE seems to error on cross-domain PATCH requests when ActiveX XHR
        // is used. In IE 9+ always use the native XHR.
        // Note: this condition won't catch Edge as it doesn't define
        // document.documentMode but it also doesn't support ActiveX so it won't
        // reach this code.
        if (d.documentMode > 8) {
            return hc();
        }
        // Support: IE<9
        // oldIE XHR does not support non-RFC2616 methods (#13240)
        // See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
        // and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
        // Although this check for six methods instead of eight
        // since IE also does not support "trace" and "connect"
        return /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic();
    } : // For all other browsers, use the standard XMLHttpRequest object
    hc;
    var ec = 0, fc = {}, gc = n.ajaxSettings.xhr();
    // Support: IE<10
    // Open requests must be manually aborted on unload (#5280)
    // See https://support.microsoft.com/kb/2856746 for more info
    if (a.attachEvent) {
        a.attachEvent("onunload", function() {
            for (var a in fc) {
                fc[a](undefined, true);
            }
        });
    }
    // Determine support properties
    l.cors = !!gc && "withCredentials" in gc;
    gc = l.ajax = !!gc;
    // Create transport if the browser can provide an xhr
    if (gc) {
        n.ajaxTransport(function(b) {
            // Cross domain only allowed if supported through XMLHttpRequest
            if (!b.crossDomain || l.cors) {
                var c;
                return {
                    send: function(d, e) {
                        var f, g = b.xhr(), h = ++ec;
                        // Open the socket
                        g.open(b.type, b.url, b.async, b.username, b.password);
                        // Apply custom fields if provided
                        if (b.xhrFields) {
                            for (f in b.xhrFields) {
                                g[f] = b.xhrFields[f];
                            }
                        }
                        // Override mime type if needed
                        if (b.mimeType && g.overrideMimeType) {
                            g.overrideMimeType(b.mimeType);
                        }
                        // X-Requested-With header
                        // For cross-domain requests, seeing as conditions for a preflight are
                        // akin to a jigsaw puzzle, we simply never set it to be sure.
                        // (it can always be set on a per-request basis or even using ajaxSetup)
                        // For same-domain requests, won't change header if already provided.
                        if (!b.crossDomain && !d["X-Requested-With"]) {
                            d["X-Requested-With"] = "XMLHttpRequest";
                        }
                        // Set headers
                        for (f in d) {
                            // Support: IE<9
                            // IE's ActiveXObject throws a 'Type Mismatch' exception when setting
                            // request header to a null-value.
                            //
                            // To keep consistent with other XHR implementations, cast the value
                            // to string and ignore `undefined`.
                            if (d[f] !== undefined) {
                                g.setRequestHeader(f, d[f] + "");
                            }
                        }
                        // Do send the request
                        // This may raise an exception which is actually
                        // handled in jQuery.ajax (so no try/catch here)
                        g.send(b.hasContent && b.data || null);
                        // Listener
                        c = function(a, d) {
                            var f, i, j;
                            // Was never called and is aborted or complete
                            if (c && (d || g.readyState === 4)) {
                                // Clean up
                                delete fc[h];
                                c = undefined;
                                g.onreadystatechange = n.noop;
                                // Abort manually if needed
                                if (d) {
                                    if (g.readyState !== 4) {
                                        g.abort();
                                    }
                                } else {
                                    j = {};
                                    f = g.status;
                                    // Support: IE<10
                                    // Accessing binary-data responseText throws an exception
                                    // (#11426)
                                    if (typeof g.responseText === "string") {
                                        j.text = g.responseText;
                                    }
                                    // Firefox throws an exception when accessing
                                    // statusText for faulty cross-domain requests
                                    try {
                                        i = g.statusText;
                                    } catch (a) {
                                        // We normalize with Webkit giving an empty statusText
                                        i = "";
                                    }
                                    // Filter status for non standard behaviors
                                    // If the request is local and we have data: assume a success
                                    // (success with no data won't get notified, that's the best we
                                    // can do given current implementations)
                                    if (!f && b.isLocal && !b.crossDomain) {
                                        f = j.text ? 200 : 404;
                                    } else if (f === 1223) {
                                        f = 204;
                                    }
                                }
                            }
                            // Call complete if needed
                            if (j) {
                                e(f, i, j, g.getAllResponseHeaders());
                            }
                        };
                        // Do send the request
                        // `xhr.send` may raise an exception, but it will be
                        // handled in jQuery.ajax (so no try/catch here)
                        if (!b.async) {
                            // If we're in sync mode we fire the callback
                            c();
                        } else if (g.readyState === 4) {
                            // (IE6 & IE7) if it's in cache and has been
                            // retrieved directly we need to fire the callback
                            a.setTimeout(c);
                        } else {
                            // Register the callback, but delay it in case `xhr.send` throws
                            // Add to the list of active xhr callbacks
                            g.onreadystatechange = fc[h] = c;
                        }
                    },
                    abort: function() {
                        if (c) {
                            c(undefined, true);
                        }
                    }
                };
            }
        });
    }
    // Functions to create xhrs
    function hc() {
        try {
            return new a.XMLHttpRequest();
        } catch (a) {}
    }
    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP");
        } catch (a) {}
    }
    // Install script dataType
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                n.globalEval(a);
                return a;
            }
        }
    });
    // Handle cache's special case and global
    n.ajaxPrefilter("script", function(a) {
        if (a.cache === undefined) {
            a.cache = false;
        }
        if (a.crossDomain) {
            a.type = "GET";
            a.global = false;
        }
    });
    // Bind script tag hack transport
    n.ajaxTransport("script", function(a) {
        // This transport only deals with cross domain requests
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function(e, f) {
                    b = d.createElement("script");
                    b.async = true;
                    if (a.scriptCharset) {
                        b.charset = a.scriptCharset;
                    }
                    b.src = a.url;
                    // Attach handlers for all browsers
                    b.onload = b.onreadystatechange = function(a, c) {
                        if (c || !b.readyState || /loaded|complete/.test(b.readyState)) {
                            // Handle memory leak in IE
                            b.onload = b.onreadystatechange = null;
                            // Remove the script
                            if (b.parentNode) {
                                b.parentNode.removeChild(b);
                            }
                            // Dereference the script
                            b = null;
                            // Callback if not abort
                            if (!c) {
                                f(200, "success");
                            }
                        }
                    };
                    // Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
                    // Use native DOM manipulation to avoid our domManip AJAX trickery
                    c.insertBefore(b, c.firstChild);
                },
                abort: function() {
                    if (b) {
                        b.onload(undefined, true);
                    }
                }
            };
        }
    });
    var jc = [], kc = /(=)\?(?=&|$)|\?\?/;
    // Default jsonp settings
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = jc.pop() || n.expando + "_" + Eb++;
            this[a] = true;
            return a;
        }
    });
    // Detect, normalize options and install callbacks for jsonp requests
    n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== false && (kc.test(b.url) ? "url" : typeof b.data === "string" && (b.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && kc.test(b.data) && "data");
        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        if (h || b.dataTypes[0] === "jsonp") {
            // Get callback name, remembering preexisting value associated with it
            e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback;
            // Insert callback into url or form data
            if (h) {
                b[h] = b[h].replace(kc, "$1" + e);
            } else if (b.jsonp !== false) {
                b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e;
            }
            // Use data converter to retrieve json after script execution
            b.converters["script json"] = function() {
                if (!g) {
                    n.error(e + " was not called");
                }
                return g[0];
            };
            // force json dataType
            b.dataTypes[0] = "json";
            // Install callback
            f = a[e];
            a[e] = function() {
                g = arguments;
            };
            // Clean-up function (fires after converters)
            d.always(function() {
                // If previous value didn't exist - remove it
                if (f === undefined) {
                    n(a).removeProp(e);
                } else {
                    a[e] = f;
                }
                // Save back as free
                if (b[e]) {
                    // make sure that re-using the options doesn't screw things around
                    b.jsonpCallback = c.jsonpCallback;
                    // save the callback name for future use
                    jc.push(e);
                }
                // Call if it was a function and we have a response
                if (g && n.isFunction(f)) {
                    f(g[0]);
                }
                g = f = undefined;
            });
            // Delegate to script
            return "script";
        }
    });
    // data: string of html
    // context (optional): If specified, the fragment will be created in this context,
    // defaults to document
    // keepScripts (optional): If true, will include scripts passed in the html string
    n.parseHTML = function(a, b, c) {
        if (!a || typeof a !== "string") {
            return null;
        }
        if (typeof b === "boolean") {
            c = b;
            b = false;
        }
        b = b || d;
        var e = x.exec(a), f = !c && [];
        // Single tag
        if (e) {
            return [ b.createElement(e[1]) ];
        }
        e = ja([ a ], b, f);
        if (f && f.length) {
            n(f).remove();
        }
        return n.merge([], e.childNodes);
    };
    // Keep a copy of the old load method
    var lc = n.fn.load;
    /**
 * Load a url into a page
 */
    n.fn.load = function(a, b, c) {
        if (typeof a !== "string" && lc) {
            return lc.apply(this, arguments);
        }
        var d, e, f, g = this, h = a.indexOf(" ");
        if (h > -1) {
            d = n.trim(a.slice(h, a.length));
            a = a.slice(0, h);
        }
        // If it's a function
        if (n.isFunction(b)) {
            // We assume that it's the callback
            c = b;
            b = undefined;
        } else if (b && typeof b === "object") {
            e = "POST";
        }
        // If we have elements to modify, make the request
        if (g.length > 0) {
            n.ajax({
                url: a,
                // If "type" variable is undefined, then "GET" method will be used.
                // Make value of this field explicit since
                // user can override it through ajaxSetup method
                type: e || "GET",
                dataType: "html",
                data: b
            }).done(function(a) {
                // Save response for use in complete callback
                f = arguments;
                g.html(d ? // If a selector was specified, locate the right elements in a dummy div
                // Exclude scripts to avoid IE 'Permission Denied' errors
                n("<div>").append(n.parseHTML(a)).find(d) : // Otherwise use the full result
                a);
            }).always(c && function(a, b) {
                g.each(function() {
                    c.apply(this, f || [ a.responseText, b, a ]);
                });
            });
        }
        return this;
    };
    // Attach a bunch of functions for handling common AJAX events
    n.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a);
        };
    });
    n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem;
        }).length;
    };
    /**
 * Gets a window from an element
 */
    function mc(a) {
        return n.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : false;
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            // set position first, in-case top/left are set even on static elem
            if (k === "static") {
                a.style.position = "relative";
            }
            h = l.offset();
            f = n.css(a, "top");
            i = n.css(a, "left");
            j = (k === "absolute" || k === "fixed") && n.inArray("auto", [ f, i ]) > -1;
            // need to be able to calculate position if either top or left
            // is auto and position is either absolute or fixed
            if (j) {
                d = l.position();
                g = d.top;
                e = d.left;
            } else {
                g = parseFloat(f) || 0;
                e = parseFloat(i) || 0;
            }
            if (n.isFunction(b)) {
                // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
                b = b.call(a, c, n.extend({}, h));
            }
            if (b.top != null) {
                m.top = b.top - h.top + g;
            }
            if (b.left != null) {
                m.left = b.left - h.left + e;
            }
            if ("using" in b) {
                b.using.call(a, m);
            } else {
                l.css(m);
            }
        }
    };
    n.fn.extend({
        offset: function(a) {
            if (arguments.length) {
                return a === undefined ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b);
                });
            }
            var b, c, d = {
                top: 0,
                left: 0
            }, e = this[0], f = e && e.ownerDocument;
            if (!f) {
                return;
            }
            b = f.documentElement;
            // Make sure it's not a disconnected DOM node
            if (!n.contains(b, e)) {
                return d;
            }
            // If we don't have gBCR, just use 0,0 rather than error
            // BlackBerry 5, iOS 3 (original iPhone)
            if (typeof e.getBoundingClientRect !== "undefined") {
                d = e.getBoundingClientRect();
            }
            c = mc(f);
            return {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            };
        },
        position: function() {
            if (!this[0]) {
                return;
            }
            var a, b, c = {
                top: 0,
                left: 0
            }, d = this[0];
            // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
            // because it is its only offset parent
            if (n.css(d, "position") === "fixed") {
                // we assume that getBoundingClientRect is available when computed position is fixed
                b = d.getBoundingClientRect();
            } else {
                // Get *real* offsetParent
                a = this.offsetParent();
                // Get correct offsets
                b = this.offset();
                if (!n.nodeName(a[0], "html")) {
                    c = a.offset();
                }
                // Add offsetParent borders
                c.top += n.css(a[0], "borderTopWidth", true);
                c.left += n.css(a[0], "borderLeftWidth", true);
            }
            // Subtract parent offsets and element margins
            // note: when an element has margin: auto the offsetLeft and marginLeft
            // are the same in Safari causing offset.left to incorrectly be 0
            return {
                top: b.top - c.top - n.css(d, "marginTop", true),
                left: b.left - c.left - n.css(d, "marginLeft", true)
            };
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && (!n.nodeName(a, "html") && n.css(a, "position") === "static")) {
                    a = a.offsetParent;
                }
                return a || Qa;
            });
        }
    });
    // Create scrollLeft and scrollTop methods
    n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return Y(this, function(a, d, e) {
                var f = mc(a);
                if (e === undefined) {
                    return f ? b in f ? f[b] : f.document.documentElement[d] : a[d];
                }
                if (f) {
                    f.scrollTo(!c ? e : n(f).scrollLeft(), c ? e : n(f).scrollTop());
                } else {
                    a[d] = e;
                }
            }, a, d, arguments.length, null);
        };
    });
    // Support: Safari<7-8+, Chrome<37-44+
    // Add the top/left cssHooks using jQuery.fn.position
    // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
    // getComputedStyle returns percent when specified for top/left/bottom/right
    // rather than make the css module depend on the offset module, we just check for it here
    n.each([ "top", "left" ], function(a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
            if (c) {
                c = Sa(a, b);
                // if curCSS returns percentage, fallback to offset
                return Oa.test(c) ? n(a).position()[b] + "px" : c;
            }
        });
    });
    // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            // margin is only for outerHeight, outerWidth
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || typeof d !== "boolean"), g = c || (d === true || e === true ? "margin" : "border");
                return Y(this, function(b, c, d) {
                    var e;
                    if (n.isWindow(b)) {
                        // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
                        // isn't a whole lot we can do. See pull request at this URL for discussion:
                        // https://github.com/jquery/jquery/pull/764
                        return b.document.documentElement["client" + a];
                    }
                    // Get document width or height
                    if (b.nodeType === 9) {
                        e = b.documentElement;
                        // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                        // whichever is greatest
                        // unfortunately, this causes bug #3838 in IE6/8 only,
                        // but there is currently no good, small way to fix it.
                        return Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a]);
                    }
                    // Get width or height on the element, requesting but not forcing parseFloat
                    // Set width or height on the element
                    return d === undefined ? n.css(b, c, g) : n.style(b, c, d, g);
                }, b, f ? d : undefined, f, null);
            };
        });
    });
    n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            // ( namespace ) or ( selector, types [, fn] )
            return arguments.length === 1 ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    // The number of elements contained in the matched element set
    n.fn.size = function() {
        return this.length;
    };
    n.fn.andSelf = n.fn.addBack;
    // Register as a named AMD module, since jQuery can be concatenated with other
    // files that may use define, but not via a proper concatenation script that
    // understands anonymous AMD modules. A named AMD is safest and most robust
    // way to register. Lowercase jquery is used because AMD module names are
    // derived from file names, and jQuery is normally delivered in a lowercase
    // file name. Do this after creating the global so that if an AMD module wants
    // to call noConflict to hide this version of jQuery, it will work.
    // Note that for maximum portability, libraries that are not jQuery should
    // declare themselves as anonymous modules, and avoid setting a global if an
    // AMD loader is present. jQuery is a special case. For more information, see
    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
            return n;
        });
    }
    var // Map over jQuery in case of overwrite
    nc = a.jQuery, // Map over the $ in case of overwrite
    oc = a.$;
    n.noConflict = function(b) {
        if (a.$ === n) {
            a.$ = oc;
        }
        if (b && a.jQuery === n) {
            a.jQuery = nc;
        }
        return n;
    };
    // Expose jQuery and $ identifiers, even in
    // AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
    // and CommonJS for browser emulators (#13566)
    if (!b) {
        a.jQuery = a.$ = n;
    }
    return n;
});

(function(a, b, c, d) {
    "use strict";
    var e = c("html"), f = c(a), g = c(b), h = c.fancybox = function() {
        h.open.apply(this, arguments);
    }, i = navigator.userAgent.match(/msie/i), j = null, k = b.createTouch !== d, l = function(a) {
        return a && a.hasOwnProperty && a instanceof c;
    }, m = function(a) {
        return a && c.type(a) === "string";
    }, n = function(a) {
        return m(a) && a.indexOf("%") > 0;
    }, o = function(a) {
        return a && !(a.style.overflow && a.style.overflow === "hidden") && (a.clientWidth && a.scrollWidth > a.clientWidth || a.clientHeight && a.scrollHeight > a.clientHeight);
    }, p = function(a, b) {
        var c = parseInt(a, 10) || 0;
        if (b && n(a)) {
            c = h.getViewport()[b] / 100 * c;
        }
        return Math.ceil(c);
    }, q = function(a, b) {
        return p(a, b) + "px";
    };
    c.extend(h, {
        // The current version of fancyBox
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            // Set to 2 for retina display support
            autoSize: true,
            autoHeight: false,
            autoWidth: false,
            autoResize: true,
            autoCenter: !k,
            fitToView: true,
            aspectRatio: false,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            // 'auto', 'yes' or 'no'
            wrapCSS: "",
            arrows: true,
            closeBtn: true,
            closeClick: false,
            nextClick: false,
            mouseWheel: true,
            autoPlay: false,
            playSpeed: 3e3,
            preload: 3,
            modal: false,
            loop: true,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": true
                }
            },
            iframe: {
                scrolling: "auto",
                preload: true
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    // enter
                    34: "up",
                    // page down
                    39: "left",
                    // right arrow
                    40: "up"
                },
                prev: {
                    8: "right",
                    // backspace
                    33: "down",
                    // page up
                    37: "right",
                    // left arrow
                    38: "down"
                },
                close: [ 27 ],
                // escape key
                play: [ 32 ],
                // space - start/stop slideshow
                toggle: [ 70 ]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: true,
            // Override some properties
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            // HTML templates
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (i ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
                loading: '<div id="fancybox-loading"><div></div></div>'
            },
            // Properties for each animation type
            // Opening fancyBox
            openEffect: "fade",
            // 'elastic', 'fade' or 'none'
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: true,
            openMethod: "zoomIn",
            // Closing fancyBox
            closeEffect: "fade",
            // 'elastic', 'fade' or 'none'
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: true,
            closeMethod: "zoomOut",
            // Changing next gallery item
            nextEffect: "elastic",
            // 'elastic', 'fade' or 'none'
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            // Changing previous gallery item
            prevEffect: "elastic",
            // 'elastic', 'fade' or 'none'
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            // Enable default helpers
            helpers: {
                overlay: true,
                title: true
            },
            // Callbacks
            onCancel: c.noop,
            // If canceling
            beforeLoad: c.noop,
            // Before loading
            afterLoad: c.noop,
            // After loading
            beforeShow: c.noop,
            // Before changing in current item
            afterShow: c.noop,
            // After opening
            beforeChange: c.noop,
            // Before changing gallery item
            beforeClose: c.noop,
            // Before closing
            afterClose: c.noop
        },
        //Current state
        group: {},
        // Selected group
        opts: {},
        // Group options
        previous: null,
        // Previous element
        coming: null,
        // Element being loaded
        current: null,
        // Currently loaded element
        isActive: false,
        // Is activated
        isOpen: false,
        // Is currently open
        isOpened: false,
        // Have been fully opened at least once
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: false
        },
        // Loaders
        ajaxLoad: null,
        imgPreload: null,
        // Some collections
        transitions: {},
        helpers: {},
        /*
		 *	Static methods
		 */
        open: function(a, b) {
            if (!a) {
                return;
            }
            if (!c.isPlainObject(b)) {
                b = {};
            }
            // Close if already active
            if (false === h.close(true)) {
                return;
            }
            // Normalize group
            if (!c.isArray(a)) {
                a = l(a) ? c(a).get() : [ a ];
            }
            // Recheck if the type of each element is `object` and set content type (image, ajax, etc)
            c.each(a, function(e, f) {
                var g = {}, i, j, k, n, o, p, q;
                if (c.type(f) === "object") {
                    // Check if is DOM element
                    if (f.nodeType) {
                        f = c(f);
                    }
                    if (l(f)) {
                        g = {
                            href: f.data("fancybox-href") || f.attr("href"),
                            title: c("<div/>").text(f.data("fancybox-title") || f.attr("title") || "").html(),
                            isDom: true,
                            element: f
                        };
                        if (c.metadata) {
                            c.extend(true, g, f.metadata());
                        }
                    } else {
                        g = f;
                    }
                }
                i = b.href || g.href || (m(f) ? f : null);
                j = b.title !== d ? b.title : g.title || "";
                k = b.content || g.content;
                n = k ? "html" : b.type || g.type;
                if (!n && g.isDom) {
                    n = f.data("fancybox-type");
                    if (!n) {
                        o = f.prop("class").match(/fancybox\.(\w+)/);
                        n = o ? o[1] : null;
                    }
                }
                if (m(i)) {
                    // Try to guess the content type
                    if (!n) {
                        if (h.isImage(i)) {
                            n = "image";
                        } else if (h.isSWF(i)) {
                            n = "swf";
                        } else if (i.charAt(0) === "#") {
                            n = "inline";
                        } else if (m(f)) {
                            n = "html";
                            k = f;
                        }
                    }
                    // Split url into two pieces with source url and content selector, e.g,
                    // "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
                    if (n === "ajax") {
                        p = i.split(/\s+/, 2);
                        i = p.shift();
                        q = p.shift();
                    }
                }
                if (!k) {
                    if (n === "inline") {
                        if (i) {
                            k = c(m(i) ? i.replace(/.*(?=#[^\s]+$)/, "") : i);
                        } else if (g.isDom) {
                            k = f;
                        }
                    } else if (n === "html") {
                        k = i;
                    } else if (!n && !i && g.isDom) {
                        n = "inline";
                        k = f;
                    }
                }
                c.extend(g, {
                    href: i,
                    type: n,
                    content: k,
                    title: j,
                    selector: q
                });
                a[e] = g;
            });
            // Extend the defaults
            h.opts = c.extend(true, {}, h.defaults, b);
            // All options are merged recursive except keys
            if (b.keys !== d) {
                h.opts.keys = b.keys ? c.extend({}, h.defaults.keys, b.keys) : false;
            }
            h.group = a;
            return h._start(h.opts.index);
        },
        // Cancel image loading or abort ajax request
        cancel: function() {
            var a = h.coming;
            if (a && false === h.trigger("onCancel")) {
                return;
            }
            h.hideLoading();
            if (!a) {
                return;
            }
            if (h.ajaxLoad) {
                h.ajaxLoad.abort();
            }
            h.ajaxLoad = null;
            if (h.imgPreload) {
                h.imgPreload.onload = h.imgPreload.onerror = null;
            }
            if (a.wrap) {
                a.wrap.stop(true, true).trigger("onReset").remove();
            }
            h.coming = null;
            // If the first item has been canceled, then clear everything
            if (!h.current) {
                h._afterZoomOut(a);
            }
        },
        // Start closing animation if is open; remove immediately if opening/closing
        close: function(a) {
            h.cancel();
            if (false === h.trigger("beforeClose")) {
                return;
            }
            h.unbindEvents();
            if (!h.isActive) {
                return;
            }
            if (!h.isOpen || a === true) {
                c(".fancybox-wrap").stop(true).trigger("onReset").remove();
                h._afterZoomOut();
            } else {
                h.isOpen = h.isOpened = false;
                h.isClosing = true;
                c(".fancybox-item, .fancybox-nav").remove();
                h.wrap.stop(true, true).removeClass("fancybox-opened");
                h.transitions[h.current.closeMethod]();
            }
        },
        // Manage slideshow:
        //   $.fancybox.play(); - toggle slideshow
        //   $.fancybox.play( true ); - start
        //   $.fancybox.play( false ); - stop
        play: function(a) {
            var b = function() {
                clearTimeout(h.player.timer);
            }, c = function() {
                b();
                if (h.current && h.player.isActive) {
                    h.player.timer = setTimeout(h.next, h.current.playSpeed);
                }
            }, d = function() {
                b();
                g.unbind(".player");
                h.player.isActive = false;
                h.trigger("onPlayEnd");
            }, e = function() {
                if (h.current && (h.current.loop || h.current.index < h.group.length - 1)) {
                    h.player.isActive = true;
                    g.bind({
                        "onCancel.player beforeClose.player": d,
                        "onUpdate.player": c,
                        "beforeLoad.player": b
                    });
                    c();
                    h.trigger("onPlayStart");
                }
            };
            if (a === true || !h.player.isActive && a !== false) {
                e();
            } else {
                d();
            }
        },
        // Navigate to next gallery item
        next: function(a) {
            var b = h.current;
            if (b) {
                if (!m(a)) {
                    a = b.direction.next;
                }
                h.jumpto(b.index + 1, a, "next");
            }
        },
        // Navigate to previous gallery item
        prev: function(a) {
            var b = h.current;
            if (b) {
                if (!m(a)) {
                    a = b.direction.prev;
                }
                h.jumpto(b.index - 1, a, "prev");
            }
        },
        // Navigate to gallery item by index
        jumpto: function(a, b, c) {
            var e = h.current;
            if (!e) {
                return;
            }
            a = p(a);
            h.direction = b || e.direction[a >= e.index ? "next" : "prev"];
            h.router = c || "jumpto";
            if (e.loop) {
                if (a < 0) {
                    a = e.group.length + a % e.group.length;
                }
                a = a % e.group.length;
            }
            if (e.group[a] !== d) {
                h.cancel();
                h._start(a);
            }
        },
        // Center inside viewport and toggle position type to fixed or absolute if needed
        reposition: function(a, b) {
            var d = h.current, e = d ? d.wrap : null, f;
            if (e) {
                f = h._getPosition(b);
                if (a && a.type === "scroll") {
                    delete f.position;
                    e.stop(true, true).animate(f, 200);
                } else {
                    e.css(f);
                    d.pos = c.extend({}, d.dim, f);
                }
            }
        },
        update: function(a) {
            var b = a && a.originalEvent && a.originalEvent.type, c = !b || b === "orientationchange";
            if (c) {
                clearTimeout(j);
                j = null;
            }
            if (!h.isOpen || j) {
                return;
            }
            j = setTimeout(function() {
                var d = h.current;
                if (!d || h.isClosing) {
                    return;
                }
                h.wrap.removeClass("fancybox-tmp");
                if (c || b === "load" || b === "resize" && d.autoResize) {
                    h._setDimension();
                }
                if (!(b === "scroll" && d.canShrink)) {
                    h.reposition(a);
                }
                h.trigger("onUpdate");
                j = null;
            }, c && !k ? 0 : 300);
        },
        // Shrink content to fit inside viewport or restore if resized
        toggle: function(a) {
            if (h.isOpen) {
                h.current.fitToView = c.type(a) === "boolean" ? a : !h.current.fitToView;
                // Help browser to restore document dimensions
                if (k) {
                    h.wrap.removeAttr("style").addClass("fancybox-tmp");
                    h.trigger("onUpdate");
                }
                h.update();
            }
        },
        hideLoading: function() {
            g.unbind(".loading");
            c("#fancybox-loading").remove();
        },
        showLoading: function() {
            var a, b;
            h.hideLoading();
            a = c(h.opts.tpl.loading).click(h.cancel).appendTo("body");
            // If user will press the escape-button, the request will be canceled
            g.bind("keydown.loading", function(a) {
                if ((a.which || a.keyCode) === 27) {
                    a.preventDefault();
                    h.cancel();
                }
            });
            if (!h.defaults.fixed) {
                b = h.getViewport();
                a.css({
                    position: "absolute",
                    top: b.h * .5 + b.y,
                    left: b.w * .5 + b.x
                });
            }
            h.trigger("onLoading");
        },
        getViewport: function() {
            var b = h.current && h.current.locked || false, c = {
                x: f.scrollLeft(),
                y: f.scrollTop()
            };
            if (b && b.length) {
                c.w = b[0].clientWidth;
                c.h = b[0].clientHeight;
            } else {
                // See http://bugs.jquery.com/ticket/6724
                c.w = k && a.innerWidth ? a.innerWidth : f.width();
                c.h = k && a.innerHeight ? a.innerHeight : f.height();
            }
            return c;
        },
        // Unbind the keyboard / clicking actions
        unbindEvents: function() {
            if (h.wrap && l(h.wrap)) {
                h.wrap.unbind(".fb");
            }
            g.unbind(".fb");
            f.unbind(".fb");
        },
        bindEvents: function() {
            var a = h.current, b;
            if (!a) {
                return;
            }
            // Changing document height on iOS devices triggers a 'resize' event,
            // that can change document height... repeating infinitely
            f.bind("orientationchange.fb" + (k ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), h.update);
            b = a.keys;
            if (b) {
                g.bind("keydown.fb", function(e) {
                    var f = e.which || e.keyCode, g = e.target || e.srcElement;
                    // Skip esc key if loading, because showLoading will cancel preloading
                    if (f === 27 && h.coming) {
                        return false;
                    }
                    // Ignore key combinations and key events within form elements
                    if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(g && (g.type || c(g).is("[contenteditable]")))) {
                        c.each(b, function(b, g) {
                            if (a.group.length > 1 && g[f] !== d) {
                                h[b](g[f]);
                                e.preventDefault();
                                return false;
                            }
                            if (c.inArray(f, g) > -1) {
                                h[b]();
                                e.preventDefault();
                                return false;
                            }
                        });
                    }
                });
            }
            if (c.fn.mousewheel && a.mouseWheel) {
                h.wrap.bind("mousewheel.fb", function(b, d, e, f) {
                    var g = b.target || null, i = c(g), j = false;
                    while (i.length) {
                        if (j || i.is(".fancybox-skin") || i.is(".fancybox-wrap")) {
                            break;
                        }
                        j = o(i[0]);
                        i = c(i).parent();
                    }
                    if (d !== 0 && !j) {
                        if (h.group.length > 1 && !a.canShrink) {
                            if (f > 0 || e > 0) {
                                h.prev(f > 0 ? "down" : "left");
                            } else if (f < 0 || e < 0) {
                                h.next(f < 0 ? "up" : "right");
                            }
                            b.preventDefault();
                        }
                    }
                });
            }
        },
        trigger: function(a, b) {
            var d, e = b || h.coming || h.current;
            if (e) {
                if (c.isFunction(e[a])) {
                    d = e[a].apply(e, Array.prototype.slice.call(arguments, 1));
                }
                if (d === false) {
                    return false;
                }
                if (e.helpers) {
                    c.each(e.helpers, function(b, d) {
                        if (d && h.helpers[b] && c.isFunction(h.helpers[b][a])) {
                            h.helpers[b][a](c.extend(true, {}, h.helpers[b].defaults, d), e);
                        }
                    });
                }
            }
            g.trigger(a);
        },
        isImage: function(a) {
            return m(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
        },
        isSWF: function(a) {
            return m(a) && a.match(/\.(swf)((\?|#).*)?$/i);
        },
        _start: function(a) {
            var b = {}, d, e, f, g, i;
            a = p(a);
            d = h.group[a] || null;
            if (!d) {
                return false;
            }
            b = c.extend(true, {}, h.opts, d);
            // Convert margin and padding properties to array - top, right, bottom, left
            g = b.margin;
            i = b.padding;
            if (c.type(g) === "number") {
                b.margin = [ g, g, g, g ];
            }
            if (c.type(i) === "number") {
                b.padding = [ i, i, i, i ];
            }
            // 'modal' propery is just a shortcut
            if (b.modal) {
                c.extend(true, b, {
                    closeBtn: false,
                    closeClick: false,
                    nextClick: false,
                    arrows: false,
                    mouseWheel: false,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: false
                        }
                    }
                });
            }
            // 'autoSize' property is a shortcut, too
            if (b.autoSize) {
                b.autoWidth = b.autoHeight = true;
            }
            if (b.width === "auto") {
                b.autoWidth = true;
            }
            if (b.height === "auto") {
                b.autoHeight = true;
            }
            /*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */
            b.group = h.group;
            b.index = a;
            // Give a chance for callback or helpers to update coming item (type, title, etc)
            h.coming = b;
            if (false === h.trigger("beforeLoad")) {
                h.coming = null;
                return;
            }
            f = b.type;
            e = b.href;
            if (!f) {
                h.coming = null;
                //If we can not determine content type then drop silently or display next/prev item if looping through gallery
                if (h.current && h.router && h.router !== "jumpto") {
                    h.current.index = a;
                    return h[h.router](h.direction);
                }
                return false;
            }
            h.isActive = true;
            if (f === "image" || f === "swf") {
                b.autoHeight = b.autoWidth = false;
                b.scrolling = "visible";
            }
            if (f === "image") {
                b.aspectRatio = true;
            }
            if (f === "iframe" && k) {
                b.scrolling = "scroll";
            }
            // Build the neccessary markup
            b.wrap = c(b.tpl.wrap).addClass("fancybox-" + (k ? "mobile" : "desktop") + " fancybox-type-" + f + " fancybox-tmp " + b.wrapCSS).appendTo(b.parent || "body");
            c.extend(b, {
                skin: c(".fancybox-skin", b.wrap),
                outer: c(".fancybox-outer", b.wrap),
                inner: c(".fancybox-inner", b.wrap)
            });
            c.each([ "Top", "Right", "Bottom", "Left" ], function(a, c) {
                b.skin.css("padding" + c, q(b.padding[a]));
            });
            h.trigger("onReady");
            // Check before try to load; 'inline' and 'html' types need content, others - href
            if (f === "inline" || f === "html") {
                if (!b.content || !b.content.length) {
                    return h._error("content");
                }
            } else if (!e) {
                return h._error("href");
            }
            if (f === "image") {
                h._loadImage();
            } else if (f === "ajax") {
                h._loadAjax();
            } else if (f === "iframe") {
                h._loadIframe();
            } else {
                h._afterLoad();
            }
        },
        _error: function(a) {
            c.extend(h.coming, {
                type: "html",
                autoWidth: true,
                autoHeight: true,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: a,
                content: h.coming.tpl.error
            });
            h._afterLoad();
        },
        _loadImage: function() {
            // Reset preload image so it is later possible to check "complete" property
            var a = h.imgPreload = new Image();
            a.onload = function() {
                this.onload = this.onerror = null;
                h.coming.width = this.width / h.opts.pixelRatio;
                h.coming.height = this.height / h.opts.pixelRatio;
                h._afterLoad();
            };
            a.onerror = function() {
                this.onload = this.onerror = null;
                h._error("image");
            };
            a.src = h.coming.href;
            if (a.complete !== true) {
                h.showLoading();
            }
        },
        _loadAjax: function() {
            var a = h.coming;
            h.showLoading();
            h.ajaxLoad = c.ajax(c.extend({}, a.ajax, {
                url: a.href,
                error: function(a, b) {
                    if (h.coming && b !== "abort") {
                        h._error("ajax", a);
                    } else {
                        h.hideLoading();
                    }
                },
                success: function(b, c) {
                    if (c === "success") {
                        a.content = b;
                        h._afterLoad();
                    }
                }
            }));
        },
        _loadIframe: function() {
            var a = h.coming, b = c(a.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime())).attr("scrolling", k ? "auto" : a.iframe.scrolling).attr("src", a.href);
            // This helps IE
            c(a.wrap).bind("onReset", function() {
                try {
                    c(this).find("iframe").hide().attr("src", "//about:blank").end().empty();
                } catch (a) {}
            });
            if (a.iframe.preload) {
                h.showLoading();
                b.one("load", function() {
                    c(this).data("ready", 1);
                    // iOS will lose scrolling if we resize
                    if (!k) {
                        c(this).bind("load.fb", h.update);
                    }
                    // Without this trick:
                    //   - iframe won't scroll on iOS devices
                    //   - IE7 sometimes displays empty iframe
                    c(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                    h._afterLoad();
                });
            }
            a.content = b.appendTo(a.inner);
            if (!a.iframe.preload) {
                h._afterLoad();
            }
        },
        _preloadImages: function() {
            var a = h.group, b = h.current, c = a.length, d = b.preload ? Math.min(b.preload, c - 1) : 0, e, f;
            for (f = 1; f <= d; f += 1) {
                e = a[(b.index + f) % c];
                if (e.type === "image" && e.href) {
                    new Image().src = e.href;
                }
            }
        },
        _afterLoad: function() {
            var a = h.coming, b = h.current, d = "fancybox-placeholder", e, f, g, i, j, k;
            h.hideLoading();
            if (!a || h.isActive === false) {
                return;
            }
            if (false === h.trigger("afterLoad", a, b)) {
                a.wrap.stop(true).trigger("onReset").remove();
                h.coming = null;
                return;
            }
            if (b) {
                h.trigger("beforeChange", b);
                b.wrap.stop(true).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove();
            }
            h.unbindEvents();
            e = a;
            f = a.content;
            g = a.type;
            i = a.scrolling;
            c.extend(h, {
                wrap: e.wrap,
                skin: e.skin,
                outer: e.outer,
                inner: e.inner,
                current: e,
                previous: b
            });
            j = e.href;
            switch (g) {
              case "inline":
              case "ajax":
              case "html":
                if (e.selector) {
                    f = c("<div>").html(f).find(e.selector);
                } else if (l(f)) {
                    if (!f.data(d)) {
                        f.data(d, c('<div class="' + d + '"></div>').insertAfter(f).hide());
                    }
                    f = f.show().detach();
                    e.wrap.bind("onReset", function() {
                        if (c(this).find(f).length) {
                            f.hide().replaceAll(f.data(d)).data(d, false);
                        }
                    });
                }
                break;

              case "image":
                f = e.tpl.image.replace(/\{href\}/g, j);
                break;

              case "swf":
                f = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + j + '"></param>';
                k = "";
                c.each(e.swf, function(a, b) {
                    f += '<param name="' + a + '" value="' + b + '"></param>';
                    k += " " + a + '="' + b + '"';
                });
                f += '<embed src="' + j + '" type="application/x-shockwave-flash" width="100%" height="100%"' + k + "></embed></object>";
                break;
            }
            if (!(l(f) && f.parent().is(e.inner))) {
                e.inner.append(f);
            }
            // Give a chance for helpers or callbacks to update elements
            h.trigger("beforeShow");
            // Set scrolling before calculating dimensions
            e.inner.css("overflow", i === "yes" ? "scroll" : i === "no" ? "hidden" : i);
            // Set initial dimensions and start position
            h._setDimension();
            h.reposition();
            h.isOpen = false;
            h.coming = null;
            h.bindEvents();
            if (!h.isOpened) {
                c(".fancybox-wrap").not(e.wrap).stop(true).trigger("onReset").remove();
            } else if (b.prevMethod) {
                h.transitions[b.prevMethod]();
            }
            h.transitions[h.isOpened ? e.nextMethod : e.openMethod]();
            h._preloadImages();
        },
        _setDimension: function() {
            var a = h.getViewport(), b = 0, d = false, e = false, f = h.wrap, g = h.skin, i = h.inner, j = h.current, k = j.width, l = j.height, m = j.minWidth, o = j.minHeight, r = j.maxWidth, s = j.maxHeight, t = j.scrolling, u = j.scrollOutside ? j.scrollbarWidth : 0, v = j.margin, w = p(v[1] + v[3]), x = p(v[0] + v[2]), y, z, A, B, C, D, E, F, G, H, I, J, K, L, M;
            // Reset dimensions so we could re-check actual size
            f.add(g).add(i).width("auto").height("auto").removeClass("fancybox-tmp");
            y = p(g.outerWidth(true) - g.width());
            z = p(g.outerHeight(true) - g.height());
            // Any space between content and viewport (margin, padding, border, title)
            A = w + y;
            B = x + z;
            C = n(k) ? (a.w - A) * p(k) / 100 : k;
            D = n(l) ? (a.h - B) * p(l) / 100 : l;
            if (j.type === "iframe") {
                L = j.content;
                if (j.autoHeight && L.data("ready") === 1) {
                    try {
                        if (L[0].contentWindow.document.location) {
                            i.width(C).height(9999);
                            M = L.contents().find("body");
                            if (u) {
                                M.css("overflow-x", "hidden");
                            }
                            D = M.outerHeight(true);
                        }
                    } catch (a) {}
                }
            } else if (j.autoWidth || j.autoHeight) {
                i.addClass("fancybox-tmp");
                // Set width or height in case we need to calculate only one dimension
                if (!j.autoWidth) {
                    i.width(C);
                }
                if (!j.autoHeight) {
                    i.height(D);
                }
                if (j.autoWidth) {
                    C = i.width();
                }
                if (j.autoHeight) {
                    D = i.height();
                }
                i.removeClass("fancybox-tmp");
            }
            k = p(C);
            l = p(D);
            G = C / D;
            // Calculations for the content
            m = p(n(m) ? p(m, "w") - A : m);
            r = p(n(r) ? p(r, "w") - A : r);
            o = p(n(o) ? p(o, "h") - B : o);
            s = p(n(s) ? p(s, "h") - B : s);
            // These will be used to determine if wrap can fit in the viewport
            E = r;
            F = s;
            if (j.fitToView) {
                r = Math.min(a.w - A, r);
                s = Math.min(a.h - B, s);
            }
            J = a.w - w;
            K = a.h - x;
            if (j.aspectRatio) {
                if (k > r) {
                    k = r;
                    l = p(k / G);
                }
                if (l > s) {
                    l = s;
                    k = p(l * G);
                }
                if (k < m) {
                    k = m;
                    l = p(k / G);
                }
                if (l < o) {
                    l = o;
                    k = p(l * G);
                }
            } else {
                k = Math.max(m, Math.min(k, r));
                if (j.autoHeight && j.type !== "iframe") {
                    i.width(k);
                    l = i.height();
                }
                l = Math.max(o, Math.min(l, s));
            }
            // Try to fit inside viewport (including the title)
            if (j.fitToView) {
                i.width(k).height(l);
                f.width(k + y);
                // Real wrap dimensions
                H = f.width();
                I = f.height();
                if (j.aspectRatio) {
                    while ((H > J || I > K) && k > m && l > o) {
                        if (b++ > 19) {
                            break;
                        }
                        l = Math.max(o, Math.min(s, l - 10));
                        k = p(l * G);
                        if (k < m) {
                            k = m;
                            l = p(k / G);
                        }
                        if (k > r) {
                            k = r;
                            l = p(k / G);
                        }
                        i.width(k).height(l);
                        f.width(k + y);
                        H = f.width();
                        I = f.height();
                    }
                } else {
                    k = Math.max(m, Math.min(k, k - (H - J)));
                    l = Math.max(o, Math.min(l, l - (I - K)));
                }
            }
            if (u && t === "auto" && l < D && k + y + u < J) {
                k += u;
            }
            i.width(k).height(l);
            f.width(k + y);
            H = f.width();
            I = f.height();
            d = (H > J || I > K) && k > m && l > o;
            e = j.aspectRatio ? k < E && l < F && k < C && l < D : (k < E || l < F) && (k < C || l < D);
            c.extend(j, {
                dim: {
                    width: q(H),
                    height: q(I)
                },
                origWidth: C,
                origHeight: D,
                canShrink: d,
                canExpand: e,
                wPadding: y,
                hPadding: z,
                wrapSpace: I - g.outerHeight(true),
                skinSpace: g.height() - l
            });
            if (!L && j.autoHeight && l > o && l < s && !e) {
                i.height("auto");
            }
        },
        _getPosition: function(a) {
            var b = h.current, c = h.getViewport(), d = b.margin, e = h.wrap.width() + d[1] + d[3], f = h.wrap.height() + d[0] + d[2], g = {
                position: "absolute",
                top: d[0],
                left: d[3]
            };
            if (b.autoCenter && b.fixed && !a && f <= c.h && e <= c.w) {
                g.position = "fixed";
            } else if (!b.locked) {
                g.top += c.y;
                g.left += c.x;
            }
            g.top = q(Math.max(g.top, g.top + (c.h - f) * b.topRatio));
            g.left = q(Math.max(g.left, g.left + (c.w - e) * b.leftRatio));
            return g;
        },
        _afterZoomIn: function() {
            var a = h.current;
            if (!a) {
                return;
            }
            h.isOpen = h.isOpened = true;
            h.wrap.css("overflow", "visible").addClass("fancybox-opened").hide().show(0);
            h.update();
            // Assign a click event
            if (a.closeClick || a.nextClick && h.group.length > 1) {
                h.inner.css("cursor", "pointer").bind("click.fb", function(b) {
                    if (!c(b.target).is("a") && !c(b.target).parent().is("a")) {
                        b.preventDefault();
                        h[a.closeClick ? "close" : "next"]();
                    }
                });
            }
            // Create a close button
            if (a.closeBtn) {
                c(a.tpl.closeBtn).appendTo(h.skin).bind("click.fb", function(a) {
                    a.preventDefault();
                    h.close();
                });
            }
            // Create navigation arrows
            if (a.arrows && h.group.length > 1) {
                if (a.loop || a.index > 0) {
                    c(a.tpl.prev).appendTo(h.outer).bind("click.fb", h.prev);
                }
                if (a.loop || a.index < h.group.length - 1) {
                    c(a.tpl.next).appendTo(h.outer).bind("click.fb", h.next);
                }
            }
            h.trigger("afterShow");
            // Stop the slideshow if this is the last item
            if (!a.loop && a.index === a.group.length - 1) {
                h.play(false);
            } else if (h.opts.autoPlay && !h.player.isActive) {
                h.opts.autoPlay = false;
                h.play(true);
            }
        },
        _afterZoomOut: function(a) {
            a = a || h.current;
            c(".fancybox-wrap").trigger("onReset").remove();
            c.extend(h, {
                group: {},
                opts: {},
                router: false,
                current: null,
                isActive: false,
                isOpened: false,
                isOpen: false,
                isClosing: false,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            h.trigger("afterClose", a);
        }
    });
    /*
	 *	Default transitions
	 */
    h.transitions = {
        getOrigPosition: function() {
            var a = h.current, b = a.element, c = a.orig, d = {}, e = 50, f = 50, g = a.hPadding, i = a.wPadding, j = h.getViewport();
            if (!c && a.isDom && b.is(":visible")) {
                c = b.find("img:first");
                if (!c.length) {
                    c = b;
                }
            }
            if (l(c)) {
                d = c.offset();
                if (c.is("img")) {
                    e = c.outerWidth();
                    f = c.outerHeight();
                }
            } else {
                d.top = j.y + (j.h - f) * a.topRatio;
                d.left = j.x + (j.w - e) * a.leftRatio;
            }
            if (h.wrap.css("position") === "fixed" || a.locked) {
                d.top -= j.y;
                d.left -= j.x;
            }
            d = {
                top: q(d.top - g * a.topRatio),
                left: q(d.left - i * a.leftRatio),
                width: q(e + i),
                height: q(f + g)
            };
            return d;
        },
        step: function(a, b) {
            var c, d, e, f = b.prop, g = h.current, i = g.wrapSpace, j = g.skinSpace;
            if (f === "width" || f === "height") {
                c = b.end === b.start ? 1 : (a - b.start) / (b.end - b.start);
                if (h.isClosing) {
                    c = 1 - c;
                }
                d = f === "width" ? g.wPadding : g.hPadding;
                e = a - d;
                h.skin[f](p(f === "width" ? e : e - i * c));
                h.inner[f](p(f === "width" ? e : e - i * c - j * c));
            }
        },
        zoomIn: function() {
            var a = h.current, b = a.pos, d = a.openEffect, e = d === "elastic", f = c.extend({
                opacity: 1
            }, b);
            // Remove "position" property that breaks older IE
            delete f.position;
            if (e) {
                b = this.getOrigPosition();
                if (a.openOpacity) {
                    b.opacity = .1;
                }
            } else if (d === "fade") {
                b.opacity = .1;
            }
            h.wrap.css(b).animate(f, {
                duration: d === "none" ? 0 : a.openSpeed,
                easing: a.openEasing,
                step: e ? this.step : null,
                complete: h._afterZoomIn
            });
        },
        zoomOut: function() {
            var a = h.current, b = a.closeEffect, c = b === "elastic", d = {
                opacity: .1
            };
            if (c) {
                d = this.getOrigPosition();
                if (a.closeOpacity) {
                    d.opacity = .1;
                }
            }
            h.wrap.animate(d, {
                duration: b === "none" ? 0 : a.closeSpeed,
                easing: a.closeEasing,
                step: c ? this.step : null,
                complete: h._afterZoomOut
            });
        },
        changeIn: function() {
            var a = h.current, b = a.nextEffect, c = a.pos, d = {
                opacity: 1
            }, e = h.direction, f = 200, g;
            c.opacity = .1;
            if (b === "elastic") {
                g = e === "down" || e === "up" ? "top" : "left";
                if (e === "down" || e === "right") {
                    c[g] = q(p(c[g]) - f);
                    d[g] = "+=" + f + "px";
                } else {
                    c[g] = q(p(c[g]) + f);
                    d[g] = "-=" + f + "px";
                }
            }
            // Workaround for http://bugs.jquery.com/ticket/12273
            if (b === "none") {
                h._afterZoomIn();
            } else {
                h.wrap.css(c).animate(d, {
                    duration: a.nextSpeed,
                    easing: a.nextEasing,
                    complete: h._afterZoomIn
                });
            }
        },
        changeOut: function() {
            var a = h.previous, b = a.prevEffect, d = {
                opacity: .1
            }, e = h.direction, f = 200;
            if (b === "elastic") {
                d[e === "down" || e === "up" ? "top" : "left"] = (e === "up" || e === "left" ? "-" : "+") + "=" + f + "px";
            }
            a.wrap.animate(d, {
                duration: b === "none" ? 0 : a.prevSpeed,
                easing: a.prevEasing,
                complete: function() {
                    c(this).trigger("onReset").remove();
                }
            });
        }
    };
    /*
	 *	Overlay helper
	 */
    h.helpers.overlay = {
        defaults: {
            closeClick: true,
            // if true, fancyBox will be closed when user clicks on the overlay
            speedOut: 200,
            // duration of fadeOut animation
            showEarly: true,
            // indicates if should be opened immediately or wait until the content is ready
            css: {},
            // custom CSS properties
            locked: !k,
            // if true, the content will be locked into overlay
            fixed: true
        },
        overlay: null,
        // current handle
        fixed: false,
        // indicates if the overlay has position "fixed"
        el: c("html"),
        // element that contains "the lock"
        // Public methods
        create: function(a) {
            var b;
            a = c.extend({}, this.defaults, a);
            if (this.overlay) {
                this.close();
            }
            b = h.coming ? h.coming.parent : a.parent;
            this.overlay = c('<div class="fancybox-overlay"></div>').appendTo(b && b.length ? b : "body");
            this.fixed = false;
            if (a.fixed && h.defaults.fixed) {
                this.overlay.addClass("fancybox-overlay-fixed");
                this.fixed = true;
            }
        },
        open: function(a) {
            var b = this;
            a = c.extend({}, this.defaults, a);
            if (this.overlay) {
                this.overlay.unbind(".overlay").width("auto").height("auto");
            } else {
                this.create(a);
            }
            if (!this.fixed) {
                f.bind("resize.overlay", c.proxy(this.update, this));
                this.update();
            }
            if (a.closeClick) {
                this.overlay.bind("click.overlay", function(a) {
                    if (c(a.target).hasClass("fancybox-overlay")) {
                        if (h.isActive) {
                            h.close();
                        } else {
                            b.close();
                        }
                        return false;
                    }
                });
            }
            this.overlay.css(a.css).show();
        },
        close: function() {
            f.unbind("resize.overlay");
            if (this.el.hasClass("fancybox-lock")) {
                c(".fancybox-margin").removeClass("fancybox-margin");
                this.el.removeClass("fancybox-lock");
                f.scrollTop(this.scrollV).scrollLeft(this.scrollH);
            }
            c(".fancybox-overlay").remove().hide();
            c.extend(this, {
                overlay: null,
                fixed: false
            });
        },
        // Private, callbacks
        update: function() {
            var a = "100%", c;
            // Reset width/height so it will not mess
            this.overlay.width(a).height("100%");
            // jQuery does not return reliable result for IE
            if (i) {
                c = Math.max(b.documentElement.offsetWidth, b.body.offsetWidth);
                if (g.width() > c) {
                    a = g.width();
                }
            } else if (g.width() > f.width()) {
                a = g.width();
            }
            this.overlay.width(a).height(g.height());
        },
        // This is where we can manipulate DOM, because later it would cause iframes to reload
        onReady: function(a, b) {
            var d = this.overlay;
            c(".fancybox-overlay").stop(true, true);
            if (!d) {
                this.create(a);
            }
            if (a.locked && this.fixed && b.fixed) {
                b.locked = this.overlay.append(b.wrap);
                b.fixed = false;
            }
            if (a.showEarly === true) {
                this.beforeShow.apply(this, arguments);
            }
        },
        beforeShow: function(a, b) {
            if (b.locked && !this.el.hasClass("fancybox-lock")) {
                if (this.fixPosition !== false) {
                    c("*").filter(function() {
                        return c(this).css("position") === "fixed" && !c(this).hasClass("fancybox-overlay") && !c(this).hasClass("fancybox-wrap");
                    }).addClass("fancybox-margin");
                }
                this.el.addClass("fancybox-margin");
                this.scrollV = f.scrollTop();
                this.scrollH = f.scrollLeft();
                this.el.addClass("fancybox-lock");
                f.scrollTop(this.scrollV).scrollLeft(this.scrollH);
            }
            this.open(a);
        },
        onUpdate: function() {
            if (!this.fixed) {
                this.update();
            }
        },
        afterClose: function(a) {
            // Remove overlay if exists and fancyBox is not opening
            // (e.g., it is not being open using afterClose callback)
            if (this.overlay && !h.coming) {
                this.overlay.fadeOut(a.speedOut, c.proxy(this.close, this));
            }
        }
    };
    /*
	 *	Title helper
	 */
    h.helpers.title = {
        defaults: {
            type: "float",
            // 'float', 'inside', 'outside' or 'over',
            position: "bottom"
        },
        beforeShow: function(a) {
            var b = h.current, d = b.title, e = a.type, f, g;
            if (c.isFunction(d)) {
                d = d.call(b.element, b);
            }
            if (!m(d) || c.trim(d) === "") {
                return;
            }
            f = c('<div class="fancybox-title fancybox-title-' + e + '-wrap">' + d + "</div>");
            switch (e) {
              case "inside":
                g = h.skin;
                break;

              case "outside":
                g = h.wrap;
                break;

              case "over":
                g = h.inner;
                break;

              default:
                // 'float'
                g = h.skin;
                f.appendTo("body");
                if (i) {
                    f.width(f.width());
                }
                f.wrapInner('<span class="child"></span>');
                //Increase bottom margin so this title will also fit into viewport
                h.current.margin[2] += Math.abs(p(f.css("margin-bottom")));
                break;
            }
            f[a.position === "top" ? "prependTo" : "appendTo"](g);
        }
    };
    // jQuery plugin initialization
    c.fn.fancybox = function(a) {
        var b, d = c(this), e = this.selector || "", f = function(f) {
            var g = c(this).blur(), i = b, j, k;
            if (!(f.ctrlKey || f.altKey || f.shiftKey || f.metaKey) && !g.is(".fancybox-wrap")) {
                j = a.groupAttr || "data-fancybox-group";
                k = g.attr(j);
                if (!k) {
                    j = "rel";
                    k = g.get(0)[j];
                }
                if (k && k !== "" && k !== "nofollow") {
                    g = e.length ? c(e) : d;
                    g = g.filter("[" + j + '="' + k + '"]');
                    i = g.index(this);
                }
                a.index = i;
                // Stop an event from bubbling if everything is fine
                if (h.open(g, a) !== false) {
                    f.preventDefault();
                }
            }
        };
        a = a || {};
        b = a.index || 0;
        if (!e || a.live === false) {
            d.unbind("click.fb-start").bind("click.fb-start", f);
        } else {
            g.undelegate(e, "click.fb-start").delegate(e + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", f);
        }
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this;
    };
    // Tests that need a body at doc ready
    g.ready(function() {
        var b, f;
        if (c.scrollbarWidth === d) {
            // http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
            c.scrollbarWidth = function() {
                var a = c('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), b = a.children(), d = b.innerWidth() - b.height(99).innerWidth();
                a.remove();
                return d;
            };
        }
        if (c.support.fixedPosition === d) {
            c.support.fixedPosition = function() {
                var a = c('<div style="position:fixed;top:20px;"></div>').appendTo("body"), b = a[0].offsetTop === 20 || a[0].offsetTop === 15;
                a.remove();
                return b;
            }();
        }
        c.extend(h.defaults, {
            scrollbarWidth: c.scrollbarWidth(),
            fixed: c.support.fixedPosition,
            parent: c("body")
        });
        //Get real width of page scroll-bar
        b = c(a).width();
        e.addClass("fancybox-lock-test");
        f = c(a).width();
        e.removeClass("fancybox-lock-test");
        c("<style type='text/css'>.fancybox-margin{margin-right:" + (f - b) + "px;}</style>").appendTo("head");
    });
})(window, document, jQuery);

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

(function() {
    function a(a, b) {
        document.addEventListener ? a.addEventListener("scroll", b, !1) : a.attachEvent("scroll", b);
    }
    function b(a) {
        document.body ? a() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function b() {
            document.removeEventListener("DOMContentLoaded", b);
            a();
        }) : document.attachEvent("onreadystatechange", function b() {
            if ("interactive" == document.readyState || "complete" == document.readyState) document.detachEvent("onreadystatechange", b), 
            a();
        });
    }
    function c(a) {
        this.a = document.createElement("div");
        this.a.setAttribute("aria-hidden", "true");
        this.a.appendChild(document.createTextNode(a));
        this.b = document.createElement("span");
        this.c = document.createElement("span");
        this.h = document.createElement("span");
        this.f = document.createElement("span");
        this.g = -1;
        this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
        this.b.appendChild(this.h);
        this.c.appendChild(this.f);
        this.a.appendChild(this.b);
        this.a.appendChild(this.c);
    }
    function d(a, b) {
        a.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-synthesis:none;font:" + b + ";";
    }
    function e(a) {
        var b = a.a.offsetWidth, c = b + 100;
        a.f.style.width = c + "px";
        a.c.scrollLeft = c;
        a.b.scrollLeft = a.b.scrollWidth + 100;
        return a.g !== b ? (a.g = b, !0) : !1;
    }
    function f(b, c) {
        function d() {
            var a = f;
            e(a) && a.a.parentNode && c(a.g);
        }
        var f = b;
        a(b.b, d);
        a(b.c, d);
        e(b);
    }
    function g(a, b) {
        var c = b || {};
        this.family = a;
        this.style = c.style || "normal";
        this.weight = c.weight || "normal";
        this.stretch = c.stretch || "normal";
    }
    var h = null, i = null, j = null, k = null;
    function l() {
        if (null === i) if (m() && /Apple/.test(window.navigator.vendor)) {
            var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
            i = !!a && 603 > parseInt(a[1], 10);
        } else i = !1;
        return i;
    }
    function m() {
        null === k && (k = !!document.fonts);
        return k;
    }
    function n() {
        if (null === j) {
            var a = document.createElement("div");
            try {
                a.style.font = "condensed 100px sans-serif";
            } catch (a) {}
            j = "" !== a.style.font;
        }
        return j;
    }
    function o(a, b) {
        return [ a.style, a.weight, n() ? a.stretch : "", "100px", b ].join(" ");
    }
    g.prototype.load = function(a, e) {
        var g = this, i = a || "BESbswy", j = 0, k = e || 3e3, n = new Date().getTime();
        return new Promise(function(a, e) {
            if (m() && !l()) {
                var p = new Promise(function(a, b) {
                    function c() {
                        new Date().getTime() - n >= k ? b() : document.fonts.load(o(g, '"' + g.family + '"'), i).then(function(b) {
                            1 <= b.length ? a() : setTimeout(c, 25);
                        }, function() {
                            b();
                        });
                    }
                    c();
                }), q = new Promise(function(a, b) {
                    j = setTimeout(b, k);
                });
                Promise.race([ q, p ]).then(function() {
                    clearTimeout(j);
                    a(g);
                }, function() {
                    e(g);
                });
            } else b(function() {
                function b() {
                    var b;
                    if (b = -1 != r && -1 != s || -1 != r && -1 != t || -1 != s && -1 != t) (b = r != s && r != t && s != t) || (null === h && (b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), 
                    h = !!b && (536 > parseInt(b[1], 10) || 536 === parseInt(b[1], 10) && 11 >= parseInt(b[2], 10))), 
                    b = h && (r == u && s == u && t == u || r == v && s == v && t == v || r == w && s == w && t == w)), 
                    b = !b;
                    b && (x.parentNode && x.parentNode.removeChild(x), clearTimeout(j), a(g));
                }
                function l() {
                    if (new Date().getTime() - n >= k) x.parentNode && x.parentNode.removeChild(x), 
                    e(g); else {
                        var a = document.hidden;
                        if (!0 === a || void 0 === a) r = m.a.offsetWidth, s = p.a.offsetWidth, t = q.a.offsetWidth, 
                        b();
                        j = setTimeout(l, 50);
                    }
                }
                var m = new c(i), p = new c(i), q = new c(i), r = -1, s = -1, t = -1, u = -1, v = -1, w = -1, x = document.createElement("div");
                x.dir = "ltr";
                d(m, o(g, "sans-serif"));
                d(p, o(g, "serif"));
                d(q, o(g, "monospace"));
                x.appendChild(m.a);
                x.appendChild(p.a);
                x.appendChild(q.a);
                document.body.appendChild(x);
                u = m.a.offsetWidth;
                v = p.a.offsetWidth;
                w = q.a.offsetWidth;
                l();
                f(m, function(a) {
                    r = a;
                    b();
                });
                d(m, o(g, '"' + g.family + '",sans-serif'));
                f(p, function(a) {
                    s = a;
                    b();
                });
                d(p, o(g, '"' + g.family + '",serif'));
                f(q, function(a) {
                    t = a;
                    b();
                });
                d(q, o(g, '"' + g.family + '",monospace'));
            });
        });
    };
    "undefined" !== typeof module ? module.exports = g : (window.FontFaceObserver = g, 
    window.FontFaceObserver.prototype.load = g.prototype.load);
})();

$(document).ready(function() {
    // Ovladani navigace na mobilech
    $(".head-hamburger a").click(function(a) {
        a.preventDefault();
        $("#nav").toggle();
    });
    // Inicializace Fancyboxu
    $(".fancybox").fancybox();
});