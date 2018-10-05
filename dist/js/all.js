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
})(typeof window !== "undefined" ? window : this, function(T, e) {
    "use strict";
    var t = [];
    var k = T.document;
    var i = Object.getPrototypeOf;
    var s = t.slice;
    var g = t.concat;
    var l = t.push;
    var r = t.indexOf;
    var n = {};
    var o = n.toString;
    var m = n.hasOwnProperty;
    var a = m.toString;
    var u = a.call(Object);
    var v = {};
    var y = function e(t) {
        return typeof t === "function" && typeof t.nodeType !== "number";
    };
    var b = function e(t) {
        return t != null && t === t.window;
    };
    var f = {
        type: true,
        src: true,
        noModule: true
    };
    function x(e, t, n) {
        t = t || k;
        var i, r = t.createElement("script");
        r.text = e;
        if (n) {
            for (i in f) {
                if (n[i]) {
                    r[i] = n[i];
                }
            }
        }
        t.head.appendChild(r).parentNode.removeChild(r);
    }
    function w(e) {
        if (e == null) {
            return e + "";
        }
        return typeof e === "object" || typeof e === "function" ? n[o.call(e)] || "object" : typeof e;
    }
    var c = "3.3.1", E = function(e, t) {
        return new E.fn.init(e, t);
    }, d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    E.fn = E.prototype = {
        jquery: c,
        constructor: E,
        length: 0,
        toArray: function() {
            return s.call(this);
        },
        get: function(e) {
            if (e == null) {
                return s.call(this);
            }
            return e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            var t = E.merge(this.constructor(), e);
            t.prevObject = this;
            return t;
        },
        each: function(e) {
            return E.each(this, e);
        },
        map: function(n) {
            return this.pushStack(E.map(this, function(e, t) {
                return n.call(e, t, e);
            }));
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments));
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
        push: l,
        sort: t.sort,
        splice: t.splice
    };
    E.extend = E.fn.extend = function() {
        var e, t, n, i, r, o, a = arguments[0] || {}, s = 1, l = arguments.length, u = false;
        if (typeof a === "boolean") {
            u = a;
            a = arguments[s] || {};
            s++;
        }
        if (typeof a !== "object" && !y(a)) {
            a = {};
        }
        if (s === l) {
            a = this;
            s--;
        }
        for (;s < l; s++) {
            if ((e = arguments[s]) != null) {
                for (t in e) {
                    n = a[t];
                    i = e[t];
                    if (a === i) {
                        continue;
                    }
                    if (u && i && (E.isPlainObject(i) || (r = Array.isArray(i)))) {
                        if (r) {
                            r = false;
                            o = n && Array.isArray(n) ? n : [];
                        } else {
                            o = n && E.isPlainObject(n) ? n : {};
                        }
                        a[t] = E.extend(u, o, i);
                    } else if (i !== undefined) {
                        a[t] = i;
                    }
                }
            }
        }
        return a;
    };
    E.extend({
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
            t = i(e);
            if (!t) {
                return true;
            }
            n = m.call(t, "constructor") && t.constructor;
            return typeof n === "function" && a.call(n) === u;
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) {
                return false;
            }
            return true;
        },
        globalEval: function(e) {
            x(e);
        },
        each: function(e, t) {
            var n, i = 0;
            if (h(e)) {
                n = e.length;
                for (;i < n; i++) {
                    if (t.call(e[i], i, e[i]) === false) {
                        break;
                    }
                }
            } else {
                for (i in e) {
                    if (t.call(e[i], i, e[i]) === false) {
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
                if (h(Object(e))) {
                    E.merge(n, typeof e === "string" ? [ e ] : e);
                } else {
                    l.call(n, e);
                }
            }
            return n;
        },
        inArray: function(e, t, n) {
            return t == null ? -1 : r.call(t, e, n);
        },
        merge: function(e, t) {
            var n = +t.length, i = 0, r = e.length;
            for (;i < n; i++) {
                e[r++] = t[i];
            }
            e.length = r;
            return e;
        },
        grep: function(e, t, n) {
            var i, r = [], o = 0, a = e.length, s = !n;
            for (;o < a; o++) {
                i = !t(e[o], o);
                if (i !== s) {
                    r.push(e[o]);
                }
            }
            return r;
        },
        map: function(e, t, n) {
            var i, r, o = 0, a = [];
            if (h(e)) {
                i = e.length;
                for (;o < i; o++) {
                    r = t(e[o], o, n);
                    if (r != null) {
                        a.push(r);
                    }
                }
            } else {
                for (o in e) {
                    r = t(e[o], o, n);
                    if (r != null) {
                        a.push(r);
                    }
                }
            }
            return g.apply([], a);
        },
        guid: 1,
        support: v
    });
    if (typeof Symbol === "function") {
        E.fn[Symbol.iterator] = t[Symbol.iterator];
    }
    E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
    });
    function h(e) {
        var t = !!e && "length" in e && e.length, n = w(e);
        if (y(e) || b(e)) {
            return false;
        }
        return n === "array" || t === 0 || typeof t === "number" && t > 0 && t - 1 in e;
    }
    var p = function(n) {
        var e, h, x, o, r, p, c, g, w, l, u, C, T, a, k, m, s, f, v, E = "sizzle" + 1 * new Date(), y = n.document, S = 0, i = 0, d = ae(), b = ae(), A = ae(), L = function(e, t) {
            if (e === t) {
                u = true;
            }
            return 0;
        }, j = {}.hasOwnProperty, t = [], D = t.pop, N = t.push, q = t.push, H = t.slice, O = function(e, t) {
            var n = 0, i = e.length;
            for (;n < i; n++) {
                if (e[n] === t) {
                    return n;
                }
            }
            return -1;
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", P = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", I = "\\[" + M + "*(" + P + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + M + "*\\]", W = ":(" + P + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|" + ".*" + ")\\)|)", F = new RegExp(M + "+", "g"), z = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), B = new RegExp("^" + M + "*," + M + "*"), _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), $ = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), V = new RegExp(W), X = new RegExp("^" + P + "$"), U = {
            ID: new RegExp("^#(" + P + ")"),
            CLASS: new RegExp("^\\.(" + P + ")"),
            TAG: new RegExp("^(" + P + "|[*])"),
            ATTR: new RegExp("^" + I),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + R + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, G = /[+~]/, J = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ee = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, i & 1023 | 56320);
        }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
            if (t) {
                if (e === "\0") {
                    return "�";
                }
                return e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ";
            }
            return "\\" + e;
        }, ie = function() {
            C();
        }, re = ye(function(e) {
            return e.disabled === true && ("form" in e || "label" in e);
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            q.apply(t = H.call(y.childNodes), y.childNodes);
            t[y.childNodes.length].nodeType;
        } catch (e) {
            q = {
                apply: t.length ? function(e, t) {
                    N.apply(e, H.call(t));
                } : function(e, t) {
                    var n = e.length, i = 0;
                    while (e[n++] = t[i++]) {}
                    e.length = n - 1;
                }
            };
        }
        function oe(e, t, n, i) {
            var r, o, a, s, l, u, f, c = t && t.ownerDocument, d = t ? t.nodeType : 9;
            n = n || [];
            if (typeof e !== "string" || !e || d !== 1 && d !== 9 && d !== 11) {
                return n;
            }
            if (!i) {
                if ((t ? t.ownerDocument || t : y) !== T) {
                    C(t);
                }
                t = t || T;
                if (k) {
                    if (d !== 11 && (l = Q.exec(e))) {
                        if (r = l[1]) {
                            if (d === 9) {
                                if (a = t.getElementById(r)) {
                                    if (a.id === r) {
                                        n.push(a);
                                        return n;
                                    }
                                } else {
                                    return n;
                                }
                            } else {
                                if (c && (a = c.getElementById(r)) && v(t, a) && a.id === r) {
                                    n.push(a);
                                    return n;
                                }
                            }
                        } else if (l[2]) {
                            q.apply(n, t.getElementsByTagName(e));
                            return n;
                        } else if ((r = l[3]) && h.getElementsByClassName && t.getElementsByClassName) {
                            q.apply(n, t.getElementsByClassName(r));
                            return n;
                        }
                    }
                    if (h.qsa && !A[e + " "] && (!m || !m.test(e))) {
                        if (d !== 1) {
                            c = t;
                            f = e;
                        } else if (t.nodeName.toLowerCase() !== "object") {
                            if (s = t.getAttribute("id")) {
                                s = s.replace(te, ne);
                            } else {
                                t.setAttribute("id", s = E);
                            }
                            u = p(e);
                            o = u.length;
                            while (o--) {
                                u[o] = "#" + s + " " + ve(u[o]);
                            }
                            f = u.join(",");
                            c = G.test(e) && ge(t.parentNode) || t;
                        }
                        if (f) {
                            try {
                                q.apply(n, c.querySelectorAll(f));
                                return n;
                            } catch (e) {} finally {
                                if (s === E) {
                                    t.removeAttribute("id");
                                }
                            }
                        }
                    }
                }
            }
            return g(e.replace(z, "$1"), t, n, i);
        }
        function ae() {
            var n = [];
            function i(e, t) {
                if (n.push(e + " ") > x.cacheLength) {
                    delete i[n.shift()];
                }
                return i[e + " "] = t;
            }
            return i;
        }
        function se(e) {
            e[E] = true;
            return e;
        }
        function le(e) {
            var t = T.createElement("fieldset");
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
        function ue(e, t) {
            var n = e.split("|"), i = n.length;
            while (i--) {
                x.attrHandle[n[i]] = t;
            }
        }
        function fe(e, t) {
            var n = t && e, i = n && e.nodeType === 1 && t.nodeType === 1 && e.sourceIndex - t.sourceIndex;
            if (i) {
                return i;
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
        function ce(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return t === "input" && e.type === n;
            };
        }
        function de(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return (t === "input" || t === "button") && e.type === n;
            };
        }
        function he(t) {
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
                        return e.isDisabled === t || e.isDisabled !== !t && re(e) === t;
                    }
                    return e.disabled === t;
                } else if ("label" in e) {
                    return e.disabled === t;
                }
                return false;
            };
        }
        function pe(a) {
            return se(function(o) {
                o = +o;
                return se(function(e, t) {
                    var n, i = a([], e.length, o), r = i.length;
                    while (r--) {
                        if (e[n = i[r]]) {
                            e[n] = !(t[n] = e[n]);
                        }
                    }
                });
            });
        }
        function ge(e) {
            return e && typeof e.getElementsByTagName !== "undefined" && e;
        }
        h = oe.support = {};
        r = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : false;
        };
        C = oe.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : y;
            if (i === T || i.nodeType !== 9 || !i.documentElement) {
                return T;
            }
            T = i;
            a = T.documentElement;
            k = !r(T);
            if (y !== T && (n = T.defaultView) && n.top !== n) {
                if (n.addEventListener) {
                    n.addEventListener("unload", ie, false);
                } else if (n.attachEvent) {
                    n.attachEvent("onunload", ie);
                }
            }
            h.attributes = le(function(e) {
                e.className = "i";
                return !e.getAttribute("className");
            });
            h.getElementsByTagName = le(function(e) {
                e.appendChild(T.createComment(""));
                return !e.getElementsByTagName("*").length;
            });
            h.getElementsByClassName = K.test(T.getElementsByClassName);
            h.getById = le(function(e) {
                a.appendChild(e).id = E;
                return !T.getElementsByName || !T.getElementsByName(E).length;
            });
            if (h.getById) {
                x.filter["ID"] = function(e) {
                    var t = e.replace(J, ee);
                    return function(e) {
                        return e.getAttribute("id") === t;
                    };
                };
                x.find["ID"] = function(e, t) {
                    if (typeof t.getElementById !== "undefined" && k) {
                        var n = t.getElementById(e);
                        return n ? [ n ] : [];
                    }
                };
            } else {
                x.filter["ID"] = function(e) {
                    var n = e.replace(J, ee);
                    return function(e) {
                        var t = typeof e.getAttributeNode !== "undefined" && e.getAttributeNode("id");
                        return t && t.value === n;
                    };
                };
                x.find["ID"] = function(e, t) {
                    if (typeof t.getElementById !== "undefined" && k) {
                        var n, i, r, o = t.getElementById(e);
                        if (o) {
                            n = o.getAttributeNode("id");
                            if (n && n.value === e) {
                                return [ o ];
                            }
                            r = t.getElementsByName(e);
                            i = 0;
                            while (o = r[i++]) {
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
            x.find["TAG"] = h.getElementsByTagName ? function(e, t) {
                if (typeof t.getElementsByTagName !== "undefined") {
                    return t.getElementsByTagName(e);
                } else if (h.qsa) {
                    return t.querySelectorAll(e);
                }
            } : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if (e === "*") {
                    while (n = o[r++]) {
                        if (n.nodeType === 1) {
                            i.push(n);
                        }
                    }
                    return i;
                }
                return o;
            };
            x.find["CLASS"] = h.getElementsByClassName && function(e, t) {
                if (typeof t.getElementsByClassName !== "undefined" && k) {
                    return t.getElementsByClassName(e);
                }
            };
            s = [];
            m = [];
            if (h.qsa = K.test(T.querySelectorAll)) {
                le(function(e) {
                    a.appendChild(e).innerHTML = "<a id='" + E + "'></a>" + "<select id='" + E + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                    if (e.querySelectorAll("[msallowcapture^='']").length) {
                        m.push("[*^$]=" + M + "*(?:''|\"\")");
                    }
                    if (!e.querySelectorAll("[selected]").length) {
                        m.push("\\[" + M + "*(?:value|" + R + ")");
                    }
                    if (!e.querySelectorAll("[id~=" + E + "-]").length) {
                        m.push("~=");
                    }
                    if (!e.querySelectorAll(":checked").length) {
                        m.push(":checked");
                    }
                    if (!e.querySelectorAll("a#" + E + "+*").length) {
                        m.push(".#.+[+~]");
                    }
                });
                le(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                    var t = T.createElement("input");
                    t.setAttribute("type", "hidden");
                    e.appendChild(t).setAttribute("name", "D");
                    if (e.querySelectorAll("[name=d]").length) {
                        m.push("name" + M + "*[*^$|!~]?=");
                    }
                    if (e.querySelectorAll(":enabled").length !== 2) {
                        m.push(":enabled", ":disabled");
                    }
                    a.appendChild(e).disabled = true;
                    if (e.querySelectorAll(":disabled").length !== 2) {
                        m.push(":enabled", ":disabled");
                    }
                    e.querySelectorAll("*,:x");
                    m.push(",.*:");
                });
            }
            if (h.matchesSelector = K.test(f = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) {
                le(function(e) {
                    h.disconnectedMatch = f.call(e, "*");
                    f.call(e, "[s!='']:x");
                    s.push("!=", W);
                });
            }
            m = m.length && new RegExp(m.join("|"));
            s = s.length && new RegExp(s.join("|"));
            t = K.test(a.compareDocumentPosition);
            v = t || K.test(a.contains) ? function(e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !!(i && i.nodeType === 1 && (n.contains ? n.contains(i) : e.compareDocumentPosition && e.compareDocumentPosition(i) & 16));
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
            L = t ? function(e, t) {
                if (e === t) {
                    u = true;
                    return 0;
                }
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                if (n) {
                    return n;
                }
                n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1;
                if (n & 1 || !h.sortDetached && t.compareDocumentPosition(e) === n) {
                    if (e === T || e.ownerDocument === y && v(y, e)) {
                        return -1;
                    }
                    if (t === T || t.ownerDocument === y && v(y, t)) {
                        return 1;
                    }
                    return l ? O(l, e) - O(l, t) : 0;
                }
                return n & 4 ? -1 : 1;
            } : function(e, t) {
                if (e === t) {
                    u = true;
                    return 0;
                }
                var n, i = 0, r = e.parentNode, o = t.parentNode, a = [ e ], s = [ t ];
                if (!r || !o) {
                    return e === T ? -1 : t === T ? 1 : r ? -1 : o ? 1 : l ? O(l, e) - O(l, t) : 0;
                } else if (r === o) {
                    return fe(e, t);
                }
                n = e;
                while (n = n.parentNode) {
                    a.unshift(n);
                }
                n = t;
                while (n = n.parentNode) {
                    s.unshift(n);
                }
                while (a[i] === s[i]) {
                    i++;
                }
                return i ? fe(a[i], s[i]) : a[i] === y ? -1 : s[i] === y ? 1 : 0;
            };
            return T;
        };
        oe.matches = function(e, t) {
            return oe(e, null, null, t);
        };
        oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== T) {
                C(e);
            }
            t = t.replace($, "='$1']");
            if (h.matchesSelector && k && !A[t + " "] && (!s || !s.test(t)) && (!m || !m.test(t))) {
                try {
                    var n = f.call(e, t);
                    if (n || h.disconnectedMatch || e.document && e.document.nodeType !== 11) {
                        return n;
                    }
                } catch (e) {}
            }
            return oe(t, T, null, [ e ]).length > 0;
        };
        oe.contains = function(e, t) {
            if ((e.ownerDocument || e) !== T) {
                C(e);
            }
            return v(e, t);
        };
        oe.attr = function(e, t) {
            if ((e.ownerDocument || e) !== T) {
                C(e);
            }
            var n = x.attrHandle[t.toLowerCase()], i = n && j.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !k) : undefined;
            return i !== undefined ? i : h.attributes || !k ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        };
        oe.escape = function(e) {
            return (e + "").replace(te, ne);
        };
        oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        };
        oe.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            u = !h.detectDuplicates;
            l = !h.sortStable && e.slice(0);
            e.sort(L);
            if (u) {
                while (t = e[r++]) {
                    if (t === e[r]) {
                        i = n.push(r);
                    }
                }
                while (i--) {
                    e.splice(n[i], 1);
                }
            }
            l = null;
            return e;
        };
        o = oe.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (!r) {
                while (t = e[i++]) {
                    n += o(t);
                }
            } else if (r === 1 || r === 9 || r === 11) {
                if (typeof e.textContent === "string") {
                    return e.textContent;
                } else {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        n += o(e);
                    }
                }
            } else if (r === 3 || r === 4) {
                return e.nodeValue;
            }
            return n;
        };
        x = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: U,
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
                    e[1] = e[1].replace(J, ee);
                    e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee);
                    if (e[2] === "~=") {
                        e[3] = " " + e[3] + " ";
                    }
                    return e.slice(0, 4);
                },
                CHILD: function(e) {
                    e[1] = e[1].toLowerCase();
                    if (e[1].slice(0, 3) === "nth") {
                        if (!e[3]) {
                            oe.error(e[0]);
                        }
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                        e[5] = +(e[7] + e[8] || e[3] === "odd");
                    } else if (e[3]) {
                        oe.error(e[0]);
                    }
                    return e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    if (U["CHILD"].test(e[0])) {
                        return null;
                    }
                    if (e[3]) {
                        e[2] = e[4] || e[5] || "";
                    } else if (n && V.test(n) && (t = p(n, true)) && (t = n.indexOf(")", n.length - t) - n.length)) {
                        e[0] = e[0].slice(0, t);
                        e[2] = n.slice(0, t);
                    }
                    return e.slice(0, 3);
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(J, ee).toLowerCase();
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
                ATTR: function(n, i, r) {
                    return function(e) {
                        var t = oe.attr(e, n);
                        if (t == null) {
                            return i === "!=";
                        }
                        if (!i) {
                            return true;
                        }
                        t += "";
                        return i === "=" ? t === r : i === "!=" ? t !== r : i === "^=" ? r && t.indexOf(r) === 0 : i === "*=" ? r && t.indexOf(r) > -1 : i === "$=" ? r && t.slice(-r.length) === r : i === "~=" ? (" " + t.replace(F, " ") + " ").indexOf(r) > -1 : i === "|=" ? t === r || t.slice(0, r.length + 1) === r + "-" : false;
                    };
                },
                CHILD: function(p, e, t, g, m) {
                    var v = p.slice(0, 3) !== "nth", y = p.slice(-4) !== "last", b = e === "of-type";
                    return g === 1 && m === 0 ? function(e) {
                        return !!e.parentNode;
                    } : function(e, t, n) {
                        var i, r, o, a, s, l, u = v !== y ? "nextSibling" : "previousSibling", f = e.parentNode, c = b && e.nodeName.toLowerCase(), d = !n && !b, h = false;
                        if (f) {
                            if (v) {
                                while (u) {
                                    a = e;
                                    while (a = a[u]) {
                                        if (b ? a.nodeName.toLowerCase() === c : a.nodeType === 1) {
                                            return false;
                                        }
                                    }
                                    l = u = p === "only" && !l && "nextSibling";
                                }
                                return true;
                            }
                            l = [ y ? f.firstChild : f.lastChild ];
                            if (y && d) {
                                a = f;
                                o = a[E] || (a[E] = {});
                                r = o[a.uniqueID] || (o[a.uniqueID] = {});
                                i = r[p] || [];
                                s = i[0] === S && i[1];
                                h = s && i[2];
                                a = s && f.childNodes[s];
                                while (a = ++s && a && a[u] || (h = s = 0) || l.pop()) {
                                    if (a.nodeType === 1 && ++h && a === e) {
                                        r[p] = [ S, s, h ];
                                        break;
                                    }
                                }
                            } else {
                                if (d) {
                                    a = e;
                                    o = a[E] || (a[E] = {});
                                    r = o[a.uniqueID] || (o[a.uniqueID] = {});
                                    i = r[p] || [];
                                    s = i[0] === S && i[1];
                                    h = s;
                                }
                                if (h === false) {
                                    while (a = ++s && a && a[u] || (h = s = 0) || l.pop()) {
                                        if ((b ? a.nodeName.toLowerCase() === c : a.nodeType === 1) && ++h) {
                                            if (d) {
                                                o = a[E] || (a[E] = {});
                                                r = o[a.uniqueID] || (o[a.uniqueID] = {});
                                                r[p] = [ S, h ];
                                            }
                                            if (a === e) {
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            h -= m;
                            return h === g || h % g === 0 && h / g >= 0;
                        }
                    };
                },
                PSEUDO: function(e, o) {
                    var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    if (a[E]) {
                        return a(o);
                    }
                    if (a.length > 1) {
                        t = [ e, e, "", o ];
                        return x.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, t) {
                            var n, i = a(e, o), r = i.length;
                            while (r--) {
                                n = O(e, i[r]);
                                e[n] = !(t[n] = i[r]);
                            }
                        }) : function(e) {
                            return a(e, 0, t);
                        };
                    }
                    return a;
                }
            },
            pseudos: {
                not: se(function(e) {
                    var i = [], r = [], s = c(e.replace(z, "$1"));
                    return s[E] ? se(function(e, t, n, i) {
                        var r, o = s(e, null, i, []), a = e.length;
                        while (a--) {
                            if (r = o[a]) {
                                e[a] = !(t[a] = r);
                            }
                        }
                    }) : function(e, t, n) {
                        i[0] = e;
                        s(i, null, n, r);
                        i[0] = null;
                        return !r.pop();
                    };
                }),
                has: se(function(t) {
                    return function(e) {
                        return oe(t, e).length > 0;
                    };
                }),
                contains: se(function(t) {
                    t = t.replace(J, ee);
                    return function(e) {
                        return (e.textContent || e.innerText || o(e)).indexOf(t) > -1;
                    };
                }),
                lang: se(function(n) {
                    if (!X.test(n || "")) {
                        oe.error("unsupported lang: " + n);
                    }
                    n = n.replace(J, ee).toLowerCase();
                    return function(e) {
                        var t;
                        do {
                            if (t = k ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) {
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
                    return e === a;
                },
                focus: function(e) {
                    return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: he(false),
                disabled: he(true),
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
                    return !x.pseudos["empty"](e);
                },
                header: function(e) {
                    return Z.test(e.nodeName);
                },
                input: function(e) {
                    return Y.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button";
                },
                text: function(e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text");
                },
                first: pe(function() {
                    return [ 0 ];
                }),
                last: pe(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: pe(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: pe(function(e, t) {
                    var n = 0;
                    for (;n < t; n += 2) {
                        e.push(n);
                    }
                    return e;
                }),
                odd: pe(function(e, t) {
                    var n = 1;
                    for (;n < t; n += 2) {
                        e.push(n);
                    }
                    return e;
                }),
                lt: pe(function(e, t, n) {
                    var i = n < 0 ? n + t : n;
                    for (;--i >= 0; ) {
                        e.push(i);
                    }
                    return e;
                }),
                gt: pe(function(e, t, n) {
                    var i = n < 0 ? n + t : n;
                    for (;++i < t; ) {
                        e.push(i);
                    }
                    return e;
                })
            }
        };
        x.pseudos["nth"] = x.pseudos["eq"];
        for (e in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        }) {
            x.pseudos[e] = ce(e);
        }
        for (e in {
            submit: true,
            reset: true
        }) {
            x.pseudos[e] = de(e);
        }
        function me() {}
        me.prototype = x.filters = x.pseudos;
        x.setFilters = new me();
        p = oe.tokenize = function(e, t) {
            var n, i, r, o, a, s, l, u = b[e + " "];
            if (u) {
                return t ? 0 : u.slice(0);
            }
            a = e;
            s = [];
            l = x.preFilter;
            while (a) {
                if (!n || (i = B.exec(a))) {
                    if (i) {
                        a = a.slice(i[0].length) || a;
                    }
                    s.push(r = []);
                }
                n = false;
                if (i = _.exec(a)) {
                    n = i.shift();
                    r.push({
                        value: n,
                        type: i[0].replace(z, " ")
                    });
                    a = a.slice(n.length);
                }
                for (o in x.filter) {
                    if ((i = U[o].exec(a)) && (!l[o] || (i = l[o](i)))) {
                        n = i.shift();
                        r.push({
                            value: n,
                            type: o,
                            matches: i
                        });
                        a = a.slice(n.length);
                    }
                }
                if (!n) {
                    break;
                }
            }
            return t ? a.length : a ? oe.error(e) : b(e, s).slice(0);
        };
        function ve(e) {
            var t = 0, n = e.length, i = "";
            for (;t < n; t++) {
                i += e[t].value;
            }
            return i;
        }
        function ye(s, e, t) {
            var l = e.dir, u = e.next, f = u || l, c = t && f === "parentNode", d = i++;
            return e.first ? function(e, t, n) {
                while (e = e[l]) {
                    if (e.nodeType === 1 || c) {
                        return s(e, t, n);
                    }
                }
                return false;
            } : function(e, t, n) {
                var i, r, o, a = [ S, d ];
                if (n) {
                    while (e = e[l]) {
                        if (e.nodeType === 1 || c) {
                            if (s(e, t, n)) {
                                return true;
                            }
                        }
                    }
                } else {
                    while (e = e[l]) {
                        if (e.nodeType === 1 || c) {
                            o = e[E] || (e[E] = {});
                            r = o[e.uniqueID] || (o[e.uniqueID] = {});
                            if (u && u === e.nodeName.toLowerCase()) {
                                e = e[l] || e;
                            } else if ((i = r[f]) && i[0] === S && i[1] === d) {
                                return a[2] = i[2];
                            } else {
                                r[f] = a;
                                if (a[2] = s(e, t, n)) {
                                    return true;
                                }
                            }
                        }
                    }
                }
                return false;
            };
        }
        function be(r) {
            return r.length > 1 ? function(e, t, n) {
                var i = r.length;
                while (i--) {
                    if (!r[i](e, t, n)) {
                        return false;
                    }
                }
                return true;
            } : r[0];
        }
        function xe(e, t, n) {
            var i = 0, r = t.length;
            for (;i < r; i++) {
                oe(e, t[i], n);
            }
            return n;
        }
        function we(e, t, n, i, r) {
            var o, a = [], s = 0, l = e.length, u = t != null;
            for (;s < l; s++) {
                if (o = e[s]) {
                    if (!n || n(o, i, r)) {
                        a.push(o);
                        if (u) {
                            t.push(s);
                        }
                    }
                }
            }
            return a;
        }
        function Ce(h, p, g, m, v, e) {
            if (m && !m[E]) {
                m = Ce(m);
            }
            if (v && !v[E]) {
                v = Ce(v, e);
            }
            return se(function(e, t, n, i) {
                var r, o, a, s = [], l = [], u = t.length, f = e || xe(p || "*", n.nodeType ? [ n ] : n, []), c = h && (e || !p) ? we(f, s, h, n, i) : f, d = g ? v || (e ? h : u || m) ? [] : t : c;
                if (g) {
                    g(c, d, n, i);
                }
                if (m) {
                    r = we(d, l);
                    m(r, [], n, i);
                    o = r.length;
                    while (o--) {
                        if (a = r[o]) {
                            d[l[o]] = !(c[l[o]] = a);
                        }
                    }
                }
                if (e) {
                    if (v || h) {
                        if (v) {
                            r = [];
                            o = d.length;
                            while (o--) {
                                if (a = d[o]) {
                                    r.push(c[o] = a);
                                }
                            }
                            v(null, d = [], r, i);
                        }
                        o = d.length;
                        while (o--) {
                            if ((a = d[o]) && (r = v ? O(e, a) : s[o]) > -1) {
                                e[r] = !(t[r] = a);
                            }
                        }
                    }
                } else {
                    d = we(d === t ? d.splice(u, d.length) : d);
                    if (v) {
                        v(null, t, d, i);
                    } else {
                        q.apply(t, d);
                    }
                }
            });
        }
        function Te(e) {
            var r, t, n, i = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, l = ye(function(e) {
                return e === r;
            }, a, true), u = ye(function(e) {
                return O(r, e) > -1;
            }, a, true), f = [ function(e, t, n) {
                var i = !o && (n || t !== w) || ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
                r = null;
                return i;
            } ];
            for (;s < i; s++) {
                if (t = x.relative[e[s].type]) {
                    f = [ ye(be(f), t) ];
                } else {
                    t = x.filter[e[s].type].apply(null, e[s].matches);
                    if (t[E]) {
                        n = ++s;
                        for (;n < i; n++) {
                            if (x.relative[e[n].type]) {
                                break;
                            }
                        }
                        return Ce(s > 1 && be(f), s > 1 && ve(e.slice(0, s - 1).concat({
                            value: e[s - 2].type === " " ? "*" : ""
                        })).replace(z, "$1"), t, s < n && Te(e.slice(s, n)), n < i && Te(e = e.slice(n)), n < i && ve(e));
                    }
                    f.push(t);
                }
            }
            return be(f);
        }
        function ke(m, v) {
            var y = v.length > 0, b = m.length > 0, e = function(e, t, n, i, r) {
                var o, a, s, l = 0, u = "0", f = e && [], c = [], d = w, h = e || b && x.find["TAG"]("*", r), p = S += d == null ? 1 : Math.random() || .1, g = h.length;
                if (r) {
                    w = t === T || t || r;
                }
                for (;u !== g && (o = h[u]) != null; u++) {
                    if (b && o) {
                        a = 0;
                        if (!t && o.ownerDocument !== T) {
                            C(o);
                            n = !k;
                        }
                        while (s = m[a++]) {
                            if (s(o, t || T, n)) {
                                i.push(o);
                                break;
                            }
                        }
                        if (r) {
                            S = p;
                        }
                    }
                    if (y) {
                        if (o = !s && o) {
                            l--;
                        }
                        if (e) {
                            f.push(o);
                        }
                    }
                }
                l += u;
                if (y && u !== l) {
                    a = 0;
                    while (s = v[a++]) {
                        s(f, c, t, n);
                    }
                    if (e) {
                        if (l > 0) {
                            while (u--) {
                                if (!(f[u] || c[u])) {
                                    c[u] = D.call(i);
                                }
                            }
                        }
                        c = we(c);
                    }
                    q.apply(i, c);
                    if (r && !e && c.length > 0 && l + v.length > 1) {
                        oe.uniqueSort(i);
                    }
                }
                if (r) {
                    S = p;
                    w = d;
                }
                return f;
            };
            return y ? se(e) : e;
        }
        c = oe.compile = function(e, t) {
            var n, i = [], r = [], o = A[e + " "];
            if (!o) {
                if (!t) {
                    t = p(e);
                }
                n = t.length;
                while (n--) {
                    o = Te(t[n]);
                    if (o[E]) {
                        i.push(o);
                    } else {
                        r.push(o);
                    }
                }
                o = A(e, ke(r, i));
                o.selector = e;
            }
            return o;
        };
        g = oe.select = function(e, t, n, i) {
            var r, o, a, s, l, u = typeof e === "function" && e, f = !i && p(e = u.selector || e);
            n = n || [];
            if (f.length === 1) {
                o = f[0] = f[0].slice(0);
                if (o.length > 2 && (a = o[0]).type === "ID" && t.nodeType === 9 && k && x.relative[o[1].type]) {
                    t = (x.find["ID"](a.matches[0].replace(J, ee), t) || [])[0];
                    if (!t) {
                        return n;
                    } else if (u) {
                        t = t.parentNode;
                    }
                    e = e.slice(o.shift().value.length);
                }
                r = U["needsContext"].test(e) ? 0 : o.length;
                while (r--) {
                    a = o[r];
                    if (x.relative[s = a.type]) {
                        break;
                    }
                    if (l = x.find[s]) {
                        if (i = l(a.matches[0].replace(J, ee), G.test(o[0].type) && ge(t.parentNode) || t)) {
                            o.splice(r, 1);
                            e = i.length && ve(o);
                            if (!e) {
                                q.apply(n, i);
                                return n;
                            }
                            break;
                        }
                    }
                }
            }
            (u || c(e, f))(i, t, !k, n, !t || G.test(e) && ge(t.parentNode) || t);
            return n;
        };
        h.sortStable = E.split("").sort(L).join("") === E;
        h.detectDuplicates = !!u;
        C();
        h.sortDetached = le(function(e) {
            return e.compareDocumentPosition(T.createElement("fieldset")) & 1;
        });
        if (!le(function(e) {
            e.innerHTML = "<a href='#'></a>";
            return e.firstChild.getAttribute("href") === "#";
        })) {
            ue("type|href|height|width", function(e, t, n) {
                if (!n) {
                    return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2);
                }
            });
        }
        if (!h.attributes || !le(function(e) {
            e.innerHTML = "<input/>";
            e.firstChild.setAttribute("value", "");
            return e.firstChild.getAttribute("value") === "";
        })) {
            ue("value", function(e, t, n) {
                if (!n && e.nodeName.toLowerCase() === "input") {
                    return e.defaultValue;
                }
            });
        }
        if (!le(function(e) {
            return e.getAttribute("disabled") == null;
        })) {
            ue(R, function(e, t, n) {
                var i;
                if (!n) {
                    return e[t] === true ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
                }
            });
        }
        return oe;
    }(T);
    E.find = p;
    E.expr = p.selectors;
    E.expr[":"] = E.expr.pseudos;
    E.uniqueSort = E.unique = p.uniqueSort;
    E.text = p.getText;
    E.isXMLDoc = p.isXML;
    E.contains = p.contains;
    E.escapeSelector = p.escape;
    var C = function(e, t, n) {
        var i = [], r = n !== undefined;
        while ((e = e[t]) && e.nodeType !== 9) {
            if (e.nodeType === 1) {
                if (r && E(e).is(n)) {
                    break;
                }
                i.push(e);
            }
        }
        return i;
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
    var A = E.expr.match.needsContext;
    function L(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(e, n, i) {
        if (y(n)) {
            return E.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== i;
            });
        }
        if (n.nodeType) {
            return E.grep(e, function(e) {
                return e === n !== i;
            });
        }
        if (typeof n !== "string") {
            return E.grep(e, function(e) {
                return r.call(n, e) > -1 !== i;
            });
        }
        return E.filter(n, e, i);
    }
    E.filter = function(e, t, n) {
        var i = t[0];
        if (n) {
            e = ":not(" + e + ")";
        }
        if (t.length === 1 && i.nodeType === 1) {
            return E.find.matchesSelector(i, e) ? [ i ] : [];
        }
        return E.find.matches(e, E.grep(t, function(e) {
            return e.nodeType === 1;
        }));
    };
    E.fn.extend({
        find: function(e) {
            var t, n, i = this.length, r = this;
            if (typeof e !== "string") {
                return this.pushStack(E(e).filter(function() {
                    for (t = 0; t < i; t++) {
                        if (E.contains(r[t], this)) {
                            return true;
                        }
                    }
                }));
            }
            n = this.pushStack([]);
            for (t = 0; t < i; t++) {
                E.find(e, r[t], n);
            }
            return i > 1 ? E.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], false));
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], true));
        },
        is: function(e) {
            return !!D(this, typeof e === "string" && A.test(e) ? E(e) : e || [], false).length;
        }
    });
    var N, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, H = E.fn.init = function(e, t, n) {
        var i, r;
        if (!e) {
            return this;
        }
        n = n || N;
        if (typeof e === "string") {
            if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3) {
                i = [ null, e, null ];
            } else {
                i = q.exec(e);
            }
            if (i && (i[1] || !t)) {
                if (i[1]) {
                    t = t instanceof E ? t[0] : t;
                    E.merge(this, E.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : k, true));
                    if (j.test(i[1]) && E.isPlainObject(t)) {
                        for (i in t) {
                            if (y(this[i])) {
                                this[i](t[i]);
                            } else {
                                this.attr(i, t[i]);
                            }
                        }
                    }
                    return this;
                } else {
                    r = k.getElementById(i[2]);
                    if (r) {
                        this[0] = r;
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
        } else if (y(e)) {
            return n.ready !== undefined ? n.ready(e) : e(E);
        }
        return E.makeArray(e, this);
    };
    H.prototype = E.fn;
    N = E(k);
    var O = /^(?:parents|prev(?:Until|All))/, R = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    E.fn.extend({
        has: function(e) {
            var t = E(e, this), n = t.length;
            return this.filter(function() {
                var e = 0;
                for (;e < n; e++) {
                    if (E.contains(this, t[e])) {
                        return true;
                    }
                }
            });
        },
        closest: function(e, t) {
            var n, i = 0, r = this.length, o = [], a = typeof e !== "string" && E(e);
            if (!A.test(e)) {
                for (;i < r; i++) {
                    for (n = this[i]; n && n !== t; n = n.parentNode) {
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : n.nodeType === 1 && E.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        }
                    }
                }
            }
            return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o);
        },
        index: function(e) {
            if (!e) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof e === "string") {
                return r.call(E(e), this[0]);
            }
            return r.call(this, e.jquery ? e[0] : e);
        },
        add: function(e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
        }
    });
    function M(e, t) {
        while ((e = e[t]) && e.nodeType !== 1) {}
        return e;
    }
    E.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null;
        },
        parents: function(e) {
            return C(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return C(e, "parentNode", n);
        },
        next: function(e) {
            return M(e, "nextSibling");
        },
        prev: function(e) {
            return M(e, "previousSibling");
        },
        nextAll: function(e) {
            return C(e, "nextSibling");
        },
        prevAll: function(e) {
            return C(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return C(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return C(e, "previousSibling", n);
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return S(e.firstChild);
        },
        contents: function(e) {
            if (L(e, "iframe")) {
                return e.contentDocument;
            }
            if (L(e, "template")) {
                e = e.content || e;
            }
            return E.merge([], e.childNodes);
        }
    }, function(i, r) {
        E.fn[i] = function(e, t) {
            var n = E.map(this, r, e);
            if (i.slice(-5) !== "Until") {
                t = e;
            }
            if (t && typeof t === "string") {
                n = E.filter(t, n);
            }
            if (this.length > 1) {
                if (!R[i]) {
                    E.uniqueSort(n);
                }
                if (O.test(i)) {
                    n.reverse();
                }
            }
            return this.pushStack(n);
        };
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function I(e) {
        var n = {};
        E.each(e.match(P) || [], function(e, t) {
            n[t] = true;
        });
        return n;
    }
    E.Callbacks = function(i) {
        i = typeof i === "string" ? I(i) : E.extend({}, i);
        var n, e, t, r, o = [], a = [], s = -1, l = function() {
            r = r || i.once;
            t = n = true;
            for (;a.length; s = -1) {
                e = a.shift();
                while (++s < o.length) {
                    if (o[s].apply(e[0], e[1]) === false && i.stopOnFalse) {
                        s = o.length;
                        e = false;
                    }
                }
            }
            if (!i.memory) {
                e = false;
            }
            n = false;
            if (r) {
                if (e) {
                    o = [];
                } else {
                    o = "";
                }
            }
        }, u = {
            add: function() {
                if (o) {
                    if (e && !n) {
                        s = o.length - 1;
                        a.push(e);
                    }
                    (function n(e) {
                        E.each(e, function(e, t) {
                            if (y(t)) {
                                if (!i.unique || !u.has(t)) {
                                    o.push(t);
                                }
                            } else if (t && t.length && w(t) !== "string") {
                                n(t);
                            }
                        });
                    })(arguments);
                    if (e && !n) {
                        l();
                    }
                }
                return this;
            },
            remove: function() {
                E.each(arguments, function(e, t) {
                    var n;
                    while ((n = E.inArray(t, o, n)) > -1) {
                        o.splice(n, 1);
                        if (n <= s) {
                            s--;
                        }
                    }
                });
                return this;
            },
            has: function(e) {
                return e ? E.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function() {
                if (o) {
                    o = [];
                }
                return this;
            },
            disable: function() {
                r = a = [];
                o = e = "";
                return this;
            },
            disabled: function() {
                return !o;
            },
            lock: function() {
                r = a = [];
                if (!e && !n) {
                    o = e = "";
                }
                return this;
            },
            locked: function() {
                return !!r;
            },
            fireWith: function(e, t) {
                if (!r) {
                    t = t || [];
                    t = [ e, t.slice ? t.slice() : t ];
                    a.push(t);
                    if (!n) {
                        l();
                    }
                }
                return this;
            },
            fire: function() {
                u.fireWith(this, arguments);
                return this;
            },
            fired: function() {
                return !!t;
            }
        };
        return u;
    };
    function W(e) {
        return e;
    }
    function F(e) {
        throw e;
    }
    function z(e, t, n, i) {
        var r;
        try {
            if (e && y(r = e.promise)) {
                r.call(e).done(t).fail(n);
            } else if (e && y(r = e.then)) {
                r.call(e, t, n);
            } else {
                t.apply(undefined, [ e ].slice(i));
            }
        } catch (e) {
            n.apply(undefined, [ e ]);
        }
    }
    E.extend({
        Deferred: function(e) {
            var o = [ [ "notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2 ], [ "resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected" ] ], r = "pending", a = {
                state: function() {
                    return r;
                },
                always: function() {
                    s.done(arguments).fail(arguments);
                    return this;
                },
                catch: function(e) {
                    return a.then(null, e);
                },
                pipe: function() {
                    var r = arguments;
                    return E.Deferred(function(i) {
                        E.each(o, function(e, t) {
                            var n = y(r[t[4]]) && r[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                if (e && y(e.promise)) {
                                    e.promise().progress(i.notify).done(i.resolve).fail(i.reject);
                                } else {
                                    i[t[0] + "With"](this, n ? [ e ] : arguments);
                                }
                            });
                        });
                        r = null;
                    }).promise();
                },
                then: function(t, n, i) {
                    var l = 0;
                    function u(r, o, a, s) {
                        return function() {
                            var n = this, i = arguments, e = function() {
                                var e, t;
                                if (r < l) {
                                    return;
                                }
                                e = a.apply(n, i);
                                if (e === o.promise()) {
                                    throw new TypeError("Thenable self-resolution");
                                }
                                t = e && (typeof e === "object" || typeof e === "function") && e.then;
                                if (y(t)) {
                                    if (s) {
                                        t.call(e, u(l, o, W, s), u(l, o, F, s));
                                    } else {
                                        l++;
                                        t.call(e, u(l, o, W, s), u(l, o, F, s), u(l, o, W, o.notifyWith));
                                    }
                                } else {
                                    if (a !== W) {
                                        n = undefined;
                                        i = [ e ];
                                    }
                                    (s || o.resolveWith)(n, i);
                                }
                            }, t = s ? e : function() {
                                try {
                                    e();
                                } catch (e) {
                                    if (E.Deferred.exceptionHook) {
                                        E.Deferred.exceptionHook(e, t.stackTrace);
                                    }
                                    if (r + 1 >= l) {
                                        if (a !== F) {
                                            n = undefined;
                                            i = [ e ];
                                        }
                                        o.rejectWith(n, i);
                                    }
                                }
                            };
                            if (r) {
                                t();
                            } else {
                                if (E.Deferred.getStackHook) {
                                    t.stackTrace = E.Deferred.getStackHook();
                                }
                                T.setTimeout(t);
                            }
                        };
                    }
                    return E.Deferred(function(e) {
                        o[0][3].add(u(0, e, y(i) ? i : W, e.notifyWith));
                        o[1][3].add(u(0, e, y(t) ? t : W));
                        o[2][3].add(u(0, e, y(n) ? n : F));
                    }).promise();
                },
                promise: function(e) {
                    return e != null ? E.extend(e, a) : a;
                }
            }, s = {};
            E.each(o, function(e, t) {
                var n = t[2], i = t[5];
                a[t[1]] = n.add;
                if (i) {
                    n.add(function() {
                        r = i;
                    }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock);
                }
                n.add(t[3].fire);
                s[t[0]] = function() {
                    s[t[0] + "With"](this === s ? undefined : this, arguments);
                    return this;
                };
                s[t[0] + "With"] = n.fireWith;
            });
            a.promise(s);
            if (e) {
                e.call(s, s);
            }
            return s;
        },
        when: function(e) {
            var n = arguments.length, t = n, i = Array(t), r = s.call(arguments), o = E.Deferred(), a = function(t) {
                return function(e) {
                    i[t] = this;
                    r[t] = arguments.length > 1 ? s.call(arguments) : e;
                    if (!--n) {
                        o.resolveWith(i, r);
                    }
                };
            };
            if (n <= 1) {
                z(e, o.done(a(t)).resolve, o.reject, !n);
                if (o.state() === "pending" || y(r[t] && r[t].then)) {
                    return o.then();
                }
            }
            while (t--) {
                z(r[t], a(t), o.reject);
            }
            return o.promise();
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function(e, t) {
        if (T.console && T.console.warn && e && B.test(e.name)) {
            T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
        }
    };
    E.readyException = function(e) {
        T.setTimeout(function() {
            throw e;
        });
    };
    var _ = E.Deferred();
    E.fn.ready = function(e) {
        _.then(e).catch(function(e) {
            E.readyException(e);
        });
        return this;
    };
    E.extend({
        isReady: false,
        readyWait: 1,
        ready: function(e) {
            if (e === true ? --E.readyWait : E.isReady) {
                return;
            }
            E.isReady = true;
            if (e !== true && --E.readyWait > 0) {
                return;
            }
            _.resolveWith(k, [ E ]);
        }
    });
    E.ready.then = _.then;
    function $() {
        k.removeEventListener("DOMContentLoaded", $);
        T.removeEventListener("load", $);
        E.ready();
    }
    if (k.readyState === "complete" || k.readyState !== "loading" && !k.documentElement.doScroll) {
        T.setTimeout(E.ready);
    } else {
        k.addEventListener("DOMContentLoaded", $);
        T.addEventListener("load", $);
    }
    var V = function(e, t, n, i, r, o, a) {
        var s = 0, l = e.length, u = n == null;
        if (w(n) === "object") {
            r = true;
            for (s in n) {
                V(e, t, s, n[s], true, o, a);
            }
        } else if (i !== undefined) {
            r = true;
            if (!y(i)) {
                a = true;
            }
            if (u) {
                if (a) {
                    t.call(e, i);
                    t = null;
                } else {
                    u = t;
                    t = function(e, t, n) {
                        return u.call(E(e), n);
                    };
                }
            }
            if (t) {
                for (;s < l; s++) {
                    t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                }
            }
        }
        if (r) {
            return e;
        }
        if (u) {
            return t.call(e);
        }
        return l ? t(e[0], n) : o;
    };
    var X = /^-ms-/, U = /-([a-z])/g;
    function Y(e, t) {
        return t.toUpperCase();
    }
    function Z(e) {
        return e.replace(X, "ms-").replace(U, Y);
    }
    var K = function(e) {
        return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
    };
    function Q() {
        this.expando = E.expando + Q.uid++;
    }
    Q.uid = 1;
    Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            if (!t) {
                t = {};
                if (K(e)) {
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
            var i, r = this.cache(e);
            if (typeof t === "string") {
                r[Z(t)] = n;
            } else {
                for (i in t) {
                    r[Z(i)] = t[i];
                }
            }
            return r;
        },
        get: function(e, t) {
            return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][Z(t)];
        },
        access: function(e, t, n) {
            if (t === undefined || t && typeof t === "string" && n === undefined) {
                return this.get(e, t);
            }
            this.set(e, t, n);
            return n !== undefined ? n : t;
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (i === undefined) {
                return;
            }
            if (t !== undefined) {
                if (Array.isArray(t)) {
                    t = t.map(Z);
                } else {
                    t = Z(t);
                    t = t in i ? [ t ] : t.match(P) || [];
                }
                n = t.length;
                while (n--) {
                    delete i[t[n]];
                }
            }
            if (t === undefined || E.isEmptyObject(i)) {
                if (e.nodeType) {
                    e[this.expando] = undefined;
                } else {
                    delete e[this.expando];
                }
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return t !== undefined && !E.isEmptyObject(t);
        }
    };
    var G = new Q();
    var J = new Q();
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
    function ie(e, t, n) {
        var i;
        if (n === undefined && e.nodeType === 1) {
            i = "data-" + t.replace(te, "-$&").toLowerCase();
            n = e.getAttribute(i);
            if (typeof n === "string") {
                try {
                    n = ne(n);
                } catch (e) {}
                J.set(e, t, n);
            } else {
                n = undefined;
            }
        }
        return n;
    }
    E.extend({
        hasData: function(e) {
            return J.hasData(e) || G.hasData(e);
        },
        data: function(e, t, n) {
            return J.access(e, t, n);
        },
        removeData: function(e, t) {
            J.remove(e, t);
        },
        _data: function(e, t, n) {
            return G.access(e, t, n);
        },
        _removeData: function(e, t) {
            G.remove(e, t);
        }
    });
    E.fn.extend({
        data: function(n, e) {
            var t, i, r, o = this[0], a = o && o.attributes;
            if (n === undefined) {
                if (this.length) {
                    r = J.get(o);
                    if (o.nodeType === 1 && !G.get(o, "hasDataAttrs")) {
                        t = a.length;
                        while (t--) {
                            if (a[t]) {
                                i = a[t].name;
                                if (i.indexOf("data-") === 0) {
                                    i = Z(i.slice(5));
                                    ie(o, i, r[i]);
                                }
                            }
                        }
                        G.set(o, "hasDataAttrs", true);
                    }
                }
                return r;
            }
            if (typeof n === "object") {
                return this.each(function() {
                    J.set(this, n);
                });
            }
            return V(this, function(e) {
                var t;
                if (o && e === undefined) {
                    t = J.get(o, n);
                    if (t !== undefined) {
                        return t;
                    }
                    t = ie(o, n);
                    if (t !== undefined) {
                        return t;
                    }
                    return;
                }
                this.each(function() {
                    J.set(this, n, e);
                });
            }, null, e, arguments.length > 1, null, true);
        },
        removeData: function(e) {
            return this.each(function() {
                J.remove(this, e);
            });
        }
    });
    E.extend({
        queue: function(e, t, n) {
            var i;
            if (e) {
                t = (t || "fx") + "queue";
                i = G.get(e, t);
                if (n) {
                    if (!i || Array.isArray(n)) {
                        i = G.access(e, t, E.makeArray(n));
                    } else {
                        i.push(n);
                    }
                }
                return i || [];
            }
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = E.queue(e, t), i = n.length, r = n.shift(), o = E._queueHooks(e, t), a = function() {
                E.dequeue(e, t);
            };
            if (r === "inprogress") {
                r = n.shift();
                i--;
            }
            if (r) {
                if (t === "fx") {
                    n.unshift("inprogress");
                }
                delete o.stop;
                r.call(e, a, o);
            }
            if (!i && o) {
                o.empty.fire();
            }
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return G.get(e, n) || G.access(e, n, {
                empty: E.Callbacks("once memory").add(function() {
                    G.remove(e, [ t + "queue", n ]);
                })
            });
        }
    });
    E.fn.extend({
        queue: function(t, n) {
            var e = 2;
            if (typeof t !== "string") {
                n = t;
                t = "fx";
                e--;
            }
            if (arguments.length < e) {
                return E.queue(this[0], t);
            }
            return n === undefined ? this : this.each(function() {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t);
                if (t === "fx" && e[0] !== "inprogress") {
                    E.dequeue(this, t);
                }
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                E.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, i = 1, r = E.Deferred(), o = this, a = this.length, s = function() {
                if (!--i) {
                    r.resolveWith(o, [ o ]);
                }
            };
            if (typeof e !== "string") {
                t = e;
                e = undefined;
            }
            e = e || "fx";
            while (a--) {
                n = G.get(o[a], e + "queueHooks");
                if (n && n.empty) {
                    i++;
                    n.empty.add(s);
                }
            }
            s();
            return r.promise(t);
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var oe = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i");
    var ae = [ "Top", "Right", "Bottom", "Left" ];
    var se = function(e, t) {
        e = t || e;
        return e.style.display === "none" || e.style.display === "" && E.contains(e.ownerDocument, e) && E.css(e, "display") === "none";
    };
    var le = function(e, t, n, i) {
        var r, o, a = {};
        for (o in t) {
            a[o] = e.style[o];
            e.style[o] = t[o];
        }
        r = n.apply(e, i || []);
        for (o in t) {
            e.style[o] = a[o];
        }
        return r;
    };
    function ue(e, t, n, i) {
        var r, o, a = 20, s = i ? function() {
            return i.cur();
        } : function() {
            return E.css(e, t, "");
        }, l = s(), u = n && n[3] || (E.cssNumber[t] ? "" : "px"), f = (E.cssNumber[t] || u !== "px" && +l) && oe.exec(E.css(e, t));
        if (f && f[3] !== u) {
            l = l / 2;
            u = u || f[3];
            f = +l || 1;
            while (a--) {
                E.style(e, t, f + u);
                if ((1 - o) * (1 - (o = s() / l || .5)) <= 0) {
                    a = 0;
                }
                f = f / o;
            }
            f = f * 2;
            E.style(e, t, f + u);
            n = n || [];
        }
        if (n) {
            f = +f || +l || 0;
            r = n[1] ? f + (n[1] + 1) * n[2] : +n[2];
            if (i) {
                i.unit = u;
                i.start = f;
                i.end = r;
            }
        }
        return r;
    }
    var fe = {};
    function ce(e) {
        var t, n = e.ownerDocument, i = e.nodeName, r = fe[i];
        if (r) {
            return r;
        }
        t = n.body.appendChild(n.createElement(i));
        r = E.css(t, "display");
        t.parentNode.removeChild(t);
        if (r === "none") {
            r = "block";
        }
        fe[i] = r;
        return r;
    }
    function de(e, t) {
        var n, i, r = [], o = 0, a = e.length;
        for (;o < a; o++) {
            i = e[o];
            if (!i.style) {
                continue;
            }
            n = i.style.display;
            if (t) {
                if (n === "none") {
                    r[o] = G.get(i, "display") || null;
                    if (!r[o]) {
                        i.style.display = "";
                    }
                }
                if (i.style.display === "" && se(i)) {
                    r[o] = ce(i);
                }
            } else {
                if (n !== "none") {
                    r[o] = "none";
                    G.set(i, "display", n);
                }
            }
        }
        for (o = 0; o < a; o++) {
            if (r[o] != null) {
                e[o].style.display = r[o];
            }
        }
        return e;
    }
    E.fn.extend({
        show: function() {
            return de(this, true);
        },
        hide: function() {
            return de(this);
        },
        toggle: function(e) {
            if (typeof e === "boolean") {
                return e ? this.show() : this.hide();
            }
            return this.each(function() {
                if (se(this)) {
                    E(this).show();
                } else {
                    E(this).hide();
                }
            });
        }
    });
    var he = /^(?:checkbox|radio)$/i;
    var pe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
    var ge = /^$|^module$|\/(?:java|ecma)script/i;
    var me = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    me.optgroup = me.option;
    me.tbody = me.tfoot = me.colgroup = me.caption = me.thead;
    me.th = me.td;
    function ve(e, t) {
        var n;
        if (typeof e.getElementsByTagName !== "undefined") {
            n = e.getElementsByTagName(t || "*");
        } else if (typeof e.querySelectorAll !== "undefined") {
            n = e.querySelectorAll(t || "*");
        } else {
            n = [];
        }
        if (t === undefined || t && L(e, t)) {
            return E.merge([ e ], n);
        }
        return n;
    }
    function ye(e, t) {
        var n = 0, i = e.length;
        for (;n < i; n++) {
            G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"));
        }
    }
    var be = /<|&#?\w+;/;
    function xe(e, t, n, i, r) {
        var o, a, s, l, u, f, c = t.createDocumentFragment(), d = [], h = 0, p = e.length;
        for (;h < p; h++) {
            o = e[h];
            if (o || o === 0) {
                if (w(o) === "object") {
                    E.merge(d, o.nodeType ? [ o ] : o);
                } else if (!be.test(o)) {
                    d.push(t.createTextNode(o));
                } else {
                    a = a || c.appendChild(t.createElement("div"));
                    s = (pe.exec(o) || [ "", "" ])[1].toLowerCase();
                    l = me[s] || me._default;
                    a.innerHTML = l[1] + E.htmlPrefilter(o) + l[2];
                    f = l[0];
                    while (f--) {
                        a = a.lastChild;
                    }
                    E.merge(d, a.childNodes);
                    a = c.firstChild;
                    a.textContent = "";
                }
            }
        }
        c.textContent = "";
        h = 0;
        while (o = d[h++]) {
            if (i && E.inArray(o, i) > -1) {
                if (r) {
                    r.push(o);
                }
                continue;
            }
            u = E.contains(o.ownerDocument, o);
            a = ve(c.appendChild(o), "script");
            if (u) {
                ye(a);
            }
            if (n) {
                f = 0;
                while (o = a[f++]) {
                    if (ge.test(o.type || "")) {
                        n.push(o);
                    }
                }
            }
        }
        return c;
    }
    (function() {
        var e = k.createDocumentFragment(), t = e.appendChild(k.createElement("div")), n = k.createElement("input");
        n.setAttribute("type", "radio");
        n.setAttribute("checked", "checked");
        n.setAttribute("name", "t");
        t.appendChild(n);
        v.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked;
        t.innerHTML = "<textarea>x</textarea>";
        v.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue;
    })();
    var we = k.documentElement;
    var Ce = /^key/, Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, ke = /^([^.]*)(?:\.(.+)|)/;
    function Ee() {
        return true;
    }
    function Se() {
        return false;
    }
    function Ae() {
        try {
            return k.activeElement;
        } catch (e) {}
    }
    function Le(e, t, n, i, r, o) {
        var a, s;
        if (typeof t === "object") {
            if (typeof n !== "string") {
                i = i || n;
                n = undefined;
            }
            for (s in t) {
                Le(e, s, n, i, t[s], o);
            }
            return e;
        }
        if (i == null && r == null) {
            r = n;
            i = n = undefined;
        } else if (r == null) {
            if (typeof n === "string") {
                r = i;
                i = undefined;
            } else {
                r = i;
                i = n;
                n = undefined;
            }
        }
        if (r === false) {
            r = Se;
        } else if (!r) {
            return e;
        }
        if (o === 1) {
            a = r;
            r = function(e) {
                E().off(e);
                return a.apply(this, arguments);
            };
            r.guid = a.guid || (a.guid = E.guid++);
        }
        return e.each(function() {
            E.event.add(this, t, r, i, n);
        });
    }
    E.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, a, s, l, u, f, c, d, h, p, g, m = G.get(t);
            if (!m) {
                return;
            }
            if (n.handler) {
                o = n;
                n = o.handler;
                r = o.selector;
            }
            if (r) {
                E.find.matchesSelector(we, r);
            }
            if (!n.guid) {
                n.guid = E.guid++;
            }
            if (!(l = m.events)) {
                l = m.events = {};
            }
            if (!(a = m.handle)) {
                a = m.handle = function(e) {
                    return typeof E !== "undefined" && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : undefined;
                };
            }
            e = (e || "").match(P) || [ "" ];
            u = e.length;
            while (u--) {
                s = ke.exec(e[u]) || [];
                h = g = s[1];
                p = (s[2] || "").split(".").sort();
                if (!h) {
                    continue;
                }
                c = E.event.special[h] || {};
                h = (r ? c.delegateType : c.bindType) || h;
                c = E.event.special[h] || {};
                f = E.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && E.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o);
                if (!(d = l[h])) {
                    d = l[h] = [];
                    d.delegateCount = 0;
                    if (!c.setup || c.setup.call(t, i, p, a) === false) {
                        if (t.addEventListener) {
                            t.addEventListener(h, a);
                        }
                    }
                }
                if (c.add) {
                    c.add.call(t, f);
                    if (!f.handler.guid) {
                        f.handler.guid = n.guid;
                    }
                }
                if (r) {
                    d.splice(d.delegateCount++, 0, f);
                } else {
                    d.push(f);
                }
                E.event.global[h] = true;
            }
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, l, u, f, c, d, h, p, g, m = G.hasData(e) && G.get(e);
            if (!m || !(l = m.events)) {
                return;
            }
            t = (t || "").match(P) || [ "" ];
            u = t.length;
            while (u--) {
                s = ke.exec(t[u]) || [];
                h = g = s[1];
                p = (s[2] || "").split(".").sort();
                if (!h) {
                    for (h in l) {
                        E.event.remove(e, h + t[u], n, i, true);
                    }
                    continue;
                }
                c = E.event.special[h] || {};
                h = (i ? c.delegateType : c.bindType) || h;
                d = l[h] || [];
                s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)");
                a = o = d.length;
                while (o--) {
                    f = d[o];
                    if ((r || g === f.origType) && (!n || n.guid === f.guid) && (!s || s.test(f.namespace)) && (!i || i === f.selector || i === "**" && f.selector)) {
                        d.splice(o, 1);
                        if (f.selector) {
                            d.delegateCount--;
                        }
                        if (c.remove) {
                            c.remove.call(e, f);
                        }
                    }
                }
                if (a && !d.length) {
                    if (!c.teardown || c.teardown.call(e, p, m.handle) === false) {
                        E.removeEvent(e, h, m.handle);
                    }
                    delete l[h];
                }
            }
            if (E.isEmptyObject(l)) {
                G.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t = E.event.fix(e);
            var n, i, r, o, a, s, l = new Array(arguments.length), u = (G.get(this, "events") || {})[t.type] || [], f = E.event.special[t.type] || {};
            l[0] = t;
            for (n = 1; n < arguments.length; n++) {
                l[n] = arguments[n];
            }
            t.delegateTarget = this;
            if (f.preDispatch && f.preDispatch.call(this, t) === false) {
                return;
            }
            s = E.event.handlers.call(this, t, u);
            n = 0;
            while ((o = s[n++]) && !t.isPropagationStopped()) {
                t.currentTarget = o.elem;
                i = 0;
                while ((a = o.handlers[i++]) && !t.isImmediatePropagationStopped()) {
                    if (!t.rnamespace || t.rnamespace.test(a.namespace)) {
                        t.handleObj = a;
                        t.data = a.data;
                        r = ((E.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, l);
                        if (r !== undefined) {
                            if ((t.result = r) === false) {
                                t.preventDefault();
                                t.stopPropagation();
                            }
                        }
                    }
                }
            }
            if (f.postDispatch) {
                f.postDispatch.call(this, t);
            }
            return t.result;
        },
        handlers: function(e, t) {
            var n, i, r, o, a, s = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !(e.type === "click" && e.button >= 1)) {
                for (;u !== this; u = u.parentNode || this) {
                    if (u.nodeType === 1 && !(e.type === "click" && u.disabled === true)) {
                        o = [];
                        a = {};
                        for (n = 0; n < l; n++) {
                            i = t[n];
                            r = i.selector + " ";
                            if (a[r] === undefined) {
                                a[r] = i.needsContext ? E(r, this).index(u) > -1 : E.find(r, this, null, [ u ]).length;
                            }
                            if (a[r]) {
                                o.push(i);
                            }
                        }
                        if (o.length) {
                            s.push({
                                elem: u,
                                handlers: o
                            });
                        }
                    }
                }
            }
            u = this;
            if (l < t.length) {
                s.push({
                    elem: u,
                    handlers: t.slice(l)
                });
            }
            return s;
        },
        addProp: function(t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: true,
                configurable: true,
                get: y(e) ? function() {
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
            return e[E.expando] ? e : new E.Event(e);
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function() {
                    if (this !== Ae() && this.focus) {
                        this.focus();
                        return false;
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Ae() && this.blur) {
                        this.blur();
                        return false;
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (this.type === "checkbox" && this.click && L(this, "input")) {
                        this.click();
                        return false;
                    }
                },
                _default: function(e) {
                    return L(e.target, "a");
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
    E.removeEvent = function(e, t, n) {
        if (e.removeEventListener) {
            e.removeEventListener(t, n);
        }
    };
    E.Event = function(e, t) {
        if (!(this instanceof E.Event)) {
            return new E.Event(e, t);
        }
        if (e && e.type) {
            this.originalEvent = e;
            this.type = e.type;
            this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === false ? Ee : Se;
            this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target;
            this.currentTarget = e.currentTarget;
            this.relatedTarget = e.relatedTarget;
        } else {
            this.type = e;
        }
        if (t) {
            E.extend(this, t);
        }
        this.timeStamp = e && e.timeStamp || Date.now();
        this[E.expando] = true;
    };
    E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: false,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee;
            if (e && !this.isSimulated) {
                e.preventDefault();
            }
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee;
            if (e && !this.isSimulated) {
                e.stopPropagation();
            }
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee;
            if (e && !this.isSimulated) {
                e.stopImmediatePropagation();
            }
            this.stopPropagation();
        }
    };
    E.each({
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
            if (e.which == null && Ce.test(e.type)) {
                return e.charCode != null ? e.charCode : e.keyCode;
            }
            if (!e.which && t !== undefined && Te.test(e.type)) {
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
    }, E.event.addProp);
    E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        E.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = this, i = e.relatedTarget, r = e.handleObj;
                if (!i || i !== n && !E.contains(n, i)) {
                    e.type = r.origType;
                    t = r.handler.apply(this, arguments);
                    e.type = o;
                }
                return t;
            }
        };
    });
    E.fn.extend({
        on: function(e, t, n, i) {
            return Le(this, e, t, n, i);
        },
        one: function(e, t, n, i) {
            return Le(this, e, t, n, i, 1);
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) {
                i = e.handleObj;
                E(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler);
                return this;
            }
            if (typeof e === "object") {
                for (r in e) {
                    this.off(r, t, e[r]);
                }
                return this;
            }
            if (t === false || typeof t === "function") {
                n = t;
                t = undefined;
            }
            if (n === false) {
                n = Se;
            }
            return this.each(function() {
                E.event.remove(this, e, n, t);
            });
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, De = /<script|<style|<link/i, Ne = /checked\s*(?:[^=]|=\s*.checked.)/i, qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function He(e, t) {
        if (L(e, "table") && L(t.nodeType !== 11 ? t : t.firstChild, "tr")) {
            return E(e).children("tbody")[0] || e;
        }
        return e;
    }
    function Oe(e) {
        e.type = (e.getAttribute("type") !== null) + "/" + e.type;
        return e;
    }
    function Re(e) {
        if ((e.type || "").slice(0, 5) === "true/") {
            e.type = e.type.slice(5);
        } else {
            e.removeAttribute("type");
        }
        return e;
    }
    function Me(e, t) {
        var n, i, r, o, a, s, l, u;
        if (t.nodeType !== 1) {
            return;
        }
        if (G.hasData(e)) {
            o = G.access(e);
            a = G.set(t, o);
            u = o.events;
            if (u) {
                delete a.handle;
                a.events = {};
                for (r in u) {
                    for (n = 0, i = u[r].length; n < i; n++) {
                        E.event.add(t, r, u[r][n]);
                    }
                }
            }
        }
        if (J.hasData(e)) {
            s = J.access(e);
            l = E.extend({}, s);
            J.set(t, l);
        }
    }
    function Pe(e, t) {
        var n = t.nodeName.toLowerCase();
        if (n === "input" && he.test(e.type)) {
            t.checked = e.checked;
        } else if (n === "input" || n === "textarea") {
            t.defaultValue = e.defaultValue;
        }
    }
    function Ie(n, i, r, o) {
        i = g.apply([], i);
        var e, t, a, s, l, u, f = 0, c = n.length, d = c - 1, h = i[0], p = y(h);
        if (p || c > 1 && typeof h === "string" && !v.checkClone && Ne.test(h)) {
            return n.each(function(e) {
                var t = n.eq(e);
                if (p) {
                    i[0] = h.call(this, e, t.html());
                }
                Ie(t, i, r, o);
            });
        }
        if (c) {
            e = xe(i, n[0].ownerDocument, false, n, o);
            t = e.firstChild;
            if (e.childNodes.length === 1) {
                e = t;
            }
            if (t || o) {
                a = E.map(ve(e, "script"), Oe);
                s = a.length;
                for (;f < c; f++) {
                    l = e;
                    if (f !== d) {
                        l = E.clone(l, true, true);
                        if (s) {
                            E.merge(a, ve(l, "script"));
                        }
                    }
                    r.call(n[f], l, f);
                }
                if (s) {
                    u = a[a.length - 1].ownerDocument;
                    E.map(a, Re);
                    for (f = 0; f < s; f++) {
                        l = a[f];
                        if (ge.test(l.type || "") && !G.access(l, "globalEval") && E.contains(u, l)) {
                            if (l.src && (l.type || "").toLowerCase() !== "module") {
                                if (E._evalUrl) {
                                    E._evalUrl(l.src);
                                }
                            } else {
                                x(l.textContent.replace(qe, ""), u, l);
                            }
                        }
                    }
                }
            }
        }
        return n;
    }
    function We(e, t, n) {
        var i, r = t ? E.filter(t, e) : e, o = 0;
        for (;(i = r[o]) != null; o++) {
            if (!n && i.nodeType === 1) {
                E.cleanData(ve(i));
            }
            if (i.parentNode) {
                if (n && E.contains(i.ownerDocument, i)) {
                    ye(ve(i, "script"));
                }
                i.parentNode.removeChild(i);
            }
        }
        return e;
    }
    E.extend({
        htmlPrefilter: function(e) {
            return e.replace(je, "<$1></$2>");
        },
        clone: function(e, t, n) {
            var i, r, o, a, s = e.cloneNode(true), l = E.contains(e.ownerDocument, e);
            if (!v.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !E.isXMLDoc(e)) {
                a = ve(s);
                o = ve(e);
                for (i = 0, r = o.length; i < r; i++) {
                    Pe(o[i], a[i]);
                }
            }
            if (t) {
                if (n) {
                    o = o || ve(e);
                    a = a || ve(s);
                    for (i = 0, r = o.length; i < r; i++) {
                        Me(o[i], a[i]);
                    }
                } else {
                    Me(e, s);
                }
            }
            a = ve(s, "script");
            if (a.length > 0) {
                ye(a, !l && ve(e, "script"));
            }
            return s;
        },
        cleanData: function(e) {
            var t, n, i, r = E.event.special, o = 0;
            for (;(n = e[o]) !== undefined; o++) {
                if (K(n)) {
                    if (t = n[G.expando]) {
                        if (t.events) {
                            for (i in t.events) {
                                if (r[i]) {
                                    E.event.remove(n, i);
                                } else {
                                    E.removeEvent(n, i, t.handle);
                                }
                            }
                        }
                        n[G.expando] = undefined;
                    }
                    if (n[J.expando]) {
                        n[J.expando] = undefined;
                    }
                }
            }
        }
    });
    E.fn.extend({
        detach: function(e) {
            return We(this, e, true);
        },
        remove: function(e) {
            return We(this, e);
        },
        text: function(e) {
            return V(this, function(e) {
                return e === undefined ? E.text(this) : this.empty().each(function() {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        this.textContent = e;
                    }
                });
            }, null, e, arguments.length);
        },
        append: function() {
            return Ie(this, arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = He(this, e);
                    t.appendChild(e);
                }
            });
        },
        prepend: function() {
            return Ie(this, arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = He(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return Ie(this, arguments, function(e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this);
                }
            });
        },
        after: function() {
            return Ie(this, arguments, function(e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this.nextSibling);
                }
            });
        },
        empty: function() {
            var e, t = 0;
            for (;(e = this[t]) != null; t++) {
                if (e.nodeType === 1) {
                    E.cleanData(ve(e, false));
                    e.textContent = "";
                }
            }
            return this;
        },
        clone: function(e, t) {
            e = e == null ? false : e;
            t = t == null ? e : t;
            return this.map(function() {
                return E.clone(this, e, t);
            });
        },
        html: function(e) {
            return V(this, function(e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (e === undefined && t.nodeType === 1) {
                    return t.innerHTML;
                }
                if (typeof e === "string" && !De.test(e) && !me[(pe.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (;n < i; n++) {
                            t = this[n] || {};
                            if (t.nodeType === 1) {
                                E.cleanData(ve(t, false));
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
            return Ie(this, arguments, function(e) {
                var t = this.parentNode;
                if (E.inArray(this, n) < 0) {
                    E.cleanData(ve(this));
                    if (t) {
                        t.replaceChild(e, this);
                    }
                }
            }, n);
        }
    });
    E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        E.fn[e] = function(e) {
            var t, n = [], i = E(e), r = i.length - 1, o = 0;
            for (;o <= r; o++) {
                t = o === r ? this : this.clone(true);
                E(i[o])[a](t);
                l.apply(n, t.get());
            }
            return this.pushStack(n);
        };
    });
    var Fe = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i");
    var ze = function(e) {
        var t = e.ownerDocument.defaultView;
        if (!t || !t.opener) {
            t = T;
        }
        return t.getComputedStyle(e);
    };
    var Be = new RegExp(ae.join("|"), "i");
    (function() {
        function e() {
            if (!l) {
                return;
            }
            s.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
            l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
            we.appendChild(s).appendChild(l);
            var e = T.getComputedStyle(l);
            n = e.top !== "1%";
            a = t(e.marginLeft) === 12;
            l.style.right = "60%";
            o = t(e.right) === 36;
            i = t(e.width) === 36;
            l.style.position = "absolute";
            r = l.offsetWidth === 36 || "absolute";
            we.removeChild(s);
            l = null;
        }
        function t(e) {
            return Math.round(parseFloat(e));
        }
        var n, i, r, o, a, s = k.createElement("div"), l = k.createElement("div");
        if (!l.style) {
            return;
        }
        l.style.backgroundClip = "content-box";
        l.cloneNode(true).style.backgroundClip = "";
        v.clearCloneStyle = l.style.backgroundClip === "content-box";
        E.extend(v, {
            boxSizingReliable: function() {
                e();
                return i;
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
                return a;
            },
            scrollboxSize: function() {
                e();
                return r;
            }
        });
    })();
    function _e(e, t, n) {
        var i, r, o, a, s = e.style;
        n = n || ze(e);
        if (n) {
            a = n.getPropertyValue(t) || n[t];
            if (a === "" && !E.contains(e.ownerDocument, e)) {
                a = E.style(e, t);
            }
            if (!v.pixelBoxStyles() && Fe.test(a) && Be.test(t)) {
                i = s.width;
                r = s.minWidth;
                o = s.maxWidth;
                s.minWidth = s.maxWidth = s.width = a;
                a = n.width;
                s.width = i;
                s.minWidth = r;
                s.maxWidth = o;
            }
        }
        return a !== undefined ? a + "" : a;
    }
    function $e(e, t) {
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
    var Ve = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ue = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ye = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Ze = [ "Webkit", "Moz", "ms" ], Ke = k.createElement("div").style;
    function Qe(e) {
        if (e in Ke) {
            return e;
        }
        var t = e[0].toUpperCase() + e.slice(1), n = Ze.length;
        while (n--) {
            e = Ze[n] + t;
            if (e in Ke) {
                return e;
            }
        }
    }
    function Ge(e) {
        var t = E.cssProps[e];
        if (!t) {
            t = E.cssProps[e] = Qe(e) || e;
        }
        return t;
    }
    function Je(e, t, n) {
        var i = oe.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function et(e, t, n, i, r, o) {
        var a = t === "width" ? 1 : 0, s = 0, l = 0;
        if (n === (i ? "border" : "content")) {
            return 0;
        }
        for (;a < 4; a += 2) {
            if (n === "margin") {
                l += E.css(e, n + ae[a], true, r);
            }
            if (!i) {
                l += E.css(e, "padding" + ae[a], true, r);
                if (n !== "padding") {
                    l += E.css(e, "border" + ae[a] + "Width", true, r);
                } else {
                    s += E.css(e, "border" + ae[a] + "Width", true, r);
                }
            } else {
                if (n === "content") {
                    l -= E.css(e, "padding" + ae[a], true, r);
                }
                if (n !== "margin") {
                    l -= E.css(e, "border" + ae[a] + "Width", true, r);
                }
            }
        }
        if (!i && o >= 0) {
            l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5));
        }
        return l;
    }
    function tt(e, t, n) {
        var i = ze(e), r = _e(e, t, i), o = E.css(e, "boxSizing", false, i) === "border-box", a = o;
        if (Fe.test(r)) {
            if (!n) {
                return r;
            }
            r = "auto";
        }
        a = a && (v.boxSizingReliable() || r === e.style[t]);
        if (r === "auto" || !parseFloat(r) && E.css(e, "display", false, i) === "inline") {
            r = e["offset" + t[0].toUpperCase() + t.slice(1)];
            a = true;
        }
        r = parseFloat(r) || 0;
        return r + et(e, t, n || (o ? "border" : "content"), a, i, r) + "px";
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = _e(e, "opacity");
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
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) {
                return;
            }
            var r, o, a, s = Z(t), l = Xe.test(t), u = e.style;
            if (!l) {
                t = Ge(s);
            }
            a = E.cssHooks[t] || E.cssHooks[s];
            if (n !== undefined) {
                o = typeof n;
                if (o === "string" && (r = oe.exec(n)) && r[1]) {
                    n = ue(e, t, r);
                    o = "number";
                }
                if (n == null || n !== n) {
                    return;
                }
                if (o === "number") {
                    n += r && r[3] || (E.cssNumber[s] ? "" : "px");
                }
                if (!v.clearCloneStyle && n === "" && t.indexOf("background") === 0) {
                    u[t] = "inherit";
                }
                if (!a || !("set" in a) || (n = a.set(e, n, i)) !== undefined) {
                    if (l) {
                        u.setProperty(t, n);
                    } else {
                        u[t] = n;
                    }
                }
            } else {
                if (a && "get" in a && (r = a.get(e, false, i)) !== undefined) {
                    return r;
                }
                return u[t];
            }
        },
        css: function(e, t, n, i) {
            var r, o, a, s = Z(t), l = Xe.test(t);
            if (!l) {
                t = Ge(s);
            }
            a = E.cssHooks[t] || E.cssHooks[s];
            if (a && "get" in a) {
                r = a.get(e, true, n);
            }
            if (r === undefined) {
                r = _e(e, t, i);
            }
            if (r === "normal" && t in Ye) {
                r = Ye[t];
            }
            if (n === "" || n) {
                o = parseFloat(r);
                return n === true || isFinite(o) ? o || 0 : r;
            }
            return r;
        }
    });
    E.each([ "height", "width" ], function(e, s) {
        E.cssHooks[s] = {
            get: function(e, t, n) {
                if (t) {
                    return Ve.test(E.css(e, "display")) && (!e.getClientRects().length || !e.getBoundingClientRect().width) ? le(e, Ue, function() {
                        return tt(e, s, n);
                    }) : tt(e, s, n);
                }
            },
            set: function(e, t, n) {
                var i, r = ze(e), o = E.css(e, "boxSizing", false, r) === "border-box", a = n && et(e, s, n, o, r);
                if (o && v.scrollboxSize() === r.position) {
                    a -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(r[s]) - et(e, s, "border", false, r) - .5);
                }
                if (a && (i = oe.exec(t)) && (i[3] || "px") !== "px") {
                    e.style[s] = t;
                    t = E.css(e, s);
                }
                return Je(e, t, a);
            }
        };
    });
    E.cssHooks.marginLeft = $e(v.reliableMarginLeft, function(e, t) {
        if (t) {
            return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left;
            })) + "px";
        }
    });
    E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, o) {
        E.cssHooks[r + o] = {
            expand: function(e) {
                var t = 0, n = {}, i = typeof e === "string" ? e.split(" ") : [ e ];
                for (;t < 4; t++) {
                    n[r + ae[t] + o] = i[t] || i[t - 2] || i[0];
                }
                return n;
            }
        };
        if (r !== "margin") {
            E.cssHooks[r + o].set = Je;
        }
    });
    E.fn.extend({
        css: function(e, t) {
            return V(this, function(e, t, n) {
                var i, r, o = {}, a = 0;
                if (Array.isArray(t)) {
                    i = ze(e);
                    r = t.length;
                    for (;a < r; a++) {
                        o[t[a]] = E.css(e, t[a], false, i);
                    }
                    return o;
                }
                return n !== undefined ? E.style(e, t, n) : E.css(e, t);
            }, e, t, arguments.length > 1);
        }
    });
    function nt(e, t, n, i, r) {
        return new nt.prototype.init(e, t, n, i, r);
    }
    E.Tween = nt;
    nt.prototype = {
        constructor: nt,
        init: function(e, t, n, i, r, o) {
            this.elem = e;
            this.prop = n;
            this.easing = r || E.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = i;
            this.unit = o || (E.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = nt.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration);
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
                nt.propHooks._default.set(this);
            }
            return this;
        }
    };
    nt.prototype.init.prototype = nt.prototype;
    nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                if (e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null) {
                    return e.elem[e.prop];
                }
                t = E.css(e.elem, e.prop, "");
                return !t || t === "auto" ? 0 : t;
            },
            set: function(e) {
                if (E.fx.step[e.prop]) {
                    E.fx.step[e.prop](e);
                } else if (e.elem.nodeType === 1 && (e.elem.style[E.cssProps[e.prop]] != null || E.cssHooks[e.prop])) {
                    E.style(e.elem, e.prop, e.now + e.unit);
                } else {
                    e.elem[e.prop] = e.now;
                }
            }
        }
    };
    nt.propHooks.scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            if (e.elem.nodeType && e.elem.parentNode) {
                e.elem[e.prop] = e.now;
            }
        }
    };
    E.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
    };
    E.fx = nt.prototype.init;
    E.fx.step = {};
    var it, rt, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
    function st() {
        if (rt) {
            if (k.hidden === false && T.requestAnimationFrame) {
                T.requestAnimationFrame(st);
            } else {
                T.setTimeout(st, E.fx.interval);
            }
            E.fx.tick();
        }
    }
    function lt() {
        T.setTimeout(function() {
            it = undefined;
        });
        return it = Date.now();
    }
    function ut(e, t) {
        var n, i = 0, r = {
            height: e
        };
        t = t ? 1 : 0;
        for (;i < 4; i += 2 - t) {
            n = ae[i];
            r["margin" + n] = r["padding" + n] = e;
        }
        if (t) {
            r.opacity = r.width = e;
        }
        return r;
    }
    function ft(e, t, n) {
        var i, r = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), o = 0, a = r.length;
        for (;o < a; o++) {
            if (i = r[o].call(n, t, e)) {
                return i;
            }
        }
    }
    function ct(e, t, n) {
        var i, r, o, a, s, l, u, f, c = "width" in t || "height" in t, d = this, h = {}, p = e.style, g = e.nodeType && se(e), m = G.get(e, "fxshow");
        if (!n.queue) {
            a = E._queueHooks(e, "fx");
            if (a.unqueued == null) {
                a.unqueued = 0;
                s = a.empty.fire;
                a.empty.fire = function() {
                    if (!a.unqueued) {
                        s();
                    }
                };
            }
            a.unqueued++;
            d.always(function() {
                d.always(function() {
                    a.unqueued--;
                    if (!E.queue(e, "fx").length) {
                        a.empty.fire();
                    }
                });
            });
        }
        for (i in t) {
            r = t[i];
            if (ot.test(r)) {
                delete t[i];
                o = o || r === "toggle";
                if (r === (g ? "hide" : "show")) {
                    if (r === "show" && m && m[i] !== undefined) {
                        g = true;
                    } else {
                        continue;
                    }
                }
                h[i] = m && m[i] || E.style(e, i);
            }
        }
        l = !E.isEmptyObject(t);
        if (!l && E.isEmptyObject(h)) {
            return;
        }
        if (c && e.nodeType === 1) {
            n.overflow = [ p.overflow, p.overflowX, p.overflowY ];
            u = m && m.display;
            if (u == null) {
                u = G.get(e, "display");
            }
            f = E.css(e, "display");
            if (f === "none") {
                if (u) {
                    f = u;
                } else {
                    de([ e ], true);
                    u = e.style.display || u;
                    f = E.css(e, "display");
                    de([ e ]);
                }
            }
            if (f === "inline" || f === "inline-block" && u != null) {
                if (E.css(e, "float") === "none") {
                    if (!l) {
                        d.done(function() {
                            p.display = u;
                        });
                        if (u == null) {
                            f = p.display;
                            u = f === "none" ? "" : f;
                        }
                    }
                    p.display = "inline-block";
                }
            }
        }
        if (n.overflow) {
            p.overflow = "hidden";
            d.always(function() {
                p.overflow = n.overflow[0];
                p.overflowX = n.overflow[1];
                p.overflowY = n.overflow[2];
            });
        }
        l = false;
        for (i in h) {
            if (!l) {
                if (m) {
                    if ("hidden" in m) {
                        g = m.hidden;
                    }
                } else {
                    m = G.access(e, "fxshow", {
                        display: u
                    });
                }
                if (o) {
                    m.hidden = !g;
                }
                if (g) {
                    de([ e ], true);
                }
                d.done(function() {
                    if (!g) {
                        de([ e ]);
                    }
                    G.remove(e, "fxshow");
                    for (i in h) {
                        E.style(e, i, h[i]);
                    }
                });
            }
            l = ft(g ? m[i] : 0, i, d);
            if (!(i in m)) {
                m[i] = l.start;
                if (g) {
                    l.end = l.start;
                    l.start = 0;
                }
            }
        }
    }
    function dt(e, t) {
        var n, i, r, o, a;
        for (n in e) {
            i = Z(n);
            r = t[i];
            o = e[n];
            if (Array.isArray(o)) {
                r = o[1];
                o = e[n] = o[0];
            }
            if (n !== i) {
                e[i] = o;
                delete e[n];
            }
            a = E.cssHooks[i];
            if (a && "expand" in a) {
                o = a.expand(o);
                delete e[i];
                for (n in o) {
                    if (!(n in e)) {
                        e[n] = o[n];
                        t[n] = r;
                    }
                }
            } else {
                t[i] = r;
            }
        }
    }
    function ht(a, e, t) {
        var n, s, i = 0, r = ht.prefilters.length, l = E.Deferred().always(function() {
            delete o.elem;
        }), o = function() {
            if (s) {
                return false;
            }
            var e = it || lt(), t = Math.max(0, u.startTime + u.duration - e), n = t / u.duration || 0, i = 1 - n, r = 0, o = u.tweens.length;
            for (;r < o; r++) {
                u.tweens[r].run(i);
            }
            l.notifyWith(a, [ u, i, t ]);
            if (i < 1 && o) {
                return t;
            }
            if (!o) {
                l.notifyWith(a, [ u, 1, 0 ]);
            }
            l.resolveWith(a, [ u ]);
            return false;
        }, u = l.promise({
            elem: a,
            props: E.extend({}, e),
            opts: E.extend(true, {
                specialEasing: {},
                easing: E.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: it || lt(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = E.Tween(a, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                u.tweens.push(n);
                return n;
            },
            stop: function(e) {
                var t = 0, n = e ? u.tweens.length : 0;
                if (s) {
                    return this;
                }
                s = true;
                for (;t < n; t++) {
                    u.tweens[t].run(1);
                }
                if (e) {
                    l.notifyWith(a, [ u, 1, 0 ]);
                    l.resolveWith(a, [ u, e ]);
                } else {
                    l.rejectWith(a, [ u, e ]);
                }
                return this;
            }
        }), f = u.props;
        dt(f, u.opts.specialEasing);
        for (;i < r; i++) {
            n = ht.prefilters[i].call(u, a, f, u.opts);
            if (n) {
                if (y(n.stop)) {
                    E._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n);
                }
                return n;
            }
        }
        E.map(f, ft, u);
        if (y(u.opts.start)) {
            u.opts.start.call(a, u);
        }
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
        E.fx.timer(E.extend(o, {
            elem: a,
            anim: u,
            queue: u.opts.queue
        }));
        return u;
    }
    E.Animation = E.extend(ht, {
        tweeners: {
            "*": [ function(e, t) {
                var n = this.createTween(e, t);
                ue(n.elem, e, oe.exec(t), n);
                return n;
            } ]
        },
        tweener: function(e, t) {
            if (y(e)) {
                t = e;
                e = [ "*" ];
            } else {
                e = e.match(P);
            }
            var n, i = 0, r = e.length;
            for (;i < r; i++) {
                n = e[i];
                ht.tweeners[n] = ht.tweeners[n] || [];
                ht.tweeners[n].unshift(t);
            }
        },
        prefilters: [ ct ],
        prefilter: function(e, t) {
            if (t) {
                ht.prefilters.unshift(e);
            } else {
                ht.prefilters.push(e);
            }
        }
    });
    E.speed = function(e, t, n) {
        var i = e && typeof e === "object" ? E.extend({}, e) : {
            complete: n || !n && t || y(e) && e,
            duration: e,
            easing: n && t || t && !y(t) && t
        };
        if (E.fx.off) {
            i.duration = 0;
        } else {
            if (typeof i.duration !== "number") {
                if (i.duration in E.fx.speeds) {
                    i.duration = E.fx.speeds[i.duration];
                } else {
                    i.duration = E.fx.speeds._default;
                }
            }
        }
        if (i.queue == null || i.queue === true) {
            i.queue = "fx";
        }
        i.old = i.complete;
        i.complete = function() {
            if (y(i.old)) {
                i.old.call(this);
            }
            if (i.queue) {
                E.dequeue(this, i.queue);
            }
        };
        return i;
    };
    E.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i);
        },
        animate: function(t, e, n, i) {
            var r = E.isEmptyObject(t), o = E.speed(e, n, i), a = function() {
                var e = ht(this, E.extend({}, t), o);
                if (r || G.get(this, "finish")) {
                    e.stop(true);
                }
            };
            a.finish = a;
            return r || o.queue === false ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function(r, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop;
                t(o);
            };
            if (typeof r !== "string") {
                o = e;
                e = r;
                r = undefined;
            }
            if (e && r !== false) {
                this.queue(r || "fx", []);
            }
            return this.each(function() {
                var e = true, t = r != null && r + "queueHooks", n = E.timers, i = G.get(this);
                if (t) {
                    if (i[t] && i[t].stop) {
                        a(i[t]);
                    }
                } else {
                    for (t in i) {
                        if (i[t] && i[t].stop && at.test(t)) {
                            a(i[t]);
                        }
                    }
                }
                for (t = n.length; t--; ) {
                    if (n[t].elem === this && (r == null || n[t].queue === r)) {
                        n[t].anim.stop(o);
                        e = false;
                        n.splice(t, 1);
                    }
                }
                if (e || !o) {
                    E.dequeue(this, r);
                }
            });
        },
        finish: function(a) {
            if (a !== false) {
                a = a || "fx";
            }
            return this.each(function() {
                var e, t = G.get(this), n = t[a + "queue"], i = t[a + "queueHooks"], r = E.timers, o = n ? n.length : 0;
                t.finish = true;
                E.queue(this, a, []);
                if (i && i.stop) {
                    i.stop.call(this, true);
                }
                for (e = r.length; e--; ) {
                    if (r[e].elem === this && r[e].queue === a) {
                        r[e].anim.stop(true);
                        r.splice(e, 1);
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
    E.each([ "toggle", "show", "hide" ], function(e, i) {
        var r = E.fn[i];
        E.fn[i] = function(e, t, n) {
            return e == null || typeof e === "boolean" ? r.apply(this, arguments) : this.animate(ut(i, true), e, t, n);
        };
    });
    E.each({
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        E.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n);
        };
    });
    E.timers = [];
    E.fx.tick = function() {
        var e, t = 0, n = E.timers;
        it = Date.now();
        for (;t < n.length; t++) {
            e = n[t];
            if (!e() && n[t] === e) {
                n.splice(t--, 1);
            }
        }
        if (!n.length) {
            E.fx.stop();
        }
        it = undefined;
    };
    E.fx.timer = function(e) {
        E.timers.push(e);
        E.fx.start();
    };
    E.fx.interval = 13;
    E.fx.start = function() {
        if (rt) {
            return;
        }
        rt = true;
        st();
    };
    E.fx.stop = function() {
        rt = null;
    };
    E.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    E.fn.delay = function(i, e) {
        i = E.fx ? E.fx.speeds[i] || i : i;
        e = e || "fx";
        return this.queue(e, function(e, t) {
            var n = T.setTimeout(e, i);
            t.stop = function() {
                T.clearTimeout(n);
            };
        });
    };
    (function() {
        var e = k.createElement("input"), t = k.createElement("select"), n = t.appendChild(k.createElement("option"));
        e.type = "checkbox";
        v.checkOn = e.value !== "";
        v.optSelected = n.selected;
        e = k.createElement("input");
        e.value = "t";
        e.type = "radio";
        v.radioValue = e.value === "t";
    })();
    var pt, gt = E.expr.attrHandle;
    E.fn.extend({
        attr: function(e, t) {
            return V(this, E.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                E.removeAttr(this, e);
            });
        }
    });
    E.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (o === 3 || o === 8 || o === 2) {
                return;
            }
            if (typeof e.getAttribute === "undefined") {
                return E.prop(e, t, n);
            }
            if (o !== 1 || !E.isXMLDoc(e)) {
                r = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? pt : undefined);
            }
            if (n !== undefined) {
                if (n === null) {
                    E.removeAttr(e, t);
                    return;
                }
                if (r && "set" in r && (i = r.set(e, n, t)) !== undefined) {
                    return i;
                }
                e.setAttribute(t, n + "");
                return n;
            }
            if (r && "get" in r && (i = r.get(e, t)) !== null) {
                return i;
            }
            i = E.find.attr(e, t);
            return i == null ? undefined : i;
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && t === "radio" && L(e, "input")) {
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
            var n, i = 0, r = t && t.match(P);
            if (r && e.nodeType === 1) {
                while (n = r[i++]) {
                    e.removeAttribute(n);
                }
            }
        }
    });
    pt = {
        set: function(e, t, n) {
            if (t === false) {
                E.removeAttr(e, n);
            } else {
                e.setAttribute(n, n);
            }
            return n;
        }
    };
    E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = gt[t] || E.find.attr;
        gt[t] = function(e, t, n) {
            var i, r, o = t.toLowerCase();
            if (!n) {
                r = gt[o];
                gt[o] = i;
                i = a(e, t, n) != null ? o : null;
                gt[o] = r;
            }
            return i;
        };
    });
    var mt = /^(?:input|select|textarea|button)$/i, vt = /^(?:a|area)$/i;
    E.fn.extend({
        prop: function(e, t) {
            return V(this, E.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[E.propFix[e] || e];
            });
        }
    });
    E.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (o === 3 || o === 8 || o === 2) {
                return;
            }
            if (o !== 1 || !E.isXMLDoc(e)) {
                t = E.propFix[t] || t;
                r = E.propHooks[t];
            }
            if (n !== undefined) {
                if (r && "set" in r && (i = r.set(e, n, t)) !== undefined) {
                    return i;
                }
                return e[t] = n;
            }
            if (r && "get" in r && (i = r.get(e, t)) !== null) {
                return i;
            }
            return e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = E.find.attr(e, "tabindex");
                    if (t) {
                        return parseInt(t, 10);
                    }
                    if (mt.test(e.nodeName) || vt.test(e.nodeName) && e.href) {
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
    if (!v.optSelected) {
        E.propHooks.selected = {
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
    E.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        E.propFix[this.toLowerCase()] = this;
    });
    function yt(e) {
        var t = e.match(P) || [];
        return t.join(" ");
    }
    function bt(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }
    function xt(e) {
        if (Array.isArray(e)) {
            return e;
        }
        if (typeof e === "string") {
            return e.match(P) || [];
        }
        return [];
    }
    E.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, a, s, l = 0;
            if (y(t)) {
                return this.each(function(e) {
                    E(this).addClass(t.call(this, e, bt(this)));
                });
            }
            e = xt(t);
            if (e.length) {
                while (n = this[l++]) {
                    r = bt(n);
                    i = n.nodeType === 1 && " " + yt(r) + " ";
                    if (i) {
                        a = 0;
                        while (o = e[a++]) {
                            if (i.indexOf(" " + o + " ") < 0) {
                                i += o + " ";
                            }
                        }
                        s = yt(i);
                        if (r !== s) {
                            n.setAttribute("class", s);
                        }
                    }
                }
            }
            return this;
        },
        removeClass: function(t) {
            var e, n, i, r, o, a, s, l = 0;
            if (y(t)) {
                return this.each(function(e) {
                    E(this).removeClass(t.call(this, e, bt(this)));
                });
            }
            if (!arguments.length) {
                return this.attr("class", "");
            }
            e = xt(t);
            if (e.length) {
                while (n = this[l++]) {
                    r = bt(n);
                    i = n.nodeType === 1 && " " + yt(r) + " ";
                    if (i) {
                        a = 0;
                        while (o = e[a++]) {
                            while (i.indexOf(" " + o + " ") > -1) {
                                i = i.replace(" " + o + " ", " ");
                            }
                        }
                        s = yt(i);
                        if (r !== s) {
                            n.setAttribute("class", s);
                        }
                    }
                }
            }
            return this;
        },
        toggleClass: function(r, t) {
            var o = typeof r, a = o === "string" || Array.isArray(r);
            if (typeof t === "boolean" && a) {
                return t ? this.addClass(r) : this.removeClass(r);
            }
            if (y(r)) {
                return this.each(function(e) {
                    E(this).toggleClass(r.call(this, e, bt(this), t), t);
                });
            }
            return this.each(function() {
                var e, t, n, i;
                if (a) {
                    t = 0;
                    n = E(this);
                    i = xt(r);
                    while (e = i[t++]) {
                        if (n.hasClass(e)) {
                            n.removeClass(e);
                        } else {
                            n.addClass(e);
                        }
                    }
                } else if (r === undefined || o === "boolean") {
                    e = bt(this);
                    if (e) {
                        G.set(this, "__className__", e);
                    }
                    if (this.setAttribute) {
                        this.setAttribute("class", e || r === false ? "" : G.get(this, "__className__") || "");
                    }
                }
            });
        },
        hasClass: function(e) {
            var t, n, i = 0;
            t = " " + e + " ";
            while (n = this[i++]) {
                if (n.nodeType === 1 && (" " + yt(bt(n)) + " ").indexOf(t) > -1) {
                    return true;
                }
            }
            return false;
        }
    });
    var wt = /\r/g;
    E.fn.extend({
        val: function(n) {
            var i, e, r, t = this[0];
            if (!arguments.length) {
                if (t) {
                    i = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()];
                    if (i && "get" in i && (e = i.get(t, "value")) !== undefined) {
                        return e;
                    }
                    e = t.value;
                    if (typeof e === "string") {
                        return e.replace(wt, "");
                    }
                    return e == null ? "" : e;
                }
                return;
            }
            r = y(n);
            return this.each(function(e) {
                var t;
                if (this.nodeType !== 1) {
                    return;
                }
                if (r) {
                    t = n.call(this, e, E(this).val());
                } else {
                    t = n;
                }
                if (t == null) {
                    t = "";
                } else if (typeof t === "number") {
                    t += "";
                } else if (Array.isArray(t)) {
                    t = E.map(t, function(e) {
                        return e == null ? "" : e + "";
                    });
                }
                i = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()];
                if (!i || !("set" in i) || i.set(this, t, "value") === undefined) {
                    this.value = t;
                }
            });
        }
    });
    E.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = E.find.attr(e, "value");
                    return t != null ? t : yt(E.text(e));
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options, o = e.selectedIndex, a = e.type === "select-one", s = a ? null : [], l = a ? o + 1 : r.length;
                    if (o < 0) {
                        i = l;
                    } else {
                        i = a ? o : 0;
                    }
                    for (;i < l; i++) {
                        n = r[i];
                        if ((n.selected || i === o) && !n.disabled && (!n.parentNode.disabled || !L(n.parentNode, "optgroup"))) {
                            t = E(n).val();
                            if (a) {
                                return t;
                            }
                            s.push(t);
                        }
                    }
                    return s;
                },
                set: function(e, t) {
                    var n, i, r = e.options, o = E.makeArray(t), a = r.length;
                    while (a--) {
                        i = r[a];
                        if (i.selected = E.inArray(E.valHooks.option.get(i), o) > -1) {
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
    E.each([ "radio", "checkbox" ], function() {
        E.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) {
                    return e.checked = E.inArray(E(e).val(), t) > -1;
                }
            }
        };
        if (!v.checkOn) {
            E.valHooks[this].get = function(e) {
                return e.getAttribute("value") === null ? "on" : e.value;
            };
        }
    });
    v.focusin = "onfocusin" in T;
    var Ct = /^(?:focusinfocus|focusoutblur)$/, Tt = function(e) {
        e.stopPropagation();
    };
    E.extend(E.event, {
        trigger: function(e, t, n, i) {
            var r, o, a, s, l, u, f, c, d = [ n || k ], h = m.call(e, "type") ? e.type : e, p = m.call(e, "namespace") ? e.namespace.split(".") : [];
            o = c = a = n = n || k;
            if (n.nodeType === 3 || n.nodeType === 8) {
                return;
            }
            if (Ct.test(h + E.event.triggered)) {
                return;
            }
            if (h.indexOf(".") > -1) {
                p = h.split(".");
                h = p.shift();
                p.sort();
            }
            l = h.indexOf(":") < 0 && "on" + h;
            e = e[E.expando] ? e : new E.Event(h, typeof e === "object" && e);
            e.isTrigger = i ? 2 : 3;
            e.namespace = p.join(".");
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            e.result = undefined;
            if (!e.target) {
                e.target = n;
            }
            t = t == null ? [ e ] : E.makeArray(t, [ e ]);
            f = E.event.special[h] || {};
            if (!i && f.trigger && f.trigger.apply(n, t) === false) {
                return;
            }
            if (!i && !f.noBubble && !b(n)) {
                s = f.delegateType || h;
                if (!Ct.test(s + h)) {
                    o = o.parentNode;
                }
                for (;o; o = o.parentNode) {
                    d.push(o);
                    a = o;
                }
                if (a === (n.ownerDocument || k)) {
                    d.push(a.defaultView || a.parentWindow || T);
                }
            }
            r = 0;
            while ((o = d[r++]) && !e.isPropagationStopped()) {
                c = o;
                e.type = r > 1 ? s : f.bindType || h;
                u = (G.get(o, "events") || {})[e.type] && G.get(o, "handle");
                if (u) {
                    u.apply(o, t);
                }
                u = l && o[l];
                if (u && u.apply && K(o)) {
                    e.result = u.apply(o, t);
                    if (e.result === false) {
                        e.preventDefault();
                    }
                }
            }
            e.type = h;
            if (!i && !e.isDefaultPrevented()) {
                if ((!f._default || f._default.apply(d.pop(), t) === false) && K(n)) {
                    if (l && y(n[h]) && !b(n)) {
                        a = n[l];
                        if (a) {
                            n[l] = null;
                        }
                        E.event.triggered = h;
                        if (e.isPropagationStopped()) {
                            c.addEventListener(h, Tt);
                        }
                        n[h]();
                        if (e.isPropagationStopped()) {
                            c.removeEventListener(h, Tt);
                        }
                        E.event.triggered = undefined;
                        if (a) {
                            n[l] = a;
                        }
                    }
                }
            }
            return e.result;
        },
        simulate: function(e, t, n) {
            var i = E.extend(new E.Event(), n, {
                type: e,
                isSimulated: true
            });
            E.event.trigger(i, null, t);
        }
    });
    E.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                E.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) {
                return E.event.trigger(e, t, n, true);
            }
        }
    });
    if (!v.focusin) {
        E.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, i) {
            var r = function(e) {
                E.event.simulate(i, e.target, E.event.fix(e));
            };
            E.event.special[i] = {
                setup: function() {
                    var e = this.ownerDocument || this, t = G.access(e, i);
                    if (!t) {
                        e.addEventListener(n, r, true);
                    }
                    G.access(e, i, (t || 0) + 1);
                },
                teardown: function() {
                    var e = this.ownerDocument || this, t = G.access(e, i) - 1;
                    if (!t) {
                        e.removeEventListener(n, r, true);
                        G.remove(e, i);
                    } else {
                        G.access(e, i, t);
                    }
                }
            };
        });
    }
    var kt = T.location;
    var Et = Date.now();
    var St = /\?/;
    E.parseXML = function(e) {
        var t;
        if (!e || typeof e !== "string") {
            return null;
        }
        try {
            t = new T.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
            t = undefined;
        }
        if (!t || t.getElementsByTagName("parsererror").length) {
            E.error("Invalid XML: " + e);
        }
        return t;
    };
    var At = /\[\]$/, Lt = /\r?\n/g, jt = /^(?:submit|button|image|reset|file)$/i, Dt = /^(?:input|select|textarea|keygen)/i;
    function Nt(n, e, i, r) {
        var t;
        if (Array.isArray(e)) {
            E.each(e, function(e, t) {
                if (i || At.test(n)) {
                    r(n, t);
                } else {
                    Nt(n + "[" + (typeof t === "object" && t != null ? e : "") + "]", t, i, r);
                }
            });
        } else if (!i && w(e) === "object") {
            for (t in e) {
                Nt(n + "[" + t + "]", e[t], i, r);
            }
        } else {
            r(n, e);
        }
    }
    E.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            var n = y(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(n == null ? "" : n);
        };
        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) {
            E.each(e, function() {
                r(this.name, this.value);
            });
        } else {
            for (n in e) {
                Nt(n, e[n], t, r);
            }
        }
        return i.join("&");
    };
    E.fn.extend({
        serialize: function() {
            return E.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && Dt.test(this.nodeName) && !jt.test(e) && (this.checked || !he.test(e));
            }).map(function(e, t) {
                var n = E(this).val();
                if (n == null) {
                    return null;
                }
                if (Array.isArray(n)) {
                    return E.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Lt, "\r\n")
                        };
                    });
                }
                return {
                    name: t.name,
                    value: n.replace(Lt, "\r\n")
                };
            }).get();
        }
    });
    var qt = /%20/g, Ht = /#.*$/, Ot = /([?&])_=[^&]*/, Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Pt = /^(?:GET|HEAD)$/, It = /^\/\//, Wt = {}, Ft = {}, zt = "*/".concat("*"), Bt = k.createElement("a");
    Bt.href = kt.href;
    function _t(o) {
        return function(e, t) {
            if (typeof e !== "string") {
                t = e;
                e = "*";
            }
            var n, i = 0, r = e.toLowerCase().match(P) || [];
            if (y(t)) {
                while (n = r[i++]) {
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
    function $t(t, r, o, a) {
        var s = {}, l = t === Ft;
        function u(e) {
            var i;
            s[e] = true;
            E.each(t[e] || [], function(e, t) {
                var n = t(r, o, a);
                if (typeof n === "string" && !l && !s[n]) {
                    r.dataTypes.unshift(n);
                    u(n);
                    return false;
                } else if (l) {
                    return !(i = n);
                }
            });
            return i;
        }
        return u(r.dataTypes[0]) || !s["*"] && u("*");
    }
    function Vt(e, t) {
        var n, i, r = E.ajaxSettings.flatOptions || {};
        for (n in t) {
            if (t[n] !== undefined) {
                (r[n] ? e : i || (i = {}))[n] = t[n];
            }
        }
        if (i) {
            E.extend(true, e, i);
        }
        return e;
    }
    function Xt(e, t, n) {
        var i, r, o, a, s = e.contents, l = e.dataTypes;
        while (l[0] === "*") {
            l.shift();
            if (i === undefined) {
                i = e.mimeType || t.getResponseHeader("Content-Type");
            }
        }
        if (i) {
            for (r in s) {
                if (s[r] && s[r].test(i)) {
                    l.unshift(r);
                    break;
                }
            }
        }
        if (l[0] in n) {
            o = l[0];
        } else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break;
                }
                if (!a) {
                    a = r;
                }
            }
            o = o || a;
        }
        if (o) {
            if (o !== l[0]) {
                l.unshift(o);
            }
            return n[o];
        }
    }
    function Ut(e, t, n, i) {
        var r, o, a, s, l, u = {}, f = e.dataTypes.slice();
        if (f[1]) {
            for (a in e.converters) {
                u[a.toLowerCase()] = e.converters[a];
            }
        }
        o = f.shift();
        while (o) {
            if (e.responseFields[o]) {
                n[e.responseFields[o]] = t;
            }
            if (!l && i && e.dataFilter) {
                t = e.dataFilter(t, e.dataType);
            }
            l = o;
            o = f.shift();
            if (o) {
                if (o === "*") {
                    o = l;
                } else if (l !== "*" && l !== o) {
                    a = u[l + " " + o] || u["* " + o];
                    if (!a) {
                        for (r in u) {
                            s = r.split(" ");
                            if (s[1] === o) {
                                a = u[l + " " + s[0]] || u["* " + s[0]];
                                if (a) {
                                    if (a === true) {
                                        a = u[r];
                                    } else if (u[r] !== true) {
                                        o = s[0];
                                        f.unshift(s[1]);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    if (a !== true) {
                        if (a && e.throws) {
                            t = a(t);
                        } else {
                            try {
                                t = a(t);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + o
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
    E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: kt.href,
            type: "GET",
            isLocal: Mt.test(kt.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zt,
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
                "text xml": E.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Vt(Vt(e, E.ajaxSettings), t) : Vt(E.ajaxSettings, e);
        },
        ajaxPrefilter: _t(Wt),
        ajaxTransport: _t(Ft),
        ajax: function(e, t) {
            if (typeof e === "object") {
                t = e;
                e = undefined;
            }
            t = t || {};
            var f, c, d, n, h, i, p, g, r, o, m = E.ajaxSetup({}, t), v = m.context || m, y = m.context && (v.nodeType || v.jquery) ? E(v) : E.event, b = E.Deferred(), x = E.Callbacks("once memory"), w = m.statusCode || {}, a = {}, s = {}, l = "canceled", C = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (p) {
                        if (!n) {
                            n = {};
                            while (t = Rt.exec(d)) {
                                n[t[1].toLowerCase()] = t[2];
                            }
                        }
                        t = n[e.toLowerCase()];
                    }
                    return t == null ? null : t;
                },
                getAllResponseHeaders: function() {
                    return p ? d : null;
                },
                setRequestHeader: function(e, t) {
                    if (p == null) {
                        e = s[e.toLowerCase()] = s[e.toLowerCase()] || e;
                        a[e] = t;
                    }
                    return this;
                },
                overrideMimeType: function(e) {
                    if (p == null) {
                        m.mimeType = e;
                    }
                    return this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) {
                        if (p) {
                            C.always(e[C.status]);
                        } else {
                            for (t in e) {
                                w[t] = [ w[t], e[t] ];
                            }
                        }
                    }
                    return this;
                },
                abort: function(e) {
                    var t = e || l;
                    if (f) {
                        f.abort(t);
                    }
                    u(0, t);
                    return this;
                }
            };
            b.promise(C);
            m.url = ((e || m.url || kt.href) + "").replace(It, kt.protocol + "//");
            m.type = t.method || t.type || m.method || m.type;
            m.dataTypes = (m.dataType || "*").toLowerCase().match(P) || [ "" ];
            if (m.crossDomain == null) {
                i = k.createElement("a");
                try {
                    i.href = m.url;
                    i.href = i.href;
                    m.crossDomain = Bt.protocol + "//" + Bt.host !== i.protocol + "//" + i.host;
                } catch (e) {
                    m.crossDomain = true;
                }
            }
            if (m.data && m.processData && typeof m.data !== "string") {
                m.data = E.param(m.data, m.traditional);
            }
            $t(Wt, m, t, C);
            if (p) {
                return C;
            }
            g = E.event && m.global;
            if (g && E.active++ === 0) {
                E.event.trigger("ajaxStart");
            }
            m.type = m.type.toUpperCase();
            m.hasContent = !Pt.test(m.type);
            c = m.url.replace(Ht, "");
            if (!m.hasContent) {
                o = m.url.slice(c.length);
                if (m.data && (m.processData || typeof m.data === "string")) {
                    c += (St.test(c) ? "&" : "?") + m.data;
                    delete m.data;
                }
                if (m.cache === false) {
                    c = c.replace(Ot, "$1");
                    o = (St.test(c) ? "&" : "?") + "_=" + Et++ + o;
                }
                m.url = c + o;
            } else if (m.data && m.processData && (m.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
                m.data = m.data.replace(qt, "+");
            }
            if (m.ifModified) {
                if (E.lastModified[c]) {
                    C.setRequestHeader("If-Modified-Since", E.lastModified[c]);
                }
                if (E.etag[c]) {
                    C.setRequestHeader("If-None-Match", E.etag[c]);
                }
            }
            if (m.data && m.hasContent && m.contentType !== false || t.contentType) {
                C.setRequestHeader("Content-Type", m.contentType);
            }
            C.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + (m.dataTypes[0] !== "*" ? ", " + zt + "; q=0.01" : "") : m.accepts["*"]);
            for (r in m.headers) {
                C.setRequestHeader(r, m.headers[r]);
            }
            if (m.beforeSend && (m.beforeSend.call(v, C, m) === false || p)) {
                return C.abort();
            }
            l = "abort";
            x.add(m.complete);
            C.done(m.success);
            C.fail(m.error);
            f = $t(Ft, m, t, C);
            if (!f) {
                u(-1, "No Transport");
            } else {
                C.readyState = 1;
                if (g) {
                    y.trigger("ajaxSend", [ C, m ]);
                }
                if (p) {
                    return C;
                }
                if (m.async && m.timeout > 0) {
                    h = T.setTimeout(function() {
                        C.abort("timeout");
                    }, m.timeout);
                }
                try {
                    p = false;
                    f.send(a, u);
                } catch (e) {
                    if (p) {
                        throw e;
                    }
                    u(-1, e);
                }
            }
            function u(e, t, n, i) {
                var r, o, a, s, l, u = t;
                if (p) {
                    return;
                }
                p = true;
                if (h) {
                    T.clearTimeout(h);
                }
                f = undefined;
                d = i || "";
                C.readyState = e > 0 ? 4 : 0;
                r = e >= 200 && e < 300 || e === 304;
                if (n) {
                    s = Xt(m, C, n);
                }
                s = Ut(m, s, C, r);
                if (r) {
                    if (m.ifModified) {
                        l = C.getResponseHeader("Last-Modified");
                        if (l) {
                            E.lastModified[c] = l;
                        }
                        l = C.getResponseHeader("etag");
                        if (l) {
                            E.etag[c] = l;
                        }
                    }
                    if (e === 204 || m.type === "HEAD") {
                        u = "nocontent";
                    } else if (e === 304) {
                        u = "notmodified";
                    } else {
                        u = s.state;
                        o = s.data;
                        a = s.error;
                        r = !a;
                    }
                } else {
                    a = u;
                    if (e || !u) {
                        u = "error";
                        if (e < 0) {
                            e = 0;
                        }
                    }
                }
                C.status = e;
                C.statusText = (t || u) + "";
                if (r) {
                    b.resolveWith(v, [ o, u, C ]);
                } else {
                    b.rejectWith(v, [ C, u, a ]);
                }
                C.statusCode(w);
                w = undefined;
                if (g) {
                    y.trigger(r ? "ajaxSuccess" : "ajaxError", [ C, m, r ? o : a ]);
                }
                x.fireWith(v, [ C, u ]);
                if (g) {
                    y.trigger("ajaxComplete", [ C, m ]);
                    if (!--E.active) {
                        E.event.trigger("ajaxStop");
                    }
                }
            }
            return C;
        },
        getJSON: function(e, t, n) {
            return E.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return E.get(e, undefined, t, "script");
        }
    });
    E.each([ "get", "post" ], function(e, r) {
        E[r] = function(e, t, n, i) {
            if (y(t)) {
                i = i || n;
                n = t;
                t = undefined;
            }
            return E.ajax(E.extend({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            }, E.isPlainObject(e) && e));
        };
    });
    E._evalUrl = function(e) {
        return E.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            throws: true
        });
    };
    E.fn.extend({
        wrapAll: function(e) {
            var t;
            if (this[0]) {
                if (y(e)) {
                    e = e.call(this[0]);
                }
                t = E(e, this[0].ownerDocument).eq(0).clone(true);
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
            if (y(n)) {
                return this.each(function(e) {
                    E(this).wrapInner(n.call(this, e));
                });
            }
            return this.each(function() {
                var e = E(this), t = e.contents();
                if (t.length) {
                    t.wrapAll(n);
                } else {
                    e.append(n);
                }
            });
        },
        wrap: function(t) {
            var n = y(t);
            return this.each(function(e) {
                E(this).wrapAll(n ? t.call(this, e) : t);
            });
        },
        unwrap: function(e) {
            this.parent(e).not("body").each(function() {
                E(this).replaceWith(this.childNodes);
            });
            return this;
        }
    });
    E.expr.pseudos.hidden = function(e) {
        return !E.expr.pseudos.visible(e);
    };
    E.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    };
    E.ajaxSettings.xhr = function() {
        try {
            return new T.XMLHttpRequest();
        } catch (e) {}
    };
    var Yt = {
        0: 200,
        1223: 204
    }, Zt = E.ajaxSettings.xhr();
    v.cors = !!Zt && "withCredentials" in Zt;
    v.ajax = Zt = !!Zt;
    E.ajaxTransport(function(r) {
        var o, a;
        if (v.cors || Zt && !r.crossDomain) {
            return {
                send: function(e, t) {
                    var n, i = r.xhr();
                    i.open(r.type, r.url, r.async, r.username, r.password);
                    if (r.xhrFields) {
                        for (n in r.xhrFields) {
                            i[n] = r.xhrFields[n];
                        }
                    }
                    if (r.mimeType && i.overrideMimeType) {
                        i.overrideMimeType(r.mimeType);
                    }
                    if (!r.crossDomain && !e["X-Requested-With"]) {
                        e["X-Requested-With"] = "XMLHttpRequest";
                    }
                    for (n in e) {
                        i.setRequestHeader(n, e[n]);
                    }
                    o = function(e) {
                        return function() {
                            if (o) {
                                o = a = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null;
                                if (e === "abort") {
                                    i.abort();
                                } else if (e === "error") {
                                    if (typeof i.status !== "number") {
                                        t(0, "error");
                                    } else {
                                        t(i.status, i.statusText);
                                    }
                                } else {
                                    t(Yt[i.status] || i.status, i.statusText, (i.responseType || "text") !== "text" || typeof i.responseText !== "string" ? {
                                        binary: i.response
                                    } : {
                                        text: i.responseText
                                    }, i.getAllResponseHeaders());
                                }
                            }
                        };
                    };
                    i.onload = o();
                    a = i.onerror = i.ontimeout = o("error");
                    if (i.onabort !== undefined) {
                        i.onabort = a;
                    } else {
                        i.onreadystatechange = function() {
                            if (i.readyState === 4) {
                                T.setTimeout(function() {
                                    if (o) {
                                        a();
                                    }
                                });
                            }
                        };
                    }
                    o = o("abort");
                    try {
                        i.send(r.hasContent && r.data || null);
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
    E.ajaxPrefilter(function(e) {
        if (e.crossDomain) {
            e.contents.script = false;
        }
    });
    E.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                E.globalEval(e);
                return e;
            }
        }
    });
    E.ajaxPrefilter("script", function(e) {
        if (e.cache === undefined) {
            e.cache = false;
        }
        if (e.crossDomain) {
            e.type = "GET";
        }
    });
    E.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var i, r;
            return {
                send: function(e, t) {
                    i = E("<script>").prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", r = function(e) {
                        i.remove();
                        r = null;
                        if (e) {
                            t(e.type === "error" ? 404 : 200, e.type);
                        }
                    });
                    k.head.appendChild(i[0]);
                },
                abort: function() {
                    if (r) {
                        r();
                    }
                }
            };
        }
    });
    var Kt = [], Qt = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Kt.pop() || E.expando + "_" + Et++;
            this[e] = true;
            return e;
        }
    });
    E.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, o, a = e.jsonp !== false && (Qt.test(e.url) ? "url" : typeof e.data === "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Qt.test(e.data) && "data");
        if (a || e.dataTypes[0] === "jsonp") {
            i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback;
            if (a) {
                e[a] = e[a].replace(Qt, "$1" + i);
            } else if (e.jsonp !== false) {
                e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + i;
            }
            e.converters["script json"] = function() {
                if (!o) {
                    E.error(i + " was not called");
                }
                return o[0];
            };
            e.dataTypes[0] = "json";
            r = T[i];
            T[i] = function() {
                o = arguments;
            };
            n.always(function() {
                if (r === undefined) {
                    E(T).removeProp(i);
                } else {
                    T[i] = r;
                }
                if (e[i]) {
                    e.jsonpCallback = t.jsonpCallback;
                    Kt.push(i);
                }
                if (o && y(r)) {
                    r(o[0]);
                }
                o = r = undefined;
            });
            return "script";
        }
    });
    v.createHTMLDocument = function() {
        var e = k.implementation.createHTMLDocument("").body;
        e.innerHTML = "<form></form><form></form>";
        return e.childNodes.length === 2;
    }();
    E.parseHTML = function(e, t, n) {
        if (typeof e !== "string") {
            return [];
        }
        if (typeof t === "boolean") {
            n = t;
            t = false;
        }
        var i, r, o;
        if (!t) {
            if (v.createHTMLDocument) {
                t = k.implementation.createHTMLDocument("");
                i = t.createElement("base");
                i.href = k.location.href;
                t.head.appendChild(i);
            } else {
                t = k;
            }
        }
        r = j.exec(e);
        o = !n && [];
        if (r) {
            return [ t.createElement(r[1]) ];
        }
        r = xe([ e ], t, o);
        if (o && o.length) {
            E(o).remove();
        }
        return E.merge([], r.childNodes);
    };
    E.fn.load = function(e, t, n) {
        var i, r, o, a = this, s = e.indexOf(" ");
        if (s > -1) {
            i = yt(e.slice(s));
            e = e.slice(0, s);
        }
        if (y(t)) {
            n = t;
            t = undefined;
        } else if (t && typeof t === "object") {
            r = "POST";
        }
        if (a.length > 0) {
            E.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments;
                a.html(i ? E("<div>").append(E.parseHTML(e)).find(i) : e);
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(this, o || [ e.responseText, t, e ]);
                });
            });
        }
        return this;
    };
    E.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        E.fn[t] = function(e) {
            return this.on(t, e);
        };
    });
    E.expr.pseudos.animated = function(t) {
        return E.grep(E.timers, function(e) {
            return t === e.elem;
        }).length;
    };
    E.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, a, s, l, u, f = E.css(e, "position"), c = E(e), d = {};
            if (f === "static") {
                e.style.position = "relative";
            }
            s = c.offset();
            o = E.css(e, "top");
            l = E.css(e, "left");
            u = (f === "absolute" || f === "fixed") && (o + l).indexOf("auto") > -1;
            if (u) {
                i = c.position();
                a = i.top;
                r = i.left;
            } else {
                a = parseFloat(o) || 0;
                r = parseFloat(l) || 0;
            }
            if (y(t)) {
                t = t.call(e, n, E.extend({}, s));
            }
            if (t.top != null) {
                d.top = t.top - s.top + a;
            }
            if (t.left != null) {
                d.left = t.left - s.left + r;
            }
            if ("using" in t) {
                t.using.call(e, d);
            } else {
                c.css(d);
            }
        }
    };
    E.fn.extend({
        offset: function(t) {
            if (arguments.length) {
                return t === undefined ? this : this.each(function(e) {
                    E.offset.setOffset(this, t, e);
                });
            }
            var e, n, i = this[0];
            if (!i) {
                return;
            }
            if (!i.getClientRects().length) {
                return {
                    top: 0,
                    left: 0
                };
            }
            e = i.getBoundingClientRect();
            n = i.ownerDocument.defaultView;
            return {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            };
        },
        position: function() {
            if (!this[0]) {
                return;
            }
            var e, t, n, i = this[0], r = {
                top: 0,
                left: 0
            };
            if (E.css(i, "position") === "fixed") {
                t = i.getBoundingClientRect();
            } else {
                t = this.offset();
                n = i.ownerDocument;
                e = i.offsetParent || n.documentElement;
                while (e && (e === n.body || e === n.documentElement) && E.css(e, "position") === "static") {
                    e = e.parentNode;
                }
                if (e && e !== i && e.nodeType === 1) {
                    r = E(e).offset();
                    r.top += E.css(e, "borderTopWidth", true);
                    r.left += E.css(e, "borderLeftWidth", true);
                }
            }
            return {
                top: t.top - r.top - E.css(i, "marginTop", true),
                left: t.left - r.left - E.css(i, "marginLeft", true)
            };
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && E.css(e, "position") === "static") {
                    e = e.offsetParent;
                }
                return e || we;
            });
        }
    });
    E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var o = "pageYOffset" === r;
        E.fn[t] = function(e) {
            return V(this, function(e, t, n) {
                var i;
                if (b(e)) {
                    i = e;
                } else if (e.nodeType === 9) {
                    i = e.defaultView;
                }
                if (n === undefined) {
                    return i ? i[r] : e[t];
                }
                if (i) {
                    i.scrollTo(!o ? n : i.pageXOffset, o ? n : i.pageYOffset);
                } else {
                    e[t] = n;
                }
            }, t, e, arguments.length);
        };
    });
    E.each([ "top", "left" ], function(e, n) {
        E.cssHooks[n] = $e(v.pixelPosition, function(e, t) {
            if (t) {
                t = _e(e, n);
                return Fe.test(t) ? E(e).position()[n] + "px" : t;
            }
        });
    });
    E.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        E.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(i, o) {
            E.fn[o] = function(e, t) {
                var n = arguments.length && (i || typeof e !== "boolean"), r = i || (e === true || t === true ? "margin" : "border");
                return V(this, function(e, t, n) {
                    var i;
                    if (b(e)) {
                        return o.indexOf("outer") === 0 ? e["inner" + a] : e.document.documentElement["client" + a];
                    }
                    if (e.nodeType === 9) {
                        i = e.documentElement;
                        return Math.max(e.body["scroll" + a], i["scroll" + a], e.body["offset" + a], i["offset" + a], i["client" + a]);
                    }
                    return n === undefined ? E.css(e, t, r) : E.style(e, t, n, r);
                }, s, n ? e : undefined, n);
            };
        });
    });
    E.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(e, n) {
        E.fn[n] = function(e, t) {
            return arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n);
        };
    });
    E.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    });
    E.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i);
        },
        undelegate: function(e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    });
    E.proxy = function(e, t) {
        var n, i, r;
        if (typeof t === "string") {
            n = e[t];
            t = e;
            e = n;
        }
        if (!y(e)) {
            return undefined;
        }
        i = s.call(arguments, 2);
        r = function() {
            return e.apply(t || this, i.concat(s.call(arguments)));
        };
        r.guid = e.guid = e.guid || E.guid++;
        return r;
    };
    E.holdReady = function(e) {
        if (e) {
            E.readyWait++;
        } else {
            E.ready(true);
        }
    };
    E.isArray = Array.isArray;
    E.parseJSON = JSON.parse;
    E.nodeName = L;
    E.isFunction = y;
    E.isWindow = b;
    E.camelCase = Z;
    E.type = w;
    E.now = Date.now;
    E.isNumeric = function(e) {
        var t = E.type(e);
        return (t === "number" || t === "string") && !isNaN(e - parseFloat(e));
    };
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
            return E;
        });
    }
    var Gt = T.jQuery, Jt = T.$;
    E.noConflict = function(e) {
        if (T.$ === E) {
            T.$ = Jt;
        }
        if (e && T.jQuery === E) {
            T.jQuery = Gt;
        }
        return E;
    };
    if (!e) {
        T.jQuery = T.$ = E;
    }
    return E;
});

(function(n, i, O, d) {
    "use strict";
    var r = O("html"), o = O(n), u = O(i), R = O.fancybox = function() {
        R.open.apply(this, arguments);
    }, a = navigator.userAgent.match(/msie/i), s = null, l = i.createTouch !== d, h = function(e) {
        return e && e.hasOwnProperty && e instanceof O;
    }, p = function(e) {
        return e && O.type(e) === "string";
    }, M = function(e) {
        return p(e) && e.indexOf("%") > 0;
    }, f = function(e) {
        return e && !(e.style.overflow && e.style.overflow === "hidden") && (e.clientWidth && e.scrollWidth > e.clientWidth || e.clientHeight && e.scrollHeight > e.clientHeight);
    }, P = function(e, t) {
        var n = parseInt(e, 10) || 0;
        if (t && M(e)) {
            n = R.getViewport()[t] / 100 * n;
        }
        return Math.ceil(n);
    }, I = function(e, t) {
        return P(e, t) + "px";
    };
    O.extend(R, {
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
            autoCenter: !l,
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
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (a ? ' allowtransparency="true"' : "") + "></iframe>",
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
            onCancel: O.noop,
            beforeLoad: O.noop,
            afterLoad: O.noop,
            beforeShow: O.noop,
            afterShow: O.noop,
            beforeChange: O.noop,
            beforeClose: O.noop,
            afterClose: O.noop
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
        open: function(f, c) {
            if (!f) {
                return;
            }
            if (!O.isPlainObject(c)) {
                c = {};
            }
            if (false === R.close(true)) {
                return;
            }
            if (!O.isArray(f)) {
                f = h(f) ? O(f).get() : [ f ];
            }
            O.each(f, function(e, t) {
                var n = {}, i, r, o, a, s, l, u;
                if (O.type(t) === "object") {
                    if (t.nodeType) {
                        t = O(t);
                    }
                    if (h(t)) {
                        n = {
                            href: t.data("fancybox-href") || t.attr("href"),
                            title: O("<div/>").text(t.data("fancybox-title") || t.attr("title") || "").html(),
                            isDom: true,
                            element: t
                        };
                        if (O.metadata) {
                            O.extend(true, n, t.metadata());
                        }
                    } else {
                        n = t;
                    }
                }
                i = c.href || n.href || (p(t) ? t : null);
                r = c.title !== d ? c.title : n.title || "";
                o = c.content || n.content;
                a = o ? "html" : c.type || n.type;
                if (!a && n.isDom) {
                    a = t.data("fancybox-type");
                    if (!a) {
                        s = t.prop("class").match(/fancybox\.(\w+)/);
                        a = s ? s[1] : null;
                    }
                }
                if (p(i)) {
                    if (!a) {
                        if (R.isImage(i)) {
                            a = "image";
                        } else if (R.isSWF(i)) {
                            a = "swf";
                        } else if (i.charAt(0) === "#") {
                            a = "inline";
                        } else if (p(t)) {
                            a = "html";
                            o = t;
                        }
                    }
                    if (a === "ajax") {
                        l = i.split(/\s+/, 2);
                        i = l.shift();
                        u = l.shift();
                    }
                }
                if (!o) {
                    if (a === "inline") {
                        if (i) {
                            o = O(p(i) ? i.replace(/.*(?=#[^\s]+$)/, "") : i);
                        } else if (n.isDom) {
                            o = t;
                        }
                    } else if (a === "html") {
                        o = i;
                    } else if (!a && !i && n.isDom) {
                        a = "inline";
                        o = t;
                    }
                }
                O.extend(n, {
                    href: i,
                    type: a,
                    content: o,
                    title: r,
                    selector: u
                });
                f[e] = n;
            });
            R.opts = O.extend(true, {}, R.defaults, c);
            if (c.keys !== d) {
                R.opts.keys = c.keys ? O.extend({}, R.defaults.keys, c.keys) : false;
            }
            R.group = f;
            return R._start(R.opts.index);
        },
        cancel: function() {
            var e = R.coming;
            if (e && false === R.trigger("onCancel")) {
                return;
            }
            R.hideLoading();
            if (!e) {
                return;
            }
            if (R.ajaxLoad) {
                R.ajaxLoad.abort();
            }
            R.ajaxLoad = null;
            if (R.imgPreload) {
                R.imgPreload.onload = R.imgPreload.onerror = null;
            }
            if (e.wrap) {
                e.wrap.stop(true, true).trigger("onReset").remove();
            }
            R.coming = null;
            if (!R.current) {
                R._afterZoomOut(e);
            }
        },
        close: function(e) {
            R.cancel();
            if (false === R.trigger("beforeClose")) {
                return;
            }
            R.unbindEvents();
            if (!R.isActive) {
                return;
            }
            if (!R.isOpen || e === true) {
                O(".fancybox-wrap").stop(true).trigger("onReset").remove();
                R._afterZoomOut();
            } else {
                R.isOpen = R.isOpened = false;
                R.isClosing = true;
                O(".fancybox-item, .fancybox-nav").remove();
                R.wrap.stop(true, true).removeClass("fancybox-opened");
                R.transitions[R.current.closeMethod]();
            }
        },
        play: function(e) {
            var t = function() {
                clearTimeout(R.player.timer);
            }, n = function() {
                t();
                if (R.current && R.player.isActive) {
                    R.player.timer = setTimeout(R.next, R.current.playSpeed);
                }
            }, i = function() {
                t();
                u.unbind(".player");
                R.player.isActive = false;
                R.trigger("onPlayEnd");
            }, r = function() {
                if (R.current && (R.current.loop || R.current.index < R.group.length - 1)) {
                    R.player.isActive = true;
                    u.bind({
                        "onCancel.player beforeClose.player": i,
                        "onUpdate.player": n,
                        "beforeLoad.player": t
                    });
                    n();
                    R.trigger("onPlayStart");
                }
            };
            if (e === true || !R.player.isActive && e !== false) {
                r();
            } else {
                i();
            }
        },
        next: function(e) {
            var t = R.current;
            if (t) {
                if (!p(e)) {
                    e = t.direction.next;
                }
                R.jumpto(t.index + 1, e, "next");
            }
        },
        prev: function(e) {
            var t = R.current;
            if (t) {
                if (!p(e)) {
                    e = t.direction.prev;
                }
                R.jumpto(t.index - 1, e, "prev");
            }
        },
        jumpto: function(e, t, n) {
            var i = R.current;
            if (!i) {
                return;
            }
            e = P(e);
            R.direction = t || i.direction[e >= i.index ? "next" : "prev"];
            R.router = n || "jumpto";
            if (i.loop) {
                if (e < 0) {
                    e = i.group.length + e % i.group.length;
                }
                e = e % i.group.length;
            }
            if (i.group[e] !== d) {
                R.cancel();
                R._start(e);
            }
        },
        reposition: function(e, t) {
            var n = R.current, i = n ? n.wrap : null, r;
            if (i) {
                r = R._getPosition(t);
                if (e && e.type === "scroll") {
                    delete r.position;
                    i.stop(true, true).animate(r, 200);
                } else {
                    i.css(r);
                    n.pos = O.extend({}, n.dim, r);
                }
            }
        },
        update: function(t) {
            var n = t && t.originalEvent && t.originalEvent.type, i = !n || n === "orientationchange";
            if (i) {
                clearTimeout(s);
                s = null;
            }
            if (!R.isOpen || s) {
                return;
            }
            s = setTimeout(function() {
                var e = R.current;
                if (!e || R.isClosing) {
                    return;
                }
                R.wrap.removeClass("fancybox-tmp");
                if (i || n === "load" || n === "resize" && e.autoResize) {
                    R._setDimension();
                }
                if (!(n === "scroll" && e.canShrink)) {
                    R.reposition(t);
                }
                R.trigger("onUpdate");
                s = null;
            }, i && !l ? 0 : 300);
        },
        toggle: function(e) {
            if (R.isOpen) {
                R.current.fitToView = O.type(e) === "boolean" ? e : !R.current.fitToView;
                if (l) {
                    R.wrap.removeAttr("style").addClass("fancybox-tmp");
                    R.trigger("onUpdate");
                }
                R.update();
            }
        },
        hideLoading: function() {
            u.unbind(".loading");
            O("#fancybox-loading").remove();
        },
        showLoading: function() {
            var e, t;
            R.hideLoading();
            e = O(R.opts.tpl.loading).click(R.cancel).appendTo("body");
            u.bind("keydown.loading", function(e) {
                if ((e.which || e.keyCode) === 27) {
                    e.preventDefault();
                    R.cancel();
                }
            });
            if (!R.defaults.fixed) {
                t = R.getViewport();
                e.css({
                    position: "absolute",
                    top: t.h * .5 + t.y,
                    left: t.w * .5 + t.x
                });
            }
            R.trigger("onLoading");
        },
        getViewport: function() {
            var e = R.current && R.current.locked || false, t = {
                x: o.scrollLeft(),
                y: o.scrollTop()
            };
            if (e && e.length) {
                t.w = e[0].clientWidth;
                t.h = e[0].clientHeight;
            } else {
                t.w = l && n.innerWidth ? n.innerWidth : o.width();
                t.h = l && n.innerHeight ? n.innerHeight : o.height();
            }
            return t;
        },
        unbindEvents: function() {
            if (R.wrap && h(R.wrap)) {
                R.wrap.unbind(".fb");
            }
            u.unbind(".fb");
            o.unbind(".fb");
        },
        bindEvents: function() {
            var s = R.current, t;
            if (!s) {
                return;
            }
            o.bind("orientationchange.fb" + (l ? "" : " resize.fb") + (s.autoCenter && !s.locked ? " scroll.fb" : ""), R.update);
            t = s.keys;
            if (t) {
                u.bind("keydown.fb", function(n) {
                    var i = n.which || n.keyCode, e = n.target || n.srcElement;
                    if (i === 27 && R.coming) {
                        return false;
                    }
                    if (!n.ctrlKey && !n.altKey && !n.shiftKey && !n.metaKey && !(e && (e.type || O(e).is("[contenteditable]")))) {
                        O.each(t, function(e, t) {
                            if (s.group.length > 1 && t[i] !== d) {
                                R[e](t[i]);
                                n.preventDefault();
                                return false;
                            }
                            if (O.inArray(i, t) > -1) {
                                R[e]();
                                n.preventDefault();
                                return false;
                            }
                        });
                    }
                });
            }
            if (O.fn.mousewheel && s.mouseWheel) {
                R.wrap.bind("mousewheel.fb", function(e, t, n, i) {
                    var r = e.target || null, o = O(r), a = false;
                    while (o.length) {
                        if (a || o.is(".fancybox-skin") || o.is(".fancybox-wrap")) {
                            break;
                        }
                        a = f(o[0]);
                        o = O(o).parent();
                    }
                    if (t !== 0 && !a) {
                        if (R.group.length > 1 && !s.canShrink) {
                            if (i > 0 || n > 0) {
                                R.prev(i > 0 ? "down" : "left");
                            } else if (i < 0 || n < 0) {
                                R.next(i < 0 ? "up" : "right");
                            }
                            e.preventDefault();
                        }
                    }
                });
            }
        },
        trigger: function(n, e) {
            var t, i = e || R.coming || R.current;
            if (i) {
                if (O.isFunction(i[n])) {
                    t = i[n].apply(i, Array.prototype.slice.call(arguments, 1));
                }
                if (t === false) {
                    return false;
                }
                if (i.helpers) {
                    O.each(i.helpers, function(e, t) {
                        if (t && R.helpers[e] && O.isFunction(R.helpers[e][n])) {
                            R.helpers[e][n](O.extend(true, {}, R.helpers[e].defaults, t), i);
                        }
                    });
                }
            }
            u.trigger(n);
        },
        isImage: function(e) {
            return p(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
        },
        isSWF: function(e) {
            return p(e) && e.match(/\.(swf)((\?|#).*)?$/i);
        },
        _start: function(e) {
            var n = {}, t, i, r, o, a;
            e = P(e);
            t = R.group[e] || null;
            if (!t) {
                return false;
            }
            n = O.extend(true, {}, R.opts, t);
            o = n.margin;
            a = n.padding;
            if (O.type(o) === "number") {
                n.margin = [ o, o, o, o ];
            }
            if (O.type(a) === "number") {
                n.padding = [ a, a, a, a ];
            }
            if (n.modal) {
                O.extend(true, n, {
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
            if (n.autoSize) {
                n.autoWidth = n.autoHeight = true;
            }
            if (n.width === "auto") {
                n.autoWidth = true;
            }
            if (n.height === "auto") {
                n.autoHeight = true;
            }
            n.group = R.group;
            n.index = e;
            R.coming = n;
            if (false === R.trigger("beforeLoad")) {
                R.coming = null;
                return;
            }
            r = n.type;
            i = n.href;
            if (!r) {
                R.coming = null;
                if (R.current && R.router && R.router !== "jumpto") {
                    R.current.index = e;
                    return R[R.router](R.direction);
                }
                return false;
            }
            R.isActive = true;
            if (r === "image" || r === "swf") {
                n.autoHeight = n.autoWidth = false;
                n.scrolling = "visible";
            }
            if (r === "image") {
                n.aspectRatio = true;
            }
            if (r === "iframe" && l) {
                n.scrolling = "scroll";
            }
            n.wrap = O(n.tpl.wrap).addClass("fancybox-" + (l ? "mobile" : "desktop") + " fancybox-type-" + r + " fancybox-tmp " + n.wrapCSS).appendTo(n.parent || "body");
            O.extend(n, {
                skin: O(".fancybox-skin", n.wrap),
                outer: O(".fancybox-outer", n.wrap),
                inner: O(".fancybox-inner", n.wrap)
            });
            O.each([ "Top", "Right", "Bottom", "Left" ], function(e, t) {
                n.skin.css("padding" + t, I(n.padding[e]));
            });
            R.trigger("onReady");
            if (r === "inline" || r === "html") {
                if (!n.content || !n.content.length) {
                    return R._error("content");
                }
            } else if (!i) {
                return R._error("href");
            }
            if (r === "image") {
                R._loadImage();
            } else if (r === "ajax") {
                R._loadAjax();
            } else if (r === "iframe") {
                R._loadIframe();
            } else {
                R._afterLoad();
            }
        },
        _error: function(e) {
            O.extend(R.coming, {
                type: "html",
                autoWidth: true,
                autoHeight: true,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: e,
                content: R.coming.tpl.error
            });
            R._afterLoad();
        },
        _loadImage: function() {
            var e = R.imgPreload = new Image();
            e.onload = function() {
                this.onload = this.onerror = null;
                R.coming.width = this.width / R.opts.pixelRatio;
                R.coming.height = this.height / R.opts.pixelRatio;
                R._afterLoad();
            };
            e.onerror = function() {
                this.onload = this.onerror = null;
                R._error("image");
            };
            e.src = R.coming.href;
            if (e.complete !== true) {
                R.showLoading();
            }
        },
        _loadAjax: function() {
            var n = R.coming;
            R.showLoading();
            R.ajaxLoad = O.ajax(O.extend({}, n.ajax, {
                url: n.href,
                error: function(e, t) {
                    if (R.coming && t !== "abort") {
                        R._error("ajax", e);
                    } else {
                        R.hideLoading();
                    }
                },
                success: function(e, t) {
                    if (t === "success") {
                        n.content = e;
                        R._afterLoad();
                    }
                }
            }));
        },
        _loadIframe: function() {
            var e = R.coming, t = O(e.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime())).attr("scrolling", l ? "auto" : e.iframe.scrolling).attr("src", e.href);
            O(e.wrap).bind("onReset", function() {
                try {
                    O(this).find("iframe").hide().attr("src", "//about:blank").end().empty();
                } catch (e) {}
            });
            if (e.iframe.preload) {
                R.showLoading();
                t.one("load", function() {
                    O(this).data("ready", 1);
                    if (!l) {
                        O(this).bind("load.fb", R.update);
                    }
                    O(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                    R._afterLoad();
                });
            }
            e.content = t.appendTo(e.inner);
            if (!e.iframe.preload) {
                R._afterLoad();
            }
        },
        _preloadImages: function() {
            var e = R.group, t = R.current, n = e.length, i = t.preload ? Math.min(t.preload, n - 1) : 0, r, o;
            for (o = 1; o <= i; o += 1) {
                r = e[(t.index + o) % n];
                if (r.type === "image" && r.href) {
                    new Image().src = r.href;
                }
            }
        },
        _afterLoad: function() {
            var e = R.coming, t = R.current, n = "fancybox-placeholder", i, r, o, a, s, l;
            R.hideLoading();
            if (!e || R.isActive === false) {
                return;
            }
            if (false === R.trigger("afterLoad", e, t)) {
                e.wrap.stop(true).trigger("onReset").remove();
                R.coming = null;
                return;
            }
            if (t) {
                R.trigger("beforeChange", t);
                t.wrap.stop(true).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove();
            }
            R.unbindEvents();
            i = e;
            r = e.content;
            o = e.type;
            a = e.scrolling;
            O.extend(R, {
                wrap: i.wrap,
                skin: i.skin,
                outer: i.outer,
                inner: i.inner,
                current: i,
                previous: t
            });
            s = i.href;
            switch (o) {
              case "inline":
              case "ajax":
              case "html":
                if (i.selector) {
                    r = O("<div>").html(r).find(i.selector);
                } else if (h(r)) {
                    if (!r.data(n)) {
                        r.data(n, O('<div class="' + n + '"></div>').insertAfter(r).hide());
                    }
                    r = r.show().detach();
                    i.wrap.bind("onReset", function() {
                        if (O(this).find(r).length) {
                            r.hide().replaceAll(r.data(n)).data(n, false);
                        }
                    });
                }
                break;

              case "image":
                r = i.tpl.image.replace(/\{href\}/g, s);
                break;

              case "swf":
                r = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + s + '"></param>';
                l = "";
                O.each(i.swf, function(e, t) {
                    r += '<param name="' + e + '" value="' + t + '"></param>';
                    l += " " + e + '="' + t + '"';
                });
                r += '<embed src="' + s + '" type="application/x-shockwave-flash" width="100%" height="100%"' + l + "></embed></object>";
                break;
            }
            if (!(h(r) && r.parent().is(i.inner))) {
                i.inner.append(r);
            }
            R.trigger("beforeShow");
            i.inner.css("overflow", a === "yes" ? "scroll" : a === "no" ? "hidden" : a);
            R._setDimension();
            R.reposition();
            R.isOpen = false;
            R.coming = null;
            R.bindEvents();
            if (!R.isOpened) {
                O(".fancybox-wrap").not(i.wrap).stop(true).trigger("onReset").remove();
            } else if (t.prevMethod) {
                R.transitions[t.prevMethod]();
            }
            R.transitions[R.isOpened ? i.nextMethod : i.openMethod]();
            R._preloadImages();
        },
        _setDimension: function() {
            var e = R.getViewport(), t = 0, n = false, i = false, r = R.wrap, o = R.skin, a = R.inner, s = R.current, l = s.width, u = s.height, f = s.minWidth, c = s.minHeight, d = s.maxWidth, h = s.maxHeight, p = s.scrolling, g = s.scrollOutside ? s.scrollbarWidth : 0, m = s.margin, v = P(m[1] + m[3]), y = P(m[0] + m[2]), b, x, w, C, T, k, E, S, A, L, j, D, N, q, H;
            r.add(o).add(a).width("auto").height("auto").removeClass("fancybox-tmp");
            b = P(o.outerWidth(true) - o.width());
            x = P(o.outerHeight(true) - o.height());
            w = v + b;
            C = y + x;
            T = M(l) ? (e.w - w) * P(l) / 100 : l;
            k = M(u) ? (e.h - C) * P(u) / 100 : u;
            if (s.type === "iframe") {
                q = s.content;
                if (s.autoHeight && q.data("ready") === 1) {
                    try {
                        if (q[0].contentWindow.document.location) {
                            a.width(T).height(9999);
                            H = q.contents().find("body");
                            if (g) {
                                H.css("overflow-x", "hidden");
                            }
                            k = H.outerHeight(true);
                        }
                    } catch (e) {}
                }
            } else if (s.autoWidth || s.autoHeight) {
                a.addClass("fancybox-tmp");
                if (!s.autoWidth) {
                    a.width(T);
                }
                if (!s.autoHeight) {
                    a.height(k);
                }
                if (s.autoWidth) {
                    T = a.width();
                }
                if (s.autoHeight) {
                    k = a.height();
                }
                a.removeClass("fancybox-tmp");
            }
            l = P(T);
            u = P(k);
            A = T / k;
            f = P(M(f) ? P(f, "w") - w : f);
            d = P(M(d) ? P(d, "w") - w : d);
            c = P(M(c) ? P(c, "h") - C : c);
            h = P(M(h) ? P(h, "h") - C : h);
            E = d;
            S = h;
            if (s.fitToView) {
                d = Math.min(e.w - w, d);
                h = Math.min(e.h - C, h);
            }
            D = e.w - v;
            N = e.h - y;
            if (s.aspectRatio) {
                if (l > d) {
                    l = d;
                    u = P(l / A);
                }
                if (u > h) {
                    u = h;
                    l = P(u * A);
                }
                if (l < f) {
                    l = f;
                    u = P(l / A);
                }
                if (u < c) {
                    u = c;
                    l = P(u * A);
                }
            } else {
                l = Math.max(f, Math.min(l, d));
                if (s.autoHeight && s.type !== "iframe") {
                    a.width(l);
                    u = a.height();
                }
                u = Math.max(c, Math.min(u, h));
            }
            if (s.fitToView) {
                a.width(l).height(u);
                r.width(l + b);
                L = r.width();
                j = r.height();
                if (s.aspectRatio) {
                    while ((L > D || j > N) && l > f && u > c) {
                        if (t++ > 19) {
                            break;
                        }
                        u = Math.max(c, Math.min(h, u - 10));
                        l = P(u * A);
                        if (l < f) {
                            l = f;
                            u = P(l / A);
                        }
                        if (l > d) {
                            l = d;
                            u = P(l / A);
                        }
                        a.width(l).height(u);
                        r.width(l + b);
                        L = r.width();
                        j = r.height();
                    }
                } else {
                    l = Math.max(f, Math.min(l, l - (L - D)));
                    u = Math.max(c, Math.min(u, u - (j - N)));
                }
            }
            if (g && p === "auto" && u < k && l + b + g < D) {
                l += g;
            }
            a.width(l).height(u);
            r.width(l + b);
            L = r.width();
            j = r.height();
            n = (L > D || j > N) && l > f && u > c;
            i = s.aspectRatio ? l < E && u < S && l < T && u < k : (l < E || u < S) && (l < T || u < k);
            O.extend(s, {
                dim: {
                    width: I(L),
                    height: I(j)
                },
                origWidth: T,
                origHeight: k,
                canShrink: n,
                canExpand: i,
                wPadding: b,
                hPadding: x,
                wrapSpace: j - o.outerHeight(true),
                skinSpace: o.height() - u
            });
            if (!q && s.autoHeight && u > c && u < h && !i) {
                a.height("auto");
            }
        },
        _getPosition: function(e) {
            var t = R.current, n = R.getViewport(), i = t.margin, r = R.wrap.width() + i[1] + i[3], o = R.wrap.height() + i[0] + i[2], a = {
                position: "absolute",
                top: i[0],
                left: i[3]
            };
            if (t.autoCenter && t.fixed && !e && o <= n.h && r <= n.w) {
                a.position = "fixed";
            } else if (!t.locked) {
                a.top += n.y;
                a.left += n.x;
            }
            a.top = I(Math.max(a.top, a.top + (n.h - o) * t.topRatio));
            a.left = I(Math.max(a.left, a.left + (n.w - r) * t.leftRatio));
            return a;
        },
        _afterZoomIn: function() {
            var t = R.current;
            if (!t) {
                return;
            }
            R.isOpen = R.isOpened = true;
            R.wrap.css("overflow", "visible").addClass("fancybox-opened").hide().show(0);
            R.update();
            if (t.closeClick || t.nextClick && R.group.length > 1) {
                R.inner.css("cursor", "pointer").bind("click.fb", function(e) {
                    if (!O(e.target).is("a") && !O(e.target).parent().is("a")) {
                        e.preventDefault();
                        R[t.closeClick ? "close" : "next"]();
                    }
                });
            }
            if (t.closeBtn) {
                O(t.tpl.closeBtn).appendTo(R.skin).bind("click.fb", function(e) {
                    e.preventDefault();
                    R.close();
                });
            }
            if (t.arrows && R.group.length > 1) {
                if (t.loop || t.index > 0) {
                    O(t.tpl.prev).appendTo(R.outer).bind("click.fb", R.prev);
                }
                if (t.loop || t.index < R.group.length - 1) {
                    O(t.tpl.next).appendTo(R.outer).bind("click.fb", R.next);
                }
            }
            R.trigger("afterShow");
            if (!t.loop && t.index === t.group.length - 1) {
                R.play(false);
            } else if (R.opts.autoPlay && !R.player.isActive) {
                R.opts.autoPlay = false;
                R.play(true);
            }
        },
        _afterZoomOut: function(e) {
            e = e || R.current;
            O(".fancybox-wrap").trigger("onReset").remove();
            O.extend(R, {
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
            R.trigger("afterClose", e);
        }
    });
    R.transitions = {
        getOrigPosition: function() {
            var e = R.current, t = e.element, n = e.orig, i = {}, r = 50, o = 50, a = e.hPadding, s = e.wPadding, l = R.getViewport();
            if (!n && e.isDom && t.is(":visible")) {
                n = t.find("img:first");
                if (!n.length) {
                    n = t;
                }
            }
            if (h(n)) {
                i = n.offset();
                if (n.is("img")) {
                    r = n.outerWidth();
                    o = n.outerHeight();
                }
            } else {
                i.top = l.y + (l.h - o) * e.topRatio;
                i.left = l.x + (l.w - r) * e.leftRatio;
            }
            if (R.wrap.css("position") === "fixed" || e.locked) {
                i.top -= l.y;
                i.left -= l.x;
            }
            i = {
                top: I(i.top - a * e.topRatio),
                left: I(i.left - s * e.leftRatio),
                width: I(r + s),
                height: I(o + a)
            };
            return i;
        },
        step: function(e, t) {
            var n, i, r, o = t.prop, a = R.current, s = a.wrapSpace, l = a.skinSpace;
            if (o === "width" || o === "height") {
                n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start);
                if (R.isClosing) {
                    n = 1 - n;
                }
                i = o === "width" ? a.wPadding : a.hPadding;
                r = e - i;
                R.skin[o](P(o === "width" ? r : r - s * n));
                R.inner[o](P(o === "width" ? r : r - s * n - l * n));
            }
        },
        zoomIn: function() {
            var e = R.current, t = e.pos, n = e.openEffect, i = n === "elastic", r = O.extend({
                opacity: 1
            }, t);
            delete r.position;
            if (i) {
                t = this.getOrigPosition();
                if (e.openOpacity) {
                    t.opacity = .1;
                }
            } else if (n === "fade") {
                t.opacity = .1;
            }
            R.wrap.css(t).animate(r, {
                duration: n === "none" ? 0 : e.openSpeed,
                easing: e.openEasing,
                step: i ? this.step : null,
                complete: R._afterZoomIn
            });
        },
        zoomOut: function() {
            var e = R.current, t = e.closeEffect, n = t === "elastic", i = {
                opacity: .1
            };
            if (n) {
                i = this.getOrigPosition();
                if (e.closeOpacity) {
                    i.opacity = .1;
                }
            }
            R.wrap.animate(i, {
                duration: t === "none" ? 0 : e.closeSpeed,
                easing: e.closeEasing,
                step: n ? this.step : null,
                complete: R._afterZoomOut
            });
        },
        changeIn: function() {
            var e = R.current, t = e.nextEffect, n = e.pos, i = {
                opacity: 1
            }, r = R.direction, o = 200, a;
            n.opacity = .1;
            if (t === "elastic") {
                a = r === "down" || r === "up" ? "top" : "left";
                if (r === "down" || r === "right") {
                    n[a] = I(P(n[a]) - o);
                    i[a] = "+=" + o + "px";
                } else {
                    n[a] = I(P(n[a]) + o);
                    i[a] = "-=" + o + "px";
                }
            }
            if (t === "none") {
                R._afterZoomIn();
            } else {
                R.wrap.css(n).animate(i, {
                    duration: e.nextSpeed,
                    easing: e.nextEasing,
                    complete: R._afterZoomIn
                });
            }
        },
        changeOut: function() {
            var e = R.previous, t = e.prevEffect, n = {
                opacity: .1
            }, i = R.direction, r = 200;
            if (t === "elastic") {
                n[i === "down" || i === "up" ? "top" : "left"] = (i === "up" || i === "left" ? "-" : "+") + "=" + r + "px";
            }
            e.wrap.animate(n, {
                duration: t === "none" ? 0 : e.prevSpeed,
                easing: e.prevEasing,
                complete: function() {
                    O(this).trigger("onReset").remove();
                }
            });
        }
    };
    R.helpers.overlay = {
        defaults: {
            closeClick: true,
            speedOut: 200,
            showEarly: true,
            css: {},
            locked: !l,
            fixed: true
        },
        overlay: null,
        fixed: false,
        el: O("html"),
        create: function(e) {
            var t;
            e = O.extend({}, this.defaults, e);
            if (this.overlay) {
                this.close();
            }
            t = R.coming ? R.coming.parent : e.parent;
            this.overlay = O('<div class="fancybox-overlay"></div>').appendTo(t && t.length ? t : "body");
            this.fixed = false;
            if (e.fixed && R.defaults.fixed) {
                this.overlay.addClass("fancybox-overlay-fixed");
                this.fixed = true;
            }
        },
        open: function(e) {
            var t = this;
            e = O.extend({}, this.defaults, e);
            if (this.overlay) {
                this.overlay.unbind(".overlay").width("auto").height("auto");
            } else {
                this.create(e);
            }
            if (!this.fixed) {
                o.bind("resize.overlay", O.proxy(this.update, this));
                this.update();
            }
            if (e.closeClick) {
                this.overlay.bind("click.overlay", function(e) {
                    if (O(e.target).hasClass("fancybox-overlay")) {
                        if (R.isActive) {
                            R.close();
                        } else {
                            t.close();
                        }
                        return false;
                    }
                });
            }
            this.overlay.css(e.css).show();
        },
        close: function() {
            o.unbind("resize.overlay");
            if (this.el.hasClass("fancybox-lock")) {
                O(".fancybox-margin").removeClass("fancybox-margin");
                this.el.removeClass("fancybox-lock");
                o.scrollTop(this.scrollV).scrollLeft(this.scrollH);
            }
            O(".fancybox-overlay").remove().hide();
            O.extend(this, {
                overlay: null,
                fixed: false
            });
        },
        update: function() {
            var e = "100%", t;
            this.overlay.width(e).height("100%");
            if (a) {
                t = Math.max(i.documentElement.offsetWidth, i.body.offsetWidth);
                if (u.width() > t) {
                    e = u.width();
                }
            } else if (u.width() > o.width()) {
                e = u.width();
            }
            this.overlay.width(e).height(u.height());
        },
        onReady: function(e, t) {
            var n = this.overlay;
            O(".fancybox-overlay").stop(true, true);
            if (!n) {
                this.create(e);
            }
            if (e.locked && this.fixed && t.fixed) {
                t.locked = this.overlay.append(t.wrap);
                t.fixed = false;
            }
            if (e.showEarly === true) {
                this.beforeShow.apply(this, arguments);
            }
        },
        beforeShow: function(e, t) {
            if (t.locked && !this.el.hasClass("fancybox-lock")) {
                if (this.fixPosition !== false) {
                    O("*").filter(function() {
                        return O(this).css("position") === "fixed" && !O(this).hasClass("fancybox-overlay") && !O(this).hasClass("fancybox-wrap");
                    }).addClass("fancybox-margin");
                }
                this.el.addClass("fancybox-margin");
                this.scrollV = o.scrollTop();
                this.scrollH = o.scrollLeft();
                this.el.addClass("fancybox-lock");
                o.scrollTop(this.scrollV).scrollLeft(this.scrollH);
            }
            this.open(e);
        },
        onUpdate: function() {
            if (!this.fixed) {
                this.update();
            }
        },
        afterClose: function(e) {
            if (this.overlay && !R.coming) {
                this.overlay.fadeOut(e.speedOut, O.proxy(this.close, this));
            }
        }
    };
    R.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(e) {
            var t = R.current, n = t.title, i = e.type, r, o;
            if (O.isFunction(n)) {
                n = n.call(t.element, t);
            }
            if (!p(n) || O.trim(n) === "") {
                return;
            }
            r = O('<div class="fancybox-title fancybox-title-' + i + '-wrap">' + n + "</div>");
            switch (i) {
              case "inside":
                o = R.skin;
                break;

              case "outside":
                o = R.wrap;
                break;

              case "over":
                o = R.inner;
                break;

              default:
                o = R.skin;
                r.appendTo("body");
                if (a) {
                    r.width(r.width());
                }
                r.wrapInner('<span class="child"></span>');
                R.current.margin[2] += Math.abs(P(r.css("margin-bottom")));
                break;
            }
            r[e.position === "top" ? "prependTo" : "appendTo"](o);
        }
    };
    O.fn.fancybox = function(o) {
        var a, s = O(this), l = this.selector || "", e = function(e) {
            var t = O(this).blur(), n = a, i, r;
            if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !t.is(".fancybox-wrap")) {
                i = o.groupAttr || "data-fancybox-group";
                r = t.attr(i);
                if (!r) {
                    i = "rel";
                    r = t.get(0)[i];
                }
                if (r && r !== "" && r !== "nofollow") {
                    t = l.length ? O(l) : s;
                    t = t.filter("[" + i + '="' + r + '"]');
                    n = t.index(this);
                }
                o.index = n;
                if (R.open(t, o) !== false) {
                    e.preventDefault();
                }
            }
        };
        o = o || {};
        a = o.index || 0;
        if (!l || o.live === false) {
            s.unbind("click.fb-start").bind("click.fb-start", e);
        } else {
            u.undelegate(l, "click.fb-start").delegate(l + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", e);
        }
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this;
    };
    u.ready(function() {
        var e, t;
        if (O.scrollbarWidth === d) {
            O.scrollbarWidth = function() {
                var e = O('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), t = e.children(), n = t.innerWidth() - t.height(99).innerWidth();
                e.remove();
                return n;
            };
        }
        if (O.support.fixedPosition === d) {
            O.support.fixedPosition = function() {
                var e = O('<div style="position:fixed;top:20px;"></div>').appendTo("body"), t = e[0].offsetTop === 20 || e[0].offsetTop === 15;
                e.remove();
                return t;
            }();
        }
        O.extend(R.defaults, {
            scrollbarWidth: O.scrollbarWidth(),
            fixed: O.support.fixedPosition,
            parent: O("body")
        });
        e = O(n).width();
        r.addClass("fancybox-lock-test");
        t = O(n).width();
        r.removeClass("fancybox-lock-test");
        O("<style type='text/css'>.fancybox-margin{margin-right:" + (t - e) + "px;}</style>").appendTo("head");
    });
})(window, document, jQuery);

(function(e) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], e);
    } else if (typeof exports === "object") {
        module.exports = e;
    } else {
        e(jQuery);
    }
})(function(d) {
    var e = [ "wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll" ], t = "onwheel" in document || document.documentMode >= 9 ? [ "wheel" ] : [ "mousewheel", "DomMouseScroll", "MozMousePixelScroll" ], h = Array.prototype.slice, p, g;
    if (d.event.fixHooks) {
        for (var n = e.length; n; ) {
            d.event.fixHooks[e[--n]] = d.event.mouseHooks;
        }
    }
    var m = d.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener) {
                for (var e = t.length; e; ) {
                    this.addEventListener(t[--e], i, false);
                }
            } else {
                this.onmousewheel = i;
            }
            d.data(this, "mousewheel-line-height", m.getLineHeight(this));
            d.data(this, "mousewheel-page-height", m.getPageHeight(this));
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var e = t.length; e; ) {
                    this.removeEventListener(t[--e], i, false);
                }
            } else {
                this.onmousewheel = null;
            }
            d.removeData(this, "mousewheel-line-height");
            d.removeData(this, "mousewheel-page-height");
        },
        getLineHeight: function(e) {
            var t = d(e), n = t["offsetParent" in d.fn ? "offsetParent" : "parent"]();
            if (!n.length) {
                n = d("body");
            }
            return parseInt(n.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16;
        },
        getPageHeight: function(e) {
            return d(e).height();
        },
        settings: {
            adjustOldDeltas: true,
            normalizeOffset: true
        }
    };
    d.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e);
        }
    });
    function i(e) {
        var t = e || window.event, n = h.call(arguments, 1), i = 0, r = 0, o = 0, a = 0, s = 0, l = 0;
        e = d.event.fix(t);
        e.type = "mousewheel";
        if ("detail" in t) {
            o = t.detail * -1;
        }
        if ("wheelDelta" in t) {
            o = t.wheelDelta;
        }
        if ("wheelDeltaY" in t) {
            o = t.wheelDeltaY;
        }
        if ("wheelDeltaX" in t) {
            r = t.wheelDeltaX * -1;
        }
        if ("axis" in t && t.axis === t.HORIZONTAL_AXIS) {
            r = o * -1;
            o = 0;
        }
        i = o === 0 ? r : o;
        if ("deltaY" in t) {
            o = t.deltaY * -1;
            i = o;
        }
        if ("deltaX" in t) {
            r = t.deltaX;
            if (o === 0) {
                i = r * -1;
            }
        }
        if (o === 0 && r === 0) {
            return;
        }
        if (t.deltaMode === 1) {
            var u = d.data(this, "mousewheel-line-height");
            i *= u;
            o *= u;
            r *= u;
        } else if (t.deltaMode === 2) {
            var f = d.data(this, "mousewheel-page-height");
            i *= f;
            o *= f;
            r *= f;
        }
        a = Math.max(Math.abs(o), Math.abs(r));
        if (!g || a < g) {
            g = a;
            if (y(t, a)) {
                g /= 40;
            }
        }
        if (y(t, a)) {
            i /= 40;
            r /= 40;
            o /= 40;
        }
        i = Math[i >= 1 ? "floor" : "ceil"](i / g);
        r = Math[r >= 1 ? "floor" : "ceil"](r / g);
        o = Math[o >= 1 ? "floor" : "ceil"](o / g);
        if (m.settings.normalizeOffset && this.getBoundingClientRect) {
            var c = this.getBoundingClientRect();
            s = e.clientX - c.left;
            l = e.clientY - c.top;
        }
        e.deltaX = r;
        e.deltaY = o;
        e.deltaFactor = g;
        e.offsetX = s;
        e.offsetY = l;
        e.deltaMode = 0;
        n.unshift(e, i, r, o);
        if (p) {
            clearTimeout(p);
        }
        p = setTimeout(v, 200);
        return (d.event.dispatch || d.event.handle).apply(this, n);
    }
    function v() {
        g = null;
    }
    function y(e, t) {
        return m.settings.adjustOldDeltas && e.type === "mousewheel" && t % 120 === 0;
    }
});

(function(e) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], e);
    } else if (typeof module === "object" && module.exports) {
        module.exports = e(require("jquery"));
    } else {
        e(jQuery);
    }
})(function(d) {
    d.extend(d.fn, {
        validate: function(e) {
            if (!this.length) {
                if (e && e.debug && window.console) {
                    console.warn("Nothing selected, can't validate, returning nothing.");
                }
                return;
            }
            var i = d.data(this[0], "validator");
            if (i) {
                return i;
            }
            this.attr("novalidate", "novalidate");
            i = new d.validator(e, this[0]);
            d.data(this[0], "validator", i);
            if (i.settings.onsubmit) {
                this.on("click.validate", ":submit", function(e) {
                    i.submitButton = e.currentTarget;
                    if (d(this).hasClass("cancel")) {
                        i.cancelSubmit = true;
                    }
                    if (d(this).attr("formnovalidate") !== undefined) {
                        i.cancelSubmit = true;
                    }
                });
                this.on("submit.validate", function(n) {
                    if (i.settings.debug) {
                        n.preventDefault();
                    }
                    function e() {
                        var e, t;
                        if (i.submitButton && (i.settings.submitHandler || i.formSubmitted)) {
                            e = d("<input type='hidden'/>").attr("name", i.submitButton.name).val(d(i.submitButton).val()).appendTo(i.currentForm);
                        }
                        if (i.settings.submitHandler && !i.settings.debug) {
                            t = i.settings.submitHandler.call(i, i.currentForm, n);
                            if (e) {
                                e.remove();
                            }
                            if (t !== undefined) {
                                return t;
                            }
                            return false;
                        }
                        return true;
                    }
                    if (i.cancelSubmit) {
                        i.cancelSubmit = false;
                        return e();
                    }
                    if (i.form()) {
                        if (i.pendingRequest) {
                            i.formSubmitted = true;
                            return false;
                        }
                        return e();
                    } else {
                        i.focusInvalid();
                        return false;
                    }
                });
            }
            return i;
        },
        valid: function() {
            var e, t, n;
            if (d(this[0]).is("form")) {
                e = this.validate().form();
            } else {
                n = [];
                e = true;
                t = d(this[0].form).validate();
                this.each(function() {
                    e = t.element(this) && e;
                    if (!e) {
                        n = n.concat(t.errorList);
                    }
                });
                t.errorList = n;
            }
            return e;
        },
        rules: function(e, t) {
            var n = this[0], i, r, o, a, s, l;
            if (n == null) {
                return;
            }
            if (!n.form && n.isContentEditable) {
                n.form = this.closest("form")[0];
                n.name = this.attr("name");
            }
            if (n.form == null) {
                return;
            }
            if (e) {
                i = d.data(n.form, "validator").settings;
                r = i.rules;
                o = d.validator.staticRules(n);
                switch (e) {
                  case "add":
                    d.extend(o, d.validator.normalizeRule(t));
                    delete o.messages;
                    r[n.name] = o;
                    if (t.messages) {
                        i.messages[n.name] = d.extend(i.messages[n.name], t.messages);
                    }
                    break;

                  case "remove":
                    if (!t) {
                        delete r[n.name];
                        return o;
                    }
                    l = {};
                    d.each(t.split(/\s/), function(e, t) {
                        l[t] = o[t];
                        delete o[t];
                    });
                    return l;
                }
            }
            a = d.validator.normalizeRules(d.extend({}, d.validator.classRules(n), d.validator.attributeRules(n), d.validator.dataRules(n), d.validator.staticRules(n)), n);
            if (a.required) {
                s = a.required;
                delete a.required;
                a = d.extend({
                    required: s
                }, a);
            }
            if (a.remote) {
                s = a.remote;
                delete a.remote;
                a = d.extend(a, {
                    remote: s
                });
            }
            return a;
        }
    });
    d.extend(d.expr.pseudos || d.expr[":"], {
        blank: function(e) {
            return !d.trim("" + d(e).val());
        },
        filled: function(e) {
            var t = d(e).val();
            return t !== null && !!d.trim("" + t);
        },
        unchecked: function(e) {
            return !d(e).prop("checked");
        }
    });
    d.validator = function(e, t) {
        this.settings = d.extend(true, {}, d.validator.defaults, e);
        this.currentForm = t;
        this.init();
    };
    d.validator.format = function(n, e) {
        if (arguments.length === 1) {
            return function() {
                var e = d.makeArray(arguments);
                e.unshift(n);
                return d.validator.format.apply(this, e);
            };
        }
        if (e === undefined) {
            return n;
        }
        if (arguments.length > 2 && e.constructor !== Array) {
            e = d.makeArray(arguments).slice(1);
        }
        if (e.constructor !== Array) {
            e = [ e ];
        }
        d.each(e, function(e, t) {
            n = n.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
                return t;
            });
        });
        return n;
    };
    d.extend(d.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: false,
            focusInvalid: true,
            errorContainer: d([]),
            errorLabelContainer: d([]),
            onsubmit: true,
            ignore: ":hidden",
            ignoreTitle: false,
            onfocusin: function(e) {
                this.lastActive = e;
                if (this.settings.focusCleanup) {
                    if (this.settings.unhighlight) {
                        this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass);
                    }
                    this.hideThese(this.errorsFor(e));
                }
            },
            onfocusout: function(e) {
                if (!this.checkable(e) && (e.name in this.submitted || !this.optional(e))) {
                    this.element(e);
                }
            },
            onkeyup: function(e, t) {
                var n = [ 16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225 ];
                if (t.which === 9 && this.elementValue(e) === "" || d.inArray(t.keyCode, n) !== -1) {
                    return;
                } else if (e.name in this.submitted || e.name in this.invalid) {
                    this.element(e);
                }
            },
            onclick: function(e) {
                if (e.name in this.submitted) {
                    this.element(e);
                } else if (e.parentNode.name in this.submitted) {
                    this.element(e.parentNode);
                }
            },
            highlight: function(e, t, n) {
                if (e.type === "radio") {
                    this.findByName(e.name).addClass(t).removeClass(n);
                } else {
                    d(e).addClass(t).removeClass(n);
                }
            },
            unhighlight: function(e, t, n) {
                if (e.type === "radio") {
                    this.findByName(e.name).removeClass(t).addClass(n);
                } else {
                    d(e).removeClass(t).addClass(n);
                }
            }
        },
        setDefaults: function(e) {
            d.extend(d.validator.defaults, e);
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: d.validator.format("Please enter no more than {0} characters."),
            minlength: d.validator.format("Please enter at least {0} characters."),
            rangelength: d.validator.format("Please enter a value between {0} and {1} characters long."),
            range: d.validator.format("Please enter a value between {0} and {1}."),
            max: d.validator.format("Please enter a value less than or equal to {0}."),
            min: d.validator.format("Please enter a value greater than or equal to {0}."),
            step: d.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: false,
        prototype: {
            init: function() {
                this.labelContainer = d(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || d(this.currentForm);
                this.containers = d(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var r = this.currentForm, i = this.groups = {}, n;
                d.each(this.settings.groups, function(n, e) {
                    if (typeof e === "string") {
                        e = e.split(/\s/);
                    }
                    d.each(e, function(e, t) {
                        i[t] = n;
                    });
                });
                n = this.settings.rules;
                d.each(n, function(e, t) {
                    n[e] = d.validator.normalizeRule(t);
                });
                function e(e) {
                    if (!this.form && this.isContentEditable) {
                        this.form = d(this).closest("form")[0];
                        this.name = d(this).attr("name");
                    }
                    if (r !== this.form) {
                        return;
                    }
                    var t = d.data(this.form, "validator"), n = "on" + e.type.replace(/^validate/, ""), i = t.settings;
                    if (i[n] && !d(this).is(i.ignore)) {
                        i[n].call(t, this, e);
                    }
                }
                d(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " + "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " + "[type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e);
                if (this.settings.invalidHandler) {
                    d(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                }
            },
            form: function() {
                this.checkForm();
                d.extend(this.submitted, this.errorMap);
                this.invalid = d.extend({}, this.errorMap);
                if (!this.valid()) {
                    d(this.currentForm).triggerHandler("invalid-form", [ this ]);
                }
                this.showErrors();
                return this.valid();
            },
            checkForm: function() {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) {
                    this.check(t[e]);
                }
                return this.valid();
            },
            element: function(e) {
                var n = this.clean(e), i = this.validationTargetFor(n), r = this, o = true, t, a;
                if (i === undefined) {
                    delete this.invalid[n.name];
                } else {
                    this.prepareElement(i);
                    this.currentElements = d(i);
                    a = this.groups[i.name];
                    if (a) {
                        d.each(this.groups, function(e, t) {
                            if (t === a && e !== i.name) {
                                n = r.validationTargetFor(r.clean(r.findByName(e)));
                                if (n && n.name in r.invalid) {
                                    r.currentElements.push(n);
                                    o = r.check(n) && o;
                                }
                            }
                        });
                    }
                    t = this.check(i) !== false;
                    o = o && t;
                    if (t) {
                        this.invalid[i.name] = false;
                    } else {
                        this.invalid[i.name] = true;
                    }
                    if (!this.numberOfInvalids()) {
                        this.toHide = this.toHide.add(this.containers);
                    }
                    this.showErrors();
                    d(e).attr("aria-invalid", !t);
                }
                return o;
            },
            showErrors: function(t) {
                if (t) {
                    var n = this;
                    d.extend(this.errorMap, t);
                    this.errorList = d.map(this.errorMap, function(e, t) {
                        return {
                            message: e,
                            element: n.findByName(t)[0]
                        };
                    });
                    this.successList = d.grep(this.successList, function(e) {
                        return !(e.name in t);
                    });
                }
                if (this.settings.showErrors) {
                    this.settings.showErrors.call(this, this.errorMap, this.errorList);
                } else {
                    this.defaultShowErrors();
                }
            },
            resetForm: function() {
                if (d.fn.resetForm) {
                    d(this.currentForm).resetForm();
                }
                this.invalid = {};
                this.submitted = {};
                this.prepareForm();
                this.hideErrors();
                var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(e);
            },
            resetElements: function(e) {
                var t;
                if (this.settings.unhighlight) {
                    for (t = 0; e[t]; t++) {
                        this.settings.unhighlight.call(this, e[t], this.settings.errorClass, "");
                        this.findByName(e[t].name).removeClass(this.settings.validClass);
                    }
                } else {
                    e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
                }
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid);
            },
            objectLength: function(e) {
                var t = 0, n;
                for (n in e) {
                    if (e[n] !== undefined && e[n] !== null && e[n] !== false) {
                        t++;
                    }
                }
                return t;
            },
            hideErrors: function() {
                this.hideThese(this.toHide);
            },
            hideThese: function(e) {
                e.not(this.containers).text("");
                this.addWrapper(e).hide();
            },
            valid: function() {
                return this.size() === 0;
            },
            size: function() {
                return this.errorList.length;
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) {
                    try {
                        d(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
                    } catch (e) {}
                }
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && d.grep(this.errorList, function(e) {
                    return e.element.name === t.name;
                }).length === 1 && t;
            },
            elements: function() {
                var t = this, n = {};
                return d(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var e = this.name || d(this).attr("name");
                    if (!e && t.settings.debug && window.console) {
                        console.error("%o has no name assigned", this);
                    }
                    if (this.isContentEditable) {
                        this.form = d(this).closest("form")[0];
                        this.name = e;
                    }
                    if (this.form !== t.currentForm) {
                        return false;
                    }
                    if (e in n || !t.objectLength(d(this).rules())) {
                        return false;
                    }
                    n[e] = true;
                    return true;
                });
            },
            clean: function(e) {
                return d(e)[0];
            },
            errors: function() {
                var e = this.settings.errorClass.split(" ").join(".");
                return d(this.settings.errorElement + "." + e, this.errorContext);
            },
            resetInternals: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = d([]);
                this.toHide = d([]);
            },
            reset: function() {
                this.resetInternals();
                this.currentElements = d([]);
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers);
            },
            prepareElement: function(e) {
                this.reset();
                this.toHide = this.errorsFor(e);
            },
            elementValue: function(e) {
                var t = d(e), n = e.type, i, r;
                if (n === "radio" || n === "checkbox") {
                    return this.findByName(e.name).filter(":checked").val();
                } else if (n === "number" && typeof e.validity !== "undefined") {
                    return e.validity.badInput ? "NaN" : t.val();
                }
                if (e.isContentEditable) {
                    i = t.text();
                } else {
                    i = t.val();
                }
                if (n === "file") {
                    if (i.substr(0, 12) === "C:\\fakepath\\") {
                        return i.substr(12);
                    }
                    r = i.lastIndexOf("/");
                    if (r >= 0) {
                        return i.substr(r + 1);
                    }
                    r = i.lastIndexOf("\\");
                    if (r >= 0) {
                        return i.substr(r + 1);
                    }
                    return i;
                }
                if (typeof i === "string") {
                    return i.replace(/\r/g, "");
                }
                return i;
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var t = d(e).rules(), n = d.map(t, function(e, t) {
                    return t;
                }).length, i = false, r = this.elementValue(e), o, a, s, l;
                if (typeof t.normalizer === "function") {
                    l = t.normalizer;
                } else if (typeof this.settings.normalizer === "function") {
                    l = this.settings.normalizer;
                }
                if (l) {
                    r = l.call(e, r);
                    delete t.normalizer;
                }
                for (a in t) {
                    s = {
                        method: a,
                        parameters: t[a]
                    };
                    try {
                        o = d.validator.methods[a].call(this, r, e, s.parameters);
                        if (o === "dependency-mismatch" && n === 1) {
                            i = true;
                            continue;
                        }
                        i = false;
                        if (o === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(e));
                            return;
                        }
                        if (!o) {
                            this.formatAndAdd(e, s);
                            return false;
                        }
                    } catch (t) {
                        if (this.settings.debug && window.console) {
                            console.log("Exception occurred when checking element " + e.id + ", check the '" + s.method + "' method.", t);
                        }
                        if (t instanceof TypeError) {
                            t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + s.method + "' method.";
                        }
                        throw t;
                    }
                }
                if (i) {
                    return;
                }
                if (this.objectLength(t)) {
                    this.successList.push(e);
                }
                return true;
            },
            customDataMessage: function(e, t) {
                return d(e).data("msg" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()) || d(e).data("msg");
            },
            customMessage: function(e, t) {
                var n = this.settings.messages[e];
                return n && (n.constructor === String ? n : n[t]);
            },
            findDefined: function() {
                for (var e = 0; e < arguments.length; e++) {
                    if (arguments[e] !== undefined) {
                        return arguments[e];
                    }
                }
                return undefined;
            },
            defaultMessage: function(e, t) {
                if (typeof t === "string") {
                    t = {
                        method: t
                    };
                }
                var n = this.findDefined(this.customMessage(e.name, t.method), this.customDataMessage(e, t.method), !this.settings.ignoreTitle && e.title || undefined, d.validator.messages[t.method], "<strong>Warning: No message defined for " + e.name + "</strong>"), i = /\$?\{(\d+)\}/g;
                if (typeof n === "function") {
                    n = n.call(this, t.parameters, e);
                } else if (i.test(n)) {
                    n = d.validator.format(n.replace(i, "{$1}"), t.parameters);
                }
                return n;
            },
            formatAndAdd: function(e, t) {
                var n = this.defaultMessage(e, t);
                this.errorList.push({
                    message: n,
                    element: e,
                    method: t.method
                });
                this.errorMap[e.name] = n;
                this.submitted[e.name] = n;
            },
            addWrapper: function(e) {
                if (this.settings.wrapper) {
                    e = e.add(e.parent(this.settings.wrapper));
                }
                return e;
            },
            defaultShowErrors: function() {
                var e, t, n;
                for (e = 0; this.errorList[e]; e++) {
                    n = this.errorList[e];
                    if (this.settings.highlight) {
                        this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass);
                    }
                    this.showLabel(n.element, n.message);
                }
                if (this.errorList.length) {
                    this.toShow = this.toShow.add(this.containers);
                }
                if (this.settings.success) {
                    for (e = 0; this.successList[e]; e++) {
                        this.showLabel(this.successList[e]);
                    }
                }
                if (this.settings.unhighlight) {
                    for (e = 0, t = this.validElements(); t[e]; e++) {
                        this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                    }
                }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show();
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements());
            },
            invalidElements: function() {
                return d(this.errorList).map(function() {
                    return this.element;
                });
            },
            showLabel: function(e, t) {
                var n, i, r, o, a = this.errorsFor(e), s = this.idOrName(e), l = d(e).attr("aria-describedby");
                if (a.length) {
                    a.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                    a.html(t);
                } else {
                    a = d("<" + this.settings.errorElement + ">").attr("id", s + "-error").addClass(this.settings.errorClass).html(t || "");
                    n = a;
                    if (this.settings.wrapper) {
                        n = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                    }
                    if (this.labelContainer.length) {
                        this.labelContainer.append(n);
                    } else if (this.settings.errorPlacement) {
                        this.settings.errorPlacement.call(this, n, d(e));
                    } else {
                        n.insertAfter(e);
                    }
                    if (a.is("label")) {
                        a.attr("for", s);
                    } else if (a.parents("label[for='" + this.escapeCssMeta(s) + "']").length === 0) {
                        r = a.attr("id");
                        if (!l) {
                            l = r;
                        } else if (!l.match(new RegExp("\\b" + this.escapeCssMeta(r) + "\\b"))) {
                            l += " " + r;
                        }
                        d(e).attr("aria-describedby", l);
                        i = this.groups[e.name];
                        if (i) {
                            o = this;
                            d.each(o.groups, function(e, t) {
                                if (t === i) {
                                    d("[name='" + o.escapeCssMeta(e) + "']", o.currentForm).attr("aria-describedby", a.attr("id"));
                                }
                            });
                        }
                    }
                }
                if (!t && this.settings.success) {
                    a.text("");
                    if (typeof this.settings.success === "string") {
                        a.addClass(this.settings.success);
                    } else {
                        this.settings.success(a, e);
                    }
                }
                this.toShow = this.toShow.add(a);
            },
            errorsFor: function(e) {
                var t = this.escapeCssMeta(this.idOrName(e)), n = d(e).attr("aria-describedby"), i = "label[for='" + t + "'], label[for='" + t + "'] *";
                if (n) {
                    i = i + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #");
                }
                return this.errors().filter(i);
            },
            escapeCssMeta: function(e) {
                return e.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
            },
            idOrName: function(e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name);
            },
            validationTargetFor: function(e) {
                if (this.checkable(e)) {
                    e = this.findByName(e.name);
                }
                return d(e).not(this.settings.ignore)[0];
            },
            checkable: function(e) {
                return /radio|checkbox/i.test(e.type);
            },
            findByName: function(e) {
                return d(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']");
            },
            getLength: function(e, t) {
                switch (t.nodeName.toLowerCase()) {
                  case "select":
                    return d("option:selected", t).length;

                  case "input":
                    if (this.checkable(t)) {
                        return this.findByName(t.name).filter(":checked").length;
                    }
                }
                return e.length;
            },
            depend: function(e, t) {
                return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : true;
            },
            dependTypes: {
                boolean: function(e) {
                    return e;
                },
                string: function(e, t) {
                    return !!d(e, t.form).length;
                },
                function: function(e, t) {
                    return e(t);
                }
            },
            optional: function(e) {
                var t = this.elementValue(e);
                return !d.validator.methods.required.call(this, t, e) && "dependency-mismatch";
            },
            startRequest: function(e) {
                if (!this.pending[e.name]) {
                    this.pendingRequest++;
                    d(e).addClass(this.settings.pendingClass);
                    this.pending[e.name] = true;
                }
            },
            stopRequest: function(e, t) {
                this.pendingRequest--;
                if (this.pendingRequest < 0) {
                    this.pendingRequest = 0;
                }
                delete this.pending[e.name];
                d(e).removeClass(this.settings.pendingClass);
                if (t && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
                    d(this.currentForm).submit();
                    if (this.submitButton) {
                        d("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove();
                    }
                    this.formSubmitted = false;
                } else if (!t && this.pendingRequest === 0 && this.formSubmitted) {
                    d(this.currentForm).triggerHandler("invalid-form", [ this ]);
                    this.formSubmitted = false;
                }
            },
            previousValue: function(e, t) {
                t = typeof t === "string" && t || "remote";
                return d.data(e, "previousValue") || d.data(e, "previousValue", {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(e, {
                        method: t
                    })
                });
            },
            destroy: function() {
                this.resetForm();
                d(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur");
            }
        },
        classRuleSettings: {
            required: {
                required: true
            },
            email: {
                email: true
            },
            url: {
                url: true
            },
            date: {
                date: true
            },
            dateISO: {
                dateISO: true
            },
            number: {
                number: true
            },
            digits: {
                digits: true
            },
            creditcard: {
                creditcard: true
            }
        },
        addClassRules: function(e, t) {
            if (e.constructor === String) {
                this.classRuleSettings[e] = t;
            } else {
                d.extend(this.classRuleSettings, e);
            }
        },
        classRules: function(e) {
            var t = {}, n = d(e).attr("class");
            if (n) {
                d.each(n.split(" "), function() {
                    if (this in d.validator.classRuleSettings) {
                        d.extend(t, d.validator.classRuleSettings[this]);
                    }
                });
            }
            return t;
        },
        normalizeAttributeRule: function(e, t, n, i) {
            if (/min|max|step/.test(n) && (t === null || /number|range|text/.test(t))) {
                i = Number(i);
                if (isNaN(i)) {
                    i = undefined;
                }
            }
            if (i || i === 0) {
                e[n] = i;
            } else if (t === n && t !== "range") {
                e[n] = true;
            }
        },
        attributeRules: function(e) {
            var t = {}, n = d(e), i = e.getAttribute("type"), r, o;
            for (r in d.validator.methods) {
                if (r === "required") {
                    o = e.getAttribute(r);
                    if (o === "") {
                        o = true;
                    }
                    o = !!o;
                } else {
                    o = n.attr(r);
                }
                this.normalizeAttributeRule(t, i, r, o);
            }
            if (t.maxlength && /-1|2147483647|524288/.test(t.maxlength)) {
                delete t.maxlength;
            }
            return t;
        },
        dataRules: function(e) {
            var t = {}, n = d(e), i = e.getAttribute("type"), r, o;
            for (r in d.validator.methods) {
                o = n.data("rule" + r.charAt(0).toUpperCase() + r.substring(1).toLowerCase());
                if (o === "") {
                    o = true;
                }
                this.normalizeAttributeRule(t, i, r, o);
            }
            return t;
        },
        staticRules: function(e) {
            var t = {}, n = d.data(e.form, "validator");
            if (n.settings.rules) {
                t = d.validator.normalizeRule(n.settings.rules[e.name]) || {};
            }
            return t;
        },
        normalizeRules: function(i, r) {
            d.each(i, function(e, t) {
                if (t === false) {
                    delete i[e];
                    return;
                }
                if (t.param || t.depends) {
                    var n = true;
                    switch (typeof t.depends) {
                      case "string":
                        n = !!d(t.depends, r.form).length;
                        break;

                      case "function":
                        n = t.depends.call(r, r);
                        break;
                    }
                    if (n) {
                        i[e] = t.param !== undefined ? t.param : true;
                    } else {
                        d.data(r.form, "validator").resetElements(d(r));
                        delete i[e];
                    }
                }
            });
            d.each(i, function(e, t) {
                i[e] = d.isFunction(t) && e !== "normalizer" ? t(r) : t;
            });
            d.each([ "minlength", "maxlength" ], function() {
                if (i[this]) {
                    i[this] = Number(i[this]);
                }
            });
            d.each([ "rangelength", "range" ], function() {
                var e;
                if (i[this]) {
                    if (d.isArray(i[this])) {
                        i[this] = [ Number(i[this][0]), Number(i[this][1]) ];
                    } else if (typeof i[this] === "string") {
                        e = i[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
                        i[this] = [ Number(e[0]), Number(e[1]) ];
                    }
                }
            });
            if (d.validator.autoCreateRanges) {
                if (i.min != null && i.max != null) {
                    i.range = [ i.min, i.max ];
                    delete i.min;
                    delete i.max;
                }
                if (i.minlength != null && i.maxlength != null) {
                    i.rangelength = [ i.minlength, i.maxlength ];
                    delete i.minlength;
                    delete i.maxlength;
                }
            }
            return i;
        },
        normalizeRule: function(e) {
            if (typeof e === "string") {
                var t = {};
                d.each(e.split(/\s/), function() {
                    t[this] = true;
                });
                e = t;
            }
            return e;
        },
        addMethod: function(e, t, n) {
            d.validator.methods[e] = t;
            d.validator.messages[e] = n !== undefined ? n : d.validator.messages[e];
            if (t.length < 3) {
                d.validator.addClassRules(e, d.validator.normalizeRule(e));
            }
        },
        methods: {
            required: function(e, t, n) {
                if (!this.depend(n, t)) {
                    return "dependency-mismatch";
                }
                if (t.nodeName.toLowerCase() === "select") {
                    var i = d(t).val();
                    return i && i.length > 0;
                }
                if (this.checkable(t)) {
                    return this.getLength(e, t) > 0;
                }
                return e !== undefined && e !== null && e.length > 0;
            },
            email: function(e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e);
            },
            url: function(e, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e);
            },
            date: function() {
                var n = false;
                return function(e, t) {
                    if (!n) {
                        n = true;
                        if (this.settings.debug && window.console) {
                            console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\n" + "Please don't use it, since it relies on the Date constructor, which\n" + "behaves very differently across browsers and locales. Use `dateISO`\n" + "instead or one of the locale specific methods in `localizations/`\n" + "and `additional-methods.js`.");
                        }
                    }
                    return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString());
                };
            }(),
            dateISO: function(e, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e);
            },
            number: function(e, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e);
            },
            digits: function(e, t) {
                return this.optional(t) || /^\d+$/.test(e);
            },
            minlength: function(e, t, n) {
                var i = d.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || i >= n;
            },
            maxlength: function(e, t, n) {
                var i = d.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || i <= n;
            },
            rangelength: function(e, t, n) {
                var i = d.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || i >= n[0] && i <= n[1];
            },
            min: function(e, t, n) {
                return this.optional(t) || e >= n;
            },
            max: function(e, t, n) {
                return this.optional(t) || e <= n;
            },
            range: function(e, t, n) {
                return this.optional(t) || e >= n[0] && e <= n[1];
            },
            step: function(e, t, n) {
                var i = d(t).attr("type"), r = "Step attribute on input type " + i + " is not supported.", o = [ "text", "number", "range" ], a = new RegExp("\\b" + i + "\\b"), s = i && !a.test(o.join()), l = function(e) {
                    var t = ("" + e).match(/(?:\.(\d+))?$/);
                    if (!t) {
                        return 0;
                    }
                    return t[1] ? t[1].length : 0;
                }, u = function(e) {
                    return Math.round(e * Math.pow(10, c));
                }, f = true, c;
                if (s) {
                    throw new Error(r);
                }
                c = l(n);
                if (l(e) > c || u(e) % u(n) !== 0) {
                    f = false;
                }
                return this.optional(t) || f;
            },
            equalTo: function(e, t, n) {
                var i = d(n);
                if (this.settings.onfocusout && i.not(".validate-equalTo-blur").length) {
                    i.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                        d(t).valid();
                    });
                }
                return e === i.val();
            },
            remote: function(o, a, e, s) {
                if (this.optional(a)) {
                    return "dependency-mismatch";
                }
                s = typeof s === "string" && s || "remote";
                var l = this.previousValue(a, s), u, t, n;
                if (!this.settings.messages[a.name]) {
                    this.settings.messages[a.name] = {};
                }
                l.originalMessage = l.originalMessage || this.settings.messages[a.name][s];
                this.settings.messages[a.name][s] = l.message;
                e = typeof e === "string" && {
                    url: e
                } || e;
                n = d.param(d.extend({
                    data: o
                }, e.data));
                if (l.old === n) {
                    return l.valid;
                }
                l.old = n;
                u = this;
                this.startRequest(a);
                t = {};
                t[a.name] = o;
                d.ajax(d.extend(true, {
                    mode: "abort",
                    port: "validate" + a.name,
                    dataType: "json",
                    data: t,
                    context: u.currentForm,
                    success: function(e) {
                        var t = e === true || e === "true", n, i, r;
                        u.settings.messages[a.name][s] = l.originalMessage;
                        if (t) {
                            r = u.formSubmitted;
                            u.resetInternals();
                            u.toHide = u.errorsFor(a);
                            u.formSubmitted = r;
                            u.successList.push(a);
                            u.invalid[a.name] = false;
                            u.showErrors();
                        } else {
                            n = {};
                            i = e || u.defaultMessage(a, {
                                method: s,
                                parameters: o
                            });
                            n[a.name] = l.message = i;
                            u.invalid[a.name] = true;
                            u.showErrors(n);
                        }
                        l.valid = t;
                        u.stopRequest(a, t);
                    }
                }, e));
                return "pending";
            }
        }
    });
    var r = {}, i;
    if (d.ajaxPrefilter) {
        d.ajaxPrefilter(function(e, t, n) {
            var i = e.port;
            if (e.mode === "abort") {
                if (r[i]) {
                    r[i].abort();
                }
                r[i] = n;
            }
        });
    } else {
        i = d.ajax;
        d.ajax = function(e) {
            var t = ("mode" in e ? e : d.ajaxSettings).mode, n = ("port" in e ? e : d.ajaxSettings).port;
            if (t === "abort") {
                if (r[n]) {
                    r[n].abort();
                }
                r[n] = i.apply(this, arguments);
                return r[n];
            }
            return i.apply(this, arguments);
        };
    }
    return d;
});

(function() {
    function r(e, t) {
        document.addEventListener ? e.addEventListener("scroll", t, !1) : e.attachEvent("scroll", t);
    }
    function n(t) {
        document.body ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function e() {
            document.removeEventListener("DOMContentLoaded", e);
            t();
        }) : document.attachEvent("onreadystatechange", function e() {
            if ("interactive" == document.readyState || "complete" == document.readyState) document.detachEvent("onreadystatechange", e), 
            t();
        });
    }
    function x(e) {
        this.a = document.createElement("div");
        this.a.setAttribute("aria-hidden", "true");
        this.a.appendChild(document.createTextNode(e));
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
    function w(e, t) {
        e.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + t + ";";
    }
    function o(e) {
        var t = e.a.offsetWidth, n = t + 100;
        e.f.style.width = n + "px";
        e.c.scrollLeft = n;
        e.b.scrollLeft = e.b.scrollWidth + 100;
        return e.g !== t ? (e.g = t, !0) : !1;
    }
    function C(e, t) {
        function n() {
            var e = i;
            o(e) && e.a.parentNode && t(e.g);
        }
        var i = e;
        r(e.b, n);
        r(e.c, n);
        o(e);
    }
    function e(e, t) {
        var n = t || {};
        this.family = e;
        this.style = n.style || "normal";
        this.weight = n.weight || "normal";
        this.stretch = n.stretch || "normal";
    }
    var T = null, t = null, i = null, a = null;
    function s() {
        if (null === t) if (l() && /Apple/.test(window.navigator.vendor)) {
            var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
            t = !!e && 603 > parseInt(e[1], 10);
        } else t = !1;
        return t;
    }
    function l() {
        null === a && (a = !!document.fonts);
        return a;
    }
    function u() {
        if (null === i) {
            var e = document.createElement("div");
            try {
                e.style.font = "condensed 100px sans-serif";
            } catch (e) {}
            i = "" !== e.style.font;
        }
        return i;
    }
    function k(e, t) {
        return [ e.style, e.weight, u() ? e.stretch : "", "100px", t ].join(" ");
    }
    e.prototype.load = function(e, t) {
        var g = this, m = e || "BESbswy", v = 0, y = t || 3e3, b = new Date().getTime();
        return new Promise(function(h, p) {
            if (l() && !s()) {
                var e = new Promise(function(t, e) {
                    function n() {
                        new Date().getTime() - b >= y ? e() : document.fonts.load(k(g, '"' + g.family + '"'), m).then(function(e) {
                            1 <= e.length ? t() : setTimeout(n, 25);
                        }, function() {
                            e();
                        });
                    }
                    n();
                }), t = new Promise(function(e, t) {
                    v = setTimeout(t, y);
                });
                Promise.race([ t, e ]).then(function() {
                    clearTimeout(v);
                    h(g);
                }, function() {
                    p(g);
                });
            } else n(function() {
                function t() {
                    var e;
                    if (e = -1 != a && -1 != s || -1 != a && -1 != l || -1 != s && -1 != l) (e = a != s && a != l && s != l) || (null === T && (e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), 
                    T = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))), 
                    e = T && (a == u && s == u && l == u || a == f && s == f && l == f || a == c && s == c && l == c)), 
                    e = !e;
                    e && (d.parentNode && d.parentNode.removeChild(d), clearTimeout(v), h(g));
                }
                function n() {
                    if (new Date().getTime() - b >= y) d.parentNode && d.parentNode.removeChild(d), 
                    p(g); else {
                        var e = document.hidden;
                        if (!0 === e || void 0 === e) a = i.a.offsetWidth, s = r.a.offsetWidth, l = o.a.offsetWidth, 
                        t();
                        v = setTimeout(n, 50);
                    }
                }
                var i = new x(m), r = new x(m), o = new x(m), a = -1, s = -1, l = -1, u = -1, f = -1, c = -1, d = document.createElement("div");
                d.dir = "ltr";
                w(i, k(g, "sans-serif"));
                w(r, k(g, "serif"));
                w(o, k(g, "monospace"));
                d.appendChild(i.a);
                d.appendChild(r.a);
                d.appendChild(o.a);
                document.body.appendChild(d);
                u = i.a.offsetWidth;
                f = r.a.offsetWidth;
                c = o.a.offsetWidth;
                n();
                C(i, function(e) {
                    a = e;
                    t();
                });
                w(i, k(g, '"' + g.family + '",sans-serif'));
                C(r, function(e) {
                    s = e;
                    t();
                });
                w(r, k(g, '"' + g.family + '",serif'));
                C(o, function(e) {
                    l = e;
                    t();
                });
                w(o, k(g, '"' + g.family + '",monospace'));
            });
        });
    };
    "object" === typeof module ? module.exports = e : (window.FontFaceObserver = e, 
    window.FontFaceObserver.prototype.load = e.prototype.load);
})();

$(document).ready(function() {
    $(".head-hamburger a").click(function(e) {
        e.preventDefault();
        $("#nav").toggle();
    });
    $(".fancybox").fancybox();
});