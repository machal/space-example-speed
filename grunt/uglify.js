// Uglify - zmenseni a spojovani JS
// ================================

'use strict';

module.exports = {

    beautify: {
      files: {
        'dist/js/script.js':
        [
          'node_modules/jquery/dist/jquery.js',
          'node_modules/fancybox/dist/js/jquery.fancybox.js',
          // 'node_modules/ajaxInclude/dist/ajaxInclude.js',
          'src/js/index.js'
        ]
      },
      options: {
        beautify: true,
        compress: false
      }
    },

    minify: {
      files: {
        'dist/js/script.min.js':
          'dist/js/script.js'
      }
    }

};
