
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: [
                    'web/app/themes/{{SITE_NAME_SLUG}}/sass/*.scss',
                    'web/app/themes/{{SITE_NAME_SLUG}}/sass/**/*.scss'
                ],
                tasks: ['sass:production']
            }
        },
        sass: {
            options: {
                includePaths: [
                    'web/app/themes/{{SITE_NAME_SLUG}}/sass/*.scss',
                    'web/app/themes/{{SITE_NAME_SLUG}}/sass/**/*.scss'
                ]
            },
            production: {
                options: {
                    outputStyle: 'compressed',
                    sourceMap: true,
                    precision: 4
                },
                files: {
                    'web/app/themes/{{SITE_NAME_SLUG}}/style.css': 'web/app/themes/{{SITE_NAME_SLUG}}/scss/_main.scss'
                }
            }
        },
        imagemin: {
            theme: {
                files: [
                    {
                        expand: true,
                        cwd: "web/app/themes/{{SITE_NAME_SLUG}}/images/",
                        src: "web/app/themes/{{SITE_NAME_SLUG}}/**/*.{png,jpg}",
                        dest: "web/app/themes/{{SITE_NAME_SLUG}}/images/"
                    }
                ]
            }
        },
        autoprefixer: {
            multiple_files: {
                src: "web/app/themes/{{SITE_NAME_SLUG}}/style.css"
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-contrib-imagemin");
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('default', ['sass:production', 'imagemin', 'autoprefixer', 'watch']);
};