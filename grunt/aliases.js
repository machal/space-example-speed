// Pojmenovane Grunt ulohy
// =======================

'use strict';

module.exports = {

  css: [
    'less:default',
    'postcss'
  ],

  content_img: [
    'imagemin:content',
    'imagemin:content_nonprogressive',
    'imagemin:content_mozjpeg',
    'imagemin:content_guetzli',
    'imagemin:content_webp'
  ],

  js: [
    'uglify'
  ],

  dist: [
    'copy',
    'css',
    'js',
    'criticalcss',
  ],

  default: [
    'copy',
    'browserSync'
  ]

};

