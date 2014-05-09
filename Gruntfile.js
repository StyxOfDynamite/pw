module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'css/style.css': 'sass/base.scss'
                }
            }
        },
        uglify: {
            options: {
                mangle: {
                    except: ['jQuery']
                }
            },
            my_target: {
                files: {
                    'js/passwordField.min.js': ['js/plugin.js']
                }
            },
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'css/',
                src: ['*.css', '!*.min.css'],
                dest: 'css/',
                ext: '.min.css'
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['watch']);
}