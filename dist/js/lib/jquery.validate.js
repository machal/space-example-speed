(function(e) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], e);
    } else if (typeof module === "object" && module.exports) {
        module.exports = e(require("jquery"));
    } else {
        e(jQuery);
    }
})(function(f) {
    f.extend(f.fn, {
        validate: function(e) {
            if (!this.length) {
                if (e && e.debug && window.console) {
                    console.warn("Nothing selected, can't validate, returning nothing.");
                }
                return;
            }
            var s = f.data(this[0], "validator");
            if (s) {
                return s;
            }
            this.attr("novalidate", "novalidate");
            s = new f.validator(e, this[0]);
            f.data(this[0], "validator", s);
            if (s.settings.onsubmit) {
                this.on("click.validate", ":submit", function(e) {
                    s.submitButton = e.currentTarget;
                    if (f(this).hasClass("cancel")) {
                        s.cancelSubmit = true;
                    }
                    if (f(this).attr("formnovalidate") !== undefined) {
                        s.cancelSubmit = true;
                    }
                });
                this.on("submit.validate", function(i) {
                    if (s.settings.debug) {
                        i.preventDefault();
                    }
                    function e() {
                        var e, t;
                        if (s.submitButton && (s.settings.submitHandler || s.formSubmitted)) {
                            e = f("<input type='hidden'/>").attr("name", s.submitButton.name).val(f(s.submitButton).val()).appendTo(s.currentForm);
                        }
                        if (s.settings.submitHandler && !s.settings.debug) {
                            t = s.settings.submitHandler.call(s, s.currentForm, i);
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
                    if (s.cancelSubmit) {
                        s.cancelSubmit = false;
                        return e();
                    }
                    if (s.form()) {
                        if (s.pendingRequest) {
                            s.formSubmitted = true;
                            return false;
                        }
                        return e();
                    } else {
                        s.focusInvalid();
                        return false;
                    }
                });
            }
            return s;
        },
        valid: function() {
            var e, t, i;
            if (f(this[0]).is("form")) {
                e = this.validate().form();
            } else {
                i = [];
                e = true;
                t = f(this[0].form).validate();
                this.each(function() {
                    e = t.element(this) && e;
                    if (!e) {
                        i = i.concat(t.errorList);
                    }
                });
                t.errorList = i;
            }
            return e;
        },
        rules: function(e, t) {
            var i = this[0], s = typeof this.attr("contenteditable") !== "undefined" && this.attr("contenteditable") !== "false", r, n, a, o, l, u;
            if (i == null) {
                return;
            }
            if (!i.form && s) {
                i.form = this.closest("form")[0];
                i.name = this.attr("name");
            }
            if (i.form == null) {
                return;
            }
            if (e) {
                r = f.data(i.form, "validator").settings;
                n = r.rules;
                a = f.validator.staticRules(i);
                switch (e) {
                  case "add":
                    f.extend(a, f.validator.normalizeRule(t));
                    delete a.messages;
                    n[i.name] = a;
                    if (t.messages) {
                        r.messages[i.name] = f.extend(r.messages[i.name], t.messages);
                    }
                    break;

                  case "remove":
                    if (!t) {
                        delete n[i.name];
                        return a;
                    }
                    u = {};
                    f.each(t.split(/\s/), function(e, t) {
                        u[t] = a[t];
                        delete a[t];
                    });
                    return u;
                }
            }
            o = f.validator.normalizeRules(f.extend({}, f.validator.classRules(i), f.validator.attributeRules(i), f.validator.dataRules(i), f.validator.staticRules(i)), i);
            if (o.required) {
                l = o.required;
                delete o.required;
                o = f.extend({
                    required: l
                }, o);
            }
            if (o.remote) {
                l = o.remote;
                delete o.remote;
                o = f.extend(o, {
                    remote: l
                });
            }
            return o;
        }
    });
    f.extend(f.expr.pseudos || f.expr[":"], {
        blank: function(e) {
            return !f.trim("" + f(e).val());
        },
        filled: function(e) {
            var t = f(e).val();
            return t !== null && !!f.trim("" + t);
        },
        unchecked: function(e) {
            return !f(e).prop("checked");
        }
    });
    f.validator = function(e, t) {
        this.settings = f.extend(true, {}, f.validator.defaults, e);
        this.currentForm = t;
        this.init();
    };
    f.validator.format = function(i, e) {
        if (arguments.length === 1) {
            return function() {
                var e = f.makeArray(arguments);
                e.unshift(i);
                return f.validator.format.apply(this, e);
            };
        }
        if (e === undefined) {
            return i;
        }
        if (arguments.length > 2 && e.constructor !== Array) {
            e = f.makeArray(arguments).slice(1);
        }
        if (e.constructor !== Array) {
            e = [ e ];
        }
        f.each(e, function(e, t) {
            i = i.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
                return t;
            });
        });
        return i;
    };
    f.extend(f.validator, {
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
            errorContainer: f([]),
            errorLabelContainer: f([]),
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
                var i = [ 16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225 ];
                if (t.which === 9 && this.elementValue(e) === "" || f.inArray(t.keyCode, i) !== -1) {
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
            highlight: function(e, t, i) {
                if (e.type === "radio") {
                    this.findByName(e.name).addClass(t).removeClass(i);
                } else {
                    f(e).addClass(t).removeClass(i);
                }
            },
            unhighlight: function(e, t, i) {
                if (e.type === "radio") {
                    this.findByName(e.name).removeClass(t).addClass(i);
                } else {
                    f(e).removeClass(t).addClass(i);
                }
            }
        },
        setDefaults: function(e) {
            f.extend(f.validator.defaults, e);
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
            maxlength: f.validator.format("Please enter no more than {0} characters."),
            minlength: f.validator.format("Please enter at least {0} characters."),
            rangelength: f.validator.format("Please enter a value between {0} and {1} characters long."),
            range: f.validator.format("Please enter a value between {0} and {1}."),
            max: f.validator.format("Please enter a value less than or equal to {0}."),
            min: f.validator.format("Please enter a value greater than or equal to {0}."),
            step: f.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: false,
        prototype: {
            init: function() {
                this.labelContainer = f(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || f(this.currentForm);
                this.containers = f(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var n = this.currentForm, s = this.groups = {}, i;
                f.each(this.settings.groups, function(i, e) {
                    if (typeof e === "string") {
                        e = e.split(/\s/);
                    }
                    f.each(e, function(e, t) {
                        s[t] = i;
                    });
                });
                i = this.settings.rules;
                f.each(i, function(e, t) {
                    i[e] = f.validator.normalizeRule(t);
                });
                function e(e) {
                    var t = typeof f(this).attr("contenteditable") !== "undefined" && f(this).attr("contenteditable") !== "false";
                    if (!this.form && t) {
                        this.form = f(this).closest("form")[0];
                        this.name = f(this).attr("name");
                    }
                    if (n !== this.form) {
                        return;
                    }
                    var i = f.data(this.form, "validator"), s = "on" + e.type.replace(/^validate/, ""), r = i.settings;
                    if (r[s] && !f(this).is(r.ignore)) {
                        r[s].call(i, this, e);
                    }
                }
                f(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " + "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " + "[type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e);
                if (this.settings.invalidHandler) {
                    f(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                }
            },
            form: function() {
                this.checkForm();
                f.extend(this.submitted, this.errorMap);
                this.invalid = f.extend({}, this.errorMap);
                if (!this.valid()) {
                    f(this.currentForm).triggerHandler("invalid-form", [ this ]);
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
                var i = this.clean(e), s = this.validationTargetFor(i), r = this, n = true, t, a;
                if (s === undefined) {
                    delete this.invalid[i.name];
                } else {
                    this.prepareElement(s);
                    this.currentElements = f(s);
                    a = this.groups[s.name];
                    if (a) {
                        f.each(this.groups, function(e, t) {
                            if (t === a && e !== s.name) {
                                i = r.validationTargetFor(r.clean(r.findByName(e)));
                                if (i && i.name in r.invalid) {
                                    r.currentElements.push(i);
                                    n = r.check(i) && n;
                                }
                            }
                        });
                    }
                    t = this.check(s) !== false;
                    n = n && t;
                    if (t) {
                        this.invalid[s.name] = false;
                    } else {
                        this.invalid[s.name] = true;
                    }
                    if (!this.numberOfInvalids()) {
                        this.toHide = this.toHide.add(this.containers);
                    }
                    this.showErrors();
                    f(e).attr("aria-invalid", !t);
                }
                return n;
            },
            showErrors: function(t) {
                if (t) {
                    var i = this;
                    f.extend(this.errorMap, t);
                    this.errorList = f.map(this.errorMap, function(e, t) {
                        return {
                            message: e,
                            element: i.findByName(t)[0]
                        };
                    });
                    this.successList = f.grep(this.successList, function(e) {
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
                if (f.fn.resetForm) {
                    f(this.currentForm).resetForm();
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
                var t = 0, i;
                for (i in e) {
                    if (e[i] !== undefined && e[i] !== null && e[i] !== false) {
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
                        f(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin");
                    } catch (e) {}
                }
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && f.grep(this.errorList, function(e) {
                    return e.element.name === t.name;
                }).length === 1 && t;
            },
            elements: function() {
                var i = this, s = {};
                return f(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var e = this.name || f(this).attr("name");
                    var t = typeof f(this).attr("contenteditable") !== "undefined" && f(this).attr("contenteditable") !== "false";
                    if (!e && i.settings.debug && window.console) {
                        console.error("%o has no name assigned", this);
                    }
                    if (t) {
                        this.form = f(this).closest("form")[0];
                        this.name = e;
                    }
                    if (this.form !== i.currentForm) {
                        return false;
                    }
                    if (e in s || !i.objectLength(f(this).rules())) {
                        return false;
                    }
                    s[e] = true;
                    return true;
                });
            },
            clean: function(e) {
                return f(e)[0];
            },
            errors: function() {
                var e = this.settings.errorClass.split(" ").join(".");
                return f(this.settings.errorElement + "." + e, this.errorContext);
            },
            resetInternals: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = f([]);
                this.toHide = f([]);
            },
            reset: function() {
                this.resetInternals();
                this.currentElements = f([]);
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
                var t = f(e), i = e.type, s = typeof t.attr("contenteditable") !== "undefined" && t.attr("contenteditable") !== "false", r, n;
                if (i === "radio" || i === "checkbox") {
                    return this.findByName(e.name).filter(":checked").val();
                } else if (i === "number" && typeof e.validity !== "undefined") {
                    return e.validity.badInput ? "NaN" : t.val();
                }
                if (s) {
                    r = t.text();
                } else {
                    r = t.val();
                }
                if (i === "file") {
                    if (r.substr(0, 12) === "C:\\fakepath\\") {
                        return r.substr(12);
                    }
                    n = r.lastIndexOf("/");
                    if (n >= 0) {
                        return r.substr(n + 1);
                    }
                    n = r.lastIndexOf("\\");
                    if (n >= 0) {
                        return r.substr(n + 1);
                    }
                    return r;
                }
                if (typeof r === "string") {
                    return r.replace(/\r/g, "");
                }
                return r;
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var e = f(t).rules(), i = f.map(e, function(e, t) {
                    return t;
                }).length, s = false, r = this.elementValue(t), n, a, o, l;
                if (typeof e.normalizer === "function") {
                    l = e.normalizer;
                } else if (typeof this.settings.normalizer === "function") {
                    l = this.settings.normalizer;
                }
                if (l) {
                    r = l.call(t, r);
                    delete e.normalizer;
                }
                for (a in e) {
                    o = {
                        method: a,
                        parameters: e[a]
                    };
                    try {
                        n = f.validator.methods[a].call(this, r, t, o.parameters);
                        if (n === "dependency-mismatch" && i === 1) {
                            s = true;
                            continue;
                        }
                        s = false;
                        if (n === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(t));
                            return;
                        }
                        if (!n) {
                            this.formatAndAdd(t, o);
                            return false;
                        }
                    } catch (e) {
                        if (this.settings.debug && window.console) {
                            console.log("Exception occurred when checking element " + t.id + ", check the '" + o.method + "' method.", e);
                        }
                        if (e instanceof TypeError) {
                            e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + o.method + "' method.";
                        }
                        throw e;
                    }
                }
                if (s) {
                    return;
                }
                if (this.objectLength(e)) {
                    this.successList.push(t);
                }
                return true;
            },
            customDataMessage: function(e, t) {
                return f(e).data("msg" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()) || f(e).data("msg");
            },
            customMessage: function(e, t) {
                var i = this.settings.messages[e];
                return i && (i.constructor === String ? i : i[t]);
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
                var i = this.findDefined(this.customMessage(e.name, t.method), this.customDataMessage(e, t.method), !this.settings.ignoreTitle && e.title || undefined, f.validator.messages[t.method], "<strong>Warning: No message defined for " + e.name + "</strong>"), s = /\$?\{(\d+)\}/g;
                if (typeof i === "function") {
                    i = i.call(this, t.parameters, e);
                } else if (s.test(i)) {
                    i = f.validator.format(i.replace(s, "{$1}"), t.parameters);
                }
                return i;
            },
            formatAndAdd: function(e, t) {
                var i = this.defaultMessage(e, t);
                this.errorList.push({
                    message: i,
                    element: e,
                    method: t.method
                });
                this.errorMap[e.name] = i;
                this.submitted[e.name] = i;
            },
            addWrapper: function(e) {
                if (this.settings.wrapper) {
                    e = e.add(e.parent(this.settings.wrapper));
                }
                return e;
            },
            defaultShowErrors: function() {
                var e, t, i;
                for (e = 0; this.errorList[e]; e++) {
                    i = this.errorList[e];
                    if (this.settings.highlight) {
                        this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass);
                    }
                    this.showLabel(i.element, i.message);
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
                return f(this.errorList).map(function() {
                    return this.element;
                });
            },
            showLabel: function(e, t) {
                var i, s, r, n, a = this.errorsFor(e), o = this.idOrName(e), l = f(e).attr("aria-describedby");
                if (a.length) {
                    a.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                    a.html(t);
                } else {
                    a = f("<" + this.settings.errorElement + ">").attr("id", o + "-error").addClass(this.settings.errorClass).html(t || "");
                    i = a;
                    if (this.settings.wrapper) {
                        i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                    }
                    if (this.labelContainer.length) {
                        this.labelContainer.append(i);
                    } else if (this.settings.errorPlacement) {
                        this.settings.errorPlacement.call(this, i, f(e));
                    } else {
                        i.insertAfter(e);
                    }
                    if (a.is("label")) {
                        a.attr("for", o);
                    } else if (a.parents("label[for='" + this.escapeCssMeta(o) + "']").length === 0) {
                        r = a.attr("id");
                        if (!l) {
                            l = r;
                        } else if (!l.match(new RegExp("\\b" + this.escapeCssMeta(r) + "\\b"))) {
                            l += " " + r;
                        }
                        f(e).attr("aria-describedby", l);
                        s = this.groups[e.name];
                        if (s) {
                            n = this;
                            f.each(n.groups, function(e, t) {
                                if (t === s) {
                                    f("[name='" + n.escapeCssMeta(e) + "']", n.currentForm).attr("aria-describedby", a.attr("id"));
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
                var t = this.escapeCssMeta(this.idOrName(e)), i = f(e).attr("aria-describedby"), s = "label[for='" + t + "'], label[for='" + t + "'] *";
                if (i) {
                    s = s + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #");
                }
                return this.errors().filter(s);
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
                return f(e).not(this.settings.ignore)[0];
            },
            checkable: function(e) {
                return /radio|checkbox/i.test(e.type);
            },
            findByName: function(e) {
                return f(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']");
            },
            getLength: function(e, t) {
                switch (t.nodeName.toLowerCase()) {
                  case "select":
                    return f("option:selected", t).length;

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
                    return !!f(e, t.form).length;
                },
                function: function(e, t) {
                    return e(t);
                }
            },
            optional: function(e) {
                var t = this.elementValue(e);
                return !f.validator.methods.required.call(this, t, e) && "dependency-mismatch";
            },
            startRequest: function(e) {
                if (!this.pending[e.name]) {
                    this.pendingRequest++;
                    f(e).addClass(this.settings.pendingClass);
                    this.pending[e.name] = true;
                }
            },
            stopRequest: function(e, t) {
                this.pendingRequest--;
                if (this.pendingRequest < 0) {
                    this.pendingRequest = 0;
                }
                delete this.pending[e.name];
                f(e).removeClass(this.settings.pendingClass);
                if (t && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
                    f(this.currentForm).submit();
                    if (this.submitButton) {
                        f("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove();
                    }
                    this.formSubmitted = false;
                } else if (!t && this.pendingRequest === 0 && this.formSubmitted) {
                    f(this.currentForm).triggerHandler("invalid-form", [ this ]);
                    this.formSubmitted = false;
                }
            },
            previousValue: function(e, t) {
                t = typeof t === "string" && t || "remote";
                return f.data(e, "previousValue") || f.data(e, "previousValue", {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(e, {
                        method: t
                    })
                });
            },
            destroy: function() {
                this.resetForm();
                f(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur");
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
                f.extend(this.classRuleSettings, e);
            }
        },
        classRules: function(e) {
            var t = {}, i = f(e).attr("class");
            if (i) {
                f.each(i.split(" "), function() {
                    if (this in f.validator.classRuleSettings) {
                        f.extend(t, f.validator.classRuleSettings[this]);
                    }
                });
            }
            return t;
        },
        normalizeAttributeRule: function(e, t, i, s) {
            if (/min|max|step/.test(i) && (t === null || /number|range|text/.test(t))) {
                s = Number(s);
                if (isNaN(s)) {
                    s = undefined;
                }
            }
            if (s || s === 0) {
                e[i] = s;
            } else if (t === i && t !== "range") {
                e[i] = true;
            }
        },
        attributeRules: function(e) {
            var t = {}, i = f(e), s = e.getAttribute("type"), r, n;
            for (r in f.validator.methods) {
                if (r === "required") {
                    n = e.getAttribute(r);
                    if (n === "") {
                        n = true;
                    }
                    n = !!n;
                } else {
                    n = i.attr(r);
                }
                this.normalizeAttributeRule(t, s, r, n);
            }
            if (t.maxlength && /-1|2147483647|524288/.test(t.maxlength)) {
                delete t.maxlength;
            }
            return t;
        },
        dataRules: function(e) {
            var t = {}, i = f(e), s = e.getAttribute("type"), r, n;
            for (r in f.validator.methods) {
                n = i.data("rule" + r.charAt(0).toUpperCase() + r.substring(1).toLowerCase());
                if (n === "") {
                    n = true;
                }
                this.normalizeAttributeRule(t, s, r, n);
            }
            return t;
        },
        staticRules: function(e) {
            var t = {}, i = f.data(e.form, "validator");
            if (i.settings.rules) {
                t = f.validator.normalizeRule(i.settings.rules[e.name]) || {};
            }
            return t;
        },
        normalizeRules: function(s, r) {
            f.each(s, function(e, t) {
                if (t === false) {
                    delete s[e];
                    return;
                }
                if (t.param || t.depends) {
                    var i = true;
                    switch (typeof t.depends) {
                      case "string":
                        i = !!f(t.depends, r.form).length;
                        break;

                      case "function":
                        i = t.depends.call(r, r);
                        break;
                    }
                    if (i) {
                        s[e] = t.param !== undefined ? t.param : true;
                    } else {
                        f.data(r.form, "validator").resetElements(f(r));
                        delete s[e];
                    }
                }
            });
            f.each(s, function(e, t) {
                s[e] = f.isFunction(t) && e !== "normalizer" ? t(r) : t;
            });
            f.each([ "minlength", "maxlength" ], function() {
                if (s[this]) {
                    s[this] = Number(s[this]);
                }
            });
            f.each([ "rangelength", "range" ], function() {
                var e;
                if (s[this]) {
                    if (f.isArray(s[this])) {
                        s[this] = [ Number(s[this][0]), Number(s[this][1]) ];
                    } else if (typeof s[this] === "string") {
                        e = s[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
                        s[this] = [ Number(e[0]), Number(e[1]) ];
                    }
                }
            });
            if (f.validator.autoCreateRanges) {
                if (s.min != null && s.max != null) {
                    s.range = [ s.min, s.max ];
                    delete s.min;
                    delete s.max;
                }
                if (s.minlength != null && s.maxlength != null) {
                    s.rangelength = [ s.minlength, s.maxlength ];
                    delete s.minlength;
                    delete s.maxlength;
                }
            }
            return s;
        },
        normalizeRule: function(e) {
            if (typeof e === "string") {
                var t = {};
                f.each(e.split(/\s/), function() {
                    t[this] = true;
                });
                e = t;
            }
            return e;
        },
        addMethod: function(e, t, i) {
            f.validator.methods[e] = t;
            f.validator.messages[e] = i !== undefined ? i : f.validator.messages[e];
            if (t.length < 3) {
                f.validator.addClassRules(e, f.validator.normalizeRule(e));
            }
        },
        methods: {
            required: function(e, t, i) {
                if (!this.depend(i, t)) {
                    return "dependency-mismatch";
                }
                if (t.nodeName.toLowerCase() === "select") {
                    var s = f(t).val();
                    return s && s.length > 0;
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
                var i = false;
                return function(e, t) {
                    if (!i) {
                        i = true;
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
            minlength: function(e, t, i) {
                var s = f.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || s >= i;
            },
            maxlength: function(e, t, i) {
                var s = f.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || s <= i;
            },
            rangelength: function(e, t, i) {
                var s = f.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || s >= i[0] && s <= i[1];
            },
            min: function(e, t, i) {
                return this.optional(t) || e >= i;
            },
            max: function(e, t, i) {
                return this.optional(t) || e <= i;
            },
            range: function(e, t, i) {
                return this.optional(t) || e >= i[0] && e <= i[1];
            },
            step: function(e, t, i) {
                var s = f(t).attr("type"), r = "Step attribute on input type " + s + " is not supported.", n = [ "text", "number", "range" ], a = new RegExp("\\b" + s + "\\b"), o = s && !a.test(n.join()), l = function(e) {
                    var t = ("" + e).match(/(?:\.(\d+))?$/);
                    if (!t) {
                        return 0;
                    }
                    return t[1] ? t[1].length : 0;
                }, u = function(e) {
                    return Math.round(e * Math.pow(10, d));
                }, h = true, d;
                if (o) {
                    throw new Error(r);
                }
                d = l(i);
                if (l(e) > d || u(e) % u(i) !== 0) {
                    h = false;
                }
                return this.optional(t) || h;
            },
            equalTo: function(e, t, i) {
                var s = f(i);
                if (this.settings.onfocusout && s.not(".validate-equalTo-blur").length) {
                    s.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                        f(t).valid();
                    });
                }
                return e === s.val();
            },
            remote: function(n, a, e, o) {
                if (this.optional(a)) {
                    return "dependency-mismatch";
                }
                o = typeof o === "string" && o || "remote";
                var l = this.previousValue(a, o), u, t, i;
                if (!this.settings.messages[a.name]) {
                    this.settings.messages[a.name] = {};
                }
                l.originalMessage = l.originalMessage || this.settings.messages[a.name][o];
                this.settings.messages[a.name][o] = l.message;
                e = typeof e === "string" && {
                    url: e
                } || e;
                i = f.param(f.extend({
                    data: n
                }, e.data));
                if (l.old === i) {
                    return l.valid;
                }
                l.old = i;
                u = this;
                this.startRequest(a);
                t = {};
                t[a.name] = n;
                f.ajax(f.extend(true, {
                    mode: "abort",
                    port: "validate" + a.name,
                    dataType: "json",
                    data: t,
                    context: u.currentForm,
                    success: function(e) {
                        var t = e === true || e === "true", i, s, r;
                        u.settings.messages[a.name][o] = l.originalMessage;
                        if (t) {
                            r = u.formSubmitted;
                            u.resetInternals();
                            u.toHide = u.errorsFor(a);
                            u.formSubmitted = r;
                            u.successList.push(a);
                            u.invalid[a.name] = false;
                            u.showErrors();
                        } else {
                            i = {};
                            s = e || u.defaultMessage(a, {
                                method: o,
                                parameters: n
                            });
                            i[a.name] = l.message = s;
                            u.invalid[a.name] = true;
                            u.showErrors(i);
                        }
                        l.valid = t;
                        u.stopRequest(a, t);
                    }
                }, e));
                return "pending";
            }
        }
    });
    var r = {}, s;
    if (f.ajaxPrefilter) {
        f.ajaxPrefilter(function(e, t, i) {
            var s = e.port;
            if (e.mode === "abort") {
                if (r[s]) {
                    r[s].abort();
                }
                r[s] = i;
            }
        });
    } else {
        s = f.ajax;
        f.ajax = function(e) {
            var t = ("mode" in e ? e : f.ajaxSettings).mode, i = ("port" in e ? e : f.ajaxSettings).port;
            if (t === "abort") {
                if (r[i]) {
                    r[i].abort();
                }
                r[i] = s.apply(this, arguments);
                return r[i];
            }
            return s.apply(this, arguments);
        };
    }
    return f;
});