(function(a, b) {
    if (typeof module === "object" && typeof module.exports === "object") {
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
    var m = "1.12.4", n = function(a, b) {
        return new n.fn.init(a, b);
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function(a, b) {
        return b.toUpperCase();
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this);
        },
        get: function(a) {
            return a != null ? a < 0 ? this[a + this.length] : this[a] : e.call(this);
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            b.prevObject = this;
            b.context = this.context;
            return b;
        },
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
        push: g,
        sort: c.sort,
        splice: c.splice
    };
    n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = false;
        if (typeof g === "boolean") {
            j = g;
            g = arguments[h] || {};
            h++;
        }
        if (typeof g !== "object" && !n.isFunction(g)) {
            g = {};
        }
        if (h === i) {
            g = this;
            h--;
        }
        for (;h < i; h++) {
            if ((e = arguments[h]) != null) {
                for (d in e) {
                    a = g[d];
                    c = e[d];
                    if (g === c) {
                        continue;
                    }
                    if (j && c && (n.isPlainObject(c) || (b = n.isArray(c)))) {
                        if (b) {
                            b = false;
                            f = a && n.isArray(a) ? a : [];
                        } else {
                            f = a && n.isPlainObject(a) ? a : {};
                        }
                        g[d] = n.extend(j, f, c);
                    } else if (c !== undefined) {
                        g[d] = c;
                    }
                }
            }
        }
        return g;
    };
    n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return n.type(a) === "function";
        },
        isArray: Array.isArray || function(a) {
            return n.type(a) === "array";
        },
        isWindow: function(a) {
            return a != null && a == a.window;
        },
        isNumeric: function(a) {
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
            if (!a || n.type(a) !== "object" || a.nodeType || n.isWindow(a)) {
                return false;
            }
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) {
                    return false;
                }
            } catch (a) {
                return false;
            }
            if (!l.ownFirst) {
                for (b in a) {
                    return k.call(a, b);
                }
            }
            for (b in a) {}
            return b === undefined || k.call(a, b);
        },
        type: function(a) {
            if (a == null) {
                return a + "";
            }
            return typeof a === "object" || typeof a === "function" ? i[j.call(a)] || "object" : typeof a;
        },
        globalEval: function(b) {
            if (b && n.trim(b)) {
                (a.execScript || function(b) {
                    a["eval"].call(a, b);
                })(b);
            }
        },
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
        trim: function(a) {
            return a == null ? "" : (a + "").replace(o, "");
        },
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
            for (;f < g; f++) {
                d = !b(a[f], f);
                if (d !== h) {
                    e.push(a[f]);
                }
            }
            return e;
        },
        map: function(a, b, c) {
            var d, e, g = 0, h = [];
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
            return f.apply([], h);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            if (typeof b === "string") {
                f = a[b];
                b = a;
                a = f;
            }
            if (!n.isFunction(a)) {
                return undefined;
            }
            c = e.call(arguments, 2);
            d = function() {
                return a.apply(b || this, c.concat(e.call(arguments)));
            };
            d.guid = a.guid = a.guid || n.guid++;
            return d;
        },
        now: function() {
            return +new Date();
        },
        support: l
    });
    if (typeof Symbol === "function") {
        n.fn[Symbol.iterator] = c[Symbol.iterator];
    }
    n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase();
    });
    function s(a) {
        var b = !!a && "length" in a && a.length, c = n.type(a);
        if (c === "function" || n.isWindow(a)) {
            return false;
        }
        return c === "array" || b === 0 || typeof b === "number" && b > 0 && b - 1 in a;
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date(), v = a.document, w = 0, x = 0, y = fa(), z = fa(), A = fa(), B = function(a, b) {
            if (a === b) {
                l = true;
            }
            return 0;
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            var c = 0, d = a.length;
            for (;c < d; c++) {
                if (a[c] === b) {
                    return c;
                }
            }
            return -1;
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]", O = ":(" + M + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|" + ".*" + ")\\)|)", P = new RegExp(L + "+", "g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), U = new RegExp(O), V = new RegExp("^" + M + "$"), W = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + N),
            PSEUDO: new RegExp("^" + O),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g, ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), ca = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, d & 1023 | 56320);
        }, da = function() {
            m();
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes);
            E[v.childNodes.length].nodeType;
        } catch (a) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b));
                } : function(a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) {}
                    a.length = c - 1;
                }
            };
        }
        function ea(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, x = b ? b.nodeType : 9;
            d = d || [];
            if (typeof a !== "string" || !a || x !== 1 && x !== 9 && x !== 11) {
                return d;
            }
            if (!e) {
                if ((b ? b.ownerDocument || b : v) !== n) {
                    m(b);
                }
                b = b || n;
                if (p) {
                    if (x !== 11 && (o = $.exec(a))) {
                        if (f = o[1]) {
                            if (x === 9) {
                                if (j = b.getElementById(f)) {
                                    if (j.id === f) {
                                        d.push(j);
                                        return d;
                                    }
                                } else {
                                    return d;
                                }
                            } else {
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
                    if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                        if (x !== 1) {
                            w = b;
                            s = a;
                        } else if (b.nodeName.toLowerCase() !== "object") {
                            if (k = b.getAttribute("id")) {
                                k = k.replace(aa, "\\$&");
                            } else {
                                b.setAttribute("id", k = u);
                            }
                            r = g(a);
                            h = r.length;
                            l = V.test(k) ? "#" + k : "[id='" + k + "']";
                            while (h--) {
                                r[h] = l + " " + pa(r[h]);
                            }
                            s = r.join(",");
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
            return i(a.replace(Q, "$1"), b, d, e);
        }
        function fa() {
            var a = [];
            function b(c, e) {
                if (a.push(c + " ") > d.cacheLength) {
                    delete b[a.shift()];
                }
                return b[c + " "] = e;
            }
            return b;
        }
        function ga(a) {
            a[u] = true;
            return a;
        }
        function ha(a) {
            var b = n.createElement("div");
            try {
                return !!a(b);
            } catch (a) {
                return false;
            } finally {
                if (b.parentNode) {
                    b.parentNode.removeChild(b);
                }
                b = null;
            }
        }
        function ia(a, b) {
            var c = a.split("|"), e = c.length;
            while (e--) {
                d.attrHandle[c[e]] = b;
            }
        }
        function ja(a, b) {
            var c = b && a, d = c && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) {
                return d;
            }
            if (c) {
                while (c = c.nextSibling) {
                    if (c === b) {
                        return -1;
                    }
                }
            }
            return a ? 1 : -1;
        }
        function ka(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return c === "input" && b.type === a;
            };
        }
        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return (c === "input" || c === "button") && b.type === a;
            };
        }
        function ma(a) {
            return ga(function(b) {
                b = +b;
                return ga(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) {
                        if (c[e = f[g]]) {
                            c[e] = !(d[e] = c[e]);
                        }
                    }
                });
            });
        }
        function na(a) {
            return a && typeof a.getElementsByTagName !== "undefined" && a;
        }
        c = ea.support = {};
        f = ea.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? b.nodeName !== "HTML" : false;
        };
        m = ea.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            if (g === n || g.nodeType !== 9 || !g.documentElement) {
                return n;
            }
            n = g;
            o = n.documentElement;
            p = !f(n);
            if ((e = n.defaultView) && e.top !== e) {
                if (e.addEventListener) {
                    e.addEventListener("unload", da, false);
                } else if (e.attachEvent) {
                    e.attachEvent("onunload", da);
                }
            }
            c.attributes = ha(function(a) {
                a.className = "i";
                return !a.getAttribute("className");
            });
            c.getElementsByTagName = ha(function(a) {
                a.appendChild(n.createComment(""));
                return !a.getElementsByTagName("*").length;
            });
            c.getElementsByClassName = Z.test(n.getElementsByClassName);
            c.getById = ha(function(a) {
                o.appendChild(a).id = u;
                return !n.getElementsByName || !n.getElementsByName(u).length;
            });
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
                delete d.find["ID"];
                d.filter["ID"] = function(a) {
                    var b = a.replace(ba, ca);
                    return function(a) {
                        var c = typeof a.getAttributeNode !== "undefined" && a.getAttributeNode("id");
                        return c && c.value === b;
                    };
                };
            }
            d.find["TAG"] = c.getElementsByTagName ? function(a, b) {
                if (typeof b.getElementsByTagName !== "undefined") {
                    return b.getElementsByTagName(a);
                } else if (c.qsa) {
                    return b.querySelectorAll(a);
                }
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
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
            d.find["CLASS"] = c.getElementsByClassName && function(a, b) {
                if (typeof b.getElementsByClassName !== "undefined" && p) {
                    return b.getElementsByClassName(a);
                }
            };
            r = [];
            q = [];
            if (c.qsa = Z.test(n.querySelectorAll)) {
                ha(function(a) {
                    o.appendChild(a).innerHTML = "<a id='" + u + "'></a>" + "<select id='" + u + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                    if (a.querySelectorAll("[msallowcapture^='']").length) {
                        q.push("[*^$]=" + L + "*(?:''|\"\")");
                    }
                    if (!a.querySelectorAll("[selected]").length) {
                        q.push("\\[" + L + "*(?:value|" + K + ")");
                    }
                    if (!a.querySelectorAll("[id~=" + u + "-]").length) {
                        q.push("~=");
                    }
                    if (!a.querySelectorAll(":checked").length) {
                        q.push(":checked");
                    }
                    if (!a.querySelectorAll("a#" + u + "+*").length) {
                        q.push(".#.+[+~]");
                    }
                });
                ha(function(a) {
                    var b = n.createElement("input");
                    b.setAttribute("type", "hidden");
                    a.appendChild(b).setAttribute("name", "D");
                    if (a.querySelectorAll("[name=d]").length) {
                        q.push("name" + L + "*[*^$|!~]?=");
                    }
                    if (!a.querySelectorAll(":enabled").length) {
                        q.push(":enabled", ":disabled");
                    }
                    a.querySelectorAll("*,:x");
                    q.push(",.*:");
                });
            }
            if (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) {
                ha(function(a) {
                    c.disconnectedMatch = s.call(a, "div");
                    s.call(a, "[s!='']:x");
                    r.push("!=", O);
                });
            }
            q = q.length && new RegExp(q.join("|"));
            r = r.length && new RegExp(r.join("|"));
            b = Z.test(o.compareDocumentPosition);
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
            B = b ? function(a, b) {
                if (a === b) {
                    l = true;
                    return 0;
                }
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (d) {
                    return d;
                }
                d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                if (d & 1 || !c.sortDetached && b.compareDocumentPosition(a) === d) {
                    if (a === n || a.ownerDocument === v && t(v, a)) {
                        return -1;
                    }
                    if (b === n || b.ownerDocument === v && t(v, b)) {
                        return 1;
                    }
                    return k ? J(k, a) - J(k, b) : 0;
                }
                return d & 4 ? -1 : 1;
            } : function(a, b) {
                if (a === b) {
                    l = true;
                    return 0;
                }
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [ a ], h = [ b ];
                if (!e || !f) {
                    return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                } else if (e === f) {
                    return ja(a, b);
                }
                c = a;
                while (c = c.parentNode) {
                    g.unshift(c);
                }
                c = b;
                while (c = c.parentNode) {
                    h.unshift(c);
                }
                while (g[d] === h[d]) {
                    d++;
                }
                return d ? ja(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
            };
            return n;
        };
        ea.matches = function(a, b) {
            return ea(a, null, null, b);
        };
        ea.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n) {
                m(a);
            }
            b = b.replace(T, "='$1']");
            if (c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) {
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && a.document.nodeType !== 11) {
                        return d;
                    }
                } catch (a) {}
            }
            return ea(b, n, null, [ a ]).length > 0;
        };
        ea.contains = function(a, b) {
            if ((a.ownerDocument || a) !== n) {
                m(a);
            }
            return t(a, b);
        };
        ea.attr = function(a, b) {
            if ((a.ownerDocument || a) !== n) {
                m(a);
            }
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : undefined;
            return f !== undefined ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        };
        ea.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        };
        ea.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
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
            k = null;
            return a;
        };
        e = ea.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (!f) {
                while (b = a[d++]) {
                    c += e(b);
                }
            } else if (f === 1 || f === 9 || f === 11) {
                if (typeof a.textContent === "string") {
                    return a.textContent;
                } else {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a);
                    }
                }
            } else if (f === 3 || f === 4) {
                return a.nodeValue;
            }
            return c;
        };
        d = ea.selectors = {
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
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca);
                    if (a[2] === "~=") {
                        a[3] = " " + a[3] + " ";
                    }
                    return a.slice(0, 4);
                },
                CHILD: function(a) {
                    a[1] = a[1].toLowerCase();
                    if (a[1].slice(0, 3) === "nth") {
                        if (!a[3]) {
                            ea.error(a[0]);
                        }
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
                    if (a[3]) {
                        a[2] = a[4] || a[5] || "";
                    } else if (c && U.test(c) && (b = g(c, true)) && (b = c.indexOf(")", c.length - b) - c.length)) {
                        a[0] = a[0].slice(0, b);
                        a[2] = c.slice(0, b);
                    }
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
                    return d === 1 && e === 0 ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = false;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p]) {
                                        if (h ? m.nodeName.toLowerCase() === r : m.nodeType === 1) {
                                            return false;
                                        }
                                    }
                                    o = p = a === "only" && !o && "nextSibling";
                                }
                                return true;
                            }
                            o = [ g ? q.firstChild : q.lastChild ];
                            if (g && s) {
                                m = q;
                                l = m[u] || (m[u] = {});
                                k = l[m.uniqueID] || (l[m.uniqueID] = {});
                                j = k[a] || [];
                                n = j[0] === w && j[1];
                                t = n && j[2];
                                m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                    if (m.nodeType === 1 && ++t && m === b) {
                                        k[a] = [ w, n, t ];
                                        break;
                                    }
                                }
                            } else {
                                if (s) {
                                    m = b;
                                    l = m[u] || (m[u] = {});
                                    k = l[m.uniqueID] || (l[m.uniqueID] = {});
                                    j = k[a] || [];
                                    n = j[0] === w && j[1];
                                    t = n;
                                }
                                if (t === false) {
                                    while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                        if ((h ? m.nodeName.toLowerCase() === r : m.nodeType === 1) && ++t) {
                                            if (s) {
                                                l = m[u] || (m[u] = {});
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
                            t -= e;
                            return t === d || t % d === 0 && t / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ea.error("unsupported pseudo: " + a);
                    if (e[u]) {
                        return e(b);
                    }
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
                not: ga(function(a) {
                    var b = [], c = [], d = h(a.replace(Q, "$1"));
                    return d[u] ? ga(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) {
                            if (f = g[h]) {
                                a[h] = !(b[h] = f);
                            }
                        }
                    }) : function(a, e, f) {
                        b[0] = a;
                        d(b, null, f, c);
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
                lang: ga(function(a) {
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
                enabled: function(a) {
                    return a.disabled === false;
                },
                disabled: function(a) {
                    return a.disabled === true;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && !!a.checked || b === "option" && !!a.selected;
                },
                selected: function(a) {
                    if (a.parentNode) {
                        a.parentNode.selectedIndex;
                    }
                    return a.selected === true;
                },
                empty: function(a) {
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
                    return a.nodeName.toLowerCase() === "input" && a.type === "text" && ((b = a.getAttribute("type")) == null || b.toLowerCase() === "text");
                },
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
                if (!c || (e = R.exec(h))) {
                    if (e) {
                        h = h.slice(e[0].length) || h;
                    }
                    i.push(f = []);
                }
                c = false;
                if (e = S.exec(h)) {
                    c = e.shift();
                    f.push({
                        value: c,
                        type: e[0].replace(Q, " ")
                    });
                    h = h.slice(c.length);
                }
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
            return b.first ? function(b, c, f) {
                while (b = b[d]) {
                    if (b.nodeType === 1 || e) {
                        return a(b, c, f);
                    }
                }
            } : function(b, c, g) {
                var h, i, j, k = [ w, f ];
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
                            i = j[b.uniqueID] || (j[b.uniqueID] = {});
                            if ((h = i[d]) && h[0] === w && h[1] === f) {
                                return k[2] = h[2];
                            } else {
                                i[d] = k;
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
                var j, k, l, m = [], n = [], o = g.length, p = f || sa(b || "*", h.nodeType ? [ h ] : h, []), q = a && (f || !b) ? ta(p, m, a, h, i) : p, r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c) {
                    c(q, r, h, i);
                }
                if (d) {
                    j = ta(r, n);
                    d(j, [], h, i);
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
                            j = [];
                            k = r.length;
                            while (k--) {
                                if (l = r[k]) {
                                    j.push(q[k] = l);
                                }
                            }
                            e(null, r = [], j, i);
                        }
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
            var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = qa(function(a) {
                return a === b;
            }, h, true), l = qa(function(a) {
                return J(b, a) > -1;
            }, h, true), m = [ function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                b = null;
                return e;
            } ];
            for (;i < f; i++) {
                if (c = d.relative[a[i].type]) {
                    m = [ qa(ra(m), c) ];
                } else {
                    c = d.filter[a[i].type].apply(null, a[i].matches);
                    if (c[u]) {
                        e = ++i;
                        for (;e < f; e++) {
                            if (d.relative[a[e].type]) {
                                break;
                            }
                        }
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
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find["TAG"]("*", k), y = w += v == null ? 1 : Math.random() || .1, z = x.length;
                if (k) {
                    j = g === n || g || k;
                }
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
                    if (c) {
                        if (l = !q && l) {
                            r--;
                        }
                        if (f) {
                            t.push(l);
                        }
                    }
                }
                r += s;
                if (c && s !== r) {
                    o = 0;
                    while (q = b[o++]) {
                        q(t, u, g, h);
                    }
                    if (f) {
                        if (r > 0) {
                            while (s--) {
                                if (!(t[s] || u[s])) {
                                    u[s] = F.call(i);
                                }
                            }
                        }
                        u = ta(u);
                    }
                    H.apply(i, u);
                    if (k && !f && u.length > 0 && r + b.length > 1) {
                        ea.uniqueSort(i);
                    }
                }
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
                f = A(a, wa(e, d));
                f.selector = a;
            }
            return f;
        };
        i = ea.select = function(a, b, e, f) {
            var i, j, k, l, m, n = typeof a === "function" && a, o = !f && g(a = n.selector || a);
            e = e || [];
            if (o.length === 1) {
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
                i = W["needsContext"].test(a) ? 0 : j.length;
                while (i--) {
                    k = j[i];
                    if (d.relative[l = k.type]) {
                        break;
                    }
                    if (m = d.find[l]) {
                        if (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && na(b.parentNode) || b)) {
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
            (n || h(a, o))(f, b, !p, e, !b || _.test(a) && na(b.parentNode) || b);
            return e;
        };
        c.sortStable = u.split("").sort(B).join("") === u;
        c.detectDuplicates = !!l;
        m();
        c.sortDetached = ha(function(a) {
            return a.compareDocumentPosition(n.createElement("div")) & 1;
        });
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
    function z(a, b, c) {
        if (n.isFunction(b)) {
            return n.grep(a, function(a, d) {
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
            return !!z(this, typeof a === "string" && w.test(a) ? n(a) : a || [], false).length;
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function(a, b, c) {
        var e, f;
        if (!a) {
            return this;
        }
        c = c || A;
        if (typeof a === "string") {
            if (a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3) {
                e = [ null, a, null ];
            } else {
                e = B.exec(a);
            }
            if (e && (e[1] || !b)) {
                if (e[1]) {
                    b = b instanceof n ? b[0] : b;
                    n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, true));
                    if (x.test(e[1]) && n.isPlainObject(b)) {
                        for (e in b) {
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
                    if (f && f.parentNode) {
                        if (f.id !== e[2]) {
                            return A.find(a);
                        }
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
            return typeof c.ready !== "undefined" ? c.ready(a) : a(n);
        }
        if (a.selector !== undefined) {
            this.selector = a.selector;
            this.context = a.context;
        }
        return n.makeArray(a, this);
    };
    C.prototype = n.fn;
    A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/, E = {
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
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : c.nodeType === 1 && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break;
                    }
                }
            }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
        },
        index: function(a) {
            if (!a) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof a === "string") {
                return n.inArray(this[0], n(a));
            }
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
                if (!E[a]) {
                    e = n.uniqueSort(e);
                }
                if (D.test(a)) {
                    e = e.reverse();
                }
            }
            return this.pushStack(e);
        };
    });
    var G = /\S+/g;
    function H(a) {
        var b = {};
        n.each(a.match(G) || [], function(a, c) {
            b[c] = true;
        });
        return b;
    }
    n.Callbacks = function(a) {
        a = typeof a === "string" ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function() {
            e = a.once;
            d = b = true;
            for (;g.length; h = -1) {
                c = g.shift();
                while (++h < f.length) {
                    if (f[h].apply(c[0], c[1]) === false && a.stopOnFalse) {
                        h = f.length;
                        c = false;
                    }
                }
            }
            if (!a.memory) {
                c = false;
            }
            b = false;
            if (e) {
                if (c) {
                    f = [];
                } else {
                    f = "";
                }
            }
        }, j = {
            add: function() {
                if (f) {
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
            remove: function() {
                n.each(arguments, function(a, b) {
                    var c;
                    while ((c = n.inArray(b, f, c)) > -1) {
                        f.splice(c, 1);
                        if (c <= h) {
                            h--;
                        }
                    }
                });
                return this;
            },
            has: function(a) {
                return a ? n.inArray(a, f) > -1 : f.length > 0;
            },
            empty: function() {
                if (f) {
                    f = [];
                }
                return this;
            },
            disable: function() {
                e = g = [];
                f = c = "";
                return this;
            },
            disabled: function() {
                return !f;
            },
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
            fire: function() {
                j.fireWith(this, arguments);
                return this;
            },
            fired: function() {
                return !!d;
            }
        };
        return j;
    };
    n.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", n.Callbacks("once memory"), "resolved" ], [ "reject", "fail", n.Callbacks("once memory"), "rejected" ], [ "notify", "progress", n.Callbacks("memory") ] ], c = "pending", d = {
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
                promise: function(a) {
                    return a != null ? n.extend(a, d) : d;
                }
            }, e = {};
            d.pipe = d.then;
            n.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add;
                if (h) {
                    g.add(function() {
                        c = h;
                    }, b[a ^ 1][2].disable, b[2][2].lock);
                }
                e[f[0]] = function() {
                    e[f[0] + "With"](this === e ? d : this, arguments);
                    return this;
                };
                e[f[0] + "With"] = g.fireWith;
            });
            d.promise(e);
            if (a) {
                a.call(e, e);
            }
            return e;
        },
        when: function(a) {
            var b = 0, c = e.call(arguments), d = c.length, f = d !== 1 || a && n.isFunction(a.promise) ? d : 0, g = f === 1 ? a : n.Deferred(), h = function(a, b, c) {
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
            if (!f) {
                g.resolveWith(k, c);
            }
            return g.promise();
        }
    });
    var I;
    n.fn.ready = function(a) {
        n.ready.promise().done(a);
        return this;
    };
    n.extend({
        isReady: false,
        readyWait: 1,
        holdReady: function(a) {
            if (a) {
                n.readyWait++;
            } else {
                n.ready(true);
            }
        },
        ready: function(a) {
            if (a === true ? --n.readyWait : n.isReady) {
                return;
            }
            n.isReady = true;
            if (a !== true && --n.readyWait > 0) {
                return;
            }
            I.resolveWith(d, [ n ]);
            if (n.fn.triggerHandler) {
                n(d).triggerHandler("ready");
                n(d).off("ready");
            }
        }
    });
    function J() {
        if (d.addEventListener) {
            d.removeEventListener("DOMContentLoaded", K);
            a.removeEventListener("load", K);
        } else {
            d.detachEvent("onreadystatechange", K);
            a.detachEvent("onload", K);
        }
    }
    function K() {
        if (d.addEventListener || a.event.type === "load" || d.readyState === "complete") {
            J();
            n.ready();
        }
    }
    n.ready.promise = function(b) {
        if (!I) {
            I = n.Deferred();
            if (d.readyState === "complete" || d.readyState !== "loading" && !d.documentElement.doScroll) {
                a.setTimeout(n.ready);
            } else if (d.addEventListener) {
                d.addEventListener("DOMContentLoaded", K);
                a.addEventListener("load", K);
            } else {
                d.attachEvent("onreadystatechange", K);
                a.attachEvent("onload", K);
                var c = false;
                try {
                    c = a.frameElement == null && d.documentElement;
                } catch (a) {}
                if (c && c.doScroll) {
                    (function b() {
                        if (!n.isReady) {
                            try {
                                c.doScroll("left");
                            } catch (c) {
                                return a.setTimeout(b, 50);
                            }
                            J();
                            n.ready();
                        }
                    })();
                }
            }
        }
        return I.promise(b);
    };
    n.ready.promise();
    var L;
    for (L in n(l)) {
        break;
    }
    l.ownFirst = L === "0";
    l.inlineBlockNeedsLayout = false;
    n(function() {
        var a, b, c, e;
        c = d.getElementsByTagName("body")[0];
        if (!c || !c.style) {
            return;
        }
        b = d.createElement("div");
        e = d.createElement("div");
        e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
        c.appendChild(e).appendChild(b);
        if (typeof b.style.zoom !== "undefined") {
            b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
            l.inlineBlockNeedsLayout = a = b.offsetWidth === 3;
            if (a) {
                c.style.zoom = 1;
            }
        }
        c.removeChild(e);
    });
    (function() {
        var a = d.createElement("div");
        l.deleteExpando = true;
        try {
            delete a.test;
        } catch (a) {
            l.deleteExpando = false;
        }
        a = null;
    })();
    var M = function(a) {
        var b = n.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
        return c !== 1 && c !== 9 ? false : !b || b !== true && a.getAttribute("classid") === b;
    };
    var N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
    function P(a, b, c) {
        if (c === undefined && a.nodeType === 1) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            c = a.getAttribute(d);
            if (typeof c === "string") {
                try {
                    c = c === "true" ? true : c === "false" ? false : c === "null" ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
                } catch (a) {}
                n.data(a, b, c);
            } else {
                c = undefined;
            }
        }
        return c;
    }
    function Q(a) {
        var b;
        for (b in a) {
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
        var f, g, h = n.expando, i = a.nodeType, j = i ? n.cache : a, k = i ? a[h] : a[h] && h;
        if ((!k || !j[k] || !e && !j[k].data) && d === undefined && typeof b === "string") {
            return;
        }
        if (!k) {
            if (i) {
                k = a[h] = c.pop() || n.guid++;
            } else {
                k = h;
            }
        }
        if (!j[k]) {
            j[k] = i ? {} : {
                toJSON: n.noop
            };
        }
        if (typeof b === "object" || typeof b === "function") {
            if (e) {
                j[k] = n.extend(j[k], b);
            } else {
                j[k].data = n.extend(j[k].data, b);
            }
        }
        g = j[k];
        if (!e) {
            if (!g.data) {
                g.data = {};
            }
            g = g.data;
        }
        if (d !== undefined) {
            g[n.camelCase(b)] = d;
        }
        if (typeof b === "string") {
            f = g[b];
            if (f == null) {
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
        var d, e, f = a.nodeType, g = f ? n.cache : a, h = f ? a[n.expando] : n.expando;
        if (!g[h]) {
            return;
        }
        if (b) {
            d = c ? g[h] : g[h].data;
            if (d) {
                if (!n.isArray(b)) {
                    if (b in d) {
                        b = [ b ];
                    } else {
                        b = n.camelCase(b);
                        if (b in d) {
                            b = [ b ];
                        } else {
                            b = b.split(" ");
                        }
                    }
                } else {
                    b = b.concat(n.map(b, n.camelCase));
                }
                e = b.length;
                while (e--) {
                    delete d[b[e]];
                }
                if (c ? !Q(d) : !n.isEmptyObject(d)) {
                    return;
                }
            }
        }
        if (!c) {
            delete g[h].data;
            if (!Q(g[h])) {
                return;
            }
        }
        if (f) {
            n.cleanData([ a ], true);
        } else if (l.deleteExpando || g != g.window) {
            delete g[h];
        } else {
            g[h] = undefined;
        }
    }
    n.extend({
        cache: {},
        noData: {
            "applet ": true,
            "embed ": true,
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
            if (a === undefined) {
                if (this.length) {
                    e = n.data(f);
                    if (f.nodeType === 1 && !n._data(f, "parsedAttrs")) {
                        c = g.length;
                        while (c--) {
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
            if (typeof a === "object") {
                return this.each(function() {
                    n.data(this, a);
                });
            }
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
            if (e === "inprogress") {
                e = c.shift();
                d--;
            }
            if (e) {
                if (b === "fx") {
                    c.unshift("inprogress");
                }
                delete f.stop;
                e.call(a, g, f);
            }
            if (!d && f) {
                f.empty.fire();
            }
        },
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
            a = false;
            var b, c, e;
            c = d.getElementsByTagName("body")[0];
            if (!c || !c.style) {
                return;
            }
            b = d.createElement("div");
            e = d.createElement("div");
            e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            c.appendChild(e).appendChild(b);
            if (typeof b.style.zoom !== "undefined") {
                b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;" + "padding:1px;width:1px;zoom:1";
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
        a = b || a;
        return n.css(a, "display") === "none" || !n.contains(a.ownerDocument, a);
    };
    function X(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function() {
            return d.cur();
        } : function() {
            return n.css(a, b, "");
        }, i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), k = (n.cssNumber[b] || j !== "px" && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3];
            c = c || [];
            k = +i || 1;
            do {
                f = f || ".5";
                k = k / f;
                n.style(a, b, k + j);
            } while (f !== (f = h() / i) && f !== 1 && --g);
        }
        if (c) {
            k = +k || +i || 0;
            e = c[1] ? k + (c[1] + 1) * c[2] : +c[2];
            if (d) {
                d.unit = j;
                d.start = k;
                d.end = e;
            }
        }
        return e;
    }
    var Y = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = c == null;
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
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        l.leadingWhitespace = a.firstChild.nodeType === 3;
        l.tbody = !a.getElementsByTagName("tbody").length;
        l.htmlSerialize = !!a.getElementsByTagName("link").length;
        l.html5Clone = d.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
        c.type = "checkbox";
        c.checked = true;
        b.appendChild(c);
        l.appendChecked = c.checked;
        a.innerHTML = "<textarea>x</textarea>";
        l.noCloneChecked = !!a.cloneNode(true).lastChild.defaultValue;
        b.appendChild(a);
        c = d.createElement("input");
        c.setAttribute("type", "radio");
        c.setAttribute("checked", "checked");
        c.setAttribute("name", "t");
        a.appendChild(c);
        l.checkClone = a.cloneNode(true).cloneNode(true).lastChild.checked;
        l.noCloneEvent = !!a.addEventListener;
        a[n.expando] = 1;
        l.attributes = !a.getAttribute(n.expando);
    })();
    var da = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: l.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    };
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
        var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0;
        for (;r < o; r++) {
            g = a[r];
            if (g || g === 0) {
                if (n.type(g) === "object") {
                    n.merge(q, g.nodeType ? [ g ] : g);
                } else if (!ga.test(g)) {
                    q.push(b.createTextNode(g));
                } else {
                    i = i || p.appendChild(b.createElement("div"));
                    j = ($.exec(g) || [ "", "" ])[1].toLowerCase();
                    m = da[j] || da._default;
                    i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2];
                    f = m[0];
                    while (f--) {
                        i = i.lastChild;
                    }
                    if (!l.leadingWhitespace && aa.test(g)) {
                        q.push(b.createTextNode(aa.exec(g)[0]));
                    }
                    if (!l.tbody) {
                        g = j === "table" && !ha.test(g) ? i.firstChild : m[1] === "<table>" && !ha.test(g) ? i : 0;
                        f = g && g.childNodes.length;
                        while (f--) {
                            if (n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length) {
                                g.removeChild(k);
                            }
                        }
                    }
                    n.merge(q, i.childNodes);
                    i.textContent = "";
                    while (i.firstChild) {
                        i.removeChild(i.firstChild);
                    }
                    i = p.lastChild;
                }
            }
        }
        if (i) {
            p.removeChild(i);
        }
        if (!l.appendChecked) {
            n.grep(ea(q, "input"), ia);
        }
        r = 0;
        while (g = q[r++]) {
            if (d && n.inArray(g, d) > -1) {
                if (e) {
                    e.push(g);
                }
                continue;
            }
            h = n.contains(g.ownerDocument, g);
            i = ea(p.appendChild(g), "script");
            if (h) {
                fa(i);
            }
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
        for (b in {
            submit: true,
            change: true,
            focusin: true
        }) {
            c = "on" + b;
            if (!(l[b] = c in a)) {
                e.setAttribute(c, "t");
                l[b] = e.attributes[c].expando === false;
            }
        }
        e = null;
    })();
    var ka = /^(?:input|select|textarea)$/i, la = /^key/, ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, na = /^(?:focusinfocus|focusoutblur)$/, oa = /^([^.]*)(?:\.(.+)|)/;
    function pa() {
        return true;
    }
    function qa() {
        return false;
    }
    function ra() {
        try {
            return d.activeElement;
        } catch (a) {}
    }
    function sa(a, b, c, d, e, f) {
        var g, h;
        if (typeof b === "object") {
            if (typeof c !== "string") {
                d = d || c;
                c = undefined;
            }
            for (h in b) {
                sa(a, h, c, d, b[h], f);
            }
            return a;
        }
        if (d == null && e == null) {
            e = c;
            d = c = undefined;
        } else if (e == null) {
            if (typeof c === "string") {
                e = d;
                d = undefined;
            } else {
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
                n().off(a);
                return g.apply(this, arguments);
            };
            e.guid = g.guid || (g.guid = n.guid++);
        }
        return a.each(function() {
            n.event.add(this, b, e, d, c);
        });
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (!r) {
                return;
            }
            if (c.handler) {
                i = c;
                c = i.handler;
                e = i.selector;
            }
            if (!c.guid) {
                c.guid = n.guid++;
            }
            if (!(g = r.events)) {
                g = r.events = {};
            }
            if (!(k = r.handle)) {
                k = r.handle = function(a) {
                    return typeof n !== "undefined" && (!a || n.event.triggered !== a.type) ? n.event.dispatch.apply(k.elem, arguments) : undefined;
                };
                k.elem = a;
            }
            b = (b || "").match(G) || [ "" ];
            h = b.length;
            while (h--) {
                f = oa.exec(b[h]) || [];
                o = q = f[1];
                p = (f[2] || "").split(".").sort();
                if (!o) {
                    continue;
                }
                j = n.event.special[o] || {};
                o = (e ? j.delegateType : j.bindType) || o;
                j = n.event.special[o] || {};
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
                if (!(m = g[o])) {
                    m = g[o] = [];
                    m.delegateCount = 0;
                    if (!j.setup || j.setup.call(a, d, p, k) === false) {
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
                if (e) {
                    m.splice(m.delegateCount++, 0, l);
                } else {
                    m.push(l);
                }
                n.event.global[o] = true;
            }
            a = null;
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (!r || !(k = r.events)) {
                return;
            }
            b = (b || "").match(G) || [ "" ];
            j = b.length;
            while (j--) {
                h = oa.exec(b[j]) || [];
                o = q = h[1];
                p = (h[2] || "").split(".").sort();
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
                if (i && !m.length) {
                    if (!l.teardown || l.teardown.call(a, p, r.handle) === false) {
                        n.removeEvent(a, o, r.handle);
                    }
                    delete k[o];
                }
            }
            if (n.isEmptyObject(k)) {
                delete r.handle;
                n._removeData(a, "events");
            }
        },
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [ e || d ], q = k.call(b, "type") ? b.type : b, r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            i = m = e = e || d;
            if (e.nodeType === 3 || e.nodeType === 8) {
                return;
            }
            if (na.test(q + n.event.triggered)) {
                return;
            }
            if (q.indexOf(".") > -1) {
                r = q.split(".");
                q = r.shift();
                r.sort();
            }
            h = q.indexOf(":") < 0 && "on" + q;
            b = b[n.expando] ? b : new n.Event(q, typeof b === "object" && b);
            b.isTrigger = f ? 2 : 3;
            b.namespace = r.join(".");
            b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            b.result = undefined;
            if (!b.target) {
                b.target = e;
            }
            c = c == null ? [ b ] : n.makeArray(c, [ b ]);
            l = n.event.special[q] || {};
            if (!f && l.trigger && l.trigger.apply(e, c) === false) {
                return;
            }
            if (!f && !l.noBubble && !n.isWindow(e)) {
                j = l.delegateType || q;
                if (!na.test(j + q)) {
                    i = i.parentNode;
                }
                for (;i; i = i.parentNode) {
                    p.push(i);
                    m = i;
                }
                if (m === (e.ownerDocument || d)) {
                    p.push(m.defaultView || m.parentWindow || a);
                }
            }
            o = 0;
            while ((i = p[o++]) && !b.isPropagationStopped()) {
                b.type = o > 1 ? j : l.bindType || q;
                g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle");
                if (g) {
                    g.apply(i, c);
                }
                g = h && i[h];
                if (g && g.apply && M(i)) {
                    b.result = g.apply(i, c);
                    if (b.result === false) {
                        b.preventDefault();
                    }
                }
            }
            b.type = q;
            if (!f && !b.isDefaultPrevented()) {
                if ((!l._default || l._default.apply(p.pop(), c) === false) && M(e)) {
                    if (h && e[q] && !n.isWindow(e)) {
                        m = e[h];
                        if (m) {
                            e[h] = null;
                        }
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
            a = n.event.fix(a);
            var b, c, d, f, g, h = [], i = e.call(arguments), j = (n._data(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            i[0] = a;
            a.delegateTarget = this;
            if (k.preDispatch && k.preDispatch.call(this, a) === false) {
                return;
            }
            h = n.event.handlers.call(this, a, j);
            b = 0;
            while ((f = h[b++]) && !a.isPropagationStopped()) {
                a.currentTarget = f.elem;
                c = 0;
                while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
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
            if (k.postDispatch) {
                k.postDispatch.call(this, a);
            }
            return a.result;
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (a.type !== "click" || isNaN(a.button) || a.button < 1)) {
                for (;i != this; i = i.parentNode || this) {
                    if (i.nodeType === 1 && (i.disabled !== true || a.type !== "click")) {
                        d = [];
                        for (c = 0; c < h; c++) {
                            f = b[c];
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
            if (!a.target) {
                a.target = g.srcElement || d;
            }
            if (a.target.nodeType === 3) {
                a.target = a.target.parentNode;
            }
            a.metaKey = !!a.metaKey;
            return h.filter ? h.filter(a, g) : a;
        },
        props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " + "metaKey relatedTarget shiftKey target timeStamp view which").split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
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
                if (a.pageX == null && b.clientX != null) {
                    e = a.target.ownerDocument || d;
                    f = e.documentElement;
                    c = e.body;
                    a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0);
                    a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0);
                }
                if (!a.relatedTarget && h) {
                    a.relatedTarget = h === a.target ? b.toElement : h;
                }
                if (!a.which && g !== undefined) {
                    a.which = g & 1 ? 1 : g & 2 ? 3 : g & 4 ? 2 : 0;
                }
                return a;
            }
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
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
                trigger: function() {
                    if (n.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        this.click();
                        return false;
                    }
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    if (a.result !== undefined && a.originalEvent) {
                        a.originalEvent.returnValue = a.result;
                    }
                }
            }
        },
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
        if (a.removeEventListener) {
            a.removeEventListener(b, c);
        }
    } : function(a, b, c) {
        var d = "on" + b;
        if (a.detachEvent) {
            if (typeof a[d] === "undefined") {
                a[d] = null;
            }
            a.detachEvent(d, c);
        }
    };
    n.Event = function(a, b) {
        if (!(this instanceof n.Event)) {
            return new n.Event(a, b);
        }
        if (a && a.type) {
            this.originalEvent = a;
            this.type = a.type;
            this.isDefaultPrevented = a.defaultPrevented || a.defaultPrevented === undefined && a.returnValue === false ? pa : qa;
        } else {
            this.type = a;
        }
        if (b) {
            n.extend(this, b);
        }
        this.timeStamp = a && a.timeStamp || n.now();
        this[n.expando] = true;
    };
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
            if (a.stopPropagation) {
                a.stopPropagation();
            }
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
                if (!e || e !== d && !n.contains(d, e)) {
                    a.type = f.origType;
                    c = f.handler.apply(this, arguments);
                    a.type = b;
                }
                return c;
            }
        };
    });
    if (!l.submit) {
        n.event.special.submit = {
            setup: function() {
                if (n.nodeName(this, "form")) {
                    return false;
                }
                n.event.add(this, "click._submit keypress._submit", function(a) {
                    var b = a.target, c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : undefined;
                    if (c && !n._data(c, "submit")) {
                        n.event.add(c, "submit._submit", function(a) {
                            a._submitBubble = true;
                        });
                        n._data(c, "submit", true);
                    }
                });
            },
            postDispatch: function(a) {
                if (a._submitBubble) {
                    delete a._submitBubble;
                    if (this.parentNode && !a.isTrigger) {
                        n.event.simulate("submit", this.parentNode, a);
                    }
                }
            },
            teardown: function() {
                if (n.nodeName(this, "form")) {
                    return false;
                }
                n.event.remove(this, "._submit");
            }
        };
    }
    if (!l.change) {
        n.event.special.change = {
            setup: function() {
                if (ka.test(this.nodeName)) {
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
                            n.event.simulate("change", this, a);
                        });
                    }
                    return false;
                }
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
    if (!l.focusin) {
        n.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
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
                d = a.handleObj;
                n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler);
                return this;
            }
            if (typeof a === "object") {
                for (e in a) {
                    this.off(e, b, a[e]);
                }
                return this;
            }
            if (b === false || typeof b === "function") {
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
    var ta = / jQuery\d+="(?:null|\d+)"/g, ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"), va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, wa = /<script|<style|<link/i, xa = /checked\s*(?:[^=]|=\s*.checked.)/i, ya = /^true\/(.*)/, za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Aa = ca(d), Ba = Aa.appendChild(d.createElement("div"));
    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(b.nodeType !== 11 ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
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
        if (g.data) {
            g.data = n.extend({}, g.data);
        }
    }
    function Ga(a, b) {
        var c, d, e;
        if (b.nodeType !== 1) {
            return;
        }
        c = b.nodeName.toLowerCase();
        if (!l.noCloneEvent && b[n.expando]) {
            e = n._data(b);
            for (d in e.events) {
                n.removeEvent(b, d, e.handle);
            }
            b.removeAttribute(n.expando);
        }
        if (c === "script" && b.text !== a.text) {
            Da(b).text = a.text;
            Ea(b);
        } else if (c === "object") {
            if (b.parentNode) {
                b.outerHTML = a.outerHTML;
            }
            if (l.html5Clone && (a.innerHTML && !n.trim(b.innerHTML))) {
                b.innerHTML = a.innerHTML;
            }
        } else if (c === "input" && Z.test(a.type)) {
            b.defaultChecked = b.checked = a.checked;
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
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q);
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
            if (e || d) {
                i = n.map(ea(k, "script"), Da);
                h = i.length;
                for (;m < o; m++) {
                    g = k;
                    if (m !== p) {
                        g = n.clone(g, true, true);
                        if (h) {
                            n.merge(i, ea(g, "script"));
                        }
                    }
                    c.call(a[m], g, m);
                }
                if (h) {
                    j = i[i.length - 1].ownerDocument;
                    n.map(i, Ea);
                    for (m = 0; m < h; m++) {
                        g = i[m];
                        if (_.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g)) {
                            if (g.src) {
                                if (n._evalUrl) {
                                    n._evalUrl(g.src);
                                }
                            } else {
                                n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, ""));
                            }
                        }
                    }
                }
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
                d = ea(f);
                h = ea(a);
                for (g = 0; (e = h[g]) != null; ++g) {
                    if (d[g]) {
                        Ga(e, d[g]);
                    }
                }
            }
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
            d = ea(f, "script");
            if (d.length > 0) {
                fa(d, !i && ea(a, "script"));
            }
            d = h = e = null;
            return f;
        },
        cleanData: function(a, b) {
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
                        if (j[f]) {
                            delete j[f];
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
                if (a.nodeType === 1) {
                    n.cleanData(ea(a, false));
                }
                while (a.firstChild) {
                    a.removeChild(a.firstChild);
                }
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
                if (typeof a === "string" && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (;c < d; c++) {
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
                g.apply(e, c.get());
            }
            return this.pushStack(e);
        };
    });
    var Ja, Ka = {
        HTML: "block",
        BODY: "block"
    };
    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body), d = n.css(c[0], "display");
        c.detach();
        return d;
    }
    function Ma(a) {
        var b = d, c = Ka[a];
        if (!c) {
            c = La(a, b);
            if (c === "none" || !c) {
                Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement);
                b = (Ja[0].contentWindow || Ja[0].contentDocument).document;
                b.write();
                b.close();
                c = La(a, b);
                Ja.detach();
            }
            Ka[a] = c;
        }
        return c;
    }
    var Na = /^margin/;
    var Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i");
    var Pa = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) {
            g[f] = a.style[f];
            a.style[f] = b[f];
        }
        e = c.apply(a, d || []);
        for (f in b) {
            a.style[f] = g[f];
        }
        return e;
    };
    var Qa = d.documentElement;
    (function() {
        var b, c, e, f, g, h, i = d.createElement("div"), j = d.createElement("div");
        if (!j.style) {
            return;
        }
        j.style.cssText = "float:left;opacity:.5";
        l.opacity = j.style.opacity === "0.5";
        l.cssFloat = !!j.style.cssFloat;
        j.style.backgroundClip = "content-box";
        j.cloneNode(true).style.backgroundClip = "";
        l.clearCloneStyle = j.style.backgroundClip === "content-box";
        i = d.createElement("div");
        i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
        j.innerHTML = "";
        i.appendChild(j);
        l.boxSizing = j.style.boxSizing === "" || j.style.MozBoxSizing === "" || j.style.WebkitBoxSizing === "";
        n.extend(l, {
            reliableHiddenOffsets: function() {
                if (b == null) {
                    k();
                }
                return f;
            },
            boxSizingReliable: function() {
                if (b == null) {
                    k();
                }
                return e;
            },
            pixelMarginRight: function() {
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
                if (b == null) {
                    k();
                }
                return g;
            },
            reliableMarginLeft: function() {
                if (b == null) {
                    k();
                }
                return h;
            }
        });
        function k() {
            var k, l, m = d.documentElement;
            m.appendChild(i);
            j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
            b = e = h = false;
            c = g = true;
            if (a.getComputedStyle) {
                l = a.getComputedStyle(j);
                b = (l || {}).top !== "1%";
                h = (l || {}).marginLeft === "2px";
                e = (l || {
                    width: "4px"
                }).width === "4px";
                j.style.marginRight = "50%";
                c = (l || {
                    marginRight: "4px"
                }).marginRight === "4px";
                k = j.appendChild(d.createElement("div"));
                k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                k.style.marginRight = k.style.width = "0";
                j.style.width = "1px";
                g = !parseFloat((a.getComputedStyle(k) || {}).marginRight);
                j.removeChild(k);
            }
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
            m.removeChild(i);
        }
    })();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    if (a.getComputedStyle) {
        Ra = function(b) {
            var c = b.ownerDocument.defaultView;
            if (!c || !c.opener) {
                c = a;
            }
            return c.getComputedStyle(b);
        };
        Sa = function(a, b, c) {
            var d, e, f, g, h = a.style;
            c = c || Ra(a);
            g = c ? c.getPropertyValue(b) || c[b] : undefined;
            if ((g === "" || g === undefined) && !n.contains(a.ownerDocument, a)) {
                g = n.style(a, b);
            }
            if (c) {
                if (!l.pixelMarginRight() && Oa.test(g) && Na.test(b)) {
                    d = h.width;
                    e = h.minWidth;
                    f = h.maxWidth;
                    h.minWidth = h.maxWidth = h.width = g;
                    g = c.width;
                    h.width = d;
                    h.minWidth = e;
                    h.maxWidth = f;
                }
            }
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
            if (g == null && h && h[b]) {
                g = h[b];
            }
            if (Oa.test(g) && !Ta.test(b)) {
                d = h.left;
                e = a.runtimeStyle;
                f = e && e.left;
                if (f) {
                    e.left = a.currentStyle.left;
                }
                h.left = b === "fontSize" ? "1em" : g;
                g = h.pixelLeft + "px";
                h.left = d;
                if (f) {
                    e.left = f;
                }
            }
            return g === undefined ? g : g + "" || "auto";
        };
    }
    function Ua(a, b) {
        return {
            get: function() {
                if (a()) {
                    delete this.get;
                    return;
                }
                return (this.get = b).apply(this, arguments);
            }
        };
    }
    var Va = /alpha\([^)]*\)/i, Wa = /opacity\s*=\s*([^)]*)/i, Xa = /^(none|table(?!-c[ea]).+)/, Ya = new RegExp("^(" + T + ")(.*)$", "i"), Za = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, $a = {
        letterSpacing: "0",
        fontWeight: "400"
    }, _a = [ "Webkit", "O", "Moz", "ms" ], ab = d.createElement("div").style;
    function bb(a) {
        if (a in ab) {
            return a;
        }
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
                if (!f[g] && c === "none") {
                    d.style.display = "";
                }
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
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function eb(a, b, c, d, e) {
        var f = c === (d ? "border" : "content") ? 4 : b === "width" ? 1 : 0, g = 0;
        for (;f < 4; f += 2) {
            if (c === "margin") {
                g += n.css(a, c + V[f], true, e);
            }
            if (d) {
                if (c === "content") {
                    g -= n.css(a, "padding" + V[f], true, e);
                }
                if (c !== "margin") {
                    g -= n.css(a, "border" + V[f] + "Width", true, e);
                }
            } else {
                g += n.css(a, "padding" + V[f], true, e);
                if (c !== "padding") {
                    g += n.css(a, "border" + V[f] + "Width", true, e);
                }
            }
        }
        return g;
    }
    function fb(a, b, c) {
        var d = true, e = b === "width" ? a.offsetWidth : a.offsetHeight, f = Ra(a), g = l.boxSizing && n.css(a, "boxSizing", false, f) === "border-box";
        if (e <= 0 || e == null) {
            e = Sa(a, b, f);
            if (e < 0 || e == null) {
                e = a.style[b];
            }
            if (Oa.test(e)) {
                return e;
            }
            d = g && (l.boxSizingReliable() || e === a.style[b]);
            e = parseFloat(e) || 0;
        }
        return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return c === "" ? "1" : c;
                    }
                }
            }
        },
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
        cssProps: {
            float: l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) {
                return;
            }
            var e, f, g, h = n.camelCase(b), i = a.style;
            b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h);
            g = n.cssHooks[b] || n.cssHooks[h];
            if (c !== undefined) {
                f = typeof c;
                if (f === "string" && (e = U.exec(c)) && e[1]) {
                    c = X(a, b, e);
                    f = "number";
                }
                if (c == null || c !== c) {
                    return;
                }
                if (f === "number") {
                    c += e && e[3] || (n.cssNumber[h] ? "" : "px");
                }
                if (!l.clearCloneStyle && c === "" && b.indexOf("background") === 0) {
                    i[b] = "inherit";
                }
                if (!g || !("set" in g) || (c = g.set(a, c, d)) !== undefined) {
                    try {
                        i[b] = c;
                    } catch (a) {}
                }
            } else {
                if (g && "get" in g && (e = g.get(a, false, d)) !== undefined) {
                    return e;
                }
                return i[b];
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h);
            g = n.cssHooks[b] || n.cssHooks[h];
            if (g && "get" in g) {
                f = g.get(a, true, c);
            }
            if (f === undefined) {
                f = Sa(a, b, d);
            }
            if (f === "normal" && b in $a) {
                f = $a[b];
            }
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
                return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
            },
            set: function(a, b) {
                var c = a.style, d = a.currentStyle, e = n.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "", f = d && d.filter || c.filter || "";
                c.zoom = 1;
                if ((b >= 1 || b === "") && n.trim(f.replace(Va, "")) === "" && c.removeAttribute) {
                    c.removeAttribute("filter");
                    if (b === "" || d && !d.filter) {
                        return;
                    }
                }
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
            return (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
                marginLeft: 0
            }, function() {
                return a.getBoundingClientRect().left;
            }) : 0)) + "px";
        }
    });
    n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                var d = 0, e = {}, f = typeof c === "string" ? c.split(" ") : [ c ];
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
                if (a.elem.nodeType !== 1 || a.elem[a.prop] != null && a.elem.style[a.prop] == null) {
                    return a.elem[a.prop];
                }
                b = n.css(a.elem, a.prop, "");
                return !b || b === "auto" ? 0 : b;
            },
            set: function(a) {
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
    n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/, kb = /queueHooks$/;
    function lb() {
        a.setTimeout(function() {
            hb = undefined;
        });
        return hb = n.now();
    }
    function mb(a, b) {
        var c, d = {
            height: a
        }, e = 0;
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
                return d;
            }
        }
    }
    function ob(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this, o = {}, p = a.style, q = a.nodeType && W(a), r = n._data(a, "fxshow");
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
                m.always(function() {
                    h.unqueued--;
                    if (!n.queue(a, "fx").length) {
                        h.empty.fire();
                    }
                });
            });
        }
        if (a.nodeType === 1 && ("height" in b || "width" in b)) {
            c.overflow = [ p.overflow, p.overflowX, p.overflowY ];
            j = n.css(a, "display");
            k = j === "none" ? n._data(a, "olddisplay") || Ma(a.nodeName) : j;
            if (k === "inline" && n.css(a, "float") === "none") {
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
        for (d in b) {
            e = b[d];
            if (jb.exec(e)) {
                delete b[d];
                f = f || e === "toggle";
                if (e === (q ? "hide" : "show")) {
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
            delete i.elem;
        }), i = function() {
            if (e) {
                return false;
            }
            var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length;
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
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) {
                    return this;
                }
                e = true;
                for (;c < d; c++) {
                    j.tweens[c].run(1);
                }
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
        if (d.queue == null || d.queue === true) {
            d.queue = "fx";
        }
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
            return this.filter(W).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function() {
                var b = qb(this, n.extend({}, a), f);
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
                c.finish = true;
                n.queue(this, a, []);
                if (e && e.stop) {
                    e.stop.call(this, true);
                }
                for (b = f.length; b--; ) {
                    if (f[b].elem === this && f[b].queue === a) {
                        f[b].anim.stop(true);
                        f.splice(b, 1);
                    }
                }
                for (b = 0; b < g; b++) {
                    if (d[b] && d[b].finish) {
                        d[b].finish.call(this);
                    }
                }
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
        _default: 400
    };
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
        c = d.createElement("div");
        c.setAttribute("className", "t");
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        a = c.getElementsByTagName("a")[0];
        b.setAttribute("type", "checkbox");
        c.appendChild(b);
        a = c.getElementsByTagName("a")[0];
        a.style.cssText = "top:1px";
        l.getSetAttribute = c.className !== "t";
        l.style = /top/.test(a.getAttribute("style"));
        l.hrefNormalized = a.getAttribute("href") === "/a";
        l.checkOn = !!b.value;
        l.optSelected = f.selected;
        l.enctype = !!d.createElement("form").enctype;
        e.disabled = true;
        l.optDisabled = !f.disabled;
        b = d.createElement("input");
        b.setAttribute("value", "");
        l.input = b.getAttribute("value") === "";
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
                    return b != null ? b : n.trim(n.text(a)).replace(sb, " ");
                }
            },
            select: {
                get: function(a) {
                    var b, c, d = a.options, e = a.selectedIndex, f = a.type === "select-one" || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0;
                    for (;i < h; i++) {
                        c = d[i];
                        if ((c.selected || i === e) && (l.optDisabled ? !c.disabled : c.getAttribute("disabled") === null) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            b = n(c).val();
                            if (f) {
                                return b;
                            }
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
                            try {
                                d.selected = c = true;
                            } catch (a) {
                                d.scrollHeight;
                            }
                        } else {
                            d.selected = false;
                        }
                    }
                    if (!c) {
                        a.selectedIndex = -1;
                    }
                    return e;
                }
            }
        }
    });
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
            if (f === 3 || f === 8 || f === 2) {
                return;
            }
            if (typeof a.getAttribute === "undefined") {
                return n.prop(a, b, c);
            }
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
            return d == null ? undefined : d;
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && b === "radio" && n.nodeName(a, "input")) {
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
                    if (n.expr.match.bool.test(c)) {
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
    ub = {
        set: function(a, b, c) {
            if (b === false) {
                n.removeAttr(a, c);
            } else if (yb && xb || !wb.test(c)) {
                a.setAttribute(!xb && n.propFix[c] || c, c);
            } else {
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
    if (!yb || !xb) {
        n.attrHooks.value = {
            set: function(a, b, c) {
                if (n.nodeName(a, "input")) {
                    a.defaultValue = b;
                } else {
                    return tb && tb.set(a, b, c);
                }
            }
        };
    }
    if (!xb) {
        tb = {
            set: function(a, b, c) {
                var d = a.getAttributeNode(c);
                if (!d) {
                    a.setAttributeNode(d = a.ownerDocument.createAttribute(c));
                }
                d.value = b += "";
                if (c === "value" || b === a.getAttribute(c)) {
                    return b;
                }
            }
        };
        vb.id = vb.name = vb.coords = function(a, b, c) {
            var d;
            if (!c) {
                return (d = a.getAttributeNode(b)) && d.value !== "" ? d.value : null;
            }
        };
        n.valHooks.button = {
            get: function(a, b) {
                var c = a.getAttributeNode(b);
                if (c && c.specified) {
                    return c.value;
                }
            },
            set: tb.set
        };
        n.attrHooks.contenteditable = {
            set: function(a, b, c) {
                tb.set(a, b === "" ? false : b, c);
            }
        };
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
            if (f === 3 || f === 8 || f === 2) {
                return;
            }
            if (f !== 1 || !n.isXMLDoc(a)) {
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
    if (!l.hrefNormalized) {
        n.each([ "href", "src" ], function(a, b) {
            n.propHooks[b] = {
                get: function(a) {
                    return a.getAttribute(b, 4);
                }
            };
        });
    }
    if (!l.optSelected) {
        n.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                if (b) {
                    b.selectedIndex;
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
                    d = c.nodeType === 1 && (" " + e + " ").replace(Bb, " ");
                    if (d) {
                        g = 0;
                        while (f = b[g++]) {
                            while (d.indexOf(" " + f + " ") > -1) {
                                d = d.replace(" " + f + " ", " ");
                            }
                        }
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
                    d = 0;
                    e = n(this);
                    f = a.match(G) || [];
                    while (b = f[d++]) {
                        if (e.hasClass(b)) {
                            e.removeClass(b);
                        } else {
                            e.addClass(b);
                        }
                    }
                } else if (a === undefined || c === "boolean") {
                    b = Cb(this);
                    if (b) {
                        n._data(this, "__className__", b);
                    }
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
    n.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(a, b) {
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
        if (a.JSON && a.JSON.parse) {
            return a.JSON.parse(b + "");
        }
        var c, d = null, e = n.trim(b + "");
        return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
            if (c && b) {
                d = 0;
            }
            if (d === 0) {
                return a;
            }
            c = e || b;
            d += !f - !e;
            return "";
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b);
    };
    n.parseXML = function(b) {
        var c, d;
        if (!b || typeof b !== "string") {
            return null;
        }
        try {
            if (a.DOMParser) {
                d = new a.DOMParser();
                c = d.parseFromString(b, "text/xml");
            } else {
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
    var Hb = /#.*$/, Ib = /([?&])_=[^&]*/, Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Lb = /^(?:GET|HEAD)$/, Mb = /^\/\//, Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Ob = {}, Pb = {}, Qb = "*/".concat("*"), Rb = Db.href, Sb = Nb.exec(Rb.toLowerCase()) || [];
    function Tb(a) {
        return function(b, c) {
            if (typeof b !== "string") {
                c = b;
                b = "*";
            }
            var d, e = 0, f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c)) {
                while (d = f[e++]) {
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
    function Wb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while (i[0] === "*") {
            i.shift();
            if (e === undefined) {
                e = a.mimeType || b.getResponseHeader("Content-Type");
            }
        }
        if (e) {
            for (g in h) {
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break;
                }
            }
        }
        if (i[0] in c) {
            f = i[0];
        } else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break;
                }
                if (!d) {
                    d = g;
                }
            }
            f = f || d;
        }
        if (f) {
            if (f !== i[0]) {
                i.unshift(f);
            }
            return c[f];
        }
    }
    function Xb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) {
            for (g in a.converters) {
                j[g.toLowerCase()] = a.converters[g];
            }
        }
        f = k.shift();
        while (f) {
            if (a.responseFields[f]) {
                c[a.responseFields[f]] = b;
            }
            if (!i && d && a.dataFilter) {
                b = a.dataFilter(b, a.dataType);
            }
            i = f;
            f = k.shift();
            if (f) {
                if (f === "*") {
                    f = i;
                } else if (i !== "*" && i !== f) {
                    g = j[i + " " + f] || j["* " + f];
                    if (!g) {
                        for (e in j) {
                            h = e.split(" ");
                            if (h[1] === f) {
                                g = j[i + " " + h[0]] || j["* " + h[0]];
                                if (g) {
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
                    if (g !== true) {
                        if (g && a["throws"]) {
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
        active: 0,
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
            converters: {
                "* text": String,
                "text html": true,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a);
        },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        ajax: function(b, c) {
            if (typeof b === "object") {
                c = b;
                b = undefined;
            }
            c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c), m = l.context || l, o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event, p = n.Deferred(), q = n.Callbacks("once memory"), r = l.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
                readyState: 0,
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
                getAllResponseHeaders: function() {
                    return u === 2 ? g : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    if (!u) {
                        a = t[c] = t[c] || a;
                        s[a] = b;
                    }
                    return this;
                },
                overrideMimeType: function(a) {
                    if (!u) {
                        l.mimeType = a;
                    }
                    return this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) {
                        if (u < 2) {
                            for (b in a) {
                                r[b] = [ r[b], a[b] ];
                            }
                        } else {
                            w.always(a[w.status]);
                        }
                    }
                    return this;
                },
                abort: function(a) {
                    var b = a || v;
                    if (j) {
                        j.abort(b);
                    }
                    x(0, b);
                    return this;
                }
            };
            p.promise(w).complete = q.add;
            w.success = w.done;
            w.error = w.fail;
            l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//");
            l.type = c.method || c.type || l.method || l.type;
            l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [ "" ];
            if (l.crossDomain == null) {
                d = Nb.exec(l.url.toLowerCase());
                l.crossDomain = !!(d && (d[1] !== Sb[1] || d[2] !== Sb[2] || (d[3] || (d[1] === "http:" ? "80" : "443")) !== (Sb[3] || (Sb[1] === "http:" ? "80" : "443"))));
            }
            if (l.data && l.processData && typeof l.data !== "string") {
                l.data = n.param(l.data, l.traditional);
            }
            Ub(Ob, l, c, w);
            if (u === 2) {
                return w;
            }
            i = n.event && l.global;
            if (i && n.active++ === 0) {
                n.event.trigger("ajaxStart");
            }
            l.type = l.type.toUpperCase();
            l.hasContent = !Lb.test(l.type);
            f = l.url;
            if (!l.hasContent) {
                if (l.data) {
                    f = l.url += (Fb.test(f) ? "&" : "?") + l.data;
                    delete l.data;
                }
                if (l.cache === false) {
                    l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++;
                }
            }
            if (l.ifModified) {
                if (n.lastModified[f]) {
                    w.setRequestHeader("If-Modified-Since", n.lastModified[f]);
                }
                if (n.etag[f]) {
                    w.setRequestHeader("If-None-Match", n.etag[f]);
                }
            }
            if (l.data && l.hasContent && l.contentType !== false || c.contentType) {
                w.setRequestHeader("Content-Type", l.contentType);
            }
            w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) {
                w.setRequestHeader(e, l.headers[e]);
            }
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === false || u === 2)) {
                return w.abort();
            }
            v = "abort";
            for (e in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                w[e](l[e]);
            }
            j = Ub(Pb, l, c, w);
            if (!j) {
                x(-1, "No Transport");
            } else {
                w.readyState = 1;
                if (i) {
                    o.trigger("ajaxSend", [ w, l ]);
                }
                if (u === 2) {
                    return w;
                }
                if (l.async && l.timeout > 0) {
                    h = a.setTimeout(function() {
                        w.abort("timeout");
                    }, l.timeout);
                }
                try {
                    u = 1;
                    j.send(s, x);
                } catch (a) {
                    if (u < 2) {
                        x(-1, a);
                    } else {
                        throw a;
                    }
                }
            }
            function x(b, c, d, e) {
                var k, s, t, v, x, y = c;
                if (u === 2) {
                    return;
                }
                u = 2;
                if (h) {
                    a.clearTimeout(h);
                }
                j = undefined;
                g = e || "";
                w.readyState = b > 0 ? 4 : 0;
                k = b >= 200 && b < 300 || b === 304;
                if (d) {
                    v = Wb(l, w, d);
                }
                v = Xb(l, v, w, k);
                if (k) {
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
                    t = y;
                    if (b || !y) {
                        y = "error";
                        if (b < 0) {
                            b = 0;
                        }
                    }
                }
                w.status = b;
                w.statusText = (c || y) + "";
                if (k) {
                    p.resolveWith(m, [ s, y, w ]);
                } else {
                    p.rejectWith(m, [ w, y, t ]);
                }
                w.statusCode(r);
                r = undefined;
                if (i) {
                    o.trigger(k ? "ajaxSuccess" : "ajaxError", [ w, l, k ? s : t ]);
                }
                q.fireWith(m, [ w, y ]);
                if (i) {
                    o.trigger("ajaxComplete", [ w, l ]);
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
            if (n.isFunction(c)) {
                e = e || d;
                d = c;
                c = undefined;
            }
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
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a);
    };
    n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a);
    };
    var $b = /%20/g, _b = /\[\]$/, ac = /\r?\n/g, bc = /^(?:submit|button|image|reset|file)$/i, cc = /^(?:input|select|textarea|keygen)/i;
    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b)) {
            n.each(b, function(b, e) {
                if (c || _b.test(a)) {
                    d(a, e);
                } else {
                    dc(a + "[" + (typeof e === "object" && e != null ? b : "") + "]", e, c, d);
                }
            });
        } else if (!c && n.type(b) === "object") {
            for (e in b) {
                dc(a + "[" + e + "]", b[e], c, d);
            }
        } else {
            d(a, b);
        }
    }
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : b == null ? "" : b;
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (b === undefined) {
            b = n.ajaxSettings && n.ajaxSettings.traditional;
        }
        if (n.isArray(a) || a.jquery && !n.isPlainObject(a)) {
            n.each(a, function() {
                e(this.name, this.value);
            });
        } else {
            for (c in a) {
                dc(c, a[c], b, e);
            }
        }
        return d.join("&").replace($b, "+");
    };
    n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
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
    n.ajaxSettings.xhr = a.ActiveXObject !== undefined ? function() {
        if (this.isLocal) {
            return ic();
        }
        if (d.documentMode > 8) {
            return hc();
        }
        return /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic();
    } : hc;
    var ec = 0, fc = {}, gc = n.ajaxSettings.xhr();
    if (a.attachEvent) {
        a.attachEvent("onunload", function() {
            for (var a in fc) {
                fc[a](undefined, true);
            }
        });
    }
    l.cors = !!gc && "withCredentials" in gc;
    gc = l.ajax = !!gc;
    if (gc) {
        n.ajaxTransport(function(b) {
            if (!b.crossDomain || l.cors) {
                var c;
                return {
                    send: function(d, e) {
                        var f, g = b.xhr(), h = ++ec;
                        g.open(b.type, b.url, b.async, b.username, b.password);
                        if (b.xhrFields) {
                            for (f in b.xhrFields) {
                                g[f] = b.xhrFields[f];
                            }
                        }
                        if (b.mimeType && g.overrideMimeType) {
                            g.overrideMimeType(b.mimeType);
                        }
                        if (!b.crossDomain && !d["X-Requested-With"]) {
                            d["X-Requested-With"] = "XMLHttpRequest";
                        }
                        for (f in d) {
                            if (d[f] !== undefined) {
                                g.setRequestHeader(f, d[f] + "");
                            }
                        }
                        g.send(b.hasContent && b.data || null);
                        c = function(a, d) {
                            var f, i, j;
                            if (c && (d || g.readyState === 4)) {
                                delete fc[h];
                                c = undefined;
                                g.onreadystatechange = n.noop;
                                if (d) {
                                    if (g.readyState !== 4) {
                                        g.abort();
                                    }
                                } else {
                                    j = {};
                                    f = g.status;
                                    if (typeof g.responseText === "string") {
                                        j.text = g.responseText;
                                    }
                                    try {
                                        i = g.statusText;
                                    } catch (a) {
                                        i = "";
                                    }
                                    if (!f && b.isLocal && !b.crossDomain) {
                                        f = j.text ? 200 : 404;
                                    } else if (f === 1223) {
                                        f = 204;
                                    }
                                }
                            }
                            if (j) {
                                e(f, i, j, g.getAllResponseHeaders());
                            }
                        };
                        if (!b.async) {
                            c();
                        } else if (g.readyState === 4) {
                            a.setTimeout(c);
                        } else {
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
    n.ajaxPrefilter("script", function(a) {
        if (a.cache === undefined) {
            a.cache = false;
        }
        if (a.crossDomain) {
            a.type = "GET";
            a.global = false;
        }
    });
    n.ajaxTransport("script", function(a) {
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
                    b.onload = b.onreadystatechange = function(a, c) {
                        if (c || !b.readyState || /loaded|complete/.test(b.readyState)) {
                            b.onload = b.onreadystatechange = null;
                            if (b.parentNode) {
                                b.parentNode.removeChild(b);
                            }
                            b = null;
                            if (!c) {
                                f(200, "success");
                            }
                        }
                    };
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
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = jc.pop() || n.expando + "_" + Eb++;
            this[a] = true;
            return a;
        }
    });
    n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== false && (kc.test(b.url) ? "url" : typeof b.data === "string" && (b.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && kc.test(b.data) && "data");
        if (h || b.dataTypes[0] === "jsonp") {
            e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback;
            if (h) {
                b[h] = b[h].replace(kc, "$1" + e);
            } else if (b.jsonp !== false) {
                b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e;
            }
            b.converters["script json"] = function() {
                if (!g) {
                    n.error(e + " was not called");
                }
                return g[0];
            };
            b.dataTypes[0] = "json";
            f = a[e];
            a[e] = function() {
                g = arguments;
            };
            d.always(function() {
                if (f === undefined) {
                    n(a).removeProp(e);
                } else {
                    a[e] = f;
                }
                if (b[e]) {
                    b.jsonpCallback = c.jsonpCallback;
                    jc.push(e);
                }
                if (g && n.isFunction(f)) {
                    f(g[0]);
                }
                g = f = undefined;
            });
            return "script";
        }
    });
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
        if (e) {
            return [ b.createElement(e[1]) ];
        }
        e = ja([ a ], b, f);
        if (f && f.length) {
            n(f).remove();
        }
        return n.merge([], e.childNodes);
    };
    var lc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if (typeof a !== "string" && lc) {
            return lc.apply(this, arguments);
        }
        var d, e, f, g = this, h = a.indexOf(" ");
        if (h > -1) {
            d = n.trim(a.slice(h, a.length));
            a = a.slice(0, h);
        }
        if (n.isFunction(b)) {
            c = b;
            b = undefined;
        } else if (b && typeof b === "object") {
            e = "POST";
        }
        if (g.length > 0) {
            n.ajax({
                url: a,
                type: e || "GET",
                dataType: "html",
                data: b
            }).done(function(a) {
                f = arguments;
                g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
            }).always(c && function(a, b) {
                g.each(function() {
                    c.apply(this, f || [ a.responseText, b, a ]);
                });
            });
        }
        return this;
    };
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
    function mc(a) {
        return n.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : false;
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            if (k === "static") {
                a.style.position = "relative";
            }
            h = l.offset();
            f = n.css(a, "top");
            i = n.css(a, "left");
            j = (k === "absolute" || k === "fixed") && n.inArray("auto", [ f, i ]) > -1;
            if (j) {
                d = l.position();
                g = d.top;
                e = d.left;
            } else {
                g = parseFloat(f) || 0;
                e = parseFloat(i) || 0;
            }
            if (n.isFunction(b)) {
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
            if (!n.contains(b, e)) {
                return d;
            }
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
            if (n.css(d, "position") === "fixed") {
                b = d.getBoundingClientRect();
            } else {
                a = this.offsetParent();
                b = this.offset();
                if (!n.nodeName(a[0], "html")) {
                    c = a.offset();
                }
                c.top += n.css(a[0], "borderTopWidth", true);
                c.left += n.css(a[0], "borderLeftWidth", true);
            }
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
    n.each([ "top", "left" ], function(a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
            if (c) {
                c = Sa(a, b);
                return Oa.test(c) ? n(a).position()[b] + "px" : c;
            }
        });
    });
    n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || typeof d !== "boolean"), g = c || (d === true || e === true ? "margin" : "border");
                return Y(this, function(b, c, d) {
                    var e;
                    if (n.isWindow(b)) {
                        return b.document.documentElement["client" + a];
                    }
                    if (b.nodeType === 9) {
                        e = b.documentElement;
                        return Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a]);
                    }
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
            return arguments.length === 1 ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    n.fn.size = function() {
        return this.length;
    };
    n.fn.andSelf = n.fn.addBack;
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
            return n;
        });
    }
    var nc = a.jQuery, oc = a.$;
    n.noConflict = function(b) {
        if (a.$ === n) {
            a.$ = oc;
        }
        if (b && a.jQuery === n) {
            a.jQuery = nc;
        }
        return n;
    };
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
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [ 27 ],
                play: [ 32 ],
                toggle: [ 70 ]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: true,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
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
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: true,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: true,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: true,
                title: true
            },
            onCancel: c.noop,
            beforeLoad: c.noop,
            afterLoad: c.noop,
            beforeShow: c.noop,
            afterShow: c.noop,
            beforeChange: c.noop,
            beforeClose: c.noop,
            afterClose: c.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: false,
        isOpen: false,
        isOpened: false,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: false
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(a, b) {
            if (!a) {
                return;
            }
            if (!c.isPlainObject(b)) {
                b = {};
            }
            if (false === h.close(true)) {
                return;
            }
            if (!c.isArray(a)) {
                a = l(a) ? c(a).get() : [ a ];
            }
            c.each(a, function(e, f) {
                var g = {}, i, j, k, n, o, p, q;
                if (c.type(f) === "object") {
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
            h.opts = c.extend(true, {}, h.defaults, b);
            if (b.keys !== d) {
                h.opts.keys = b.keys ? c.extend({}, h.defaults.keys, b.keys) : false;
            }
            h.group = a;
            return h._start(h.opts.index);
        },
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
            if (!h.current) {
                h._afterZoomOut(a);
            }
        },
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
        next: function(a) {
            var b = h.current;
            if (b) {
                if (!m(a)) {
                    a = b.direction.next;
                }
                h.jumpto(b.index + 1, a, "next");
            }
        },
        prev: function(a) {
            var b = h.current;
            if (b) {
                if (!m(a)) {
                    a = b.direction.prev;
                }
                h.jumpto(b.index - 1, a, "prev");
            }
        },
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
        toggle: function(a) {
            if (h.isOpen) {
                h.current.fitToView = c.type(a) === "boolean" ? a : !h.current.fitToView;
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
                c.w = k && a.innerWidth ? a.innerWidth : f.width();
                c.h = k && a.innerHeight ? a.innerHeight : f.height();
            }
            return c;
        },
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
            f.bind("orientationchange.fb" + (k ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), h.update);
            b = a.keys;
            if (b) {
                g.bind("keydown.fb", function(e) {
                    var f = e.which || e.keyCode, g = e.target || e.srcElement;
                    if (f === 27 && h.coming) {
                        return false;
                    }
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
            g = b.margin;
            i = b.padding;
            if (c.type(g) === "number") {
                b.margin = [ g, g, g, g ];
            }
            if (c.type(i) === "number") {
                b.padding = [ i, i, i, i ];
            }
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
            if (b.autoSize) {
                b.autoWidth = b.autoHeight = true;
            }
            if (b.width === "auto") {
                b.autoWidth = true;
            }
            if (b.height === "auto") {
                b.autoHeight = true;
            }
            b.group = h.group;
            b.index = a;
            h.coming = b;
            if (false === h.trigger("beforeLoad")) {
                h.coming = null;
                return;
            }
            f = b.type;
            e = b.href;
            if (!f) {
                h.coming = null;
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
            c(a.wrap).bind("onReset", function() {
                try {
                    c(this).find("iframe").hide().attr("src", "//about:blank").end().empty();
                } catch (a) {}
            });
            if (a.iframe.preload) {
                h.showLoading();
                b.one("load", function() {
                    c(this).data("ready", 1);
                    if (!k) {
                        c(this).bind("load.fb", h.update);
                    }
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
            h.trigger("beforeShow");
            e.inner.css("overflow", i === "yes" ? "scroll" : i === "no" ? "hidden" : i);
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
            f.add(g).add(i).width("auto").height("auto").removeClass("fancybox-tmp");
            y = p(g.outerWidth(true) - g.width());
            z = p(g.outerHeight(true) - g.height());
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
            m = p(n(m) ? p(m, "w") - A : m);
            r = p(n(r) ? p(r, "w") - A : r);
            o = p(n(o) ? p(o, "h") - B : o);
            s = p(n(s) ? p(s, "h") - B : s);
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
            if (j.fitToView) {
                i.width(k).height(l);
                f.width(k + y);
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
            if (a.closeClick || a.nextClick && h.group.length > 1) {
                h.inner.css("cursor", "pointer").bind("click.fb", function(b) {
                    if (!c(b.target).is("a") && !c(b.target).parent().is("a")) {
                        b.preventDefault();
                        h[a.closeClick ? "close" : "next"]();
                    }
                });
            }
            if (a.closeBtn) {
                c(a.tpl.closeBtn).appendTo(h.skin).bind("click.fb", function(a) {
                    a.preventDefault();
                    h.close();
                });
            }
            if (a.arrows && h.group.length > 1) {
                if (a.loop || a.index > 0) {
                    c(a.tpl.prev).appendTo(h.outer).bind("click.fb", h.prev);
                }
                if (a.loop || a.index < h.group.length - 1) {
                    c(a.tpl.next).appendTo(h.outer).bind("click.fb", h.next);
                }
            }
            h.trigger("afterShow");
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
    h.helpers.overlay = {
        defaults: {
            closeClick: true,
            speedOut: 200,
            showEarly: true,
            css: {},
            locked: !k,
            fixed: true
        },
        overlay: null,
        fixed: false,
        el: c("html"),
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
        update: function() {
            var a = "100%", c;
            this.overlay.width(a).height("100%");
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
            if (this.overlay && !h.coming) {
                this.overlay.fadeOut(a.speedOut, c.proxy(this.close, this));
            }
        }
    };
    h.helpers.title = {
        defaults: {
            type: "float",
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
                g = h.skin;
                f.appendTo("body");
                if (i) {
                    f.width(f.width());
                }
                f.wrapInner('<span class="child"></span>');
                h.current.margin[2] += Math.abs(p(f.css("margin-bottom")));
                break;
            }
            f[a.position === "top" ? "prependTo" : "appendTo"](g);
        }
    };
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
    g.ready(function() {
        var b, f;
        if (c.scrollbarWidth === d) {
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
        b = c(a).width();
        e.addClass("fancybox-lock-test");
        f = c(a).width();
        e.removeClass("fancybox-lock-test");
        c("<style type='text/css'>.fancybox-margin{margin-right:" + (f - b) + "px;}</style>").appendTo("head");
    });
})(window, document, jQuery);

$(document).ready(function() {
    $(".head-hamburger a").click(function(a) {
        a.preventDefault();
        $("#nav").toggle();
    });
    $(".fancybox").fancybox();
});