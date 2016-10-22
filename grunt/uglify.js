// Uglify - zmenseni a spojovani JS
// ================================

'use strict';

module.exports = {

    concat: {
      files: {
        'src/js/all.js':
        [
          'src/js/lib/jquery.js',
          'src/js/lib/jquery.fancybox.js',
          'src/js/lib/respond.js',
          'src/js/lib/picturefill.js',
          'src/js/lib/fontfaceobserver.js',
          'src/js/index.js'
        ]
      },
      options: {
        beautify: true,
        compress: false,
        preserveComments: 'all'
      }
    },

    beautify_and_dist: {
      files: [{
        expand: true,
        cwd: 'src/js/',
        src: '**/*.js',
        dest: 'dist/js/'
      }],
      options: {
        beautify: true,
        compress: false,
        preserveComments: 'all'
      }
    },

    minify: {
      files: [{
        expand: true,
        cwd: 'src/js/',
        src: ['**/*.js'],
        dest: 'dist/js/',
        ext: '.min.js'
      }]
    }

};
