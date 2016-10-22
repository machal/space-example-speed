/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */
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