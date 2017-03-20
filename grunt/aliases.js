// Pojmenovane Grunt ulohy
// =======================

'use strict';

module.exports = {

  css: [
    'less:default',
    'postcss'
  ],

  criticalcss: [
    'criticalcss',
  ],

  img: [
    'responsive_images',
    'imagemin',
    'svg2png'
  ],

  js: [
    'uglify'
  ],

  dist: [
    'copy',
    'css',
    'js',
    'img',
    'criticalcss',
  ],

  default: [
    'copy',
    'browserSync',
    'watch'
  ]

};

