module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.config("browserify", {
    dist: {
      files: {
        'public/javascripts/index.js': [
          'public/components/angular/angular.js',
          'public/components/angular-route/angular-route.js',
          'public/javascripts/**/*.js',
        ],
      }
    }
  })
  
  grunt.config('cssmin', {
    combine: {
      files: {
        'public/stylesheets/app.min.css': [
          'public/stylesheets/**/*.css',
          'public/components/**/bootstrap.css'
        ]
      }
    }
  });
  
  grunt.config('watch', {
    files: [
      'public/javascripts/**/*.js',
      '!public/javascripts/main.js',
      'public/stylesheets/**/*.css'
    ],
    tasks: ['default']
  });


  grunt.registerTask('clean', 'remove compiled files', function(){
    grunt.file.delete('public/javascripts/index.js');
    grunt.file.delete('public/stylesheets/app.min.css');
  });

  grunt.registerTask('default', 'clean and browserify', ['clean', 'browserify', 'cssmin', 'watch']);

}