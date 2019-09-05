(function(e, t) {
    "use strict";
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = e.document ? t(e, true) : function(e) {
            if (!e.document) {
                throw new Error("jQuery requires a window with a document");
            }
            return t(e);
        };
    } else {
        t(e);
    }
})(typeof window !== "undefined" ? window : this, function(C, e) {
    "use strict";
    var t = [];
    var E = C.document;
    var r = Object.getPrototypeOf;
    var a = t.slice;
    var g = t.concat;
    var u = t.push;
    var i = t.indexOf;
    var n = {};
    var o = n.toString;
    var y = n.hasOwnProperty;
    var s = y.toString;
    var f = s.call(Object);
    var m = {};
    var v = function e(t) {
        return typeof t === "function" && typeof t.nodeType !== "number";
    };
    var x = function e(t) {
        return t != null && t === t.window;
    };
    var l = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
    };
    function b(e, t, n) {
        n = n || E;
        var r, i, o = n.createElement("script");
        o.text = e;
        if (t) {
            for (r in l) {
                i = t[r] || t.getAttribute && t.getAttribute(r);
                if (i) {
                    o.setAttribute(r, i);
                }
            }
        }
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function w(e) {
        if (e == null) {
            return e + "";
        }
        return typeof e === "object" || typeof e === "function" ? n[o.call(e)] || "object" : typeof e;
    }
    var c = "3.4.1", k = function(e, t) {
        return new k.fn.init(e, t);
    }, d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    k.fn = k.prototype = {
        jquery: c,
        constructor: k,
        length: 0,
        toArray: function() {
            return a.call(this);
        },
        get: function(e) {
            if (e == null) {
                return a.call(this);
            }
            return e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            var t = k.merge(this.constructor(), e);
            t.prevObject = this;
            return t;
        },
        each: function(e) {
            return k.each(this, e);
        },
        map: function(n) {
            return this.pushStack(k.map(this, function(e, t) {
                return n.call(e, t, e);
            }));
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    };
    k.extend = k.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, f = false;
        if (typeof s === "boolean") {
            f = s;
            s = arguments[a] || {};
            a++;
        }
        if (typeof s !== "object" && !v(s)) {
            s = {};
        }
        if (a === u) {
            s = this;
            a--;
        }
        for (;a < u; a++) {
            if ((e = arguments[a]) != null) {
                for (t in e) {
                    r = e[t];
                    if (t === "__proto__" || s === r) {
                        continue;
                    }
                    if (f && r && (k.isPlainObject(r) || (i = Array.isArray(r)))) {
                        n = s[t];
                        if (i && !Array.isArray(n)) {
                            o = [];
                        } else if (!i && !k.isPlainObject(n)) {
                            o = {};
                        } else {
                            o = n;
                        }
                        i = false;
                        s[t] = k.extend(f, o, r);
                    } else if (r !== undefined) {
                        s[t] = r;
                    }
                }
            }
        }
        return s;
    };
    k.extend({
        expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            if (!e || o.call(e) !== "[object Object]") {
                return false;
            }
            t = r(e);
            if (!t) {
                return true;
            }
            n = y.call(t, "constructor") && t.constructor;
            return typeof n === "function" && s.call(n) === f;
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) {
                return false;
            }
            return true;
        },
        globalEval: function(e, t) {
            b(e, {
                nonce: t && t.nonce
            });
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                n = e.length;
                for (;r < n; r++) {
                    if (t.call(e[r], r, e[r]) === false) {
                        break;
                    }
                }
            } else {
                for (r in e) {
                    if (t.call(e[r], r, e[r]) === false) {
                        break;
                    }
                }
            }
            return e;
        },
        trim: function(e) {
            return e == null ? "" : (e + "").replace(d, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            if (e != null) {
                if (p(Object(e))) {
                    k.merge(n, typeof e === "string" ? [ e ] : e);
                } else {
                    u.call(n, e);
                }
            }
            return n;
        },
        inArray: function(e, t, n) {
            return t == null ? -1 : i.call(t, e, n);
        },
        merge: function(e, t) {
            var n = +t.length, r = 0, i = e.length;
            for (;r < n; r++) {
                e[i++] = t[r];
            }
            e.length = i;
            return e;
        },
        grep: function(e, t, n) {
            var r, i = [], o = 0, s = e.length, a = !n;
            for (;o < s; o++) {
                r = !t(e[o], o);
                if (r !== a) {
                    i.push(e[o]);
                }
            }
            return i;
        },
        map: function(e, t, n) {
            var r, i, o = 0, s = [];
            if (p(e)) {
                r = e.length;
                for (;o < r; o++) {
                    i = t(e[o], o, n);
                    if (i != null) {
                        s.push(i);
                    }
                }
            } else {
                for (o in e) {
                    i = t(e[o], o, n);
                    if (i != null) {
                        s.push(i);
                    }
                }
            }
            return g.apply([], s);
        },
        guid: 1,
        support: m
    });
    if (typeof Symbol === "function") {
        k.fn[Symbol.iterator] = t[Symbol.iterator];
    }
    k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
    });
    function p(e) {
        var t = !!e && "length" in e && e.length, n = w(e);
        if (v(e) || x(e)) {
            return false;
        }
        return n === "array" || t === 0 || typeof t === "number" && t > 0 && t - 1 in e;
    }
    var h = function(n) {
        var e, p, b, o, i, h, c, g, w, u, f, T, C, s, E, y, a, l, m, k = "sizzle" + 1 * new Date(), v = n.document, S = 0, r = 0, d = ue(), x = ue(), N = ue(), A = ue(), D = function(e, t) {
            if (e === t) {
                f = true;
            }
            return 0;
        }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
            var n = 0, r = e.length;
            for (;n < r; n++) {
                if (e[n] === t) {
                    return n;
                }
            }
            return -1;
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", $ = ":(" + I + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|" + ".*" + ")\\)|)", F = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp($), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + $),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + R + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ne = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320);
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            if (t) {
                if (e === "\0") {
                    return "�";
                }
                return e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ";
            }
            return "\\" + e;
        }, oe = function() {
            T();
        }, se = be(function(e) {
            return e.disabled === true && e.nodeName.toLowerCase() === "fieldset";
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(v.childNodes), v.childNodes);
            t[v.childNodes.length].nodeType;
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t));
                } : function(e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]) {}
                    e.length = n - 1;
                }
            };
        }
        function ae(t, e, n, r) {
            var i, o, s, a, u, f, l, c = e && e.ownerDocument, d = e ? e.nodeType : 9;
            n = n || [];
            if (typeof t !== "string" || !t || d !== 1 && d !== 9 && d !== 11) {
                return n;
            }
            if (!r) {
                if ((e ? e.ownerDocument || e : v) !== C) {
                    T(e);
                }
                e = e || C;
                if (E) {
                    if (d !== 11 && (u = Z.exec(t))) {
                        if (i = u[1]) {
                            if (d === 9) {
                                if (s = e.getElementById(i)) {
                                    if (s.id === i) {
                                        n.push(s);
                                        return n;
                                    }
                                } else {
                                    return n;
                                }
                            } else {
                                if (c && (s = c.getElementById(i)) && m(e, s) && s.id === i) {
                                    n.push(s);
                                    return n;
                                }
                            }
                        } else if (u[2]) {
                            H.apply(n, e.getElementsByTagName(t));
                            return n;
                        } else if ((i = u[3]) && p.getElementsByClassName && e.getElementsByClassName) {
                            H.apply(n, e.getElementsByClassName(i));
                            return n;
                        }
                    }
                    if (p.qsa && !A[t + " "] && (!y || !y.test(t)) && (d !== 1 || e.nodeName.toLowerCase() !== "object")) {
                        l = t;
                        c = e;
                        if (d === 1 && U.test(t)) {
                            if (a = e.getAttribute("id")) {
                                a = a.replace(re, ie);
                            } else {
                                e.setAttribute("id", a = k);
                            }
                            f = h(t);
                            o = f.length;
                            while (o--) {
                                f[o] = "#" + a + " " + xe(f[o]);
                            }
                            l = f.join(",");
                            c = ee.test(t) && me(e.parentNode) || e;
                        }
                        try {
                            H.apply(n, c.querySelectorAll(l));
                            return n;
                        } catch (e) {
                            A(t, true);
                        } finally {
                            if (a === k) {
                                e.removeAttribute("id");
                            }
                        }
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r);
        }
        function ue() {
            var n = [];
            function r(e, t) {
                if (n.push(e + " ") > b.cacheLength) {
                    delete r[n.shift()];
                }
                return r[e + " "] = t;
            }
            return r;
        }
        function fe(e) {
            e[k] = true;
            return e;
        }
        function le(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return false;
            } finally {
                if (t.parentNode) {
                    t.parentNode.removeChild(t);
                }
                t = null;
            }
        }
        function ce(e, t) {
            var n = e.split("|"), r = n.length;
            while (r--) {
                b.attrHandle[n[r]] = t;
            }
        }
        function de(e, t) {
            var n = t && e, r = n && e.nodeType === 1 && t.nodeType === 1 && e.sourceIndex - t.sourceIndex;
            if (r) {
                return r;
            }
            if (n) {
                while (n = n.nextSibling) {
                    if (n === t) {
                        return -1;
                    }
                }
            }
            return e ? 1 : -1;
        }
        function pe(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return t === "input" && e.type === n;
            };
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return (t === "input" || t === "button") && e.type === n;
            };
        }
        function ge(t) {
            return function(e) {
                if ("form" in e) {
                    if (e.parentNode && e.disabled === false) {
                        if ("label" in e) {
                            if ("label" in e.parentNode) {
                                return e.parentNode.disabled === t;
                            } else {
                                return e.disabled === t;
                            }
                        }
                        return e.isDisabled === t || e.isDisabled !== !t && se(e) === t;
                    }
                    return e.disabled === t;
                } else if ("label" in e) {
                    return e.disabled === t;
                }
                return false;
            };
        }
        function ye(s) {
            return fe(function(o) {
                o = +o;
                return fe(function(e, t) {
                    var n, r = s([], e.length, o), i = r.length;
                    while (i--) {
                        if (e[n = r[i]]) {
                            e[n] = !(t[n] = e[n]);
                        }
                    }
                });
            });
        }
        function me(e) {
            return e && typeof e.getElementsByTagName !== "undefined" && e;
        }
        p = ae.support = {};
        i = ae.isXML = function(e) {
            var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML");
        };
        T = ae.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : v;
            if (r === C || r.nodeType !== 9 || !r.documentElement) {
                return C;
            }
            C = r;
            s = C.documentElement;
            E = !i(C);
            if (v !== C && (n = C.defaultView) && n.top !== n) {
                if (n.addEventListener) {
                    n.addEventListener("unload", oe, false);
                } else if (n.attachEvent) {
                    n.attachEvent("onunload", oe);
                }
            }
            p.attributes = le(function(e) {
                e.className = "i";
                return !e.getAttribute("className");
            });
            p.getElementsByTagName = le(function(e) {
                e.appendChild(C.createComment(""));
                return !e.getElementsByTagName("*").length;
            });
            p.getElementsByClassName = K.test(C.getElementsByClassName);
            p.getById = le(function(e) {
                s.appendChild(e).id = k;
                return !C.getElementsByName || !C.getElementsByName(k).length;
            });
            if (p.getById) {
                b.filter["ID"] = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t;
                    };
                };
                b.find["ID"] = function(e, t) {
                    if (typeof t.getElementById !== "undefined" && E) {
                        var n = t.getElementById(e);
                        return n ? [ n ] : [];
                    }
                };
            } else {
                b.filter["ID"] = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = typeof e.getAttributeNode !== "undefined" && e.getAttributeNode("id");
                        return t && t.value === n;
                    };
                };
                b.find["ID"] = function(e, t) {
                    if (typeof t.getElementById !== "undefined" && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            n = o.getAttributeNode("id");
                            if (n && n.value === e) {
                                return [ o ];
                            }
                            i = t.getElementsByName(e);
                            r = 0;
                            while (o = i[r++]) {
                                n = o.getAttributeNode("id");
                                if (n && n.value === e) {
                                    return [ o ];
                                }
                            }
                        }
                        return [];
                    }
                };
            }
            b.find["TAG"] = p.getElementsByTagName ? function(e, t) {
                if (typeof t.getElementsByTagName !== "undefined") {
                    return t.getElementsByTagName(e);
                } else if (p.qsa) {
                    return t.querySelectorAll(e);
                }
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if (e === "*") {
                    while (n = o[i++]) {
                        if (n.nodeType === 1) {
                            r.push(n);
                        }
                    }
                    return r;
                }
                return o;
            };
            b.find["CLASS"] = p.getElementsByClassName && function(e, t) {
                if (typeof t.getElementsByClassName !== "undefined" && E) {
                    return t.getElementsByClassName(e);
                }
            };
            a = [];
            y = [];
            if (p.qsa = K.test(C.querySelectorAll)) {
                le(function(e) {
                    s.appendChild(e).innerHTML = "<a id='" + k + "'></a>" + "<select id='" + k + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                    if (e.querySelectorAll("[msallowcapture^='']").length) {
                        y.push("[*^$]=" + M + "*(?:''|\"\")");
                    }
                    if (!e.querySelectorAll("[selected]").length) {
                        y.push("\\[" + M + "*(?:value|" + R + ")");
                    }
                    if (!e.querySelectorAll("[id~=" + k + "-]").length) {
                        y.push("~=");
                    }
                    if (!e.querySelectorAll(":checked").length) {
                        y.push(":checked");
                    }
                    if (!e.querySelectorAll("a#" + k + "+*").length) {
                        y.push(".#.+[+~]");
                    }
                });
                le(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden");
                    e.appendChild(t).setAttribute("name", "D");
                    if (e.querySelectorAll("[name=d]").length) {
                        y.push("name" + M + "*[*^$|!~]?=");
                    }
                    if (e.querySelectorAll(":enabled").length !== 2) {
                        y.push(":enabled", ":disabled");
                    }
                    s.appendChild(e).disabled = true;
                    if (e.querySelectorAll(":disabled").length !== 2) {
                        y.push(":enabled", ":disabled");
                    }
                    e.querySelectorAll("*,:x");
                    y.push(",.*:");
                });
            }
            if (p.matchesSelector = K.test(l = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) {
                le(function(e) {
                    p.disconnectedMatch = l.call(e, "*");
                    l.call(e, "[s!='']:x");
                    a.push("!=", $);
                });
            }
            y = y.length && new RegExp(y.join("|"));
            a = a.length && new RegExp(a.join("|"));
            t = K.test(s.compareDocumentPosition);
            m = t || K.test(s.contains) ? function(e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !!(r && r.nodeType === 1 && (n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16));
            } : function(e, t) {
                if (t) {
                    while (t = t.parentNode) {
                        if (t === e) {
                            return true;
                        }
                    }
                }
                return false;
            };
            D = t ? function(e, t) {
                if (e === t) {
                    f = true;
                    return 0;
                }
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                if (n) {
                    return n;
                }
                n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1;
                if (n & 1 || !p.sortDetached && t.compareDocumentPosition(e) === n) {
                    if (e === C || e.ownerDocument === v && m(v, e)) {
                        return -1;
                    }
                    if (t === C || t.ownerDocument === v && m(v, t)) {
                        return 1;
                    }
                    return u ? P(u, e) - P(u, t) : 0;
                }
                return n & 4 ? -1 : 1;
            } : function(e, t) {
                if (e === t) {
                    f = true;
                    return 0;
                }
                var n, r = 0, i = e.parentNode, o = t.parentNode, s = [ e ], a = [ t ];
                if (!i || !o) {
                    return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                } else if (i === o) {
                    return de(e, t);
                }
                n = e;
                while (n = n.parentNode) {
                    s.unshift(n);
                }
                n = t;
                while (n = n.parentNode) {
                    a.unshift(n);
                }
                while (s[r] === a[r]) {
                    r++;
                }
                return r ? de(s[r], a[r]) : s[r] === v ? -1 : a[r] === v ? 1 : 0;
            };
            return C;
        };
        ae.matches = function(e, t) {
            return ae(e, null, null, t);
        };
        ae.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== C) {
                T(e);
            }
            if (p.matchesSelector && E && !A[t + " "] && (!a || !a.test(t)) && (!y || !y.test(t))) {
                try {
                    var n = l.call(e, t);
                    if (n || p.disconnectedMatch || e.document && e.document.nodeType !== 11) {
                        return n;
                    }
                } catch (e) {
                    A(t, true);
                }
            }
            return ae(t, C, null, [ e ]).length > 0;
        };
        ae.contains = function(e, t) {
            if ((e.ownerDocument || e) !== C) {
                T(e);
            }
            return m(e, t);
        };
        ae.attr = function(e, t) {
            if ((e.ownerDocument || e) !== C) {
                T(e);
            }
            var n = b.attrHandle[t.toLowerCase()], r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : undefined;
            return r !== undefined ? r : p.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        };
        ae.escape = function(e) {
            return (e + "").replace(re, ie);
        };
        ae.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        };
        ae.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            f = !p.detectDuplicates;
            u = !p.sortStable && e.slice(0);
            e.sort(D);
            if (f) {
                while (t = e[i++]) {
                    if (t === e[i]) {
                        r = n.push(i);
                    }
                }
                while (r--) {
                    e.splice(n[r], 1);
                }
            }
            u = null;
            return e;
        };
        o = ae.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (!i) {
                while (t = e[r++]) {
                    n += o(t);
                }
            } else if (i === 1 || i === 9 || i === 11) {
                if (typeof e.textContent === "string") {
                    return e.textContent;
                } else {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        n += o(e);
                    }
                }
            } else if (i === 3 || i === 4) {
                return e.nodeValue;
            }
            return n;
        };
        b = ae.selectors = {
            cacheLength: 50,
            createPseudo: fe,
            match: G,
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
                ATTR: function(e) {
                    e[1] = e[1].replace(te, ne);
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne);
                    if (e[2] === "~=") {
                        e[3] = " " + e[3] + " ";
                    }
                    return e.slice(0, 4);
                },
                CHILD: function(e) {
                    e[1] = e[1].toLowerCase();
                    if (e[1].slice(0, 3) === "nth") {
                        if (!e[3]) {
                            ae.error(e[0]);
                        }
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                        e[5] = +(e[7] + e[8] || e[3] === "odd");
                    } else if (e[3]) {
                        ae.error(e[0]);
                    }
                    return e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    if (G["CHILD"].test(e[0])) {
                        return null;
                    }
                    if (e[3]) {
                        e[2] = e[4] || e[5] || "";
                    } else if (n && X.test(n) && (t = h(n, true)) && (t = n.indexOf(")", n.length - t) - n.length)) {
                        e[0] = e[0].slice(0, t);
                        e[2] = n.slice(0, t);
                    }
                    return e.slice(0, 3);
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return e === "*" ? function() {
                        return true;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = d[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && d(e, function(e) {
                        return t.test(typeof e.className === "string" && e.className || typeof e.getAttribute !== "undefined" && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = ae.attr(e, n);
                        if (t == null) {
                            return r === "!=";
                        }
                        if (!r) {
                            return true;
                        }
                        t += "";
                        return r === "=" ? t === i : r === "!=" ? t !== i : r === "^=" ? i && t.indexOf(i) === 0 : r === "*=" ? i && t.indexOf(i) > -1 : r === "$=" ? i && t.slice(-i.length) === i : r === "~=" ? (" " + t.replace(F, " ") + " ").indexOf(i) > -1 : r === "|=" ? t === i || t.slice(0, i.length + 1) === i + "-" : false;
                    };
                },
                CHILD: function(h, e, t, g, y) {
                    var m = h.slice(0, 3) !== "nth", v = h.slice(-4) !== "last", x = e === "of-type";
                    return g === 1 && y === 0 ? function(e) {
                        return !!e.parentNode;
                    } : function(e, t, n) {
                        var r, i, o, s, a, u, f = m !== v ? "nextSibling" : "previousSibling", l = e.parentNode, c = x && e.nodeName.toLowerCase(), d = !n && !x, p = false;
                        if (l) {
                            if (m) {
                                while (f) {
                                    s = e;
                                    while (s = s[f]) {
                                        if (x ? s.nodeName.toLowerCase() === c : s.nodeType === 1) {
                                            return false;
                                        }
                                    }
                                    u = f = h === "only" && !u && "nextSibling";
                                }
                                return true;
                            }
                            u = [ v ? l.firstChild : l.lastChild ];
                            if (v && d) {
                                s = l;
                                o = s[k] || (s[k] = {});
                                i = o[s.uniqueID] || (o[s.uniqueID] = {});
                                r = i[h] || [];
                                a = r[0] === S && r[1];
                                p = a && r[2];
                                s = a && l.childNodes[a];
                                while (s = ++a && s && s[f] || (p = a = 0) || u.pop()) {
                                    if (s.nodeType === 1 && ++p && s === e) {
                                        i[h] = [ S, a, p ];
                                        break;
                                    }
                                }
                            } else {
                                if (d) {
                                    s = e;
                                    o = s[k] || (s[k] = {});
                                    i = o[s.uniqueID] || (o[s.uniqueID] = {});
                                    r = i[h] || [];
                                    a = r[0] === S && r[1];
                                    p = a;
                                }
                                if (p === false) {
                                    while (s = ++a && s && s[f] || (p = a = 0) || u.pop()) {
                                        if ((x ? s.nodeName.toLowerCase() === c : s.nodeType === 1) && ++p) {
                                            if (d) {
                                                o = s[k] || (s[k] = {});
                                                i = o[s.uniqueID] || (o[s.uniqueID] = {});
                                                i[h] = [ S, p ];
                                            }
                                            if (s === e) {
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            p -= y;
                            return p === g || p % g === 0 && p / g >= 0;
                        }
                    };
                },
                PSEUDO: function(e, o) {
                    var t, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                    if (s[k]) {
                        return s(o);
                    }
                    if (s.length > 1) {
                        t = [ e, e, "", o ];
                        return b.setFilters.hasOwnProperty(e.toLowerCase()) ? fe(function(e, t) {
                            var n, r = s(e, o), i = r.length;
                            while (i--) {
                                n = P(e, r[i]);
                                e[n] = !(t[n] = r[i]);
                            }
                        }) : function(e) {
                            return s(e, 0, t);
                        };
                    }
                    return s;
                }
            },
            pseudos: {
                not: fe(function(e) {
                    var r = [], i = [], a = c(e.replace(B, "$1"));
                    return a[k] ? fe(function(e, t, n, r) {
                        var i, o = a(e, null, r, []), s = e.length;
                        while (s--) {
                            if (i = o[s]) {
                                e[s] = !(t[s] = i);
                            }
                        }
                    }) : function(e, t, n) {
                        r[0] = e;
                        a(r, null, n, i);
                        r[0] = null;
                        return !i.pop();
                    };
                }),
                has: fe(function(t) {
                    return function(e) {
                        return ae(t, e).length > 0;
                    };
                }),
                contains: fe(function(t) {
                    t = t.replace(te, ne);
                    return function(e) {
                        return (e.textContent || o(e)).indexOf(t) > -1;
                    };
                }),
                lang: fe(function(n) {
                    if (!V.test(n || "")) {
                        ae.error("unsupported lang: " + n);
                    }
                    n = n.replace(te, ne).toLowerCase();
                    return function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) {
                                t = t.toLowerCase();
                                return t === n || t.indexOf(n + "-") === 0;
                            }
                        } while ((e = e.parentNode) && e.nodeType === 1);
                        return false;
                    };
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function(e) {
                    return e === s;
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: ge(false),
                disabled: ge(true),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected;
                },
                selected: function(e) {
                    if (e.parentNode) {
                        e.parentNode.selectedIndex;
                    }
                    return e.selected === true;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        if (e.nodeType < 6) {
                            return false;
                        }
                    }
                    return true;
                },
                parent: function(e) {
                    return !b.pseudos["empty"](e);
                },
                header: function(e) {
                    return J.test(e.nodeName);
                },
                input: function(e) {
                    return Q.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button";
                },
                text: function(e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text");
                },
                first: ye(function() {
                    return [ 0 ];
                }),
                last: ye(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: ye(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: ye(function(e, t) {
                    var n = 0;
                    for (;n < t; n += 2) {
                        e.push(n);
                    }
                    return e;
                }),
                odd: ye(function(e, t) {
                    var n = 1;
                    for (;n < t; n += 2) {
                        e.push(n);
                    }
                    return e;
                }),
                lt: ye(function(e, t, n) {
                    var r = n < 0 ? n + t : n > t ? t : n;
                    for (;--r >= 0; ) {
                        e.push(r);
                    }
                    return e;
                }),
                gt: ye(function(e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (;++r < t; ) {
                        e.push(r);
                    }
                    return e;
                })
            }
        };
        b.pseudos["nth"] = b.pseudos["eq"];
        for (e in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        }) {
            b.pseudos[e] = pe(e);
        }
        for (e in {
            submit: true,
            reset: true
        }) {
            b.pseudos[e] = he(e);
        }
        function ve() {}
        ve.prototype = b.filters = b.pseudos;
        b.setFilters = new ve();
        h = ae.tokenize = function(e, t) {
            var n, r, i, o, s, a, u, f = x[e + " "];
            if (f) {
                return t ? 0 : f.slice(0);
            }
            s = e;
            a = [];
            u = b.preFilter;
            while (s) {
                if (!n || (r = _.exec(s))) {
                    if (r) {
                        s = s.slice(r[0].length) || s;
                    }
                    a.push(i = []);
                }
                n = false;
                if (r = z.exec(s)) {
                    n = r.shift();
                    i.push({
                        value: n,
                        type: r[0].replace(B, " ")
                    });
                    s = s.slice(n.length);
                }
                for (o in b.filter) {
                    if ((r = G[o].exec(s)) && (!u[o] || (r = u[o](r)))) {
                        n = r.shift();
                        i.push({
                            value: n,
                            type: o,
                            matches: r
                        });
                        s = s.slice(n.length);
                    }
                }
                if (!n) {
                    break;
                }
            }
            return t ? s.length : s ? ae.error(e) : x(e, a).slice(0);
        };
        function xe(e) {
            var t = 0, n = e.length, r = "";
            for (;t < n; t++) {
                r += e[t].value;
            }
            return r;
        }
        function be(a, e, t) {
            var u = e.dir, f = e.next, l = f || u, c = t && l === "parentNode", d = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u]) {
                    if (e.nodeType === 1 || c) {
                        return a(e, t, n);
                    }
                }
                return false;
            } : function(e, t, n) {
                var r, i, o, s = [ S, d ];
                if (n) {
                    while (e = e[u]) {
                        if (e.nodeType === 1 || c) {
                            if (a(e, t, n)) {
                                return true;
                            }
                        }
                    }
                } else {
                    while (e = e[u]) {
                        if (e.nodeType === 1 || c) {
                            o = e[k] || (e[k] = {});
                            i = o[e.uniqueID] || (o[e.uniqueID] = {});
                            if (f && f === e.nodeName.toLowerCase()) {
                                e = e[u] || e;
                            } else if ((r = i[l]) && r[0] === S && r[1] === d) {
                                return s[2] = r[2];
                            } else {
                                i[l] = s;
                                if (s[2] = a(e, t, n)) {
                                    return true;
                                }
                            }
                        }
                    }
                }
                return false;
            };
        }
        function we(i) {
            return i.length > 1 ? function(e, t, n) {
                var r = i.length;
                while (r--) {
                    if (!i[r](e, t, n)) {
                        return false;
                    }
                }
                return true;
            } : i[0];
        }
        function Te(e, t, n) {
            var r = 0, i = t.length;
            for (;r < i; r++) {
                ae(e, t[r], n);
            }
            return n;
        }
        function Ce(e, t, n, r, i) {
            var o, s = [], a = 0, u = e.length, f = t != null;
            for (;a < u; a++) {
                if (o = e[a]) {
                    if (!n || n(o, r, i)) {
                        s.push(o);
                        if (f) {
                            t.push(a);
                        }
                    }
                }
            }
            return s;
        }
        function Ee(p, h, g, y, m, e) {
            if (y && !y[k]) {
                y = Ee(y);
            }
            if (m && !m[k]) {
                m = Ee(m, e);
            }
            return fe(function(e, t, n, r) {
                var i, o, s, a = [], u = [], f = t.length, l = e || Te(h || "*", n.nodeType ? [ n ] : n, []), c = p && (e || !h) ? Ce(l, a, p, n, r) : l, d = g ? m || (e ? p : f || y) ? [] : t : c;
                if (g) {
                    g(c, d, n, r);
                }
                if (y) {
                    i = Ce(d, u);
                    y(i, [], n, r);
                    o = i.length;
                    while (o--) {
                        if (s = i[o]) {
                            d[u[o]] = !(c[u[o]] = s);
                        }
                    }
                }
                if (e) {
                    if (m || p) {
                        if (m) {
                            i = [];
                            o = d.length;
                            while (o--) {
                                if (s = d[o]) {
                                    i.push(c[o] = s);
                                }
                            }
                            m(null, d = [], i, r);
                        }
                        o = d.length;
                        while (o--) {
                            if ((s = d[o]) && (i = m ? P(e, s) : a[o]) > -1) {
                                e[i] = !(t[i] = s);
                            }
                        }
                    }
                } else {
                    d = Ce(d === t ? d.splice(f, d.length) : d);
                    if (m) {
                        m(null, t, d, r);
                    } else {
                        H.apply(t, d);
                    }
                }
            });
        }
        function ke(e) {
            var i, t, n, r = e.length, o = b.relative[e[0].type], s = o || b.relative[" "], a = o ? 1 : 0, u = be(function(e) {
                return e === i;
            }, s, true), f = be(function(e) {
                return P(i, e) > -1;
            }, s, true), l = [ function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : f(e, t, n));
                i = null;
                return r;
            } ];
            for (;a < r; a++) {
                if (t = b.relative[e[a].type]) {
                    l = [ be(we(l), t) ];
                } else {
                    t = b.filter[e[a].type].apply(null, e[a].matches);
                    if (t[k]) {
                        n = ++a;
                        for (;n < r; n++) {
                            if (b.relative[e[n].type]) {
                                break;
                            }
                        }
                        return Ee(a > 1 && we(l), a > 1 && xe(e.slice(0, a - 1).concat({
                            value: e[a - 2].type === " " ? "*" : ""
                        })).replace(B, "$1"), t, a < n && ke(e.slice(a, n)), n < r && ke(e = e.slice(n)), n < r && xe(e));
                    }
                    l.push(t);
                }
            }
            return we(l);
        }
        function Se(y, m) {
            var v = m.length > 0, x = y.length > 0, e = function(e, t, n, r, i) {
                var o, s, a, u = 0, f = "0", l = e && [], c = [], d = w, p = e || x && b.find["TAG"]("*", i), h = S += d == null ? 1 : Math.random() || .1, g = p.length;
                if (i) {
                    w = t === C || t || i;
                }
                for (;f !== g && (o = p[f]) != null; f++) {
                    if (x && o) {
                        s = 0;
                        if (!t && o.ownerDocument !== C) {
                            T(o);
                            n = !E;
                        }
                        while (a = y[s++]) {
                            if (a(o, t || C, n)) {
                                r.push(o);
                                break;
                            }
                        }
                        if (i) {
                            S = h;
                        }
                    }
                    if (v) {
                        if (o = !a && o) {
                            u--;
                        }
                        if (e) {
                            l.push(o);
                        }
                    }
                }
                u += f;
                if (v && f !== u) {
                    s = 0;
                    while (a = m[s++]) {
                        a(l, c, t, n);
                    }
                    if (e) {
                        if (u > 0) {
                            while (f--) {
                                if (!(l[f] || c[f])) {
                                    c[f] = q.call(r);
                                }
                            }
                        }
                        c = Ce(c);
                    }
                    H.apply(r, c);
                    if (i && !e && c.length > 0 && u + m.length > 1) {
                        ae.uniqueSort(r);
                    }
                }
                if (i) {
                    S = h;
                    w = d;
                }
                return l;
            };
            return v ? fe(e) : e;
        }
        c = ae.compile = function(e, t) {
            var n, r = [], i = [], o = N[e + " "];
            if (!o) {
                if (!t) {
                    t = h(e);
                }
                n = t.length;
                while (n--) {
                    o = ke(t[n]);
                    if (o[k]) {
                        r.push(o);
                    } else {
                        i.push(o);
                    }
                }
                o = N(e, Se(i, r));
                o.selector = e;
            }
            return o;
        };
        g = ae.select = function(e, t, n, r) {
            var i, o, s, a, u, f = typeof e === "function" && e, l = !r && h(e = f.selector || e);
            n = n || [];
            if (l.length === 1) {
                o = l[0] = l[0].slice(0);
                if (o.length > 2 && (s = o[0]).type === "ID" && t.nodeType === 9 && E && b.relative[o[1].type]) {
                    t = (b.find["ID"](s.matches[0].replace(te, ne), t) || [])[0];
                    if (!t) {
                        return n;
                    } else if (f) {
                        t = t.parentNode;
                    }
                    e = e.slice(o.shift().value.length);
                }
                i = G["needsContext"].test(e) ? 0 : o.length;
                while (i--) {
                    s = o[i];
                    if (b.relative[a = s.type]) {
                        break;
                    }
                    if (u = b.find[a]) {
                        if (r = u(s.matches[0].replace(te, ne), ee.test(o[0].type) && me(t.parentNode) || t)) {
                            o.splice(i, 1);
                            e = r.length && xe(o);
                            if (!e) {
                                H.apply(n, r);
                                return n;
                            }
                            break;
                        }
                    }
                }
            }
            (f || c(e, l))(r, t, !E, n, !t || ee.test(e) && me(t.parentNode) || t);
            return n;
        };
        p.sortStable = k.split("").sort(D).join("") === k;
        p.detectDuplicates = !!f;
        T();
        p.sortDetached = le(function(e) {
            return e.compareDocumentPosition(C.createElement("fieldset")) & 1;
        });
        if (!le(function(e) {
            e.innerHTML = "<a href='#'></a>";
            return e.firstChild.getAttribute("href") === "#";
        })) {
            ce("type|href|height|width", function(e, t, n) {
                if (!n) {
                    return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2);
                }
            });
        }
        if (!p.attributes || !le(function(e) {
            e.innerHTML = "<input/>";
            e.firstChild.setAttribute("value", "");
            return e.firstChild.getAttribute("value") === "";
        })) {
            ce("value", function(e, t, n) {
                if (!n && e.nodeName.toLowerCase() === "input") {
                    return e.defaultValue;
                }
            });
        }
        if (!le(function(e) {
            return e.getAttribute("disabled") == null;
        })) {
            ce(R, function(e, t, n) {
                var r;
                if (!n) {
                    return e[t] === true ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                }
            });
        }
        return ae;
    }(C);
    k.find = h;
    k.expr = h.selectors;
    k.expr[":"] = k.expr.pseudos;
    k.uniqueSort = k.unique = h.uniqueSort;
    k.text = h.getText;
    k.isXMLDoc = h.isXML;
    k.contains = h.contains;
    k.escapeSelector = h.escape;
    var T = function(e, t, n) {
        var r = [], i = n !== undefined;
        while ((e = e[t]) && e.nodeType !== 9) {
            if (e.nodeType === 1) {
                if (i && k(e).is(n)) {
                    break;
                }
                r.push(e);
            }
        }
        return r;
    };
    var S = function(e, t) {
        var n = [];
        for (;e; e = e.nextSibling) {
            if (e.nodeType === 1 && e !== t) {
                n.push(e);
            }
        }
        return n;
    };
    var N = k.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
        if (v(n)) {
            return k.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== r;
            });
        }
        if (n.nodeType) {
            return k.grep(e, function(e) {
                return e === n !== r;
            });
        }
        if (typeof n !== "string") {
            return k.grep(e, function(e) {
                return i.call(n, e) > -1 !== r;
            });
        }
        return k.filter(n, e, r);
    }
    k.filter = function(e, t, n) {
        var r = t[0];
        if (n) {
            e = ":not(" + e + ")";
        }
        if (t.length === 1 && r.nodeType === 1) {
            return k.find.matchesSelector(r, e) ? [ r ] : [];
        }
        return k.find.matches(e, k.grep(t, function(e) {
            return e.nodeType === 1;
        }));
    };
    k.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if (typeof e !== "string") {
                return this.pushStack(k(e).filter(function() {
                    for (t = 0; t < r; t++) {
                        if (k.contains(i[t], this)) {
                            return true;
                        }
                    }
                }));
            }
            n = this.pushStack([]);
            for (t = 0; t < r; t++) {
                k.find(e, i[t], n);
            }
            return r > 1 ? k.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], false));
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], true));
        },
        is: function(e) {
            return !!j(this, typeof e === "string" && N.test(e) ? k(e) : e || [], false).length;
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, H = k.fn.init = function(e, t, n) {
        var r, i;
        if (!e) {
            return this;
        }
        n = n || q;
        if (typeof e === "string") {
            if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3) {
                r = [ null, e, null ];
            } else {
                r = L.exec(e);
            }
            if (r && (r[1] || !t)) {
                if (r[1]) {
                    t = t instanceof k ? t[0] : t;
                    k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, true));
                    if (D.test(r[1]) && k.isPlainObject(t)) {
                        for (r in t) {
                            if (v(this[r])) {
                                this[r](t[r]);
                            } else {
                                this.attr(r, t[r]);
                            }
                        }
                    }
                    return this;
                } else {
                    i = E.getElementById(r[2]);
                    if (i) {
                        this[0] = i;
                        this.length = 1;
                    }
                    return this;
                }
            } else if (!t || t.jquery) {
                return (t || n).find(e);
            } else {
                return this.constructor(t).find(e);
            }
        } else if (e.nodeType) {
            this[0] = e;
            this.length = 1;
            return this;
        } else if (v(e)) {
            return n.ready !== undefined ? n.ready(e) : e(k);
        }
        return k.makeArray(e, this);
    };
    H.prototype = k.fn;
    q = k(E);
    var O = /^(?:parents|prev(?:Until|All))/, P = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    k.fn.extend({
        has: function(e) {
            var t = k(e, this), n = t.length;
            return this.filter(function() {
                var e = 0;
                for (;e < n; e++) {
                    if (k.contains(this, t[e])) {
                        return true;
                    }
                }
            });
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], s = typeof e !== "string" && k(e);
            if (!N.test(e)) {
                for (;r < i; r++) {
                    for (n = this[r]; n && n !== t; n = n.parentNode) {
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : n.nodeType === 1 && k.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        }
                    }
                }
            }
            return this.pushStack(o.length > 1 ? k.uniqueSort(o) : o);
        },
        index: function(e) {
            if (!e) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof e === "string") {
                return i.call(k(e), this[0]);
            }
            return i.call(this, e.jquery ? e[0] : e);
        },
        add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
        }
    });
    function R(e, t) {
        while ((e = e[t]) && e.nodeType !== 1) {}
        return e;
    }
    k.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null;
        },
        parents: function(e) {
            return T(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n);
        },
        next: function(e) {
            return R(e, "nextSibling");
        },
        prev: function(e) {
            return R(e, "previousSibling");
        },
        nextAll: function(e) {
            return T(e, "nextSibling");
        },
        prevAll: function(e) {
            return T(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n);
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return S(e.firstChild);
        },
        contents: function(e) {
            if (typeof e.contentDocument !== "undefined") {
                return e.contentDocument;
            }
            if (A(e, "template")) {
                e = e.content || e;
            }
            return k.merge([], e.childNodes);
        }
    }, function(r, i) {
        k.fn[r] = function(e, t) {
            var n = k.map(this, i, e);
            if (r.slice(-5) !== "Until") {
                t = e;
            }
            if (t && typeof t === "string") {
                n = k.filter(t, n);
            }
            if (this.length > 1) {
                if (!P[r]) {
                    k.uniqueSort(n);
                }
                if (O.test(r)) {
                    n.reverse();
                }
            }
            return this.pushStack(n);
        };
    });
    var M = /[^\x20\t\r\n\f]+/g;
    function I(e) {
        var n = {};
        k.each(e.match(M) || [], function(e, t) {
            n[t] = true;
        });
        return n;
    }
    k.Callbacks = function(r) {
        r = typeof r === "string" ? I(r) : k.extend({}, r);
        var n, e, t, i, o = [], s = [], a = -1, u = function() {
            i = i || r.once;
            t = n = true;
            for (;s.length; a = -1) {
                e = s.shift();
                while (++a < o.length) {
                    if (o[a].apply(e[0], e[1]) === false && r.stopOnFalse) {
                        a = o.length;
                        e = false;
                    }
                }
            }
            if (!r.memory) {
                e = false;
            }
            n = false;
            if (i) {
                if (e) {
                    o = [];
                } else {
                    o = "";
                }
            }
        }, f = {
            add: function() {
                if (o) {
                    if (e && !n) {
                        a = o.length - 1;
                        s.push(e);
                    }
                    (function n(e) {
                        k.each(e, function(e, t) {
                            if (v(t)) {
                                if (!r.unique || !f.has(t)) {
                                    o.push(t);
                                }
                            } else if (t && t.length && w(t) !== "string") {
                                n(t);
                            }
                        });
                    })(arguments);
                    if (e && !n) {
                        u();
                    }
                }
                return this;
            },
            remove: function() {
                k.each(arguments, function(e, t) {
                    var n;
                    while ((n = k.inArray(t, o, n)) > -1) {
                        o.splice(n, 1);
                        if (n <= a) {
                            a--;
                        }
                    }
                });
                return this;
            },
            has: function(e) {
                return e ? k.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function() {
                if (o) {
                    o = [];
                }
                return this;
            },
            disable: function() {
                i = s = [];
                o = e = "";
                return this;
            },
            disabled: function() {
                return !o;
            },
            lock: function() {
                i = s = [];
                if (!e && !n) {
                    o = e = "";
                }
                return this;
            },
            locked: function() {
                return !!i;
            },
            fireWith: function(e, t) {
                if (!i) {
                    t = t || [];
                    t = [ e, t.slice ? t.slice() : t ];
                    s.push(t);
                    if (!n) {
                        u();
                    }
                }
                return this;
            },
            fire: function() {
                f.fireWith(this, arguments);
                return this;
            },
            fired: function() {
                return !!t;
            }
        };
        return f;
    };
    function W(e) {
        return e;
    }
    function $(e) {
        throw e;
    }
    function F(e, t, n, r) {
        var i;
        try {
            if (e && v(i = e.promise)) {
                i.call(e).done(t).fail(n);
            } else if (e && v(i = e.then)) {
                i.call(e, t, n);
            } else {
                t.apply(undefined, [ e ].slice(r));
            }
        } catch (e) {
            n.apply(undefined, [ e ]);
        }
    }
    k.extend({
        Deferred: function(e) {
            var o = [ [ "notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2 ], [ "resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected" ] ], i = "pending", s = {
                state: function() {
                    return i;
                },
                always: function() {
                    a.done(arguments).fail(arguments);
                    return this;
                },
                catch: function(e) {
                    return s.then(null, e);
                },
                pipe: function() {
                    var i = arguments;
                    return k.Deferred(function(r) {
                        k.each(o, function(e, t) {
                            var n = v(i[t[4]]) && i[t[4]];
                            a[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                if (e && v(e.promise)) {
                                    e.promise().progress(r.notify).done(r.resolve).fail(r.reject);
                                } else {
                                    r[t[0] + "With"](this, n ? [ e ] : arguments);
                                }
                            });
                        });
                        i = null;
                    }).promise();
                },
                then: function(t, n, r) {
                    var u = 0;
                    function f(i, o, s, a) {
                        return function() {
                            var n = this, r = arguments, e = function() {
                                var e, t;
                                if (i < u) {
                                    return;
                                }
                                e = s.apply(n, r);
                                if (e === o.promise()) {
                                    throw new TypeError("Thenable self-resolution");
                                }
                                t = e && (typeof e === "object" || typeof e === "function") && e.then;
                                if (v(t)) {
                                    if (a) {
                                        t.call(e, f(u, o, W, a), f(u, o, $, a));
                                    } else {
                                        u++;
                                        t.call(e, f(u, o, W, a), f(u, o, $, a), f(u, o, W, o.notifyWith));
                                    }
                                } else {
                                    if (s !== W) {
                                        n = undefined;
                                        r = [ e ];
                                    }
                                    (a || o.resolveWith)(n, r);
                                }
                            }, t = a ? e : function() {
                                try {
                                    e();
                                } catch (e) {
                                    if (k.Deferred.exceptionHook) {
                                        k.Deferred.exceptionHook(e, t.stackTrace);
                                    }
                                    if (i + 1 >= u) {
                                        if (s !== $) {
                                            n = undefined;
                                            r = [ e ];
                                        }
                                        o.rejectWith(n, r);
                                    }
                                }
                            };
                            if (i) {
                                t();
                            } else {
                                if (k.Deferred.getStackHook) {
                                    t.stackTrace = k.Deferred.getStackHook();
                                }
                                C.setTimeout(t);
                            }
                        };
                    }
                    return k.Deferred(function(e) {
                        o[0][3].add(f(0, e, v(r) ? r : W, e.notifyWith));
                        o[1][3].add(f(0, e, v(t) ? t : W));
                        o[2][3].add(f(0, e, v(n) ? n : $));
                    }).promise();
                },
                promise: function(e) {
                    return e != null ? k.extend(e, s) : s;
                }
            }, a = {};
            k.each(o, function(e, t) {
                var n = t[2], r = t[5];
                s[t[1]] = n.add;
                if (r) {
                    n.add(function() {
                        i = r;
                    }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock);
                }
                n.add(t[3].fire);
                a[t[0]] = function() {
                    a[t[0] + "With"](this === a ? undefined : this, arguments);
                    return this;
                };
                a[t[0] + "With"] = n.fireWith;
            });
            s.promise(a);
            if (e) {
                e.call(a, a);
            }
            return a;
        },
        when: function(e) {
            var n = arguments.length, t = n, r = Array(t), i = a.call(arguments), o = k.Deferred(), s = function(t) {
                return function(e) {
                    r[t] = this;
                    i[t] = arguments.length > 1 ? a.call(arguments) : e;
                    if (!--n) {
                        o.resolveWith(r, i);
                    }
                };
            };
            if (n <= 1) {
                F(e, o.done(s(t)).resolve, o.reject, !n);
                if (o.state() === "pending" || v(i[t] && i[t].then)) {
                    return o.then();
                }
            }
            while (t--) {
                F(i[t], s(t), o.reject);
            }
            return o.promise();
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(e, t) {
        if (C.console && C.console.warn && e && B.test(e.name)) {
            C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
        }
    };
    k.readyException = function(e) {
        C.setTimeout(function() {
            throw e;
        });
    };
    var _ = k.Deferred();
    k.fn.ready = function(e) {
        _.then(e).catch(function(e) {
            k.readyException(e);
        });
        return this;
    };
    k.extend({
        isReady: false,
        readyWait: 1,
        ready: function(e) {
            if (e === true ? --k.readyWait : k.isReady) {
                return;
            }
            k.isReady = true;
            if (e !== true && --k.readyWait > 0) {
                return;
            }
            _.resolveWith(E, [ k ]);
        }
    });
    k.ready.then = _.then;
    function z() {
        E.removeEventListener("DOMContentLoaded", z);
        C.removeEventListener("load", z);
        k.ready();
    }
    if (E.readyState === "complete" || E.readyState !== "loading" && !E.documentElement.doScroll) {
        C.setTimeout(k.ready);
    } else {
        E.addEventListener("DOMContentLoaded", z);
        C.addEventListener("load", z);
    }
    var U = function(e, t, n, r, i, o, s) {
        var a = 0, u = e.length, f = n == null;
        if (w(n) === "object") {
            i = true;
            for (a in n) {
                U(e, t, a, n[a], true, o, s);
            }
        } else if (r !== undefined) {
            i = true;
            if (!v(r)) {
                s = true;
            }
            if (f) {
                if (s) {
                    t.call(e, r);
                    t = null;
                } else {
                    f = t;
                    t = function(e, t, n) {
                        return f.call(k(e), n);
                    };
                }
            }
            if (t) {
                for (;a < u; a++) {
                    t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
                }
            }
        }
        if (i) {
            return e;
        }
        if (f) {
            return t.call(e);
        }
        return u ? t(e[0], n) : o;
    };
    var X = /^-ms-/, V = /-([a-z])/g;
    function G(e, t) {
        return t.toUpperCase();
    }
    function Y(e) {
        return e.replace(X, "ms-").replace(V, G);
    }
    var Q = function(e) {
        return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
    };
    function J() {
        this.expando = k.expando + J.uid++;
    }
    J.uid = 1;
    J.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            if (!t) {
                t = {};
                if (Q(e)) {
                    if (e.nodeType) {
                        e[this.expando] = t;
                    } else {
                        Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: true
                        });
                    }
                }
            }
            return t;
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if (typeof t === "string") {
                i[Y(t)] = n;
            } else {
                for (r in t) {
                    i[Y(r)] = t[r];
                }
            }
            return i;
        },
        get: function(e, t) {
            return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)];
        },
        access: function(e, t, n) {
            if (t === undefined || t && typeof t === "string" && n === undefined) {
                return this.get(e, t);
            }
            this.set(e, t, n);
            return n !== undefined ? n : t;
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (r === undefined) {
                return;
            }
            if (t !== undefined) {
                if (Array.isArray(t)) {
                    t = t.map(Y);
                } else {
                    t = Y(t);
                    t = t in r ? [ t ] : t.match(M) || [];
                }
                n = t.length;
                while (n--) {
                    delete r[t[n]];
                }
            }
            if (t === undefined || k.isEmptyObject(r)) {
                if (e.nodeType) {
                    e[this.expando] = undefined;
                } else {
                    delete e[this.expando];
                }
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return t !== undefined && !k.isEmptyObject(t);
        }
    };
    var K = new J();
    var Z = new J();
    var ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, te = /[A-Z]/g;
    function ne(e) {
        if (e === "true") {
            return true;
        }
        if (e === "false") {
            return false;
        }
        if (e === "null") {
            return null;
        }
        if (e === +e + "") {
            return +e;
        }
        if (ee.test(e)) {
            return JSON.parse(e);
        }
        return e;
    }
    function re(e, t, n) {
        var r;
        if (n === undefined && e.nodeType === 1) {
            r = "data-" + t.replace(te, "-$&").toLowerCase();
            n = e.getAttribute(r);
            if (typeof n === "string") {
                try {
                    n = ne(n);
                } catch (e) {}
                Z.set(e, t, n);
            } else {
                n = undefined;
            }
        }
        return n;
    }
    k.extend({
        hasData: function(e) {
            return Z.hasData(e) || K.hasData(e);
        },
        data: function(e, t, n) {
            return Z.access(e, t, n);
        },
        removeData: function(e, t) {
            Z.remove(e, t);
        },
        _data: function(e, t, n) {
            return K.access(e, t, n);
        },
        _removeData: function(e, t) {
            K.remove(e, t);
        }
    });
    k.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], s = o && o.attributes;
            if (n === undefined) {
                if (this.length) {
                    i = Z.get(o);
                    if (o.nodeType === 1 && !K.get(o, "hasDataAttrs")) {
                        t = s.length;
                        while (t--) {
                            if (s[t]) {
                                r = s[t].name;
                                if (r.indexOf("data-") === 0) {
                                    r = Y(r.slice(5));
                                    re(o, r, i[r]);
                                }
                            }
                        }
                        K.set(o, "hasDataAttrs", true);
                    }
                }
                return i;
            }
            if (typeof n === "object") {
                return this.each(function() {
                    Z.set(this, n);
                });
            }
            return U(this, function(e) {
                var t;
                if (o && e === undefined) {
                    t = Z.get(o, n);
                    if (t !== undefined) {
                        return t;
                    }
                    t = re(o, n);
                    if (t !== undefined) {
                        return t;
                    }
                    return;
                }
                this.each(function() {
                    Z.set(this, n, e);
                });
            }, null, e, arguments.length > 1, null, true);
        },
        removeData: function(e) {
            return this.each(function() {
                Z.remove(this, e);
            });
        }
    });
    k.extend({
        queue: function(e, t, n) {
            var r;
            if (e) {
                t = (t || "fx") + "queue";
                r = K.get(e, t);
                if (n) {
                    if (!r || Array.isArray(n)) {
                        r = K.access(e, t, k.makeArray(n));
                    } else {
                        r.push(n);
                    }
                }
                return r || [];
            }
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t), r = n.length, i = n.shift(), o = k._queueHooks(e, t), s = function() {
                k.dequeue(e, t);
            };
            if (i === "inprogress") {
                i = n.shift();
                r--;
            }
            if (i) {
                if (t === "fx") {
                    n.unshift("inprogress");
                }
                delete o.stop;
                i.call(e, s, o);
            }
            if (!r && o) {
                o.empty.fire();
            }
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return K.get(e, n) || K.access(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                    K.remove(e, [ t + "queue", n ]);
                })
            });
        }
    });
    k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            if (typeof t !== "string") {
                n = t;
                t = "fx";
                e--;
            }
            if (arguments.length < e) {
                return k.queue(this[0], t);
            }
            return n === undefined ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t);
                if (t === "fx" && e[0] !== "inprogress") {
                    k.dequeue(this, t);
                }
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                k.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, r = 1, i = k.Deferred(), o = this, s = this.length, a = function() {
                if (!--r) {
                    i.resolveWith(o, [ o ]);
                }
            };
            if (typeof e !== "string") {
                t = e;
                e = undefined;
            }
            e = e || "fx";
            while (s--) {
                n = K.get(o[s], e + "queueHooks");
                if (n && n.empty) {
                    r++;
                    n.empty.add(a);
                }
            }
            a();
            return i.promise(t);
        }
    });
    var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var oe = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i");
    var se = [ "Top", "Right", "Bottom", "Left" ];
    var ae = E.documentElement;
    var ue = function(e) {
        return k.contains(e.ownerDocument, e);
    }, fe = {
        composed: true
    };
    if (ae.getRootNode) {
        ue = function(e) {
            return k.contains(e.ownerDocument, e) || e.getRootNode(fe) === e.ownerDocument;
        };
    }
    var le = function(e, t) {
        e = t || e;
        return e.style.display === "none" || e.style.display === "" && ue(e) && k.css(e, "display") === "none";
    };
    var ce = function(e, t, n, r) {
        var i, o, s = {};
        for (o in t) {
            s[o] = e.style[o];
            e.style[o] = t[o];
        }
        i = n.apply(e, r || []);
        for (o in t) {
            e.style[o] = s[o];
        }
        return i;
    };
    function de(e, t, n, r) {
        var i, o, s = 20, a = r ? function() {
            return r.cur();
        } : function() {
            return k.css(e, t, "");
        }, u = a(), f = n && n[3] || (k.cssNumber[t] ? "" : "px"), l = e.nodeType && (k.cssNumber[t] || f !== "px" && +u) && oe.exec(k.css(e, t));
        if (l && l[3] !== f) {
            u = u / 2;
            f = f || l[3];
            l = +u || 1;
            while (s--) {
                k.style(e, t, l + f);
                if ((1 - o) * (1 - (o = a() / u || .5)) <= 0) {
                    s = 0;
                }
                l = l / o;
            }
            l = l * 2;
            k.style(e, t, l + f);
            n = n || [];
        }
        if (n) {
            l = +l || +u || 0;
            i = n[1] ? l + (n[1] + 1) * n[2] : +n[2];
            if (r) {
                r.unit = f;
                r.start = l;
                r.end = i;
            }
        }
        return i;
    }
    var pe = {};
    function he(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = pe[r];
        if (i) {
            return i;
        }
        t = n.body.appendChild(n.createElement(r));
        i = k.css(t, "display");
        t.parentNode.removeChild(t);
        if (i === "none") {
            i = "block";
        }
        pe[r] = i;
        return i;
    }
    function ge(e, t) {
        var n, r, i = [], o = 0, s = e.length;
        for (;o < s; o++) {
            r = e[o];
            if (!r.style) {
                continue;
            }
            n = r.style.display;
            if (t) {
                if (n === "none") {
                    i[o] = K.get(r, "display") || null;
                    if (!i[o]) {
                        r.style.display = "";
                    }
                }
                if (r.style.display === "" && le(r)) {
                    i[o] = he(r);
                }
            } else {
                if (n !== "none") {
                    i[o] = "none";
                    K.set(r, "display", n);
                }
            }
        }
        for (o = 0; o < s; o++) {
            if (i[o] != null) {
                e[o].style.display = i[o];
            }
        }
        return e;
    }
    k.fn.extend({
        show: function() {
            return ge(this, true);
        },
        hide: function() {
            return ge(this);
        },
        toggle: function(e) {
            if (typeof e === "boolean") {
                return e ? this.show() : this.hide();
            }
            return this.each(function() {
                if (le(this)) {
                    k(this).show();
                } else {
                    k(this).hide();
                }
            });
        }
    });
    var ye = /^(?:checkbox|radio)$/i;
    var me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
    var ve = /^$|^module$|\/(?:java|ecma)script/i;
    var xe = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    xe.optgroup = xe.option;
    xe.tbody = xe.tfoot = xe.colgroup = xe.caption = xe.thead;
    xe.th = xe.td;
    function be(e, t) {
        var n;
        if (typeof e.getElementsByTagName !== "undefined") {
            n = e.getElementsByTagName(t || "*");
        } else if (typeof e.querySelectorAll !== "undefined") {
            n = e.querySelectorAll(t || "*");
        } else {
            n = [];
        }
        if (t === undefined || t && A(e, t)) {
            return k.merge([ e ], n);
        }
        return n;
    }
    function we(e, t) {
        var n = 0, r = e.length;
        for (;n < r; n++) {
            K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
        }
    }
    var Te = /<|&#?\w+;/;
    function Ce(e, t, n, r, i) {
        var o, s, a, u, f, l, c = t.createDocumentFragment(), d = [], p = 0, h = e.length;
        for (;p < h; p++) {
            o = e[p];
            if (o || o === 0) {
                if (w(o) === "object") {
                    k.merge(d, o.nodeType ? [ o ] : o);
                } else if (!Te.test(o)) {
                    d.push(t.createTextNode(o));
                } else {
                    s = s || c.appendChild(t.createElement("div"));
                    a = (me.exec(o) || [ "", "" ])[1].toLowerCase();
                    u = xe[a] || xe._default;
                    s.innerHTML = u[1] + k.htmlPrefilter(o) + u[2];
                    l = u[0];
                    while (l--) {
                        s = s.lastChild;
                    }
                    k.merge(d, s.childNodes);
                    s = c.firstChild;
                    s.textContent = "";
                }
            }
        }
        c.textContent = "";
        p = 0;
        while (o = d[p++]) {
            if (r && k.inArray(o, r) > -1) {
                if (i) {
                    i.push(o);
                }
                continue;
            }
            f = ue(o);
            s = be(c.appendChild(o), "script");
            if (f) {
                we(s);
            }
            if (n) {
                l = 0;
                while (o = s[l++]) {
                    if (ve.test(o.type || "")) {
                        n.push(o);
                    }
                }
            }
        }
        return c;
    }
    (function() {
        var e = E.createDocumentFragment(), t = e.appendChild(E.createElement("div")), n = E.createElement("input");
        n.setAttribute("type", "radio");
        n.setAttribute("checked", "checked");
        n.setAttribute("name", "t");
        t.appendChild(n);
        m.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked;
        t.innerHTML = "<textarea>x</textarea>";
        m.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue;
    })();
    var Ee = /^key/, ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Se = /^([^.]*)(?:\.(.+)|)/;
    function Ne() {
        return true;
    }
    function Ae() {
        return false;
    }
    function De(e, t) {
        return e === je() === (t === "focus");
    }
    function je() {
        try {
            return E.activeElement;
        } catch (e) {}
    }
    function qe(e, t, n, r, i, o) {
        var s, a;
        if (typeof t === "object") {
            if (typeof n !== "string") {
                r = r || n;
                n = undefined;
            }
            for (a in t) {
                qe(e, a, n, r, t[a], o);
            }
            return e;
        }
        if (r == null && i == null) {
            i = n;
            r = n = undefined;
        } else if (i == null) {
            if (typeof n === "string") {
                i = r;
                r = undefined;
            } else {
                i = r;
                r = n;
                n = undefined;
            }
        }
        if (i === false) {
            i = Ae;
        } else if (!i) {
            return e;
        }
        if (o === 1) {
            s = i;
            i = function(e) {
                k().off(e);
                return s.apply(this, arguments);
            };
            i.guid = s.guid || (s.guid = k.guid++);
        }
        return e.each(function() {
            k.event.add(this, t, i, r, n);
        });
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, s, a, u, f, l, c, d, p, h, g, y = K.get(t);
            if (!y) {
                return;
            }
            if (n.handler) {
                o = n;
                n = o.handler;
                i = o.selector;
            }
            if (i) {
                k.find.matchesSelector(ae, i);
            }
            if (!n.guid) {
                n.guid = k.guid++;
            }
            if (!(u = y.events)) {
                u = y.events = {};
            }
            if (!(s = y.handle)) {
                s = y.handle = function(e) {
                    return typeof k !== "undefined" && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : undefined;
                };
            }
            e = (e || "").match(M) || [ "" ];
            f = e.length;
            while (f--) {
                a = Se.exec(e[f]) || [];
                p = g = a[1];
                h = (a[2] || "").split(".").sort();
                if (!p) {
                    continue;
                }
                c = k.event.special[p] || {};
                p = (i ? c.delegateType : c.bindType) || p;
                c = k.event.special[p] || {};
                l = k.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && k.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o);
                if (!(d = u[p])) {
                    d = u[p] = [];
                    d.delegateCount = 0;
                    if (!c.setup || c.setup.call(t, r, h, s) === false) {
                        if (t.addEventListener) {
                            t.addEventListener(p, s);
                        }
                    }
                }
                if (c.add) {
                    c.add.call(t, l);
                    if (!l.handler.guid) {
                        l.handler.guid = n.guid;
                    }
                }
                if (i) {
                    d.splice(d.delegateCount++, 0, l);
                } else {
                    d.push(l);
                }
                k.event.global[p] = true;
            }
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, f, l, c, d, p, h, g, y = K.hasData(e) && K.get(e);
            if (!y || !(u = y.events)) {
                return;
            }
            t = (t || "").match(M) || [ "" ];
            f = t.length;
            while (f--) {
                a = Se.exec(t[f]) || [];
                p = g = a[1];
                h = (a[2] || "").split(".").sort();
                if (!p) {
                    for (p in u) {
                        k.event.remove(e, p + t[f], n, r, true);
                    }
                    continue;
                }
                c = k.event.special[p] || {};
                p = (r ? c.delegateType : c.bindType) || p;
                d = u[p] || [];
                a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)");
                s = o = d.length;
                while (o--) {
                    l = d[o];
                    if ((i || g === l.origType) && (!n || n.guid === l.guid) && (!a || a.test(l.namespace)) && (!r || r === l.selector || r === "**" && l.selector)) {
                        d.splice(o, 1);
                        if (l.selector) {
                            d.delegateCount--;
                        }
                        if (c.remove) {
                            c.remove.call(e, l);
                        }
                    }
                }
                if (s && !d.length) {
                    if (!c.teardown || c.teardown.call(e, h, y.handle) === false) {
                        k.removeEvent(e, p, y.handle);
                    }
                    delete u[p];
                }
            }
            if (k.isEmptyObject(u)) {
                K.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t = k.event.fix(e);
            var n, r, i, o, s, a, u = new Array(arguments.length), f = (K.get(this, "events") || {})[t.type] || [], l = k.event.special[t.type] || {};
            u[0] = t;
            for (n = 1; n < arguments.length; n++) {
                u[n] = arguments[n];
            }
            t.delegateTarget = this;
            if (l.preDispatch && l.preDispatch.call(this, t) === false) {
                return;
            }
            a = k.event.handlers.call(this, t, f);
            n = 0;
            while ((o = a[n++]) && !t.isPropagationStopped()) {
                t.currentTarget = o.elem;
                r = 0;
                while ((s = o.handlers[r++]) && !t.isImmediatePropagationStopped()) {
                    if (!t.rnamespace || s.namespace === false || t.rnamespace.test(s.namespace)) {
                        t.handleObj = s;
                        t.data = s.data;
                        i = ((k.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, u);
                        if (i !== undefined) {
                            if ((t.result = i) === false) {
                                t.preventDefault();
                                t.stopPropagation();
                            }
                        }
                    }
                }
            }
            if (l.postDispatch) {
                l.postDispatch.call(this, t);
            }
            return t.result;
        },
        handlers: function(e, t) {
            var n, r, i, o, s, a = [], u = t.delegateCount, f = e.target;
            if (u && f.nodeType && !(e.type === "click" && e.button >= 1)) {
                for (;f !== this; f = f.parentNode || this) {
                    if (f.nodeType === 1 && !(e.type === "click" && f.disabled === true)) {
                        o = [];
                        s = {};
                        for (n = 0; n < u; n++) {
                            r = t[n];
                            i = r.selector + " ";
                            if (s[i] === undefined) {
                                s[i] = r.needsContext ? k(i, this).index(f) > -1 : k.find(i, this, null, [ f ]).length;
                            }
                            if (s[i]) {
                                o.push(r);
                            }
                        }
                        if (o.length) {
                            a.push({
                                elem: f,
                                handlers: o
                            });
                        }
                    }
                }
            }
            f = this;
            if (u < t.length) {
                a.push({
                    elem: f,
                    handlers: t.slice(u)
                });
            }
            return a;
        },
        addProp: function(t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: true,
                configurable: true,
                get: v(e) ? function() {
                    if (this.originalEvent) {
                        return e(this.originalEvent);
                    }
                } : function() {
                    if (this.originalEvent) {
                        return this.originalEvent[t];
                    }
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value: e
                    });
                }
            });
        },
        fix: function(e) {
            return e[k.expando] ? e : new k.Event(e);
        },
        special: {
            load: {
                noBubble: true
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    if (ye.test(t.type) && t.click && A(t, "input")) {
                        Le(t, "click", Ne);
                    }
                    return false;
                },
                trigger: function(e) {
                    var t = this || e;
                    if (ye.test(t.type) && t.click && A(t, "input")) {
                        Le(t, "click");
                    }
                    return true;
                },
                _default: function(e) {
                    var t = e.target;
                    return ye.test(t.type) && t.click && A(t, "input") && K.get(t, "click") || A(t, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    if (e.result !== undefined && e.originalEvent) {
                        e.originalEvent.returnValue = e.result;
                    }
                }
            }
        }
    };
    function Le(e, i, o) {
        if (!o) {
            if (K.get(e, i) === undefined) {
                k.event.add(e, i, Ne);
            }
            return;
        }
        K.set(e, i, false);
        k.event.add(e, i, {
            namespace: false,
            handler: function(e) {
                var t, n, r = K.get(this, i);
                if (e.isTrigger & 1 && this[i]) {
                    if (!r.length) {
                        r = a.call(arguments);
                        K.set(this, i, r);
                        t = o(this, i);
                        this[i]();
                        n = K.get(this, i);
                        if (r !== n || t) {
                            K.set(this, i, false);
                        } else {
                            n = {};
                        }
                        if (r !== n) {
                            e.stopImmediatePropagation();
                            e.preventDefault();
                            return n.value;
                        }
                    } else if ((k.event.special[i] || {}).delegateType) {
                        e.stopPropagation();
                    }
                } else if (r.length) {
                    K.set(this, i, {
                        value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
                    });
                    e.stopImmediatePropagation();
                }
            }
        });
    }
    k.removeEvent = function(e, t, n) {
        if (e.removeEventListener) {
            e.removeEventListener(t, n);
        }
    };
    k.Event = function(e, t) {
        if (!(this instanceof k.Event)) {
            return new k.Event(e, t);
        }
        if (e && e.type) {
            this.originalEvent = e;
            this.type = e.type;
            this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === false ? Ne : Ae;
            this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target;
            this.currentTarget = e.currentTarget;
            this.relatedTarget = e.relatedTarget;
        } else {
            this.type = e;
        }
        if (t) {
            k.extend(this, t);
        }
        this.timeStamp = e && e.timeStamp || Date.now();
        this[k.expando] = true;
    };
    k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: Ae,
        isPropagationStopped: Ae,
        isImmediatePropagationStopped: Ae,
        isSimulated: false,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ne;
            if (e && !this.isSimulated) {
                e.preventDefault();
            }
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ne;
            if (e && !this.isSimulated) {
                e.stopPropagation();
            }
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ne;
            if (e && !this.isSimulated) {
                e.stopImmediatePropagation();
            }
            this.stopPropagation();
        }
    };
    k.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        char: true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: function(e) {
            var t = e.button;
            if (e.which == null && Ee.test(e.type)) {
                return e.charCode != null ? e.charCode : e.keyCode;
            }
            if (!e.which && t !== undefined && ke.test(e.type)) {
                if (t & 1) {
                    return 1;
                }
                if (t & 2) {
                    return 3;
                }
                if (t & 4) {
                    return 2;
                }
                return 0;
            }
            return e.which;
        }
    }, k.event.addProp);
    k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        k.event.special[e] = {
            setup: function() {
                Le(this, e, De);
                return false;
            },
            trigger: function() {
                Le(this, e);
                return true;
            },
            delegateType: t
        };
    });
    k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        k.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = this, r = e.relatedTarget, i = e.handleObj;
                if (!r || r !== n && !k.contains(n, r)) {
                    e.type = i.origType;
                    t = i.handler.apply(this, arguments);
                    e.type = o;
                }
                return t;
            }
        };
    });
    k.fn.extend({
        on: function(e, t, n, r) {
            return qe(this, e, t, n, r);
        },
        one: function(e, t, n, r) {
            return qe(this, e, t, n, r, 1);
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) {
                r = e.handleObj;
                k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
                return this;
            }
            if (typeof e === "object") {
                for (i in e) {
                    this.off(i, t, e[i]);
                }
                return this;
            }
            if (t === false || typeof t === "function") {
                n = t;
                t = undefined;
            }
            if (n === false) {
                n = Ae;
            }
            return this.each(function() {
                k.event.remove(this, e, n, t);
            });
        }
    });
    var He = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Oe = /<script|<style|<link/i, Pe = /checked\s*(?:[^=]|=\s*.checked.)/i, Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Me(e, t) {
        if (A(e, "table") && A(t.nodeType !== 11 ? t : t.firstChild, "tr")) {
            return k(e).children("tbody")[0] || e;
        }
        return e;
    }
    function Ie(e) {
        e.type = (e.getAttribute("type") !== null) + "/" + e.type;
        return e;
    }
    function We(e) {
        if ((e.type || "").slice(0, 5) === "true/") {
            e.type = e.type.slice(5);
        } else {
            e.removeAttribute("type");
        }
        return e;
    }
    function $e(e, t) {
        var n, r, i, o, s, a, u, f;
        if (t.nodeType !== 1) {
            return;
        }
        if (K.hasData(e)) {
            o = K.access(e);
            s = K.set(t, o);
            f = o.events;
            if (f) {
                delete s.handle;
                s.events = {};
                for (i in f) {
                    for (n = 0, r = f[i].length; n < r; n++) {
                        k.event.add(t, i, f[i][n]);
                    }
                }
            }
        }
        if (Z.hasData(e)) {
            a = Z.access(e);
            u = k.extend({}, a);
            Z.set(t, u);
        }
    }
    function Fe(e, t) {
        var n = t.nodeName.toLowerCase();
        if (n === "input" && ye.test(e.type)) {
            t.checked = e.checked;
        } else if (n === "input" || n === "textarea") {
            t.defaultValue = e.defaultValue;
        }
    }
    function Be(n, r, i, o) {
        r = g.apply([], r);
        var e, t, s, a, u, f, l = 0, c = n.length, d = c - 1, p = r[0], h = v(p);
        if (h || c > 1 && typeof p === "string" && !m.checkClone && Pe.test(p)) {
            return n.each(function(e) {
                var t = n.eq(e);
                if (h) {
                    r[0] = p.call(this, e, t.html());
                }
                Be(t, r, i, o);
            });
        }
        if (c) {
            e = Ce(r, n[0].ownerDocument, false, n, o);
            t = e.firstChild;
            if (e.childNodes.length === 1) {
                e = t;
            }
            if (t || o) {
                s = k.map(be(e, "script"), Ie);
                a = s.length;
                for (;l < c; l++) {
                    u = e;
                    if (l !== d) {
                        u = k.clone(u, true, true);
                        if (a) {
                            k.merge(s, be(u, "script"));
                        }
                    }
                    i.call(n[l], u, l);
                }
                if (a) {
                    f = s[s.length - 1].ownerDocument;
                    k.map(s, We);
                    for (l = 0; l < a; l++) {
                        u = s[l];
                        if (ve.test(u.type || "") && !K.access(u, "globalEval") && k.contains(f, u)) {
                            if (u.src && (u.type || "").toLowerCase() !== "module") {
                                if (k._evalUrl && !u.noModule) {
                                    k._evalUrl(u.src, {
                                        nonce: u.nonce || u.getAttribute("nonce")
                                    });
                                }
                            } else {
                                b(u.textContent.replace(Re, ""), u, f);
                            }
                        }
                    }
                }
            }
        }
        return n;
    }
    function _e(e, t, n) {
        var r, i = t ? k.filter(t, e) : e, o = 0;
        for (;(r = i[o]) != null; o++) {
            if (!n && r.nodeType === 1) {
                k.cleanData(be(r));
            }
            if (r.parentNode) {
                if (n && ue(r)) {
                    we(be(r, "script"));
                }
                r.parentNode.removeChild(r);
            }
        }
        return e;
    }
    k.extend({
        htmlPrefilter: function(e) {
            return e.replace(He, "<$1></$2>");
        },
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(true), u = ue(e);
            if (!m.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !k.isXMLDoc(e)) {
                s = be(a);
                o = be(e);
                for (r = 0, i = o.length; r < i; r++) {
                    Fe(o[r], s[r]);
                }
            }
            if (t) {
                if (n) {
                    o = o || be(e);
                    s = s || be(a);
                    for (r = 0, i = o.length; r < i; r++) {
                        $e(o[r], s[r]);
                    }
                } else {
                    $e(e, a);
                }
            }
            s = be(a, "script");
            if (s.length > 0) {
                we(s, !u && be(e, "script"));
            }
            return a;
        },
        cleanData: function(e) {
            var t, n, r, i = k.event.special, o = 0;
            for (;(n = e[o]) !== undefined; o++) {
                if (Q(n)) {
                    if (t = n[K.expando]) {
                        if (t.events) {
                            for (r in t.events) {
                                if (i[r]) {
                                    k.event.remove(n, r);
                                } else {
                                    k.removeEvent(n, r, t.handle);
                                }
                            }
                        }
                        n[K.expando] = undefined;
                    }
                    if (n[Z.expando]) {
                        n[Z.expando] = undefined;
                    }
                }
            }
        }
    });
    k.fn.extend({
        detach: function(e) {
            return _e(this, e, true);
        },
        remove: function(e) {
            return _e(this, e);
        },
        text: function(e) {
            return U(this, function(e) {
                return e === undefined ? k.text(this) : this.empty().each(function() {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        this.textContent = e;
                    }
                });
            }, null, e, arguments.length);
        },
        append: function() {
            return Be(this, arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = Me(this, e);
                    t.appendChild(e);
                }
            });
        },
        prepend: function() {
            return Be(this, arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = Me(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return Be(this, arguments, function(e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this);
                }
            });
        },
        after: function() {
            return Be(this, arguments, function(e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this.nextSibling);
                }
            });
        },
        empty: function() {
            var e, t = 0;
            for (;(e = this[t]) != null; t++) {
                if (e.nodeType === 1) {
                    k.cleanData(be(e, false));
                    e.textContent = "";
                }
            }
            return this;
        },
        clone: function(e, t) {
            e = e == null ? false : e;
            t = t == null ? e : t;
            return this.map(function() {
                return k.clone(this, e, t);
            });
        },
        html: function(e) {
            return U(this, function(e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (e === undefined && t.nodeType === 1) {
                    return t.innerHTML;
                }
                if (typeof e === "string" && !Oe.test(e) && !xe[(me.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (;n < r; n++) {
                            t = this[n] || {};
                            if (t.nodeType === 1) {
                                k.cleanData(be(t, false));
                                t.innerHTML = e;
                            }
                        }
                        t = 0;
                    } catch (e) {}
                }
                if (t) {
                    this.empty().append(e);
                }
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var n = [];
            return Be(this, arguments, function(e) {
                var t = this.parentNode;
                if (k.inArray(this, n) < 0) {
                    k.cleanData(be(this));
                    if (t) {
                        t.replaceChild(e, this);
                    }
                }
            }, n);
        }
    });
    k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        k.fn[e] = function(e) {
            var t, n = [], r = k(e), i = r.length - 1, o = 0;
            for (;o <= i; o++) {
                t = o === i ? this : this.clone(true);
                k(r[o])[s](t);
                u.apply(n, t.get());
            }
            return this.pushStack(n);
        };
    });
    var ze = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i");
    var Ue = function(e) {
        var t = e.ownerDocument.defaultView;
        if (!t || !t.opener) {
            t = C;
        }
        return t.getComputedStyle(e);
    };
    var Xe = new RegExp(se.join("|"), "i");
    (function() {
        function e() {
            if (!u) {
                return;
            }
            a.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
            u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
            ae.appendChild(a).appendChild(u);
            var e = C.getComputedStyle(u);
            n = e.top !== "1%";
            s = t(e.marginLeft) === 12;
            u.style.right = "60%";
            o = t(e.right) === 36;
            r = t(e.width) === 36;
            u.style.position = "absolute";
            i = t(u.offsetWidth / 3) === 12;
            ae.removeChild(a);
            u = null;
        }
        function t(e) {
            return Math.round(parseFloat(e));
        }
        var n, r, i, o, s, a = E.createElement("div"), u = E.createElement("div");
        if (!u.style) {
            return;
        }
        u.style.backgroundClip = "content-box";
        u.cloneNode(true).style.backgroundClip = "";
        m.clearCloneStyle = u.style.backgroundClip === "content-box";
        k.extend(m, {
            boxSizingReliable: function() {
                e();
                return r;
            },
            pixelBoxStyles: function() {
                e();
                return o;
            },
            pixelPosition: function() {
                e();
                return n;
            },
            reliableMarginLeft: function() {
                e();
                return s;
            },
            scrollboxSize: function() {
                e();
                return i;
            }
        });
    })();
    function Ve(e, t, n) {
        var r, i, o, s, a = e.style;
        n = n || Ue(e);
        if (n) {
            s = n.getPropertyValue(t) || n[t];
            if (s === "" && !ue(e)) {
                s = k.style(e, t);
            }
            if (!m.pixelBoxStyles() && ze.test(s) && Xe.test(t)) {
                r = a.width;
                i = a.minWidth;
                o = a.maxWidth;
                a.minWidth = a.maxWidth = a.width = s;
                s = n.width;
                a.width = r;
                a.minWidth = i;
                a.maxWidth = o;
            }
        }
        return s !== undefined ? s + "" : s;
    }
    function Ge(e, t) {
        return {
            get: function() {
                if (e()) {
                    delete this.get;
                    return;
                }
                return (this.get = t).apply(this, arguments);
            }
        };
    }
    var Ye = [ "Webkit", "Moz", "ms" ], Qe = E.createElement("div").style, Je = {};
    function Ke(e) {
        var t = e[0].toUpperCase() + e.slice(1), n = Ye.length;
        while (n--) {
            e = Ye[n] + t;
            if (e in Qe) {
                return e;
            }
        }
    }
    function Ze(e) {
        var t = k.cssProps[e] || Je[e];
        if (t) {
            return t;
        }
        if (e in Qe) {
            return e;
        }
        return Je[e] = Ke(e) || e;
    }
    var et = /^(none|table(?!-c[ea]).+)/, tt = /^--/, nt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, rt = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function it(e, t, n) {
        var r = oe.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function ot(e, t, n, r, i, o) {
        var s = t === "width" ? 1 : 0, a = 0, u = 0;
        if (n === (r ? "border" : "content")) {
            return 0;
        }
        for (;s < 4; s += 2) {
            if (n === "margin") {
                u += k.css(e, n + se[s], true, i);
            }
            if (!r) {
                u += k.css(e, "padding" + se[s], true, i);
                if (n !== "padding") {
                    u += k.css(e, "border" + se[s] + "Width", true, i);
                } else {
                    a += k.css(e, "border" + se[s] + "Width", true, i);
                }
            } else {
                if (n === "content") {
                    u -= k.css(e, "padding" + se[s], true, i);
                }
                if (n !== "margin") {
                    u -= k.css(e, "border" + se[s] + "Width", true, i);
                }
            }
        }
        if (!r && o >= 0) {
            u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - .5)) || 0;
        }
        return u;
    }
    function st(e, t, n) {
        var r = Ue(e), i = !m.boxSizingReliable() || n, o = i && k.css(e, "boxSizing", false, r) === "border-box", s = o, a = Ve(e, t, r), u = "offset" + t[0].toUpperCase() + t.slice(1);
        if (ze.test(a)) {
            if (!n) {
                return a;
            }
            a = "auto";
        }
        if ((!m.boxSizingReliable() && o || a === "auto" || !parseFloat(a) && k.css(e, "display", false, r) === "inline") && e.getClientRects().length) {
            o = k.css(e, "boxSizing", false, r) === "border-box";
            s = u in e;
            if (s) {
                a = e[u];
            }
        }
        a = parseFloat(a) || 0;
        return a + ot(e, t, n || (o ? "border" : "content"), s, r, a) + "px";
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ve(e, "opacity");
                        return n === "" ? "1" : n;
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
            gridArea: true,
            gridColumn: true,
            gridColumnEnd: true,
            gridColumnStart: true,
            gridRow: true,
            gridRowEnd: true,
            gridRowStart: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) {
                return;
            }
            var i, o, s, a = Y(t), u = tt.test(t), f = e.style;
            if (!u) {
                t = Ze(a);
            }
            s = k.cssHooks[t] || k.cssHooks[a];
            if (n !== undefined) {
                o = typeof n;
                if (o === "string" && (i = oe.exec(n)) && i[1]) {
                    n = de(e, t, i);
                    o = "number";
                }
                if (n == null || n !== n) {
                    return;
                }
                if (o === "number" && !u) {
                    n += i && i[3] || (k.cssNumber[a] ? "" : "px");
                }
                if (!m.clearCloneStyle && n === "" && t.indexOf("background") === 0) {
                    f[t] = "inherit";
                }
                if (!s || !("set" in s) || (n = s.set(e, n, r)) !== undefined) {
                    if (u) {
                        f.setProperty(t, n);
                    } else {
                        f[t] = n;
                    }
                }
            } else {
                if (s && "get" in s && (i = s.get(e, false, r)) !== undefined) {
                    return i;
                }
                return f[t];
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = Y(t), u = tt.test(t);
            if (!u) {
                t = Ze(a);
            }
            s = k.cssHooks[t] || k.cssHooks[a];
            if (s && "get" in s) {
                i = s.get(e, true, n);
            }
            if (i === undefined) {
                i = Ve(e, t, r);
            }
            if (i === "normal" && t in rt) {
                i = rt[t];
            }
            if (n === "" || n) {
                o = parseFloat(i);
                return n === true || isFinite(o) ? o || 0 : i;
            }
            return i;
        }
    });
    k.each([ "height", "width" ], function(e, f) {
        k.cssHooks[f] = {
            get: function(e, t, n) {
                if (t) {
                    return et.test(k.css(e, "display")) && (!e.getClientRects().length || !e.getBoundingClientRect().width) ? ce(e, nt, function() {
                        return st(e, f, n);
                    }) : st(e, f, n);
                }
            },
            set: function(e, t, n) {
                var r, i = Ue(e), o = !m.scrollboxSize() && i.position === "absolute", s = o || n, a = s && k.css(e, "boxSizing", false, i) === "border-box", u = n ? ot(e, f, n, a, i) : 0;
                if (a && o) {
                    u -= Math.ceil(e["offset" + f[0].toUpperCase() + f.slice(1)] - parseFloat(i[f]) - ot(e, f, "border", false, i) - .5);
                }
                if (u && (r = oe.exec(t)) && (r[3] || "px") !== "px") {
                    e.style[f] = t;
                    t = k.css(e, f);
                }
                return it(e, t, u);
            }
        };
    });
    k.cssHooks.marginLeft = Ge(m.reliableMarginLeft, function(e, t) {
        if (t) {
            return (parseFloat(Ve(e, "marginLeft")) || e.getBoundingClientRect().left - ce(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left;
            })) + "px";
        }
    });
    k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        k.cssHooks[i + o] = {
            expand: function(e) {
                var t = 0, n = {}, r = typeof e === "string" ? e.split(" ") : [ e ];
                for (;t < 4; t++) {
                    n[i + se[t] + o] = r[t] || r[t - 2] || r[0];
                }
                return n;
            }
        };
        if (i !== "margin") {
            k.cssHooks[i + o].set = it;
        }
    });
    k.fn.extend({
        css: function(e, t) {
            return U(this, function(e, t, n) {
                var r, i, o = {}, s = 0;
                if (Array.isArray(t)) {
                    r = Ue(e);
                    i = t.length;
                    for (;s < i; s++) {
                        o[t[s]] = k.css(e, t[s], false, r);
                    }
                    return o;
                }
                return n !== undefined ? k.style(e, t, n) : k.css(e, t);
            }, e, t, arguments.length > 1);
        }
    });
    function at(e, t, n, r, i) {
        return new at.prototype.init(e, t, n, r, i);
    }
    k.Tween = at;
    at.prototype = {
        constructor: at,
        init: function(e, t, n, r, i, o) {
            this.elem = e;
            this.prop = n;
            this.easing = i || k.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = r;
            this.unit = o || (k.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = at.propHooks[this.prop];
            return e && e.get ? e.get(this) : at.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = at.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration);
            } else {
                this.pos = t = e;
            }
            this.now = (this.end - this.start) * t + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }
            if (n && n.set) {
                n.set(this);
            } else {
                at.propHooks._default.set(this);
            }
            return this;
        }
    };
    at.prototype.init.prototype = at.prototype;
    at.propHooks = {
        _default: {
            get: function(e) {
                var t;
                if (e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null) {
                    return e.elem[e.prop];
                }
                t = k.css(e.elem, e.prop, "");
                return !t || t === "auto" ? 0 : t;
            },
            set: function(e) {
                if (k.fx.step[e.prop]) {
                    k.fx.step[e.prop](e);
                } else if (e.elem.nodeType === 1 && (k.cssHooks[e.prop] || e.elem.style[Ze(e.prop)] != null)) {
                    k.style(e.elem, e.prop, e.now + e.unit);
                } else {
                    e.elem[e.prop] = e.now;
                }
            }
        }
    };
    at.propHooks.scrollTop = at.propHooks.scrollLeft = {
        set: function(e) {
            if (e.elem.nodeType && e.elem.parentNode) {
                e.elem[e.prop] = e.now;
            }
        }
    };
    k.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
    };
    k.fx = at.prototype.init;
    k.fx.step = {};
    var ut, ft, lt = /^(?:toggle|show|hide)$/, ct = /queueHooks$/;
    function dt() {
        if (ft) {
            if (E.hidden === false && C.requestAnimationFrame) {
                C.requestAnimationFrame(dt);
            } else {
                C.setTimeout(dt, k.fx.interval);
            }
            k.fx.tick();
        }
    }
    function pt() {
        C.setTimeout(function() {
            ut = undefined;
        });
        return ut = Date.now();
    }
    function ht(e, t) {
        var n, r = 0, i = {
            height: e
        };
        t = t ? 1 : 0;
        for (;r < 4; r += 2 - t) {
            n = se[r];
            i["margin" + n] = i["padding" + n] = e;
        }
        if (t) {
            i.opacity = i.width = e;
        }
        return i;
    }
    function gt(e, t, n) {
        var r, i = (vt.tweeners[t] || []).concat(vt.tweeners["*"]), o = 0, s = i.length;
        for (;o < s; o++) {
            if (r = i[o].call(n, t, e)) {
                return r;
            }
        }
    }
    function yt(e, t, n) {
        var r, i, o, s, a, u, f, l, c = "width" in t || "height" in t, d = this, p = {}, h = e.style, g = e.nodeType && le(e), y = K.get(e, "fxshow");
        if (!n.queue) {
            s = k._queueHooks(e, "fx");
            if (s.unqueued == null) {
                s.unqueued = 0;
                a = s.empty.fire;
                s.empty.fire = function() {
                    if (!s.unqueued) {
                        a();
                    }
                };
            }
            s.unqueued++;
            d.always(function() {
                d.always(function() {
                    s.unqueued--;
                    if (!k.queue(e, "fx").length) {
                        s.empty.fire();
                    }
                });
            });
        }
        for (r in t) {
            i = t[r];
            if (lt.test(i)) {
                delete t[r];
                o = o || i === "toggle";
                if (i === (g ? "hide" : "show")) {
                    if (i === "show" && y && y[r] !== undefined) {
                        g = true;
                    } else {
                        continue;
                    }
                }
                p[r] = y && y[r] || k.style(e, r);
            }
        }
        u = !k.isEmptyObject(t);
        if (!u && k.isEmptyObject(p)) {
            return;
        }
        if (c && e.nodeType === 1) {
            n.overflow = [ h.overflow, h.overflowX, h.overflowY ];
            f = y && y.display;
            if (f == null) {
                f = K.get(e, "display");
            }
            l = k.css(e, "display");
            if (l === "none") {
                if (f) {
                    l = f;
                } else {
                    ge([ e ], true);
                    f = e.style.display || f;
                    l = k.css(e, "display");
                    ge([ e ]);
                }
            }
            if (l === "inline" || l === "inline-block" && f != null) {
                if (k.css(e, "float") === "none") {
                    if (!u) {
                        d.done(function() {
                            h.display = f;
                        });
                        if (f == null) {
                            l = h.display;
                            f = l === "none" ? "" : l;
                        }
                    }
                    h.display = "inline-block";
                }
            }
        }
        if (n.overflow) {
            h.overflow = "hidden";
            d.always(function() {
                h.overflow = n.overflow[0];
                h.overflowX = n.overflow[1];
                h.overflowY = n.overflow[2];
            });
        }
        u = false;
        for (r in p) {
            if (!u) {
                if (y) {
                    if ("hidden" in y) {
                        g = y.hidden;
                    }
                } else {
                    y = K.access(e, "fxshow", {
                        display: f
                    });
                }
                if (o) {
                    y.hidden = !g;
                }
                if (g) {
                    ge([ e ], true);
                }
                d.done(function() {
                    if (!g) {
                        ge([ e ]);
                    }
                    K.remove(e, "fxshow");
                    for (r in p) {
                        k.style(e, r, p[r]);
                    }
                });
            }
            u = gt(g ? y[r] : 0, r, d);
            if (!(r in y)) {
                y[r] = u.start;
                if (g) {
                    u.end = u.start;
                    u.start = 0;
                }
            }
        }
    }
    function mt(e, t) {
        var n, r, i, o, s;
        for (n in e) {
            r = Y(n);
            i = t[r];
            o = e[n];
            if (Array.isArray(o)) {
                i = o[1];
                o = e[n] = o[0];
            }
            if (n !== r) {
                e[r] = o;
                delete e[n];
            }
            s = k.cssHooks[r];
            if (s && "expand" in s) {
                o = s.expand(o);
                delete e[r];
                for (n in o) {
                    if (!(n in e)) {
                        e[n] = o[n];
                        t[n] = i;
                    }
                }
            } else {
                t[r] = i;
            }
        }
    }
    function vt(s, e, t) {
        var n, a, r = 0, i = vt.prefilters.length, u = k.Deferred().always(function() {
            delete o.elem;
        }), o = function() {
            if (a) {
                return false;
            }
            var e = ut || pt(), t = Math.max(0, f.startTime + f.duration - e), n = t / f.duration || 0, r = 1 - n, i = 0, o = f.tweens.length;
            for (;i < o; i++) {
                f.tweens[i].run(r);
            }
            u.notifyWith(s, [ f, r, t ]);
            if (r < 1 && o) {
                return t;
            }
            if (!o) {
                u.notifyWith(s, [ f, 1, 0 ]);
            }
            u.resolveWith(s, [ f ]);
            return false;
        }, f = u.promise({
            elem: s,
            props: k.extend({}, e),
            opts: k.extend(true, {
                specialEasing: {},
                easing: k.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: ut || pt(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = k.Tween(s, f.opts, e, t, f.opts.specialEasing[e] || f.opts.easing);
                f.tweens.push(n);
                return n;
            },
            stop: function(e) {
                var t = 0, n = e ? f.tweens.length : 0;
                if (a) {
                    return this;
                }
                a = true;
                for (;t < n; t++) {
                    f.tweens[t].run(1);
                }
                if (e) {
                    u.notifyWith(s, [ f, 1, 0 ]);
                    u.resolveWith(s, [ f, e ]);
                } else {
                    u.rejectWith(s, [ f, e ]);
                }
                return this;
            }
        }), l = f.props;
        mt(l, f.opts.specialEasing);
        for (;r < i; r++) {
            n = vt.prefilters[r].call(f, s, l, f.opts);
            if (n) {
                if (v(n.stop)) {
                    k._queueHooks(f.elem, f.opts.queue).stop = n.stop.bind(n);
                }
                return n;
            }
        }
        k.map(l, gt, f);
        if (v(f.opts.start)) {
            f.opts.start.call(s, f);
        }
        f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always);
        k.fx.timer(k.extend(o, {
            elem: s,
            anim: f,
            queue: f.opts.queue
        }));
        return f;
    }
    k.Animation = k.extend(vt, {
        tweeners: {
            "*": [ function(e, t) {
                var n = this.createTween(e, t);
                de(n.elem, e, oe.exec(t), n);
                return n;
            } ]
        },
        tweener: function(e, t) {
            if (v(e)) {
                t = e;
                e = [ "*" ];
            } else {
                e = e.match(M);
            }
            var n, r = 0, i = e.length;
            for (;r < i; r++) {
                n = e[r];
                vt.tweeners[n] = vt.tweeners[n] || [];
                vt.tweeners[n].unshift(t);
            }
        },
        prefilters: [ yt ],
        prefilter: function(e, t) {
            if (t) {
                vt.prefilters.unshift(e);
            } else {
                vt.prefilters.push(e);
            }
        }
    });
    k.speed = function(e, t, n) {
        var r = e && typeof e === "object" ? k.extend({}, e) : {
            complete: n || !n && t || v(e) && e,
            duration: e,
            easing: n && t || t && !v(t) && t
        };
        if (k.fx.off) {
            r.duration = 0;
        } else {
            if (typeof r.duration !== "number") {
                if (r.duration in k.fx.speeds) {
                    r.duration = k.fx.speeds[r.duration];
                } else {
                    r.duration = k.fx.speeds._default;
                }
            }
        }
        if (r.queue == null || r.queue === true) {
            r.queue = "fx";
        }
        r.old = r.complete;
        r.complete = function() {
            if (v(r.old)) {
                r.old.call(this);
            }
            if (r.queue) {
                k.dequeue(this, r.queue);
            }
        };
        return r;
    };
    k.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(le).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(t, e, n, r) {
            var i = k.isEmptyObject(t), o = k.speed(e, n, r), s = function() {
                var e = vt(this, k.extend({}, t), o);
                if (i || K.get(this, "finish")) {
                    e.stop(true);
                }
            };
            s.finish = s;
            return i || o.queue === false ? this.each(s) : this.queue(o.queue, s);
        },
        stop: function(i, e, o) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop;
                t(o);
            };
            if (typeof i !== "string") {
                o = e;
                e = i;
                i = undefined;
            }
            if (e && i !== false) {
                this.queue(i || "fx", []);
            }
            return this.each(function() {
                var e = true, t = i != null && i + "queueHooks", n = k.timers, r = K.get(this);
                if (t) {
                    if (r[t] && r[t].stop) {
                        s(r[t]);
                    }
                } else {
                    for (t in r) {
                        if (r[t] && r[t].stop && ct.test(t)) {
                            s(r[t]);
                        }
                    }
                }
                for (t = n.length; t--; ) {
                    if (n[t].elem === this && (i == null || n[t].queue === i)) {
                        n[t].anim.stop(o);
                        e = false;
                        n.splice(t, 1);
                    }
                }
                if (e || !o) {
                    k.dequeue(this, i);
                }
            });
        },
        finish: function(s) {
            if (s !== false) {
                s = s || "fx";
            }
            return this.each(function() {
                var e, t = K.get(this), n = t[s + "queue"], r = t[s + "queueHooks"], i = k.timers, o = n ? n.length : 0;
                t.finish = true;
                k.queue(this, s, []);
                if (r && r.stop) {
                    r.stop.call(this, true);
                }
                for (e = i.length; e--; ) {
                    if (i[e].elem === this && i[e].queue === s) {
                        i[e].anim.stop(true);
                        i.splice(e, 1);
                    }
                }
                for (e = 0; e < o; e++) {
                    if (n[e] && n[e].finish) {
                        n[e].finish.call(this);
                    }
                }
                delete t.finish;
            });
        }
    });
    k.each([ "toggle", "show", "hide" ], function(e, r) {
        var i = k.fn[r];
        k.fn[r] = function(e, t, n) {
            return e == null || typeof e === "boolean" ? i.apply(this, arguments) : this.animate(ht(r, true), e, t, n);
        };
    });
    k.each({
        slideDown: ht("show"),
        slideUp: ht("hide"),
        slideToggle: ht("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        k.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n);
        };
    });
    k.timers = [];
    k.fx.tick = function() {
        var e, t = 0, n = k.timers;
        ut = Date.now();
        for (;t < n.length; t++) {
            e = n[t];
            if (!e() && n[t] === e) {
                n.splice(t--, 1);
            }
        }
        if (!n.length) {
            k.fx.stop();
        }
        ut = undefined;
    };
    k.fx.timer = function(e) {
        k.timers.push(e);
        k.fx.start();
    };
    k.fx.interval = 13;
    k.fx.start = function() {
        if (ft) {
            return;
        }
        ft = true;
        dt();
    };
    k.fx.stop = function() {
        ft = null;
    };
    k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    k.fn.delay = function(r, e) {
        r = k.fx ? k.fx.speeds[r] || r : r;
        e = e || "fx";
        return this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n);
            };
        });
    };
    (function() {
        var e = E.createElement("input"), t = E.createElement("select"), n = t.appendChild(E.createElement("option"));
        e.type = "checkbox";
        m.checkOn = e.value !== "";
        m.optSelected = n.selected;
        e = E.createElement("input");
        e.value = "t";
        e.type = "radio";
        m.radioValue = e.value === "t";
    })();
    var xt, bt = k.expr.attrHandle;
    k.fn.extend({
        attr: function(e, t) {
            return U(this, k.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e);
            });
        }
    });
    k.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (o === 3 || o === 8 || o === 2) {
                return;
            }
            if (typeof e.getAttribute === "undefined") {
                return k.prop(e, t, n);
            }
            if (o !== 1 || !k.isXMLDoc(e)) {
                i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? xt : undefined);
            }
            if (n !== undefined) {
                if (n === null) {
                    k.removeAttr(e, t);
                    return;
                }
                if (i && "set" in i && (r = i.set(e, n, t)) !== undefined) {
                    return r;
                }
                e.setAttribute(t, n + "");
                return n;
            }
            if (i && "get" in i && (r = i.get(e, t)) !== null) {
                return r;
            }
            r = k.find.attr(e, t);
            return r == null ? undefined : r;
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!m.radioValue && t === "radio" && A(e, "input")) {
                        var n = e.value;
                        e.setAttribute("type", t);
                        if (n) {
                            e.value = n;
                        }
                        return t;
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(M);
            if (i && e.nodeType === 1) {
                while (n = i[r++]) {
                    e.removeAttribute(n);
                }
            }
        }
    });
    xt = {
        set: function(e, t, n) {
            if (t === false) {
                k.removeAttr(e, n);
            } else {
                e.setAttribute(n, n);
            }
            return n;
        }
    };
    k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = bt[t] || k.find.attr;
        bt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            if (!n) {
                i = bt[o];
                bt[o] = r;
                r = s(e, t, n) != null ? o : null;
                bt[o] = i;
            }
            return r;
        };
    });
    var wt = /^(?:input|select|textarea|button)$/i, Tt = /^(?:a|area)$/i;
    k.fn.extend({
        prop: function(e, t) {
            return U(this, k.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k.propFix[e] || e];
            });
        }
    });
    k.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (o === 3 || o === 8 || o === 2) {
                return;
            }
            if (o !== 1 || !k.isXMLDoc(e)) {
                t = k.propFix[t] || t;
                i = k.propHooks[t];
            }
            if (n !== undefined) {
                if (i && "set" in i && (r = i.set(e, n, t)) !== undefined) {
                    return r;
                }
                return e[t] = n;
            }
            if (i && "get" in i && (r = i.get(e, t)) !== null) {
                return r;
            }
            return e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = k.find.attr(e, "tabindex");
                    if (t) {
                        return parseInt(t, 10);
                    }
                    if (wt.test(e.nodeName) || Tt.test(e.nodeName) && e.href) {
                        return 0;
                    }
                    return -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    });
    if (!m.optSelected) {
        k.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                if (t && t.parentNode) {
                    t.parentNode.selectedIndex;
                }
                return null;
            },
            set: function(e) {
                var t = e.parentNode;
                if (t) {
                    t.selectedIndex;
                    if (t.parentNode) {
                        t.parentNode.selectedIndex;
                    }
                }
            }
        };
    }
    k.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        k.propFix[this.toLowerCase()] = this;
    });
    function Ct(e) {
        var t = e.match(M) || [];
        return t.join(" ");
    }
    function Et(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }
    function kt(e) {
        if (Array.isArray(e)) {
            return e;
        }
        if (typeof e === "string") {
            return e.match(M) || [];
        }
        return [];
    }
    k.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, s, a, u = 0;
            if (v(t)) {
                return this.each(function(e) {
                    k(this).addClass(t.call(this, e, Et(this)));
                });
            }
            e = kt(t);
            if (e.length) {
                while (n = this[u++]) {
                    i = Et(n);
                    r = n.nodeType === 1 && " " + Ct(i) + " ";
                    if (r) {
                        s = 0;
                        while (o = e[s++]) {
                            if (r.indexOf(" " + o + " ") < 0) {
                                r += o + " ";
                            }
                        }
                        a = Ct(r);
                        if (i !== a) {
                            n.setAttribute("class", a);
                        }
                    }
                }
            }
            return this;
        },
        removeClass: function(t) {
            var e, n, r, i, o, s, a, u = 0;
            if (v(t)) {
                return this.each(function(e) {
                    k(this).removeClass(t.call(this, e, Et(this)));
                });
            }
            if (!arguments.length) {
                return this.attr("class", "");
            }
            e = kt(t);
            if (e.length) {
                while (n = this[u++]) {
                    i = Et(n);
                    r = n.nodeType === 1 && " " + Ct(i) + " ";
                    if (r) {
                        s = 0;
                        while (o = e[s++]) {
                            while (r.indexOf(" " + o + " ") > -1) {
                                r = r.replace(" " + o + " ", " ");
                            }
                        }
                        a = Ct(r);
                        if (i !== a) {
                            n.setAttribute("class", a);
                        }
                    }
                }
            }
            return this;
        },
        toggleClass: function(i, t) {
            var o = typeof i, s = o === "string" || Array.isArray(i);
            if (typeof t === "boolean" && s) {
                return t ? this.addClass(i) : this.removeClass(i);
            }
            if (v(i)) {
                return this.each(function(e) {
                    k(this).toggleClass(i.call(this, e, Et(this), t), t);
                });
            }
            return this.each(function() {
                var e, t, n, r;
                if (s) {
                    t = 0;
                    n = k(this);
                    r = kt(i);
                    while (e = r[t++]) {
                        if (n.hasClass(e)) {
                            n.removeClass(e);
                        } else {
                            n.addClass(e);
                        }
                    }
                } else if (i === undefined || o === "boolean") {
                    e = Et(this);
                    if (e) {
                        K.set(this, "__className__", e);
                    }
                    if (this.setAttribute) {
                        this.setAttribute("class", e || i === false ? "" : K.get(this, "__className__") || "");
                    }
                }
            });
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++]) {
                if (n.nodeType === 1 && (" " + Ct(Et(n)) + " ").indexOf(t) > -1) {
                    return true;
                }
            }
            return false;
        }
    });
    var St = /\r/g;
    k.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            if (!arguments.length) {
                if (t) {
                    r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()];
                    if (r && "get" in r && (e = r.get(t, "value")) !== undefined) {
                        return e;
                    }
                    e = t.value;
                    if (typeof e === "string") {
                        return e.replace(St, "");
                    }
                    return e == null ? "" : e;
                }
                return;
            }
            i = v(n);
            return this.each(function(e) {
                var t;
                if (this.nodeType !== 1) {
                    return;
                }
                if (i) {
                    t = n.call(this, e, k(this).val());
                } else {
                    t = n;
                }
                if (t == null) {
                    t = "";
                } else if (typeof t === "number") {
                    t += "";
                } else if (Array.isArray(t)) {
                    t = k.map(t, function(e) {
                        return e == null ? "" : e + "";
                    });
                }
                r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()];
                if (!r || !("set" in r) || r.set(this, t, "value") === undefined) {
                    this.value = t;
                }
            });
        }
    });
    k.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = k.find.attr(e, "value");
                    return t != null ? t : Ct(k.text(e));
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, s = e.type === "select-one", a = s ? null : [], u = s ? o + 1 : i.length;
                    if (o < 0) {
                        r = u;
                    } else {
                        r = s ? o : 0;
                    }
                    for (;r < u; r++) {
                        n = i[r];
                        if ((n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            t = k(n).val();
                            if (s) {
                                return t;
                            }
                            a.push(t);
                        }
                    }
                    return a;
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = k.makeArray(t), s = i.length;
                    while (s--) {
                        r = i[s];
                        if (r.selected = k.inArray(k.valHooks.option.get(r), o) > -1) {
                            n = true;
                        }
                    }
                    if (!n) {
                        e.selectedIndex = -1;
                    }
                    return o;
                }
            }
        }
    });
    k.each([ "radio", "checkbox" ], function() {
        k.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) {
                    return e.checked = k.inArray(k(e).val(), t) > -1;
                }
            }
        };
        if (!m.checkOn) {
            k.valHooks[this].get = function(e) {
                return e.getAttribute("value") === null ? "on" : e.value;
            };
        }
    });
    m.focusin = "onfocusin" in C;
    var Nt = /^(?:focusinfocus|focusoutblur)$/, At = function(e) {
        e.stopPropagation();
    };
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i, o, s, a, u, f, l, c, d = [ n || E ], p = y.call(e, "type") ? e.type : e, h = y.call(e, "namespace") ? e.namespace.split(".") : [];
            o = c = s = n = n || E;
            if (n.nodeType === 3 || n.nodeType === 8) {
                return;
            }
            if (Nt.test(p + k.event.triggered)) {
                return;
            }
            if (p.indexOf(".") > -1) {
                h = p.split(".");
                p = h.shift();
                h.sort();
            }
            u = p.indexOf(":") < 0 && "on" + p;
            e = e[k.expando] ? e : new k.Event(p, typeof e === "object" && e);
            e.isTrigger = r ? 2 : 3;
            e.namespace = h.join(".");
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            e.result = undefined;
            if (!e.target) {
                e.target = n;
            }
            t = t == null ? [ e ] : k.makeArray(t, [ e ]);
            l = k.event.special[p] || {};
            if (!r && l.trigger && l.trigger.apply(n, t) === false) {
                return;
            }
            if (!r && !l.noBubble && !x(n)) {
                a = l.delegateType || p;
                if (!Nt.test(a + p)) {
                    o = o.parentNode;
                }
                for (;o; o = o.parentNode) {
                    d.push(o);
                    s = o;
                }
                if (s === (n.ownerDocument || E)) {
                    d.push(s.defaultView || s.parentWindow || C);
                }
            }
            i = 0;
            while ((o = d[i++]) && !e.isPropagationStopped()) {
                c = o;
                e.type = i > 1 ? a : l.bindType || p;
                f = (K.get(o, "events") || {})[e.type] && K.get(o, "handle");
                if (f) {
                    f.apply(o, t);
                }
                f = u && o[u];
                if (f && f.apply && Q(o)) {
                    e.result = f.apply(o, t);
                    if (e.result === false) {
                        e.preventDefault();
                    }
                }
            }
            e.type = p;
            if (!r && !e.isDefaultPrevented()) {
                if ((!l._default || l._default.apply(d.pop(), t) === false) && Q(n)) {
                    if (u && v(n[p]) && !x(n)) {
                        s = n[u];
                        if (s) {
                            n[u] = null;
                        }
                        k.event.triggered = p;
                        if (e.isPropagationStopped()) {
                            c.addEventListener(p, At);
                        }
                        n[p]();
                        if (e.isPropagationStopped()) {
                            c.removeEventListener(p, At);
                        }
                        k.event.triggered = undefined;
                        if (s) {
                            n[u] = s;
                        }
                    }
                }
            }
            return e.result;
        },
        simulate: function(e, t, n) {
            var r = k.extend(new k.Event(), n, {
                type: e,
                isSimulated: true
            });
            k.event.trigger(r, null, t);
        }
    });
    k.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                k.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) {
                return k.event.trigger(e, t, n, true);
            }
        }
    });
    if (!m.focusin) {
        k.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, r) {
            var i = function(e) {
                k.event.simulate(r, e.target, k.event.fix(e));
            };
            k.event.special[r] = {
                setup: function() {
                    var e = this.ownerDocument || this, t = K.access(e, r);
                    if (!t) {
                        e.addEventListener(n, i, true);
                    }
                    K.access(e, r, (t || 0) + 1);
                },
                teardown: function() {
                    var e = this.ownerDocument || this, t = K.access(e, r) - 1;
                    if (!t) {
                        e.removeEventListener(n, i, true);
                        K.remove(e, r);
                    } else {
                        K.access(e, r, t);
                    }
                }
            };
        });
    }
    var Dt = C.location;
    var jt = Date.now();
    var qt = /\?/;
    k.parseXML = function(e) {
        var t;
        if (!e || typeof e !== "string") {
            return null;
        }
        try {
            t = new C.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
            t = undefined;
        }
        if (!t || t.getElementsByTagName("parsererror").length) {
            k.error("Invalid XML: " + e);
        }
        return t;
    };
    var Lt = /\[\]$/, Ht = /\r?\n/g, Ot = /^(?:submit|button|image|reset|file)$/i, Pt = /^(?:input|select|textarea|keygen)/i;
    function Rt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) {
            k.each(e, function(e, t) {
                if (r || Lt.test(n)) {
                    i(n, t);
                } else {
                    Rt(n + "[" + (typeof t === "object" && t != null ? e : "") + "]", t, r, i);
                }
            });
        } else if (!r && w(e) === "object") {
            for (t in e) {
                Rt(n + "[" + t + "]", e[t], r, i);
            }
        } else {
            i(n, e);
        }
    }
    k.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = v(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(n == null ? "" : n);
        };
        if (e == null) {
            return "";
        }
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) {
            k.each(e, function() {
                i(this.name, this.value);
            });
        } else {
            for (n in e) {
                Rt(n, e[n], t, i);
            }
        }
        return r.join("&");
    };
    k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && Pt.test(this.nodeName) && !Ot.test(e) && (this.checked || !ye.test(e));
            }).map(function(e, t) {
                var n = k(this).val();
                if (n == null) {
                    return null;
                }
                if (Array.isArray(n)) {
                    return k.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Ht, "\r\n")
                        };
                    });
                }
                return {
                    name: t.name,
                    value: n.replace(Ht, "\r\n")
                };
            }).get();
        }
    });
    var Mt = /%20/g, It = /#.*$/, Wt = /([?&])_=[^&]*/, $t = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Bt = /^(?:GET|HEAD)$/, _t = /^\/\//, zt = {}, Ut = {}, Xt = "*/".concat("*"), Vt = E.createElement("a");
    Vt.href = Dt.href;
    function Gt(o) {
        return function(e, t) {
            if (typeof e !== "string") {
                t = e;
                e = "*";
            }
            var n, r = 0, i = e.toLowerCase().match(M) || [];
            if (v(t)) {
                while (n = i[r++]) {
                    if (n[0] === "+") {
                        n = n.slice(1) || "*";
                        (o[n] = o[n] || []).unshift(t);
                    } else {
                        (o[n] = o[n] || []).push(t);
                    }
                }
            }
        };
    }
    function Yt(t, i, o, s) {
        var a = {}, u = t === Ut;
        function f(e) {
            var r;
            a[e] = true;
            k.each(t[e] || [], function(e, t) {
                var n = t(i, o, s);
                if (typeof n === "string" && !u && !a[n]) {
                    i.dataTypes.unshift(n);
                    f(n);
                    return false;
                } else if (u) {
                    return !(r = n);
                }
            });
            return r;
        }
        return f(i.dataTypes[0]) || !a["*"] && f("*");
    }
    function Qt(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t) {
            if (t[n] !== undefined) {
                (i[n] ? e : r || (r = {}))[n] = t[n];
            }
        }
        if (r) {
            k.extend(true, e, r);
        }
        return e;
    }
    function Jt(e, t, n) {
        var r, i, o, s, a = e.contents, u = e.dataTypes;
        while (u[0] === "*") {
            u.shift();
            if (r === undefined) {
                r = e.mimeType || t.getResponseHeader("Content-Type");
            }
        }
        if (r) {
            for (i in a) {
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break;
                }
            }
        }
        if (u[0] in n) {
            o = u[0];
        } else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break;
                }
                if (!s) {
                    s = i;
                }
            }
            o = o || s;
        }
        if (o) {
            if (o !== u[0]) {
                u.unshift(o);
            }
            return n[o];
        }
    }
    function Kt(e, t, n, r) {
        var i, o, s, a, u, f = {}, l = e.dataTypes.slice();
        if (l[1]) {
            for (s in e.converters) {
                f[s.toLowerCase()] = e.converters[s];
            }
        }
        o = l.shift();
        while (o) {
            if (e.responseFields[o]) {
                n[e.responseFields[o]] = t;
            }
            if (!u && r && e.dataFilter) {
                t = e.dataFilter(t, e.dataType);
            }
            u = o;
            o = l.shift();
            if (o) {
                if (o === "*") {
                    o = u;
                } else if (u !== "*" && u !== o) {
                    s = f[u + " " + o] || f["* " + o];
                    if (!s) {
                        for (i in f) {
                            a = i.split(" ");
                            if (a[1] === o) {
                                s = f[u + " " + a[0]] || f["* " + a[0]];
                                if (s) {
                                    if (s === true) {
                                        s = f[i];
                                    } else if (f[i] !== true) {
                                        o = a[0];
                                        l.unshift(a[1]);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    if (s !== true) {
                        if (s && e.throws) {
                            t = s(t);
                        } else {
                            try {
                                t = s(t);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + u + " to " + o
                                };
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: t
        };
    }
    k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Dt.href,
            type: "GET",
            isLocal: Ft.test(Dt.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xt,
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
                "text json": JSON.parse,
                "text xml": k.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Qt(Qt(e, k.ajaxSettings), t) : Qt(k.ajaxSettings, e);
        },
        ajaxPrefilter: Gt(zt),
        ajaxTransport: Gt(Ut),
        ajax: function(e, t) {
            if (typeof e === "object") {
                t = e;
                e = undefined;
            }
            t = t || {};
            var l, c, d, n, p, r, h, g, i, o, y = k.ajaxSetup({}, t), m = y.context || y, v = y.context && (m.nodeType || m.jquery) ? k(m) : k.event, x = k.Deferred(), b = k.Callbacks("once memory"), w = y.statusCode || {}, s = {}, a = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = $t.exec(d)) {
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            }
                        }
                        t = n[e.toLowerCase() + " "];
                    }
                    return t == null ? null : t.join(", ");
                },
                getAllResponseHeaders: function() {
                    return h ? d : null;
                },
                setRequestHeader: function(e, t) {
                    if (h == null) {
                        e = a[e.toLowerCase()] = a[e.toLowerCase()] || e;
                        s[e] = t;
                    }
                    return this;
                },
                overrideMimeType: function(e) {
                    if (h == null) {
                        y.mimeType = e;
                    }
                    return this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) {
                        if (h) {
                            T.always(e[T.status]);
                        } else {
                            for (t in e) {
                                w[t] = [ w[t], e[t] ];
                            }
                        }
                    }
                    return this;
                },
                abort: function(e) {
                    var t = e || u;
                    if (l) {
                        l.abort(t);
                    }
                    f(0, t);
                    return this;
                }
            };
            x.promise(T);
            y.url = ((e || y.url || Dt.href) + "").replace(_t, Dt.protocol + "//");
            y.type = t.method || t.type || y.method || y.type;
            y.dataTypes = (y.dataType || "*").toLowerCase().match(M) || [ "" ];
            if (y.crossDomain == null) {
                r = E.createElement("a");
                try {
                    r.href = y.url;
                    r.href = r.href;
                    y.crossDomain = Vt.protocol + "//" + Vt.host !== r.protocol + "//" + r.host;
                } catch (e) {
                    y.crossDomain = true;
                }
            }
            if (y.data && y.processData && typeof y.data !== "string") {
                y.data = k.param(y.data, y.traditional);
            }
            Yt(zt, y, t, T);
            if (h) {
                return T;
            }
            g = k.event && y.global;
            if (g && k.active++ === 0) {
                k.event.trigger("ajaxStart");
            }
            y.type = y.type.toUpperCase();
            y.hasContent = !Bt.test(y.type);
            c = y.url.replace(It, "");
            if (!y.hasContent) {
                o = y.url.slice(c.length);
                if (y.data && (y.processData || typeof y.data === "string")) {
                    c += (qt.test(c) ? "&" : "?") + y.data;
                    delete y.data;
                }
                if (y.cache === false) {
                    c = c.replace(Wt, "$1");
                    o = (qt.test(c) ? "&" : "?") + "_=" + jt++ + o;
                }
                y.url = c + o;
            } else if (y.data && y.processData && (y.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
                y.data = y.data.replace(Mt, "+");
            }
            if (y.ifModified) {
                if (k.lastModified[c]) {
                    T.setRequestHeader("If-Modified-Since", k.lastModified[c]);
                }
                if (k.etag[c]) {
                    T.setRequestHeader("If-None-Match", k.etag[c]);
                }
            }
            if (y.data && y.hasContent && y.contentType !== false || t.contentType) {
                T.setRequestHeader("Content-Type", y.contentType);
            }
            T.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + (y.dataTypes[0] !== "*" ? ", " + Xt + "; q=0.01" : "") : y.accepts["*"]);
            for (i in y.headers) {
                T.setRequestHeader(i, y.headers[i]);
            }
            if (y.beforeSend && (y.beforeSend.call(m, T, y) === false || h)) {
                return T.abort();
            }
            u = "abort";
            b.add(y.complete);
            T.done(y.success);
            T.fail(y.error);
            l = Yt(Ut, y, t, T);
            if (!l) {
                f(-1, "No Transport");
            } else {
                T.readyState = 1;
                if (g) {
                    v.trigger("ajaxSend", [ T, y ]);
                }
                if (h) {
                    return T;
                }
                if (y.async && y.timeout > 0) {
                    p = C.setTimeout(function() {
                        T.abort("timeout");
                    }, y.timeout);
                }
                try {
                    h = false;
                    l.send(s, f);
                } catch (e) {
                    if (h) {
                        throw e;
                    }
                    f(-1, e);
                }
            }
            function f(e, t, n, r) {
                var i, o, s, a, u, f = t;
                if (h) {
                    return;
                }
                h = true;
                if (p) {
                    C.clearTimeout(p);
                }
                l = undefined;
                d = r || "";
                T.readyState = e > 0 ? 4 : 0;
                i = e >= 200 && e < 300 || e === 304;
                if (n) {
                    a = Jt(y, T, n);
                }
                a = Kt(y, a, T, i);
                if (i) {
                    if (y.ifModified) {
                        u = T.getResponseHeader("Last-Modified");
                        if (u) {
                            k.lastModified[c] = u;
                        }
                        u = T.getResponseHeader("etag");
                        if (u) {
                            k.etag[c] = u;
                        }
                    }
                    if (e === 204 || y.type === "HEAD") {
                        f = "nocontent";
                    } else if (e === 304) {
                        f = "notmodified";
                    } else {
                        f = a.state;
                        o = a.data;
                        s = a.error;
                        i = !s;
                    }
                } else {
                    s = f;
                    if (e || !f) {
                        f = "error";
                        if (e < 0) {
                            e = 0;
                        }
                    }
                }
                T.status = e;
                T.statusText = (t || f) + "";
                if (i) {
                    x.resolveWith(m, [ o, f, T ]);
                } else {
                    x.rejectWith(m, [ T, f, s ]);
                }
                T.statusCode(w);
                w = undefined;
                if (g) {
                    v.trigger(i ? "ajaxSuccess" : "ajaxError", [ T, y, i ? o : s ]);
                }
                b.fireWith(m, [ T, f ]);
                if (g) {
                    v.trigger("ajaxComplete", [ T, y ]);
                    if (!--k.active) {
                        k.event.trigger("ajaxStop");
                    }
                }
            }
            return T;
        },
        getJSON: function(e, t, n) {
            return k.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return k.get(e, undefined, t, "script");
        }
    });
    k.each([ "get", "post" ], function(e, i) {
        k[i] = function(e, t, n, r) {
            if (v(t)) {
                r = r || n;
                n = t;
                t = undefined;
            }
            return k.ajax(k.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, k.isPlainObject(e) && e));
        };
    });
    k._evalUrl = function(e, t) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                k.globalEval(e, t);
            }
        });
    };
    k.fn.extend({
        wrapAll: function(e) {
            var t;
            if (this[0]) {
                if (v(e)) {
                    e = e.call(this[0]);
                }
                t = k(e, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    t.insertBefore(this[0]);
                }
                t.map(function() {
                    var e = this;
                    while (e.firstElementChild) {
                        e = e.firstElementChild;
                    }
                    return e;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(n) {
            if (v(n)) {
                return this.each(function(e) {
                    k(this).wrapInner(n.call(this, e));
                });
            }
            return this.each(function() {
                var e = k(this), t = e.contents();
                if (t.length) {
                    t.wrapAll(n);
                } else {
                    e.append(n);
                }
            });
        },
        wrap: function(t) {
            var n = v(t);
            return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : t);
            });
        },
        unwrap: function(e) {
            this.parent(e).not("body").each(function() {
                k(this).replaceWith(this.childNodes);
            });
            return this;
        }
    });
    k.expr.pseudos.hidden = function(e) {
        return !k.expr.pseudos.visible(e);
    };
    k.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    };
    k.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest();
        } catch (e) {}
    };
    var Zt = {
        0: 200,
        1223: 204
    }, en = k.ajaxSettings.xhr();
    m.cors = !!en && "withCredentials" in en;
    m.ajax = en = !!en;
    k.ajaxTransport(function(i) {
        var o, s;
        if (m.cors || en && !i.crossDomain) {
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    r.open(i.type, i.url, i.async, i.username, i.password);
                    if (i.xhrFields) {
                        for (n in i.xhrFields) {
                            r[n] = i.xhrFields[n];
                        }
                    }
                    if (i.mimeType && r.overrideMimeType) {
                        r.overrideMimeType(i.mimeType);
                    }
                    if (!i.crossDomain && !e["X-Requested-With"]) {
                        e["X-Requested-With"] = "XMLHttpRequest";
                    }
                    for (n in e) {
                        r.setRequestHeader(n, e[n]);
                    }
                    o = function(e) {
                        return function() {
                            if (o) {
                                o = s = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null;
                                if (e === "abort") {
                                    r.abort();
                                } else if (e === "error") {
                                    if (typeof r.status !== "number") {
                                        t(0, "error");
                                    } else {
                                        t(r.status, r.statusText);
                                    }
                                } else {
                                    t(Zt[r.status] || r.status, r.statusText, (r.responseType || "text") !== "text" || typeof r.responseText !== "string" ? {
                                        binary: r.response
                                    } : {
                                        text: r.responseText
                                    }, r.getAllResponseHeaders());
                                }
                            }
                        };
                    };
                    r.onload = o();
                    s = r.onerror = r.ontimeout = o("error");
                    if (r.onabort !== undefined) {
                        r.onabort = s;
                    } else {
                        r.onreadystatechange = function() {
                            if (r.readyState === 4) {
                                C.setTimeout(function() {
                                    if (o) {
                                        s();
                                    }
                                });
                            }
                        };
                    }
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null);
                    } catch (e) {
                        if (o) {
                            throw e;
                        }
                    }
                },
                abort: function() {
                    if (o) {
                        o();
                    }
                }
            };
        }
    });
    k.ajaxPrefilter(function(e) {
        if (e.crossDomain) {
            e.contents.script = false;
        }
    });
    k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                k.globalEval(e);
                return e;
            }
        }
    });
    k.ajaxPrefilter("script", function(e) {
        if (e.cache === undefined) {
            e.cache = false;
        }
        if (e.crossDomain) {
            e.type = "GET";
        }
    });
    k.ajaxTransport("script", function(n) {
        if (n.crossDomain || n.scriptAttrs) {
            var r, i;
            return {
                send: function(e, t) {
                    r = k("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove();
                        i = null;
                        if (e) {
                            t(e.type === "error" ? 404 : 200, e.type);
                        }
                    });
                    E.head.appendChild(r[0]);
                },
                abort: function() {
                    if (i) {
                        i();
                    }
                }
            };
        }
    });
    var tn = [], nn = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = tn.pop() || k.expando + "_" + jt++;
            this[e] = true;
            return e;
        }
    });
    k.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, s = e.jsonp !== false && (nn.test(e.url) ? "url" : typeof e.data === "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && nn.test(e.data) && "data");
        if (s || e.dataTypes[0] === "jsonp") {
            r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback;
            if (s) {
                e[s] = e[s].replace(nn, "$1" + r);
            } else if (e.jsonp !== false) {
                e.url += (qt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r;
            }
            e.converters["script json"] = function() {
                if (!o) {
                    k.error(r + " was not called");
                }
                return o[0];
            };
            e.dataTypes[0] = "json";
            i = C[r];
            C[r] = function() {
                o = arguments;
            };
            n.always(function() {
                if (i === undefined) {
                    k(C).removeProp(r);
                } else {
                    C[r] = i;
                }
                if (e[r]) {
                    e.jsonpCallback = t.jsonpCallback;
                    tn.push(r);
                }
                if (o && v(i)) {
                    i(o[0]);
                }
                o = i = undefined;
            });
            return "script";
        }
    });
    m.createHTMLDocument = function() {
        var e = E.implementation.createHTMLDocument("").body;
        e.innerHTML = "<form></form><form></form>";
        return e.childNodes.length === 2;
    }();
    k.parseHTML = function(e, t, n) {
        if (typeof e !== "string") {
            return [];
        }
        if (typeof t === "boolean") {
            n = t;
            t = false;
        }
        var r, i, o;
        if (!t) {
            if (m.createHTMLDocument) {
                t = E.implementation.createHTMLDocument("");
                r = t.createElement("base");
                r.href = E.location.href;
                t.head.appendChild(r);
            } else {
                t = E;
            }
        }
        i = D.exec(e);
        o = !n && [];
        if (i) {
            return [ t.createElement(i[1]) ];
        }
        i = Ce([ e ], t, o);
        if (o && o.length) {
            k(o).remove();
        }
        return k.merge([], i.childNodes);
    };
    k.fn.load = function(e, t, n) {
        var r, i, o, s = this, a = e.indexOf(" ");
        if (a > -1) {
            r = Ct(e.slice(a));
            e = e.slice(0, a);
        }
        if (v(t)) {
            n = t;
            t = undefined;
        } else if (t && typeof t === "object") {
            i = "POST";
        }
        if (s.length > 0) {
            k.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments;
                s.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
            }).always(n && function(e, t) {
                s.each(function() {
                    n.apply(this, o || [ e.responseText, t, e ]);
                });
            });
        }
        return this;
    };
    k.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        k.fn[t] = function(e) {
            return this.on(t, e);
        };
    });
    k.expr.pseudos.animated = function(t) {
        return k.grep(k.timers, function(e) {
            return t === e.elem;
        }).length;
    };
    k.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, f, l = k.css(e, "position"), c = k(e), d = {};
            if (l === "static") {
                e.style.position = "relative";
            }
            a = c.offset();
            o = k.css(e, "top");
            u = k.css(e, "left");
            f = (l === "absolute" || l === "fixed") && (o + u).indexOf("auto") > -1;
            if (f) {
                r = c.position();
                s = r.top;
                i = r.left;
            } else {
                s = parseFloat(o) || 0;
                i = parseFloat(u) || 0;
            }
            if (v(t)) {
                t = t.call(e, n, k.extend({}, a));
            }
            if (t.top != null) {
                d.top = t.top - a.top + s;
            }
            if (t.left != null) {
                d.left = t.left - a.left + i;
            }
            if ("using" in t) {
                t.using.call(e, d);
            } else {
                c.css(d);
            }
        }
    };
    k.fn.extend({
        offset: function(t) {
            if (arguments.length) {
                return t === undefined ? this : this.each(function(e) {
                    k.offset.setOffset(this, t, e);
                });
            }
            var e, n, r = this[0];
            if (!r) {
                return;
            }
            if (!r.getClientRects().length) {
                return {
                    top: 0,
                    left: 0
                };
            }
            e = r.getBoundingClientRect();
            n = r.ownerDocument.defaultView;
            return {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            };
        },
        position: function() {
            if (!this[0]) {
                return;
            }
            var e, t, n, r = this[0], i = {
                top: 0,
                left: 0
            };
            if (k.css(r, "position") === "fixed") {
                t = r.getBoundingClientRect();
            } else {
                t = this.offset();
                n = r.ownerDocument;
                e = r.offsetParent || n.documentElement;
                while (e && (e === n.body || e === n.documentElement) && k.css(e, "position") === "static") {
                    e = e.parentNode;
                }
                if (e && e !== r && e.nodeType === 1) {
                    i = k(e).offset();
                    i.top += k.css(e, "borderTopWidth", true);
                    i.left += k.css(e, "borderLeftWidth", true);
                }
            }
            return {
                top: t.top - i.top - k.css(r, "marginTop", true),
                left: t.left - i.left - k.css(r, "marginLeft", true)
            };
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && k.css(e, "position") === "static") {
                    e = e.offsetParent;
                }
                return e || ae;
            });
        }
    });
    k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function(e) {
            return U(this, function(e, t, n) {
                var r;
                if (x(e)) {
                    r = e;
                } else if (e.nodeType === 9) {
                    r = e.defaultView;
                }
                if (n === undefined) {
                    return r ? r[i] : e[t];
                }
                if (r) {
                    r.scrollTo(!o ? n : r.pageXOffset, o ? n : r.pageYOffset);
                } else {
                    e[t] = n;
                }
            }, t, e, arguments.length);
        };
    });
    k.each([ "top", "left" ], function(e, n) {
        k.cssHooks[n] = Ge(m.pixelPosition, function(e, t) {
            if (t) {
                t = Ve(e, n);
                return ze.test(t) ? k(e).position()[n] + "px" : t;
            }
        });
    });
    k.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        k.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(r, o) {
            k.fn[o] = function(e, t) {
                var n = arguments.length && (r || typeof e !== "boolean"), i = r || (e === true || t === true ? "margin" : "border");
                return U(this, function(e, t, n) {
                    var r;
                    if (x(e)) {
                        return o.indexOf("outer") === 0 ? e["inner" + s] : e.document.documentElement["client" + s];
                    }
                    if (e.nodeType === 9) {
                        r = e.documentElement;
                        return Math.max(e.body["scroll" + s], r["scroll" + s], e.body["offset" + s], r["offset" + s], r["client" + s]);
                    }
                    return n === undefined ? k.css(e, t, i) : k.style(e, t, n, i);
                }, a, n ? e : undefined, n);
            };
        });
    });
    k.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(e, n) {
        k.fn[n] = function(e, t) {
            return arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n);
        };
    });
    k.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    });
    k.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    });
    k.proxy = function(e, t) {
        var n, r, i;
        if (typeof t === "string") {
            n = e[t];
            t = e;
            e = n;
        }
        if (!v(e)) {
            return undefined;
        }
        r = a.call(arguments, 2);
        i = function() {
            return e.apply(t || this, r.concat(a.call(arguments)));
        };
        i.guid = e.guid = e.guid || k.guid++;
        return i;
    };
    k.holdReady = function(e) {
        if (e) {
            k.readyWait++;
        } else {
            k.ready(true);
        }
    };
    k.isArray = Array.isArray;
    k.parseJSON = JSON.parse;
    k.nodeName = A;
    k.isFunction = v;
    k.isWindow = x;
    k.camelCase = Y;
    k.type = w;
    k.now = Date.now;
    k.isNumeric = function(e) {
        var t = k.type(e);
        return (t === "number" || t === "string") && !isNaN(e - parseFloat(e));
    };
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
            return k;
        });
    }
    var rn = C.jQuery, on = C.$;
    k.noConflict = function(e) {
        if (C.$ === k) {
            C.$ = on;
        }
        if (e && C.jQuery === k) {
            C.jQuery = rn;
        }
        return k;
    };
    if (!e) {
        C.jQuery = C.$ = k;
    }
    return k;
});