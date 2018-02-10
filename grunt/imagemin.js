// ImageMin - zmensovani datoveho objemu obrazku
// =============================================

'use strict';

const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminGuetzli = require('imagemin-guetzli');
const imageminWebp = require('imagemin-webp');

module.exports = {

  // Root
  root: {
    files: [{
      expand: true,
      cwd: 'src/img/',
      src: ['**/*.jpg','**/*.png','**/*.gif'],
      dest: 'dist/img/'
    }]
  },

  // Bitmapy v designu
  bitmap: {
    files: [{
      expand: true,
      cwd: 'src/img/bitmap/',
      src: ['**/*.jpg','**/*.png','**/*.gif'],
      dest: 'dist/img/bitmap/'
    }]
  },

  // Vektory
  vector: {
    files: [{
      expand: true,
      cwd: 'src/img/vector/',
      src: ['**/*.svg'],
      dest: 'dist/img/vector/'
    }]
  },

  // Obsahove obrazky - standardne
  content: {
    files: [{
      expand: true,
      cwd: 'src/img/content/',
      src: ['**/*.jpg'],
      dest: 'dist/img/content-default/'
    }]
  },

  // Obsahove obrazky - ne-progresivni JPG
  content_nonprogressive: {
    options: {
      progressive: false
    },
    files: [{
      expand: true,
      cwd: 'src/img/content/',
      src: ['**/*.jpg'],
      dest: 'dist/img/content-nonprogressive/'
    }]
  },

  // Obsahove obrazky - MozJPEG
  content_mozjpeg: {
    options: {
      use: [imageminMozjpeg()]
    },
    files: [{
      expand: true,
      cwd: 'src/img/content/',
      src: ['**/*.jpg'],
      dest: 'dist/img/content-mozjpeg/'
    }]
  },

  // Obsahove obrazky - Guetzli
  content_guetzli: {
    options: {
      use: [imageminGuetzli()]
    },
    files: [{
      expand: true,
      cwd: 'src/img/content/',
      src: ['**/*.jpg'],
      dest: 'dist/img/content-guetzli/'
    }]
  },

  // Obsahove obrazky - WEBP
  content_webp: {
    options: {
      use: [imageminWebp()]
    },
    files: [{
      expand: true,
      cwd: 'src/img/content/',
      src: ['**/*.jpg'],
      dest: 'dist/img/content-webp/'
    }]
  }


};
