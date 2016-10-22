// ImageMin - zmensovani datoveho objemu obrazku
// =============================================

'use strict';

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
  }

  // Obsahove obrazky - src/img/content/
  // resime pomoci responsive_images

};
