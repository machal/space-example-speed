/*!
 * jQuery Validation Plugin v1.16.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2016 Jörn Zaefferer
 * Released under the MIT license
 */
(function(a) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], a);
    } else if (typeof module === "object" && module.exports) {
        module.exports = a(require("jquery"));
    } else {
        a(jQuery);
    }
})(function(a) {
    a.extend(a.fn, {
        // http://jqueryvalidation.org/validate/
        validate: function(b) {
            // If nothing is selected, return nothing; can't chain anyway
            if (!this.length) {
                if (b && b.debug && window.console) {
                    console.warn("Nothing selected, can't validate, returning nothing.");
                }
                return;
            }
            // Check if a validator for this form was already created
            var c = a.data(this[0], "validator");
            if (c) {
                return c;
            }
            // Add novalidate tag if HTML5.
            this.attr("novalidate", "novalidate");
            c = new a.validator(b, this[0]);
            a.data(this[0], "validator", c);
            if (c.settings.onsubmit) {
                this.on("click.validate", ":submit", function(b) {
                    if (c.settings.submitHandler) {
                        c.submitButton = b.target;
                    }
                    // Allow suppressing validation by adding a cancel class to the submit button
                    if (a(this).hasClass("cancel")) {
                        c.cancelSubmit = true;
                    }
                    // Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
                    if (a(this).attr("formnovalidate") !== undefined) {
                        c.cancelSubmit = true;
                    }
                });
                // Validate the form on submit
                this.on("submit.validate", function(b) {
                    if (c.settings.debug) {
                        // Prevent form submit to be able to see console output
                        b.preventDefault();
                    }
                    function d() {
                        var d, e;
                        if (c.settings.submitHandler) {
                            if (c.submitButton) {
                                // Insert a hidden input as a replacement for the missing submit button
                                d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm);
                            }
                            e = c.settings.submitHandler.call(c, c.currentForm, b);
                            if (c.submitButton) {
                                // And clean up afterwards; thanks to no-block-scope, hidden can be referenced
                                d.remove();
                            }
                            if (e !== undefined) {
                                return e;
                            }
                            return false;
                        }
                        return true;
                    }
                    // Prevent submit for invalid forms or custom submit handlers
                    if (c.cancelSubmit) {
                        c.cancelSubmit = false;
                        return d();
                    }
                    if (c.form()) {
                        if (c.pendingRequest) {
                            c.formSubmitted = true;
                            return false;
                        }
                        return d();
                    } else {
                        c.focusInvalid();
                        return false;
                    }
                });
            }
            return c;
        },
        // http://jqueryvalidation.org/valid/
        valid: function() {
            var b, c, d;
            if (a(this[0]).is("form")) {
                b = this.validate().form();
            } else {
                d = [];
                b = true;
                c = a(this[0].form).validate();
                this.each(function() {
                    b = c.element(this) && b;
                    if (!b) {
                        d = d.concat(c.errorList);
                    }
                });
                c.errorList = d;
            }
            return b;
        },
        // http://jqueryvalidation.org/rules/
        rules: function(b, c) {
            var d = this[0], e, f, g, h, i, j;
            // If nothing is selected, return empty object; can't chain anyway
            if (d == null || d.form == null) {
                return;
            }
            if (b) {
                e = a.data(d.form, "validator").settings;
                f = e.rules;
                g = a.validator.staticRules(d);
                switch (b) {
                  case "add":
                    a.extend(g, a.validator.normalizeRule(c));
                    // Remove messages from rules, but allow them to be set separately
                    delete g.messages;
                    f[d.name] = g;
                    if (c.messages) {
                        e.messages[d.name] = a.extend(e.messages[d.name], c.messages);
                    }
                    break;

                  case "remove":
                    if (!c) {
                        delete f[d.name];
                        return g;
                    }
                    j = {};
                    a.each(c.split(/\s/), function(b, c) {
                        j[c] = g[c];
                        delete g[c];
                        if (c === "required") {
                            a(d).removeAttr("aria-required");
                        }
                    });
                    return j;
                }
            }
            h = a.validator.normalizeRules(a.extend({}, a.validator.classRules(d), a.validator.attributeRules(d), a.validator.dataRules(d), a.validator.staticRules(d)), d);
            // Make sure required is at front
            if (h.required) {
                i = h.required;
                delete h.required;
                h = a.extend({
                    required: i
                }, h);
                a(d).attr("aria-required", "true");
            }
            // Make sure remote is at back
            if (h.remote) {
                i = h.remote;
                delete h.remote;
                h = a.extend(h, {
                    remote: i
                });
            }
            return h;
        }
    });
    // Custom selectors
    a.extend(a.expr.pseudos || a.expr[":"], {
        // '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support
        // http://jqueryvalidation.org/blank-selector/
        blank: function(b) {
            return !a.trim("" + a(b).val());
        },
        // http://jqueryvalidation.org/filled-selector/
        filled: function(b) {
            var c = a(b).val();
            return c !== null && !!a.trim("" + c);
        },
        // http://jqueryvalidation.org/unchecked-selector/
        unchecked: function(b) {
            return !a(b).prop("checked");
        }
    });
    // Constructor for validator
    a.validator = function(b, c) {
        this.settings = a.extend(true, {}, a.validator.defaults, b);
        this.currentForm = c;
        this.init();
    };
    // http://jqueryvalidation.org/jQuery.validator.format/
    a.validator.format = function(b, c) {
        if (arguments.length === 1) {
            return function() {
                var c = a.makeArray(arguments);
                c.unshift(b);
                return a.validator.format.apply(this, c);
            };
        }
        if (c === undefined) {
            return b;
        }
        if (arguments.length > 2 && c.constructor !== Array) {
            c = a.makeArray(arguments).slice(1);
        }
        if (c.constructor !== Array) {
            c = [ c ];
        }
        a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
                return c;
            });
        });
        return b;
    };
    a.extend(a.validator, {
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
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: true,
            ignore: ":hidden",
            ignoreTitle: false,
            onfocusin: function(a) {
                this.lastActive = a;
                // Hide error label and remove error class on focus if enabled
                if (this.settings.focusCleanup) {
                    if (this.settings.unhighlight) {
                        this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass);
                    }
                    this.hideThese(this.errorsFor(a));
                }
            },
            onfocusout: function(a) {
                if (!this.checkable(a) && (a.name in this.submitted || !this.optional(a))) {
                    this.element(a);
                }
            },
            onkeyup: function(b, c) {
                // Avoid revalidate the field when pressing one of the following keys
                // Shift       => 16
                // Ctrl        => 17
                // Alt         => 18
                // Caps lock   => 20
                // End         => 35
                // Home        => 36
                // Left arrow  => 37
                // Up arrow    => 38
                // Right arrow => 39
                // Down arrow  => 40
                // Insert      => 45
                // Num lock    => 144
                // AltGr key   => 225
                var d = [ 16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225 ];
                if (c.which === 9 && this.elementValue(b) === "" || a.inArray(c.keyCode, d) !== -1) {
                    return;
                } else if (b.name in this.submitted || b.name in this.invalid) {
                    this.element(b);
                }
            },
            onclick: function(a) {
                // Click on selects, radiobuttons and checkboxes
                if (a.name in this.submitted) {
                    this.element(a);
                } else if (a.parentNode.name in this.submitted) {
                    this.element(a.parentNode);
                }
            },
            highlight: function(b, c, d) {
                if (b.type === "radio") {
                    this.findByName(b.name).addClass(c).removeClass(d);
                } else {
                    a(b).addClass(c).removeClass(d);
                }
            },
            unhighlight: function(b, c, d) {
                if (b.type === "radio") {
                    this.findByName(b.name).removeClass(c).addClass(d);
                } else {
                    a(b).removeClass(c).addClass(d);
                }
            }
        },
        // http://jqueryvalidation.org/jQuery.validator.setDefaults/
        setDefaults: function(b) {
            a.extend(a.validator.defaults, b);
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
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}."),
            step: a.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: false,
        prototype: {
            init: function() {
                this.labelContainer = a(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm);
                this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var b = this.groups = {}, c;
                a.each(this.settings.groups, function(c, d) {
                    if (typeof d === "string") {
                        d = d.split(/\s/);
                    }
                    a.each(d, function(a, d) {
                        b[d] = c;
                    });
                });
                c = this.settings.rules;
                a.each(c, function(b, d) {
                    c[b] = a.validator.normalizeRule(d);
                });
                function d(b) {
                    // Set form expando on contenteditable
                    if (!this.form && this.hasAttribute("contenteditable")) {
                        this.form = a(this).closest("form")[0];
                    }
                    var c = a.data(this.form, "validator"), d = "on" + b.type.replace(/^validate/, ""), e = c.settings;
                    if (e[d] && !a(this).is(e.ignore)) {
                        e[d].call(c, this, b);
                    }
                }
                a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " + "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " + "[type='radio'], [type='checkbox'], [contenteditable], [type='button']", d).on("click.validate", "select, option, [type='radio'], [type='checkbox']", d);
                if (this.settings.invalidHandler) {
                    a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                }
                // Add aria-required to any Static/Data/Class required fields before first validation
                // Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
                a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
            },
            // http://jqueryvalidation.org/Validator.form/
            form: function() {
                this.checkForm();
                a.extend(this.submitted, this.errorMap);
                this.invalid = a.extend({}, this.errorMap);
                if (!this.valid()) {
                    a(this.currentForm).triggerHandler("invalid-form", [ this ]);
                }
                this.showErrors();
                return this.valid();
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) {
                    this.check(b[a]);
                }
                return this.valid();
            },
            // http://jqueryvalidation.org/Validator.element/
            element: function(b) {
                var c = this.clean(b), d = this.validationTargetFor(c), e = this, f = true, g, h;
                if (d === undefined) {
                    delete this.invalid[c.name];
                } else {
                    this.prepareElement(d);
                    this.currentElements = a(d);
                    // If this element is grouped, then validate all group elements already
                    // containing a value
                    h = this.groups[d.name];
                    if (h) {
                        a.each(this.groups, function(a, b) {
                            if (b === h && a !== d.name) {
                                c = e.validationTargetFor(e.clean(e.findByName(a)));
                                if (c && c.name in e.invalid) {
                                    e.currentElements.push(c);
                                    f = e.check(c) && f;
                                }
                            }
                        });
                    }
                    g = this.check(d) !== false;
                    f = f && g;
                    if (g) {
                        this.invalid[d.name] = false;
                    } else {
                        this.invalid[d.name] = true;
                    }
                    if (!this.numberOfInvalids()) {
                        // Hide error containers on last error
                        this.toHide = this.toHide.add(this.containers);
                    }
                    this.showErrors();
                    // Add aria-invalid status for screen readers
                    a(b).attr("aria-invalid", !g);
                }
                return f;
            },
            // http://jqueryvalidation.org/Validator.showErrors/
            showErrors: function(b) {
                if (b) {
                    var c = this;
                    // Add items to error list and map
                    a.extend(this.errorMap, b);
                    this.errorList = a.map(this.errorMap, function(a, b) {
                        return {
                            message: a,
                            element: c.findByName(b)[0]
                        };
                    });
                    // Remove items from success list
                    this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b);
                    });
                }
                if (this.settings.showErrors) {
                    this.settings.showErrors.call(this, this.errorMap, this.errorList);
                } else {
                    this.defaultShowErrors();
                }
            },
            // http://jqueryvalidation.org/Validator.resetForm/
            resetForm: function() {
                if (a.fn.resetForm) {
                    a(this.currentForm).resetForm();
                }
                this.invalid = {};
                this.submitted = {};
                this.prepareForm();
                this.hideErrors();
                var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(b);
            },
            resetElements: function(a) {
                var b;
                if (this.settings.unhighlight) {
                    for (b = 0; a[b]; b++) {
                        this.settings.unhighlight.call(this, a[b], this.settings.errorClass, "");
                        this.findByName(a[b].name).removeClass(this.settings.validClass);
                    }
                } else {
                    a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
                }
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid);
            },
            objectLength: function(a) {
                /* jshint unused: false */
                var b = 0, c;
                for (c in a) {
                    if (a[c]) {
                        b++;
                    }
                }
                return b;
            },
            hideErrors: function() {
                this.hideThese(this.toHide);
            },
            hideThese: function(a) {
                a.not(this.containers).text("");
                this.addWrapper(a).hide();
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
                        a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
                    } catch (a) {}
                }
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && a.grep(this.errorList, function(a) {
                    return a.element.name === b.name;
                }).length === 1 && b;
            },
            elements: function() {
                var b = this, c = {};
                // Select all valid inputs inside the form (no submit or reset buttons)
                return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var d = this.name || a(this).attr("name");
                    // For contenteditable
                    if (!d && b.settings.debug && window.console) {
                        console.error("%o has no name assigned", this);
                    }
                    // Set form expando on contenteditable
                    if (this.hasAttribute("contenteditable")) {
                        this.form = a(this).closest("form")[0];
                    }
                    // Select only the first element for each name, and only those with rules specified
                    if (d in c || !b.objectLength(a(this).rules())) {
                        return false;
                    }
                    c[d] = true;
                    return true;
                });
            },
            clean: function(b) {
                return a(b)[0];
            },
            errors: function() {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext);
            },
            resetInternals: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = a([]);
                this.toHide = a([]);
            },
            reset: function() {
                this.resetInternals();
                this.currentElements = a([]);
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers);
            },
            prepareElement: function(a) {
                this.reset();
                this.toHide = this.errorsFor(a);
            },
            elementValue: function(b) {
                var c = a(b), d = b.type, e, f;
                if (d === "radio" || d === "checkbox") {
                    return this.findByName(b.name).filter(":checked").val();
                } else if (d === "number" && typeof b.validity !== "undefined") {
                    return b.validity.badInput ? "NaN" : c.val();
                }
                if (b.hasAttribute("contenteditable")) {
                    e = c.text();
                } else {
                    e = c.val();
                }
                if (d === "file") {
                    // Modern browser (chrome & safari)
                    if (e.substr(0, 12) === "C:\\fakepath\\") {
                        return e.substr(12);
                    }
                    // Legacy browsers
                    // Unix-based path
                    f = e.lastIndexOf("/");
                    if (f >= 0) {
                        return e.substr(f + 1);
                    }
                    // Windows-based path
                    f = e.lastIndexOf("\\");
                    if (f >= 0) {
                        return e.substr(f + 1);
                    }
                    // Just the file name
                    return e;
                }
                if (typeof e === "string") {
                    return e.replace(/\r/g, "");
                }
                return e;
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c = a(b).rules(), d = a.map(c, function(a, b) {
                    return b;
                }).length, e = false, f = this.elementValue(b), g, h, i;
                // If a normalizer is defined for this element, then
                // call it to retreive the changed value instead
                // of using the real one.
                // Note that `this` in the normalizer is `element`.
                if (typeof c.normalizer === "function") {
                    f = c.normalizer.call(b, f);
                    if (typeof f !== "string") {
                        throw new TypeError("The normalizer should return a string value.");
                    }
                    // Delete the normalizer from rules to avoid treating
                    // it as a pre-defined method.
                    delete c.normalizer;
                }
                for (h in c) {
                    i = {
                        method: h,
                        parameters: c[h]
                    };
                    try {
                        g = a.validator.methods[h].call(this, f, b, i.parameters);
                        // If a method indicates that the field is optional and therefore valid,
                        // don't mark it as valid when there are no other rules
                        if (g === "dependency-mismatch" && d === 1) {
                            e = true;
                            continue;
                        }
                        e = false;
                        if (g === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(b));
                            return;
                        }
                        if (!g) {
                            this.formatAndAdd(b, i);
                            return false;
                        }
                    } catch (a) {
                        if (this.settings.debug && window.console) {
                            console.log("Exception occurred when checking element " + b.id + ", check the '" + i.method + "' method.", a);
                        }
                        if (a instanceof TypeError) {
                            a.message += ".  Exception occurred when checking element " + b.id + ", check the '" + i.method + "' method.";
                        }
                        throw a;
                    }
                }
                if (e) {
                    return;
                }
                if (this.objectLength(c)) {
                    this.successList.push(b);
                }
                return true;
            },
            // Return the custom message for the given element and validation method
            // specified in the element's HTML5 data attribute
            // return the generic message if present and no method specific message is present
            customDataMessage: function(b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg");
            },
            // Return the custom message for the given element name and validation method
            customMessage: function(a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b]);
            },
            // Return the first defined argument, allowing empty strings
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++) {
                    if (arguments[a] !== undefined) {
                        return arguments[a];
                    }
                }
                return undefined;
            },
            // The second parameter 'rule' used to be a string, and extended to an object literal
            // of the following form:
            // rule = {
            //     method: "method name",
            //     parameters: "the given method parameters"
            // }
            //
            // The old behavior still supported, kept to maintain backward compatibility with
            // old code, and will be removed in the next major release.
            defaultMessage: function(b, c) {
                if (typeof c === "string") {
                    c = {
                        method: c
                    };
                }
                var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), // 'title' is never undefined, so handle empty string as undefined
                !this.settings.ignoreTitle && b.title || undefined, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"), e = /\$?\{(\d+)\}/g;
                if (typeof d === "function") {
                    d = d.call(this, c.parameters, b);
                } else if (e.test(d)) {
                    d = a.validator.format(d.replace(e, "{$1}"), c.parameters);
                }
                return d;
            },
            formatAndAdd: function(a, b) {
                var c = this.defaultMessage(a, b);
                this.errorList.push({
                    message: c,
                    element: a,
                    method: b.method
                });
                this.errorMap[a.name] = c;
                this.submitted[a.name] = c;
            },
            addWrapper: function(a) {
                if (this.settings.wrapper) {
                    a = a.add(a.parent(this.settings.wrapper));
                }
                return a;
            },
            defaultShowErrors: function() {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++) {
                    c = this.errorList[a];
                    if (this.settings.highlight) {
                        this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass);
                    }
                    this.showLabel(c.element, c.message);
                }
                if (this.errorList.length) {
                    this.toShow = this.toShow.add(this.containers);
                }
                if (this.settings.success) {
                    for (a = 0; this.successList[a]; a++) {
                        this.showLabel(this.successList[a]);
                    }
                }
                if (this.settings.unhighlight) {
                    for (a = 0, b = this.validElements(); b[a]; a++) {
                        this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
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
                return a(this.errorList).map(function() {
                    return this.element;
                });
            },
            showLabel: function(b, c) {
                var d, e, f, g, h = this.errorsFor(b), i = this.idOrName(b), j = a(b).attr("aria-describedby");
                if (h.length) {
                    // Refresh error/success class
                    h.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                    // Replace message on existing label
                    h.html(c);
                } else {
                    // Create error element
                    h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || "");
                    // Maintain reference to the element to be placed into the DOM
                    d = h;
                    if (this.settings.wrapper) {
                        // Make sure the element is visible, even in IE
                        // actually showing the wrapped element is handled elsewhere
                        d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                    }
                    if (this.labelContainer.length) {
                        this.labelContainer.append(d);
                    } else if (this.settings.errorPlacement) {
                        this.settings.errorPlacement.call(this, d, a(b));
                    } else {
                        d.insertAfter(b);
                    }
                    // Link error back to the element
                    if (h.is("label")) {
                        // If the error is a label, then associate using 'for'
                        h.attr("for", i);
                    } else if (h.parents("label[for='" + this.escapeCssMeta(i) + "']").length === 0) {
                        f = h.attr("id");
                        // Respect existing non-error aria-describedby
                        if (!j) {
                            j = f;
                        } else if (!j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b"))) {
                            // Add to end of list if not already present
                            j += " " + f;
                        }
                        a(b).attr("aria-describedby", j);
                        // If this element is grouped, then assign to all elements in the same group
                        e = this.groups[b.name];
                        if (e) {
                            g = this;
                            a.each(g.groups, function(b, c) {
                                if (c === e) {
                                    a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"));
                                }
                            });
                        }
                    }
                }
                if (!c && this.settings.success) {
                    h.text("");
                    if (typeof this.settings.success === "string") {
                        h.addClass(this.settings.success);
                    } else {
                        this.settings.success(h, b);
                    }
                }
                this.toShow = this.toShow.add(h);
            },
            errorsFor: function(b) {
                var c = this.escapeCssMeta(this.idOrName(b)), d = a(b).attr("aria-describedby"), e = "label[for='" + c + "'], label[for='" + c + "'] *";
                // 'aria-describedby' should directly reference the error element
                if (d) {
                    e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #");
                }
                return this.errors().filter(e);
            },
            // See https://api.jquery.com/category/selectors/, for CSS
            // meta-characters that should be escaped in order to be used with JQuery
            // as a literal part of a name/id or any selector.
            escapeCssMeta: function(a) {
                return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name);
            },
            validationTargetFor: function(b) {
                // If radio/checkbox, validate first element in group instead
                if (this.checkable(b)) {
                    b = this.findByName(b.name);
                }
                // Always apply ignore filter
                return a(b).not(this.settings.ignore)[0];
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type);
            },
            findByName: function(b) {
                return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']");
            },
            getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                  case "select":
                    return a("option:selected", c).length;

                  case "input":
                    if (this.checkable(c)) {
                        return this.findByName(c.name).filter(":checked").length;
                    }
                }
                return b.length;
            },
            depend: function(a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : true;
            },
            dependTypes: {
                boolean: function(a) {
                    return a;
                },
                string: function(b, c) {
                    return !!a(b, c.form).length;
                },
                function: function(a, b) {
                    return a(b);
                }
            },
            optional: function(b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch";
            },
            startRequest: function(b) {
                if (!this.pending[b.name]) {
                    this.pendingRequest++;
                    a(b).addClass(this.settings.pendingClass);
                    this.pending[b.name] = true;
                }
            },
            stopRequest: function(b, c) {
                this.pendingRequest--;
                // Sometimes synchronization fails, make sure pendingRequest is never < 0
                if (this.pendingRequest < 0) {
                    this.pendingRequest = 0;
                }
                delete this.pending[b.name];
                a(b).removeClass(this.settings.pendingClass);
                if (c && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
                    a(this.currentForm).submit();
                    this.formSubmitted = false;
                } else if (!c && this.pendingRequest === 0 && this.formSubmitted) {
                    a(this.currentForm).triggerHandler("invalid-form", [ this ]);
                    this.formSubmitted = false;
                }
            },
            previousValue: function(b, c) {
                c = typeof c === "string" && c || "remote";
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(b, {
                        method: c
                    })
                });
            },
            // Cleans up all forms and elements, removes validator-specific events
            destroy: function() {
                this.resetForm();
                a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur");
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
        addClassRules: function(b, c) {
            if (b.constructor === String) {
                this.classRuleSettings[b] = c;
            } else {
                a.extend(this.classRuleSettings, b);
            }
        },
        classRules: function(b) {
            var c = {}, d = a(b).attr("class");
            if (d) {
                a.each(d.split(" "), function() {
                    if (this in a.validator.classRuleSettings) {
                        a.extend(c, a.validator.classRuleSettings[this]);
                    }
                });
            }
            return c;
        },
        normalizeAttributeRule: function(a, b, c, d) {
            // Convert the value to a number for number inputs, and for text for backwards compability
            // allows type="date" and others to be compared as strings
            if (/min|max|step/.test(c) && (b === null || /number|range|text/.test(b))) {
                d = Number(d);
                // Support Opera Mini, which returns NaN for undefined minlength
                if (isNaN(d)) {
                    d = undefined;
                }
            }
            if (d || d === 0) {
                a[c] = d;
            } else if (b === c && b !== "range") {
                // Exception: the jquery validate 'range' method
                // does not test for the html5 'range' type
                a[c] = true;
            }
        },
        attributeRules: function(b) {
            var c = {}, d = a(b), e = b.getAttribute("type"), f, g;
            for (f in a.validator.methods) {
                // Support for <input required> in both html5 and older browsers
                if (f === "required") {
                    g = b.getAttribute(f);
                    // Some browsers return an empty string for the required attribute
                    // and non-HTML5 browsers might have required="" markup
                    if (g === "") {
                        g = true;
                    }
                    // Force non-HTML5 browsers to return bool
                    g = !!g;
                } else {
                    g = d.attr(f);
                }
                this.normalizeAttributeRule(c, e, f, g);
            }
            // 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
            if (c.maxlength && /-1|2147483647|524288/.test(c.maxlength)) {
                delete c.maxlength;
            }
            return c;
        },
        dataRules: function(b) {
            var c = {}, d = a(b), e = b.getAttribute("type"), f, g;
            for (f in a.validator.methods) {
                g = d.data("rule" + f.charAt(0).toUpperCase() + f.substring(1).toLowerCase());
                this.normalizeAttributeRule(c, e, f, g);
            }
            return c;
        },
        staticRules: function(b) {
            var c = {}, d = a.data(b.form, "validator");
            if (d.settings.rules) {
                c = a.validator.normalizeRule(d.settings.rules[b.name]) || {};
            }
            return c;
        },
        normalizeRules: function(b, c) {
            // Handle dependency check
            a.each(b, function(d, e) {
                // Ignore rule when param is explicitly false, eg. required:false
                if (e === false) {
                    delete b[d];
                    return;
                }
                if (e.param || e.depends) {
                    var f = true;
                    switch (typeof e.depends) {
                      case "string":
                        f = !!a(e.depends, c.form).length;
                        break;

                      case "function":
                        f = e.depends.call(c, c);
                        break;
                    }
                    if (f) {
                        b[d] = e.param !== undefined ? e.param : true;
                    } else {
                        a.data(c.form, "validator").resetElements(a(c));
                        delete b[d];
                    }
                }
            });
            // Evaluate parameters
            a.each(b, function(d, e) {
                b[d] = a.isFunction(e) && d !== "normalizer" ? e(c) : e;
            });
            // Clean number parameters
            a.each([ "minlength", "maxlength" ], function() {
                if (b[this]) {
                    b[this] = Number(b[this]);
                }
            });
            a.each([ "rangelength", "range" ], function() {
                var c;
                if (b[this]) {
                    if (a.isArray(b[this])) {
                        b[this] = [ Number(b[this][0]), Number(b[this][1]) ];
                    } else if (typeof b[this] === "string") {
                        c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
                        b[this] = [ Number(c[0]), Number(c[1]) ];
                    }
                }
            });
            if (a.validator.autoCreateRanges) {
                // Auto-create ranges
                if (b.min != null && b.max != null) {
                    b.range = [ b.min, b.max ];
                    delete b.min;
                    delete b.max;
                }
                if (b.minlength != null && b.maxlength != null) {
                    b.rangelength = [ b.minlength, b.maxlength ];
                    delete b.minlength;
                    delete b.maxlength;
                }
            }
            return b;
        },
        // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
        normalizeRule: function(b) {
            if (typeof b === "string") {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = true;
                });
                b = c;
            }
            return b;
        },
        // http://jqueryvalidation.org/jQuery.validator.addMethod/
        addMethod: function(b, c, d) {
            a.validator.methods[b] = c;
            a.validator.messages[b] = d !== undefined ? d : a.validator.messages[b];
            if (c.length < 3) {
                a.validator.addClassRules(b, a.validator.normalizeRule(b));
            }
        },
        // http://jqueryvalidation.org/jQuery.validator.methods/
        methods: {
            // http://jqueryvalidation.org/required-method/
            required: function(b, c, d) {
                // Check if dependency is met
                if (!this.depend(d, c)) {
                    return "dependency-mismatch";
                }
                if (c.nodeName.toLowerCase() === "select") {
                    // Could be an array for select-multiple or a string, both are fine this way
                    var e = a(c).val();
                    return e && e.length > 0;
                }
                if (this.checkable(c)) {
                    return this.getLength(b, c) > 0;
                }
                return b.length > 0;
            },
            // http://jqueryvalidation.org/email-method/
            email: function(a, b) {
                // From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
                // Retrieved 2014-01-14
                // If you have a problem with this implementation, report a bug against the above spec
                // Or use custom methods to implement your own email validation
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a);
            },
            // http://jqueryvalidation.org/url-method/
            url: function(a, b) {
                // Copyright (c) 2010-2013 Diego Perini, MIT licensed
                // https://gist.github.com/dperini/729294
                // see also https://mathiasbynens.be/demo/url-regex
                // modified to allow protocol-relative URLs
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a);
            },
            // http://jqueryvalidation.org/date-method/
            date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString());
            },
            // http://jqueryvalidation.org/dateISO-method/
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a);
            },
            // http://jqueryvalidation.org/number-method/
            number: function(a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a);
            },
            // http://jqueryvalidation.org/digits-method/
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a);
            },
            // http://jqueryvalidation.org/minlength-method/
            minlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d;
            },
            // http://jqueryvalidation.org/maxlength-method/
            maxlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e <= d;
            },
            // http://jqueryvalidation.org/rangelength-method/
            rangelength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d[0] && e <= d[1];
            },
            // http://jqueryvalidation.org/min-method/
            min: function(a, b, c) {
                return this.optional(b) || a >= c;
            },
            // http://jqueryvalidation.org/max-method/
            max: function(a, b, c) {
                return this.optional(b) || a <= c;
            },
            // http://jqueryvalidation.org/range-method/
            range: function(a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1];
            },
            // http://jqueryvalidation.org/step-method/
            step: function(b, c, d) {
                var e = a(c).attr("type"), f = "Step attribute on input type " + e + " is not supported.", g = [ "text", "number", "range" ], h = new RegExp("\\b" + e + "\\b"), i = e && !h.test(g.join()), j = function(a) {
                    var b = ("" + a).match(/(?:\.(\d+))?$/);
                    if (!b) {
                        return 0;
                    }
                    // Number of digits right of decimal point.
                    return b[1] ? b[1].length : 0;
                }, k = function(a) {
                    return Math.round(a * Math.pow(10, m));
                }, l = true, m;
                // Works only for text, number and range input types
                // TODO find a way to support input types date, datetime, datetime-local, month, time and week
                if (i) {
                    throw new Error(f);
                }
                m = j(d);
                // Value can't have too many decimals
                if (j(b) > m || k(b) % k(d) !== 0) {
                    l = false;
                }
                return this.optional(c) || l;
            },
            // http://jqueryvalidation.org/equalTo-method/
            equalTo: function(b, c, d) {
                // Bind to the blur event of the target in order to revalidate whenever the target field is updated
                var e = a(d);
                if (this.settings.onfocusout && e.not(".validate-equalTo-blur").length) {
                    e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                        a(c).valid();
                    });
                }
                return b === e.val();
            },
            // http://jqueryvalidation.org/remote-method/
            remote: function(b, c, d, e) {
                if (this.optional(c)) {
                    return "dependency-mismatch";
                }
                e = typeof e === "string" && e || "remote";
                var f = this.previousValue(c, e), g, h, i;
                if (!this.settings.messages[c.name]) {
                    this.settings.messages[c.name] = {};
                }
                f.originalMessage = f.originalMessage || this.settings.messages[c.name][e];
                this.settings.messages[c.name][e] = f.message;
                d = typeof d === "string" && {
                    url: d
                } || d;
                i = a.param(a.extend({
                    data: b
                }, d.data));
                if (f.old === i) {
                    return f.valid;
                }
                f.old = i;
                g = this;
                this.startRequest(c);
                h = {};
                h[c.name] = b;
                a.ajax(a.extend(true, {
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: h,
                    context: g.currentForm,
                    success: function(a) {
                        var d = a === true || a === "true", h, i, j;
                        g.settings.messages[c.name][e] = f.originalMessage;
                        if (d) {
                            j = g.formSubmitted;
                            g.resetInternals();
                            g.toHide = g.errorsFor(c);
                            g.formSubmitted = j;
                            g.successList.push(c);
                            g.invalid[c.name] = false;
                            g.showErrors();
                        } else {
                            h = {};
                            i = a || g.defaultMessage(c, {
                                method: e,
                                parameters: b
                            });
                            h[c.name] = f.message = i;
                            g.invalid[c.name] = true;
                            g.showErrors(h);
                        }
                        f.valid = d;
                        g.stopRequest(c, d);
                    }
                }, d));
                return "pending";
            }
        }
    });
    // Ajax mode: abort
    // usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
    // if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()
    var b = {}, c;
    // Use a prefilter if available (1.5+)
    if (a.ajaxPrefilter) {
        a.ajaxPrefilter(function(a, c, d) {
            var e = a.port;
            if (a.mode === "abort") {
                if (b[e]) {
                    b[e].abort();
                }
                b[e] = d;
            }
        });
    } else {
        // Proxy ajax
        c = a.ajax;
        a.ajax = function(d) {
            var e = ("mode" in d ? d : a.ajaxSettings).mode, f = ("port" in d ? d : a.ajaxSettings).port;
            if (e === "abort") {
                if (b[f]) {
                    b[f].abort();
                }
                b[f] = c.apply(this, arguments);
                return b[f];
            }
            return c.apply(this, arguments);
        };
    }
    return a;
});