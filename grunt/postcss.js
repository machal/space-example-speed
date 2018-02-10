// PostCSS
// =======

'use strict';

module.exports = {

  default: {
    options: {
      map: true,
      processors: [
        // pridani vendor prefixu
        require('autoprefixer')(),
        // media queries z px do em
        require('postcss-em-media-query')({ }),
        //  minifikace CSS
        require('cssnano')()
      ]
    },
    dist: {
      src: 'dist/css/style.css'
    }
  }

};
