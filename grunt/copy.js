// Copy
// ====

'use strict';

module.exports = {

fancybox: {
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
      respond: {
        files: {
          'dist/js/lib/respond.min.js': 'node_modules/respond.js/dest/respond.min.js'
        }
      },
      picturefill: {
        files: {
          'dist/js/lib/picturefill.min.js': 'node_modules/picturefill/dist/picturefill.min.js'
        }
      },
      fontfaceobserver: {
        files: {
          'dist/js/lib/fontfaceobserver.min.js': 'node_modules/fontfaceobserver/fontfaceobserver.standalone.js'
        }
      },
      ajaxInclude: {
        files: {
          'dist/js/lib/ajaxinclude.min.js': 'node_modules/ajaxInclude/dist/ajaxInclude.min.js'
        }
      }

};



