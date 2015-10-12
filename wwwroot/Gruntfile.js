module.exports = function(grunt) {

    var mozjpeg = require('imagemin-mozjpeg');

    // Project configuration.
    grunt.initConfig({
        clean: {
            main: ["dist"]
        },
        htmlmin: {                                // Task
            dev: {
                options: {                          // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: '.',
                    src: 'index.html',
                    dest: 'dist'
                }]
            }
        },
        imagemin: {
            dynamic: {                         // Another target
                options: {                       // Target options
                    optimizationLevel: 3,
                    svgoPlugins: [{ removeViewBox: false }],
                    use: [mozjpeg()]
                },
                files: [{
                    expand: true,
                    src: ['img/*.{png,jpg,gif}'],
                    dest: 'dist/'
                }]
            }
        },
        compress: {
            main: {
                options: {
                    mode: 'gzip'
                },
                expand: true,
                cwd: '.',
                src: ['**/*','!**/img/**' ,'!**/node_modules/**','!**/dist/**','!LICENSE','!README.md','!Gruntfile.js','!index.html','dist/index.html'],
                dest: 'dist/'//,

            }



        },
        copy: {
            main: {
                files: [
                    // includes files within path and its sub-directories
                    {expand: true, src: ['**/*','!**/dist/**','!**/node_modules/**'], dest: 'dist/'}
                ]
            }
        },

        pagespeed: {
            options: {
                nokey: true,
                url: "https://developers.google.com"
            },
            desktop: {
                options: {
                    url: "http://xdevel.com.br",
                    locale: "pt_BR",
                    strategy: "desktop",
                    threshold: 90
                }
            },
            mobile: {
                options: {
                    url: "http://xdevel.com.br",
                    locale: "pt_BR",
                    strategy: "mobile",
                    threshold: 80
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-pagespeed');
    grunt.loadNpmTasks('grunt-contrib-imagemin');


    // Default task(s).
    grunt.registerTask('default', ['clean','copy','htmlmin','imagemin','compress']);

    grunt.registerTask('test', ['pagespeed']);

};