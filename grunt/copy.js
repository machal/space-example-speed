// Copy
// ====

'use strict';

module.exports = {

    fancybox_css_img: {
      files: [
        {
          expand: true,
          cwd: 'node_modules/fancybox/dist/css/',
          src: ['jquery.fancybox.css'],
          dest: 'src/less/lib/',
          rename: function(dest, src) {
            return dest + src.replace(/\.css$/, ".less");
          }
        },
        {
          expand: true,
          cwd: 'node_modules/fancybox/dist/img/',
          src: ['*.*'],
          dest: 'src/img/'
        },
      ]
    },

    fancybox_js: {
      files: {
        'src/js/lib/jquery.fancybox.js':
          'node_modules/fancybox/dist/js/jquery.fancybox.js'
      }
    },

    jquery: {
      files: {
        'src/js/lib/jquery.js':
          'node_modules/jquery/dist/jquery.js'
      }
    },

    respond: {
      files: {
        'src/js/lib/respond.js':
          'node_modules/respond.js/dest/respond.matchmedia.addListener.src.js'
      }
    },

    picturefill: {
      files: {
        'src/js/lib/picturefill.js':
          'node_modules/picturefill/dist/picturefill.js'
      }
    },

    load_css_cssrelpreload: {
      files: {
        'src/js/lib/cssrelpreload.js':
          'node_modules/fg-loadcss/src/cssrelpreload.js'
      }
    },

    load_css: {
      files: {
        'src/js/lib/loadcss.js':
          'node_modules/fg-loadcss/src/loadCSS.js'
      }
    },

    fontfaceobserver: {
      files: {
        'src/js/lib/fontfaceobserver.js':
          'node_modules/fontfaceobserver/fontfaceobserver.standalone.js'
      }
    }

};



