// Browserify - spojovani JS
// =========================

'use strict';

module.exports = {

    main : {
      files : { 'dist/js/script.js' : ['src/js/index.js'] }
    },
    options: {
      transform: ['debowerify'],
      debug: true
    }

};
