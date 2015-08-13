module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.initConfig({
        coffee: {
            compileBareJoined: {
                options: {
                    bare: true,
                    join: true
                },//options
                files: {
                    '_/coffee/js/compiled_coffee.js':'_/coffee/src/*coffee'
                } // files
            }
        },
        jshint: {
            files:  ['_/components/js/*js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        }, // jshint
        uglify: {
            my_target: {
                files: {
                    '_/js/script.js' : ['_/components/js/*js','_/coffee/js/compiled_coffee.js']
                } // files
            } // my_target
        }, // uglify
        compass:{
            dev: {
                options: {
                    config: 'config.rb'
                } //options
            } //dev
        }, //compass
        watch: {
            options: {
                livereload: true
            },
            scripts:{
                files:  ['_/coffee/src/*coffee','_/components/js/*js', ],
                tasks: ['coffee','jshint','uglify']
            },  // scripts
            html:{
                files: ['*.html']
            }, // html
            sass:{
                files: ['_/components/sass/*.scss'],
                tasks: ['compass:dev']
            },//sass
        } // watch
    }) // initConfig
    grunt.registerTask('default','watch');
} //exports