// Responsive images
// =================

'use strict';

module.exports = {

    options: {
      quality: 80,
      sizes: [
        {
          name: "xs",
          width: 400,
          height: 225
        },
        {
          name: "sm",
          width: 768,
          height: 432
        },
        {
          name: "md",
          width: 1024,
          height: 576
        },
        {
          name: "lg",
          width: 1300,
          height: 731
        },
        {
          name: "xl",
          width: 1600,
          height: 900
        }
      ]
    },

    files: {
      expand: true,
      src: ['**.jpg'],
      cwd: 'dist/img/content-default/',
      dest: 'dist/img/responsive-images/'
    }

};
