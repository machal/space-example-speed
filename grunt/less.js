// LESS -> CSS
// ===========

'use strict';

module.exports = {


  default: {
    options: {
      sourceMap: true,
      sourceMapFilename: 'dist/css/bundle/style.css.map',
      sourceMapURL: 'style.css.map',
      sourceMapRootpath: '/',
    },
    files: {
      'dist/css/bundle/style.css': 'src/less/index.less'
    }
  },

  components: {
    files: [{
      expand: true,
      cwd: 'src/less/',
      src: ['**/*.less'],
      dest: 'dist/css/standalone/',
      ext: '.css'
    }]
  }

};



