// LESS -> CSS
// ===========

'use strict';

module.exports = {

  default: {
    files: {
      'dist/css/style.css': 'src/less/index.less'
    }
  },

  sourcemaps: {
    files: {
      'dist/css/style.css': 'src/less/index.less'
    },
    options: {
      sourceMap: true,
      sourceMapFilename: 'dist/css/style.css.map',
      sourceMapURL: 'style.css.map',
      sourceMapRootpath: '/',
    }
  }

};



