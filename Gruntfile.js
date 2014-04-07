module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    karma:{
	unit:{
	    configFile: 'test/karma.conf.js',
	    background: true
	}
    },

    sass: {
      options: {
        includePaths: ['public/bower_packages/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'public/css/app.css': 'public/scss/app.scss'
        }        
      }
    },

    watch: {
	grunt: { files: ['Gruntfile.js'] },
	karma: {
	    files: ['public/js/**/*.js', 'test/unit/**/*.js'],
	    tasks: ['karma:unit:run']
	},

	sass:{
	    files: 'public/scss/**/*.scss',
	    tasks: ['sass']
	}
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma')

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
  grunt.registerTask('devmode', ['karma:unit', 'watch']);
}	
