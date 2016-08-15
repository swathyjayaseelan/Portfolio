module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            upscale: true,
            width: 800,
            suffix: '_large_1x',
            quality: 50
          },
        {
            upscale: true,
          width: 1600,
          suffix: '_large_2x',
          quality: 50
        },
        {
            upscale: true,
        width: 1000,
        suffix: '_medium'
      },
      {
          upscale: true,
        width: 500,
        suffix: '_small'
      }]
      },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images/',
          dest: 'images_des/'
        }]
      }
    },
  });
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
