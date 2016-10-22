// Uglify - zmenseni a spojovani JS
// ================================

'use strict';

module.exports = {

    mainJS: {
        src: [
          'node_modules/jquery/dist/jquery.js',
          'node_modules/fancybox/dist/js/jquery.fancybox.js',
          'node_modules/ajaxInclude/dist/ajaxInclude.js'
        ],
        dest: 'dist/js/script.min.js'
    }

};
