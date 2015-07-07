module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        browserify: {
            dist: {
                files: {
                    'dist/stackblur.js': ['src/stackblur.js'],
                },
                options: {
                    browserifyOptions: {
                        'standalone': 'StackBlur'
                    }
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    'dist/stackblur.min.js': ['dist/stackblur.js']
                }
            }
        }

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['browserify', 'uglify']);

};
